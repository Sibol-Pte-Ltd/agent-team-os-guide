import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Weekly Review — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a> / <a href="/cadence">Cadence</a> / Weekly Review
        </div>

        <h1>Weekly Review</h1>

        <p>Every Sunday, Ember automatically compiles a summary of your week. The weekly review zooms out from the daily rhythm to give you a broader perspective — what you accomplished, what's still in motion, and what the upcoming week holds. This is your chance to step back, reflect, and recalibrate.</p>

        <p>The compilation happens automatically, but the review itself is a human activity. Plan to spend <strong>15-20 minutes</strong> reading through the summary, adjusting your priorities, and setting intentions for the week ahead.</p>

        <h2>What the Weekly Review Covers</h2>

        <h3>Tasks Completed</h3>
        <p>A full list of everything you checked off during the week, drawn from your daily check-ins and Life OS records. This gives you a clear picture of your output and helps you recognize patterns — are you consistently completing certain types of tasks while others linger?</p>

        <h3>Tasks Carried Over</h3>
        <p>Items that appeared in daily priorities but were never completed. Ember tracks how many times a task has been carried over. If something has been deferred three or more times, it gets a special flag — it might need to be broken down, delegated, or dropped entirely.</p>

        <h3>Projects Progressed</h3>
        <p>A summary of movement across your active projects. Even if individual tasks were small, seeing them rolled up at the project level reveals whether you're making meaningful progress or just treading water.</p>

        <h3>Notable Events</h3>
        <p>Highlights from the week that don't fit neatly into tasks or projects. A significant meeting, a decision that was made, something you learned, an unexpected problem that arose. Ember pulls these from your daily logs and flags.</p>

        <h3>Upcoming Week Preview</h3>
        <p>A look ahead at what's already scheduled or known for next week — deadlines, meetings, milestones, and any tasks that Ember is pre-loading into your priorities.</p>

        <h2>The Review Process</h2>

        <ol class="steps">
          <li><strong>Read the summary.</strong> Start by reading Ember's compiled review from top to bottom without making changes. Get the full picture first.</li>
          <li><strong>Acknowledge completions.</strong> Take a moment to recognize what you accomplished. This isn't fluff — it builds an accurate mental model of your capacity and momentum.</li>
          <li><strong>Address carried-over tasks.</strong> For each carried-over item, make a decision: commit to it next week, break it into smaller pieces, delegate it to an agent, or drop it. Don't let tasks linger indefinitely.</li>
          <li><strong>Review project progress.</strong> Are your projects moving at the pace you expected? If not, identify what's blocking them and decide whether to adjust scope, timeline, or resources.</li>
          <li><strong>Set weekly intentions.</strong> Based on everything you've reviewed, write 3-5 intentions for the coming week. These are higher-level than daily priorities — think themes and goals, not individual tasks.</li>
          <li><strong>Communicate adjustments to Ember.</strong> If you've changed priorities, dropped tasks, or set new intentions, let Ember know so the daily reports for the coming week reflect your decisions.</li>
        </ol>

        <div class="callout note">
          <strong>Note:</strong> The weekly review uses a dedicated template in Life OS. You can find it in your templates collection — see <a href="/life-os/templates">Templates</a> for details. The template provides a structured format for your reflections and intentions, making it easy to stay consistent week over week.
        </div>

        <h2>Making the Weekly Review Work for You</h2>

        <p>The weekly review is the single most important cadence element for staying on track long-term. Daily check-ins keep you oriented, but the weekly review is where real course corrections happen. Here are some tips:</p>

        <ul>
          <li><strong>Pick a consistent time.</strong> Sunday morning with coffee works for many people, but find what fits your rhythm. The key is consistency.</li>
          <li><strong>Don't rush it.</strong> 15-20 minutes is the target, but if a particular week demands more reflection, take the time. Skimming defeats the purpose.</li>
          <li><strong>Be honest about carry-overs.</strong> If something has been on the list for three weeks and you haven't done it, ask yourself whether it's truly important or just occupying mental space.</li>
          <li><strong>Use intentions, not mandates.</strong> Weekly intentions should feel like direction, not obligation. "Focus on the infrastructure project" is better than "Complete 14 infrastructure tasks."</li>
        </ul>

        <div class="callout note">
          <strong>Under the Hood:</strong> The Gateway's <a href="/architecture/gateway">cron scheduler</a> triggers the weekly review compilation in the cron lane every Sunday. The <a href="/architecture/agent-runner">Agent Runner</a> assembles context from your workspace — all seven daily pages, task lists, project notes, and agent activity logs. For reviews compiling large amounts of data, the Agent Runner may use summarization to fit within <a href="/architecture/agent-runner">context limits</a> — focusing on highlights rather than exhaustive detail. The <a href="/architecture/execution-layer">Execution Layer</a> handles any tool calls needed to pull calendar events or external data.
        </div>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li>Explore the <a href="/cadence/monthly-review">Monthly Review</a> to see how weekly reviews feed into the bigger picture.</li>
            <li>Check out the <a href="/life-os/templates">Templates</a> page to find the weekly review template in Life OS.</li>
            <li>Revisit the <a href="/cadence">Cadence Overview</a> to see how weekly fits into the full rhythm.</li>
            <li>Learn how the <a href="/architecture/agent-runner">Agent Runner</a> manages conversation history and context windows.</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
