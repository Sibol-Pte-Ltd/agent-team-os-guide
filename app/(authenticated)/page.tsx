import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agent Team OS — User Guide — Agent Team OS Guide',
}

const content = `<h1 class="page-title">Agent Team OS</h1>
        <p class="page-subtitle">Your personal AI agent team, working together to keep your life organized.</p>

        <p>Agent Team OS is a system of AI agents that manage your tasks, calendar, notes, and routines. They work on a schedule (cadence), sync data between your devices, and surface what matters each day — so you stay on top of things without the overhead.</p>

        <h2>How It Works</h2>
        <p>Four agents — <strong>Ember</strong>, <strong>Scout</strong>, <strong>Forge</strong>, and <strong>Architect</strong> — handle different areas of your life management. They operate within a <a href="/agents/trust-levels">trust system</a> that keeps you in control, and follow daily, weekly, and monthly rhythms to stay proactive.</p>

        <ul>
          <li><strong>Ember</strong> — Chief of Staff (L3 Autonomous). Manages your daily flow, creates reports, handles priorities.</li>
          <li><strong>Scout</strong> — Research Specialist (L2 Act with Approval). Digs into topics, gathers info, summarizes findings. Requires your approval before external actions.</li>
          <li><strong>Forge</strong> — Infrastructure Specialist (L3 Autonomous). Keeps the system running: backups, syncing, automation.</li>
          <li><strong>Architect</strong> — Strategic Planner (L2 Act with Approval). Handles deep synthesis, complex analysis, and high-stakes planning tasks.</li>
        </ul>

        <h2>Explore the Guide</h2>

        <div class="card-grid">
          <a href="/getting-started" class="card">
            <h3>Getting Started</h3>
            <p>Quick start guide, your first day, and setup checklist.</p>
          </a>
          <a href="/life-os" class="card">
            <h3>Life OS</h3>
            <p>Your personal operating system — workflows, templates, and LogSeq.</p>
          </a>
          <a href="/agents" class="card">
            <h3>Your Agents</h3>
            <p>Meet Ember, Scout, Forge, and Architect. Understand trust levels.</p>
          </a>
          <a href="/cadence" class="card">
            <h3>Cadence</h3>
            <p>Daily, weekly, and monthly rhythms that keep everything moving.</p>
          </a>
          <a href="/automation" class="card">
            <h3>Automation</h3>
            <p>Cron jobs, scheduled tasks, and notification routing.</p>
          </a>
          <a href="/troubleshooting" class="card">
            <h3>Troubleshooting</h3>
            <p>Common issues, Syncthing fixes, and FAQ.</p>
          </a>
          <a href="/reference/commands" class="card">
            <h3>Reference</h3>
            <p>Commands, file locations, and glossary of terms.</p>
          </a>
          <a href="/implementation" class="card">
            <h3>Implementation</h3>
            <p>Build status, gap analysis, roadmap, and activity log.</p>
          </a>
        </div>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li>New here? Start with <a href="/getting-started">Getting Started</a></li>
            <li>Want to understand the daily flow? Read <a href="/cadence/morning-report">Morning Report</a></li>
            <li>Something broken? Check <a href="/troubleshooting">Troubleshooting</a></li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
