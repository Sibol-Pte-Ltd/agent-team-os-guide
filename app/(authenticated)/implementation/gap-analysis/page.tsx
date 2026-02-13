import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gap Analysis — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/implementation">Implementation</a>
          <span class="separator">/</span>
          Gap Analysis
        </div>

        <h1>Gap Analysis</h1>
        <p class="page-subtitle">Comprehensive audit comparing documented Agent Team OS features against actual implementation. Includes security audit findings and Life OS graph analysis from Feb 13.</p>

        <div class="callout info">
          <div class="callout-title">Audit Summary</div>
          <p><strong>Initial Audit:</strong> February 11, 2026 (~04:30 UTC)<br>
          <strong>Updated:</strong> February 12, 2026 (~03:08 UTC) — Trust system completion<br>
          <strong>Updated:</strong> February 13, 2026 (~16:25 UTC) — Comprehensive directory audit + Life OS graph gap audit<br>
          <strong>Auditors:</strong> Ember + Architect + subagents<br>
          <strong>Method:</strong> Website crawl + implementation inspection + directory audit + Logseq graph analysis</p>
        </div>

        <h2>🔴 Security Findings (Feb 13 Audit)</h2>

        <table>
          <thead>
            <tr>
              <th>Finding</th>
              <th>Severity</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Exposed Supabase bearer token</strong></td>
              <td><span class="badge danger">CRITICAL</span></td>
              <td><code>~/agent-guide/agents/ember/config/mcporter.json</code></td>
              <td>⚠️ Needs rotation</td>
            </tr>
            <tr>
              <td><strong>Client-side password auth</strong></td>
              <td><span class="badge danger">CRITICAL</span></td>
              <td><code>login.html</code> — password <code>$OS2026$</code> in client JS</td>
              <td>✅ Fixed — Next.js migration replaced with server-side auth</td>
            </tr>
            <tr>
              <td><strong>trust-levels.json permissions</strong></td>
              <td><span class="badge success">Good</span></td>
              <td><code>~/agents/ember/config/trust-levels.json</code></td>
              <td>✅ 600 (owner-only)</td>
            </tr>
            <tr>
              <td><strong>Two approval queue files world-readable</strong></td>
              <td><span class="badge warning">Minor</span></td>
              <td><code>req-1770872136</code>, <code>req-1770978435</code></td>
              <td>⚠️ Should be 600</td>
            </tr>
            <tr>
              <td><strong>.claude.json backups in home dir</strong></td>
              <td><span class="badge warning">Moderate</span></td>
              <td><code>~/.claude.json.backup.*</code> (5 files)</td>
              <td>⚠️ May contain session data</td>
            </tr>
          </tbody>
        </table>

        <h2>🔴 Structural Issues (Feb 13 Audit)</h2>

        <h3>Three Overlapping Copies of Website — ✅ RESOLVED</h3>
        <p>The directory audit found <strong>three separate locations</strong> holding versions of the agent-team-os-guide. <strong>Cleanup completed Feb 13, 23:15 UTC:</strong></p>
        <ul>
          <li><strong><code>~/agent-guide/</code></strong> — 3,660 files (93.7% is node_modules bloat). Contains legacy agent data, old memories, and the exposed Supabase token. Only ~159 actual content files. <em>Still needs migration of valuable data.</em></li>
          <li><strong><code>~/workspace/repos/agent-team-os-guide/</code></strong> — 46 files. Was the nginx-served site (now superseded by Next.js). <strong>✅ DELETED</strong></li>
          <li><strong><code>~/workspace/repos/agent-team-os-guide.git/</code></strong> — Orphaned bare repo, never used. <strong>✅ DELETED</strong></li>
          <li><strong><code>~/workspace/repos/agent-team-os-guide-nextjs/</code></strong> — The current Next.js site. <strong>✅ SOLE SOURCE OF TRUTH</strong></li>
        </ul>
        <p><strong>Remaining:</strong> <code>~/agent-guide/</code> should be archived after migrating valuable legacy data (11 Ember memory files, project files, reflections).</p>

        <h3>Legacy Data Not Migrated</h3>
        <p>Files in <code>~/agent-guide/agents/ember/</code> NOT present in <code>~/agents/ember/</code>:</p>
        <ul>
          <li>11 daily memory files (Jan 25 – Feb 9, 2026)</li>
          <li>8 project memory files</li>
          <li>4 reflection files</li>
          <li>Clawdbot Canvas UI (<code>canvas/index.html</code>)</li>
          <li>Debug screenshots (7 PNGs, 968KB)</li>
          <li>Visual debugging procedure doc</li>
          <li>exa-search MCP skill with full npm dependencies</li>
        </ul>

        <h3>Orphaned Directories — ✅ RESOLVED</h3>
        <ul>
          <li><code>~/guide/</code> — empty, safe to remove</li>
          <li><code>~/guide-temp/</code> — just .git, no content</li>
          <li><code>~/guide.tar.gz</code> — likely old export</li>
        </ul>
        <p><strong>Status:</strong> These were noted in the audit. The critical website duplicates were prioritized and removed Feb 13. These items remain low-priority cleanup.</p>

        <h2>🔴 Life OS Graph Gaps (Feb 13 Audit)</h2>

        <h3>Critical Gaps</h3>

        <div class="callout warning">
          <div class="callout-title">GAP-01: Templates Not Logseq-Compatible</div>
          <p>None of the 10 templates have the <code>template::</code> property that Logseq requires to recognize them as insertable templates via the <code>/template</code> command. Templates exist as reference documents but <strong>cannot be used within Logseq's template system</strong>. Users must manually copy/paste content.</p>
          <p><strong>Fix:</strong> Add <code>template:: &lt;name&gt;</code> and <code>template-including-parent:: false</code> properties to each template file, formatted as Logseq blocks.</p>
        </div>

        <div class="callout warning">
          <div class="callout-title">GAP-02: Journal Template Not Auto-Applied</div>
          <p><code>config.edn</code> has <code>:default-templates {:journals ""}</code> — empty string means no template is applied to new journal pages. New journal pages are blank, breaking the daily workflow that requires structured sections.</p>
          <p><strong>Fix:</strong> Set <code>:default-templates {:journals "Daily Journal"}</code></p>
        </div>

        <div class="callout warning">
          <div class="callout-title">GAP-03: 2-Day Journal Gap (Feb 12–13)</div>
          <p>No journal entries exist for Feb 12 or Feb 13. Only 2 entries total (Feb 10, Feb 11) out of 4 days since creation — 50% coverage. This breaks the daily cadence loop: morning reports and evening check-ins can't pull from journal data if no entries exist.</p>
          <p><strong>Fix:</strong> Backfill entries. Consider auto-creating skeleton entries via cron.</p>
        </div>

        <h3>Important Gaps</h3>

        <table>
          <thead>
            <tr>
              <th>Gap</th>
              <th>Issue</th>
              <th>Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>GAP-04: No project pages</strong></td>
              <td>Only "Agent Team OS" exists. CWA Magento and other active projects have no pages.</td>
              <td>Project-level tracking and agent context missing</td>
            </tr>
            <tr>
              <td><strong>GAP-05: Broken link</strong></td>
              <td><code>[[Implementation Status]]</code> referenced in Agent Team OS page doesn't exist</td>
              <td>Dead link, orphaned reference in graph</td>
            </tr>
            <tr>
              <td><strong>GAP-06: contents.md empty</strong></td>
              <td>Logseq's sidebar Contents page contains only a single dash character</td>
              <td>Navigational hub is useless. Not tracked in git.</td>
            </tr>
            <tr>
              <td><strong>GAP-07: Area pages skeleton-only</strong></td>
              <td>All 5 area pages have headers but zero actual content, notes, or references</td>
              <td>Areas exist structurally but don't serve as living reference hubs</td>
            </tr>
            <tr>
              <td><strong>GAP-08: No .gitignore</strong></td>
              <td>Logseq creates temp/cache files. logseq/ directory is untracked.</td>
              <td>Risk of committing cache files. Config not backed up.</td>
            </tr>
            <tr>
              <td><strong>GAP-09: logseq/ not in git</strong></td>
              <td><code>logseq/config.edn</code> (critical configuration) is untracked</td>
              <td>Config not backed up — if lost, all Logseq preferences disappear</td>
            </tr>
            <tr>
              <td><strong>GAP-10: No inter-page linking</strong></td>
              <td>Only 1 internal <code>[[link]]</code> across all content. Journals and areas don't link to each other.</td>
              <td>Logseq's core value — bidirectional linking — is completely unused. Graph view disconnected.</td>
            </tr>
          </tbody>
        </table>

        <h3>Nice-to-Have Gaps</h3>
        <ul>
          <li><strong>GAP-11:</strong> No <code>assets/</code> directory for images/attachments</li>
          <li><strong>GAP-12:</strong> <code>research/</code> directory is empty (will resolve when Scout workflow activates)</li>
          <li><strong>GAP-13:</strong> No favorites configured in Logseq (<code>:favorites []</code>)</li>
          <li><strong>GAP-14:</strong> Area pages stored in <code>areas/</code> instead of <code>pages/</code> — may not be fully indexed by Logseq</li>
          <li><strong>GAP-15:</strong> No tags or properties (<code>key:: value</code>) used anywhere — Logseq's query system unused</li>
        </ul>

        <h2>Life OS Graph Summary Metrics</h2>
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Total markdown files</td><td>24</td></tr>
            <tr><td>Journal coverage</td><td>2/4 days (50%)</td></tr>
            <tr><td>Templates created</td><td>10 (exceeds guide's 6 core)</td></tr>
            <tr><td>Templates Logseq-compatible</td><td><strong>0/10 (0%)</strong></td></tr>
            <tr><td>Area pages</td><td>5/5 recommended</td></tr>
            <tr><td>Area pages with content</td><td><strong>0/5 (0%)</strong></td></tr>
            <tr><td>Project pages</td><td>1 (expected 2–3)</td></tr>
            <tr><td>Internal links</td><td><strong>1 (critically low)</strong></td></tr>
            <tr><td>Git commits</td><td>3</td></tr>
            <tr><td>Critical gaps</td><td>3</td></tr>
            <tr><td>Important gaps</td><td>7</td></tr>
            <tr><td>Nice-to-have gaps</td><td>5</td></tr>
          </tbody>
        </table>

        <div class="callout info">
          <div class="callout-title">Overall Assessment</div>
          <p>The Life OS graph has solid skeletal infrastructure — all templates, area directories, cron jobs, and sync are in place. However, the graph is <strong>functionally inert</strong>: templates can't be used via Logseq, no journal entries exist for the past 2 days, internal linking is essentially absent, and area/project pages lack substance. The system is architecturally sound but operationally dormant.</p>
        </div>

        <h2>Previously Resolved Issues</h2>

        <h3>✅ Cron Jobs — Fully Fixed (Feb 11)</h3>
        <p>All 10 old broken cron jobs deleted. Rebuilt as 5 clean, verified jobs:</p>
        <ul>
          <li><strong>morning-report</strong> — 6 AM Manila daily → Discord #ember + Pushover <span class="badge success">Working</span></li>
          <li><strong>evening-checkin</strong> — 9:30 PM Manila daily → Discord #ember + Pushover <span class="badge success">Working</span></li>
          <li><strong>lifeos-git-backup</strong> — 2 AM UTC daily → Discord #ember <span class="badge success">Working</span></li>
          <li><strong>weekly-review</strong> — Sun 9 AM Manila → Discord #ember + Pushover <span class="badge success">Working</span></li>
          <li><strong>monthly-review</strong> — 1st of month 9 AM Manila → Discord #ember + Pushover <span class="badge success">Working</span></li>
        </ul>

        <h3>✅ Syncthing — Fixed &amp; Connected (Feb 11)</h3>
        <p>Root cause: EC2 had wrong device ID for MacBook. Now connected: 76 files synced, idle, 0 errors.</p>

        <h3>✅ Life OS Structure — Built Out (Feb 11)</h3>
        <ul>
          <li>10 templates created (daily-journal, morning-report, evening-checkin, weekly-review, monthly-review, goal, research-brief, decision-log, project-kickoff, research-request)</li>
          <li>5 area pages (health, work, personal, learning, finance)</li>
          <li>Git repo initialized with 3 commits</li>
        </ul>

        <h3>✅ Trust System — Fully Implemented (Feb 12)</h3>
        <p>Complete implementation with config, enforcement module, approval workflow, integration, and logging. Tested end-to-end with Scout approval workflow.</p>

        <h3>✅ Website Auth — Fixed (Feb 13)</h3>
        <p>Client-side password gate replaced by server-side authentication via Next.js + Supabase. The hardcoded password <code>$OS2026$</code> in client JS is no longer a vulnerability.</p>

        <h3>✅ Google Calendar — Authenticated (Feb 12)</h3>
        <p><code>gog</code> CLI installed and OAuth completed. Calendar data available for morning reports.</p>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li><a href="/implementation/roadmap">View the Roadmap</a> — updated priorities from audit</li>
            <li><a href="/implementation/activity-log">Check Activity Log</a> — see recent work</li>
            <li><a href="/implementation">Return to Status Dashboard</a></li>
          </ul>
        </div>

        <p style="margin-top: 2rem; font-size: 0.8rem; color: #888;">Last updated: February 13, 2026</p>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
