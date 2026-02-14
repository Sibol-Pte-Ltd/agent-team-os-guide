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

        <h2>How Scheduling Works</h2>

        <p>All scheduled tasks in Agent Team OS are managed by the <a href="/architecture/gateway">OpenClaw Gateway's</a> built-in cron scheduler — not by your server's system crontab. The Gateway is the scheduling engine for the entire system: it owns the cron schedule, fires jobs on time, and starts agent sessions in the dedicated <a href="/architecture/lane-queue">cron lane</a> where agents reason about what to do using their full tool set. This means scheduled tasks are intelligent — they adapt based on context rather than running static scripts.</p>

        <p>You manage the schedule with <code>openclaw cron list</code>, <code>openclaw cron create</code>, and related commands. See <a href="/automation/cron-jobs">Cron Jobs</a> for the full schedule, management commands, and details on how OpenClaw cron differs from system cron.</p>

        <h3>OpenClaw-Scheduled vs System-Level Automation</h3>

        <p>It is important to distinguish between the two kinds of automation running in Agent Team OS:</p>

        <ul>
          <li><strong>OpenClaw-scheduled tasks (cadence)</strong> — Morning reports, evening check-ins, weekly reviews, monthly reviews, and Life OS git backups. These are all managed by the <a href="/architecture/gateway">Gateway's cron scheduler</a>, run as intelligent agent sessions, and deliver output through <a href="/architecture/channel-adapters">Channel Adapters</a> (Discord, Pushover). You configure and monitor them entirely through OpenClaw.</li>
          <li><strong>System-level automation</strong> — Services like <strong>Syncthing</strong> (continuous file sync between devices) and <strong>systemd units</strong> (the Gateway service itself, log rotation via logrotate, auto-journal creation). These run as standard Linux processes managed by systemd, independent of OpenClaw's scheduler. They would keep running even if the Gateway were stopped.</li>
        </ul>

        <p>The key difference: OpenClaw cron jobs are <em>agent sessions</em> — they think, reason, and use tools. System-level automation is static infrastructure that runs the same way every time.</p>

        <h2>Fully Automated</h2>

        <p>These tasks run without any intervention from you. They are triggered by the OpenClaw cron scheduler or system-level services, execute on schedule, and only surface a notification if something goes wrong.</p>

        <h3>Gateway-Scheduled (OpenClaw Cron)</h3>
        <ul>
          <li><strong>Cron jobs</strong> — Scheduled agent sessions that run at specific times every day, week, or month. Managed by the <a href="/architecture/gateway">Gateway</a> and isolated in the <a href="/architecture/lane-queue">cron lane</a>. See <a href="/automation/cron-jobs">Cron Jobs</a> for the full schedule.</li>
          <li><strong>Heartbeat checks</strong> — Periodic agent sessions that check email, calendar, system health, and other data sources, batching multiple checks into a single run.</li>
        </ul>

        <h3>System-Level (systemd / Linux Services)</h3>
        <ul>
          <li><strong>Syncthing sync</strong> — File synchronization between your devices runs continuously in the background as a systemd service. Health checks confirm it stays connected.</li>
          <li><strong>Daily backups</strong> — Your Life OS data, agent configurations, and logs are backed up every night at midnight.</li>
          <li><strong>Log rotation</strong> — Old log files are compressed and archived automatically via logrotate so they do not consume disk space.</li>
          <li><strong>Auto-journal creation</strong> — A system cron job creates the next day's Life OS journal entry at 00:01 UTC daily.</li>
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
                <td>Daily, 4:30 PM</td>
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
                <td>Heartbeat checks</td>
                <td>Automated</td>
                <td>Every 30 minutes</td>
                <td>Ember</td>
              </tr>
              <tr>
                <td>Weekly review compilation</td>
                <td>Human-in-the-loop</td>
                <td>Sundays, 8:00 AM</td>
                <td>Ember</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li>Review the full <a href="/automation/cron-jobs">Cron Jobs</a> schedule to see exactly when each task runs and how to manage them with <code>openclaw cron list</code>.</li>
            <li>Set up your <a href="/automation/notifications">Notifications</a> so you receive alerts in the right place at the right time.</li>
            <li>Read about the <a href="/architecture/gateway">Gateway</a> to understand the daemon that runs the cron scheduler.</li>
            <li>See <a href="/architecture/lane-queue">Lane Queue</a> to understand how scheduled tasks are isolated from your conversations.</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
