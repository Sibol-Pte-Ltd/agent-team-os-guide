import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Changelog — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/reference/commands">Reference</a>
          <span class="separator">/</span>
          Changelog
        </div>

        <h1>Version Control &amp; Changelog</h1>
        <p class="page-subtitle">How the system is versioned, backed up, and what's changed over time.</p>

        <h2>Version Control</h2>

        <table>
          <thead>
            <tr>
              <th>Repository</th>
              <th>Location</th>
              <th>What It Tracks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Agent Workspace</strong></td>
              <td><code>~/agents/ember/</code></td>
              <td>Agent config, scripts, memory files</td>
            </tr>
            <tr>
              <td><strong>Life OS</strong></td>
              <td><code>~/life-os/</code></td>
              <td>Vault data, templates, journals</td>
            </tr>
            <tr>
              <td><strong>Agent Team OS Guide</strong></td>
              <td><code>~/agent-guide/</code></td>
              <td>This website — all documentation pages</td>
            </tr>
          </tbody>
        </table>

        <div class="callout info">
          <div class="callout-title">Automated Backups</div>
          <p>The <strong>lifeos-git-backup</strong> cron job runs nightly at <strong>2:00 AM UTC</strong>, committing and pushing any changes in the Life OS vault. Backup verification (via Forge) runs daily at <strong>2:15 AM UTC</strong>, checking git repo health and warning if the last backup is more than 48 hours stale.</p>
        </div>

        <h2>Changelog</h2>

        <h3>February 13, 2026 — v0.4.0: Architect Agent &amp; Sidebar Refactor</h3>
        <p>Fourth agent joins the team, and the website gets a major maintainability upgrade.</p>
        <ul>
          <li><strong>New agent:</strong> Architect added — high-reasoning agent using Opus 4.6 for strategic planning, deep synthesis, and complex analysis</li>
          <li><strong>Agent profile page:</strong> <a href="/agents/architect">agents/architect.html</a> created with full agent profile (role, trust level, capabilities, usage guidance)</li>
          <li><strong>Sidebar refactor:</strong> Converted 32 duplicated sidebar blocks across every page to a single JavaScript-injected component (<code>js/sidebar.js</code>) — eliminates maintenance overhead for navigation changes</li>
          <li><strong>Agent count updates:</strong> Updated all references from "three agents" to "four agents" across <a href="/">Homepage</a>, <a href="/getting-started">Getting Started</a>, <a href="/getting-started/setup-checklist">Setup Checklist</a>, <a href="/agents">Agents index</a>, <a href="/reference/trust-levels">Trust Levels</a>, <a href="/reference/glossary">Glossary</a>, and <a href="/implementation/gap-analysis">Gap Analysis</a></li>
        </ul>

        <h3>February 12, 2026 — v0.3.0: Trust System Complete</h3>
        <p>Trust system goes from "designed" to "fully operational and tested."</p>
        <ul>
          <li>Trust system enforcement engine built and activated (<code>trust-system.sh</code> — 10 subcommands)</li>
          <li>Approval workflow implemented: queue in <code>data/approval-queue/</code>, auto-notifications via Discord + Pushover</li>
          <li>Agent integration layer created (<code>trust-check.sh</code> + <code>.bashrc.agent</code>) — all agent sessions auto-source trust functions</li>
          <li>Trust configuration finalized: <code>config/trust-levels.json</code> — 4 levels (L0–L3), 3 agents, 10 action categories</li>
          <li>Scout Trust Protocol test <strong>PASSED</strong> — Scout requested approval before posting to Discord, user approved via CLI, Scout posted only after approval</li>
          <li>Agent-specific SOUL.md files created for Scout and Forge with trust instructions</li>
          <li>All agent documentation updated (SOUL.md, AGENTS.md, templates/spawn-with-trust.md)</li>
          <li>Agent Team OS website updated across 8+ pages to document trust system</li>
          <li>Full audit logging active at <code>logs/trust-decisions.log</code></li>
        </ul>

        <h3>February 11, 2026 — v0.2.0: Operationalization</h3>
        <p>Major push to get everything from "documented" to "actually working."</p>
        <ul>
          <li>Rebuilt all cron jobs from scratch (morning report, evening check-in, git backup, weekly/monthly review)</li>
          <li>Fixed Syncthing connectivity (added MacBook device ID, Tailscale direct addresses)</li>
          <li>Created Life OS templates (7 templates matching Colin's preferred formats)</li>
          <li>Created Life OS area pages (health, work, personal, learning, finance)</li>
          <li>Activated Forge agent (health checks every 5 min, log rotation, backup verification)</li>
          <li>Updated implementation pages to reflect current state</li>
          <li>Confirmed Pushover notifications working</li>
          <li>Three-way sync verified: EC2 ↔ MacBook ↔ iPhone</li>
        </ul>

        <h3>February 11, 2026 — v0.1.0: Initial Setup</h3>
        <p>The system takes shape — documentation, infrastructure, and first agents come online.</p>
        <ul>
          <li>Agent Team OS website created (30 pages)</li>
          <li>Gap analysis completed</li>
          <li>Roadmap defined (5 phases)</li>
          <li>Initial Life OS vault structure (journals, pages, areas)</li>
          <li>Basic morning report and evening check-in scripts</li>
          <li>Syncthing configured (EC2 hub)</li>
          <li>Discord bots connected (Ember, Scout)</li>
          <li>Pushover configured</li>
        </ul>

        <h3>Earlier — v0.0.1: Foundation</h3>
        <p>Base infrastructure provisioned and core agent identity established.</p>
        <ul>
          <li>EC2 instance provisioned</li>
          <li>Tailscale mesh VPN configured</li>
          <li>OpenClaw gateway installed and running</li>
          <li>Agent workspace created at <code>~/agents/ember/</code></li>
          <li>SOUL.md, IDENTITY.md, USER.md, AGENTS.md, TOOLS.md created</li>
        </ul>

        <div class="action-section">
          <h2>Related Pages</h2>
          <ul>
            <li><a href="/implementation/activity-log">Activity Log</a> — detailed work history with timestamps</li>
            <li><a href="/implementation/roadmap">Roadmap</a> — what's planned next</li>
            <li><a href="/implementation">Implementation Status</a> — current state dashboard</li>
            <li><a href="/reference/file-locations">File Locations</a> — where everything lives on disk</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
