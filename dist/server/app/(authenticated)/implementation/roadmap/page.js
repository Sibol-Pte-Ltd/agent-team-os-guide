(()=>{var a={};a.id=8349,a.ids=[8349],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},16953:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>f,metadata:()=>e});var d=c(75338);c(82704);let e={title:"Agent Team OS — User Guide",description:"Your personal AI agent team, working together to keep your life organized."};function f({children:a}){return(0,d.jsx)("html",{lang:"en",children:a})}},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},20671:()=>{},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},28354:a=>{"use strict";a.exports=require("util")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:a=>{"use strict";a.exports=require("path")},36478:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(97954).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/components/Sidebar.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/components/Sidebar.tsx","default")},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},57499:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>g,metadata:()=>e});var d=c(75338);let e={title:"Implementation Roadmap — Agent Team OS Guide"},f=`<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/implementation">Implementation</a>
          <span class="separator">/</span>
          Roadmap
        </div>

        <h1>Implementation Roadmap</h1>
        <p class="page-subtitle">Phased approach to completing the Agent Team OS build-out. Updated Feb 14 with documentation overhaul completion.</p>

        <div class="callout success">
          <div class="callout-title">Current Focus: Phase 2 — Session Handoffs</div>
          <p><strong>Phase 0: Syncthing Fix</strong> ✅, <strong>Phase 1: Semantic Search</strong> ✅, and <strong>Phase 2.75: Documentation Overhaul</strong> ✅ are all complete. Now in <strong>Phase 2: Session Handoffs</strong> — Architect designing handoff block format for session continuity. Phases 3-5 also assigned to Architect. See the <a href="/implementation/clawvault-analysis">ClawVault Analysis</a> for detailed phase breakdown.</p>
        </div>

        <h2>Phase 2.5: Audit Remediation ✅ Complete</h2>
        <p>Findings from the Feb 13 comprehensive directory audit and Notes graph gap audit. All critical and important items resolved. Security deferred by design.</p>

        <h3>2.5.1 Security — Deferred 🟢</h3>
        <p><em>Deferred per Colin's instruction: Files in ~/agent-guide/ will change later, making token rotation lower priority.</em></p>
        <ul>
          <li><input type="checkbox" disabled> <strong>Rotate Supabase bearer token</strong> — exposed in <code>~/agent-guide/agents/ember/config/mcporter.json</code>. Rotate in Supabase dashboard when ready.</li>
          <li><input type="checkbox" disabled> <strong>Delete or restrict mcporter.json</strong> — even after rotation, remove the file or set 600 permissions</li>
          <li><input type="checkbox" disabled> <strong>Fix approval queue permissions</strong> — <code>req-1770872136</code> and <code>req-1770978435</code> are world-readable, should be 600</li>
          <li><input type="checkbox" disabled> <strong>Clean .claude.json backups</strong> — 5 backup files in home dir may contain session data</li>
        </ul>

        <h3>2.5.2 Notes Templates ✅ Complete</h3>
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
          <li><input type="checkbox" checked disabled> <strong>Create .gitignore for Notes</strong> — excludes .recycle/, bak/, node_modules/, editor dirs, OS artifacts</li>
          <li><input type="checkbox" checked disabled> <strong>Add logseq/ to git</strong> — <code>config.edn</code> (421 lines) and <code>custom.css</code> tracked</li>
          <li><input type="checkbox" checked disabled> <strong>Add pages/contents.md to git</strong> — now tracked</li>
          <li>Committed as <code>320ae8a</code></li>
        </ul>

        <h3>2.5.5 Notes Content ✅ Complete</h3>
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
          <li><input type="checkbox" disabled> <strong>Add assets/ directory</strong> to Notes for images/attachments</li>
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
          <li><input type="checkbox" checked disabled> <strong>Notes pages updated</strong> — agent file access mechanism explained via Execution Layer</li>
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

        <h3>2.1 Notes Templates ✅</h3>
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
          <li><input type="checkbox" checked disabled> Set up research output directory (<code>~/notes/research/</code>)</li>
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
          <li><input type="checkbox" disabled> Pull priorities from Notes journal</li>
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

        <p style="margin-top: 2rem; font-size: 0.8rem; color: #888;">Last updated: February 14, 2026 — Phase 2.75 documentation overhaul complete</p>`;function g(){return(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:f}})}},57623:()=>{},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},64916:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>f});var d=c(75338),e=c(36478);function f({children:a}){return(0,d.jsxs)("body",{children:[(0,d.jsx)("input",{type:"checkbox",id:"menu-toggle",className:"menu-toggle"}),(0,d.jsx)("label",{htmlFor:"menu-toggle",className:"hamburger","aria-label":"Toggle navigation",children:"☰"}),(0,d.jsx)("label",{htmlFor:"menu-toggle",className:"overlay"}),(0,d.jsxs)("div",{className:"site-wrapper",children:[(0,d.jsx)(e.default,{}),(0,d.jsx)("main",{className:"main-content",children:(0,d.jsx)("div",{className:"content-wrapper",children:a})})]})]})}},67031:(a,b,c)=>{Promise.resolve().then(c.bind(c,36478))},71759:(a,b,c)=>{Promise.resolve().then(c.bind(c,95010))},78335:()=>{},79378:(a,b,c)=>{"use strict";c.r(b),c.d(b,{GlobalError:()=>D.a,__next_app__:()=>J,handler:()=>L,pages:()=>I,routeModule:()=>K,tree:()=>H});var d=c(49754),e=c(9117),f=c(46595),g=c(32324),h=c(39326),i=c(38928),j=c(20175),k=c(12),l=c(54290),m=c(12696),n=c(82802),o=c(77533),p=c(45229),q=c(32822),r=c(261),s=c(26453),t=c(52474),u=c(26713),v=c(51356),w=c(62685),x=c(36225),y=c(63446),z=c(2762),A=c(45742),B=c(86439),C=c(81170),D=c.n(C),E=c(62506),F=c(91203),G={};for(let a in E)0>["default","tree","pages","GlobalError","__next_app__","routeModule","handler"].indexOf(a)&&(G[a]=()=>E[a]);c.d(b,G);let H={children:["",{children:["(authenticated)",{children:["implementation",{children:["roadmap",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,57499)),"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/(authenticated)/implementation/roadmap/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(c.bind(c,64916)),"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/(authenticated)/layout.tsx"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,87028,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,90461,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,32768,23)),"next/dist/client/components/builtin/unauthorized.js"]}]},{layout:[()=>Promise.resolve().then(c.bind(c,16953)),"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,81170,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,87028,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,90461,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,32768,23)),"next/dist/client/components/builtin/unauthorized.js"]}]}.children,I=["/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/(authenticated)/implementation/roadmap/page.tsx"],J={require:c,loadChunk:()=>Promise.resolve()},K=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/(authenticated)/implementation/roadmap/page",pathname:"/implementation/roadmap",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:H},distDir:".next",relativeProjectDir:""});async function L(a,b,d){var C;let G="/(authenticated)/implementation/roadmap/page";"/index"===G&&(G="/");let M=(0,h.getRequestMeta)(a,"postponed"),N=(0,h.getRequestMeta)(a,"minimalMode"),O=await K.prepare(a,b,{srcPage:G,multiZoneDraftMode:!1});if(!O)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:P,query:Q,params:R,parsedUrl:S,pageIsDynamic:T,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,serverActionsManifest:X,clientReferenceManifest:Y,subresourceIntegrityManifest:Z,prerenderManifest:$,isDraftMode:_,resolvedPathname:aa,revalidateOnlyGenerated:ab,routerServerContext:ac,nextConfig:ad,interceptionRoutePatterns:ae}=O,af=S.pathname||"/",ag=(0,r.normalizeAppPath)(G),{isOnDemandRevalidate:ah}=O,ai=K.match(af,$),aj=!!$.routes[aa],ak=!!(ai||aj||$.routes[ag]),al=a.headers["user-agent"]||"",am=(0,u.getBotType)(al),an=(0,p.isHtmlBotRequest)(a),ao=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[t.NEXT_ROUTER_PREFETCH_HEADER],ap=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[t.RSC_HEADER],aq=(0,s.getIsPossibleServerAction)(a),ar=(0,m.checkIsAppPPREnabled)(ad.experimental.ppr)&&(null==(C=$.routes[ag]??$.dynamicRoutes[ag])?void 0:C.renderingMode)==="PARTIALLY_STATIC",as=!1,at=!1,au=ar?M:void 0,av=ar&&ap&&!ao,aw=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),ax=!al||(0,p.shouldServeStreamingMetadata)(al,ad.htmlLimitedBots);an&&ar&&(ak=!1,ax=!1);let ay=!0===K.isDev||!ak||"string"==typeof M||av,az=an&&ar,aA=null;_||!ak||ay||aq||au||av||(aA=aa);let aB=aA;!aB&&K.isDev&&(aB=aa),K.isDev||_||!ak||!ap||av||(0,k.d)(a.headers);let aC={...E,tree:H,pages:I,GlobalError:D(),handler:L,routeModule:K,__next_app__:J};X&&Y&&(0,o.setReferenceManifestsSingleton)({page:G,clientReferenceManifest:Y,serverActionsManifest:X,serverModuleMap:(0,q.createServerModuleMap)({serverActionsManifest:X})});let aD=a.method||"GET",aE=(0,g.getTracer)(),aF=aE.getActiveScopeSpan();try{let f=K.getVaryHeader(aa,ae);b.setHeader("Vary",f);let k=async(c,d)=>{let e=new l.NodeNextRequest(a),f=new l.NodeNextResponse(b);return K.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=aE.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${aD} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${aD} ${a.url}`)})},m=async({span:e,postponed:f,fallbackRouteParams:g})=>{let i={query:Q,params:R,page:ag,sharedContext:{buildId:P},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aC,Component:(0,j.T)(aC),params:R,routeModule:K,page:G,postponed:f,shouldWaitOnAllReady:az,serveStreamingMetadata:ax,supportsDynamicResponse:"string"==typeof f||ay,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,subresourceIntegrityManifest:Z,serverActionsManifest:X,clientReferenceManifest:Y,setIsrStatus:null==ac?void 0:ac.setIsrStatus,dir:c(33873).join(process.cwd(),K.relativeProjectDir),isDraftMode:_,isRevalidate:ak&&!f&&!av,botType:am,isOnDemandRevalidate:ah,isPossibleServerAction:aq,assetPrefix:ad.assetPrefix,nextConfigOutput:ad.output,crossOrigin:ad.crossOrigin,trailingSlash:ad.trailingSlash,previewProps:$.preview,deploymentId:ad.deploymentId,enableTainting:ad.experimental.taint,htmlLimitedBots:ad.htmlLimitedBots,devtoolSegmentExplorer:ad.experimental.devtoolSegmentExplorer,reactMaxHeadersLength:ad.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:ad.experimental.cacheLife,basePath:ad.basePath,serverActions:ad.experimental.serverActions,...as?{nextExport:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isRevalidate:!0,isDebugDynamicAccesses:as}:{},experimental:{isRoutePPREnabled:ar,expireTime:ad.expireTime,staleTimes:ad.experimental.staleTimes,cacheComponents:!!ad.experimental.cacheComponents,clientSegmentCache:!!ad.experimental.clientSegmentCache,clientParamParsing:!!ad.experimental.clientParamParsing,dynamicOnHover:!!ad.experimental.dynamicOnHover,inlineCss:!!ad.experimental.inlineCss,authInterrupts:!!ad.experimental.authInterrupts,clientTraceMetadata:ad.experimental.clientTraceMetadata||[]},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d)=>K.onRequestError(a,b,d,ac),err:(0,h.getRequestMeta)(a,"invokeError"),dev:K.isDev}},l=await k(e,i),{metadata:m}=l,{cacheControl:n,headers:o={},fetchTags:p}=m;if(p&&(o[y.NEXT_CACHE_TAGS_HEADER]=p),a.fetchMetrics=m.fetchMetrics,ak&&(null==n?void 0:n.revalidate)===0&&!K.isDev&&!ar){let a=m.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${aa}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:v.CachedRouteKind.APP_PAGE,html:l,headers:o,rscData:m.flightData,postponed:m.postponed,status:m.statusCode,segmentData:m.segmentData},cacheControl:n}},o=async({hasResolved:c,previousCacheEntry:f,isRevalidating:g,span:i})=>{let j,k=!1===K.isDev,l=c||b.writableEnded;if(ah&&ab&&!f&&!N)return(null==ac?void 0:ac.render404)?await ac.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ai&&(j=(0,w.parseFallbackField)(ai.fallback)),j===w.FallbackMode.PRERENDER&&(0,u.isBot)(al)&&(!ar||an)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),(null==f?void 0:f.isStale)===-1&&(ah=!0),ah&&(j!==w.FallbackMode.NOT_FOUND||f)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),!N&&j!==w.FallbackMode.BLOCKING_STATIC_RENDER&&aB&&!l&&!_&&T&&(k||!aj)){let b;if((k||ai)&&j===w.FallbackMode.NOT_FOUND)throw new B.NoFallbackError;if(ar&&!ap){let c="string"==typeof(null==ai?void 0:ai.fallback)?ai.fallback:k?ag:null;if(b=await K.handleResponse({cacheKey:c,req:a,nextConfig:ad,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:$,isRoutePPREnabled:ar,responseGenerator:async()=>m({span:i,postponed:void 0,fallbackRouteParams:k||at?(0,n.u)(ag):null}),waitUntil:d.waitUntil}),null===b)return null;if(b)return delete b.cacheControl,b}}let o=ah||g||!au?void 0:au;if(as&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:v.CachedRouteKind.PAGES,html:x.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let p=T&&ar&&((0,h.getRequestMeta)(a,"renderFallbackShell")||at)?(0,n.u)(af):null;return m({span:i,postponed:o,fallbackRouteParams:p})},p=async c=>{var f,g,i,j,k;let l,n=await K.handleResponse({cacheKey:aA,responseGenerator:a=>o({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ah,isRoutePPREnabled:ar,req:a,nextConfig:ad,prerenderManifest:$,waitUntil:d.waitUntil});if(_&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),K.isDev&&b.setHeader("Cache-Control","no-store, must-revalidate"),!n){if(aA)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=n.value)?void 0:f.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=n.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let p="string"==typeof n.value.postponed;ak&&!av&&(!p||ao)&&(N||b.setHeader("x-nextjs-cache",ah?"REVALIDATED":n.isMiss?"MISS":n.isStale?"STALE":"HIT"),b.setHeader(t.NEXT_IS_PRERENDER_HEADER,"1"));let{value:q}=n;if(au)l={revalidate:0,expire:void 0};else if(N&&ap&&!ao&&ar)l={revalidate:0,expire:void 0};else if(!K.isDev)if(_)l={revalidate:0,expire:void 0};else if(ak){if(n.cacheControl)if("number"==typeof n.cacheControl.revalidate){if(n.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${n.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});l={revalidate:n.cacheControl.revalidate,expire:(null==(j=n.cacheControl)?void 0:j.expire)??ad.expireTime}}else l={revalidate:y.CACHE_ONE_YEAR,expire:void 0}}else b.getHeader("Cache-Control")||(l={revalidate:0,expire:void 0});if(n.cacheControl=l,"string"==typeof aw&&(null==q?void 0:q.kind)===v.CachedRouteKind.APP_PAGE&&q.segmentData){b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=q.headers)?void 0:k[y.NEXT_CACHE_TAGS_HEADER];N&&ak&&c&&"string"==typeof c&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,c);let d=q.segmentData.get(aw);return void 0!==d?(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(d,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl}):(b.statusCode=204,(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.EMPTY,cacheControl:n.cacheControl}))}let r=(0,h.getRequestMeta)(a,"onCacheEntry");if(r&&await r({...n,value:{...n.value,kind:"PAGE"}},{url:(0,h.getRequestMeta)(a,"initURL")}))return null;if(p&&au)throw Object.defineProperty(Error("Invariant: postponed state should not be present on a resume request"),"__NEXT_ERROR_CODE",{value:"E396",enumerable:!1,configurable:!0});if(q.headers){let a={...q.headers};for(let[c,d]of(N&&ak||delete a[y.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let s=null==(g=q.headers)?void 0:g[y.NEXT_CACHE_TAGS_HEADER];if(N&&ak&&s&&"string"==typeof s&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,s),!q.status||ap&&ar||(b.statusCode=q.status),!N&&q.status&&F.RedirectStatusCode[q.status]&&ap&&(b.statusCode=200),p&&b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"1"),ap&&!_){if(void 0===q.rscData){if(q.postponed)throw Object.defineProperty(Error("Invariant: Expected postponed to be undefined"),"__NEXT_ERROR_CODE",{value:"E372",enumerable:!1,configurable:!0});return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:q.html,cacheControl:av?{revalidate:0,expire:void 0}:n.cacheControl})}return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(q.rscData,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl})}let u=q.html;if(!p||N||ap)return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:n.cacheControl});if(as)return u.push(new ReadableStream({start(a){a.enqueue(z.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}});let w=new TransformStream;return u.push(w.readable),m({span:c,postponed:q.postponed,fallbackRouteParams:null}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(w.writable)}).catch(a=>{w.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}})};if(!aF)return await aE.withPropagatedContext(a.headers,()=>aE.trace(i.BaseServerSpan.handleRequest,{spanName:`${aD} ${a.url}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aD,"http.target":a.url}},p));await p(aF)}catch(b){throw b instanceof B.NoFallbackError||await K.onRequestError(a,b,{routerKind:"App Router",routePath:G,routeType:"render",revalidateReason:(0,f.c)({isRevalidate:ak,isOnDemandRevalidate:ah})},ac),b}}},82615:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,81170,23)),Promise.resolve().then(c.t.bind(c,23597,23)),Promise.resolve().then(c.t.bind(c,36893,23)),Promise.resolve().then(c.t.bind(c,89748,23)),Promise.resolve().then(c.t.bind(c,6060,23)),Promise.resolve().then(c.t.bind(c,7184,23)),Promise.resolve().then(c.t.bind(c,69576,23)),Promise.resolve().then(c.t.bind(c,73041,23)),Promise.resolve().then(c.t.bind(c,51384,23))},82704:()=>{},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},87343:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,54160,23)),Promise.resolve().then(c.t.bind(c,31603,23)),Promise.resolve().then(c.t.bind(c,68495,23)),Promise.resolve().then(c.t.bind(c,75170,23)),Promise.resolve().then(c.t.bind(c,77526,23)),Promise.resolve().then(c.t.bind(c,78922,23)),Promise.resolve().then(c.t.bind(c,29234,23)),Promise.resolve().then(c.t.bind(c,12263,23)),Promise.resolve().then(c.bind(c,82146))},95010:(a,b,c)=>{"use strict";c.d(b,{default:()=>i});var d=c(21124),e=c(3991),f=c.n(e),g=c(42378);let h=[{title:null,links:[{href:"/",label:"Home"}]},{title:"Getting Started",links:[{href:"/getting-started",label:"Quick Start"},{href:"/getting-started/first-day",label:"Your First Day"},{href:"/getting-started/setup-checklist",label:"Setup Checklist"}]},{title:"Notes & Sync",links:[{href:"/life-os",label:"What is Notes"},{href:"/life-os/daily-workflow",label:"Daily Workflow"},{href:"/life-os/templates",label:"Templates"},{href:"/life-os/logseq-tips",label:"LogSeq Tips"}]},{title:"Agents",links:[{href:"/agents",label:"Meet Your Agents"},{href:"/agents/ember",label:"Ember"},{href:"/agents/scout",label:"Scout"},{href:"/agents/forge",label:"Forge"},{href:"/agents/architect",label:"Architect"},{href:"/agents/trust-levels",label:"Trust Levels"}]},{title:"Cadence",links:[{href:"/cadence",label:"Overview"},{href:"/cadence/morning-report",label:"Morning Report"},{href:"/cadence/evening-checkin",label:"Evening Check-in"},{href:"/cadence/weekly-review",label:"Weekly Review"},{href:"/cadence/monthly-review",label:"Monthly Review"}]},{title:"OpenClaw Architecture",links:[{href:"/architecture",label:"Overview"},{href:"/architecture/channel-adapters",label:"Channel Adapters"},{href:"/architecture/gateway",label:"Gateway"},{href:"/architecture/lane-queue",label:"Lane Queue"},{href:"/architecture/agent-runner",label:"Agent Runner"},{href:"/architecture/execution-layer",label:"Execution Layer"}]},{title:"Automation",links:[{href:"/automation",label:"Overview"},{href:"/automation/cron-jobs",label:"Cron Jobs"},{href:"/automation/notifications",label:"Notifications"}]},{title:"Troubleshooting",links:[{href:"/troubleshooting",label:"Common Issues"},{href:"/troubleshooting/syncthing",label:"Syncthing"},{href:"/troubleshooting/faq",label:"FAQ"}]},{title:"Reference",links:[{href:"/reference/commands",label:"Commands"},{href:"/reference/file-locations",label:"File Locations"},{href:"/reference/glossary",label:"Glossary"},{href:"/reference/changelog",label:"Changelog"}]},{title:"Implementation",links:[{href:"/implementation",label:"Status"},{href:"/implementation/gap-analysis",label:"Gap Analysis"},{href:"/implementation/roadmap",label:"Roadmap"},{href:"/implementation/activity-log",label:"Activity Log"},{href:"/implementation/site-improvements",label:"Site Improvements"},{href:"/implementation/clawvault-analysis",label:"ClawVault Analysis"}]}];function i(){let a=(0,g.usePathname)(),b=(0,g.useRouter)();async function c(){await fetch("/api/auth/logout",{method:"POST"}),b.push("/login"),b.refresh()}return(0,d.jsxs)("aside",{className:"sidebar",children:[(0,d.jsxs)("div",{className:"sidebar-header",children:[(0,d.jsx)("h1",{children:"Agent Team OS"}),(0,d.jsx)("div",{className:"subtitle",children:"User Guide"})]}),(0,d.jsx)("nav",{children:h.map((b,c)=>(0,d.jsxs)("div",{className:"nav-section",children:[b.title&&(0,d.jsx)("div",{className:"nav-section-title",children:b.title}),b.links.map(b=>(0,d.jsx)(f(),{href:b.href,className:`nav-link${a===b.href?" active":""}`,children:b.label},b.href))]},c))}),(0,d.jsx)("div",{className:"sidebar-footer",children:(0,d.jsx)("button",{onClick:c,className:"nav-link logout-link",children:"⎋ Logout"})})]})}},96487:()=>{}};var b=require("../../../../webpack-runtime.js");b.C(a);var c=b.X(0,[8543,8361,7506],()=>b(b.s=79378));module.exports=c})();