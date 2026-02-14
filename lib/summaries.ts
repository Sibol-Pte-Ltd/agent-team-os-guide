export interface PageSummary {
  path: string
  summary: string
}

export const pageSummaries: Record<string, string> = {
  '/': 'Agent Team OS is a system of four AI agents (Ember, Scout, Forge, Architect) that manage your tasks, calendar, notes, and routines across devices using scheduled cadences and a shared Notes workspace.',

  // Getting Started
  '/getting-started': 'Agent Team OS runs on an EC2 instance with four AI agents coordinated through OpenClaw. Notes (LogSeq + Syncthing) is your shared workspace. Start by reviewing your morning report.',
  '/getting-started/first-day': 'Your first day: review the morning report in Discord, open LogSeq to browse your journal, try prioritizing tasks with Ember, and respond to the evening check-in.',
  '/getting-started/setup-checklist': 'Verify Syncthing sync, LogSeq access, Tailscale VPN, Discord/Pushover notifications, SSH keys, morning report delivery, trust levels, Gateway status, and cron jobs.',

  // Notes & Sync
  '/life-os': 'Notes is your personal knowledge layer built on LogSeq, synced via Syncthing between EC2 and your Mac. It holds journals, projects, areas, and templates that agents read and write to.',
  '/life-os/daily-workflow': 'Daily rhythm: 6 AM morning report auto-generated, you update your LogSeq journal throughout the day, 9:30 PM evening check-in closes out the day.',
  '/life-os/templates': 'Ten LogSeq-compatible templates covering daily journals, morning reports, evening check-ins, weekly/monthly reviews, goals, research briefs, decision logs, and project kickoffs.',
  '/life-os/logseq-tips': 'LogSeq essentials: block-based editing, page links with [[brackets]], slash commands, daily journals, favorites sidebar, search, and block references.',

  // Agents
  '/agents': 'Four agents with distinct roles — Ember (Chief of Staff, L3), Scout (Research, L2), Forge (Infrastructure, L3), and Architect (Strategy, L2) — all using MiniMax M2.5 by default.',
  '/agents/ember': 'Ember is your Chief of Staff at Trust Level 3 (Autonomous). She manages daily cadence, coordinates agents, handles priorities, and can spawn subagents for specialized tasks.',
  '/agents/scout': 'Scout is the Research Specialist at Trust Level 2 (Act with Approval). He investigates topics, compiles research briefs in Notes, and requires your approval before external actions.',
  '/agents/forge': 'Forge is the Infrastructure Specialist at Trust Level 3 (Autonomous). He monitors system health, backups, Syncthing sync, and manages the EC2 instance.',
  '/agents/architect': 'Architect handles strategic analysis at Trust Level 2. Deployed for deep reasoning, complex synthesis, and system design decisions. Use /model to switch to Opus for maximum depth.',
  '/agents/trust-levels': 'Four trust levels: L0 Observer (read-only), L1 Suggest (propose actions), L2 Act with Approval (execute after confirmation), L3 Autonomous (full independence within scope).',

  // Cadence
  '/cadence': 'Cadence is the scheduled rhythm of check-ins and reviews: daily morning reports (6 AM) and evening check-ins (9:30 PM), weekly reviews (Sunday), and monthly deep dives (1st of month).',
  '/cadence/morning-report': 'The 6 AM daily briefing synthesizes priorities, calendar events, overnight agent activity, and flags requiring your attention. Delivered via Discord and Pushover.',
  '/cadence/evening-checkin': 'The 9:30 PM end-of-day summary recaps accomplishments, lists pending tasks, and prompts reflection to set up tomorrow. You can reply with adjustments.',
  '/cadence/weekly-review': 'Sunday review covering completed tasks, carry-overs, project progress, notable events, and intention-setting for the upcoming week. Takes about 15-20 minutes.',
  '/cadence/monthly-review': 'First-of-month deep dive into goals, habit tracking, project status across all life areas, and strategic planning for the month ahead. Takes 30-45 minutes.',

  // Architecture
  '/architecture': 'OpenClaw is a five-stage pipeline: Channel Adapters normalize platform messages, Gateway routes them, Lane Queue serializes per-session, Agent Runner orchestrates LLM reasoning, Execution Layer runs tools.',
  '/architecture/channel-adapters': 'Channel Adapters normalize messages from eight platforms (Discord, Telegram, WhatsApp, Slack, Signal, iMessage, IRC, Google Chat) into OpenClaw\'s unified internal format.',
  '/architecture/gateway': 'The Gateway is the central daemon managing session routing, channel lifecycle, cron scheduling, WebSocket/HTTP API, and hot-reloading configuration without restarts.',
  '/architecture/lane-queue': 'Lane Queue ensures serial processing within each session (preventing race conditions) while allowing parallel execution across different sessions for responsiveness.',
  '/architecture/agent-runner': 'The Agent Runner orchestrates the reasoning loop: assembles context, calls the LLM, handles tool use, and streams responses. Supports model selection and automatic failover.',
  '/architecture/execution-layer': 'The Execution Layer runs tools (file ops, shell commands, browser automation, web operations, messaging) in a sandboxed environment with trust-level-enforced policies.',

  // Automation
  '/automation': 'Two types of automation: OpenClaw-scheduled agent jobs (morning reports, evening check-ins) and system-level automation (Syncthing, backups, log rotation).',
  '/automation/cron-jobs': 'OpenClaw\'s built-in cron scheduler manages five daily agent jobs. Distinct from system crontab — these run within the Gateway process and trigger agent sessions.',
  '/automation/notifications': 'Notifications flow through Discord (primary) and Pushover (supplementary) with three priority levels: Normal, High, and Critical. Channel Adapters handle routing.',

  // Troubleshooting
  '/troubleshooting': 'Common issues: missing morning reports (check cron/Gateway), stale LogSeq data (check Syncthing), unexpected agent actions (check trust levels), EC2 connectivity, and cron failures.',
  '/troubleshooting/syncthing': 'Syncthing troubleshooting: check sync status, resolve file conflicts, restart the service, and understand how Syncthing relates to the agent workspace.',
  '/troubleshooting/faq': 'FAQs covering agent access, EC2 downtime impact, adding new agents, data backup procedures, and OpenClaw architecture questions like heartbeat vs cron differences.',

  // Reference
  '/reference/commands': 'CLI reference for Syncthing, system commands, OpenClaw Gateway management, session/cron listing, service logs, and trust system commands with examples.',
  '/reference/file-locations': 'Key directories: Notes vault (~/.logseq), agent workspaces (~/agents/), OpenClaw runtime, trust system files, Syncthing config, and backup locations.',
  '/reference/glossary': 'Definitions of 33 key terms including Agent, Channel Adapter, Gateway, Lane Queue, Sandbox, Semantic Search, Session, Trust Level, and Workspace.',
  '/reference/changelog': 'Version history from v0.0.1 (initial infrastructure) through v0.5.0 (Notes rename), documenting major milestones and feature additions.',

  // Implementation
  '/implementation': 'Current status: website deployed, Gateway running, cron jobs OK, trust system enforcing. Active work on semantic search and session handoff features.',
  '/implementation/gap-analysis': 'Comprehensive audit documenting critical gaps (templates, journals, linking) resolved via Phase 2.5 remediation, plus security findings and structural issues addressed.',
  '/implementation/roadmap': 'Phased plan from Phase 0 (Syncthing fix) through Phase 5 (future enhancements). Phases 0 through 2.75 completed. Current work in Phase 5.',
  '/implementation/activity-log': 'Chronological work log documenting February 11-14, 2026: trust system implementation, Next.js migration, Syncthing fix, and documentation overhaul.',
  '/implementation/site-improvements': 'February 14 documentation overhaul: 25 improvements (4 critical fixes, 9 high-value additions, 12 nice-to-have) integrating OpenClaw Architecture across all 39 pages.',
  '/implementation/clawvault-analysis': 'Analysis comparing ClawVault structured memory with Agent Team OS, recommending selective adoption of memory patterns while keeping Notes as the separate knowledge layer.',
}

