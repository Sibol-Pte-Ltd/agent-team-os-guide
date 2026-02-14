import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What is Notes — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          Notes &amp; Sync
        </div>

        <h1>What is Notes</h1>

        <p>Notes is the personal knowledge layer at the heart of Agent Team OS. It is an organizational framework built on top of <a href="/life-os/logseq-tips">LogSeq</a>, a local-first knowledge management tool, and it serves as the shared workspace for everything you want to track, plan, and act on. Tasks, notes, goals, projects, routines, reference material, and reflections all live inside Notes. It is where you think, and it is where your agents work.</p>

        <p>The agents in your team read from and write to Notes constantly. When Ember prepares your morning report, it pulls priorities and calendar events from Notes. When Scout completes a research task, it writes the results back into a Notes page. When you capture a quick thought in your daily journal, it becomes visible to the agents and can inform their next actions. Notes is the shared workspace that makes human-agent collaboration seamless — you and your agents are always looking at the same information.</p>

        <p>Because Notes is built on LogSeq, all of your data is stored as plain Markdown files on your local machine. There is no cloud database, no proprietary format, and no vendor lock-in. Your notes are just files in a folder. This local-first approach also means your data syncs across devices using <a href="/troubleshooting/syncthing">Syncthing</a>, which keeps your local LogSeq vault in sync with the EC2 instance where the agents run. The EC2 path is <code>~/notes/</code> and the Mac path is <code>~/AgentTeamOS/notes/</code>. The Syncthing folder ID is <code>notes</code>. Changes you make on your laptop appear on the server within seconds, and vice versa.</p>

        <div class="callout note">
          <div class="callout-title">How Agents Access Notes</div>
          <p>Agents access Notes files through the <a href="/architecture/execution-layer">Execution Layer's</a> file operation tools — <code>read</code>, <code>write</code>, and <code>edit</code>. These tools are sandboxed to the agent's workspace directory. This means agents can read your notes, create new pages, and update existing content, but they cannot access files outside of the workspace. Additionally, agents have <strong>semantic search</strong> via the <code>memory_search</code> tool, which uses <code>embeddinggemma-300m-qat-Q8_0</code> to search their memory files by meaning — not just keyword matching. Per-agent SQLite indexes are auto-reindexed every 6 hours via cron.</p>
        </div>

        <p>Notes is organized around a few key structural concepts that give shape to the information inside it:</p>

        <ul>
          <li><strong>Journal pages.</strong> Every day gets its own journal page automatically. This is your daily log — the place where you capture thoughts, track what you worked on, note what happened, and reflect on the day. Journal pages are the most frequently used part of Notes and form the backbone of the <a href="/life-os/daily-workflow">daily workflow</a>.</li>
          <li><strong>Project pages.</strong> Each active project gets its own dedicated page. A project is anything with a defined outcome and a rough timeline — launching a side project, planning a trip, completing a course. Project pages collect all tasks, notes, and reference material related to that project in one place.</li>
          <li><strong>Area pages.</strong> Areas are the ongoing domains of responsibility in your life that do not have an end date. Examples include health, finance, career, relationships, home, and personal development. Area pages hold the recurring tasks, standards, and reference material that keep each area running smoothly over time.</li>
          <li><strong>Templates.</strong> Templates are pre-built page structures that you can insert with a single command. They ensure consistency across your journal entries, project kickoffs, weekly reviews, and other recurring formats. See the <a href="/life-os/templates">Templates</a> page for the full list.</li>
        </ul>

        <div class="callout note">
          <div class="callout-title">Note</div>
          <p>You do not need to build out the entire Notes structure before you start using the system. Begin with the daily journal and let the structure grow organically. The agents will help you create project and area pages as they become relevant to your work.</p>
        </div>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li><a href="/life-os/daily-workflow">Learn the Daily Workflow</a> to see how Notes fits into your day</li>
            <li><a href="/life-os/templates">Browse the Templates</a> available for common page types</li>
            <li><a href="/life-os/logseq-tips">Read LogSeq Tips</a> if you are new to LogSeq</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
