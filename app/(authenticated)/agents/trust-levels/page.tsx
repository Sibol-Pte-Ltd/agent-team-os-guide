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
            <li><a href="/reference/commands#trust-system">View Trust System Commands</a> for the full CLI reference with examples</li>
            <li><a href="/reference/file-locations#trust-system">View Trust System File Locations</a> for the directory layout</li>
            <li><a href="/agents">Review the agent team</a> and their current trust levels</li>
            <li><a href="/agents/ember">Learn about Ember</a> and what Level 3 autonomy looks like in practice</li>
            <li><a href="/agents/scout">Learn about Scout</a> and what Level 2 approval workflows look like</li>
            <li><a href="/getting-started/first-day">See Your First Day</a> to understand how trust levels play out in daily use</li>
          </ul>
        </div>

        <p style="margin-top: 2rem; font-size: 0.8rem; color: #888;">Last updated: February 12, 2026</p>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
