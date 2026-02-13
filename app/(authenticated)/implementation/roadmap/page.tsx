import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Implementation Roadmap — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/implementation">Implementation</a>
          <span class="separator">/</span>
          Roadmap
        </div>

        <h1>Implementation Roadmap</h1>
        <p class="page-subtitle">Phased approach to completing the Agent Team OS build-out. Updated Feb 13 with audit-driven priorities.</p>

        <div class="callout warning">
          <div class="callout-title">Current Focus: Audit-Driven Remediation</div>
          <p><strong>Phase 1: Critical Fixes</strong> ✅ and <strong>Phase 2: Core Features</strong> ✅ are complete. The Feb 13 audits (comprehensive directory audit + Life OS graph gap audit) revealed security issues and operational gaps that are now the top priority. See <strong>Phase 2.5: Audit Remediation</strong> below.</p>
        </div>

        <h2>Phase 2.5: Audit Remediation 🔴 (Current Priority)</h2>
        <p>Findings from the Feb 13 comprehensive directory audit and Life OS graph gap audit. Prioritized by severity.</p>

        <h3>2.5.1 Security — Immediate 🔴</h3>
        <ul>
          <li><input type="checkbox" disabled> <strong>Rotate Supabase bearer token</strong> — exposed in <code>~/agent-guide/agents/ember/config/mcporter.json</code>. Rotate in Supabase dashboard immediately.</li>
          <li><input type="checkbox" disabled> <strong>Delete or restrict mcporter.json</strong> — even after rotation, remove the file or set 600 permissions</li>
          <li><input type="checkbox" disabled> <strong>Fix approval queue permissions</strong> — <code>req-1770872136</code> and <code>req-1770978435</code> are world-readable, should be 600</li>
          <li><input type="checkbox" disabled> <strong>Clean .claude.json backups</strong> — 5 backup files in home dir may contain session data</li>
        </ul>

        <h3>2.5.2 Life OS Templates — Critical 🔴</h3>
        <ul>
          <li><input type="checkbox" disabled> <strong>Make templates Logseq-compatible</strong> — add <code>template:: &lt;name&gt;</code> and <code>template-including-parent:: false</code> properties to all 10 templates</li>
          <li><input type="checkbox" disabled> <strong>Set journal auto-template</strong> — change <code>config.edn</code> from <code>:default-templates {:journals ""}</code> to <code>:default-templates {:journals "Daily Journal"}</code></li>
          <li><input type="checkbox" disabled> <strong>Reformat templates as Logseq blocks</strong> — use indented <code>-</code> prefix block structure</li>
        </ul>

        <h3>2.5.3 Missing Journal Entries — Critical 🔴</h3>
        <ul>
          <li><input type="checkbox" disabled> <strong>Create Feb 12 journal entry</strong> — backfill from agent logs/cron outputs</li>
          <li><input type="checkbox" disabled> <strong>Create Feb 13 journal entry</strong> — backfill from today's activity</li>
          <li><input type="checkbox" disabled> <strong>Set up auto-journal creation</strong> — cron job or agent task to pre-create daily journal files with template structure</li>
        </ul>

        <h3>2.5.4 Git Hygiene — Important 🟡</h3>
        <ul>
          <li><input type="checkbox" disabled> <strong>Create .gitignore for Life OS</strong> — exclude <code>.recycle/</code>, <code>bak/</code>, <code>node_modules/</code>; include <code>logseq/config.edn</code>, <code>logseq/custom.css</code></li>
          <li><input type="checkbox" disabled> <strong>Add logseq/ to git</strong> — <code>config.edn</code> (critical config) is currently untracked</li>
          <li><input type="checkbox" disabled> <strong>Add pages/contents.md to git</strong> — currently untracked</li>
        </ul>

        <h3>2.5.5 Life OS Content — Important 🟡</h3>
        <ul>
          <li><input type="checkbox" disabled> <strong>Populate contents.md</strong> — currently a single dash; should be navigational hub linking to areas, projects, templates</li>
          <li><input type="checkbox" disabled> <strong>Create missing project pages</strong> — only "Agent Team OS" exists; need CWA Magento, Implementation Status, etc.</li>
          <li><input type="checkbox" disabled> <strong>Flesh out area pages</strong> — all 5 are skeleton-only (headers but no content, notes, or references)</li>
          <li><input type="checkbox" disabled> <strong>Fix broken [[Implementation Status]] link</strong> — referenced in Agent Team OS page but page doesn't exist</li>
          <li><input type="checkbox" disabled> <strong>Add inter-page linking</strong> — only 1 internal <code>[[link]]</code> across entire graph; journals and areas should link to each other</li>
        </ul>

        <h3>2.5.6 Directory Cleanup — Important 🟡</h3>
        <ul>
          <li><input type="checkbox" disabled> <strong>Migrate legacy Ember data</strong> — 11 memory files (Jan 25–Feb 9), 8 project files, 4 reflections from <code>~/agent-guide/agents/ember/</code> to <code>~/agents/ember/memory/archive/</code></li>
          <li><input type="checkbox" disabled> <strong>Delete node_modules in agent-guide</strong> — 3,429 files (26MB) of exa-search dependencies</li>
          <li><input type="checkbox" disabled> <strong>Remove orphaned directories</strong> — <code>~/guide/</code>, <code>~/guide-temp/</code>, <code>~/guide.tar.gz</code></li>
          <li><input type="checkbox" disabled> <strong>Delete AppleDouble files</strong> — 27 macOS resource fork files (<code>._*</code>) in agent-guide</li>
          <li><input type="checkbox" disabled> <strong>Deduplicate Scout's review file</strong> — exists at root AND in <code>reports/</code></li>
          <li><input type="checkbox" disabled> <strong>Move Architect's review to memory/</strong> — <code>agent-team-os-review.md</code> at workspace root should be in <code>memory/</code></li>
        </ul>

        <h3>2.5.7 Nice-to-Have 🟢</h3>
        <ul>
          <li><input type="checkbox" disabled> <strong>Add assets/ directory</strong> to Life OS for images/attachments</li>
          <li><input type="checkbox" disabled> <strong>Configure Logseq favorites</strong> — add Contents, active projects, area pages to <code>:favorites</code></li>
          <li><input type="checkbox" disabled> <strong>Verify Logseq indexes areas/ directory</strong> — may need to move area pages to <code>pages/</code></li>
          <li><input type="checkbox" disabled> <strong>Adopt Logseq properties</strong> — define schema (<code>type::, area::, status::, priority::</code>) and apply</li>
          <li><input type="checkbox" disabled> <strong>Add favicon</strong> to website</li>
          <li><input type="checkbox" disabled> <strong>Add custom 404 page</strong></li>
        </ul>

        <h2>Phase 1: Critical Fixes ✅ Complete</h2>

        <h3>1.1 Fix Failing Cron Jobs ✅</h3>
        <ul>
          <li><input type="checkbox" checked disabled> Delete all 10 broken cron jobs (bad model refs, missing targets)</li>
          <li><input type="checkbox" checked disabled> Rebuild morning-report (6 AM Manila → Discord + Pushover)</li>
          <li><input type="checkbox" checked disabled> Rebuild evening-checkin (9:30 PM Manila → Discord + Pushover)</li>
          <li><input type="checkbox" checked disabled> Rebuild lifeos-git-backup (2 AM UTC → Discord)</li>
          <li><input type="checkbox" checked disabled> Rebuild weekly-review (Sun 9 AM Manila → Discord + Pushover)</li>
          <li><input type="checkbox" checked disabled> Rebuild monthly-review (1st 9 AM Manila → Discord + Pushover)</li>
          <li><input type="checkbox" checked disabled> Test run morning report — confirmed working</li>
        </ul>

        <h3>1.2 Syncthing Infrastructure ✅</h3>
        <ul>
          <li><input type="checkbox" checked disabled> Fix device ID mismatch (added MacBook's real ID: CGFKJGN...)</li>
          <li><input type="checkbox" checked disabled> Configure Tailscale direct address for Mac ↔ EC2</li>
          <li><input type="checkbox" checked disabled> Verify actual file sync working (76 files, idle, 0 errors)</li>
        </ul>

        <h3>1.3 Notifications ✅</h3>
        <ul>
          <li><input type="checkbox" checked disabled> Verify Pushover working (test confirmed)</li>
          <li><input type="checkbox" checked disabled> Integrate Pushover into all cadence cron jobs</li>
          <li><input type="checkbox" checked disabled> Discord #ember delivery confirmed for all jobs</li>
        </ul>

        <h2>Phase 2: Core Features ✅ Complete</h2>

        <h3>2.1 Life OS Templates ✅</h3>
        <ul>
          <li><input type="checkbox" checked disabled> 10 templates created (daily-journal, morning-report, evening-checkin, weekly-review, monthly-review, goal, research-brief, decision-log, project-kickoff, research-request)</li>
          <li><input type="checkbox" checked disabled> 5 area pages (health, work, personal, learning, finance)</li>
          <li><input type="checkbox" checked disabled> Project page: Agent Team OS</li>
          <li><input type="checkbox" checked disabled> Git repo initialized</li>
          <li><input type="checkbox" checked disabled> Templates match Chewy format (Colin's preferred)</li>
        </ul>
        <p><em>Note: Templates created but not Logseq-compatible — see Phase 2.5.2 for fix.</em></p>

        <h3>2.2 Google Calendar Integration ✅</h3>
        <ul>
          <li><input type="checkbox" checked disabled> Install gog CLI</li>
          <li><input type="checkbox" checked disabled> Authenticate with Colin's OAuth — completed Feb 12</li>
          <li><input type="checkbox" checked disabled> Integrate calendar events into morning report</li>
        </ul>

        <h3>2.3 Trust System Implementation ✅</h3>
        <ul>
          <li><input type="checkbox" checked disabled> Create trust level configuration file (<code>config/trust-levels.json</code>)</li>
          <li><input type="checkbox" checked disabled> Implement trust level enforcement (<code>scripts/trust-system.sh</code>)</li>
          <li><input type="checkbox" checked disabled> Build approval workflow for Level 2 agents</li>
          <li><input type="checkbox" checked disabled> Create trust escalation/demotion capability</li>
          <li><input type="checkbox" checked disabled> Integrate trust checks into agent command processing</li>
        </ul>

        <h3>2.4 Forge Activation ✅</h3>
        <ul>
          <li><input type="checkbox" checked disabled> Activate Forge agent with defined tasks</li>
          <li><input type="checkbox" checked disabled> Implement 5-minute health checks</li>
          <li><input type="checkbox" checked disabled> Set up automated log rotation</li>
          <li><input type="checkbox" checked disabled> Add disk space monitoring</li>
          <li><input type="checkbox" checked disabled> Verify daily backup completion</li>
        </ul>

        <h3>2.5 Scout Activation ✅</h3>
        <ul>
          <li><input type="checkbox" checked disabled> Activate Scout agent with Discord bot</li>
          <li><input type="checkbox" checked disabled> Implement trust protocol compliance</li>
          <li><input type="checkbox" checked disabled> Create research workflow (WORKFLOW.md)</li>
          <li><input type="checkbox" checked disabled> Set up research output directory (<code>~/life-os/research/</code>)</li>
        </ul>

        <h3>2.6 Website Migration ✅ (Feb 13)</h3>
        <ul>
          <li><input type="checkbox" checked disabled> Migrate static HTML site to Next.js</li>
          <li><input type="checkbox" checked disabled> Implement server-side authentication (Supabase)</li>
          <li><input type="checkbox" checked disabled> Deploy to Vercel</li>
          <li><input type="checkbox" checked disabled> Eliminate client-side password vulnerability</li>
        </ul>

        <h2>Phase 3: Complete Cadence (Weeks 4-5)</h2>

        <h3>3.1 Morning Report Enhancement</h3>
        <ul>
          <li><input type="checkbox" disabled> Pull priorities from Life OS journal</li>
          <li><input type="checkbox" disabled> Integrate Google Calendar events</li>
          <li><input type="checkbox" disabled> Add weather to report</li>
          <li><input type="checkbox" disabled> Include overnight activity summary</li>
          <li><input type="checkbox" disabled> Build flags section</li>
          <li><input type="checkbox" disabled> Implement adaptive formatting</li>
        </ul>

        <h3>3.2 Evening Check-in Enhancement</h3>
        <ul>
          <li><input type="checkbox" disabled> Add daily summary of accomplishments</li>
          <li><input type="checkbox" disabled> Include reflection prompts</li>
          <li><input type="checkbox" disabled> Build rollover task detection</li>
          <li><input type="checkbox" disabled> Add overnight queue setup</li>
        </ul>

        <h3>3.3 Weekly Review Enhancement</h3>
        <ul>
          <li><input type="checkbox" disabled> Compile tasks completed from week</li>
          <li><input type="checkbox" disabled> Identify carry-over tasks</li>
          <li><input type="checkbox" disabled> Add project progress summary</li>
          <li><input type="checkbox" disabled> Include notable events</li>
          <li><input type="checkbox" disabled> Add upcoming week preview</li>
        </ul>

        <h3>3.4 Monthly Review Enhancement</h3>
        <ul>
          <li><input type="checkbox" disabled> Build monthly goals progress tracker</li>
          <li><input type="checkbox" disabled> Add habit tracking review</li>
          <li><input type="checkbox" disabled> Include project status across areas</li>
          <li><input type="checkbox" disabled> Add financial check-in section</li>
          <li><input type="checkbox" disabled> Add health check-in section</li>
          <li><input type="checkbox" disabled> Add career check-in section</li>
          <li><input type="checkbox" disabled> Build next month planning template</li>
        </ul>

        <h2>Phase 4: Polish &amp; Enhance (Month 2)</h2>

        <h3>4.1 Additional Channels</h3>
        <ul>
          <li><input type="checkbox" disabled> Enable Telegram notifications</li>
          <li><input type="checkbox" disabled> Enable WhatsApp notifications</li>
          <li><input type="checkbox" disabled> Set up email as secondary channel</li>
          <li><input type="checkbox" disabled> Implement Normal/High/Critical priority routing</li>
        </ul>

        <h3>4.2 Scout Research Workflow</h3>
        <ul>
          <li><input type="checkbox" disabled> Create research request templates</li>
          <li><input type="checkbox" disabled> Build research brief format</li>
          <li><input type="checkbox" disabled> Add research queue tracking</li>
          <li><input type="checkbox" disabled> Implement approval workflow</li>
        </ul>

        <h3>4.3 Heartbeat Improvements</h3>
        <ul>
          <li><input type="checkbox" disabled> Create heartbeat-state.json tracking</li>
          <li><input type="checkbox" disabled> Implement rotated checks (email, calendar, weather)</li>
          <li><input type="checkbox" disabled> Add proactive background tasks</li>
          <li><input type="checkbox" disabled> Enforce quiet hours (23:00-08:00)</li>
        </ul>

        <h3>4.4 Documentation</h3>
        <ul>
          <li><input type="checkbox" disabled> Complete glossary</li>
          <li><input type="checkbox" disabled> Update file locations reference</li>
          <li><input type="checkbox" disabled> Expand command reference</li>
        </ul>

        <h2>Phase 5: Nice to Have (Future)</h2>
        <ul>
          <li><input type="checkbox" disabled> Agent dashboard web UI</li>
          <li><input type="checkbox" disabled> Mobile app (native)</li>
          <li><input type="checkbox" disabled> Voice integration (Alexa/Siri)</li>
          <li><input type="checkbox" disabled> Per-agent model selection</li>
          <li><input type="checkbox" disabled> Custom agent creation tools</li>
          <li><input type="checkbox" disabled> External tool integrations (Notion, Todoist)</li>
        </ul>

        <div class="action-section">
          <h2>Progress Tracking</h2>
          <p>As tasks are completed, this page will be updated to reflect current status. Check the <a href="/implementation/activity-log">Activity Log</a> for detailed work history.</p>
        </div>

        <p style="margin-top: 2rem; font-size: 0.8rem; color: #888;">Last updated: February 13, 2026 — Audit remediation priorities added</p>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
