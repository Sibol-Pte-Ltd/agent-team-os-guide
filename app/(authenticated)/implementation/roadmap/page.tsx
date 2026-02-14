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
        <p class="page-subtitle">Phased approach to completing the Agent Team OS build-out. Updated Feb 14 with documentation overhaul completion.</p>

        <div class="callout success">
          <div class="callout-title">Current Focus: Phase 3 — Complete Cadence</div>
          <p><strong>Phase 1: Critical Fixes</strong> ✅, <strong>Phase 2: Core Features</strong> ✅, <strong>Phase 2.5: Audit Remediation</strong> ✅, and <strong>Phase 2.75: Documentation Overhaul</strong> ✅ are all complete. The documentation is now comprehensive, architecture-aligned, and cross-linked. Now moving to <strong>Phase 3: Complete Cadence</strong> — enhancing morning reports, evening check-ins, and reviews with richer data from the now-operational Life OS.</p>
        </div>

        <h2>Phase 2.5: Audit Remediation ✅ Complete</h2>
        <p>Findings from the Feb 13 comprehensive directory audit and Life OS graph gap audit. All critical and important items resolved. Security deferred by design.</p>

        <h3>2.5.1 Security — Deferred 🟢</h3>
        <p><em>Deferred per Colin's instruction: Files in ~/agent-guide/ will change later, making token rotation lower priority.</em></p>
        <ul>
          <li><input type="checkbox" disabled> <strong>Rotate Supabase bearer token</strong> — exposed in <code>~/agent-guide/agents/ember/config/mcporter.json</code>. Rotate in Supabase dashboard when ready.</li>
          <li><input type="checkbox" disabled> <strong>Delete or restrict mcporter.json</strong> — even after rotation, remove the file or set 600 permissions</li>
          <li><input type="checkbox" disabled> <strong>Fix approval queue permissions</strong> — <code>req-1770872136</code> and <code>req-1770978435</code> are world-readable, should be 600</li>
          <li><input type="checkbox" disabled> <strong>Clean .claude.json backups</strong> — 5 backup files in home dir may contain session data</li>
        </ul>

        <h3>2.5.2 Life OS Templates ✅ Complete</h3>
        <ul>
          <li><input type="checkbox" checked disabled> <strong>Make templates Logseq-compatible</strong> — added <code>template:: &lt;name&gt;</code> and <code>template-including-parent:: false</code> properties to all 10 templates</li>
          <li><input type="checkbox" checked disabled> <strong>Set journal auto-template</strong> — <code>config.edn</code> set to <code>:default-templates {:journals "Daily Journal"}</code></li>
          <li><input type="checkbox" checked disabled> <strong>Reformat templates as Logseq blocks</strong> — all templates use indented <code>-</code> prefix block structure</li>
        </ul>

        <h3>2.5.3 Missing Journal Entries ✅ Complete</h3>
        <ul>
          <li><input type="checkbox" checked disabled> <strong>Create Feb 12 journal entry</strong> — backfilled with trust system implementation, testing, documentation</li>
          <li><input type="checkbox" checked disabled> <strong>Create Feb 13 journal entry</strong> — backfilled with Next.js migration, audits, Phase 2.5 kickoff</li>
          <li><input type="checkbox" checked disabled> <strong>Set up auto-journal creation</strong> — <code>~/agents/ember/scripts/create-daily-journal.sh</code> with cron at 00:01 UTC daily</li>
          <li><input type="checkbox" checked disabled> <strong>Bonus: Feb 14 pre-created</strong> — tomorrow's journal ready</li>
        </ul>

        <h3>2.5.4 Git Hygiene ✅ Complete</h3>
        <ul>
          <li><input type="checkbox" checked disabled> <strong>Create .gitignore for Life OS</strong> — excludes .recycle/, bak/, node_modules/, editor dirs, OS artifacts</li>
          <li><input type="checkbox" checked disabled> <strong>Add logseq/ to git</strong> — <code>config.edn</code> (421 lines) and <code>custom.css</code> tracked</li>
          <li><input type="checkbox" checked disabled> <strong>Add pages/contents.md to git</strong> — now tracked</li>
          <li>Committed as <code>320ae8a</code></li>
        </ul>

        <h3>2.5.5 Life OS Content ✅ Complete</h3>
        <ul>
          <li><input type="checkbox" checked disabled> <strong>Populate contents.md</strong> — transformed to 53-line navigational hub with Areas, Projects, Templates, Journals, Quick Navigation</li>
          <li><input type="checkbox" checked disabled> <strong>Create missing project pages</strong> — CWA Magento page created with status, objectives, tasks</li>
          <li><input type="checkbox" checked disabled> <strong>Create Implementation Status page</strong> — full build-out tracker with Phase 2.5 roadmap</li>
          <li><input type="checkbox" checked disabled> <strong>Flesh out area pages</strong> — all 5 areas now have priorities, standards, active projects, key decisions, tracking methods</li>
          <li><input type="checkbox" checked disabled> <strong>Fix broken [[Implementation Status]] link</strong> — page created, link now resolves</li>
          <li><input type="checkbox" checked disabled> <strong>Add inter-page linking</strong> — <strong>81 internal links</strong> across the graph (was 1)</li>
          <li><input type="checkbox" checked disabled> <strong>Copy area pages to pages/</strong> — ensures proper Logseq link resolution</li>
        </ul>

        <h3>2.5.6 Directory Cleanup ✅ Complete</h3>
        <ul>
          <li><input type="checkbox" checked disabled> <strong>Migrate legacy Ember data</strong> — 26 files (13 memory, 8 project, 4 reflections, 1 heartbeat-state) moved to <code>~/agents/ember/memory/archive/</code></li>
          <li><input type="checkbox" checked disabled> <strong>Delete node_modules in agent-guide</strong> — 3,429 files (26MB) deleted from exa-search</li>
          <li><input type="checkbox" checked disabled> <strong>Remove orphaned directories</strong> — <code>~/guide/</code>, <code>~/guide-temp/</code>, <code>~/guide.tar.gz</code> deleted</li>
          <li><input type="checkbox" checked disabled> <strong>Delete AppleDouble files</strong> — 27 macOS resource fork files removed</li>
          <li><input type="checkbox" checked disabled> <strong>Deduplicate Scout's review file</strong> — root copy removed, kept reports/ version</li>
          <li><input type="checkbox" checked disabled> <strong>Move Architect's review to memory/</strong> — moved to <code>~/agents/ember/memory/</code></li>
        </ul>

        <h3>2.5.7 Nice-to-Have 🟢</h3>
        <ul>
          <li><input type="checkbox" disabled> <strong>Add assets/ directory</strong> to Life OS for images/attachments</li>
          <li><input type="checkbox" disabled> <strong>Configure Logseq favorites</strong> — add Contents, active projects, area pages to <code>:favorites</code></li>
          <li><input type="checkbox" checked disabled> <strong>Verify Logseq indexes areas/ directory</strong> — area pages copied to <code>pages/</code> for proper resolution</li>
          <li><input type="checkbox" disabled> <strong>Adopt Logseq properties</strong> — define schema (<code>type::, area::, status::, priority::</code>) and apply</li>
          <li><input type="checkbox" disabled> <strong>Add favicon</strong> to website</li>
          <li><input type="checkbox" disabled> <strong>Add custom 404 page</strong></li>
        </ul>

        <h2>Phase 2.75: Documentation Overhaul ✅ Complete</h2>
        <p>Comprehensive site-wide documentation improvement driven by the <a href="/implementation/site-improvements">Site Improvements review</a>. All 39 site pages were reviewed against the 6 new Architecture pages, and 25 improvements were identified and implemented.</p>

        <h3>2.75.1 Critical Fixes ✅</h3>
        <ul>
          <li><input type="checkbox" checked disabled> <strong>Fix cron jobs page</strong> — now correctly describes OpenClaw Gateway scheduler instead of system crontab</li>
          <li><input type="checkbox" checked disabled> <strong>Bridge trust system and tool policy</strong> — Trust Levels page now explains relationship to OpenClaw's tool policy</li>
          <li><input type="checkbox" checked disabled> <strong>Fix Forge role description</strong> — reframed from "manages cron" to "monitors scheduled task health"</li>
          <li><input type="checkbox" checked disabled> <strong>Fix morning report attribution</strong> — troubleshooting page now correctly says Ember (not Forge) generates reports</li>
        </ul>

        <h3>2.75.2 Architecture Alignment ✅</h3>
        <ul>
          <li><input type="checkbox" checked disabled> <strong>Getting Started updated</strong> — OpenClaw introduced as the runtime engine, <code>openclaw gateway status</code> check added</li>
          <li><input type="checkbox" checked disabled> <strong>Agent pages enhanced</strong> — all 4 agent pages now explain sessions, models, and subagent spawning</li>
          <li><input type="checkbox" checked disabled> <strong>Home page updated</strong> — Architecture card added to navigation grid</li>
          <li><input type="checkbox" checked disabled> <strong>Cadence pages cross-referenced</strong> — "how this works under the hood" callouts added</li>
          <li><input type="checkbox" checked disabled> <strong>Automation page updated</strong> — references OpenClaw as the scheduling engine</li>
        </ul>

        <h3>2.75.3 Reference &amp; Support Pages ✅</h3>
        <ul>
          <li><input type="checkbox" checked disabled> <strong>Glossary expanded</strong> — from 20 to 33 terms, all architecture concepts added</li>
          <li><input type="checkbox" checked disabled> <strong>Commands reference updated</strong> — OpenClaw CLI section added</li>
          <li><input type="checkbox" checked disabled> <strong>File locations updated</strong> — OpenClaw directory paths added</li>
          <li><input type="checkbox" checked disabled> <strong>Troubleshooting expanded</strong> — OpenClaw-specific Gateway troubleshooting section</li>
          <li><input type="checkbox" checked disabled> <strong>FAQ expanded</strong> — "OpenClaw &amp; Architecture" question section added</li>
          <li><input type="checkbox" checked disabled> <strong>Notifications page updated</strong> — Channel Adapters concept explained</li>
        </ul>

        <h3>2.75.4 Cross-Linking &amp; Polish ✅</h3>
        <ul>
          <li><input type="checkbox" checked disabled> <strong>Architecture links added</strong> throughout the site (was only in Architecture section itself)</li>
          <li><input type="checkbox" checked disabled> <strong>Life OS pages updated</strong> — agent file access mechanism explained via Execution Layer</li>
          <li><input type="checkbox" checked disabled> <strong>Daily workflow clarified</strong> — cron = OpenClaw not system cron</li>
          <li><input type="checkbox" checked disabled> <strong>Context window notes added</strong> — weekly/monthly review pages explain summarization</li>
          <li><input type="checkbox" checked disabled> <strong>Syncthing page updated</strong> — workspace mounting relationship explained</li>
          <li><input type="checkbox" checked disabled> <strong>Site Improvements page created</strong> — <a href="/implementation/site-improvements">comprehensive review document</a> with all 25 items</li>
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
        <p><em>Note: Templates initially created without Logseq properties — fully remediated in Phase 2.5.2 ✅</em></p>

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
        <p>Adding new notification channels means configuring <a href="/architecture/channel-adapters">Channel Adapters</a> in OpenClaw. Each adapter (Discord, Telegram, WhatsApp, email) is a plugin that connects the Gateway to an external messaging platform. The Gateway routes messages to the correct adapter based on your configuration. See the <a href="/architecture/channel-adapters">Channel Adapters architecture page</a> for how adapters work and how to add new ones.</p>
        <ul>
          <li><input type="checkbox" disabled> Enable Telegram notifications — configure <a href="/architecture/channel-adapters">Telegram adapter</a></li>
          <li><input type="checkbox" disabled> Enable WhatsApp notifications — configure <a href="/architecture/channel-adapters">WhatsApp adapter</a></li>
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

        <h3>4.4 Documentation ✅ (Addressed in Phase 2.75)</h3>
        <ul>
          <li><input type="checkbox" checked disabled> Complete glossary — expanded from 20 to 33 terms in Phase 2.75</li>
          <li><input type="checkbox" checked disabled> Update file locations reference — OpenClaw paths added in Phase 2.75</li>
          <li><input type="checkbox" checked disabled> Expand command reference — OpenClaw CLI commands added in Phase 2.75</li>
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

        <p style="margin-top: 2rem; font-size: 0.8rem; color: #888;">Last updated: February 14, 2026 — Phase 2.75 documentation overhaul complete</p>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
