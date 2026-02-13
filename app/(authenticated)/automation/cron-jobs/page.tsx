import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cron Jobs — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a> / <a href="/automation">Automation</a> / Cron Jobs
        </div>

        <h1>Cron Jobs</h1>

        <p>Cron jobs are the heartbeat of Agent Team OS. They trigger data gathering, report generation, backups, and health checks on a reliable schedule. Every job is managed by one of your agents and runs as a script on your server.</p>

        <div class="callout warning">
          <strong>Do not edit the crontab directly.</strong> Forge manages the crontab and will overwrite manual changes during its next maintenance cycle. If you need to change a schedule, ask Forge to update it. This ensures all jobs stay consistent and properly logged.
        </div>

        <h2>Complete Cron Schedule</h2>

        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Schedule</th>
                <th>Description</th>
                <th>Script / Command</th>
                <th>Owner</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>45 5 * * *</code></td>
                <td>Gather data for morning report</td>
                <td><code>~/.agents/ember/scripts/morning-gather.sh</code></td>
                <td>Ember</td>
              </tr>
              <tr>
                <td><code>0 6 * * *</code></td>
                <td>Generate and send morning report</td>
                <td><code>~/.agents/ember/scripts/morning-report.sh</code></td>
                <td>Ember</td>
              </tr>
              <tr>
                <td><code>15 16 * * *</code></td>
                <td>Gather data for evening check-in</td>
                <td><code>~/.agents/ember/scripts/evening-gather.sh</code></td>
                <td>Ember</td>
              </tr>
              <tr>
                <td><code>30 16 * * *</code></td>
                <td>Generate and send evening check-in</td>
                <td><code>~/.agents/ember/scripts/evening-checkin.sh</code></td>
                <td>Ember</td>
              </tr>
              <tr>
                <td><code>0 0 * * *</code></td>
                <td>Daily backup of Life OS data</td>
                <td><code>~/.agents/forge/scripts/daily-backup.sh</code></td>
                <td>Forge</td>
              </tr>
              <tr>
                <td><code>0 3 * * *</code></td>
                <td>Log rotation and compression</td>
                <td><code>~/.agents/forge/scripts/log-rotate.sh</code></td>
                <td>Forge</td>
              </tr>
              <tr>
                <td><code>*/5 * * * *</code></td>
                <td>Syncthing health check</td>
                <td><code>~/.agents/forge/scripts/syncthing-health.sh</code></td>
                <td>Forge</td>
              </tr>
              <tr>
                <td><code>0 8 * * 0</code></td>
                <td>Weekly review compilation</td>
                <td><code>~/.agents/ember/scripts/weekly-review.sh</code></td>
                <td>Ember</td>
              </tr>
              <tr>
                <td><code>0 8 1 * *</code></td>
                <td>Monthly review compilation</td>
                <td><code>~/.agents/ember/scripts/monthly-review.sh</code></td>
                <td>Ember</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Understanding Cron Format</h2>

        <p>Each schedule follows the standard five-field cron format:</p>

        <pre><code>┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of month (1 - 31)
│ │ │ ┌───────────── month (1 - 12)
│ │ │ │ ┌───────────── day of week (0 - 6, Sunday = 0)
│ │ │ │ │
* * * * *  command</code></pre>

        <p>Some common patterns used in Agent Team OS:</p>

        <ul>
          <li><code>45 5 * * *</code> — Every day at 5:45 AM</li>
          <li><code>0 0 * * *</code> — Every day at midnight</li>
          <li><code>*/5 * * * *</code> — Every 5 minutes</li>
          <li><code>0 8 * * 0</code> — Every Sunday at 8:00 AM</li>
          <li><code>0 8 1 * *</code> — First day of every month at 8:00 AM</li>
        </ul>

        <h2>Viewing Current Cron Jobs</h2>

        <p>To see all currently scheduled cron jobs, run:</p>

        <pre><code>crontab -l</code></pre>

        <p>This displays the full crontab managed by Forge. You will see each of the entries listed above along with comment lines that identify the owner agent and purpose of each job.</p>

        <p>Example output:</p>

        <pre><code># Agent Team OS — managed by Forge
# Do not edit manually. Use Forge to update schedules.

# Ember: Morning Report
45 5 * * * ~/.agents/ember/scripts/morning-gather.sh >> ~/.agents/logs/morning-gather.log 2>&1
0 6 * * * ~/.agents/ember/scripts/morning-report.sh >> ~/.agents/logs/morning-report.log 2>&1

# Ember: Evening Check-in
15 16 * * * ~/.agents/ember/scripts/evening-gather.sh >> ~/.agents/logs/evening-gather.log 2>&1
30 16 * * * ~/.agents/ember/scripts/evening-checkin.sh >> ~/.agents/logs/evening-checkin.log 2>&1

# Forge: Maintenance
0 0 * * * ~/.agents/forge/scripts/daily-backup.sh >> ~/.agents/logs/backup.log 2>&1
0 3 * * * ~/.agents/forge/scripts/log-rotate.sh >> ~/.agents/logs/log-rotate.log 2>&1
*/5 * * * * ~/.agents/forge/scripts/syncthing-health.sh >> ~/.agents/logs/syncthing-health.log 2>&1

# Ember: Reviews
0 8 * * 0 ~/.agents/ember/scripts/weekly-review.sh >> ~/.agents/logs/weekly-review.log 2>&1
0 8 1 * * ~/.agents/ember/scripts/monthly-review.sh >> ~/.agents/logs/monthly-review.log 2>&1</code></pre>

        <h2>When Jobs Fail</h2>

        <p>If a cron job fails, Forge detects it during the next health check cycle and sends you a notification via <a href="/automation/notifications">Pushover</a>. Each job writes its output to a log file under <code>~/.agents/logs/</code>, so you can review what happened. Common causes of failure include:</p>

        <ul>
          <li>Network issues preventing API calls (calendar, weather, etc.)</li>
          <li>Syncthing being offline, so data files are stale</li>
          <li>Disk space running low, causing backup scripts to abort</li>
        </ul>

        <p>Check the relevant log file first, then consult <a href="/troubleshooting">Common Issues</a> if the problem is not obvious.</p>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li>Run <code>crontab -l</code> on your server to verify all jobs are installed correctly.</li>
            <li>Check the log files under <code>~/.agents/logs/</code> to confirm jobs have been running successfully.</li>
            <li>Review <a href="/automation/notifications">Notifications</a> to make sure you will be alerted if something breaks.</li>
            <li>Read about <a href="/agents/forge">Forge</a> if you need to request changes to the cron schedule.</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
