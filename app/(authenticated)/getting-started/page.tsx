import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quick Start — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          Getting Started
        </div>

        <h1>Quick Start</h1>

        <p>Agent Team OS is a personal productivity system that combines AI agents, structured note-taking, and automated workflows to help you stay organized and focused. The system runs on an EC2 instance in the cloud, syncs files to your local devices via Syncthing, and uses LogSeq as the central hub for notes, journals, and task management. Four AI agents — Ember, Scout, Forge, and Architect — work behind the scenes to prepare reports, research topics, maintain your infrastructure, and tackle complex planning tasks.</p>

        <p>Agent Team OS runs on <strong><a href="/architecture">OpenClaw</a></strong>, a daemon process that manages all agent communication, scheduling, and tool execution. OpenClaw is the runtime engine that makes everything work — it receives messages from Discord and other channels, routes them to the right agent, manages session state, and provides agents with the tools they need to take action on your behalf. You do not need to interact with OpenClaw directly, but understanding that it exists helps make sense of how messages flow through the system. See the <a href="/architecture">Architecture</a> section for a deeper look at how the pieces connect.</p>

        <p>If you are new here, the best way to get oriented is to understand the daily rhythm. Each morning, a report is delivered to you summarizing what happened overnight, what your priorities are for the day, and anything the agents have flagged for your attention. Throughout the day, you work in LogSeq using the Notes structure of journals, projects, and areas. In the evening, a check-in wraps up the day and queues work for the agents to handle while you sleep.</p>

        <p>You do not need to understand every piece of the system on day one. Start by reading through this Getting Started section, then explore the areas that are most relevant to you. The agents are already running and will continue to operate whether you are actively engaged or not — the goal is to meet the system where you are and let it support your workflow at whatever pace feels right.</p>

        <h2>What's Included</h2>

        <p>This Getting Started section covers three topics to help you hit the ground running:</p>

        <ul>
          <li><a href="/getting-started"><strong>Quick Start</strong></a> — You are here. A high-level overview of what Agent Team OS is and how the pieces fit together.</li>
          <li><a href="/getting-started/first-day"><strong>Your First Day</strong></a> — A step-by-step walkthrough of what a typical first day looks like, from your morning report through the evening check-in.</li>
          <li><a href="/getting-started/setup-checklist"><strong>Setup Checklist</strong></a> — A list of prerequisites and configuration steps to verify before you begin, so nothing is missed.</li>
        </ul>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li><a href="/getting-started/first-day">Walk through Your First Day</a> to see the system in action</li>
            <li><a href="/getting-started/setup-checklist">Review the Setup Checklist</a> to make sure everything is configured</li>
            <li><a href="/life-os">Learn about Notes</a> to understand the note-taking structure</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
