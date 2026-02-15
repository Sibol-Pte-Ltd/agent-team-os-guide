import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quick Commands — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a> / Reference / Commands
        </div>

        <h1>Quick Commands</h1>
        <p>A handy reference of commands you will use most often when working with Agent Team OS. All commands are run on the EC2 instance unless otherwise noted.</p>

        <h3>Connection</h3>
        <table>
          <thead>
            <tr>
              <th>Command</th>
              <th>What It Does</th>
              <th>When to Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>tailscale status</code></td>
              <td>Check Tailscale connection</td>
              <td>When you cannot reach the EC2 instance or other devices on your Tailscale network. Run this to verify the VPN is connected and see which peers are online.</td>
            </tr>
            <tr>
              <td><code>ssh ec2</code></td>
              <td>Connect to EC2 instance</td>
              <td>Whenever you need to access the server directly. This uses the SSH alias configured in your <code>~/.ssh/config</code> to connect over Tailscale.</td>
            </tr>
          </tbody>
        </table>

        <h3>Syncthing</h3>
        <table>
          <thead>
            <tr>
              <th>Command</th>
              <th>What It Does</th>
              <th>When to Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>systemctl status syncthing</code></td>
              <td>Check Syncthing status</td>
              <td>When files are not syncing as expected. This shows whether the Syncthing service is running and any recent activity or errors.</td>
            </tr>
            <tr>
              <td><code>systemctl restart syncthing</code></td>
              <td>Restart Syncthing</td>
              <td>When Syncthing is stuck or not responding. A restart clears temporary issues and forces re-connection to peers.</td>
            </tr>
            <tr>
              <td><code>journalctl -u syncthing --since today</code></td>
              <td>View today's Syncthing logs</td>
              <td>When you need to diagnose sync problems in detail. Shows all Syncthing log entries from today, including connection events, sync conflicts, and errors.</td>
            </tr>
          </tbody>
        </table>

        <h3>System</h3>
        <table>
          <thead>
            <tr>
              <th>Command</th>
              <th>What It Does</th>
              <th>When to Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>crontab -l</code></td>
              <td>View scheduled cron jobs</td>
              <td>When you want to see what automated tasks are scheduled and when they run. Useful for verifying that morning reports, backups, and other jobs are configured correctly.</td>
            </tr>
            <tr>
              <td><code>df -h</code></td>
              <td>Check disk space</td>
              <td>When the system feels slow or agents report write errors. Shows disk usage in a human-readable format so you can spot partitions that are running low.</td>
            </tr>
            <tr>
              <td><code>htop</code></td>
              <td>Monitor system resources</td>
              <td>When you want a real-time view of CPU, memory, and process activity. Helpful for checking whether an agent process is consuming unexpected resources.</td>
            </tr>
          </tbody>
        </table>

        <!-- ============================================================= -->
        <!-- OPENCLAW CLI                                                   -->
        <!-- ============================================================= -->
        <h2 id="openclaw-cli">OpenClaw CLI</h2>

        <p>The <code>openclaw</code> command is the primary interface for managing the OpenClaw platform — the <a href="/architecture/gateway">Gateway</a> daemon, sessions, cron jobs, and more. Run <code>openclaw help</code> for a full list of subcommands.</p>

        <h3>Gateway Management</h3>
        <table>
          <thead>
            <tr>
              <th>Command</th>
              <th>What It Does</th>
              <th>When to Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>openclaw gateway status</code></td>
              <td>Check whether the Gateway daemon is running, and show uptime, connected channels, and active session count.</td>
              <td>First thing to check when agents are unresponsive or messages are not being delivered. Also useful after a server reboot to confirm everything came back up.</td>
            </tr>
            <tr>
              <td><code>openclaw gateway start</code></td>
              <td>Start the Gateway daemon. Loads <code>~/.openclaw/config.yaml</code>, connects channel adapters, and begins processing messages.</td>
              <td>After installation, after a manual stop, or when <code>gateway status</code> shows the daemon is not running.</td>
            </tr>
            <tr>
              <td><code>openclaw gateway stop</code></td>
              <td>Gracefully stop the Gateway daemon. Active sessions are allowed to complete their current turn before shutdown.</td>
              <td>Before making major configuration changes, during maintenance, or when you need to cleanly shut down the system.</td>
            </tr>
            <tr>
              <td><code>openclaw gateway restart</code></td>
              <td>Stop and restart the Gateway daemon. Equivalent to <code>stop</code> followed by <code>start</code>, reloading configuration.</td>
              <td>After editing <code>~/.openclaw/config.yaml</code> to pick up changes — new channel adapters, updated tool policies, model changes, etc.</td>
            </tr>
          </tbody>
        </table>

        <h3>Sessions &amp; Cron</h3>
        <table>
          <thead>
            <tr>
              <th>Command</th>
              <th>What It Does</th>
              <th>When to Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>openclaw sessions list</code></td>
              <td>List all active and recent sessions with their session keys, agent names, channels, and status (active/idle/completed).</td>
              <td>When you want to see what agents are currently running, check session activity, or find a specific session ID for debugging.</td>
            </tr>
            <tr>
              <td><code>openclaw cron list</code></td>
              <td>List all scheduled cron jobs configured in OpenClaw, with their schedules, target agents, and next run times.</td>
              <td>To review what automated tasks OpenClaw is running — morning reports, heartbeats, health checks, and any custom scheduled jobs.</td>
            </tr>
          </tbody>
        </table>

        <h3>Service Logs</h3>
        <table>
          <thead>
            <tr>
              <th>Command</th>
              <th>What It Does</th>
              <th>When to Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>journalctl -u openclaw --since today</code></td>
              <td>View today's OpenClaw service logs from the systemd journal. Includes gateway startup, channel connections, session lifecycle events, and errors.</td>
              <td>When diagnosing gateway or agent service issues. Pair with <code>openclaw gateway status</code> for a complete picture.</td>
            </tr>
          </tbody>
        </table>

        <h3>Agent Logs</h3>
        <p>Agent logs live in <code>~/agents/ember/logs/</code>. Session transcripts (full conversation history) are stored as JSONL files in <code>~/.openclaw/agents/ember/sessions/</code>.</p>
        <table>
          <thead>
            <tr>
              <th>Command</th>
              <th>What It Does</th>
              <th>When to Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>tail -f ~/agents/ember/logs/trust-decisions.log</code></td>
              <td>Follow trust system decisions</td>
              <td>When you want to watch trust system activity in real time. Shows every check, approval, and denial as they happen. Press <code>Ctrl+C</code> to stop.</td>
            </tr>
            <tr>
              <td><code>tail -f ~/agents/ember/logs/forge-health.log</code></td>
              <td>Follow Forge's health checks</td>
              <td>When you want to watch Forge's infrastructure monitoring in real time. Useful during maintenance windows or when diagnosing system issues.</td>
            </tr>
            <tr>
              <td><code>tail -f ~/agents/ember/logs/forge-cron.log</code></td>
              <td>Follow Forge's cron activity</td>
              <td>When you want to see what Forge's scheduled tasks are doing. Shows cron job execution, timing, and any errors.</td>
            </tr>
            <tr>
              <td><code>ls -lt ~/.openclaw/agents/ember/sessions/*.jsonl | head</code></td>
              <td>List recent session transcripts</td>
              <td>When you want to review past agent conversations. Each JSONL file is a full session transcript. Sorted by most recent first.</td>
            </tr>
          </tbody>
        </table>

        <!-- ============================================================= -->
        <!-- TRUST SYSTEM CLI REFERENCE                                     -->
        <!-- ============================================================= -->
        <h2 id="trust-system">Trust System Commands</h2>

        <p>The trust system is enforced through two scripts: <code>trust-system.sh</code> (the main engine with 10 subcommands) and <code>trust-check.sh</code> (a source-able wrapper that agents use in their sessions). Both live in <code>~/agents/shared/scripts/</code>. See <a href="/agents/trust-levels">Trust Levels</a> for the full conceptual overview.</p>

        <h3><code>trust-system.sh</code> — CLI Reference</h3>

        <table>
          <thead>
            <tr>
              <th>Command</th>
              <th>What It Does</th>
              <th>When to Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>trust-system.sh check &lt;agent&gt; &lt;action&gt; [reason]</code></td>
              <td>Check whether an agent is allowed to perform an action. Returns exit code 0 (allowed), 1 (denied), or 2 (needs approval).</td>
              <td>Before any restricted action. This is the core enforcement gate — every permission decision flows through this command.</td>
            </tr>
            <tr>
              <td><code>trust-system.sh request-approval &lt;agent&gt; &lt;action&gt; &lt;reason&gt;</code></td>
              <td>Queue an approval request when <code>check</code> returns exit code 2. Creates a JSON file in the approval queue and sends notifications via Discord and Pushover.</td>
              <td>Automatically called by <code>trust-check.sh</code> when a check returns NEEDS_APPROVAL. Can also be called manually.</td>
            </tr>
            <tr>
              <td><code>trust-system.sh approve &lt;request-id&gt;</code></td>
              <td>Approve a pending request. Updates the request status to "approved" and logs the decision.</td>
              <td>When you receive an approval notification and want to allow the action. The request ID is included in the notification.</td>
            </tr>
            <tr>
              <td><code>trust-system.sh deny &lt;request-id&gt; [reason]</code></td>
              <td>Deny a pending request with an optional reason. Updates the request status to "denied" and notifies the agent.</td>
              <td>When you receive an approval notification and want to block the action.</td>
            </tr>
            <tr>
              <td><code>trust-system.sh list-pending [agent]</code></td>
              <td>List all pending approval requests, optionally filtered by agent name.</td>
              <td>To review the current approval queue. Useful when you come back to check what agents have been asking for.</td>
            </tr>
            <tr>
              <td><code>trust-system.sh escalate &lt;agent&gt; &lt;new-level&gt; &lt;reason&gt;</code></td>
              <td>Raise an agent's trust level. Validates that the new level is higher than the current level. Updates the config and logs the change.</td>
              <td>When an agent has earned more autonomy and you want to promote it. For example, moving Scout from Level 2 to Level 3.</td>
            </tr>
            <tr>
              <td><code>trust-system.sh demote &lt;agent&gt; &lt;new-level&gt; &lt;reason&gt;</code></td>
              <td>Lower an agent's trust level. Validates that the new level is lower than the current level. Updates the config and logs the change.</td>
              <td>When an agent has made a mistake or you want to add more oversight. Takes effect immediately.</td>
            </tr>
            <tr>
              <td><code>trust-system.sh get-level &lt;agent&gt;</code></td>
              <td>Display an agent's current trust level number and name.</td>
              <td>Quick check to see where an agent currently sits in the trust hierarchy.</td>
            </tr>
            <tr>
              <td><code>trust-system.sh status</code></td>
              <td>Show a full status dashboard: all agent levels, pending approval count, and the 5 most recent trust decisions from the log.</td>
              <td>For a quick overview of the entire trust system state.</td>
            </tr>
            <tr>
              <td><code>trust-system.sh log [lines]</code></td>
              <td>Show recent entries from the trust decision log. Defaults to the last 20 lines.</td>
              <td>To audit recent trust decisions, see what was allowed, denied, or escalated.</td>
            </tr>
          </tbody>
        </table>

        <h3><code>trust-check.sh</code> — Agent Integration Functions</h3>

        <p>This script is designed to be <strong>sourced</strong> (not executed) by agent sessions. It provides convenience functions that wrap <code>trust-system.sh</code> and handle the approval flow automatically. Agents source it via <code>.bashrc.agent</code>.</p>

        <table>
          <thead>
            <tr>
              <th>Function</th>
              <th>What It Does</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>trust_check &lt;agent&gt; &lt;action&gt; [reason]</code></td>
              <td>Main entry point. Calls <code>trust-system.sh check</code> and, if the result is NEEDS_APPROVAL, automatically calls <code>request-approval</code>. Returns 0 (allowed), 1 (blocked), or 2 (approval pending).</td>
            </tr>
            <tr>
              <td><code>trust_check_tool &lt;tool_name&gt; [detail]</code></td>
              <td>Convenience wrapper that classifies a raw OpenClaw tool call (e.g. <code>message</code>, <code>exec</code>, <code>write</code>) into the appropriate trust action and runs the check. Automatically skips checks for safe workspace operations.</td>
            </tr>
            <tr>
              <td><code>trust_classify_tool &lt;tool_name&gt; [detail]</code></td>
              <td>Classifies a tool call into a trust action string (e.g. <code>message:send</code>, <code>exec:sudo</code>, <code>write:external</code>). Used internally by <code>trust_check_tool</code>.</td>
            </tr>
            <tr>
              <td><code>trust_status</code></td>
              <td>Shortcut for <code>trust-system.sh status</code>. Shows all agent levels, pending approvals, and recent decisions.</td>
            </tr>
            <tr>
              <td><code>trust_pending [agent]</code></td>
              <td>Shortcut for <code>trust-system.sh list-pending</code>. Lists pending approval requests.</td>
            </tr>
          </tbody>
        </table>

        <h4>Environment Variables</h4>
        <table>
          <thead>
            <tr>
              <th>Variable</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>TRUST_AGENT_NAME</code></td>
              <td>Override the agent name for trust checks. If unset, auto-detected from the OpenClaw session or defaults to <code>ember</code>.</td>
            </tr>
            <tr>
              <td><code>TRUST_DRY_RUN=1</code></td>
              <td>Log trust decisions but always return "allowed". Useful for testing integration without enforcing.</td>
            </tr>
            <tr>
              <td><code>TRUST_SILENT=1</code></td>
              <td>Suppress stdout output from trust checks. The return code still reflects the decision.</td>
            </tr>
          </tbody>
        </table>

        <h3>Trust System Examples</h3>

        <div class="callout tip">
          <div class="callout-title">Common Operations</div>
          <p>Here are the most frequently used trust system commands and what to expect.</p>
        </div>

        <h4>Check if an agent can perform an action</h4>
        <pre><code># Check if Scout can send an external message
$ trust-system.sh check scout send_external_message "sending research summary"
⏳ NEEDS_APPROVAL — scout (Level 2: Act with Approval) requires approval for 'send_external_message' (class: external_communication)

# Check if Ember can write to workspace
$ trust-system.sh check ember write_workspace "updating daily notes"
✅ ALLOWED — ember (Level 3: Autonomous) can perform 'write_workspace' (class: workspace_write)</code></pre>

        <h4>Approve or deny a request</h4>
        <pre><code># List what's waiting for you
$ trust-system.sh list-pending
📋 req-1739328431-12345
   Agent: scout | Action: send_external_message
   Reason: sending research summary to Discord
   Created: 2026-02-12T03:00:31Z

# Approve it
$ trust-system.sh approve req-1739328431-12345
✅ APPROVED — Request req-1739328431-12345 (scout → send_external_message)

# Or deny it
$ trust-system.sh deny req-1739328431-12345 "not the right time"
🚫 DENIED — Request req-1739328431-12345 (scout → send_external_message). Reason: not the right time</code></pre>

        <h4>Change an agent's trust level</h4>
        <pre><code># Promote Scout to Level 3
$ trust-system.sh escalate scout 3 "consistently reliable research output"
⬆️ ESCALATED — scout: Level 2 (Act with Approval) → Level 3 (Autonomous)

# Temporarily demote an agent for more oversight
$ trust-system.sh demote forge 2 "reviewing after unexpected system change"
⬇️ DEMOTED — forge: Level 3 (Autonomous) → Level 2 (Act with Approval)</code></pre>

        <h4>View system status and audit log</h4>
        <pre><code># Full status dashboard
$ trust-system.sh status
🔐 Trust System Status
======================

Agent Levels:
  ember (Chief of Staff): Level 3 — Autonomous
  forge (Infrastructure): Level 3 — Autonomous
  scout (Research): Level 2 — Act with Approval

Pending Approvals: 0

Recent Decisions (last 5):
  [2026-02-12T02:47:11Z] agent=ember action=write_workspace decision=ALLOWED ...

# View more log history
$ trust-system.sh log 50</code></pre>

        <h4>Using trust-check.sh in an agent session</h4>
        <pre><code># Source the integration functions
$ source ~/agents/shared/scripts/trust-check.sh

# Check a raw tool call
$ trust_check_tool message "sending summary"
⏳ NEEDS_APPROVAL — ember (Level 3: Autonomous) requires approval for 'message:send'

# Override agent name for subagent sessions
$ export TRUST_AGENT_NAME="scout"
$ trust_check scout send_discord "posting research results"</code></pre>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li>Bookmark this page for quick access when you are working on the server.</li>
            <li>Review the <a href="/reference/file-locations">File Locations</a> page to know where OpenClaw configs, trust system files, logs, and data live on disk.</li>
            <li>Read the <a href="/architecture">Architecture Overview</a> to understand how the Gateway, Lane Queue, and Agent Runner work together.</li>
            <li>Read the <a href="/agents/trust-levels">Trust Levels</a> page for the conceptual overview of how the trust system works.</li>
            <li>Check the <a href="/troubleshooting">Troubleshooting</a> section if a command returns unexpected output.</li>
          </ul>
        </div>

        <p style="margin-top: 2rem; font-size: 0.8rem; color: #888;">Last updated: February 14, 2026</p>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
