import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your First Day — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/getting-started">Getting Started</a>
          <span class="separator">/</span>
          Your First Day
        </div>

        <h1>Your First Day</h1>

        <p>Your first day with Agent Team OS is designed to be low-pressure. The system is already running, the agents are already working, and the daily cadence is already in motion. Your job on day one is simply to observe the rhythm, familiarize yourself with the key touchpoints, and start building the habit of checking in at the natural moments the system creates for you.</p>

        <p>Here is what a typical first day looks like, from morning to evening:</p>

        <ol class="steps">
          <li><strong>Check your morning report.</strong> It arrives at 6:00 AM via your configured notification channel (Pushover or email). The report summarizes overnight activity, your calendar for the day, top priorities, and anything the agents have flagged. Read through it over coffee — no action required yet.</li>
          <li><strong>Review what the agents have prepared overnight.</strong> While you slept, the agents may have researched topics you queued, organized notes, or completed maintenance tasks. Check the agent activity log in LogSeq to see what was done on your behalf.</li>
          <li><strong>Open LogSeq and check today's journal page.</strong> Your daily journal page is the central workspace for the day. It will already be populated with a template that includes sections for priorities, notes, and reflections. Spend a few minutes reading what is there and adding any thoughts.</li>
          <li><strong>Review your task priorities in Life OS.</strong> The Life OS structure organizes your work into projects and areas. Look at what has been surfaced as today's priorities and decide what you want to focus on. You can reorder or defer tasks as needed.</li>
          <li><strong>Send a message to Ember if you need anything adjusted.</strong> Ember is your coordination agent. If the priorities do not look right, if you want to add a research request for Scout, or if something feels off, tell Ember. Ember will route your request to the right place.</li>
          <li><strong>At 9:30 PM, review the evening check-in.</strong> The evening check-in arrives in the evening. It recaps what was accomplished, asks you to reflect on the day, and queues up any work for the agents to handle overnight. Take a few minutes to respond and then let the system take it from there.</li>
        </ol>

        <div class="callout tip">
          <div class="callout-title">Tip</div>
          <p>You do not need to learn everything at once. The system is designed to be explored gradually. Focus on the morning report and evening check-in for the first few days, and let the rest of the workflow reveal itself naturally as you settle in.</p>
        </div>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li><a href="/getting-started/setup-checklist">Verify your setup</a> with the Setup Checklist</li>
            <li><a href="/cadence/morning-report">Learn more about the Morning Report</a> and what it contains</li>
            <li><a href="/agents">Meet Your Agents</a> to understand who does what</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
