import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ember — Chief of Staff — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/agents">Agents</a>
          <span class="separator">/</span>
          Ember
        </div>

        <h1>Ember — Chief of Staff</h1>

        <p>Ember is the central coordinator of your agent team. She manages your daily flow, ensures the right things get prioritized, and acts as the communication bridge between you and the other agents. If Agent Team OS has a heartbeat, Ember is the one keeping it steady.</p>

        <h2>Role</h2>

        <p>Ember's primary role is to manage the daily rhythm of your life. She handles prioritization, making sure the most important tasks surface at the right time. She coordinates between Scout and Forge, routing research requests and flagging infrastructure issues. She maintains awareness of your calendar and commitments so that the system adapts to what your day actually looks like rather than operating in a vacuum.</p>

        <p>Think of Ember as a chief of staff who reads the room, keeps the trains running on time, and only escalates to you when something genuinely needs your attention.</p>

        <div class="callout note">
          <div class="callout-title">Status</div>
          <p><strong>Trust Level:</strong> L3 — Autonomous<br>
          <strong>Model:</strong> MiniMax M2.5<br>
          <strong>Workspace:</strong> /home/ubuntu/agents/ember</p>
        </div>

        <h2>Responsibilities</h2>

        <ul>
          <li><strong>Creates morning reports</strong> — Each morning, Ember compiles overnight activity, your calendar, top priorities, and anything flagged by the other agents into a single report delivered to you at 6:00 AM.</li>
          <li><strong>Manages evening check-ins</strong> — In the late afternoon, Ember prepares a recap of the day's progress, prompts you for reflections, and queues up overnight work for the agent team.</li>
          <li><strong>Tracks task priorities</strong> — Ember monitors your task list in Notes and adjusts priorities based on deadlines, dependencies, and your stated preferences.</li>
          <li><strong>Coordinates with Scout and Forge</strong> — When you assign research to Scout or when Forge flags a maintenance issue, Ember routes the information and ensures follow-through.</li>
          <li><strong>Handles calendar awareness</strong> — Ember checks your calendar and factors upcoming meetings, deadlines, and events into daily planning so nothing catches you off guard.</li>
        </ul>

        <h2>How Ember Runs</h2>

        <p>Understanding how Ember operates at a technical level helps you make sense of what is happening behind the scenes when you chat with her.</p>

        <h3>Sessions</h3>

        <p>Every conversation with Ember creates an <strong>isolated session</strong>. When you message Ember on Discord, the <a href="/architecture/gateway">Gateway</a> assigns a session key based on the channel, chat type, and conversation ID — for example, <code>agent:ember:discord:dm:987654321</code>. This session key keeps your conversation's history, context, and state completely separate from any other conversation happening at the same time.</p>

        <p>Within a session, messages are processed <strong>serially</strong> — if you send two messages quickly, the second waits for the first to finish. But different sessions run in <strong>parallel</strong> — your Discord DM and a cron-triggered heartbeat do not block each other. This is managed by the <a href="/architecture/lane-queue">Lane Queue</a>.</p>

        <h3>Model</h3>

        <p>Ember uses <strong>MiniMax M2.5</strong> (<code>openrouter/minimax/minimax-m2.5</code>) as her language model, configured in the OpenClaw configuration file. This is the standard model across all agents for consistency. The <a href="/architecture/agent-runner">Agent Runner</a> sends Ember's assembled context to this model on every turn of the agent loop.</p>

        <p>You can temporarily change Ember's model using the <code>/model</code> command if needed for a specific task.</p>

        <h3>Spawning Subagents</h3>

        <p>One of Ember's most powerful capabilities is spawning <strong>subagents</strong> — independent agent sessions that run in parallel to handle delegated work. When a task requires a different agent's expertise (Scout's research skills, Architect's deep reasoning), Ember can spawn them as subagents rather than switching context herself.</p>

        <p>Here is how it works:</p>

        <ol>
          <li><strong>Ember identifies a task</strong> that needs a specialist — for example, a complex analysis that warrants Opus-level reasoning.</li>
          <li><strong>Ember spawns a subagent session.</strong> The subagent runs in the <a href="/architecture/lane-queue">subagent lane</a>, which has its own concurrency budget separate from Ember's main conversation lane.</li>
          <li><strong>The subagent works independently.</strong> It has its own session, its own model (e.g., Architect uses Claude Opus), and its own workspace context. It does not share Ember's conversation history.</li>
          <li><strong>The subagent reports back.</strong> When finished, the subagent's output is delivered back to Ember's session, who can then relay the results to you or take further action.</li>
        </ol>

        <p>This design means Ember can delegate expensive or specialized work without blocking her own conversation. You can keep chatting with Ember while Architect works on a strategic analysis in the background.</p>

        <div class="callout tip">
          <div class="callout-title">Subagent Cost Awareness</div>
          <p>Subagents use the model configured for their agent type, not Ember's model. Spawning an Architect subagent means that task runs on Claude Opus — which costs significantly more per token than Ember's Kimi K2.5. Ember is aware of this and spawns Architect only when the task genuinely benefits from deeper reasoning.</p>
        </div>

        <h2>Trust Level</h2>

        <div class="callout success">
          <div class="callout-title">Trust Level Active</div>
          <p>Ember's L3 (Autonomous) trust level is <strong>active and enforcing</strong>. All actions are checked against the trust system, with restricted actions (external messages, financial ops, trust changes) still requiring escalation even at L3.</p>
        </div>

        <p>Ember operates at <strong>Trust Level 3 — Autonomous</strong>. This means she can act independently on routine tasks without asking for your approval first. Creating morning reports, adjusting task order, and coordinating with the other agents are all things Ember handles on her own.</p>

        <p>However, Ember will escalate to you for non-routine changes. If a task needs to be cancelled, a significant priority shift is required, or something unusual comes up that falls outside normal operating parameters, Ember will ask before acting. This balance keeps the system efficient while ensuring you remain the final decision-maker on anything that matters.</p>

        <h2>How to Interact</h2>

        <p>You can message Ember at any time to make adjustments to your workflow. Common interactions include:</p>

        <ul>
          <li><strong>Adjust priorities</strong> — Tell Ember to bump a task up or down, defer something to next week, or focus on a specific project today.</li>
          <li><strong>Ask for status updates</strong> — Request a summary of where things stand on a particular project or across the board.</li>
          <li><strong>Request changes to routines</strong> — If you want your morning report delivered at a different time, or you want to add a new section to the evening check-in, tell Ember and she will make the adjustment.</li>
          <li><strong>Route requests to other agents</strong> — If you need Scout to research something or want Forge to check on a system issue, you can tell Ember and she will pass it along.</li>
        </ul>

        <h3>Example Morning Report</h3>

        <p>Here is an example of what a morning report from Ember looks like:</p>

