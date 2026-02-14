import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lane Queue — OpenClaw Architecture',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/architecture">Architecture</a>
          <span class="separator">/</span>
          Lane Queue
        </div>

        <h1>Lane Queue</h1>

        <p>The Lane Queue is OpenClaw's concurrency management system. It answers a deceptively simple question: when two messages arrive at the same time, what happens? The answer is central to the system's reliability — without proper serialization, conversations would corrupt each other's state, tool executions would interleave unpredictably, and the entire system would become unreliable.</p>

        <p>The Lane Queue solves this with a straightforward principle: <strong>serial within a session, parallel across sessions.</strong></p>

        <h2>The Problem It Solves</h2>

        <p>Consider what happens when you send two messages in quick succession to the same agent on Discord:</p>

        <ol>
          <li>Message 1: "Check my email for anything urgent"</li>
          <li>Message 2: "Also, what's the weather in Berlin?"</li>
        </ol>

        <p>Without serialization, both messages would be processed simultaneously. Both would read the same conversation history. Both would append to the session transcript at the same time. The agent might try to execute shell commands from both runs concurrently, producing interleaved output. The conversation history would become corrupted — replies might reference the wrong context, tool results might be attributed to the wrong request.</p>

        <p>The Lane Queue prevents this by ensuring Message 2 waits until Message 1 has fully completed — including all LLM calls, tool executions, and transcript updates — before processing begins.</p>

        <h2>How Lanes Work</h2>

        <p>A <strong>lane</strong> is a named serial queue. Each lane processes tasks one at a time (or up to a configurable concurrency limit). Different lanes operate independently and in parallel.</p>

        <p>OpenClaw uses four types of lanes:</p>

        <table class="ref-table">
          <thead>
            <tr>
              <th>Lane</th>
              <th>Purpose</th>
              <th>Default Concurrency</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Main</strong></td><td>Primary message processing for user conversations</td><td>Configurable (typically 1–4)</td></tr>
            <tr><td><strong>Cron</strong></td><td>Scheduled task execution (heartbeats, reports)</td><td>1</td></tr>
            <tr><td><strong>Subagent</strong></td><td>Subagent spawning and execution</td><td>Configurable</td></tr>
            <tr><td><strong>Nested</strong></td><td>Nested agent invocations within a run</td><td>1</td></tr>
          </tbody>
        </table>

        <p>Within each lane type, individual sessions get their own sub-lane. When a message arrives for session <code>agent:ember:discord:dm:12345</code>, it is enqueued in that session's specific lane: <code>session:agent:ember:discord:dm:12345</code>. A different session's messages go to a different lane and run in parallel.</p>

        <h2>Queuing and Draining</h2>

        <p>When a task is enqueued in a lane, here is what happens:</p>

        <ol class="steps">
          <li><strong>Enqueue.</strong> The task (a function that returns a Promise) is added to the lane's queue along with timing metadata. The queue depth and wait position are logged for diagnostics.</li>
          <li><strong>Check capacity.</strong> If the number of active tasks in the lane is below the concurrency limit, the task starts immediately. Otherwise, it waits.</li>
          <li><strong>Execute.</strong> When the task reaches the front of the queue and capacity is available, it begins execution. The lane tracks it as an active task.</li>
          <li><strong>Complete.</strong> When the task finishes (success or error), it is removed from the active set and the queue drains the next waiting task, if any.</li>
          <li><strong>Warning.</strong> If a task waits longer than a configurable threshold before starting, a diagnostic warning is emitted. This helps identify bottlenecks — for example, a particularly slow agent run blocking subsequent messages.</li>
        </ol>

        <h2>Session-Level Isolation</h2>

        <p>The key insight is that <em>session lanes are named after their session key</em>. This means:</p>

        <ul>
          <li>Your Discord DM with Ember (<code>session:agent:ember:discord:dm:you</code>) and your WhatsApp chat with Ember (<code>session:agent:ember:whatsapp:dm:you</code>) are separate lanes — they run in parallel.</li>
          <li>Your conversation and another user's conversation with the same agent are separate lanes — they never interfere.</li>
          <li>A cron job (heartbeat check) runs in the <code>cron</code> lane — it doesn't block your conversations.</li>
          <li>A subagent spawned by Ember runs in the <code>subagent</code> lane — it has its own concurrency budget.</li>
        </ul>

        <h2>Lane Clearing</h2>

        <p>In some situations, a lane needs to be cleared — all pending tasks are rejected. This happens during:</p>

        <ul>
          <li><strong>Session reset</strong> — when a conversation is reset, queued messages for that session are discarded</li>
          <li><strong>Gateway shutdown</strong> — pending tasks are rejected gracefully during shutdown</li>
          <li><strong>Configuration reload</strong> — when concurrency limits change, the lane state is updated</li>
        </ul>

        <p>Cleared tasks receive a <code>CommandLaneClearedError</code>, which callers can catch and handle appropriately (typically by silently dropping the work).</p>

        <h2>How It Works in Code</h2>

        <p>The Lane Queue is implemented in two key files:</p>

        <ul>
          <li><code>src/process/lanes.ts</code> — defines the <code>CommandLane</code> enum with the four lane types: <code>Main</code>, <code>Cron</code>, <code>Subagent</code>, <code>Nested</code></li>
          <li><code>src/process/command-queue.ts</code> — the queue implementation itself: <code>enqueueCommandInLane()</code> for adding tasks, <code>setCommandLaneConcurrency()</code> for configuring limits, and the internal drain loop that processes queued work</li>
        </ul>

        <p>Session-specific lanes are created dynamically via <code>src/agents/pi-embedded-runner/lanes.ts</code>, which provides <code>resolveSessionLane()</code> and <code>resolveEmbeddedSessionLane()</code> to map session keys to lane names.</p>

        <p>The Gateway applies lane concurrency at startup via <code>server-lanes.ts</code>, reading limits from the configuration file and applying them to each lane type.</p>

        <div class="callout tip">
          <div class="callout-title">Why Not Just Use a Database Lock?</div>
          <p>OpenClaw runs as a single Node.js process, so traditional database-level locking would be overkill. The in-process queue is fast (no network round-trips), simple (just a Map of arrays), and sufficient (there's only one process to coordinate). This is a deliberate architectural choice: the single-process design makes concurrency management trivial compared to distributed systems, at the cost of scaling to a single machine — which is exactly the right tradeoff for a personal AI assistant.</p>
        </div>

        <div class="action-section">
          <h2>Next</h2>
          <ul>
            <li><a href="/architecture/agent-runner">Agent Runner</a> — what happens when a message is dequeued and processed</li>
            <li><a href="/architecture/gateway">Gateway</a> — the server that manages lane configuration</li>
            <li><a href="/architecture">Architecture Overview</a> — see how all five components connect</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