export function getSummary(path: string): string | null {
  return pageSummaries[path] ?? null
}

export interface SectionSummary {
  title: string
  href: string
  summary: string
  pages: { href: string; label: string; summary: string }[]
}

export function getAllSectionSummaries(): SectionSummary[] {
  return [
    {
      title: 'Getting Started',
      href: '/getting-started',
      summary: 'Set up your system and learn the basics of working with your AI agent team.',
      pages: [
        { href: '/getting-started', label: 'Quick Start', summary: pageSummaries['/getting-started'] },
        { href: '/getting-started/first-day', label: 'Your First Day', summary: pageSummaries['/getting-started/first-day'] },
        { href: '/getting-started/setup-checklist', label: 'Setup Checklist', summary: pageSummaries['/getting-started/setup-checklist'] },
      ],
    },
    {
      title: 'Notes & Sync',
      href: '/life-os',
      summary: 'Your personal knowledge layer — synced notes, templates, and daily workflows powered by LogSeq.',
      pages: [
        { href: '/life-os', label: 'What is Notes', summary: pageSummaries['/life-os'] },
        { href: '/life-os/daily-workflow', label: 'Daily Workflow', summary: pageSummaries['/life-os/daily-workflow'] },
        { href: '/life-os/templates', label: 'Templates', summary: pageSummaries['/life-os/templates'] },
        { href: '/life-os/logseq-tips', label: 'LogSeq Tips', summary: pageSummaries['/life-os/logseq-tips'] },
      ],
    },
    {
      title: 'Agents',
      href: '/agents',
      summary: 'Meet Ember, Scout, Forge, and Architect — your four AI agents with distinct roles and trust levels.',
      pages: [
        { href: '/agents', label: 'Meet Your Agents', summary: pageSummaries['/agents'] },
        { href: '/agents/ember', label: 'Ember', summary: pageSummaries['/agents/ember'] },
        { href: '/agents/scout', label: 'Scout', summary: pageSummaries['/agents/scout'] },
        { href: '/agents/forge', label: 'Forge', summary: pageSummaries['/agents/forge'] },
        { href: '/agents/architect', label: 'Architect', summary: pageSummaries['/agents/architect'] },
        { href: '/agents/trust-levels', label: 'Trust Levels', summary: pageSummaries['/agents/trust-levels'] },
      ],
    },
    {
      title: 'Cadence',
      href: '/cadence',
      summary: 'The scheduled rhythms — daily, weekly, and monthly — that keep your agent team and priorities in sync.',
      pages: [
        { href: '/cadence', label: 'Overview', summary: pageSummaries['/cadence'] },
        { href: '/cadence/morning-report', label: 'Morning Report', summary: pageSummaries['/cadence/morning-report'] },
        { href: '/cadence/evening-checkin', label: 'Evening Check-in', summary: pageSummaries['/cadence/evening-checkin'] },
        { href: '/cadence/weekly-review', label: 'Weekly Review', summary: pageSummaries['/cadence/weekly-review'] },
        { href: '/cadence/monthly-review', label: 'Monthly Review', summary: pageSummaries['/cadence/monthly-review'] },
      ],
    },
    {
      title: 'OpenClaw Architecture',
      href: '/architecture',
      summary: 'How the OpenClaw runtime engine processes messages through its five-component pipeline.',
      pages: [
        { href: '/architecture', label: 'Overview', summary: pageSummaries['/architecture'] },
        { href: '/architecture/channel-adapters', label: 'Channel Adapters', summary: pageSummaries['/architecture/channel-adapters'] },
        { href: '/architecture/gateway', label: 'Gateway', summary: pageSummaries['/architecture/gateway'] },
        { href: '/architecture/lane-queue', label: 'Lane Queue', summary: pageSummaries['/architecture/lane-queue'] },
        { href: '/architecture/agent-runner', label: 'Agent Runner', summary: pageSummaries['/architecture/agent-runner'] },
        { href: '/architecture/execution-layer', label: 'Execution Layer', summary: pageSummaries['/architecture/execution-layer'] },
      ],
    },
    {
      title: 'Automation',
      href: '/automation',
      summary: 'Scheduled agent jobs and system-level automation that keep everything running.',
      pages: [
        { href: '/automation', label: 'Overview', summary: pageSummaries['/automation'] },
        { href: '/automation/cron-jobs', label: 'Cron Jobs', summary: pageSummaries['/automation/cron-jobs'] },
        { href: '/automation/notifications', label: 'Notifications', summary: pageSummaries['/automation/notifications'] },
      ],
    },
    {
      title: 'Troubleshooting',
      href: '/troubleshooting',
      summary: 'Solutions for common issues with sync, agents, connectivity, and scheduled tasks.',
      pages: [
        { href: '/troubleshooting', label: 'Common Issues', summary: pageSummaries['/troubleshooting'] },
        { href: '/troubleshooting/syncthing', label: 'Syncthing', summary: pageSummaries['/troubleshooting/syncthing'] },
        { href: '/troubleshooting/faq', label: 'FAQ', summary: pageSummaries['/troubleshooting/faq'] },
      ],
    },
    {
      title: 'Reference',
      href: '/reference/commands',
      summary: 'Commands, file locations, glossary, and version history for quick lookup.',
      pages: [
        { href: '/reference/commands', label: 'Commands', summary: pageSummaries['/reference/commands'] },
        { href: '/reference/file-locations', label: 'File Locations', summary: pageSummaries['/reference/file-locations'] },
        { href: '/reference/glossary', label: 'Glossary', summary: pageSummaries['/reference/glossary'] },
        { href: '/reference/changelog', label: 'Changelog', summary: pageSummaries['/reference/changelog'] },
      ],
    },
    {
      title: 'Implementation',
      href: '/implementation',
      summary: 'Build status, gap analysis, roadmap, and activity tracking for ongoing development.',
      pages: [
        { href: '/implementation', label: 'Status', summary: pageSummaries['/implementation'] },
        { href: '/implementation/gap-analysis', label: 'Gap Analysis', summary: pageSummaries['/implementation/gap-analysis'] },
        { href: '/implementation/roadmap', label: 'Roadmap', summary: pageSummaries['/implementation/roadmap'] },
        { href: '/implementation/activity-log', label: 'Activity Log', summary: pageSummaries['/implementation/activity-log'] },
        { href: '/implementation/site-improvements', label: 'Site Improvements', summary: pageSummaries['/implementation/site-improvements'] },
        { href: '/implementation/clawvault-analysis', label: 'ClawVault Analysis', summary: pageSummaries['/implementation/clawvault-analysis'] },
      ],
    },
  ]
}
