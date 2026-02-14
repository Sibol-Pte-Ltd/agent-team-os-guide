import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LogSeq Tips — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/life-os">Notes &amp; Sync</a>
          <span class="separator">/</span>
          LogSeq Tips
        </div>

        <h1>LogSeq Tips</h1>

        <p>LogSeq is the note-taking application that powers Notes. If you are new to LogSeq, this page covers the essential concepts and shortcuts you need to use Notes effectively. This is not a comprehensive LogSeq tutorial — it focuses on the features that matter most for your daily interaction with Agent Team OS.</p>

        <h3>Block-Based Editing</h3>

        <p>Everything in LogSeq is a block. A block is a single bullet point, and each block can contain text, links, tags, and other content. Blocks can be nested underneath other blocks using the Tab key, creating an outline structure. Press Enter to create a new block, Tab to indent it beneath the previous block, and Shift+Tab to outdent it. This block-based approach means you never need to worry about formatting paragraphs or managing document structure — just write in blocks and nest them as needed.</p>

        <h3>Page Links and Tags</h3>

        <p>One of LogSeq's most powerful features is the ability to link between pages. To create a link to another page, wrap the page name in double square brackets: <code>[[Project Name]]</code>. If the page does not exist yet, LogSeq will create it when you click the link. This makes it effortless to build a web of connected notes over time. You can also use tags by prefixing a word with the hash symbol: <code>#health</code> or <code>#urgent</code>. Tags function similarly to page links — clicking a tag takes you to a page for that tag where you can see every block that references it.</p>

        <p>In Notes, page links are how you connect daily journal entries to project pages, area pages, and other reference material. When you mention <code>[[My Side Project]]</code> in your journal, that entry automatically appears in the "Linked References" section at the bottom of the My Side Project page. The agents also use page links extensively when writing content into Notes.</p>

        <h3>The Slash Command Menu</h3>

        <p>Typing <code>/</code> in any block opens the command menu, which gives you quick access to a wide range of actions. The most commonly used commands for Notes include:</p>

        <ul>
          <li><code>/template</code> — Insert a <a href="/life-os/templates">template</a> at the current block</li>
          <li><code>/today</code> — Insert a link to today's journal page</li>
          <li><code>/tomorrow</code> — Insert a link to tomorrow's journal page</li>
          <li><code>/TODO</code> — Create a task block with a checkbox</li>
          <li><code>/deadline</code> — Add a deadline date to a task</li>
          <li><code>/scheduled</code> — Add a scheduled date to a task</li>
        </ul>

        <p>You do not need to memorize the full list. Just type <code>/</code> and start typing what you are looking for — the menu filters as you type.</p>

        <h3>Daily Journal Pages</h3>

        <p>LogSeq automatically creates a new journal page for each day. When you open LogSeq, it lands on today's journal page by default. You can navigate to past journal pages by clicking dates in the left sidebar or by using the date picker. Journal pages are named by date (for example, "Feb 10, 2026") and serve as the daily entry point for all of your notes and tasks. In Notes, the <a href="/life-os/templates">Daily Journal template</a> is automatically applied to new journal pages to give them a consistent structure.</p>

        <h3>Favorites and the Sidebar</h3>

        <p>The left sidebar in LogSeq shows your favorites — pages you have pinned for quick access. To add a page to your favorites, navigate to the page and click the star icon in the top-right corner. For Notes, it is helpful to pin your most active project pages, key area pages, and any other pages you visit frequently. The sidebar also shows your recent pages, making it easy to jump back to something you were working on earlier.</p>

        <h3>Search with Cmd+K</h3>

        <p>Press <code>Cmd+K</code> (or <code>Ctrl+K</code> on Linux) to open the search bar. You can search for page names, block content, or tags. Search is the fastest way to find anything in your Notes vault. If you cannot remember where you wrote something, search for a keyword and LogSeq will show you every block and page that matches. The agents also rely on this search capability when they need to find information across your vault.</p>

        <h3>Block References</h3>

        <p>Any block in LogSeq can be referenced from another page. Right-click a block and select "Copy block ref" to get a reference to that block. When you paste it elsewhere, it appears as a live link to the original block — and if the original block is updated, the reference updates too. Block references are useful when you want to surface a specific task or note on multiple pages without duplicating it. For example, you might reference a key task from a project page in your daily journal to keep it visible.</p>

        <div class="callout note">
          <div class="callout-title">Note</div>
          <p>This page covers only the LogSeq basics needed for Notes. LogSeq has many more features including queries, properties, namespaces, and plugins. For a deeper dive, visit the <a href="https://docs.logseq.com" target="_blank" rel="noopener">official LogSeq documentation</a>, which covers the full feature set in detail.</p>
        </div>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li><a href="/life-os">Review what Notes is</a> and how it uses LogSeq as its foundation</li>
            <li><a href="/life-os/daily-workflow">Walk through the Daily Workflow</a> to see LogSeq in action</li>
            <li><a href="/life-os/templates">Explore the Templates</a> available in your vault</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
