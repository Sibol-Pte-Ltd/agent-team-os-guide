import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cadence Overview — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a> / Cadence
        </div>

        <h1>Cadence Overview</h1>

        <p>Cadence is the rhythmic schedule of check-ins, reviews, and maintenance that keeps your entire Agent Team OS running smoothly. Think of it as the heartbeat of your system — a steady pulse of information flowing between you and your agents at predictable intervals.</p>

        <p>Without cadence, things drift. Tasks pile up unreviewed, priorities go stale, and the gap between what your agents know and what you actually need widens. Cadence closes that gap by building regular touchpoints into your day, week, and month.</p>

        <h2>The Four Rhythms</h2>

        <p>Agent Team OS operates on four distinct rhythms, each serving a different purpose:</p>

        <table>
          <thead>
            <tr>
              <th>Rhythm</th>
              <th>When</th>
              <th>What Happens</th>
              <th>Who's Involved</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Daily &mdash; Morning</strong></td>
              <td>6:00 AM every day</td>
              <td>Morning report delivered with today's priorities, calendar overview, overnight activity summary, and any flags that need your attention.</td>
              <td>Ember generates, you review</td>
            </tr>
            <tr>
              <td><strong>Daily &mdash; Evening</strong></td>
              <td>9:30 PM every day</td>
              <td>Evening check-in summarizing what was completed, what's still pending, and what needs attention tomorrow.</td>
              <td>Ember generates, you review and adjust</td>
            </tr>
            <tr>
              <td><strong>Weekly</strong></td>
              <td>Sunday</td>
              <td>Weekly review covering tasks completed, tasks carried over, project progress, notable events, and a preview of the upcoming week.</td>
              <td>Ember compiles, you reflect and set intentions</td>
            </tr>
            <tr>
              <td><strong>Monthly</strong></td>
              <td>1st of each month</td>
              <td>Deep dive into monthly goals, habit tracking, project status across all areas, and planning for the month ahead.</td>
              <td>Ember prepares, you drive the reflection</td>
            </tr>
          </tbody>
        </table>

        <h2>Ad-hoc Tasks</h2>

        <p>Beyond the scheduled rhythms, you can trigger on-demand research and tasks at any time. Ask Scout to investigate something, have Forge build a tool, or direct Ember to reorganize your priorities. These ad-hoc interactions happen outside the regular cadence but are informed by it — your agents always have the context from the latest check-ins to work from.</p>

        <h2>How Cadence Builds Over Time</h2>

        <p>Your cadence is not set in stone. It adapts over time based on what actually works for you. In the first week, the morning report might feel like too much information. By week three, you might want more detail. The weekly review might shift from Sunday to Saturday. The monthly review might grow to include areas you hadn't considered at first.</p>

        <div class="callout note">
          <strong>Note:</strong> Cadence is meant to serve you, not the other way around. If a particular rhythm isn't working — if you're consistently ignoring the evening check-in or the weekly review feels redundant — that's a signal to adjust it. Talk to Ember about changing the timing, content, or format of any cadence element.
        </div>

        <h2>The Flow of Information</h2>

        <p>Each rhythm feeds into the next. The morning report sets up your day. The evening check-in closes it out. Those daily snapshots feed into the weekly review. The weekly reviews accumulate into the monthly deep dive. This layered structure means nothing falls through the cracks — every task, every priority, every flag gets surfaced at the right level of detail at the right time.</p>

        <div class="callout note">
          <strong>Under the Hood:</strong> Each cadence rhythm is powered by the same architectural pipeline. The <a href="/architecture/gateway">Gateway's</a> cron scheduler triggers each run in the cron lane at the configured time. The <a href="/architecture/agent-runner">Agent Runner</a> assembles context from your workspace files — daily pages, task lists, project notes — and the <a href="/architecture/execution-layer">Execution Layer</a> executes any tool calls needed (calendar lookups, file reads, external data pulls). The finished output is delivered through <a href="/architecture/channel-adapters">Channel Adapters</a> to Discord, Pushover, or whatever channels you've configured. This pipeline is the same whether it's a quick morning report or a comprehensive monthly review — only the scope and depth of context change.
        </div>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li>Read about the <a href="/cadence/morning-report">Morning Report</a> to understand your daily starting point.</li>
            <li>Learn how the <a href="/cadence/evening-checkin">Evening Check-in</a> closes out each day.</li>
            <li>Explore the <a href="/cadence/weekly-review">Weekly Review</a> and <a href="/cadence/monthly-review">Monthly Review</a> for your longer-term rhythms.</li>
            <li>See how cadence connects to your <a href="/life-os/daily-workflow">Daily Workflow</a> in Notes.</li>
            <li>Dive into the <a href="/architecture">Architecture Overview</a> to understand the components that power every cadence run.</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
