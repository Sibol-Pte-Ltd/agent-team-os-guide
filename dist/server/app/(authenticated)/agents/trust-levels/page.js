(()=>{var a={};a.id=5333,a.ids=[5333],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},16953:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>f,metadata:()=>e});var d=c(75338);c(82704);let e={title:"Agent Team OS — User Guide",description:"Your personal AI agent team, working together to keep your life organized."};function f({children:a}){return(0,d.jsx)("html",{lang:"en",children:a})}},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},20671:()=>{},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},28354:a=>{"use strict";a.exports=require("util")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:a=>{"use strict";a.exports=require("path")},36478:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(97954).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/components/Sidebar.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/components/Sidebar.tsx","default")},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},57623:()=>{},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},64916:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>f});var d=c(75338),e=c(36478);function f({children:a}){return(0,d.jsxs)("body",{children:[(0,d.jsx)("input",{type:"checkbox",id:"menu-toggle",className:"menu-toggle"}),(0,d.jsx)("label",{htmlFor:"menu-toggle",className:"hamburger","aria-label":"Toggle navigation",children:"☰"}),(0,d.jsx)("label",{htmlFor:"menu-toggle",className:"overlay"}),(0,d.jsxs)("div",{className:"site-wrapper",children:[(0,d.jsx)(e.default,{}),(0,d.jsx)("main",{className:"main-content",children:(0,d.jsx)("div",{className:"content-wrapper",children:a})})]})]})}},67031:(a,b,c)=>{Promise.resolve().then(c.bind(c,36478))},69677:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>g,metadata:()=>e});var d=c(75338);let e={title:"Trust Levels — Agent Team OS Guide"},f=`<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/agents">Agents</a>
          <span class="separator">/</span>
          Trust Levels
        </div>

        <h1>Trust Levels</h1>

        <p>Every agent in Agent Team OS operates within a trust level that defines how much autonomy it has. Trust levels are the mechanism that keeps you in control while allowing agents to be genuinely useful. A higher trust level means more independence; a lower trust level means more oversight.</p>

        <!-- ============================================================= -->
        <!-- IMPLEMENTATION STATUS                                          -->
        <!-- ============================================================= -->
        <h2 id="implementation-status">Implementation Status</h2>

        <div class="callout success">
          <div class="callout-title">✅ Trust System is Live</div>
          <p>The trust system is fully implemented and actively enforcing permissions as of February 12, 2026. All agent actions pass through trust checks before execution, and restricted actions trigger the approval workflow automatically.</p>
        </div>

        <div class="status-summary">
          <div class="status-card success">
            <div class="status-title">Configuration</div>
            <div class="status-value">Active</div>
            <div class="status-detail">trust-levels.json v1.0.0 — 4 levels, 4 agents configured</div>
          </div>
          <div class="status-card success">
            <div class="status-title">Enforcement Engine</div>
            <div class="status-value">Active</div>
            <div class="status-detail">trust-system.sh — 10 subcommands, full approval workflow</div>
          </div>
          <div class="status-card success">
            <div class="status-title">Agent Integration</div>
            <div class="status-value">Active</div>
            <div class="status-detail">trust-check.sh sourced via .bashrc.agent in all sessions</div>
          </div>
          <div class="status-card success">
            <div class="status-title">Notifications</div>
            <div class="status-value">Active</div>
            <div class="status-detail">Discord + Pushover alerts on approval requests and trust changes</div>
          </div>
        </div>

        <!-- ============================================================= -->
        <!-- TRUST LEVEL TABLE                                              -->
        <!-- ============================================================= -->
        <h2>The Four Trust Levels</h2>

        <p>The system uses four trust levels, numbered 0 through 3:</p>

        <table>
          <thead>
            <tr>
              <th>Level</th>
              <th>Name</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>0</strong></td>
              <td>Observer</td>
              <td>Can only read and observe. No actions of any kind are permitted.</td>
              <td>A new agent in evaluation mode that can view your data but cannot create, modify, or delete anything.</td>
            </tr>
            <tr>
              <td><strong>1</strong></td>
              <td>Suggest</td>
              <td>Can propose actions and make recommendations, but every action requires explicit human approval before execution.</td>
              <td>An agent that drafts a task list for you to review and approve, but cannot add tasks to your system on its own.</td>
            </tr>
            <tr>
              <td><strong>2</strong></td>
              <td>Act with Approval</td>
              <td>Can research and prepare independently, but needs your approval before making changes or acting on findings.</td>
              <td>Scout researching cloud providers and compiling a brief, then waiting for your go-ahead before taking any next steps.</td>
            </tr>
            <tr>
              <td><strong>3</strong></td>
              <td>Autonomous</td>
              <td>Can act on routine tasks independently without asking. Escalates edge cases and non-routine situations to you for approval.</td>
              <td>Ember creating your morning report and adjusting task priorities, or Forge running a scheduled backup and clearing temp files.</td>
            </tr>
          </tbody>
        </table>

        <h2>Current Agent Trust Levels</h2>

        <p>Here is where each agent currently sits in the trust system:</p>

        <ul>
          <li><strong><a href="/agents/ember">Ember</a></strong> — <span class="badge success">Level 3</span> Autonomous. Can manage daily operations, create reports, and adjust priorities independently.</li>
          <li><strong><a href="/agents/scout">Scout</a></strong> — <span class="badge warning">Level 2</span> Act with Approval. Can research independently but needs approval before acting on findings.</li>
          <li><strong><a href="/agents/forge">Forge</a></strong> — <span class="badge success">Level 3</span> Autonomous. Can perform routine maintenance and monitoring independently.</li>
          <li><strong><a href="/agents/architect">Architect</a></strong> — <span class="badge warning">Level 2</span> Act with Approval. Can analyze and plan independently but needs approval before external actions.</li>
        </ul>

        <!-- ============================================================= -->
        <!-- HOW IT WORKS                                                   -->
        <!-- ============================================================= -->
        <h2 id="how-it-works">How It Works</h2>

        <p>The trust system enforces permissions through a three-layer architecture:</p>

        <h3>1. Configuration Layer</h3>
        <p>The file <code>~/agents/ember/config/trust-levels.json</code> is the single source of truth. It defines:</p>
        <ul>
          <li>The four trust levels with their permissions, allowed/denied tools, and escalation triggers</li>
          <li>Each agent's current trust level assignment</li>
          <li>Approval settings: 24-hour timeout (default deny), queue directory path, max 10 pending requests per agent</li>
          <li>Notification channels for approval requests, trust changes, and escalations</li>
        </ul>

        <h3>2. Enforcement Layer</h3>
        <p>The script <code>trust-system.sh</code> is the enforcement engine. When an agent attempts an action:</p>
        <ol>
          <li>The action is <strong>classified</strong> into a category: read-only, workspace write, command execution, internal notification, external communication, destructive, system modification, financial, trust change, or unknown.</li>
          <li>The agent's trust level is <strong>looked up</strong> from the config file.</li>
          <li>The permission matrix is <strong>evaluated</strong>: the combination of trust level + action category produces one of three results: ALLOWED (exit code 0), DENIED (exit code 1), or NEEDS_APPROVAL (exit code 2).</li>
          <li>If approval is needed, a request is <strong>queued</strong> as a JSON file and notifications are sent via Discord and Pushover.</li>
          <li>Every decision is <strong>logged</strong> to the trust decision audit log.</li>
        </ol>

        <h3>3. Integration Layer</h3>
        <p>The script <code>trust-check.sh</code> is sourced by every agent session via <code>.bashrc.agent</code>. It provides:</p>
        <ul>
          <li><code>trust_check</code> — the main function agents call before restricted actions</li>
          <li><code>trust_check_tool</code> — classifies raw OpenClaw tool calls and runs the check</li>
          <li>A <strong>restricted action map</strong> that translates tool names (like <code>message</code>, <code>exec</code>, <code>write</code>) into trust action categories</li>
          <li>Automatic agent name detection from the OpenClaw session</li>
          <li>Environment variables for dry-run mode and silent operation</li>
        </ul>

        <div class="callout note">
          <div class="callout-title">Restricted Actions — Always Checked</div>
          <p>Certain actions always trigger a trust check, regardless of trust level. These include: sending external messages, writing/editing/deleting files outside the workspace, elevated/sudo execution, adding cron jobs, browser actions, all financial operations, and trust level changes. Even Level 3 agents pass through enforcement for these.</p>
        </div>

        <!-- ============================================================= -->
        <!-- TRUST vs TOOL POLICY BRIDGE                                    -->
        <!-- ============================================================= -->
        <h2 id="trust-vs-tool-policy">How Trust Relates to OpenClaw Tool Policy</h2>

        <p>If you have read the <a href="/architecture/execution-layer">Execution Layer</a> documentation, you know that OpenClaw has its own permission system: tool allowlists, security modes, sandbox settings, and subagent policies. The trust system described on this page is a <em>separate</em> layer that works alongside OpenClaw's built-in tool policy. Understanding how they interact is important, because they solve different problems.</p>

        <h3>Two Layers, Two Jobs</h3>

        <div class="callout note">
          <div class="callout-title">The Key Distinction</div>
          <p><strong>OpenClaw tool policy</strong> controls which tools an agent can <em>see</em>. <strong>The trust system</strong> controls when an agent should <em>seek human approval</em> before using a tool it can see.</p>
        </div>

        <p>Here is how the two layers break down:</p>

        <table>
          <thead>
            <tr>
              <th></th>
              <th>Layer 1: OpenClaw Tool Policy</th>
              <th>Layer 2: Trust System</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>What it controls</strong></td>
              <td>Tool <em>availability</em> — which tools appear in the agent's toolbox</td>
              <td>Action <em>approval</em> — whether the agent needs human sign-off before acting</td>
            </tr>
            <tr>
              <td><strong>Where it lives</strong></td>
              <td>OpenClaw configuration: agent profiles, tool allowlists, security modes in <code>config.yaml</code></td>
              <td>Agent Team OS configuration: <code>trust-levels.json</code>, <code>trust-system.sh</code>, <code>trust-check.sh</code></td>
            </tr>
            <tr>
              <td><strong>Enforcement mechanism</strong></td>
              <td>OpenClaw filters tools from the LLM's schema before each turn — the agent literally cannot call a tool it cannot see</td>
              <td>Bash hooks and agent instructions intercept actions at runtime and check the permission matrix</td>
            </tr>
            <tr>
              <td><strong>Scope</strong></td>
              <td>Per-agent, per-channel, per-subagent. Can also apply sandbox isolation and network restrictions.</td>
              <td>Per-agent, per-action-category. Adds behavioral guidelines like escalation triggers and approval queues.</td>
            </tr>
            <tr>
              <td><strong>What changing it does</strong></td>
              <td>Adding or removing a tool from the allowlist changes what the agent <em>can attempt</em></td>
              <td>Changing a trust level changes what the agent <em>can do without asking</em></td>
            </tr>
          </tbody>
        </table>

        <h3>How They Work Together</h3>

        <p>The two layers are complementary, not redundant. Think of it as two gates an action must pass through:</p>

        <ol>
          <li><strong>Gate 1 — Tool Policy (OpenClaw):</strong> When the LLM is about to reason, OpenClaw builds the list of available tools based on allowlists, security modes, and channel context. If a tool is not in the list, the agent does not even know it exists — it cannot attempt to use it. This is a hard, platform-level restriction.</li>
          <li><strong>Gate 2 — Trust Check (Agent Team OS):</strong> For tools that <em>are</em> available, the trust system evaluates whether the specific action requires approval given the agent's trust level. A Level 2 agent might have access to the <code>message</code> tool (it passes Gate 1) but still need your approval before sending an external message (Gate 2 returns NEEDS_APPROVAL).</li>
        </ol>

        <p>This means an action is only executed when it passes <em>both</em> gates. Removing a tool via OpenClaw's allowlist is a stronger restriction than the trust system — if the tool is not available, there is nothing for the trust system to check. Conversely, the trust system adds nuance that tool policy alone cannot provide: the difference between "Scout can use the message tool to post internally" and "Scout needs approval to post externally" is a trust-level distinction, not a tool-policy one.</p>

        <h3>Practical Examples</h3>

        <ul>
          <li><strong>Restricting a tool entirely:</strong> If you never want Scout to use the browser, remove <code>browser</code> from Scout's tool allowlist in OpenClaw config. Scout will not see the tool at all — no trust check needed.</li>
          <li><strong>Allowing a tool with oversight:</strong> If Scout should be able to send messages but only with your approval, keep <code>message</code> in Scout's allowlist (Gate 1 passes) and leave Scout at Trust Level 2 (Gate 2 requires approval for external communication).</li>
          <li><strong>Granting full autonomy:</strong> For Ember at Trust Level 3, most routine actions pass both gates automatically — Ember has the tools available (Gate 1) and has autonomous permission for routine actions (Gate 2). Only edge cases like financial operations or trust changes still require approval.</li>
          <li><strong>Sandbox isolation:</strong> OpenClaw can sandbox an agent's execution in a Docker container with limited network access. This is a Layer 1 restriction — it constrains <em>how</em> tools execute, not whether the agent gets approval. A sandboxed agent at Trust Level 3 still acts autonomously, but within the sandbox boundary.</li>
        </ul>

        <h3>When to Change Which</h3>

        <p>If you want to change what an agent can do, the right lever depends on what you are trying to achieve:</p>

        <ul>
          <li><strong>Change OpenClaw tool policy when</strong> you want to add or remove entire capabilities — "this agent should/should not have access to shell execution" or "this subagent should only have read and web_search."</li>
          <li><strong>Change trust level when</strong> you want to adjust the approval workflow — "this agent has proven reliable enough to send messages without asking" or "I want more oversight on this agent's file writes."</li>
          <li><strong>Change both when</strong> onboarding a new agent — set the tool allowlist to only what the agent needs (principle of least privilege), then assign a trust level that reflects your confidence in the agent's judgment.</li>
        </ul>

        <p>For details on OpenClaw's tool policy configuration — allowlists, security modes, sandbox settings, and subagent policies — see the <a href="/architecture/execution-layer#tool-policy">Execution Layer: Tool Policy &amp; Filtering</a> documentation.</p>

        <!-- ============================================================= -->
        <!-- PHILOSOPHY                                                     -->
        <!-- ============================================================= -->
        <h2>Philosophy</h2>

        <p>The trust level system is built on a few core principles:</p>

        <h3>Trust is earned over time</h3>
        <p>Agents do not start at high trust levels. They begin at lower levels and are promoted as they demonstrate reliability. This approach ensures that you have confidence in an agent's behavior before granting it more autonomy. If a new agent were added to the team, it would likely start at Level 0 or 1 until its behavior was validated.</p>

        <h3>Trust can be adjusted per agent</h3>
        <p>Each agent has its own trust level, independent of the others. This reflects the reality that different agents have different roles and different risk profiles. Forge, which handles well-defined infrastructure tasks, can safely operate at Level 3. A hypothetical new agent handling financial transactions might need to stay at Level 1 for much longer before being promoted.</p>

        <h3>Defaults favor safety</h3>
        <p>When in doubt, the system defaults to lower trust levels. It is better for an agent to ask permission unnecessarily than to take an action you did not want. This is especially important for actions that are difficult or impossible to undo. The cost of a brief interruption to approve an action is far lower than the cost of undoing something that should not have happened.</p>

        <h3>Escalation is expected, not exceptional</h3>
        <p>Even Level 3 agents are expected to escalate when they encounter situations outside their normal operating parameters. Escalation is not a failure — it is the system working correctly. An agent that never escalates is more concerning than one that occasionally asks for guidance, because it suggests the agent may be making assumptions about situations it should be flagging.</p>

        <div class="callout warning">
          <div class="callout-title">Active Enforcement</div>
          <p>The trust system is actively enforcing permissions. Changing an agent's trust level via <code>trust-system.sh escalate</code> or <code>trust-system.sh demote</code> takes effect immediately — the agent's permissions change right away. Be thoughtful when raising an agent from Level 2 to Level 3, as it grants the ability to act without your approval on routine tasks. Make sure you have observed enough of the agent's behavior at the current level to feel confident it will handle the additional autonomy well.</p>
        </div>

        <!-- ============================================================= -->
        <!-- CHANGING TRUST LEVELS                                          -->
        <!-- ============================================================= -->
        <h2>Changing Trust Levels</h2>

        <p>Trust levels are changed using the <code>trust-system.sh</code> CLI. Changes take effect immediately and are logged to the audit trail.</p>

        <table>
          <thead>
            <tr>
              <th>Action</th>
              <th>Command</th>
              <th>When to Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Promote</strong></td>
              <td><code>trust-system.sh escalate &lt;agent&gt; &lt;new-level&gt; &lt;reason&gt;</code></td>
              <td>An agent has been operating reliably at its current level and you are comfortable granting more autonomy.</td>
            </tr>
            <tr>
              <td><strong>Demote</strong></td>
              <td><code>trust-system.sh demote &lt;agent&gt; &lt;new-level&gt; &lt;reason&gt;</code></td>
              <td>An agent made a decision you disagreed with, and you want to add more oversight until confidence is restored.</td>
            </tr>
            <tr>
              <td><strong>Check current</strong></td>
              <td><code>trust-system.sh get-level &lt;agent&gt;</code></td>
              <td>Quick check to see where an agent currently sits.</td>
            </tr>
            <tr>
              <td><strong>Full status</strong></td>
              <td><code>trust-system.sh status</code></td>
              <td>Overview of all agent levels, pending approvals, and recent decisions.</td>
            </tr>
          </tbody>
        </table>

        <p>For the complete CLI reference with all 10 commands and examples, see the <a href="/reference/commands#trust-system">Trust System Commands</a> page.</p>

        <!-- ============================================================= -->
        <!-- FOR DEVELOPERS                                                 -->
        <!-- ============================================================= -->
        <h2 id="for-developers">For Developers</h2>

        <p>If you are building new agents or integrating with the trust system, here is what you need to know.</p>

        <h3>Adding Trust Checks to a New Agent</h3>
        <ol>
          <li><strong>Add the agent to the config.</strong> Edit <code>~/agents/ember/config/trust-levels.json</code> and add an entry to the <code>agents</code> object with the agent name, role, trust level, and workspace path.</li>
          <li><strong>Source the integration script.</strong> In the agent's session initialization (or spawn context), add:
            <pre><code>export TRUST_AGENT_NAME="your-agent-name"
source ~/agents/ember/scripts/trust-check.sh</code></pre>
            Or simply source <code>.bashrc.agent</code> which handles this automatically.
          </li>
          <li><strong>Call trust_check before restricted actions.</strong> Before any action that could be restricted, call:
            <pre><code>trust_check "$TRUST_AGENT_NAME" "action_name" "reason for the action"</code></pre>
            Check the return code: 0 means proceed, 1 means blocked, 2 means approval was queued (do not proceed yet).
          </li>
        </ol>

        <h3>Spawning Subagents with Trust Enforcement</h3>
        <p>When spawning a subagent, always include trust context in the spawn block to ensure the subagent's trust level is enforced — not the parent's:</p>
        <pre><code>export TRUST_AGENT_NAME="scout"  # Use the subagent's name
source ~/agents/ember/.bashrc.agent</code></pre>

        <h3>Action Classification</h3>
        <p>The trust system classifies actions into these categories, which map to the permission matrix:</p>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>L0</th>
              <th>L1</th>
              <th>L2</th>
              <th>L3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>read_only</td>
              <td><span class="badge success">Allow</span></td>
              <td><span class="badge success">Allow</span></td>
              <td><span class="badge success">Allow</span></td>
              <td><span class="badge success">Allow</span></td>
            </tr>
            <tr>
              <td>workspace_write</td>
              <td><span class="badge error">Deny</span></td>
              <td><span class="badge error">Deny</span></td>
              <td><span class="badge success">Allow</span></td>
              <td><span class="badge success">Allow</span></td>
            </tr>
            <tr>
              <td>command_execution</td>
              <td><span class="badge error">Deny</span></td>
              <td><span class="badge error">Deny</span></td>
              <td><span class="badge success">Allow</span></td>
              <td><span class="badge success">Allow</span></td>
            </tr>
            <tr>
              <td>internal_notification</td>
              <td><span class="badge error">Deny</span></td>
              <td><span class="badge error">Deny</span></td>
              <td><span class="badge warning">Approval</span></td>
              <td><span class="badge success">Allow</span></td>
            </tr>
            <tr>
              <td>external_communication</td>
              <td><span class="badge error">Deny</span></td>
              <td><span class="badge error">Deny</span></td>
              <td><span class="badge warning">Approval</span></td>
              <td><span class="badge warning">Approval</span></td>
            </tr>
            <tr>
              <td>destructive</td>
              <td><span class="badge error">Deny</span></td>
              <td><span class="badge error">Deny</span></td>
              <td><span class="badge warning">Approval</span></td>
              <td><span class="badge success">Allow</span></td>
            </tr>
            <tr>
              <td>system_modification</td>
              <td><span class="badge error">Deny</span></td>
              <td><span class="badge error">Deny</span></td>
              <td><span class="badge warning">Approval</span></td>
              <td><span class="badge success">Allow</span></td>
            </tr>
            <tr>
              <td>financial</td>
              <td><span class="badge error">Deny</span></td>
              <td><span class="badge error">Deny</span></td>
              <td><span class="badge warning">Approval</span></td>
              <td><span class="badge warning">Approval</span></td>
            </tr>
            <tr>
              <td>trust_change</td>
              <td><span class="badge error">Deny</span></td>
              <td><span class="badge error">Deny</span></td>
              <td><span class="badge warning">Approval</span></td>
              <td><span class="badge warning">Approval</span></td>
            </tr>
            <tr>
              <td>unknown</td>
              <td><span class="badge error">Deny</span></td>
              <td><span class="badge error">Deny</span></td>
              <td><span class="badge warning">Approval</span></td>
              <td><span class="badge warning">Approval</span></td>
            </tr>
          </tbody>
        </table>

        <h3>Key Files</h3>
        <p>See the <a href="/reference/file-locations#trust-system">Trust System file locations</a> for the full directory layout, and the <a href="/reference/commands#trust-system">Trust System Commands</a> for the complete CLI reference.</p>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li><a href="/architecture/execution-layer">Understand the Execution Layer</a> and how OpenClaw's tool policy works alongside trust levels</li>
            <li><a href="/reference/commands#trust-system">View Trust System Commands</a> for the full CLI reference with examples</li>
            <li><a href="/reference/file-locations#trust-system">View Trust System File Locations</a> for the directory layout</li>
            <li><a href="/agents">Review the agent team</a> and their current trust levels</li>
            <li><a href="/agents/ember">Learn about Ember</a> and what Level 3 autonomy looks like in practice</li>
            <li><a href="/agents/scout">Learn about Scout</a> and what Level 2 approval workflows look like</li>
            <li><a href="/getting-started/first-day">See Your First Day</a> to understand how trust levels play out in daily use</li>
          </ul>
        </div>

        <p style="margin-top: 2rem; font-size: 0.8rem; color: #888;">Last updated: February 14, 2026</p>`;function g(){return(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:f}})}},71759:(a,b,c)=>{Promise.resolve().then(c.bind(c,95010))},78335:()=>{},82615:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,81170,23)),Promise.resolve().then(c.t.bind(c,23597,23)),Promise.resolve().then(c.t.bind(c,36893,23)),Promise.resolve().then(c.t.bind(c,89748,23)),Promise.resolve().then(c.t.bind(c,6060,23)),Promise.resolve().then(c.t.bind(c,7184,23)),Promise.resolve().then(c.t.bind(c,69576,23)),Promise.resolve().then(c.t.bind(c,73041,23)),Promise.resolve().then(c.t.bind(c,51384,23))},82704:()=>{},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},87343:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,54160,23)),Promise.resolve().then(c.t.bind(c,31603,23)),Promise.resolve().then(c.t.bind(c,68495,23)),Promise.resolve().then(c.t.bind(c,75170,23)),Promise.resolve().then(c.t.bind(c,77526,23)),Promise.resolve().then(c.t.bind(c,78922,23)),Promise.resolve().then(c.t.bind(c,29234,23)),Promise.resolve().then(c.t.bind(c,12263,23)),Promise.resolve().then(c.bind(c,82146))},87366:(a,b,c)=>{"use strict";c.r(b),c.d(b,{GlobalError:()=>D.a,__next_app__:()=>J,handler:()=>L,pages:()=>I,routeModule:()=>K,tree:()=>H});var d=c(49754),e=c(9117),f=c(46595),g=c(32324),h=c(39326),i=c(38928),j=c(20175),k=c(12),l=c(54290),m=c(12696),n=c(82802),o=c(77533),p=c(45229),q=c(32822),r=c(261),s=c(26453),t=c(52474),u=c(26713),v=c(51356),w=c(62685),x=c(36225),y=c(63446),z=c(2762),A=c(45742),B=c(86439),C=c(81170),D=c.n(C),E=c(62506),F=c(91203),G={};for(let a in E)0>["default","tree","pages","GlobalError","__next_app__","routeModule","handler"].indexOf(a)&&(G[a]=()=>E[a]);c.d(b,G);let H={children:["",{children:["(authenticated)",{children:["agents",{children:["trust-levels",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,69677)),"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/(authenticated)/agents/trust-levels/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(c.bind(c,64916)),"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/(authenticated)/layout.tsx"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,87028,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,90461,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,32768,23)),"next/dist/client/components/builtin/unauthorized.js"]}]},{layout:[()=>Promise.resolve().then(c.bind(c,16953)),"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,81170,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,87028,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,90461,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,32768,23)),"next/dist/client/components/builtin/unauthorized.js"]}]}.children,I=["/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/(authenticated)/agents/trust-levels/page.tsx"],J={require:c,loadChunk:()=>Promise.resolve()},K=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/(authenticated)/agents/trust-levels/page",pathname:"/agents/trust-levels",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:H},distDir:".next",relativeProjectDir:""});async function L(a,b,d){var C;let G="/(authenticated)/agents/trust-levels/page";"/index"===G&&(G="/");let M=(0,h.getRequestMeta)(a,"postponed"),N=(0,h.getRequestMeta)(a,"minimalMode"),O=await K.prepare(a,b,{srcPage:G,multiZoneDraftMode:!1});if(!O)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:P,query:Q,params:R,parsedUrl:S,pageIsDynamic:T,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,serverActionsManifest:X,clientReferenceManifest:Y,subresourceIntegrityManifest:Z,prerenderManifest:$,isDraftMode:_,resolvedPathname:aa,revalidateOnlyGenerated:ab,routerServerContext:ac,nextConfig:ad,interceptionRoutePatterns:ae}=O,af=S.pathname||"/",ag=(0,r.normalizeAppPath)(G),{isOnDemandRevalidate:ah}=O,ai=K.match(af,$),aj=!!$.routes[aa],ak=!!(ai||aj||$.routes[ag]),al=a.headers["user-agent"]||"",am=(0,u.getBotType)(al),an=(0,p.isHtmlBotRequest)(a),ao=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[t.NEXT_ROUTER_PREFETCH_HEADER],ap=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[t.RSC_HEADER],aq=(0,s.getIsPossibleServerAction)(a),ar=(0,m.checkIsAppPPREnabled)(ad.experimental.ppr)&&(null==(C=$.routes[ag]??$.dynamicRoutes[ag])?void 0:C.renderingMode)==="PARTIALLY_STATIC",as=!1,at=!1,au=ar?M:void 0,av=ar&&ap&&!ao,aw=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),ax=!al||(0,p.shouldServeStreamingMetadata)(al,ad.htmlLimitedBots);an&&ar&&(ak=!1,ax=!1);let ay=!0===K.isDev||!ak||"string"==typeof M||av,az=an&&ar,aA=null;_||!ak||ay||aq||au||av||(aA=aa);let aB=aA;!aB&&K.isDev&&(aB=aa),K.isDev||_||!ak||!ap||av||(0,k.d)(a.headers);let aC={...E,tree:H,pages:I,GlobalError:D(),handler:L,routeModule:K,__next_app__:J};X&&Y&&(0,o.setReferenceManifestsSingleton)({page:G,clientReferenceManifest:Y,serverActionsManifest:X,serverModuleMap:(0,q.createServerModuleMap)({serverActionsManifest:X})});let aD=a.method||"GET",aE=(0,g.getTracer)(),aF=aE.getActiveScopeSpan();try{let f=K.getVaryHeader(aa,ae);b.setHeader("Vary",f);let k=async(c,d)=>{let e=new l.NodeNextRequest(a),f=new l.NodeNextResponse(b);return K.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=aE.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${aD} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${aD} ${a.url}`)})},m=async({span:e,postponed:f,fallbackRouteParams:g})=>{let i={query:Q,params:R,page:ag,sharedContext:{buildId:P},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aC,Component:(0,j.T)(aC),params:R,routeModule:K,page:G,postponed:f,shouldWaitOnAllReady:az,serveStreamingMetadata:ax,supportsDynamicResponse:"string"==typeof f||ay,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,subresourceIntegrityManifest:Z,serverActionsManifest:X,clientReferenceManifest:Y,setIsrStatus:null==ac?void 0:ac.setIsrStatus,dir:c(33873).join(process.cwd(),K.relativeProjectDir),isDraftMode:_,isRevalidate:ak&&!f&&!av,botType:am,isOnDemandRevalidate:ah,isPossibleServerAction:aq,assetPrefix:ad.assetPrefix,nextConfigOutput:ad.output,crossOrigin:ad.crossOrigin,trailingSlash:ad.trailingSlash,previewProps:$.preview,deploymentId:ad.deploymentId,enableTainting:ad.experimental.taint,htmlLimitedBots:ad.htmlLimitedBots,devtoolSegmentExplorer:ad.experimental.devtoolSegmentExplorer,reactMaxHeadersLength:ad.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:ad.experimental.cacheLife,basePath:ad.basePath,serverActions:ad.experimental.serverActions,...as?{nextExport:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isRevalidate:!0,isDebugDynamicAccesses:as}:{},experimental:{isRoutePPREnabled:ar,expireTime:ad.expireTime,staleTimes:ad.experimental.staleTimes,cacheComponents:!!ad.experimental.cacheComponents,clientSegmentCache:!!ad.experimental.clientSegmentCache,clientParamParsing:!!ad.experimental.clientParamParsing,dynamicOnHover:!!ad.experimental.dynamicOnHover,inlineCss:!!ad.experimental.inlineCss,authInterrupts:!!ad.experimental.authInterrupts,clientTraceMetadata:ad.experimental.clientTraceMetadata||[]},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d)=>K.onRequestError(a,b,d,ac),err:(0,h.getRequestMeta)(a,"invokeError"),dev:K.isDev}},l=await k(e,i),{metadata:m}=l,{cacheControl:n,headers:o={},fetchTags:p}=m;if(p&&(o[y.NEXT_CACHE_TAGS_HEADER]=p),a.fetchMetrics=m.fetchMetrics,ak&&(null==n?void 0:n.revalidate)===0&&!K.isDev&&!ar){let a=m.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${aa}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:v.CachedRouteKind.APP_PAGE,html:l,headers:o,rscData:m.flightData,postponed:m.postponed,status:m.statusCode,segmentData:m.segmentData},cacheControl:n}},o=async({hasResolved:c,previousCacheEntry:f,isRevalidating:g,span:i})=>{let j,k=!1===K.isDev,l=c||b.writableEnded;if(ah&&ab&&!f&&!N)return(null==ac?void 0:ac.render404)?await ac.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ai&&(j=(0,w.parseFallbackField)(ai.fallback)),j===w.FallbackMode.PRERENDER&&(0,u.isBot)(al)&&(!ar||an)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),(null==f?void 0:f.isStale)===-1&&(ah=!0),ah&&(j!==w.FallbackMode.NOT_FOUND||f)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),!N&&j!==w.FallbackMode.BLOCKING_STATIC_RENDER&&aB&&!l&&!_&&T&&(k||!aj)){let b;if((k||ai)&&j===w.FallbackMode.NOT_FOUND)throw new B.NoFallbackError;if(ar&&!ap){let c="string"==typeof(null==ai?void 0:ai.fallback)?ai.fallback:k?ag:null;if(b=await K.handleResponse({cacheKey:c,req:a,nextConfig:ad,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:$,isRoutePPREnabled:ar,responseGenerator:async()=>m({span:i,postponed:void 0,fallbackRouteParams:k||at?(0,n.u)(ag):null}),waitUntil:d.waitUntil}),null===b)return null;if(b)return delete b.cacheControl,b}}let o=ah||g||!au?void 0:au;if(as&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:v.CachedRouteKind.PAGES,html:x.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let p=T&&ar&&((0,h.getRequestMeta)(a,"renderFallbackShell")||at)?(0,n.u)(af):null;return m({span:i,postponed:o,fallbackRouteParams:p})},p=async c=>{var f,g,i,j,k;let l,n=await K.handleResponse({cacheKey:aA,responseGenerator:a=>o({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ah,isRoutePPREnabled:ar,req:a,nextConfig:ad,prerenderManifest:$,waitUntil:d.waitUntil});if(_&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),K.isDev&&b.setHeader("Cache-Control","no-store, must-revalidate"),!n){if(aA)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=n.value)?void 0:f.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=n.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let p="string"==typeof n.value.postponed;ak&&!av&&(!p||ao)&&(N||b.setHeader("x-nextjs-cache",ah?"REVALIDATED":n.isMiss?"MISS":n.isStale?"STALE":"HIT"),b.setHeader(t.NEXT_IS_PRERENDER_HEADER,"1"));let{value:q}=n;if(au)l={revalidate:0,expire:void 0};else if(N&&ap&&!ao&&ar)l={revalidate:0,expire:void 0};else if(!K.isDev)if(_)l={revalidate:0,expire:void 0};else if(ak){if(n.cacheControl)if("number"==typeof n.cacheControl.revalidate){if(n.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${n.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});l={revalidate:n.cacheControl.revalidate,expire:(null==(j=n.cacheControl)?void 0:j.expire)??ad.expireTime}}else l={revalidate:y.CACHE_ONE_YEAR,expire:void 0}}else b.getHeader("Cache-Control")||(l={revalidate:0,expire:void 0});if(n.cacheControl=l,"string"==typeof aw&&(null==q?void 0:q.kind)===v.CachedRouteKind.APP_PAGE&&q.segmentData){b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=q.headers)?void 0:k[y.NEXT_CACHE_TAGS_HEADER];N&&ak&&c&&"string"==typeof c&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,c);let d=q.segmentData.get(aw);return void 0!==d?(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(d,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl}):(b.statusCode=204,(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.EMPTY,cacheControl:n.cacheControl}))}let r=(0,h.getRequestMeta)(a,"onCacheEntry");if(r&&await r({...n,value:{...n.value,kind:"PAGE"}},{url:(0,h.getRequestMeta)(a,"initURL")}))return null;if(p&&au)throw Object.defineProperty(Error("Invariant: postponed state should not be present on a resume request"),"__NEXT_ERROR_CODE",{value:"E396",enumerable:!1,configurable:!0});if(q.headers){let a={...q.headers};for(let[c,d]of(N&&ak||delete a[y.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let s=null==(g=q.headers)?void 0:g[y.NEXT_CACHE_TAGS_HEADER];if(N&&ak&&s&&"string"==typeof s&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,s),!q.status||ap&&ar||(b.statusCode=q.status),!N&&q.status&&F.RedirectStatusCode[q.status]&&ap&&(b.statusCode=200),p&&b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"1"),ap&&!_){if(void 0===q.rscData){if(q.postponed)throw Object.defineProperty(Error("Invariant: Expected postponed to be undefined"),"__NEXT_ERROR_CODE",{value:"E372",enumerable:!1,configurable:!0});return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:q.html,cacheControl:av?{revalidate:0,expire:void 0}:n.cacheControl})}return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(q.rscData,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl})}let u=q.html;if(!p||N||ap)return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:n.cacheControl});if(as)return u.push(new ReadableStream({start(a){a.enqueue(z.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}});let w=new TransformStream;return u.push(w.readable),m({span:c,postponed:q.postponed,fallbackRouteParams:null}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(w.writable)}).catch(a=>{w.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}})};if(!aF)return await aE.withPropagatedContext(a.headers,()=>aE.trace(i.BaseServerSpan.handleRequest,{spanName:`${aD} ${a.url}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aD,"http.target":a.url}},p));await p(aF)}catch(b){throw b instanceof B.NoFallbackError||await K.onRequestError(a,b,{routerKind:"App Router",routePath:G,routeType:"render",revalidateReason:(0,f.c)({isRevalidate:ak,isOnDemandRevalidate:ah})},ac),b}}},95010:(a,b,c)=>{"use strict";c.d(b,{default:()=>i});var d=c(21124),e=c(3991),f=c.n(e),g=c(42378);let h=[{title:null,links:[{href:"/",label:"Home"}]},{title:"Getting Started",links:[{href:"/getting-started",label:"Quick Start"},{href:"/getting-started/first-day",label:"Your First Day"},{href:"/getting-started/setup-checklist",label:"Setup Checklist"}]},{title:"Notes & Sync",links:[{href:"/life-os",label:"What is Notes"},{href:"/life-os/daily-workflow",label:"Daily Workflow"},{href:"/life-os/templates",label:"Templates"},{href:"/life-os/logseq-tips",label:"LogSeq Tips"}]},{title:"Agents",links:[{href:"/agents",label:"Meet Your Agents"},{href:"/agents/ember",label:"Ember"},{href:"/agents/scout",label:"Scout"},{href:"/agents/forge",label:"Forge"},{href:"/agents/architect",label:"Architect"},{href:"/agents/trust-levels",label:"Trust Levels"}]},{title:"Cadence",links:[{href:"/cadence",label:"Overview"},{href:"/cadence/morning-report",label:"Morning Report"},{href:"/cadence/evening-checkin",label:"Evening Check-in"},{href:"/cadence/weekly-review",label:"Weekly Review"},{href:"/cadence/monthly-review",label:"Monthly Review"}]},{title:"OpenClaw Architecture",links:[{href:"/architecture",label:"Overview"},{href:"/architecture/channel-adapters",label:"Channel Adapters"},{href:"/architecture/gateway",label:"Gateway"},{href:"/architecture/lane-queue",label:"Lane Queue"},{href:"/architecture/agent-runner",label:"Agent Runner"},{href:"/architecture/execution-layer",label:"Execution Layer"}]},{title:"Automation",links:[{href:"/automation",label:"Overview"},{href:"/automation/cron-jobs",label:"Cron Jobs"},{href:"/automation/notifications",label:"Notifications"}]},{title:"Troubleshooting",links:[{href:"/troubleshooting",label:"Common Issues"},{href:"/troubleshooting/syncthing",label:"Syncthing"},{href:"/troubleshooting/faq",label:"FAQ"}]},{title:"Reference",links:[{href:"/reference/commands",label:"Commands"},{href:"/reference/file-locations",label:"File Locations"},{href:"/reference/glossary",label:"Glossary"},{href:"/reference/changelog",label:"Changelog"}]},{title:"Implementation",links:[{href:"/implementation",label:"Status"},{href:"/implementation/gap-analysis",label:"Gap Analysis"},{href:"/implementation/roadmap",label:"Roadmap"},{href:"/implementation/activity-log",label:"Activity Log"},{href:"/implementation/site-improvements",label:"Site Improvements"},{href:"/implementation/clawvault-analysis",label:"ClawVault Analysis"}]}];function i(){let a=(0,g.usePathname)(),b=(0,g.useRouter)();async function c(){await fetch("/api/auth/logout",{method:"POST"}),b.push("/login"),b.refresh()}return(0,d.jsxs)("aside",{className:"sidebar",children:[(0,d.jsxs)("div",{className:"sidebar-header",children:[(0,d.jsx)("h1",{children:"Agent Team OS"}),(0,d.jsx)("div",{className:"subtitle",children:"User Guide"})]}),(0,d.jsx)("nav",{children:h.map((b,c)=>(0,d.jsxs)("div",{className:"nav-section",children:[b.title&&(0,d.jsx)("div",{className:"nav-section-title",children:b.title}),b.links.map(b=>(0,d.jsx)(f(),{href:b.href,className:`nav-link${a===b.href?" active":""}`,children:b.label},b.href))]},c))}),(0,d.jsx)("div",{className:"sidebar-footer",children:(0,d.jsx)("button",{onClick:c,className:"nav-link logout-link",children:"⎋ Logout"})})]})}},96487:()=>{}};var b=require("../../../../webpack-runtime.js");b.C(a);var c=b.X(0,[8543,8361,7506],()=>b(b.s=87366));module.exports=c})();