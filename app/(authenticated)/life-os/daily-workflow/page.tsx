import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daily Workflow — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/life-os">Life OS</a>
          <span class="separator">/</span>
          Daily Workflow
        </div>

        <h1>Daily Workflow</h1>

        <p>Agent Team OS is built around a daily rhythm that keeps you oriented without demanding constant attention. The system creates natural touchpoints at the beginning and end of each day, with the middle left open for you to do your actual work. The agents handle the organizational overhead in the background so you can focus on what matters.</p>

        <h3>Morning</h3>

        <p>Your day begins with the <a href="/cadence/morning-report">morning report</a>, which Ember pushes to your notification channel at 6:00 AM. This is triggered by an <strong>OpenClaw cron job</strong> — not a system cron — which means it is managed through OpenClaw's scheduling system and runs within the agent execution environment. When the cron fires, the Agent Runner assembles the workspace context (loading Life OS files, calendar data, and any queued tasks) and hands it to Ember, who generates the report. The report includes your calendar for the day, your top priorities, any overnight agent activity, and anything that has been flagged for your attention. You do not need to act on the report immediately — just read through it to get oriented.</p>

        <p>After reviewing the morning report, open Logseq and navigate to today's journal page. The page is automatically pre-created each day at 00:01 UTC by an auto-journal cron job (<code>~/agents/ember/scripts/create-daily-journal.sh</code>), and the Daily Journal template is automatically applied via <code>config.edn</code>, so the page is always ready with sections for your priorities, notes, and reflections. Spend a few minutes reviewing the priorities that have been surfaced and adjust them if needed. If you want to add tasks, capture quick thoughts, or queue up a research request for Scout, this is the time to do it. The agents will pick up anything you add to Life OS and begin working on it.</p>

        <h3>Midday</h3>

        <p>The middle of the day is yours. Work on your tasks, attend your meetings, and go about your business. The agents continue working in the background — Scout may be researching a topic you queued, Ember may be organizing incoming information, and Forge may be running maintenance tasks on the infrastructure. You do not need to check in with them during this time unless you want to.</p>

        <p>If something comes up during the day that you want to capture, drop it into your Logseq journal page. A quick bullet point is enough. The agents monitor Life OS for new entries and will incorporate anything you add into their ongoing work. You can also message Ember directly if you need something handled urgently or want to reprioritize.</p>

        <div class="callout note">
          <div class="callout-title">When Do Agents See My Changes?</div>
          <p>Each time an agent runs — whether triggered by a cron job, a direct message, or a heartbeat — the Agent Runner assembles workspace context from the current state of Life OS files on disk. This means any changes you make to Life OS are immediately visible to agents on their next run. There is no cache to invalidate or refresh button to press. As long as <a href="/troubleshooting/syncthing">Syncthing</a> has delivered your changes to the EC2 instance, agents will see them.</p>
        </div>

        <h3>Evening</h3>

        <p>At 9:30 PM, the <a href="/cadence/evening-checkin">evening check-in</a> arrives via your notification channel. Like the morning report, this is an OpenClaw cron job — the Agent Runner spins up a fresh execution context, loads the current state of Life OS, and Ember generates a brief summary of what was accomplished during the day, both by you and by the agents. It also prompts you to reflect on the day: what went well, what did not, and what should carry forward to tomorrow.</p>

        <p>Take a few minutes to respond to the evening check-in. Flag any tasks that need to roll over, note anything the agents should work on overnight, and add a brief reflection to your journal page. This closing ritual signals to the system that the day is wrapping up, and the agents will use your input to plan overnight work and prepare tomorrow's morning report.</p>

        <div class="callout tip">
          <div class="callout-title">Tip</div>
          <p>Even on busy days when you cannot follow the full workflow, try to write at least one or two lines in your journal page. A brief note about what you worked on or how you are feeling is enough to maintain the habit and give the agents useful context. Consistency matters more than completeness — a short entry every day is far more valuable than a detailed entry once a week.</p>
        </div>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li><a href="/cadence/morning-report">Learn what the Morning Report contains</a> and how to use it</li>
            <li><a href="/cadence/evening-checkin">Understand the Evening Check-in</a> and how to respond</li>
            <li><a href="/life-os/templates">Explore Templates</a> to see the daily journal format and other structures</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
