1:"$Sreact.fragment"
2:I[9766,[],""]
3:I[8924,[],""]
4:I[3370,["7340","static/chunks/app/(authenticated)/layout-8a56e70ab4050a46.js"],"default"]
8:I[7150,[],""]
:HL["/_next/static/css/56998b7e09014914.css","style"]
5:T3396,<div class="breadcrumbs">
          <a href="/">Home</a> / Reference / File Locations
        </div>

        <h1>File Locations</h1>
        <p>This page maps out where important files and directories live so you can find what you need quickly. Use this as a reference when browsing the server, debugging an issue, or checking on agent output.</p>

        <div class="callout note">
          <div class="callout-title">Note</div>
          <p>All paths on this page refer to the EC2 instance unless otherwise noted. Paths beginning with <code>~/</code> are relative to the deploy user's home directory (<code>/home/ubuntu</code>).</p>
        </div>

        <h3>Notes Data</h3>
        <table>
          <thead>
            <tr>
              <th>Path</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>~/notes/</code></td>
              <td>Root of the LogSeq vault (EC2). Syncthing keeps this in sync with <code>~/AgentTeamOS/notes/</code> on Mac. Folder ID: <code>notes</code>.</td>
            </tr>
            <tr>
              <td><code>~/notes/journals/</code></td>
              <td>Daily journal pages. Each file is named by date (e.g., <code>2026_02_10.md</code>) and contains that day's notes, tasks, and log entries.</td>
            </tr>
            <tr>
              <td><code>~/notes/pages/</code></td>
              <td>Named pages for projects, areas, people, and any other non-journal content within LogSeq.</td>
            </tr>
            <tr>
              <td><code>~/notes/templates/</code></td>
              <td>Reusable templates for journal entries, project kickoffs, weekly reviews, and other recurring documents.</td>
            </tr>
          </tbody>
        </table>

        <h3>Agent Files</h3>
        <table>
          <thead>
            <tr>
              <th>Path</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>~/agents/ember/</code></td>
              <td>Ember's workspace root. Contains all agent configuration, scripts, memory, and operational files.</td>
            </tr>
            <tr>
              <td><code>~/agents/ember/memory/</code></td>
              <td>Agent memory files. Daily notes (<code>YYYY-MM-DD.md</code>) and long-term memory (<code>MEMORY.md</code>).</td>
            </tr>
            <tr>
              <td><code>~/agents/ember/knowledge/</code></td>
              <td>Structured knowledge base. Contains <code>decisions/</code>, <code>lessons/</code>, <code>commitments/</code>, <code>companies/</code>, <code>people/</code>, <code>projects/</code>. Used for semantic search.</td>
            </tr>
            <tr>
              <td><code>~/agents/ember/scripts/</code></td>
              <td>Agent scripts and executables. Contains the trust system scripts, automation helpers, and agent tools.</td>
            </tr>
            <tr>
              <td><code>~/agents/ember/logs/</code></td>
              <td>Agent operational logs, including trust decision logs.</td>
            </tr>
            <tr>
              <td colspan="2">
                <div class="callout note" style="margin: 0.5rem 0;">
                  <strong>Note:</strong> The legacy paths below (<code>/etc/agent-team/</code>, <code>/var/log/agent-team/</code>, <code>/opt/agent-team/scripts/</code>) are from an earlier installation layout and may not exist on all installs. The current active paths are under <code>~/agents/ember/</code>.
                </div>
              </td>
            </tr>
            <tr>
              <td><code>/etc/agent-team/</code></td>
              <td>Legacy agent configuration files. Contains YAML configs that define each agent's personality, trust level, permissions, and schedule. <em>May not exist on all installs.</em></td>
            </tr>
            <tr>
              <td><code>/var/log/agent-team/</code></td>
              <td>System-level agent log files. Each agent writes its own log here (e.g., <code>ember.log</code>, <code>forge.log</code>). The latest morning report is also stored here. <em>May not exist on all installs.</em></td>
            </tr>
            <tr>
              <td><code>/opt/agent-team/scripts/</code></td>
              <td>Legacy agent scripts and executables. <em>May not exist on all installs.</em></td>
            </tr>
          </tbody>
        </table>

        <!-- ============================================================= -->
        <!-- OPENCLAW                                                       -->
        <!-- ============================================================= -->
        <h3 id="openclaw">OpenClaw</h3>

        <div class="callout note">
          <div class="callout-title">Core Runtime</div>
          <p>These paths are managed by the OpenClaw <a href="/architecture/gateway">Gateway</a> and <a href="/architecture/agent-runner">Agent Runner</a>. They contain runtime configuration, session data, and per-agent workspaces.</p>
        </div>

        <table>
          <thead>
            <tr>
              <th>Path</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>~/.openclaw/</code></td>
              <td>OpenClaw root directory. Contains all runtime configuration, agent data, and session state for the OpenClaw platform.</td>
            </tr>
            <tr>
              <td><code>~/.openclaw/config.yaml</code></td>
              <td>Main OpenClaw configuration file. Defines gateway settings, channel adapters, agent definitions, model routing, tool policies, and cron schedules. This is the single source of truth for how OpenClaw operates.</td>
            </tr>
            <tr>
              <td><code>~/.openclaw/agents/</code></td>
              <td>Per-agent workspace and session data root. Each agent gets a subdirectory (e.g., <code>agents/ember/</code>) containing its workspace files and session transcripts.</td>
            </tr>
            <tr>
              <td><code>~/.openclaw/agents/ember/sessions/</code></td>
              <td>Session transcripts for Ember. Each session is stored as a JSONL file containing the full conversation history — messages, tool calls, and responses. Useful for auditing and debugging.</td>
            </tr>
            <tr>
              <td><code>~/.openclaw/agents/ember/workspace/</code></td>
              <td>Ember's persistent workspace directory. This is where the agent stores its <code>SOUL.md</code>, <code>MEMORY.md</code>, <code>memory/</code> daily notes, and any other files it creates. Mounted into each session's sandbox automatically.</td>
            </tr>
          </tbody>
        </table>

        <!-- ============================================================= -->
        <!-- TRUST SYSTEM FILES                                             -->
        <!-- ============================================================= -->
        <h3 id="trust-system">Trust System</h3>

        <div class="callout success">
          <div class="callout-title">Live System</div>
          <p>The trust system is fully implemented and actively enforcing permissions. These files are the source of truth for agent authorization.</p>
        </div>

        <table>
          <thead>
            <tr>
              <th>Path</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>~/agents/ember/config/trust-levels.json</code></td>
              <td>Trust system configuration. Defines all four trust levels (0–3) with their permissions, tool restrictions, and escalation triggers. Also contains each agent's current trust level assignment and approval settings. This is the single source of truth for the trust hierarchy.</td>
            </tr>
            <tr>
              <td><code>~/agents/ember/scripts/trust-system.sh</code></td>
              <td>Trust system engine. The main executable with 10 subcommands for checking permissions, managing approvals, escalating/demoting agents, and viewing status. See <a href="/reference/commands#trust-system">Trust System Commands</a> for the full CLI reference.</td>
            </tr>
            <tr>
              <td><code>~/agents/ember/scripts/trust-check.sh</code></td>
              <td>Source-able trust check wrapper. Provides the <code>trust_check</code>, <code>trust_check_tool</code>, and other convenience functions that agents use in their sessions. Automatically loaded via <code>.bashrc.agent</code>.</td>
            </tr>
            <tr>
              <td><code>~/agents/ember/.bashrc.agent</code></td>
              <td>Agent shell profile. Auto-sources <code>trust-check.sh</code> and sets up trust aliases so enforcement is active in every agent session.</td>
            </tr>
            <tr>
              <td><code>~/agents/ember/data/approval-queue/</code></td>
              <td>Approval request queue. Each pending request is stored as a JSON file (e.g., <code>req-1739328431-12345.json</code>) containing the agent name, action, reason, status, and timestamps. Requests are updated in-place when approved or denied.</td>
            </tr>
            <tr>
              <td><code>~/agents/ember/logs/trust-decisions.log</code></td>
              <td>Trust decision audit log. Every trust check — allowed, denied, or queued — is logged here with a timestamp, agent name, action, and result. Use <code>trust-system.sh log</code> to view recent entries.</td>
            </tr>
            <tr>
              <td><code>~/agents/ember/scripts/handoff.sh</code></td>
              <td>Session continuity functions. Provides <code>handoff_wake</code>, <code>handoff_sleep</code>, <code>handoff_recap</code>, and <code>handoff_heartbeat</code> for session context recovery. Source it: <code>source handoff.sh && handoff_wake</code>.</td>
            </tr>
          </tbody>
        </table>

        <h3>Syncthing</h3>
        <table>
          <thead>
            <tr>
              <th>Path</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>~/.config/syncthing/</code></td>
              <td>Syncthing configuration directory. Contains <code>config.xml</code> with device IDs, folder settings, and connection preferences.</td>
            </tr>
            <tr>
              <td><code>~/notes/</code></td>
              <td>Sync folder. This is the same Notes directory listed above — Syncthing watches this folder and replicates changes to connected devices. Folder ID: <code>notes</code>.</td>
            </tr>
            <tr>
              <td><code>.sync-conflict-*</code></td>
              <td>Conflict files. When two devices edit the same file simultaneously, Syncthing creates a conflict copy with this naming pattern. Search for these files periodically and resolve any duplicates.</td>
            </tr>
          </tbody>
        </table>

        <h3>System</h3>
        <table>
          <thead>
            <tr>
              <th>Path</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>crontab -l</code> (command)</td>
              <td>View the current user's cron schedule. Not a file path -- run this command to see all scheduled jobs including morning reports, backups, and maintenance tasks.</td>
            </tr>
            <tr>
              <td><code>/var/backups/agent-team/</code></td>
              <td>Automated backups. Contains timestamped snapshots of the Notes vault and agent configuration, created by Forge's nightly backup job.</td>
            </tr>
            <tr>
              <td><code>/etc/tailscale/</code></td>
              <td>Tailscale configuration. Contains VPN settings and authentication state. Rarely needs manual editing.</td>
            </tr>
          </tbody>
        </table>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li>Familiarize yourself with the <a href="/reference/commands">Quick Commands</a> page — including the <a href="/reference/commands#openclaw-cli">OpenClaw CLI</a> and <a href="/reference/commands#trust-system">Trust System Commands</a> sections.</li>
            <li>Review the <a href="/architecture">Architecture Overview</a> to understand how the OpenClaw components (Gateway, Lane Queue, Agent Runner) fit together.</li>
            <li>If you find <code>.sync-conflict-*</code> files, follow the resolution steps in the <a href="/troubleshooting/syncthing">Syncthing Troubleshooting</a> guide.</li>
            <li>Check the <a href="/reference/glossary">Glossary</a> if you encounter unfamiliar terms while browsing the file system.</li>
            <li>Read the <a href="/agents/trust-levels">Trust Levels</a> page for the conceptual overview of the trust system.</li>
          </ul>
        </div>

        <p style="margin-top: 2rem; font-size: 0.8rem; color: #888;">Last updated: February 14, 2026</p>0:{"P":null,"b":"vzbdtBP5U_venz5tN8oS4","p":"","c":["","reference","file-locations"],"i":false,"f":[[["",{"children":["(authenticated)",{"children":["reference",{"children":["file-locations",{"children":["__PAGE__",{}]}]}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/56998b7e09014914.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]]}],{"children":["(authenticated)",["$","$1","c",{"children":[null,["$","body",null,{"children":[["$","input",null,{"type":"checkbox","id":"menu-toggle","className":"menu-toggle"}],["$","label",null,{"htmlFor":"menu-toggle","className":"hamburger","aria-label":"Toggle navigation","children":"☰"}],["$","label",null,{"htmlFor":"menu-toggle","className":"overlay"}],["$","div",null,{"className":"site-wrapper","children":[["$","$L4",null,{}],["$","main",null,{"className":"main-content","children":["$","div",null,{"className":"content-wrapper","children":["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:style","children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:1:props:style","children":404}],["$","div",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:2:props:style","children":["$","h2",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:2:props:children:props:style","children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]}]]}]]}]]}],{"children":["reference",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["file-locations",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["__PAGE__",["$","$1","c",{"children":[["$","div",null,{"dangerouslySetInnerHTML":{"__html":"$5"}}],null,"$L6"]}],{},null,false]},null,false]},null,false]},null,false]},null,false],"$L7",false]],"m":"$undefined","G":["$8",[]],"s":false,"S":true}
9:I[4431,[],"OutletBoundary"]
b:I[5278,[],"AsyncMetadataOutlet"]
d:I[4431,[],"ViewportBoundary"]
f:I[4431,[],"MetadataBoundary"]
10:"$Sreact.suspense"
6:["$","$L9",null,{"children":["$La",["$","$Lb",null,{"promise":"$@c"}]]}]
7:["$","$1","h",{"children":[null,[["$","$Ld",null,{"children":"$Le"}],null],["$","$Lf",null,{"children":["$","div",null,{"hidden":true,"children":["$","$10",null,{"fallback":null,"children":"$L11"}]}]}]]}]
e:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
a:null
c:{"metadata":[["$","title","0",{"children":"File Locations — Agent Team OS Guide"}],["$","meta","1",{"name":"description","content":"Your personal AI agent team, working together to keep your life organized."}]],"error":null,"digest":"$undefined"}
11:"$c:metadata"
