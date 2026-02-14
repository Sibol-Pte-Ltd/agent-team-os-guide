import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Architect — Strategic Analysis — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/agents">Agents</a>
          <span class="separator">/</span>
          Architect
        </div>

        <h1>Architect — Strategic Analysis</h1>

        <p>Architect is the deep thinker of the agent team. While Ember coordinates, Scout researches, and Forge maintains infrastructure, Architect is reserved for work that demands nuanced judgment, complex synthesis, and high-quality output. He is the scalpel, not the hammer — deployed when the stakes justify the cost of Opus-level reasoning.</p>

        <div class="callout note">
          <div class="callout-title">Status</div>
          <p><strong>Trust Level:</strong> L2 — Act with Approval<br>
          <strong>Model:</strong> openrouter/anthropic/claude-opus-4.6<br>
          <strong>Workspace:</strong> /home/ubuntu/agents/architect</p>
        </div>

        <h2>What Architect Does</h2>

        <p>Architect exists for cognitive depth. Most tasks in your system can be handled by faster, lighter agents — and they should be. Architect is called in when a task requires holding multiple variables in tension, evaluating complex trade-offs, and producing recommendations that hold up under scrutiny. Every token Architect uses costs more than the other agents, so every paragraph must advance understanding.</p>

        <p>His operating method follows a clear sequence: understand the full context, break down complexity into patterns and dependencies, synthesize disparate inputs into coherent frameworks, and lead with clear, actionable conclusions supported by evidence. When certainty is limited, Architect distinguishes what he knows from what he is inferring — he flags uncertainty rather than hiding it.</p>

        <h2>How Architect Runs</h2>

        <p>Architect's execution model is unique among the agents — he is primarily <strong>spawned as a subagent by Ember</strong> rather than running as a standalone conversational agent.</p>

        <h3>Spawned by Ember</h3>

        <p>When Ember identifies a task that warrants Opus-level reasoning — complex analysis, strategic planning, comprehensive reviews — she spawns Architect as a <strong>subagent</strong>. This creates an independent session in the <a href="/architecture/lane-queue">subagent lane</a>, with its own concurrency budget separate from Ember's main conversation. Architect receives a focused task description, works through it independently, and reports results back to Ember when finished.</p>

        <p>This means you typically interact with Architect <strong>indirectly through Ember</strong>. You tell Ember what you need analyzed, Ember spawns Architect, and the results flow back to your conversation. You can also message Architect directly if needed — the <a href="/architecture/gateway">Gateway</a> will create a standard session for the conversation.</p>

        <h3>Model</h3>

        <p>Architect uses <strong>Claude Opus</strong> (<code>openrouter/anthropic/claude-opus-4.6</code>), the most powerful reasoning model in the team. This is a deliberate choice: Architect is reserved for tasks where depth and quality justify higher cost. Every token Architect processes costs significantly more than Ember's Kimi K2.5 or Scout's auto-routed model, which is why Architect is deployed selectively rather than used for routine work. The model is configured in the OpenClaw configuration file and invoked by the <a href="/architecture/agent-runner">Agent Runner</a>.</p>

        <h3>Sessions and Isolation</h3>

        <p>Whether spawned as a subagent or messaged directly, Architect gets a fully isolated session. As a subagent, his session key follows the pattern <code>agent:subagent:subagent:&lt;uuid&gt;</code> and runs in the subagent lane. As a direct conversation, his session key follows the standard pattern (e.g., <code>agent:architect:discord:dm:987654321</code>) and runs in the main lane. In both cases, Architect does not share conversation history with other agents — he works with only the context provided to his session.</p>

        <h2>When to Call Architect</h2>

        <p>Architect is not for routine work. He is deployed specifically when the quality and depth of reasoning justify the cost. Call Architect when you need:</p>

        <ul>
          <li><strong>Comprehensive reviews and audits</strong> — Deep evaluation of systems, processes, or documents where missing something carries real consequences.</li>
          <li><strong>Implementation planning with complex trade-offs</strong> — When a project involves competing priorities, dependencies, and constraints that need to be weighed carefully before committing to a direction.</li>
          <li><strong>System architecture design</strong> — Designing or restructuring technical systems where the decisions are hard to reverse and the interaction effects are non-obvious.</li>
          <li><strong>Research synthesis requiring deep reasoning</strong> — When Scout has gathered raw information and you need it transformed into a coherent analysis with layered conclusions.</li>
          <li><strong>Tasks where errors are expensive</strong> — Any situation where getting it wrong means significant rework, wasted resources, or cascading problems downstream.</li>
        </ul>

        <div class="callout tip">
          <div class="callout-title">Tip</div>
          <p>A good rule of thumb: if the task can be described in a single sentence and has a straightforward answer, it probably does not need Architect. If you find yourself thinking "I need someone to really think this through," that is when Architect earns his keep.</p>
        </div>

        <h2>Key Capabilities</h2>

        <ul>
          <li><strong>Layered analysis</strong> — Breaks complex problems into component parts, evaluates each layer, and maps how they interact.</li>
          <li><strong>Trade-off evaluation</strong> — Holds multiple competing options in tension and evaluates them against explicit criteria rather than defaulting to the first viable solution.</li>
          <li><strong>Framework synthesis</strong> — Connects disparate inputs — research, requirements, constraints, preferences — into coherent decision frameworks.</li>
          <li><strong>Rigorous without verbose</strong> — Produces depth without padding. Every section advances understanding; nothing is filler.</li>
          <li><strong>Uncertainty flagging</strong> — Clearly separates conclusions backed by evidence from educated guesses, so you know where the solid ground is.</li>
          <li><strong>Edge case identification</strong> — Actively looks for the scenarios that break assumptions, the dependencies that are easy to miss, and the second-order effects that surface later.</li>
        </ul>

        <h2>Example Outputs</h2>

        <p>Here is what Architect typically produces:</p>

        <ul>
          <li><strong>Architecture decision records</strong> — Structured documents evaluating options for a technical decision, with clear recommendations and reasoning.</li>
          <li><strong>Implementation plans</strong> — Step-by-step plans for complex projects, including dependencies, risk factors, and rollback strategies.</li>
          <li><strong>Comprehensive audits</strong> — Thorough reviews of existing systems, configurations, or processes, identifying gaps, risks, and improvements.</li>
          <li><strong>Research synthesis documents</strong> — Analyses that take raw research (often from Scout) and produce layered conclusions with actionable recommendations.</li>
          <li><strong>Strategic recommendations</strong> — Position papers on significant decisions, weighing options against stated goals and constraints.</li>
        </ul>

        <h2>Trust Level</h2>

        <p>Architect operates at <strong>Trust Level 2 — Act with Approval</strong>. This means Architect can research, analyze, and prepare outputs independently — reading files, searching the web, running read-only commands, and writing within his own workspace all happen without needing your permission. However, Architect requires your explicit approval before taking any external action.</p>

        <p>Specifically, Architect needs approval before:</p>

        <ul>
          <li>Sending messages to Discord, email, or any external channel</li>
          <li>Modifying files outside his own workspace</li>
          <li>Making system configuration changes</li>
          <li>Any financial or public-facing action</li>
        </ul>

        <p>This trust level is a deliberate choice. Architect's value is in his analysis and recommendations — the thinking, not the doing. He produces the plan; you decide whether to execute it. This keeps the most powerful reasoning agent firmly under your oversight while still giving him the freedom to do deep, independent work.</p>

        <div class="callout success">
          <div class="callout-title">Trust Level Active</div>
          <p>Architect's L2 trust level is <strong>active and enforcing</strong>. All external actions are checked against the trust system. Architect's <code>SOUL.md</code> includes trust-specific instructions, so even when spawned as a subagent, he knows to check trust before acting externally.</p>
        </div>

        <div class="callout note">
          <div class="callout-title">Trust System vs. Tool Policy</div>
          <p>Architect's trust-level enforcement is separate from OpenClaw's <a href="/architecture/execution-layer#tool-policy">tool policy system</a>. OpenClaw's tool policy determines which tools Architect can <em>see</em> (e.g., which tools appear in his toolbox based on allowlists and security modes). The trust system adds a behavioral layer on top: even for tools Architect has access to, restricted actions require your approval at L2. These are complementary — one controls availability, the other controls approval workflows. See <a href="/agents/trust-levels#trust-vs-tool-policy">How Trust Relates to OpenClaw Tool Policy</a> for details.</p>
        </div>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li><a href="/agents/ember">Learn about Ember</a>, who coordinates Architect's deployment and spawns him as a subagent</li>
            <li><a href="/agents/scout">Meet Scout</a>, whose research often feeds into Architect's analysis</li>
            <li><a href="/agents/forge">Meet Forge</a>, the Infrastructure Specialist</li>
            <li><a href="/agents/trust-levels">Understand Trust Levels</a> and what Level 2 means in practice</li>
            <li><a href="/architecture/lane-queue">Lane Queue</a> — subagent lane where Architect typically runs</li>
            <li><a href="/architecture/agent-runner">Agent Runner</a> — the reasoning loop and model selection</li>
            <li><a href="/architecture/gateway">Gateway</a> — session routing and management</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
