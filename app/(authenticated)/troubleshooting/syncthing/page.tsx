import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Syncthing Troubleshooting — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a> / <a href="/troubleshooting">Troubleshooting</a> / Syncthing
        </div>

        <h1>Syncthing Troubleshooting</h1>
        <p>Syncthing is the backbone of data synchronization in Agent Team OS. When it's working, you never think about it. When it's not, things get stale fast. This page covers how Syncthing fits into the system, the most common problems, and how to fix them.</p>

        <h2>How Syncthing Works in This System</h2>
        <p>Syncthing keeps your Notes data in sync between your local machine and the EC2 instance. The two devices communicate over Tailscale, which provides a secure, private network connection regardless of where you are. The Syncthing folder ID is <code>notes</code>, syncing EC2 <code>/home/ubuntu/notes</code> with Mac <code>~/AgentTeamOS/notes/</code>.</p>
        <p>The flow is straightforward: when you make changes in LogSeq on your local machine, Syncthing detects the file changes and pushes them to the EC2 instance. When agents on the EC2 instance write data (like appending to your daily journal), Syncthing pushes those changes back to your local machine. This happens continuously in the background, typically within seconds.</p>

        <div class="callout note">
          <div class="callout-title">Syncthing and the Agent Workspace</div>
          <p>Syncthing syncs the Notes vault, which is mounted as the agent's workspace via OpenClaw configuration. The <a href="/architecture/execution-layer">Execution Layer's</a> file tools (<code>read</code>, <code>write</code>, <code>edit</code>) operate on this workspace directory — it is the same set of files that Syncthing keeps in sync. This means Syncthing is the bridge between your local edits and what agents can see.</p>
          <p>If Syncthing is broken or disconnected, agents will not see your latest changes — but they will continue to work with whatever state they last saw. Nothing crashes or errors out; the data just becomes stale until the sync connection is restored. This is why checking Syncthing status is always the first step when agents seem to be working with outdated information.</p>
        </div>

        <h2>Common Sync Problems</h2>

        <h3>Files not appearing</h3>
        <p>If changes you made locally aren't showing up on the EC2 instance (or vice versa), Syncthing may have lost its connection. This is the most common issue and is usually caused by one of the following:</p>
        <ul>
          <li>Tailscale is disconnected on one or both devices.</li>
          <li>Syncthing is paused or stopped on one side.</li>
          <li>The folder is marked as "Paused" in the Syncthing configuration.</li>
          <li>Your laptop was asleep or offline, and changes haven't had time to propagate yet.</li>
        </ul>
        <p>Start by opening the Syncthing Web UI to check the current state.</p>

        <h3>Sync conflicts</h3>
        <p>When the same file is modified on two devices before they have a chance to sync, Syncthing creates a <strong>conflict file</strong>. These files have names like <code>myfile.sync-conflict-20260210-143022-ABCDEFG.md</code>. They appear alongside the original file and contain the version from the other device.</p>
        <p>Conflicts are most likely to happen if you edit LogSeq while the EC2 instance is also writing to the same file (for example, during the morning report generation).</p>

        <h3>Syncthing Web UI access</h3>
        <p>The Syncthing Web UI is your primary diagnostic tool. Access it at:</p>
        <ul>
          <li><strong>Local machine:</strong> <code>http://localhost:8384</code></li>
          <li><strong>EC2 instance:</strong> <code>http://localhost:8384</code> (via SSH tunnel or Tailscale IP)</li>
        </ul>
        <p>The UI shows folder status, connected devices, sync progress, and any errors.</p>

        <h2>Checking Sync Status</h2>
        <p>Use these commands to verify Syncthing is running and connected.</p>

        <h3>Is Syncthing running?</h3>
        <p>On the EC2 instance (systemd):</p>
        <pre><code>systemctl status syncthing</code></pre>
        <p>On your local machine (macOS, if installed via Homebrew):</p>
        <pre><code>brew services list | grep syncthing</code></pre>
        <p>You can also check if the process is alive:</p>
        <pre><code>pgrep -f syncthing</code></pre>

        <h3>Are devices connected?</h3>
        <p>Open the Syncthing Web UI (<code>http://localhost:8384</code>) and look at the "Remote Devices" section. Each device should show a green "Connected" status. If a device shows "Disconnected" or "Last seen" with a timestamp, the connection has dropped.</p>
        <p>You can also query the Syncthing REST API from the command line:</p>
        <pre><code>curl -s -H "X-API-Key: YOUR_API_KEY" http://localhost:8384/rest/system/connections | python3 -m json.tool</code></pre>

        <h2>Resolving Conflicts</h2>
        <p>Sync conflicts are an inevitable part of bidirectional synchronization. Here's how to handle them.</p>

        <h3>How conflict files are created</h3>
        <p>When Syncthing detects that a file has been modified on two devices independently, it keeps one version as the current file and saves the other version as a conflict file. The conflict file name includes the date, time, and a short device identifier so you can tell when and where the conflicting edit came from.</p>

        <h3>How to resolve conflicts</h3>
        <ol>
          <li><strong>Find conflict files.</strong> Search your LogSeq directory for files containing <code>.sync-conflict</code> in the name:
            <pre><code>find ~/notes -name "*.sync-conflict*"</code></pre>
          </li>
          <li><strong>Compare the versions.</strong> Open both the original file and the conflict file. Use a diff tool or simply read through them to identify the differences.</li>
          <li><strong>Keep the right version.</strong> Merge any changes you want to keep into the original file. If the conflict file has the better version, replace the original with it.</li>
          <li><strong>Delete the conflict file.</strong> Once you've resolved the differences, delete the <code>.sync-conflict</code> file. Syncthing will sync the deletion to the other device.</li>
        </ol>

        <h2>Restarting Syncthing</h2>
        <p>If Syncthing is stuck or behaving unexpectedly, a restart usually resolves the issue.</p>

        <h3>On the EC2 instance</h3>
        <pre><code>sudo systemctl restart syncthing</code></pre>
        <p>Verify it came back up:</p>
        <pre><code>systemctl status syncthing</code></pre>

        <h3>On your local machine (macOS)</h3>
        <pre><code>brew services restart syncthing</code></pre>
        <p>Or if you run Syncthing manually:</p>
        <pre><code>pkill syncthing
syncthing &</code></pre>

        <div class="callout warning">
          <strong>Never delete the Syncthing config directory.</strong> The Syncthing configuration directory (typically <code>~/.config/syncthing</code> on Linux or <code>~/Library/Application Support/Syncthing</code> on macOS) contains device keys, folder configurations, and connection history. Deleting it means Syncthing will generate new device keys and you'll need to re-pair all devices from scratch. If you suspect config corruption, make a backup of the directory before attempting any fixes.
        </div>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li>Open the Syncthing Web UI at <code>http://localhost:8384</code> and verify both devices are connected.</li>
            <li>Search for any existing <code>.sync-conflict</code> files in your LogSeq directory and resolve them.</li>
            <li>If Syncthing won't start, check the logs with <code>journalctl -u syncthing -n 50</code> on the EC2 instance.</li>
            <li>Return to <a href="/troubleshooting">Common Issues</a> for other troubleshooting topics.</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