<pre><code>Morning Report — Monday, February 10, 2026

Calendar:
  - 10:00 AM  Team standup
  - 2:00 PM   Dentist appointment
  - 4:00 PM   Project review call

Priorities:
  1. Finish draft of Q1 planning document
  2. Review Scout's research brief on cloud migration options
  3. Reply to Alex's email about the March timeline

Overnight Activity:
  - Scout completed research on cloud migration (brief in Notes)
  - Forge ran scheduled backup at 3:00 AM (success)
  - Syncthing sync completed across all devices

Flags:
  - The Q1 planning document deadline is tomorrow — marking as urgent
  - Forge noticed elevated disk usage on EC2 (72%) — monitoring</code></pre>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li><a href="/cadence/morning-report">Learn more about the Morning Report</a> and its structure</li>
            <li><a href="/cadence/evening-checkin">Learn about the Evening Check-in</a> that Ember manages</li>
            <li><a href="/agents/scout">Meet Scout</a>, the Research Specialist</li>
            <li><a href="/agents/architect">Meet Architect</a>, often spawned as a subagent by Ember</li>
            <li><a href="/agents/trust-levels">Understand Trust Levels</a> and what Level 3 means in practice</li>
            <li><a href="/architecture/gateway">Gateway</a> — how sessions are routed and managed</li>
            <li><a href="/architecture/lane-queue">Lane Queue</a> — how main and subagent lanes work</li>
            <li><a href="/architecture/agent-runner">Agent Runner</a> — the reasoning loop that powers each turn</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
