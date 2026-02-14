import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gateway — OpenClaw Architecture',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/architecture">Architecture</a>
          <span class="separator">/</span>
          Gateway
        </div>

        <h1>Gateway</h1>

        <p>The Gateway is the central server of OpenClaw — the long-running daemon process that coordinates everything. It is the nerve center through which all messages flow, all sessions are managed, and all subsystems are orchestrated. When you run <code>openclaw gateway start</code>, this is what starts.</p>

        <p>Every other component connects to or through the Gateway. Channel Adapters deliver normalized messages to it. The Lane Queue is managed by it. Agent Runners are dispatched from it. The Execution Layer operates within its process context. The Gateway is not just a router — it is the runtime that holds the entire system together.</p>

        <h2>Core Responsibilities</h2>

        <h3>Session Routing</h3>

        <p>When a normalized message arrives from a Channel Adapter, the Gateway must determine <em>which session</em> it belongs to. OpenClaw uses a hierarchical session key format:</p>

        <pre><code>agent:&lt;agentId&gt;:&lt;channel&gt;:&lt;chatType&gt;:&lt;conversationId&gt;</code></pre>

        <p>For example, a Discord DM with Ember might produce the session key <code>agent:ember:discord:dm:987654321</code>, while a Telegram group conversation with the same agent would be <code>agent:ember:telegram:group:123456789</code>.</p>

        <p>The session key determines:</p>
        <ul>
          <li>Which agent handles the conversation (multi-agent setups run separate agents for different purposes)</li>
          <li>Which conversation history is loaded (each session has its own transcript)</li>
          <li>Which lane the message is queued in (sessions are isolated from each other)</li>
          <li>Which workspace and configuration the agent operates with</li>
        </ul>

        <h3>Authentication &amp; Authorization</h3>

        <p>The Gateway manages access control at multiple levels:</p>

        <ul>
          <li><strong>Channel-level auth</strong> — API tokens for each connected platform</li>
          <li><strong>Sender allowlists</strong> — controlling which users can trigger agent responses</li>
          <li><strong>Command gating</strong> — restricting administrative commands to authorized senders</li>
          <li><strong>Rate limiting</strong> — preventing abuse via per-sender rate limits</li>
          <li><strong>WebSocket auth</strong> — token-based authentication for the control UI and API clients</li>
        </ul>

        <h3>Channel Management</h3>

        <p>The Gateway's channel manager coordinates the lifecycle of all Channel Adapters:</p>

        <ul>
          <li>Starting and stopping channel monitors based on configuration</li>
          <li>Handling reconnection when a platform connection drops</li>
          <li>Hot-reloading channel configuration when the config file changes</li>
          <li>Managing multiple accounts per channel (e.g., separate Discord bots for different agents)</li>
        </ul>

        <h3>Configuration &amp; Hot Reload</h3>

        <p>The Gateway watches its configuration file and applies changes without requiring a restart. When you edit the config:</p>

        <ul>
          <li>Channel monitors are started, stopped, or reconfigured as needed</li>
          <li>Agent settings (model, system prompt overrides, tool policies) take effect on the next run</li>
          <li>Lane concurrency limits are updated in real time</li>
          <li>Cron jobs are rescheduled according to the new configuration</li>
        </ul>

        <h3>Cron &amp; Scheduled Tasks</h3>

        <p>The Gateway includes a cron scheduler that triggers agent runs on configurable schedules. Cron jobs run in their own lane (<code>cron</code>) with configurable concurrency, separate from the main message-processing lanes. This ensures that scheduled tasks like heartbeat checks, morning reports, and maintenance jobs don't block user conversations.</p>

        <h3>WebSocket &amp; HTTP API</h3>

        <p>The Gateway exposes a WebSocket server and HTTP API that power:</p>

        <ul>
          <li><strong>Control UI (Web Chat)</strong> — a browser-based interface for chatting with agents and monitoring sessions</li>
          <li><strong>Mobile nodes</strong> — paired iOS devices that extend the agent's capabilities (camera, notifications, location)</li>
          <li><strong>Inter-session communication</strong> — agents can send messages to other sessions, enabling coordination between agents and subagents</li>
          <li><strong>Health monitoring</strong> — status endpoints for uptime checks and diagnostics</li>
          <li><strong>OpenAI-compatible API</strong> — an endpoint that lets external tools interact with OpenClaw using the OpenAI chat completions format</li>
        </ul>

        <h2>How It Works in Code</h2>

        <p>The Gateway implementation lives in <code>src/gateway/</code> and is substantial — it is the largest subsystem in OpenClaw. Key files include:</p>

        <ul>
          <li><code>server.impl.ts</code> — the main server implementation that wires everything together at startup</li>
          <li><code>server-channels.ts</code> — channel monitor lifecycle management</li>
          <li><code>server-chat.ts</code> — agent event handling and run coordination</li>
          <li><code>server-lanes.ts</code> — lane concurrency configuration (bridges to the Lane Queue)</li>
          <li><code>server-cron.ts</code> — cron job scheduling and execution</li>
          <li><code>server-ws-runtime.ts</code> — WebSocket connection handling</li>
          <li><code>server-methods.ts</code> — RPC method handlers for the WebSocket/HTTP API</li>
          <li><code>server-session-key.ts</code> — session key resolution from inbound messages</li>
          <li><code>config-reload.ts</code> — hot-reload logic for configuration changes</li>
        </ul>

        <p>At startup, the Gateway initializes in a specific order: load config → start HTTP/WS server → initialize channel managers → start channel monitors → start cron scheduler → begin health heartbeats. Shutdown reverses this sequence gracefully.</p>

        <div class="callout tip">
          <div class="callout-title">The Gateway Is the Process</div>
          <p>Unlike microservice architectures where routing is a separate service, the OpenClaw Gateway is the entire runtime. Agent Runners, the Lane Queue, tool execution — they all run within the Gateway process. This single-process design keeps latency low, avoids network hops between components, and makes deployment simple: one process, one config file, one log stream. The tradeoff is that everything shares the same Node.js event loop, which is why the Lane Queue's concurrency management is so important.</p>
        </div>

        <div class="action-section">
          <h2>Next</h2>
          <ul>
            <li><a href="/architecture/lane-queue">Lane Queue</a> — how the Gateway serializes work within sessions</li>
            <li><a href="/architecture/channel-adapters">Channel Adapters</a> — what feeds messages into the Gateway</li>
            <li><a href="/architecture">Architecture Overview</a> — see how all five components connect</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
