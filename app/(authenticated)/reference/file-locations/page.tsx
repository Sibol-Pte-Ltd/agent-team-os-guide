import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'File Locations — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a> / Reference / File Locations
        </div>

        <h1>File Locations</h1>
        <p>This page maps out where important files and directories live so you can find what you need quickly. Use this as a reference when browsing the server, debugging an issue, or checking on agent output.</p>

        <div class="callout note">
          <div class="callout-title">Note</div>
          <p>All paths on this page refer to the EC2 instance unless otherwise noted. Paths beginning with <code>~/</code> are relative to the deploy user's home directory (<code>/home/ubuntu</code>).</p>
        </div>

        <h3>Life OS Data</h3>
        <table>
          <thead>
            <tr>
              <th>Path</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>~/life-os/</code></td>
              <td>Root of the LogSeq vault. This is the top-level directory that Syncthing keeps in sync across your devices.</td>
            </tr>
            <tr>
              <td><code>~/life-os/journals/</code></td>
              <td>Daily journal pages. Each file is named by date (e.g., <code>2026_02_10.md</code>) and contains that day's notes, tasks, and log entries.</td>
            </tr>
            <tr>
              <td><code>~/life-os/pages/</code></td>
              <td>Named pages for projects, areas, people, and any other non-journal content within LogSeq.</td>
            </tr>
            <tr>
              <td><code>~/life-os/templates/</code></td>
              <td>Reusable templates for journal entries, project kickoffs, weekly reviews, and other recurring documents.</td>
            </tr>
          </tbody>
        </table>

        <h3>Agent Files</h3>
        <table>
          <thead>
            <tr>
              <th>Path</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>~/agents/ember/</code></td>
              <td>Ember's workspace root. Contains all agent configuration, scripts, memory, and operational files.</td>
            </tr>
            <tr>
              <td><code>~/agents/ember/memory/</code></td>
              <td>Agent memory files. Daily notes (<code>YYYY-MM-DD.md</code>) and long-term memory (<code>MEMORY.md</code>).</td>
            </tr>
            <tr>
              <td><code>~/agents/ember/scripts/</code></td>
              <td>Agent scripts and executables. Contains the trust system scripts, automation helpers, and agent tools.</td>
            </tr>
            <tr>
              <td><code>~/agents/ember/logs/</code></td>
              <td>Agent operational logs, including trust decision logs.</td>
            </tr>
            <tr>
              <td colspan="2">
                <div class="callout note" style="margin: 0.5rem 0;">
                  <strong>Note:</strong> The legacy paths below (<code>/etc/agent-team/</code>, <code>/var/log/agent-team/</code>, <code>/opt/agent-team/scripts/</code>) are from an earlier installation layout and may not exist on all installs. The current active paths are under <code>~/agents/ember/</code>.
                </div>
              </td>
            </tr>
            <tr>
              <td><code>/etc/agent-team/</code></td>
              <td>Legacy agent configuration files. Contains YAML configs that define each agent's personality, trust level, permissions, and schedule. <em>May not exist on all installs.</em></td>
            </tr>
            <tr>
              <td><code>/var/log/agent-team/</code></td>
              <td>System-level agent log files. Each agent writes its own log here (e.g., <code>ember.log</code>, <code>forge.log</code>). The latest morning report is also stored here. <em>May not exist on all installs.</em></td>
            </tr>
            <tr>
              <td><code>/opt/agent-team/scripts/</code></td>
              <td>Legacy agent scripts and executables. <em>May not exist on all installs.</em></td>
            </tr>
          </tbody>
        </table>

        <!-- ============================================================= -->
        <!-- TRUST SYSTEM FILES                                             -->
        <!-- ============================================================= -->
        <h3 id="trust-system">Trust System</h3>

        <div class="callout success">
          <div class="callout-title">Live System</div>
          <p>The trust system is fully implemented and actively enforcing permissions. These files are the source of truth for agent authorization.</p>
        </div>

        <table>
          <thead>
            <tr>
              <th>Path</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>~/agents/ember/config/trust-levels.json</code></td>
              <td>Trust system configuration. Defines all four trust levels (0–3) with their permissions, tool restrictions, and escalation triggers. Also contains each agent's current trust level assignment and approval settings. This is the single source of truth for the trust hierarchy.</td>
            </tr>
            <tr>
              <td><code>~/agents/ember/scripts/trust-system.sh</code></td>
              <td>Trust system engine. The main executable with 10 subcommands for checking permissions, managing approvals, escalating/demoting agents, and viewing status. See <a href="/reference/commands#trust-system">Trust System Commands</a> for the full CLI reference.</td>
            </tr>
            <tr>
              <td><code>~/agents/ember/scripts/trust-check.sh</code></td>
              <td>Source-able trust check wrapper. Provides the <code>trust_check</code>, <code>trust_check_tool</code>, and other convenience functions that agents use in their sessions. Automatically loaded via <code>.bashrc.agent</code>.</td>
            </tr>
            <tr>
              <td><code>~/agents/ember/.bashrc.agent</code></td>
              <td>Agent shell profile. Auto-sources <code>trust-check.sh</code> and sets up trust aliases so enforcement is active in every agent session.</td>
            </tr>
            <tr>
              <td><code>~/agents/ember/data/approval-queue/</code></td>
              <td>Approval request queue. Each pending request is stored as a JSON file (e.g., <code>req-1739328431-12345.json</code>) containing the agent name, action, reason, status, and timestamps. Requests are updated in-place when approved or denied.</td>
            </tr>
            <tr>
              <td><code>~/agents/ember/logs/trust-decisions.log</code></td>
              <td>Trust decision audit log. Every trust check — allowed, denied, or queued — is logged here with a timestamp, agent name, action, and result. Use <code>trust-system.sh log</code> to view recent entries.</td>
            </tr>
          </tbody>
        </table>

        <h3>Syncthing</h3>
        <table>
          <thead>
            <tr>
              <th>Path</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>~/.config/syncthing/</code></td>
              <td>Syncthing configuration directory. Contains <code>config.xml</code> with device IDs, folder settings, and connection preferences.</td>
            </tr>
            <tr>
              <td><code>~/life-os/</code></td>
              <td>Sync folder. This is the same Life OS directory listed above -- Syncthing watches this folder and replicates changes to connected devices.</td>
            </tr>
            <tr>
              <td><code>.sync-conflict-*</code></td>
              <td>Conflict files. When two devices edit the same file simultaneously, Syncthing creates a conflict copy with this naming pattern. Search for these files periodically and resolve any duplicates.</td>
            </tr>
          </tbody>
        </table>

        <h3>System</h3>
        <table>
          <thead>
            <tr>
              <th>Path</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>crontab -l</code> (command)</td>
              <td>View the current user's cron schedule. Not a file path -- run this command to see all scheduled jobs including morning reports, backups, and maintenance tasks.</td>
            </tr>
            <tr>
              <td><code>/var/backups/agent-team/</code></td>
              <td>Automated backups. Contains timestamped snapshots of the Life OS vault and agent configuration, created by Forge's nightly backup job.</td>
            </tr>
            <tr>
              <td><code>/etc/tailscale/</code></td>
              <td>Tailscale configuration. Contains VPN settings and authentication state. Rarely needs manual editing.</td>
            </tr>
          </tbody>
        </table>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li>Familiarize yourself with the <a href="/reference/commands">Quick Commands</a> page — including the new <a href="/reference/commands#trust-system">Trust System Commands</a> section.</li>
            <li>If you find <code>.sync-conflict-*</code> files, follow the resolution steps in the <a href="/troubleshooting/syncthing">Syncthing Troubleshooting</a> guide.</li>
            <li>Check the <a href="/reference/glossary">Glossary</a> if you encounter unfamiliar terms while browsing the file system.</li>
            <li>Read the <a href="/agents/trust-levels">Trust Levels</a> page for the conceptual overview of the trust system.</li>
          </ul>
        </div>

        <p style="margin-top: 2rem; font-size: 0.8rem; color: #888;">Last updated: February 12, 2026</p>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
