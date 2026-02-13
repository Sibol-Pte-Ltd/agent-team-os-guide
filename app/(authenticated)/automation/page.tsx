import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Automation Overview — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a> / Automation
        </div>

        <h1>Automation Overview</h1>

        <p>Agent Team OS is designed so that routine work happens without you thinking about it. Your agents handle the repetitive tasks, the scheduled reports, and the background maintenance while you focus on decisions and creative work. But not everything runs on autopilot — some tasks are deliberately designed to keep you in the loop.</p>

        <p>Understanding what is fully automated versus what requires your input helps you trust the system and know where your attention is actually needed.</p>

        <h2>Fully Automated</h2>

        <p>These tasks run without any intervention from you. They are triggered by cron jobs or system events, execute on schedule, and only surface a notification if something goes wrong.</p>

        <ul>
          <li><strong>Cron jobs</strong> — Scheduled scripts that run at specific times every day, week, or month. See <a href="/automation/cron-jobs">Cron Jobs</a> for the full schedule.</li>
          <li><strong>Syncthing sync</strong> — File synchronization between your devices runs continuously in the background. Health checks confirm it stays connected.</li>
          <li><strong>Daily backups</strong> — Your Life OS data, agent configurations, and logs are backed up every night at midnight.</li>
          <li><strong>Health checks</strong> — Every five minutes, Forge verifies that Syncthing is running, disk space is adequate, and agent processes are healthy.</li>
          <li><strong>Log rotation</strong> — Old log files are compressed and archived automatically so they do not consume disk space.</li>
        </ul>

        <h2>Human-in-the-Loop</h2>

        <p>These tasks are prepared by your agents but require you to review, approve, or act on the output. The agents do the heavy lifting; you make the final call.</p>

        <ul>
          <li><strong>Morning reports</strong> — Ember compiles your schedule, priorities, and context each morning. You read and decide how to spend your day.</li>
          <li><strong>Research briefs</strong> — Scout gathers information on topics you have flagged. You review the findings and decide what to pursue.</li>
          <li><strong>Priority changes</strong> — When an agent identifies something that might change your plans, it flags it for your review rather than acting unilaterally.</li>
          <li><strong>Evening check-ins</strong> — Ember summarizes what happened today and surfaces anything that needs your attention before tomorrow.</li>
          <li><strong>Weekly and monthly reviews</strong> — Agents compile data and draft summaries, but you reflect on the bigger picture and set direction.</li>
        </ul>

        <h2>Automation Schedule at a Glance</h2>

        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Type</th>
                <th>Frequency</th>
                <th>Managed By</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Morning report generation</td>
                <td>Human-in-the-loop</td>
                <td>Daily, 6:00 AM</td>
                <td>Ember</td>
              </tr>
              <tr>
                <td>Evening check-in</td>
                <td>Human-in-the-loop</td>
                <td>Daily, 9:30 PM</td>
                <td>Ember</td>
              </tr>
              <tr>
                <td>Syncthing sync</td>
                <td>Automated</td>
                <td>Continuous</td>
                <td>Forge</td>
              </tr>
              <tr>
                <td>Daily backups</td>
                <td>Automated</td>
                <td>Daily, midnight</td>
                <td>Forge</td>
              </tr>
              <tr>
                <td>Log rotation</td>
                <td>Automated</td>
                <td>Daily, 3:00 AM</td>
                <td>Forge</td>
              </tr>
              <tr>
                <td>Weekly review compilation</td>
                <td>Human-in-the-loop</td>
                <td>Sundays, 8:00 AM</td>
                <td>Ember</td>
              </tr>
              <tr>
                <td>System health checks</td>
                <td>Automated</td>
                <td>Every 5 minutes</td>
                <td>Forge</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li>Review the full <a href="/automation/cron-jobs">Cron Jobs</a> schedule to see exactly when each task runs and which script handles it.</li>
            <li>Set up your <a href="/automation/notifications">Notifications</a> so you receive alerts in the right place at the right time.</li>
            <li>Read about <a href="/agents/forge">Forge</a> to understand the agent responsible for most automation infrastructure.</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
