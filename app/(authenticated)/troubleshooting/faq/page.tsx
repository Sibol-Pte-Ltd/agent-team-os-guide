import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a> / <a href="/troubleshooting">Troubleshooting</a> / FAQ
        </div>

        <h1>FAQ</h1>
        <p>Answers to frequently asked questions about Agent Team OS, covering security, reliability, extensibility, and costs.</p>

        <h3>Can the agents access my personal accounts?</h3>
        <p>No. Agents only access systems that have been explicitly configured for them: LogSeq (via the synced file system), the EC2 instance, and Syncthing. They do not have your passwords, browser sessions, email login, or access to any accounts beyond what you've specifically granted. Each agent operates within the boundaries defined by its trust level and the tools it has been given. If you haven't configured access to a service, agents cannot reach it.</p>

        <h3>What happens if the EC2 instance goes down?</h3>
        <p>Your local LogSeq data remains fully available on your machine. You can continue reading and editing your notes without interruption. What pauses is the agent-side processing: morning reports won't generate, automated tasks won't run, and syncing between your machine and the EC2 instance will stop until the instance comes back online. Forge monitors the instance health and can auto-restart it in many cases. Once the instance is running again, Syncthing will automatically resume syncing any changes that accumulated on either side.</p>

        <h3>Can I add more agents?</h3>
        <p>Yes. The system is designed to be extensible. You can define new agents with their own responsibilities, capabilities, and constraints. Every new agent starts at trust level 0 (Observer), meaning it can only read data and make suggestions. You promote agents to higher trust levels as you build confidence in their behavior. See <a href="/agents">Meet Your Agents</a> for how the existing agents are structured, and <a href="/agents/trust-levels">Trust Levels</a> for the promotion framework.</p>

        <h3>How do I change an agent's trust level?</h3>
        <p>Use the trust system CLI. Trust levels range from 0 (Observer) to 3 (Autonomous), with each level granting progressively more autonomy. Changes take effect immediately.</p>
        <ul>
          <li><strong>Promote:</strong> <code>trust-system.sh escalate &lt;agent&gt; &lt;new-level&gt; &lt;reason&gt;</code></li>
          <li><strong>Demote:</strong> <code>trust-system.sh demote &lt;agent&gt; &lt;new-level&gt; &lt;reason&gt;</code></li>
          <li><strong>Check current level:</strong> <code>trust-system.sh get-level &lt;agent&gt;</code></li>
        </ul>
        <p>Before promoting an agent, review its recent activity logs and trust decision history (<code>trust-system.sh log</code>) to confirm it has been operating reliably at its current level. See the <a href="/agents/trust-levels">Trust Levels</a> page for a detailed breakdown of what each level allows, and the <a href="/reference/commands#trust-system">Trust System Commands</a> for the full CLI reference.</p>

        <h3>Is my data backed up?</h3>
        <p>Yes. Daily backups run automatically at midnight, scheduled by the OpenClaw Gateway and monitored by Forge. The backup retention policy keeps 30 days of snapshots, so you can recover data from any point in the past month. In addition, Syncthing provides a form of redundancy by keeping copies of your data on both your local machine and the EC2 instance. However, Syncthing is a sync tool, not a backup tool -- if you delete a file locally, the deletion syncs to the EC2 instance as well. The daily backups are your true safety net for data recovery.</p>

        <h3>Can I use a different note-taking app instead of LogSeq?</h3>
        <p>The system is built around LogSeq's block-based, Markdown-file structure. Agents read and write directly to the Markdown files that LogSeq uses, relying on its conventions for page references, block properties, and daily journals. The underlying principles -- structured text files, synced via Syncthing, processed by agents -- could adapt to other tools that use local files (like Obsidian), but it would require reworking the agent templates and parsing logic. Apps that store data in proprietary formats or cloud-only databases would require a fundamentally different approach.</p>

        <h3>How much does this cost to run?</h3>
        <p>The EC2 instance is the primary ongoing cost. A <code>t3.micro</code> or <code>t3.small</code> instance is sufficient for most use cases, as the agents are not computationally intensive -- they mostly read files, process text, and send notifications. At current AWS pricing, a <code>t3.micro</code> runs roughly $8-10/month, and a <code>t3.small</code> around $15-19/month. Tailscale is free for personal use. Syncthing is free and open source. Pushover has a one-time cost per platform. The total monthly cost for most setups is under $20.</p>

        <h2>OpenClaw &amp; Architecture</h2>
        <p>Questions about the OpenClaw Gateway, the runtime architecture, and how components fit together.</p>

        <h3>How do I restart the Gateway?</h3>
        <p>Run <code>openclaw gateway restart</code>. This stops the running Gateway daemon and starts a fresh instance. Active sessions are gracefully terminated and can recover on the next inbound message. You can verify the Gateway is running afterward with <code>openclaw gateway status</code>. See the <a href="/architecture/gateway">Gateway</a> architecture page for details on what the Gateway manages.</p>

        <h3>What happens if the Gateway crashes?</h3>
        <p>The Gateway runs as a systemd service, so the OS will automatically restart it if it crashes. On restart, the Gateway re-initializes its Channel Adapters and begins listening for messages again. Any sessions that were active at the time of the crash are recoverable — when the next message arrives for an agent, the Gateway creates a new session with the agent's full context (SOUL.md, memory files, etc.), so no permanent state is lost. The key thing to understand is that sessions are ephemeral by design; the agent's durable state lives in workspace files, not in the Gateway process. See <a href="/architecture/gateway">Gateway</a> for the full lifecycle.</p>

        <h3>Can different agents use different models?</h3>
        <p>Yes. Each agent has its own configuration that specifies which AI model it uses. One agent might run on Claude Opus for complex reasoning tasks while another uses a faster, cheaper model for routine work. Model selection is part of the per-agent config, and agents can even specify different models for different contexts (e.g., a more capable model for main sessions vs. a lighter model for cron jobs). The <a href="/architecture/agent-runner">Agent Runner</a> page explains how the Execution Layer resolves model configuration.</p>

        <h3>How do I add a new chat platform?</h3>
        <p>You add a Channel Adapter. Channel Adapters are the components that connect the OpenClaw Gateway to external messaging platforms — Discord, WhatsApp, Telegram, Slack, and so on. Each adapter translates platform-specific message formats into the Gateway's internal protocol and vice versa. To add a new platform, you configure a new Channel Adapter with the platform's API credentials and map it to the appropriate agents. See <a href="/architecture/channel-adapters">Channel Adapters</a> for the full explanation of how adapters work, and <a href="/automation/notifications">Notifications</a> for how this relates to notification delivery.</p>

        <h3>What's the difference between heartbeat and cron?</h3>
        <p>Both are mechanisms for agents to do work on a schedule, but they operate differently:</p>
        <ul>
          <li><strong>Heartbeat</strong> is a periodic poll within an agent's existing main session. The Gateway sends a heartbeat prompt to the agent at a configured interval (e.g., every 30 minutes). The agent checks its <code>HEARTBEAT.md</code> file, does any pending work (check email, review calendar, etc.), and either responds with results or replies <code>HEARTBEAT_OK</code> if nothing needs attention. Heartbeats share the main session's conversation history and context.</li>
          <li><strong>Cron</strong> spawns an entirely new, isolated session for each execution. Cron jobs fire at exact times (like traditional cron), run their task in a fresh session without any prior conversation history, and deliver output directly to a specified channel. Cron is better for precise scheduling, isolated tasks, and jobs that should use a different model or thinking level.</li>
        </ul>
        <p>Use heartbeat for batching periodic checks within a session. Use cron for exact-time, standalone tasks. See <a href="/automation/cron-jobs">Cron Jobs</a> for scheduling details.</p>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li>If you have a specific problem, check the <a href="/troubleshooting">Common Issues</a> page for targeted solutions.</li>
            <li>For Syncthing-specific problems, see the <a href="/troubleshooting/syncthing">Syncthing Troubleshooting</a> page.</li>
            <li>To understand the system architecture, visit <a href="/architecture">Architecture Overview</a>.</li>
            <li>To understand how agents are structured, visit <a href="/agents">Meet Your Agents</a>.</li>
            <li>For a full list of system commands, see the <a href="/reference/commands">Commands</a> reference.</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
