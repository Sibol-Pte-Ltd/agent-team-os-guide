import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trust Levels — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
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
source ~/agents/shared/scripts/trust-check.sh</code></pre>
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

        <p style="margin-top: 2rem; font-size: 0.8rem; color: #888;">Last updated: February 14, 2026</p>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
