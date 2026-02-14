1:"$Sreact.fragment"
2:I[9766,[],""]
3:I[8924,[],""]
4:I[3370,["7340","static/chunks/app/(authenticated)/layout-8a56e70ab4050a46.js"],"default"]
8:I[7150,[],""]
:HL["/_next/static/css/56998b7e09014914.css","style"]
5:T3bf8,<div class="breadcrumbs">
          <a href="/">Home</a> / Reference / Glossary
        </div>

        <h1>Glossary</h1>
        <p>An alphabetical reference of key terms used throughout the Agent Team OS Guide. If you encounter an unfamiliar word or concept, look it up here.</p>

        <dl>
          <dt><strong>Act with Approval</strong></dt>
          <dd>Trust Level 2. An agent at this level can research, prepare, write to its workspace, and execute read-only commands independently. However, it must request and receive explicit human approval before sending external messages, making destructive changes, or modifying system configuration. Scout currently operates at this level. See <a href="/agents/trust-levels">Trust Levels</a>.</dd>

          <dt><strong>Agent</strong></dt>
          <dd>An AI entity with a specific role in the system. Each agent has a defined personality, set of responsibilities, and trust level that determines what it can do independently. The current team includes Ember, Scout, Forge, and Architect.</dd>

          <dt><strong>Agent Runner</strong></dt>
          <dd>The OpenClaw component that manages the lifecycle of a single agent session — model selection, tool dispatch, memory injection, and response streaming. Each active session has its own Agent Runner instance. See <a href="/architecture/agent-runner">Agent Runner</a>.</dd>

          <dt><strong>Approval Queue</strong></dt>
          <dd>The directory (<code>~/agents/ember/data/approval-queue/</code>) where pending trust system approval requests are stored as JSON files. When an agent attempts a restricted action that requires human approval, the request is queued here with a unique ID, and notifications are sent via Discord and Pushover. Requests remain pending until explicitly approved or denied using <code>trust-system.sh approve</code> or <code>trust-system.sh deny</code>. See <a href="/reference/commands#trust-system">Trust System Commands</a>.</dd>

          <dt><strong>Autonomous</strong></dt>
          <dd>Trust Level 3. The highest trust level. An agent at this level can act independently on routine tasks — writing files, executing commands, sending internal notifications, modifying cron jobs, and more — without asking for permission. It still escalates for non-routine situations such as external email, social media posts, financial actions, and trust level changes. Ember and Forge currently operate at this level. See <a href="/agents/trust-levels">Trust Levels</a>.</dd>

          <dt><strong>Channel Adapter</strong></dt>
          <dd>A plugin that connects OpenClaw to an external messaging platform (Discord, Telegram, WhatsApp, etc.). Each adapter translates platform-specific events into the internal message format and routes them into the appropriate <a href="/architecture/lane-queue">Lane Queue</a>. See <a href="/architecture/channel-adapters">Channel Adapters</a>.</dd>

          <dt><strong>Cadence</strong></dt>
          <dd>The scheduled rhythm of reports, check-ins, and reviews that keep the system running smoothly. Cadence events include the daily morning report, evening check-in, weekly review, and monthly review.</dd>

          <dt><strong>Ember</strong></dt>
          <dd>Chief of Staff agent. Ember manages daily operations, generates morning reports, coordinates the other agents, and serves as the primary point of contact for the system. Operates at Trust Level 3 (Autonomous). See the <a href="/agents/ember">Ember</a> page for full details.</dd>

          <dt><strong>Execution Layer</strong></dt>
          <dd>The combined runtime environment where agent tool calls are carried out — sandboxed shell, file system, browser automation, and external API integrations. The Execution Layer enforces tool policies and resource limits for each session. See <a href="/architecture/execution-layer">Execution Layer</a>.</dd>

          <dt><strong>Escalation</strong> <em>(trust context)</em></dt>
          <dd>The act of raising an action to a higher authority for approval. In the trust system, escalation occurs in two related senses: (1) when an agent encounters an action that exceeds its trust level, the action is automatically queued for human approval rather than being executed; (2) when an agent's trust level is increased using <code>trust-system.sh escalate</code>. Escalation is expected and healthy — it means the system is working correctly. Even Level 3 agents escalate non-routine situations. See <a href="/agents/trust-levels">Trust Levels</a>.</dd>

          <dt><strong>Evening Check-in</strong></dt>
          <dd>A daily summary and review generated at 9:30 PM. The evening check-in recaps what was accomplished during the day, flags any unfinished tasks, and sets expectations for the next morning. See <a href="/cadence/evening-checkin">Evening Check-in</a>.</dd>

          <dt><strong>Gateway</strong></dt>
          <dd>The central daemon process of OpenClaw. The Gateway receives inbound messages from <a href="/architecture/channel-adapters">Channel Adapters</a>, manages the <a href="/architecture/lane-queue">Lane Queue</a>, spawns <a href="/architecture/agent-runner">Agent Runner</a> sessions, and coordinates all system components. Controlled via <code>openclaw gateway start/stop/restart/status</code>. See <a href="/architecture/gateway">Gateway</a>.</dd>

          <dt><strong>Forge</strong></dt>
          <dd>Infrastructure Specialist agent. Forge monitors system health, verifies backups, tracks disk space, and alerts on failures across the automation layer. It handles the technical plumbing so the other agents can focus on their work. Cron scheduling is owned by the OpenClaw Gateway; Forge monitors execution and investigates issues. Operates at Trust Level 3 (Autonomous). See the <a href="/agents/forge">Forge</a> page for full details.</dd>

          <dt><strong>Heartbeat</strong></dt>
          <dd>A periodic poll sent to an agent session to trigger proactive behavior. Heartbeats give agents a chance to check email, review calendars, do background maintenance, or simply respond <code>HEARTBEAT_OK</code> if nothing needs attention. Configured per-agent in the Gateway. See <a href="/agents/ember">Ember</a> for an example heartbeat workflow.</dd>

          <dt><strong>Lane Queue</strong></dt>
          <dd>The internal message queue that serializes inbound messages per session. Each agent+channel combination gets its own lane, ensuring messages are processed in order without cross-talk. The Lane Queue prevents race conditions when multiple messages arrive simultaneously. See <a href="/architecture/lane-queue">Lane Queue</a>.</dd>

          <dt><strong>Notes</strong></dt>
          <dd>The personal knowledge layer built on LogSeq. Notes provides the structure — journals, templates, task management, and project tracking — that organizes your daily life and gives agents a shared workspace to read from and write to. Synced between EC2 (<code>~/notes/</code>) and Mac (<code>~/AgentTeamOS/notes/</code>) via Syncthing with folder ID <code>notes</code>.</dd>

          <dt><strong>LogSeq</strong></dt>
          <dd>A block-based, open-source note-taking application used as the data layer for Notes. LogSeq stores everything as Markdown files, which makes it easy for both humans and agents to read and edit content. See <a href="/life-os/logseq-tips">LogSeq Tips</a>.</dd>

          <dt><strong>Morning Report</strong></dt>
          <dd>A daily briefing generated by Ember at 6:00 AM. The morning report summarizes the day's schedule, highlights priority tasks, surfaces relevant context, and flags anything that needs attention. See <a href="/cadence/morning-report">Morning Report</a>.</dd>

          <dt><strong>Observer</strong></dt>
          <dd>Trust Level 0. The most restrictive trust level. An agent at this level can only read files, search the web, and fetch web content. It cannot write, execute commands, send messages, or take any actions. Used for new agents in evaluation mode. See <a href="/agents/trust-levels">Trust Levels</a>.</dd>

          <dt><strong>Pushover</strong></dt>
          <dd>A notification service used for mobile push alerts. Agent Team OS sends notifications through Pushover to deliver morning reports, evening check-ins, trust system approval requests, and urgent alerts directly to your phone. See <a href="/automation/notifications">Notifications</a>.</dd>

          <dt><strong>Sandbox</strong></dt>
          <dd>An isolated execution environment provided to each agent session. The sandbox contains a workspace directory, shell access, and file system — all scoped so the agent cannot interfere with other sessions or the host system outside its permitted paths. Part of the <a href="/architecture/execution-layer">Execution Layer</a>.</dd>

          <dt><strong>Semantic Search</strong></dt>
          <dd>The ability for agents to search their memory files by meaning rather than exact keyword matching. Powered by OpenClaw's native <code>memory_search</code> tool using the <code>embeddinggemma-300m-qat-Q8_0</code> embedding model. Each agent has its own SQLite index covering <code>MEMORY.md</code> and <code>memory/*.md</code> files, auto-reindexed every 6 hours via cron. Agents use <code>memory_search</code> to find relevant past context, then <code>memory_get</code> to pull exact lines.</dd>

          <dt><strong>Session</strong></dt>
          <dd>A single, continuous conversation between an agent and a user (or system trigger). Each session has a unique ID, its own <a href="/architecture/lane-queue">Lane Queue</a>, message history, and tool state. Session transcripts are stored as JSONL files in <code>~/.openclaw/agents/&lt;name&gt;/sessions/</code>.</dd>

          <dt><strong>Session Key</strong></dt>
          <dd>The unique identifier for a session, typically composed of the agent name, channel type, and channel-specific routing info (e.g., <code>agent:ember:discord:channel:123456</code>). The Gateway uses session keys to route messages to the correct <a href="/architecture/lane-queue">Lane Queue</a> and <a href="/architecture/agent-runner">Agent Runner</a>.</dd>

          <dt><strong>Restricted Action</strong></dt>
          <dd>An action that always triggers a trust check regardless of the agent's trust level. Restricted actions include: sending external messages (<code>message:send</code>), writing or deleting files outside the workspace (<code>write:external</code>, <code>delete:external</code>), elevated/sudo execution (<code>exec:elevated</code>, <code>exec:sudo</code>), adding cron jobs (<code>cron:add</code>), browser actions (<code>browser:action</code>), financial operations (<code>financial:*</code>), and trust level changes (<code>trust:escalate</code>, <code>trust:demote</code>). Even Level 3 agents must pass through trust enforcement for these. See <a href="/reference/commands#trust-system">Trust System Commands</a>.</dd>

          <dt><strong>Scout</strong></dt>
          <dd>Research Specialist agent. Scout handles information gathering, web research, summarization, and knowledge curation. When you or another agent needs to look something up, Scout does the legwork. Operates at Trust Level 2 (Act with Approval). See the <a href="/agents/scout">Scout</a> page for full details.</dd>

          <dt><strong>Subagent</strong></dt>
          <dd>A child agent session spawned by a parent agent to handle a specific subtask. Subagents inherit tool access from the parent but run in their own session with a separate workspace. They report results back to the parent session when complete and are terminated afterward. See <a href="/architecture/agent-runner">Agent Runner</a>.</dd>

          <dt><strong>Suggest</strong></dt>
          <dd>Trust Level 1. An agent at this level can read files and search the web, and it can propose actions and make recommendations. However, every action beyond reading requires explicit human approval before execution. This level is one step above Observer — the agent can articulate what it would do, but cannot do it on its own. See <a href="/agents/trust-levels">Trust Levels</a>.</dd>

          <dt><strong>Syncthing</strong></dt>
          <dd>An open-source, continuous file synchronization tool. Syncthing keeps the Notes vault in sync between the EC2 instance, your laptop, and any other connected devices -- without relying on a cloud service. See <a href="/troubleshooting/syncthing">Syncthing Troubleshooting</a>.</dd>

          <dt><strong>Tool</strong></dt>
          <dd>A capability exposed to an agent during a session — such as <code>exec</code> (run shell commands), <code>read</code>/<code>write</code> (file operations), <code>web_search</code>, <code>browser</code>, <code>message</code>, and others. Tools are the mechanism through which agents interact with the outside world. Available tools are controlled by <a href="/architecture/execution-layer">Tool Policies</a>.</dd>

          <dt><strong>Tool Policy</strong></dt>
          <dd>A per-agent configuration that determines which tools are available and what restrictions apply. Tool policies can allowlist or denylist specific tools, restrict parameters (e.g., blocking elevated execution), or require approval for certain tool calls. Configured in the agent's OpenClaw config and enforced by the <a href="/architecture/execution-layer">Execution Layer</a>.</dd>

          <dt><strong>Tailscale</strong></dt>
          <dd>A mesh VPN used to securely connect devices. Tailscale creates an encrypted network overlay so your laptop, phone, and EC2 instance can communicate directly without exposing ports to the public internet.</dd>

          <dt><strong>Trust Level</strong></dt>
          <dd>A 0–3 scale controlling what agents can do independently. The four levels are: Level 0 (Observer — read only), Level 1 (Suggest — propose but cannot act), Level 2 (Act with Approval — independent research, approval needed for external actions), and Level 3 (Autonomous — independent action on routine tasks, escalates edge cases). Trust levels are configured in <code>~/agents/ember/config/trust-levels.json</code> and enforced by <code>trust-system.sh</code>. See <a href="/agents/trust-levels">Trust Levels</a> for the full framework.</dd>

          <dt><strong>Workspace</strong></dt>
          <dd>The dedicated directory where an agent stores its files — memory, notes, scripts, and any artifacts it creates. Each agent's workspace lives at <code>~/.openclaw/agents/&lt;name&gt;/workspace/</code> and is mounted into the agent's <a href="/architecture/execution-layer">Sandbox</a> at session start. Workspace files persist across sessions.</dd>
        </dl>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li>Use your browser's find-on-page (<code>Ctrl+F</code> or <code>Cmd+F</code>) to quickly search for a term.</li>
            <li>Follow the links within definitions to jump to the relevant guide pages for deeper information.</li>
            <li>If you think a term is missing, let the team know so it can be added to this glossary.</li>
          </ul>
        </div>

        <p style="margin-top: 2rem; font-size: 0.8rem; color: #888;">Last updated: February 14, 2026</p>0:{"P":null,"b":"vzbdtBP5U_venz5tN8oS4","p":"","c":["","reference","glossary"],"i":false,"f":[[["",{"children":["(authenticated)",{"children":["reference",{"children":["glossary",{"children":["__PAGE__",{}]}]}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/56998b7e09014914.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]]}],{"children":["(authenticated)",["$","$1","c",{"children":[null,["$","body",null,{"children":[["$","input",null,{"type":"checkbox","id":"menu-toggle","className":"menu-toggle"}],["$","label",null,{"htmlFor":"menu-toggle","className":"hamburger","aria-label":"Toggle navigation","children":"☰"}],["$","label",null,{"htmlFor":"menu-toggle","className":"overlay"}],["$","div",null,{"className":"site-wrapper","children":[["$","$L4",null,{}],["$","main",null,{"className":"main-content","children":["$","div",null,{"className":"content-wrapper","children":["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:style","children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:1:props:style","children":404}],["$","div",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:2:props:style","children":["$","h2",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:2:props:children:props:style","children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]}]]}]]}]]}],{"children":["reference",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["glossary",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["__PAGE__",["$","$1","c",{"children":[["$","div",null,{"dangerouslySetInnerHTML":{"__html":"$5"}}],null,"$L6"]}],{},null,false]},null,false]},null,false]},null,false]},null,false],"$L7",false]],"m":"$undefined","G":["$8",[]],"s":false,"S":true}
9:I[4431,[],"OutletBoundary"]
b:I[5278,[],"AsyncMetadataOutlet"]
d:I[4431,[],"ViewportBoundary"]
f:I[4431,[],"MetadataBoundary"]
10:"$Sreact.suspense"
6:["$","$L9",null,{"children":["$La",["$","$Lb",null,{"promise":"$@c"}]]}]
7:["$","$1","h",{"children":[null,[["$","$Ld",null,{"children":"$Le"}],null],["$","$Lf",null,{"children":["$","div",null,{"hidden":true,"children":["$","$10",null,{"fallback":null,"children":"$L11"}]}]}]]}]
e:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
a:null
c:{"metadata":[["$","title","0",{"children":"Glossary — Agent Team OS Guide"}],["$","meta","1",{"name":"description","content":"Your personal AI agent team, working together to keep your life organized."}]],"error":null,"digest":"$undefined"}
11:"$c:metadata"
