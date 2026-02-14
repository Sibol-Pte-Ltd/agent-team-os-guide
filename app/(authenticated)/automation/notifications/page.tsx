import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notifications — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a> / <a href="/automation">Automation</a> / Notifications
        </div>

        <h1>Notifications</h1>

        <p>Agent Team OS keeps you informed without overwhelming you. Notifications reach you through the chat platforms you already use, supplemented by dedicated push notification services for time-sensitive alerts. Understanding the difference helps you configure the right delivery for each type of notification.</p>

        <h2>Notification Channels</h2>

        <h3>Primary: Discord (Chat Channel)</h3>

        <p>Discord is the primary notification channel for most agent communication. Morning reports, evening check-ins, agent responses, and system updates all flow through Discord as regular messages. Because Discord is also where you interact with agents conversationally, notifications arrive in the same context as your ongoing work — you can read a morning report and immediately ask follow-up questions in the same thread.</p>

        <p>Discord (and other chat platforms like WhatsApp or Telegram) connect to the OpenClaw Gateway through <a href="/architecture/channel-adapters">Channel Adapters</a>. Each adapter translates between the platform's messaging format and the Gateway's internal protocol, which means agents don't need to know which platform you're using — they just send messages, and the adapter handles delivery.</p>

        <h3>Supplementary: Pushover (Push Notifications)</h3>

        <p>Pushover serves a different purpose than chat channels. While Discord messages are great for conversational flow and detailed content, Pushover delivers native mobile push notifications — the kind that light up your phone screen, play a sound, and appear on your lock screen. This makes Pushover ideal for time-sensitive alerts that need to reach you even when you're not looking at Discord: critical system failures, urgent deadlines, or anything that can't wait for you to check your messages.</p>

        <p>Pushover supports priority levels, custom sounds, and quiet hours, making it well-suited for a system that runs around the clock. Use it as an attention-getting complement to chat, not a replacement.</p>

        <h3>Additional Channels: Email &amp; Beyond</h3>

        <p>Email serves as a channel for longer-form content like weekly and monthly review summaries, where a chat message would be too long and a push notification too brief. It can also serve as a fallback if other channels are unreachable.</p>

        <div class="callout note">
          <strong>Adding new notification channels.</strong> The OpenClaw Gateway's <a href="/architecture/channel-adapters">Channel Adapter</a> architecture makes it straightforward to add new platforms. Want notifications via Telegram, Slack, or WhatsApp? Each platform requires its own Channel Adapter with the appropriate API credentials. Once configured, agents can deliver messages to any connected platform without changes to the agent configuration itself.
        </div>

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
                <td>Discord</td>
                <td>Normal</td>
                <td>"Your morning report for Tuesday is ready. 3 priorities, 2 calendar events."</td>
              </tr>
              <tr>
                <td>Evening check-in ready</td>
                <td>Discord</td>
                <td>Normal</td>
                <td>"Evening check-in: 5 of 7 tasks completed. 2 carry over to tomorrow."</td>
              </tr>
              <tr>
                <td>Weekly review compiled</td>
                <td>Discord + Email</td>
                <td>Normal</td>
                <td>"Your weekly review is ready. Full summary sent to email."</td>
              </tr>
              <tr>
                <td>Monthly review compiled</td>
                <td>Discord + Email</td>
                <td>Normal</td>
                <td>"Your January review is ready. Full summary sent to email."</td>
              </tr>
              <tr>
                <td>Syncthing sync failure</td>
                <td>Discord + Pushover</td>
                <td>High</td>
                <td>"Syncthing has been disconnected for 15 minutes. Files may not be current."</td>
              </tr>
              <tr>
                <td>Disk space warning</td>
                <td>Discord + Pushover</td>
                <td>High</td>
                <td>"Disk usage at 89%. Backups may fail if space is not freed."</td>
              </tr>
              <tr>
                <td>Cron job failure</td>
                <td>Discord + Pushover</td>
                <td>Critical</td>
                <td>"Morning report generation failed. Check Gateway logs for details."</td>
              </tr>
              <tr>
                <td>Agent urgent flag</td>
                <td>Discord + Pushover</td>
                <td>High</td>
                <td>"Deadline for Q1 report is tomorrow. Draft is not yet started."</td>
              </tr>
              <tr>
                <td>System service down</td>
                <td>Discord + Pushover</td>
                <td>Critical</td>
                <td>"Syncthing service has stopped. Attempting automatic restart."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Priority System</h2>

        <p>Every notification is assigned one of three priority levels. These control how the notification appears on your device and whether it can break through quiet hours.</p>

        <h3>Normal</h3>
        <p>Used for daily reports and routine deliveries. On Discord, these arrive as standard messages. If Pushover is configured, normal-priority notifications appear silently during quiet hours and badge your app icon without making a sound. Morning reports, evening check-ins, and review compilations are all normal priority.</p>

        <h3>High</h3>
        <p>Used for things that need your attention today but are not emergencies. On Discord, these are delivered like any other message. On Pushover, they play a sound and appear prominently but still respect quiet hours. Examples include Syncthing disconnections lasting more than 15 minutes, disk space warnings, and urgent flags from agents about approaching deadlines. High-priority events are sent to both Discord and Pushover to maximize the chance you see them promptly.</p>

        <h3>Critical</h3>
        <p>Used for system issues that require immediate action. On Pushover, critical notifications bypass quiet hours, play an alarm sound, and repeat until acknowledged. These are reserved for genuine failures: cron jobs that did not run, services that have crashed, or data integrity issues. You should see critical notifications rarely — if you are getting them frequently, something in your setup needs attention.</p>

        <div class="callout tip">
          <strong>Configure quiet hours in Pushover.</strong> Open the Pushover app on your phone, go to Settings, and set your quiet hours (for example, 10:00 PM to 6:00 AM). Normal and high priority notifications will be held silently until quiet hours end. Critical notifications will still come through immediately — that is by design, since they indicate something genuinely urgent.
        </div>

        <h2>How Channels Connect: Channel Adapters</h2>

        <p>Behind the scenes, every notification channel connects to the OpenClaw Gateway through a <a href="/architecture/channel-adapters">Channel Adapter</a>. The adapter handles authentication, message formatting, and delivery for its platform. This architecture means:</p>

        <ul>
          <li><strong>Agents are platform-agnostic.</strong> An agent doesn't "send a Discord message" — it sends a message, and the Channel Adapter for Discord handles the delivery. The same agent can deliver to Discord, WhatsApp, Telegram, or any other platform with a configured adapter.</li>
          <li><strong>Adding platforms is modular.</strong> To receive notifications on a new platform, you add a Channel Adapter for that platform. No changes to agents or their configuration are required — the new adapter simply becomes another available delivery channel.</li>
          <li><strong>Each adapter manages its own connection.</strong> If a Discord adapter loses its connection, it reconnects independently. Other adapters (Pushover, email) continue working unaffected. This isolation means a problem with one notification channel doesn't cascade to others.</li>
        </ul>

        <p>For the full technical details, see the <a href="/architecture/channel-adapters">Channel Adapters</a> architecture page.</p>

        <h2>Testing Notifications</h2>

        <p>Verify that your notification channels are working correctly:</p>

        <ul>
          <li><strong>Discord:</strong> Send a test message to your agent in Discord. If it responds, the Discord Channel Adapter is working and notifications will be delivered.</li>
          <li><strong>Pushover:</strong> If you have Pushover configured, ask Forge to send a test notification. This sends one notification at each priority level (normal, high, critical) so you can confirm delivery and see how each level looks and sounds on your device.</li>
        </ul>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li>Ensure your primary chat channel (Discord) is connected and your agent is responding.</li>
            <li>Optionally install the Pushover app on your phone for time-sensitive push alerts, and configure quiet hours.</li>
            <li>To add notification delivery via another platform, see <a href="/architecture/channel-adapters">Channel Adapters</a>.</li>
            <li>Review the <a href="/automation/cron-jobs">Cron Jobs</a> page to understand which scheduled tasks generate notifications.</li>
            <li>Check <a href="/troubleshooting">Common Issues</a> if notifications are not arriving as expected.</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
