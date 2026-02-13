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
        <p>Yes. Daily backups run automatically at midnight, managed by Forge. The backup retention policy keeps 30 days of snapshots, so you can recover data from any point in the past month. In addition, Syncthing provides a form of redundancy by keeping copies of your data on both your local machine and the EC2 instance. However, Syncthing is a sync tool, not a backup tool -- if you delete a file locally, the deletion syncs to the EC2 instance as well. The daily backups are your true safety net for data recovery.</p>

        <h3>Can I use a different note-taking app instead of LogSeq?</h3>
        <p>The system is built around LogSeq's block-based, Markdown-file structure. Agents read and write directly to the Markdown files that LogSeq uses, relying on its conventions for page references, block properties, and daily journals. The underlying principles -- structured text files, synced via Syncthing, processed by agents -- could adapt to other tools that use local files (like Obsidian), but it would require reworking the agent templates and parsing logic. Apps that store data in proprietary formats or cloud-only databases would require a fundamentally different approach.</p>

        <h3>How much does this cost to run?</h3>
        <p>The EC2 instance is the primary ongoing cost. A <code>t3.micro</code> or <code>t3.small</code> instance is sufficient for most use cases, as the agents are not computationally intensive -- they mostly read files, process text, and send notifications. At current AWS pricing, a <code>t3.micro</code> runs roughly $8-10/month, and a <code>t3.small</code> around $15-19/month. Tailscale is free for personal use. Syncthing is free and open source. Pushover has a one-time cost per platform. The total monthly cost for most setups is under $20.</p>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li>If you have a specific problem, check the <a href="/troubleshooting">Common Issues</a> page for targeted solutions.</li>
            <li>For Syncthing-specific problems, see the <a href="/troubleshooting/syncthing">Syncthing Troubleshooting</a> page.</li>
            <li>To understand how agents are structured, visit <a href="/agents">Meet Your Agents</a>.</li>
            <li>For a full list of system commands, see the <a href="/reference/commands">Commands</a> reference.</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
