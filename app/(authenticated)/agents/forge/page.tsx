import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forge — Infrastructure Specialist — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/agents">Agents</a>
          <span class="separator">/</span>
          Forge
        </div>

        <h1>Forge — Infrastructure Specialist</h1>

        <p>Forge is the backbone of Agent Team OS. He keeps the system infrastructure running, handles backups and synchronization, and makes sure the automation layer operates without interruption. If everything is working and you do not notice anything — that means Forge is doing his job.</p>

        <h2>Role</h2>

        <p>Forge is responsible for system infrastructure, reliability, and automation. While Ember manages your daily workflow and Scout handles research, Forge manages the technical foundations that make everything else possible. He ensures files sync correctly between devices, cron jobs run on schedule, backups complete successfully, and the EC2 instance that hosts the agent team stays healthy.</p>

        <p>Forge is the most invisible member of the team by design. His work happens in the background, and you only hear from him when something needs your attention — like a disk running low on space, a sync conflict that needs resolution, or an anomaly that does not fit normal patterns.</p>

        <h2>Responsibilities</h2>

        <ul>
          <li><strong>Manages Syncthing synchronization</strong> — Forge monitors Syncthing to ensure files stay in sync across your devices. He detects conflicts, resolves them when possible, and flags you when manual intervention is needed.</li>
          <li><strong>Maintains cron jobs</strong> — The scheduled tasks that power the daily cadence — morning reports, evening check-ins, backups, and health checks — are all managed by Forge. He ensures they run on time and investigates when they do not.</li>
          <li><strong>Handles backups</strong> — Forge runs scheduled backups of your Life OS data and system configuration. He verifies backup integrity and rotates old backups to manage storage.</li>
          <li><strong>Monitors system health</strong> — Forge tracks CPU usage, memory, disk space, and network connectivity on the EC2 instance. He identifies trends (like gradually increasing disk usage) before they become problems.</li>
          <li><strong>Manages the EC2 instance</strong> — The cloud server that runs Agent Team OS is Forge's domain. He handles updates, restarts when necessary, and ensures the instance is configured correctly.</li>
        </ul>

        <h2>Trust Level</h2>

        <p>Forge operates at <strong>Trust Level 3 — Autonomous</strong>. He has an agent-specific <code>SOUL.md</code> with trust instructions that define his boundaries and escalation triggers. He can perform routine maintenance independently, including running backups, restarting services, clearing temporary files, and resolving straightforward sync conflicts. These are well-defined operations with predictable outcomes, so Forge handles them without asking.</p>

        <p>Forge escalates to you (via Ember) when he encounters anomalies — situations that fall outside normal parameters. Examples include unexpected disk usage spikes, repeated sync failures, services that will not restart, or configuration changes that could affect your workflow. Forge's philosophy is: routine work happens silently; anything unusual gets flagged.</p>

        <h2>How Forge Works</h2>

        <p>You will rarely interact with Forge directly. Most of his work is automated and runs on a schedule. Here is what a typical day looks like from Forge's perspective:</p>

        <ul>
          <li><strong>3:00 AM</strong> — Run scheduled backup of Life OS data and verify integrity.</li>
          <li><strong>5:30 AM</strong> — Perform system health check (CPU, memory, disk, network). Log results.</li>
          <li><strong>5:45 AM</strong> — Verify Syncthing status across all connected devices. Resolve any pending conflicts.</li>
          <li><strong>6:00 AM</strong> — Provide health summary to Ember for inclusion in the morning report.</li>
          <li><strong>Throughout the day</strong> — Monitor for anomalies. Run any ad-hoc maintenance tasks queued by Ember.</li>
          <li><strong>11:00 PM</strong> — Run end-of-day sync verification. Clear temporary files. Prepare for overnight operations.</li>
        </ul>

        <p>If you need Forge to do something specific — like check on a sync issue, run an unscheduled backup, or investigate a system problem — you can route the request through Ember, who will assign it to Forge.</p>

        <div class="callout note">
          <div class="callout-title">Note</div>
          <p>Forge monitors system health continuously, not just at scheduled check-in times. If disk usage spikes suddenly, a service crashes, or Syncthing loses connectivity, Forge will detect it and respond in real time. The scheduled checks listed above are for routine reporting — Forge's monitoring runs around the clock.</p>
        </div>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li><a href="/automation/cron-jobs">Learn about Cron Jobs</a> that Forge manages</li>
            <li><a href="/troubleshooting/syncthing">Syncthing troubleshooting</a> for sync-related issues</li>
            <li><a href="/agents/ember">Learn about Ember</a> and how she coordinates with Forge</li>
            <li><a href="/agents/trust-levels">Understand Trust Levels</a> and what Level 3 means in practice</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
