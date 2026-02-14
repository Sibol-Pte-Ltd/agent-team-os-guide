import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Day 1 Reset — Clean Architecture — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/implementation">Implementation</a>
          <span class="separator">/</span>
          Day 1 Reset
        </div>

        <h1>Day 1 Reset: Clean Architecture</h1>
        <p class="page-subtitle">Complete deletion of legacy data. Fresh start with simplified two-directory structure.</p>

        <div class="callout success">
          <div class="callout-title">✅ Reset Complete — Feb 14, 2026</div>
          <p>All legacy Life OS data deleted. Clean slate established. Agent Team OS now operates from a single source of truth.</p>
        </div>

        <h2>Final Architecture</h2>
        <p>Two directories. Simple. Clean. No legacy baggage.</p>

        <div class="code-block">
          <div class="code-header">Clean Directory Structure</div>
          <pre><code>~/
├── agents/              # Everything Agent Team OS
│   ├── ember/
│   │   ├── knowledge/   # Living knowledge base (ONLY source of truth)
│   │   ├── memory/      # Daily logs, context
│   │   ├── scripts/     # Automation, tooling
│   │   └── templates/   # Spawn templates, SOPs
│   │
│   ├── scout/
│   │   ├── briefs/      # Research output
│   │   └── domains/     # Domain expertise
│   │
│   ├── forge/
│   │   ├── runbooks/    # Infrastructure procedures
│   │   └── alerts/      # Alert response patterns
│   │
│   └── shared/          # Cross-agent resources
│       ├── tools/
│       └── references/
│
└── notes/               # Personal notes (empty, future use)</code></pre>
        </div>

        <h2>What Was Deleted</h2>
        <table>
          <thead>
            <tr>
              <th>Path</th>
              <th>Status</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>~/life-os/</code></td>
              <td><span class="badge success">Deleted</span></td>
              <td>Legacy Logseq vault — no longer needed</td>
            </tr>
            <tr>
              <td><code>~/life/</code></td>
              <td><span class="badge success">Deleted</span></td>
              <td>Abandoned original location</td>
            </tr>
            <tr>
              <td><code>~/agent-guide/</code></td>
              <td><span class="badge success">Deleted</span></td>
              <td>Superseded by this website</td>
            </tr>
            <tr>
              <td>Syncthing life-os sync</td>
              <td><span class="badge warning">Needs Update</span></td>
              <td>Config still references old path — remove when ready</td>
            </tr>
          </tbody>
        </table>

        <h2>Knowledge System: ~/agents/ember/knowledge/</h2>
        <p>The <strong>only</strong> source of truth for agent knowledge. Structured, agent-readable, version-controlled.</p>

        <div class="code-block">
          <div class="code-header">~/agents/ember/knowledge/ Structure</div>
          <pre><code>~/agents/ember/knowledge/
├── README.md                 # Navigation, overview
├── index.md                  # Quick reference
│
├── ember/                    # Chief of Staff
│   ├── role.md
│   ├── orchestration.md
│   └── reporting.md
│
├── scout/                    # Research Specialist
│   ├── role.md
│   └── domains/
│
├── forge/                    # Infrastructure
│   ├── role.md
│   └── runbooks/
│
└── shared/                   # Cross-agent
    ├── terminology.md
    ├── contacts.md
    └── tools/</code></pre>
        </div>

        <h3>Design Principles</h3>
        <ul>
          <li><strong>Single source of truth:</strong> Knowledge lives in one place only</li>
          <li><strong>Agent-scoped:</strong> Each agent has its own directory</li>
          <li><strong>Markdown-native:</strong> Human and agent readable</li>
          <li><strong>No archives:</strong> Living documents only — history is in git</li>
          <li><strong>No external sync:</strong> Managed within agent workspace only</li>
        </ul>

        <h2>Next Steps</h2>
        <ol>
          <li><strong>Create knowledge base structure</strong> — populate ~/agents/ember/knowledge/ with core docs</li>
          <li><strong>Migrate essential patterns</strong> — from MEMORY.md, AGENTS.md into structured knowledge</li>
          <li><strong>Update agent SOUL.md files</strong> — reference new knowledge paths</li>
          <li><strong>Clean Syncthing config</strong> — remove life-os folder reference (when ready)</li>
        </ol>

        <h2>Syncthing Cleanup (Deferred)</h2>
        <p>The Syncthing config at <code>~/.local/state/syncthing/config.xml</code> still contains the old <code>~/life-os/</code> folder definition. This will not cause errors (folder doesn't exist), but should be cleaned up when convenient:</p>

        <div class="code-block">
          <pre><code># To clean Syncthing config when ready:
# 1. Stop Syncthing: systemctl --user stop syncthing
# 2. Edit ~/.local/state/syncthing/config.xml
# 3. Remove the <folder id="life-os">...</folder> block
# 4. Start Syncthing: systemctl --user start syncthing</code></pre>
        </div>

        <div class="callout">
          <div class="callout-title">Why This Reset?</div>
          <p>Agent Team OS works best with a <strong>clean, intentional knowledge architecture</strong>. The legacy Life OS data was built for a different paradigm (personal knowledge management in Logseq). Starting fresh allows:</p>
          <ul>
            <li>Knowledge designed for agents, not humans browsing notes</li>
            <li>No migration complexity or archived baggage</li>
            <li>Clear separation: agents manage their own knowledge; notes is for future personal use</li>
            <li>Git-based history instead of Syncthing-based sync</li>
          </ul>
        </div>

        <div class="action-section">
          <h2>Explore</h2>
          <ul>
            <li><a href="/implementation">Implementation Status</a> — what's working now</li>
            <li><a href="/architecture">System Architecture</a> — how it all fits together</li>
            <li><a href="/agents">Agent Documentation</a> — Ember, Scout, Forge roles</li>
          </ul>
        </div>

        <p style="margin-top: 2rem; font-size: 0.8rem; color: #888;">Last updated: February 14, 2026</p>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
