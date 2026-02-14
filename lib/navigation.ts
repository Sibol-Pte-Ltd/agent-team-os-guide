export interface NavLink {
  href: string
  label: string
}

export interface NavSection {
  title: string | null
  links: NavLink[]
}

export const sections: NavSection[] = [
  {
    title: null,
    links: [{ href: '/', label: 'Home' }],
  },
  {
    title: 'Getting Started',
    links: [
      { href: '/getting-started', label: 'Quick Start' },
      { href: '/getting-started/first-day', label: 'Your First Day' },
      { href: '/getting-started/setup-checklist', label: 'Setup Checklist' },
    ],
  },
  {
    title: 'Notes & Sync',
    links: [
      { href: '/life-os', label: 'What is Notes' },
      { href: '/life-os/daily-workflow', label: 'Daily Workflow' },
      { href: '/life-os/templates', label: 'Templates' },
      { href: '/life-os/logseq-tips', label: 'LogSeq Tips' },
    ],
  },
  {
    title: 'Agents',
    links: [
      { href: '/agents', label: 'Meet Your Agents' },
      { href: '/agents/ember', label: 'Ember' },
      { href: '/agents/scout', label: 'Scout' },
      { href: '/agents/forge', label: 'Forge' },
      { href: '/agents/architect', label: 'Architect' },
      { href: '/agents/trust-levels', label: 'Trust Levels' },
    ],
  },
  {
    title: 'Cadence',
    links: [
      { href: '/cadence', label: 'Overview' },
      { href: '/cadence/morning-report', label: 'Morning Report' },
      { href: '/cadence/evening-checkin', label: 'Evening Check-in' },
      { href: '/cadence/weekly-review', label: 'Weekly Review' },
      { href: '/cadence/monthly-review', label: 'Monthly Review' },
    ],
  },
  {
    title: 'OpenClaw Architecture',
    links: [
      { href: '/architecture', label: 'Overview' },
      { href: '/architecture/channel-adapters', label: 'Channel Adapters' },
      { href: '/architecture/gateway', label: 'Gateway' },
      { href: '/architecture/lane-queue', label: 'Lane Queue' },
      { href: '/architecture/agent-runner', label: 'Agent Runner' },
      { href: '/architecture/execution-layer', label: 'Execution Layer' },
    ],
  },
  {
    title: 'Automation',
    links: [
      { href: '/automation', label: 'Overview' },
      { href: '/automation/cron-jobs', label: 'Cron Jobs' },
      { href: '/automation/notifications', label: 'Notifications' },
    ],
  },
  {
    title: 'Troubleshooting',
    links: [
      { href: '/troubleshooting', label: 'Common Issues' },
      { href: '/troubleshooting/syncthing', label: 'Syncthing' },
      { href: '/troubleshooting/faq', label: 'FAQ' },
    ],
  },
  {
    title: 'Reference',
    links: [
      { href: '/reference/commands', label: 'Commands' },
      { href: '/reference/file-locations', label: 'File Locations' },
      { href: '/reference/glossary', label: 'Glossary' },
      { href: '/reference/changelog', label: 'Changelog' },
    ],
  },
  {
    title: 'Implementation',
    links: [
      { href: '/implementation', label: 'Status' },
      { href: '/implementation/gap-analysis', label: 'Gap Analysis' },
      { href: '/implementation/roadmap', label: 'Roadmap' },
      { href: '/implementation/activity-log', label: 'Activity Log' },
      { href: '/implementation/site-improvements', label: 'Site Improvements' },
      { href: '/implementation/clawvault-analysis', label: 'ClawVault Analysis' },
    ],
  },
]
