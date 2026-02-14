import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cron Jobs — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a> / <a href="/automation">Automation</a> / Cron Jobs
        </div>

        <h1>Cron Jobs</h1>

        <p>Cron jobs are the heartbeat of Agent Team OS. They trigger data gathering, report generation, backups, and health checks on a reliable schedule. Every scheduled task is defined in the OpenClaw configuration and executed by the <a href="/architecture/gateway">Gateway's</a> built-in cron scheduler.</p>

        <div class="callout info">
          <div class="callout-title">OpenClaw Cron vs. System Cron</div>
          <p>Agent Team OS uses <strong>OpenClaw's built-in cron scheduler</strong> — not your server's system crontab. When you see cron schedules in this guide, they refer to entries in the OpenClaw configuration file, not lines in <code>/etc/crontab</code> or <code>crontab -e</code>. See <a href="#openclaw-cron-vs-system-cron">the comparison below</a> for details.</p>
        </div>

        <h2>How OpenClaw Cron Works</h2>

        <p>The Gateway includes a cron scheduler that starts when the Gateway starts. Each cron job is defined in the OpenClaw configuration file with a standard cron expression, a target agent, a session label, and a prompt or action to execute. When a cron job fires:</p>

        <ol>
          <li>The Gateway creates a dedicated session for the job (e.g., <code>agent:ember:cron:morning-report</code>).</li>
          <li>The task is enqueued in the <strong>cron lane</strong> — a separate <a href="/architecture/lane-queue">lane</a> that runs independently from user conversations.</li>
          <li>The Agent Runner processes the task just like any other message, with full access to tools, memory, and workspace files.</li>
          <li>Output is delivered to the configured channel (Discord, Telegram, etc.) or stored in logs.</li>
        </ol>

        <p>Because cron jobs run in their own lane, they never block your conversations. A morning report generating at 6:00 AM won't delay a Discord message you send at the same time. This isolation is managed by the <a href="/architecture/lane-queue">Lane Queue</a>.</p>

        <h2>Scheduled Tasks</h2>

        <p>These are the cron jobs configured in a typical Agent Team OS setup:</p>

        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Schedule</th>
                <th>Description</th>
                <th>Agent</th>
                <th>Session Label</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>45 5 * * *</code></td>
                <td>Gather data for morning report</td>
                <td>Ember</td>
                <td><code>morning-gather</code></td>
              </tr>
              <tr>
                <td><code>0 6 * * *</code></td>
                <td>Generate and send morning report</td>
                <td>Ember</td>
                <td><code>morning-report</code></td>
              </tr>
              <tr>
                <td><code>15 16 * * *</code></td>
                <td>Gather data for evening check-in</td>
                <td>Ember</td>
                <td><code>evening-gather</code></td>
              </tr>
              <tr>
                <td><code>30 16 * * *</code></td>
                <td>Generate and send evening check-in</td>
                <td>Ember</td>
                <td><code>evening-checkin</code></td>
              </tr>
              <tr>
                <td><code>0 0 * * *</code></td>
                <td>Daily backup of Life OS data</td>
                <td>Forge</td>
                <td><code>daily-backup</code></td>
              </tr>
              <tr>
                <td><code>0 3 * * *</code></td>
                <td>Log rotation and compression</td>
                <td>Forge</td>
                <td><code>log-rotate</code></td>
              </tr>
              <tr>
                <td><code>*/30 * * * *</code></td>
                <td>Heartbeat check (health, inbox, calendar)</td>
                <td>Ember</td>
                <td><code>heartbeat</code></td>
              </tr>
              <tr>
                <td><code>0 8 * * 0</code></td>
                <td>Weekly review compilation</td>
                <td>Ember</td>
                <td><code>weekly-review</code></td>
              </tr>
              <tr>
                <td><code>0 8 1 * *</code></td>
                <td>Monthly review compilation</td>
                <td>Ember</td>
                <td><code>monthly-review</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Managing Cron Jobs</h2>

        <p>OpenClaw provides CLI commands to view and manage scheduled jobs without editing config files directly:</p>

        <pre><code># List all configured cron jobs and their next run times
openclaw cron list

# Show detailed cron status (running, last fired, next fire)
openclaw cron status

# Trigger a specific cron job immediately (useful for testing)
openclaw cron trigger &lt;job-label&gt;</code></pre>

        <p>Example output of <code>openclaw cron list</code>:</p>

        <pre><code>Label              Schedule       Agent   Next Run
