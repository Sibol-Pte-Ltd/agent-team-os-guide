import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meet Your Agents — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          Agents
        </div>

        <h1>Meet Your Agents</h1>

        <p>Agent Team OS is built around a team of four AI agents, each with a distinct role and area of responsibility. They work together behind the scenes to keep your life organized, your information current, and your infrastructure running smoothly. You are the decision-maker; the agents handle the execution.</p>

        <p>Each agent operates within a <a href="/agents/trust-levels">trust level</a> that defines how much autonomy it has. Some agents can act independently on routine tasks, while others require your approval before making changes. This system ensures that you stay in control while benefiting from the agents' ability to work around the clock.</p>

        <p>Here is your team:</p>

        <div class="agent-card">
          <h3><a href="/agents/ember">Ember</a> — Chief of Staff</h3>
          <div class="agent-meta">
            <span><strong>Role:</strong> Daily Operations</span>
            <span><strong>Trust Level:</strong> 3</span>
            <span><strong>Focus:</strong> Coordination &amp; Prioritization</span>
          </div>
          <p>Ember is your day-to-day coordinator. She manages the daily cadence, creates your morning reports and evening check-ins, tracks task priorities, and serves as the central point of communication between you and the other agents. If you need something adjusted, Ember is your first point of contact.</p>
        </div>

        <div class="agent-card">
          <h3><a href="/agents/scout">Scout</a> — Research Specialist</h3>
          <div class="agent-meta">
            <span><strong>Role:</strong> Information Gathering</span>
            <span><strong>Trust Level:</strong> 2</span>
            <span><strong>Focus:</strong> Research &amp; Summarization</span>
          </div>
          <p>Scout handles deep research and information gathering. When you need to investigate a topic, evaluate options, or monitor sources for updates, Scout does the legwork. Findings are summarized and placed in Life OS so you can review them at your convenience.</p>
        </div>

        <div class="agent-card">
          <h3><a href="/agents/forge">Forge</a> — Infrastructure Specialist</h3>
          <div class="agent-meta">
            <span><strong>Role:</strong> System Maintenance</span>
            <span><strong>Trust Level:</strong> 3</span>
            <span><strong>Focus:</strong> Reliability &amp; Automation</span>
          </div>
          <p>Forge keeps the system running. He manages Syncthing synchronization, maintains cron jobs and backups, monitors system health, and handles the EC2 instance that powers your agent team. Forge works mostly in the background — you will rarely interact with him directly unless something needs your attention.</p>
        </div>

        <div class="agent-card">
          <h3><a href="/agents/architect">Architect</a> — Strategic Planner</h3>
          <div class="agent-meta">
            <span><strong>Role:</strong> Deep Synthesis &amp; Analysis</span>
            <span><strong>Trust Level:</strong> 2</span>
            <span><strong>Focus:</strong> Strategic Planning &amp; Complex Problem-Solving</span>
          </div>
          <p>Architect handles high-stakes work that requires deep reasoning — strategic planning, complex analysis, and synthesis across multiple domains. Deployed selectively for tasks where quality justifies the cost, Architect brings Opus-level thinking to problems that benefit from careful, thorough consideration.</p>
        </div>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li><a href="/agents/ember">Learn about Ember</a> and how she manages your daily flow</li>
            <li><a href="/agents/scout">Learn about Scout</a> and how to assign research tasks</li>
            <li><a href="/agents/forge">Learn about Forge</a> and how infrastructure is maintained</li>
            <li><a href="/agents/architect">Learn about Architect</a> and how strategic planning works</li>
            <li><a href="/agents/trust-levels">Understand Trust Levels</a> and how agent autonomy works</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
