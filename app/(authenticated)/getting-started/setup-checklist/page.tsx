import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Setup Checklist — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/getting-started">Getting Started</a>
          <span class="separator">/</span>
          Setup Checklist
        </div>

        <h1>Setup Checklist</h1>

        <p>Before you begin using Agent Team OS day-to-day, verify that each of the following items is in place. Most of these will already be configured if Forge has completed the initial infrastructure setup, but it is worth walking through the list to confirm nothing was missed and to familiarize yourself with each component.</p>

        <ul class="checklist">
          <li><strong>Syncthing installed and configured.</strong> Syncthing is the file synchronization layer that keeps your local LogSeq vault in sync with the EC2 instance. Confirm that Syncthing is running on both your local machine and the server, and that the shared folders are connected and up to date.</li>
          <li><strong>LogSeq installed with Life OS vault.</strong> LogSeq should be installed on your local machine and pointed at the synced vault directory. Verify that you can open LogSeq, see today's journal page, and navigate the Life OS page hierarchy (projects, areas, resources, archive).</li>
          <li><strong>Access to the EC2 instance via Tailscale.</strong> Tailscale provides a secure private network to reach the EC2 server without exposing it to the public internet. Confirm that Tailscale is installed, you are logged in, and you can reach the server's Tailscale IP address.</li>
          <li><strong>Notification channels configured (Pushover or email).</strong> The morning report and evening check-in are delivered via notifications. Confirm that at least one notification channel is set up and that you have received a test notification successfully.</li>
          <li><strong>SSH key added to the server.</strong> You will occasionally need to SSH into the EC2 instance for troubleshooting or manual tasks. Verify that your SSH public key has been added to the server and that you can connect without a password prompt.</li>
          <li><strong>Verified morning report delivery.</strong> The morning report is the most important daily touchpoint. Confirm that you have received at least one morning report at the expected time (6:00 AM) and that its contents render correctly in your notification app or email client.</li>
          <li><strong>Reviewed the agent trust levels.</strong> Each agent operates within a defined trust level that determines what actions it can take autonomously versus what requires your approval. Review the <a href="/agents/trust-levels">Trust Levels</a> page to understand the current permissions and adjust them if needed.</li>
          <li><strong>Verified trust system is enforcing.</strong> Run <code>trust-system.sh status</code> on the EC2 instance to confirm the trust system is active. You should see all four agents listed with their trust levels (Ember=L3, Scout=L2, Forge=L3, Architect=L2), a count of pending approvals, and recent trust decisions. If the command is not found, ensure <code>~/agents/ember/scripts/</code> is in your PATH or run it with the full path.</li>
          <li><strong>OpenClaw Gateway is running.</strong> Run <code>openclaw gateway status</code> on the EC2 instance. You should see the Gateway process running and healthy. The Gateway is the central message router — if it is not running, agents cannot receive messages or execute scheduled tasks. If the status shows it is stopped, run <code>openclaw gateway start</code> to bring it up.</li>
          <li><strong>Cron jobs are scheduled.</strong> Run <code>openclaw cron list</code> to verify that scheduled tasks are registered. You should see entries for the morning report, evening check-in, and any other recurring automations. If the list is empty, the daily cadence will not fire — check the <a href="/automation/cron-jobs">Cron Jobs</a> page for setup instructions.</li>
          <li><strong>Channel monitors are connected.</strong> Verify that the Discord channel monitors (or other configured channels) are actively connected and receiving messages. You can confirm this by sending a test message in your agent Discord channel and checking that the agent responds. If messages are not getting through, check the <a href="/architecture/channel-adapters">Channel Adapters</a> page for troubleshooting steps.</li>
        </ul>

        <div class="callout note">
          <div class="callout-title">Note</div>
          <p>Forge handles most of the infrastructure setup automatically, including server provisioning, Syncthing configuration, and cron job scheduling. If any of the items above are not working, check with Forge first — the issue may already be on its radar, or it may be able to fix it without manual intervention.</p>
        </div>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li><a href="/life-os">Explore Life OS</a> to understand how your notes and tasks are organized</li>
            <li><a href="/agents/trust-levels">Review Trust Levels</a> to customize agent permissions</li>
            <li><a href="/troubleshooting">Check Common Issues</a> if anything on the checklist is not working</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
