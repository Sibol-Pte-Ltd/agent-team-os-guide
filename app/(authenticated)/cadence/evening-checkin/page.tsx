import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Evening Check-in — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a> / <a href="/cadence">Cadence</a> / Evening Check-in
        </div>

        <h1>Evening Check-in</h1>

        <p>At 9:30 PM each day, Ember delivers your evening check-in via Discord and a Pushover notification. Where the morning report opens your day with a forward-looking briefing, the evening check-in closes it with a backward-looking summary. It's your daily bookend — a chance to take stock of what happened, acknowledge progress, and set the stage for tomorrow.</p>

        <h2>What the Evening Check-in Includes</h2>

        <p>The evening check-in is organized into three sections:</p>

        <h3>Completed Today</h3>
        <p>Everything you checked off, finished, or resolved during the day. Ember pulls this from your Life OS daily page, task completions, and any agent activity that wrapped up. Seeing what you accomplished is more than satisfying — it helps Ember calibrate how much to load onto tomorrow's priorities.</p>

        <h3>Still Pending</h3>
        <p>Tasks and priorities from this morning's report that didn't get completed. This isn't a guilt trip — it's information. Some things naturally carry over, and that's fine. Ember will automatically move these to tomorrow's priorities unless you tell it otherwise.</p>

        <h3>Attention Tomorrow</h3>
        <p>Items that Ember is flagging for tomorrow based on the day's activity. Maybe a deadline is approaching, a follow-up is needed from a meeting, or a task that was blocked is now unblocked. This section gives you a head start on tomorrow's morning report.</p>

        <h2>Sample Evening Check-in</h2>

<pre><code>Good evening, Colin. Here's your check-in for Monday, February 10.

COMPLETED TODAY
- Finalized Q1 roadmap draft and shared with team
- Reviewed Scout's backup solutions research
  (selected Option B — noted in Projects/Infrastructure)
- Team standup attended
- 1:1 with Sarah completed

STILL PENDING
- Submit expense report (was flagged this morning —
  still not found in documents)

ATTENTION TOMORROW
- Expense report is now overdue. Prioritizing as #1
  for tomorrow morning.
- Sarah requested a follow-up doc from your 1:1.
  Adding to tomorrow's priorities.
- Forge's notification script refactor is ready for
  your review whenever you have time.</code></pre>

        <h2>Your Role in the Evening Check-in</h2>

        <p>The evening check-in is not just a report you passively receive. It's your moment to interact with the system before the day ends. Here's what you can do:</p>

        <ul>
          <li><strong>Flag adjustments.</strong> If Ember carried over something you've decided to drop, let it know. Reply or message Ember to remove it from tomorrow's priorities.</li>
          <li><strong>Add notes for tomorrow.</strong> If something came up late in the day that you want to remember, tell Ember to add it to tomorrow's briefing.</li>
          <li><strong>Acknowledge completed work.</strong> If you finished something after the check-in was generated, let Ember know so the records stay accurate.</li>
          <li><strong>Reprioritize.</strong> If tomorrow's "attention" items don't match your actual priorities, now is the time to reorder them.</li>
        </ul>

        <div class="callout tip">
          <strong>Tip:</strong> Use the evening check-in as a natural stopping point for your workday. Once you've reviewed it and made any adjustments, you're done. The system is set up for tomorrow, your agents know what to expect, and you can step away with confidence that nothing will be lost overnight.
        </div>

        <h2>The Daily Loop</h2>

        <p>Together, the morning report and evening check-in form a complete daily loop:</p>

        <ol>
          <li><strong>6:00 AM</strong> — Morning report arrives. You review priorities and plan your day.</li>
          <li><strong>Throughout the day</strong> — You work, agents assist, tasks get completed or deferred.</li>
          <li><strong>9:30 PM</strong> — Evening check-in arrives. You review, adjust, and close out the day.</li>
          <li><strong>Overnight</strong> — Agents continue background work. The cycle resets.</li>
        </ol>

        <p>This loop ensures that every day has a clear start and a clear end, with nothing falling through the cracks in between.</p>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li>Revisit the <a href="/cadence/morning-report">Morning Report</a> to see the other half of the daily loop.</li>
            <li>Learn how daily check-ins feed into the <a href="/cadence/weekly-review">Weekly Review</a>.</li>
            <li>See how the evening check-in integrates with your <a href="/life-os/daily-workflow">Daily Workflow</a> in Life OS.</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
