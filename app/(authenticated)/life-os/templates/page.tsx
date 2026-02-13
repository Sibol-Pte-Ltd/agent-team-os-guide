import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Templates — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/life-os">Life OS</a>
          <span class="separator">/</span>
          Templates
        </div>

        <h1>Templates</h1>

        <p>Templates are pre-built LogSeq page structures that provide a consistent format for common types of entries in Life OS. Instead of starting from a blank page every time you begin a new project, conduct a weekly review, or capture a research brief, you insert a template that gives you the right sections, prompts, and structure from the start. Templates save time and ensure that important information is captured in a predictable format that the agents can reliably parse.</p>

        <p>Life OS ships with a set of core templates that cover the most common workflows. Each template is stored in the LogSeq vault and can be inserted on any page using the <code>/template</code> command. When you type <code>/template</code> in a LogSeq block, a dropdown menu appears listing all available templates. Select the one you want, and its structure is inserted at your cursor position. You can then fill in the sections and customize the content to your needs.</p>

        <h3>Available Templates</h3>

        <table>
          <thead>
            <tr>
              <th>Template Name</th>
              <th>Purpose</th>
              <th>When to Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Daily Journal</td>
              <td>Structures your daily journal page with sections for priorities, notes, accomplishments, and reflections.</td>
              <td>Automatically applied to each new journal page. You can also insert it manually on any day where the template was not auto-applied.</td>
            </tr>
            <tr>
              <td>Project Kickoff</td>
              <td>Provides a starting structure for a new project page, including sections for objectives, key results, tasks, timeline, and reference links.</td>
              <td>When you start a new project and want to define its scope, goals, and initial task breakdown in a consistent format.</td>
            </tr>
            <tr>
              <td>Weekly Review</td>
              <td>Guides you through a structured weekly reflection with prompts for wins, challenges, lessons learned, and priorities for the coming week.</td>
              <td>During your <a href="/cadence/weekly-review">weekly review</a> session, typically on Sunday or Monday. Ember may prompt you to complete it.</td>
            </tr>
            <tr>
              <td>Monthly Review</td>
              <td>A deeper review format that covers progress toward monthly and quarterly goals, area-by-area assessment, and strategic adjustments.</td>
              <td>At the end of each month during your <a href="/cadence/monthly-review">monthly review</a>. Provides a broader perspective than the weekly review.</td>
            </tr>
            <tr>
              <td>Research Brief</td>
              <td>A structured format for capturing research findings, including the research question, sources consulted, key findings, and recommended next steps.</td>
              <td>When Scout completes a research task, it writes the results into a Research Brief. You can also use it manually when conducting your own research.</td>
            </tr>
            <tr>
              <td>Decision Log</td>
              <td>Records a significant decision along with the context, options considered, rationale for the chosen option, and any follow-up actions.</td>
              <td>Whenever you make an important decision that you want to document for future reference. Especially useful for decisions that affect projects or life areas.</td>
            </tr>
          </tbody>
        </table>

        <h3>How to Use Templates</h3>

        <p>To insert a template in LogSeq, place your cursor in a block where you want the template to appear and type <code>/template</code>. LogSeq will display a list of available templates. Use the arrow keys or start typing the template name to filter the list, then press Enter to insert it. The template content will appear as nested blocks beneath your current block, and you can begin filling in each section immediately.</p>

        <p>Templates are defined as regular LogSeq pages with a special <code>template</code> property. If you want to customize an existing template or create your own, navigate to the template page in LogSeq, edit its block structure, and save. Your changes will be reflected the next time you insert that template. The agents are aware of the template formats and will continue to work with them as long as the core section headings remain intact.</p>

        <div class="callout tip">
          <div class="callout-title">Tip</div>
          <p>You do not need to fill in every section of a template every time you use it. Templates are guides, not requirements. If a section is not relevant for a particular entry, leave it blank or delete it. The agents will work with whatever you provide.</p>
        </div>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li><a href="/life-os/daily-workflow">See how the Daily Journal template fits into your workflow</a></li>
            <li><a href="/life-os/logseq-tips">Learn LogSeq basics</a> including how to use the <code>/template</code> command</li>
            <li><a href="/cadence/weekly-review">Read about the Weekly Review</a> to understand when to use that template</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