morning-gather     45 5 * * *     ember   2025-01-15 05:45:00
morning-report     0 6 * * *      ember   2025-01-15 06:00:00
evening-gather     15 16 * * *    ember   2025-01-15 16:15:00
evening-checkin    30 16 * * *    ember   2025-01-15 16:30:00
daily-backup       0 0 * * *      forge   2025-01-16 00:00:00
log-rotate         0 3 * * *      forge   2025-01-16 03:00:00
heartbeat          */30 * * * *   ember   2025-01-15 14:30:00
weekly-review      0 8 * * 0      ember   2025-01-19 08:00:00
monthly-review     0 8 1 * *      ember   2025-02-01 08:00:00</code></pre>

        <div class="callout warning">
          <strong>Do not edit the OpenClaw configuration's cron section by hand</strong> unless you know what you are doing. The Gateway hot-reloads configuration changes, and a malformed cron expression will prevent all scheduled jobs from running. Use the CLI commands above to inspect jobs, and ask your infrastructure agent (Forge) to make changes — this ensures expressions are validated and logged properly.
        </div>

        <h2>Understanding Cron Format</h2>

        <p>Each schedule follows the standard five-field cron format:</p>

        <pre><code>┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of month (1 - 31)
│ │ │ ┌───────────── month (1 - 12)
│ │ │ │ ┌───────────── day of week (0 - 6, Sunday = 0)
│ │ │ │ │
* * * * *</code></pre>

        <p>Some common patterns used in Agent Team OS:</p>

        <ul>
          <li><code>45 5 * * *</code> — Every day at 5:45 AM</li>
          <li><code>0 0 * * *</code> — Every day at midnight</li>
          <li><code>*/30 * * * *</code> — Every 30 minutes</li>
          <li><code>0 8 * * 0</code> — Every Sunday at 8:00 AM</li>
          <li><code>0 8 1 * *</code> — First day of every month at 8:00 AM</li>
        </ul>

        <h2 id="openclaw-cron-vs-system-cron">OpenClaw Cron vs. System Cron</h2>

        <p>It is important to understand that there are two completely different scheduling mechanisms at play, and Agent Team OS uses only one of them:</p>

        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>OpenClaw Cron</th>
                <th>System Cron (crontab)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>What it is</strong></td>
                <td>Built-in scheduler inside the <a href="/architecture/gateway">Gateway</a> daemon</td>
                <td>Linux's <code>cron</code> daemon (<code>/etc/crontab</code>, <code>crontab -e</code>)</td>
              </tr>
              <tr>
                <td><strong>Where jobs are defined</strong></td>
                <td>OpenClaw configuration file (YAML)</td>
                <td>System crontab files</td>
              </tr>
              <tr>
                <td><strong>What runs</strong></td>
                <td>Agent sessions — full LLM reasoning with tool access</td>
                <td>Shell commands and scripts</td>
              </tr>
              <tr>
                <td><strong>Concurrency</strong></td>
                <td>Managed by the <a href="/architecture/lane-queue">Lane Queue</a> (cron lane)</td>
                <td>Unmanaged — jobs run independently</td>
              </tr>
              <tr>
                <td><strong>How to view</strong></td>
                <td><code>openclaw cron list</code></td>
                <td><code>crontab -l</code></td>
              </tr>
              <tr>
                <td><strong>Used by Agent Team OS?</strong></td>
                <td><strong>Yes</strong> — all scheduled agent tasks</td>
                <td>No — not used for agent tasks (though your server may have its own system cron jobs for unrelated purposes)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>The key difference: OpenClaw cron jobs trigger <em>agent sessions</em>, not shell scripts. When a cron job fires, the Gateway starts an agent run with the configured prompt, and the agent reasons about what to do — checking calendars, reading files, sending messages — using the same tools and capabilities it has in a normal conversation. This is far more flexible than a static bash script, because the agent can adapt its behavior based on context.</p>

        <p>For example, the morning report cron job doesn't run a script that fetches hardcoded data sources. It starts an Ember session with a prompt like "Compile the morning report," and Ember decides what to check based on her instructions, recent context, and what tools are available. If a new data source is added (say, a stock portfolio tracker), Ember picks it up without any script changes.</p>

        <h2>When Jobs Fail</h2>

        <p>If a cron job fails, OpenClaw logs the error and can optionally send a notification via <a href="/automation/notifications">Pushover</a> or the configured alert channel. Common causes of failure include:</p>

        <ul>
          <li>Network issues preventing API calls (calendar, weather, etc.)</li>
          <li>The Gateway being stopped when a job was scheduled to run (missed jobs are logged but not retroactively executed)</li>
          <li>LLM rate limits or provider outages during the agent run</li>
          <li>Tool execution errors (disk full, permissions, network timeouts)</li>
        </ul>

        <p>Check the Gateway logs for cron-related entries:</p>

        <pre><code># View recent cron execution logs
openclaw logs --filter cron</code></pre>

        <p>Consult <a href="/troubleshooting">Common Issues</a> if the problem is not obvious.</p>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li>Run <code>openclaw cron list</code> to verify all scheduled jobs are configured correctly.</li>
            <li>Check that the <a href="/architecture/gateway">Gateway</a> is running — cron jobs only fire when the Gateway daemon is active.</li>
            <li>Review <a href="/automation/notifications">Notifications</a> to make sure you will be alerted if something breaks.</li>
            <li>Read about the <a href="/architecture/gateway">Gateway</a> to understand how the cron scheduler fits into the overall architecture.</li>
            <li>See <a href="/architecture/lane-queue">Lane Queue</a> to understand how cron jobs are isolated from your conversations.</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
