import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scout — Research Specialist — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/agents">Agents</a>
          <span class="separator">/</span>
          Scout
        </div>

        <h1>Scout — Research Specialist</h1>

        <p>Scout is your dedicated researcher. When you need to dig into a topic, evaluate options, or gather information from multiple sources, Scout does the heavy lifting so you can focus on making decisions rather than collecting data.</p>

        <h2>Role</h2>

        <p>Scout specializes in deep research, information gathering, and summarization. Rather than spending your own time reading through articles, comparing products, or synthesizing information from scattered sources, you assign the topic to Scout and receive a structured research brief in return. Scout is designed to go deep on a subject and present findings in a way that is easy to act on.</p>

        <p>Scout works closely with Ember. When you assign a research task — either directly to Scout or through Ember — Scout investigates the topic and creates a summary page in Notes. Ember then surfaces the completed research in your morning report or evening check-in so you know when it is ready for review.</p>

        <div class="callout note">
          <div class="callout-title">Status</div>
          <p><strong>Trust Level:</strong> L2 — Act with Approval<br>
          <strong>Model:</strong> MiniMax M2.5<br>
          <strong>Workspace:</strong> /home/ubuntu/agents/scout</p>
        </div>

        <h2>Responsibilities</h2>

        <ul>
          <li><strong>Investigates assigned topics</strong> — When you give Scout a research question, he gathers information from available sources, evaluates relevance, and compiles what he finds.</li>
          <li><strong>Creates research briefs</strong> — Findings are organized into structured briefs in Notes, typically including a summary, key points, pros and cons (if applicable), and recommended next steps.</li>
          <li><strong>Monitors information sources</strong> — Scout can be configured to watch specific topics or sources over time, alerting you when something new or relevant appears.</li>
          <li><strong>Summarizes findings in Notes</strong> — All research output is placed in your Notes graph so it is searchable, linkable, and integrated with the rest of your notes and projects.</li>
        </ul>

        <h2>How Scout Runs</h2>

        <p>Scout can operate in two modes: as a <strong>standalone agent</strong> with its own direct session, or as a <strong>subagent</strong> spawned by Ember for delegated research tasks.</p>

        <h3>Sessions</h3>

        <p>When you message Scout directly, the <a href="/architecture/gateway">Gateway</a> creates a session keyed to your conversation — for example, <code>agent:scout:discord:dm:987654321</code>. Like all agent sessions, messages within a Scout session are processed serially while different sessions run in parallel, managed by the <a href="/architecture/lane-queue">Lane Queue</a>.</p>

        <h3>Running as a Subagent</h3>

        <p>More commonly, Scout is <strong>spawned by Ember</strong> when a conversation requires research. In this mode, Scout runs in the <a href="/architecture/lane-queue">subagent lane</a> with its own isolated session and concurrency budget. Scout does not share Ember's conversation history — he receives a focused task description, works independently, and reports results back to the spawning session when complete.</p>

        <h3>Model</h3>

        <p>Scout uses <strong>MiniMax M2.5</strong> (<code>openrouter/minimax/minimax-m2.5</code>), configured in the OpenClaw configuration file. This is the standard model across all agents for consistency. The model is invoked by the <a href="/architecture/agent-runner">Agent Runner</a> on each turn.</p>

        <p>You can temporarily change Scout's model using the <code>/model</code> command if a specific research task would benefit from a different model.</p>

        <h2>Trust Level</h2>

        <p>Scout operates at <strong>Trust Level 2 — Act with Approval</strong>. This means Scout can research independently — gathering information, reading sources, and preparing summaries — without needing your permission for each step. However, Scout needs your approval before acting on findings, sending external messages, or making changes based on what was discovered.</p>

        <p>For example, if you ask Scout to research cloud migration options, Scout will independently compile a brief with providers, pricing, and trade-offs. But Scout will not start migrating anything, send a summary to Discord, or make recommendations that carry side effects without your explicit go-ahead. The research itself is autonomous; the actions that follow are not.</p>

        <h3>Approval Workflow in Practice</h3>

        <p>Scout's approval workflow is enforced by the <a href="/agents/trust-levels#how-it-works">trust system</a>. Before any restricted action — such as sending a message, posting to Discord, or writing files outside the workspace — Scout must pass a trust check. Here is what happens:</p>

        <ol>
          <li><strong>Scout attempts a restricted action.</strong> For example, Scout finishes a research brief and wants to post the summary to Discord.</li>
          <li><strong>The trust system intercepts.</strong> The <code>trust_check</code> function evaluates Scout's trust level (L2) against the action category (external communication) and returns <strong>NEEDS_APPROVAL</strong>.</li>
          <li><strong>An approval request is queued.</strong> A request is automatically created in the approval queue, and you receive notifications via Discord and Pushover with the details of what Scout wants to do.</li>
          <li><strong>You approve or deny.</strong> Run <code>trust-system.sh approve &lt;request-id&gt;</code> or <code>trust-system.sh deny &lt;request-id&gt;</code>. Scout waits and does not proceed until you respond.</li>
          <li><strong>Scout acts (or doesn't).</strong> If approved, Scout proceeds with the action. If denied, Scout stops and logs the denial.</li>
        </ol>

        <div class="callout success">
          <div class="callout-title">✅ Tested and Working</div>
          <p>This workflow was tested on February 12, 2026. Scout correctly requested approval before posting a message to Discord, the approval notification was delivered, Colin approved via CLI, and Scout posted only after receiving approval. The trust system is actively enforcing Scout's permissions.</p>
        </div>

        <h3>Agent-Specific Configuration</h3>

        <p>Scout has its own <code>SOUL.md</code> file with trust-specific instructions baked in, so even when spawned as a subagent, Scout knows to check trust before external actions. Scout's trust level and permissions are defined in <code>~/agents/ember/config/trust-levels.json</code> and enforced by the trust system engine.</p>

        <div class="callout note">
          <div class="callout-title">Trust System vs. Tool Policy</div>
          <p>Scout's approval workflow (described above) is separate from OpenClaw's built-in <a href="/architecture/execution-layer#tool-policy">tool policy</a>. OpenClaw's tool policy controls which tools Scout can <em>see</em> — for example, which tools appear in Scout's toolbox. The trust system then adds a second layer: even for tools Scout <em>can</em> access, restricted actions still require your approval at L2. Both layers work together — see <a href="/agents/trust-levels#trust-vs-tool-policy">How Trust Relates to OpenClaw Tool Policy</a> for the full explanation.</p>
        </div>

        <h2>How to Request Research</h2>

        <p>Requesting research from Scout is straightforward. You can assign a topic directly or route it through Ember. Here is the typical workflow:</p>

        <ol>
          <li><strong>Assign a topic.</strong> Tell Scout (or Ember) what you want researched. Be as specific as possible about what you are looking for and what format you want the output in.</li>
          <li><strong>Scout investigates.</strong> Scout gathers information, reads sources, and compiles findings. This typically happens overnight or during off-hours, but can also be triggered on demand.</li>
          <li><strong>A research brief appears in Notes.</strong> When Scout finishes, the brief is placed in your Notes graph under the relevant project or area. Ember will flag it in your next report.</li>
          <li><strong>You review and decide.</strong> Read through the brief, ask follow-up questions if needed, and decide on next steps. Scout does not act on findings without your approval.</li>
        </ol>

        <div class="callout tip">
          <div class="callout-title">Tip</div>
          <p>The more specific your research request, the better Scout's output will be. Instead of "research cloud providers," try "compare AWS, GCP, and Azure for hosting a small Node.js application with less than 1,000 daily users — focus on cost, ease of deployment, and free tier options." Specific constraints and criteria help Scout deliver a brief you can actually act on.</p>
        </div>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li><a href="/agents/ember">Learn about Ember</a> and how she coordinates with Scout</li>
            <li><a href="/agents/forge">Meet Forge</a>, the Infrastructure Specialist</li>
            <li><a href="/agents/trust-levels">Understand Trust Levels</a> and what Level 2 means in practice</li>
            <li><a href="/life-os">Learn about Notes</a> where Scout's research briefs are stored</li>
            <li><a href="/architecture/gateway">Gateway</a> — session routing and management</li>
            <li><a href="/architecture/lane-queue">Lane Queue</a> — how subagent lanes work</li>
            <li><a href="/architecture/agent-runner">Agent Runner</a> — the reasoning loop and model selection</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
