import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notifications — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a> / <a href="/automation">Automation</a> / Notifications
        </div>

        <h1>Notifications</h1>

        <p>Agent Team OS keeps you informed without overwhelming you. Notifications are sent through specific channels with clear priority levels, so you know at a glance whether something needs your attention right now or can wait.</p>

        <h2>Notification Channels</h2>

        <h3>Primary: Pushover</h3>

        <p>Pushover is the primary notification channel. It delivers mobile push notifications to your phone and can also display on your desktop. All agent-generated alerts, reports, and system messages are sent through Pushover first. It supports priority levels, custom sounds, and quiet hours — making it ideal for a system that runs around the clock.</p>

        <h3>Secondary: Email</h3>

        <p>Email serves as a fallback channel. If Pushover delivery fails (network issues, API outage), notifications are queued and sent via email. Email is also used for longer-form content like weekly and monthly review summaries, where a push notification would be too brief to be useful.</p>

        <h2>What Triggers Notifications</h2>

        <p>Not every automated task sends you a notification. Agents only notify you when there is something you need to see or act on:</p>

        <ul>
          <li><strong>Morning report</strong> — Delivered daily at 6:00 AM so you can review your day before it starts.</li>
          <li><strong>Evening check-in</strong> — Delivered daily at 9:30 PM with a summary of the day and anything pending.</li>
          <li><strong>System alerts</strong> — Triggered when Forge detects a problem: Syncthing sync failures, low disk space, failed cron jobs, or unresponsive services.</li>
          <li><strong>Urgent flags from agents</strong> — When any agent identifies something time-sensitive (a deadline approaching, a conflict in your schedule, a task that is blocked), it sends an immediate notification rather than waiting for the next scheduled report.</li>
        </ul>

        <h2>Notification Events</h2>

        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Channel</th>
                <th>Priority</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Morning report ready</td>
                <td>Pushover</td>
                <td>Normal</td>
                <td>"Your morning report for Tuesday is ready. 3 priorities, 2 calendar events."</td>
              </tr>
              <tr>
                <td>Evening check-in ready</td>
                <td>Pushover</td>
                <td>Normal</td>
                <td>"Evening check-in: 5 of 7 tasks completed. 2 carry over to tomorrow."</td>
              </tr>
              <tr>
                <td>Weekly review compiled</td>
                <td>Pushover + Email</td>
                <td>Normal</td>
                <td>"Your weekly review is ready. Full summary sent to email."</td>
              </tr>
              <tr>
                <td>Monthly review compiled</td>
                <td>Pushover + Email</td>
                <td>Normal</td>
                <td>"Your January review is ready. Full summary sent to email."</td>
              </tr>
              <tr>
                <td>Syncthing sync failure</td>
                <td>Pushover</td>
                <td>High</td>
                <td>"Syncthing has been disconnected for 15 minutes. Files may not be current."</td>
              </tr>
              <tr>
                <td>Disk space warning</td>
                <td>Pushover</td>
                <td>High</td>
                <td>"Disk usage at 89%. Backups may fail if space is not freed."</td>
              </tr>
              <tr>
                <td>Cron job failure</td>
                <td>Pushover</td>
                <td>Critical</td>
                <td>"Morning report generation failed. Check ~/.agents/logs/morning-report.log."</td>
              </tr>
              <tr>
                <td>Agent urgent flag</td>
                <td>Pushover</td>
                <td>High</td>
                <td>"Deadline for Q1 report is tomorrow. Draft is not yet started."</td>
              </tr>
              <tr>
                <td>System service down</td>
                <td>Pushover</td>
                <td>Critical</td>
                <td>"Syncthing service has stopped. Attempting automatic restart."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Priority System</h2>

        <p>Every notification is assigned one of three priority levels. These control how the notification appears on your device and whether it can break through quiet hours.</p>

        <h3>Normal</h3>
        <p>Used for daily reports and routine deliveries. These notifications appear silently during quiet hours and badge your app icon without making a sound. Morning reports, evening check-ins, and review compilations are all normal priority.</p>

        <h3>High</h3>
        <p>Used for things that need your attention today but are not emergencies. These notifications play a sound and appear prominently, but they still respect quiet hours. Examples include Syncthing disconnections lasting more than 15 minutes, disk space warnings, and urgent flags from agents about approaching deadlines.</p>

        <h3>Critical</h3>
        <p>Used for system issues that require immediate action. Critical notifications bypass quiet hours, play an alarm sound, and repeat until acknowledged. These are reserved for genuine failures: cron jobs that did not run, services that have crashed, or data integrity issues. You should see critical notifications rarely — if you are getting them frequently, something in your setup needs attention.</p>

        <div class="callout tip">
          <strong>Configure quiet hours in Pushover.</strong> Open the Pushover app on your phone, go to Settings, and set your quiet hours (for example, 10:00 PM to 6:00 AM). Normal and high priority notifications will be held silently until quiet hours end. Critical notifications will still come through immediately — that is by design, since they indicate something genuinely urgent.
        </div>

        <h2>Testing Notifications</h2>

        <p>After setting up Pushover, verify that notifications are working by asking Forge to send a test message:</p>

        <pre><code>~/.agents/forge/scripts/test-notification.sh</code></pre>

        <p>This sends one notification at each priority level (normal, high, critical) so you can confirm delivery and see how each level looks and sounds on your device.</p>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li>Install the Pushover app on your phone and configure your quiet hours.</li>
            <li>Run the test notification script to verify all three priority levels are delivered correctly.</li>
            <li>Review the <a href="/automation/cron-jobs">Cron Jobs</a> page to understand which scheduled tasks generate notifications.</li>
            <li>Check <a href="/troubleshooting">Common Issues</a> if notifications are not arriving as expected.</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
