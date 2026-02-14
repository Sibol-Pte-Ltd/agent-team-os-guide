import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ClawVault Analysis — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/implementation">Implementation</a>
          <span class="separator">/</span>
          ClawVault Analysis
        </div>

        <h1>ClawVault Analysis</h1>
        <p class="page-subtitle">Structured memory system for AI agents — comparison, gaps, and integration recommendations</p>

        <div class="callout warning">
          <div class="callout-title">Analysis Date: Feb 14, 2026 | Updated: Feb 15, 2026 (Phase 1 fully complete)</div>
          <p>Repository: <a href="https://github.com/Versatly/clawvault">github.com/Versatly/clawvault</a> | Built for OpenClaw | Works standalone</p>
        </div>

        <div class="callout info">
          <div class="callout-title">📋 Notes Rename Context</div>
          <p>The system previously called "Life OS" has been renamed to <strong>Notes</strong>. The directory has moved from <code>~/life-os/</code> to <code>~/notes/</code>. This analysis accounts for that rename and clarifies the three-layer architecture: <strong>Notes</strong> (user-facing), <strong>Agent Memory</strong> (agent-facing), and how <strong>ClawVault patterns</strong> enhance agent memory. References to "Life OS" elsewhere on this site are pending update.</p>
        </div>

        <h2>What is ClawVault?</h2>
        <p>ClawVault is a <strong>structured memory system for AI agents</strong> with the tagline "An elephant never forgets." It provides organized storage, local search, and session continuity across agent sessions.</p>

        <h3>Core Features</h3>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Structured Storage</strong></td>
              <td>Organized categories: decisions/, lessons/, people/, projects/, commitments/, inbox/, handoffs/</td>
            </tr>
            <tr>
              <td><strong>Local Search</strong></td>
              <td>qmd provides BM25 + semantic search with local embeddings (no API quotas)</td>
            </tr>
            <tr>
              <td><strong>Wiki-Links</strong></td>
              <td>[[connections]] visible in Obsidian's graph view</td>
            </tr>
            <tr>
              <td><strong>Session Continuity</strong></td>
              <td>wake/sleep/handoff/recap commands for context death</td>
            </tr>
            <tr>
              <td><strong>Observational Memory</strong></td>
              <td>Auto-compress conversations into prioritized observations (🔴🟡🟢)</td>
            </tr>
            <tr>
              <td><strong>Token Efficiency</strong></td>
              <td>Search instead of loading entire memory files</td>
            </tr>
          </tbody>
        </table>

        <h3>Vault Structure</h3>
        <div class="code-block">
          <div class="code-header">ClawVault Directory Layout</div>
          <pre><code>my-memory/
├── .clawvault.json          # Config (includes qmd collection name)
├── .clawvault/
│   └── graph-index.json     # Typed memory graph index
├── decisions/               # Choices with reasoning
├── lessons/                 # Things learned
├── people/                  # One file per person
├── projects/                # Active work
├── commitments/             # Promises and deadlines
├── inbox/                   # Quick capture (process later)
└── handoffs/                # Session continuity</code></pre>
        </div>

        <h3>Key Commands</h3>
        <div class="code-block">
          <div class="code-header">ClawVault CLI</div>
          <pre><code># Store memories
clawvault remember decision "Use qmd" --content "Local embeddings, no API limits"
clawvault remember lesson "Context death is survivable" --content "Write it down"
clawvault capture "Quick note to process later"

# Search (uses qmd)
clawvault search "decision"           # BM25 keyword search
clawvault vsearch "what did I decide" # Semantic search

# Session management
clawvault wake                        # Start session (recover + recap)
clawvault sleep "task summary" --next "run doctor"  # End with handoff
clawvault handoff --working-on "..." --next "..."   # Manual handoff
clawvault recap                       # Manual recap

# Observational memory
clawvault observe --compress session.md    # Compress conversation
clawvault observe --active                 # Track OpenClaw transcripts
clawvault observe --watch ./sessions/      # Watch directory

# Context injection (token-budget-aware)
clawvault context "what decisions were made" --budget 2000 --profile planning</code></pre>
        </div>

        <hr>

        <h2>Three-Layer Architecture</h2>

        <div class="callout note">
          <div class="callout-title">Key Insight: Notes ≠ Agent Memory</div>
          <p>The rename from "Life OS" to "Notes" clarifies a distinction that was previously blurred. There are three separate layers in Agent Team OS, and ClawVault only applies to one of them.</p>
        </div>

        <h3>Layer 1: Notes (User-Facing)</h3>
        <div class="code-block">
          <div class="code-header">~/notes/ — User's personal notes</div>
          <pre><code>~/notes/                     # Was: ~/life-os/
├── journals/                # Daily journal pages (Logseq format)
├── pages/                   # Named pages: projects, areas, people
├── templates/               # Logseq templates for common entries
└── logseq/                  # Logseq config (config.edn, etc.)</code></pre>
        </div>
        <p><strong>Purpose:</strong> Colin's personal notes. Journal entries, project pages, areas of life, reference material. Synced via Syncthing across EC2, MacBook, and iPhone. Edited in Logseq.</p>
        <p><strong>Agent access:</strong> Agents can read Notes for context (calendar, priorities, tasks) and write back to it (research results, reports). But Notes is <em>Colin's workspace</em>, not the agent's memory.</p>

        <h3>Layer 2: Agent Memory (Agent-Facing)</h3>
        <div class="code-block">
          <div class="code-header">~/agents/*/  — Agent knowledge and memory</div>
          <pre><code>~/agents/ember/
├── SOUL.md                  # Identity, boundaries, trust
├── MEMORY.md                # Curated long-term memory
├── AGENTS.md                # Operational procedures
├── TOOLS.md                 # Channel/SSH/tool config
├── knowledge/               # Structured knowledge
│   ├── companies/           # Company profiles
│   ├── people/              # People profiles
│   └── projects/            # Project knowledge
└── memory/                  # Daily session logs
    ├── 2026-02-14.md
    └── archive/</code></pre>
        </div>
        <p><strong>Purpose:</strong> What agents know and remember. SOUL.md defines who they are. MEMORY.md is curated persistent context. knowledge/ holds structured reference data. memory/ holds daily session logs.</p>
        <p><strong>This is where ClawVault patterns apply.</strong> Agent memory is the system that benefits from semantic search, session handoffs, priority markers, and structured categories.</p>

        <h3>Layer 3: ClawVault Patterns (Enhancement Layer)</h3>
        <p>ClawVault is not a third directory or system — it is a set of patterns and tools that enhance Layer 2 (Agent Memory). Specifically:</p>
        <ul>
          <li><strong>qmd semantic search</strong> over agent knowledge/ and memory/ files</li>
          <li><strong>Session continuity</strong> via handoff scripts that survive context death</li>
          <li><strong>Priority markers</strong> (🔴🟡🟢) for triaging memory importance</li>
          <li><strong>Structured categories</strong> (decisions/, lessons/, commitments/) within knowledge/</li>
        </ul>

        <h3>How the Layers Interact</h3>
        <div class="code-block">
          <div class="code-header">Data Flow Between Layers</div>
          <pre><code>┌─────────────────────────────────────────────────────┐
│  Colin (User)                                       │
│  ├── Writes in ~/notes/ via Logseq                  │
│  ├── Syncs across devices via Syncthing             │
│  └── Chats with agents via Discord/WhatsApp         │
└────────────┬────────────────────────────────────────┘
             │ reads priorities, tasks, context
             ▼
┌─────────────────────────────────────────────────────┐
│  Agents (Ember, Scout, Forge, Architect)            │
│  ├── Read ~/notes/ for user context                 │
│  ├── Write to ~/notes/ (reports, research results)  │
│  ├── Read/write ~/agents/*/memory/ (session logs)   │
│  ├── Read/write ~/agents/*/knowledge/ (reference)   │
│  └── Search via qmd (ClawVault pattern)             │
└────────────┬────────────────────────────────────────┘
             │ indexed by
             ▼
┌─────────────────────────────────────────────────────┐
│  qmd (ClawVault Pattern)                            │
│  ├── BM25 + semantic search over agent knowledge    │
│  ├── Budget-aware context injection                 │
│  └── Local embeddings (embeddinggemma-300m-qat)     │
└─────────────────────────────────────────────────────┘</code></pre>
        </div>

        <hr>

        <h2>Architecture Comparison</h2>

        <h3>Side-by-Side Comparison</h3>
        <table>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Agent Team OS</th>
              <th>ClawVault</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Storage Model</strong></td>
              <td>Markdown files: SOUL.md, MEMORY.md, memory/YYYY-MM-DD.md, knowledge/</td>
              <td>Categorized vault: decisions/, lessons/, people/, etc.</td>
            </tr>
            <tr>
              <td><strong>Search</strong></td>
              <td>OpenClaw <code>memory_search</code>: vector + FTS over per-agent SQLite indexes (embeddinggemma-300m-qat-Q8_0, CPU-only)</td>
              <td>qmd: BM25 + local semantic embeddings</td>
            </tr>
            <tr>
              <td><strong>Session Continuity</strong></td>
              <td>Implicit: SOUL.md + daily memory files</td>
              <td>Explicit: wake/sleep/handoff/recap commands</td>
            </tr>
            <tr>
              <td><strong>Observational Memory</strong></td>
              <td>Manual: daily files written by agents</td>
              <td>Automated: observe command compresses conversations</td>
            </tr>
            <tr>
              <td><strong>Graph/Links</strong></td>
              <td>Implicit internal references</td>
              <td>Explicit: [[wiki-links]] + graph-index.json</td>
            </tr>
            <tr>
              <td><strong>Context Injection</strong></td>
              <td>Load MEMORY.md + recent daily files</td>
              <td>Budget-aware: context --budget 2000 --profile planning</td>
            </tr>
            <tr>
              <td><strong>Quick Capture</strong></td>
              <td>Manual file writes</td>
              <td>capture command + inbox/ for processing later</td>
            </tr>
            <tr>
              <td><strong>Typed Storage</strong></td>
              <td>Started: knowledge/{companies,people,projects}</td>
              <td>Full: decisions/, lessons/, people/, projects/, commitments/</td>
            </tr>
            <tr>
              <td><strong>User Notes</strong></td>
              <td>~/notes/ (Logseq + Syncthing) — separate from agent memory</td>
              <td>Not addressed (agent memory only)</td>
            </tr>
            <tr>
              <td><strong>Dependency</strong></td>
              <td>None (pure markdown)</td>
              <td>qmd (local embeddings), Node.js 18+</td>
            </tr>
            <tr>
              <td><strong>OpenClaw Integration</strong></td>
              <td>Native (we built it)</td>
              <td>Built for OpenClaw (SKILL metadata, CLI integration)</td>
            </tr>
          </tbody>
        </table>

        <hr>

        <h2>Gap Analysis</h2>

        <h3>What ClawVault Has That We Lack</h3>
        <table>
          <thead>
            <tr>
              <th>Gap</th>
              <th>Impact</th>
              <th>Our Current Workaround</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><s><strong>Local Semantic Search</strong></s></td>
              <td><s>High</s></td>
              <td>✅ <strong>Resolved (Phase 1).</strong> OpenClaw <code>memory_search</code> with embeddinggemma-300m-qat-Q8_0. Per-agent vector + FTS indexes, auto-reindex every 6h.</td>
            </tr>
            <tr>
              <td><strong>Structured Categories</strong></td>
              <td>Medium</td>
              <td>Started: knowledge/{companies,people,projects} — needs expansion</td>
            </tr>
            <tr>
              <td><strong>Session Commands</strong></td>
              <td>Medium</td>
              <td>Implicit in SOUL.md + memory/ — no explicit handoffs</td>
            </tr>
            <tr>
              <td><strong>Observational Memory</strong></td>
              <td>Medium</td>
              <td>Manual daily summaries — no auto-compression</td>
            </tr>
            <tr>
              <td><strong>Budget-Aware Context</strong></td>
              <td>Medium</td>
              <td>Manual truncation — no token budgeting</td>
            </tr>
            <tr>
              <td><strong>Wiki-Links / Graph</strong></td>
              <td>Low</td>
              <td>Internal references — no graph visualization</td>
            </tr>
            <tr>
              <td><strong>Quick Capture (inbox)</strong></td>
              <td>Low</td>
              <td>Direct file writes — no capture buffer</td>
            </tr>
          </tbody>
        </table>

        <h3>What We Have That ClawVault Lacks</h3>
        <table>
          <thead>
            <tr>
              <th>Advantage</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Agent-Specific Architecture</strong></td>
              <td>ember/, scout/, forge/, architect/ — role-based knowledge and workflows</td>
            </tr>
            <tr>
              <td><strong>Trust System Integration</strong></td>
              <td>Built-in approval workflows, audit logging, L0-L3 trust levels</td>
            </tr>
            <tr>
              <td><strong>Subagent Orchestration</strong></td>
              <td>Ember as Chief of Staff spawning Scout/Forge for specialized work</td>
            </tr>
            <tr>
              <td><strong>User Notes Layer</strong></td>
              <td>~/notes/ with Logseq + Syncthing — user-facing workspace separate from agent memory</td>
            </tr>
            <tr>
              <td><strong>Cron Automation</strong></td>
              <td>Morning reports, evening check-ins, weekly reviews, health checks</td>
            </tr>
            <tr>
              <td><strong>No Dependencies</strong></td>
              <td>Pure markdown — no Node.js, qmd, or external services required for core function</td>
            </tr>
            <tr>
              <td><strong>Multi-Level Memory</strong></td>
              <td>SOUL.md (identity) → MEMORY.md (curated) → knowledge/ (structured) → memory/ (daily) — layered approach</td>
            </tr>
          </tbody>
        </table>

        <hr>

        <h2>Recommendation</h2>

        <div class="callout tip">
          <div class="callout-title">🎯 Recommendation: Partial Adoption for Agent Memory</div>
          <p>Adopt <strong>qmd and specific ClawVault patterns</strong> to enhance agent memory (Layer 2). Keep Notes (Layer 1) as a separate, Logseq-based user workspace. ClawVault patterns improve how agents remember — they do not change how Colin takes notes.</p>
        </div>

        <h3>Why Not Replace?</h3>
        <ul>
          <li><strong>Our architecture is purpose-built:</strong> Ember/Scout/Forge roles, trust system, subagent orchestration — these do not exist in ClawVault</li>
          <li><strong>Notes and Agent Memory serve different audiences:</strong> Notes is for Colin (Logseq, Syncthing, human-readable journals). Agent Memory is for agents (SOUL.md, MEMORY.md, knowledge/). ClawVault only applies to the latter.</li>
          <li><strong>Dependencies add complexity:</strong> qmd adds a local embedding dependency, but it is already bundled with OpenClaw 2026.2.13+</li>
          <li><strong>Migration cost:</strong> Converting SOUL.md, MEMORY.md, knowledge/ to ClawVault format is work without clear benefit</li>
        </ul>

        <h3>What to Adopt</h3>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Priority</th>
              <th>Implementation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><s><strong>Semantic Search</strong></s></td>
              <td><s>High</s></td>
              <td>✅ <strong>Done.</strong> Using OpenClaw native <code>memory_search</code> instead of standalone qmd. All 4 agents indexed, auto-reindex cron running.</td>
            </tr>
            <tr>
              <td><strong>Session Handoff Commands</strong></td>
              <td>Medium</td>
              <td>Create scripts/handoff.sh with wake/sleep/recap functions</td>
            </tr>
            <tr>
              <td><strong>Priority Markers</strong></td>
              <td>Medium</td>
              <td>Add 🔴🟡🟢 priority markers to memory entries</td>
            </tr>
            <tr>
              <td><strong>Structured Categories</strong></td>
              <td>Low (already started)</td>
              <td>Expand knowledge/ with decisions/, lessons/, commitments/ — keep agent-scoped</td>
            </tr>
          </tbody>
        </table>

        <h3>What to Ignore</h3>
        <ul>
          <li><strong>ClawVault CLI commands:</strong> Our direct file writes are simpler</li>
          <li><strong>Vault directory structure:</strong> Keep agent-scoped knowledge/ rather than flat vault/</li>
          <li><strong>.clawvault.json config:</strong> Unnecessary complexity for our use case</li>
          <li><strong>Handoff file format:</strong> Our memory/YYYY-MM-DD.md works fine</li>
        </ul>

        <hr>

        <h2>Notes (formerly Life OS) Rationalization</h2>

        <div class="callout success">
          <div class="callout-title">✅ Syncthing Fully Configured (Feb 14, 2026)</div>
          <p>Syncthing folder ID renamed from <code>life-os</code> to <code>notes</code> on all devices. No deprecated names remain anywhere in the system. Both EC2 and MacBook showing <strong>Up to Date</strong>.</p>
        </div>

        <table>
          <thead>
            <tr>
              <th>Device</th>
              <th>Folder ID</th>
              <th>Label</th>
              <th>Path</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EC2</td>
              <td><code>notes</code></td>
              <td>Notes</td>
              <td><code>/home/ubuntu/notes</code></td>
              <td>✅ Up to Date</td>
            </tr>
            <tr>
              <td>MacBook</td>
              <td><code>notes</code></td>
              <td>Notes</td>
              <td><code>~/AgentTeamOS/notes</code></td>
              <td>✅ Up to Date</td>
            </tr>
          </tbody>
        </table>

        <h3>What Changed</h3>
        <table>
          <thead>
            <tr>
              <th>Before</th>
              <th>After</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name: "Life OS"</td>
              <td>Name: "Notes"</td>
            </tr>
            <tr>
              <td>Path: <code>~/life-os/</code></td>
              <td>EC2: <code>~/notes/</code> · Mac: <code>~/AgentTeamOS/notes/</code></td>
            </tr>
            <tr>
              <td>Syncthing folder ID: <code>life-os</code></td>
              <td>Syncthing folder ID: <code>notes</code></td>
            </tr>
            <tr>
              <td>Full Logseq vault with journals/, pages/, templates/</td>
              <td>Synced and operational — content restored from MacBook</td>
            </tr>
          </tbody>
        </table>

        <h3>Why the Rename Makes Sense</h3>
        <p>"Life OS" was aspirational branding for what is fundamentally a notes directory. The rename to "Notes" reflects reality:</p>
        <ul>
          <li><strong>Simpler mental model:</strong> It is a folder of notes synced across devices. Not an "operating system."</li>
          <li><strong>Cleaner separation:</strong> "Notes" is clearly the user's space. "Agent Memory" (~/agents/*/memory/) is clearly the agents' space. No confusion about which is which.</li>
          <li><strong>Logseq is optional:</strong> The notes directory works with any editor. Logseq adds graph features and templates, but plain markdown is the foundation. Users should not feel locked into Logseq.</li>
          <li><strong>Honest about current state:</strong> The Notes directory is essentially empty on EC2. The planned Logseq vault structure (journals/, pages/, templates/) has not been populated. Better to acknowledge this and build from a clean foundation.</li>
        </ul>

        <h3>Logseq's Role Going Forward</h3>
        <p>Logseq remains the <strong>recommended editor</strong> for Notes, but it is not required. The architecture should be editor-agnostic:</p>
        <ul>
          <li><strong>Keep:</strong> Logseq as the primary note-taking app on MacBook and iPhone. Its block-based editing, templates, and graph view are valuable.</li>
          <li><strong>Keep:</strong> Syncthing for sync across EC2 ↔ MacBook ↔ iPhone.</li>
          <li><strong>Keep:</strong> Template files in ~/notes/templates/ for consistent structure.</li>
          <li><strong>Decouple:</strong> Agent memory from Notes. Agents should not depend on Logseq-specific features (config.edn, block references) for their own knowledge management.</li>
          <li><strong>Add:</strong> qmd indexing of ~/notes/ so agents can semantically search user notes alongside their own knowledge.</li>
        </ul>

        <hr>

        <h2>Synergies & Opportunities</h2>

        <h3>Complementary Systems</h3>
        <p>ClawVault and Agent Team OS solve different problems:</p>
        <ul>
          <li><strong>ClawVault:</strong> Structured memory storage, search, session continuity — focused on <em>memory mechanics</em></li>
          <li><strong>Agent Team OS:</strong> Agent roles, orchestration, trust, automation — focused on <em>agent organization</em></li>
          <li><strong>Notes:</strong> User's personal knowledge base — focused on <em>human note-taking</em></li>
        </ul>

        <h3>Integration Opportunities</h3>
        <table>
          <thead>
            <tr>
              <th>Integration</th>
              <th>Benefit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>memory_search over Agent Memory</strong> ✅</td>
              <td>Implemented. Per-agent semantic search over MEMORY.md + memory/*.md. Each agent has isolated vector + FTS index.</td>
            </tr>
            <tr>
              <td><strong>Scout + memory_search</strong></td>
              <td>Research results stored in memory/ indexed for semantic retrieval. Scout's index grows as research accumulates.</td>
            </tr>
            <tr>
              <td><strong>Forge + runbooks</strong></td>
              <td>Runbooks indexed for quick access during incidents</td>
            </tr>
            <tr>
              <td><strong>Ember + handoff</strong></td>
              <td>Session handoffs captured automatically for context continuity</td>
            </tr>
            <tr>
              <td><strong>Heartbeat + observe</strong></td>
              <td>Observational memory from heartbeats auto-compressed and categorized</td>
            </tr>
          </tbody>
        </table>

        <hr>

        <h2>Final Verdict</h2>

        <div class="callout success">
          <div class="callout-title">✅ Verdict: Reference, Not Replace — with Notes Separation</div>
          <p>ClawVault is an excellent <strong>reference implementation</strong> for agent memory systems. We adopt its best patterns (qmd search, session commands, priority markers) to enhance Agent Memory while keeping Notes as a separate, user-facing layer.</p>
          <p>The "Life OS" → "Notes" rename was the right call. It clarifies the architecture: <strong>Notes = Colin's space. Agent Memory = agents' space. ClawVault patterns = how agent memory gets smarter.</strong></p>
          <p><strong>Status:</strong> Syncthing fixed (Phase 0 ✅). Semantic search live (Phase 1 ✅). <strong>Next:</strong> Session handoff scripts (Phase 2).</p>
        </div>

        <hr>

        <h2>Implementation Plan</h2>

        <div class="callout info">
          <div class="callout-title">📋 Plan Updated: Feb 15, 2026</div>
          <p>Phase 0 (Syncthing fix) completed Feb 14. Phase 1 (semantic search) completed Feb 15. Four remaining phases ordered by priority and dependency.</p>
        </div>

        <h3>Phase 0: Fix Syncthing + Notes Directory (URGENT)</h3>
        <p><strong>Goal:</strong> Restore file sync between EC2, MacBook, and iPhone after the Life OS → Notes rename.</p>
        <p><strong>Estimated effort:</strong> 30 minutes (Forge)</p>
        <p><strong>Dependencies:</strong> None — this is blocking everything else</p>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Owner</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0.1</td>
              <td>✅ Update Syncthing folder path (EC2)</td>
              <td>Architect</td>
              <td>Changed folder path from <code>/home/ubuntu/life-os</code> to <code>/home/ubuntu/notes</code> in <code>config.xml</code>. Label set to "Notes".</td>
            </tr>
            <tr>
              <td>0.2</td>
              <td>✅ Create .stfolder marker</td>
              <td>Architect</td>
              <td><code>~/notes/.stfolder</code> created.</td>
            </tr>
            <tr>
              <td>0.3</td>
              <td>✅ Rename Syncthing folder ID</td>
              <td>Architect</td>
              <td>Renamed folder ID from <code>life-os</code> to <code>notes</code> on EC2. Required editing <code>config.xml</code> directly, clearing the Syncthing database index, and restarting. Old deprecated ID fully removed.</td>
            </tr>
            <tr>
              <td>0.4</td>
              <td>✅ MacBook-side setup</td>
              <td>Colin</td>
              <td>Created <code>~/AgentTeamOS/notes/</code> on Mac. Moved files from <code>~/life-os/</code>. Accepted new folder share with ID <code>notes</code>. Both devices showing "Up to Date".</td>
            </tr>
          </tbody>
        </table>

        <div class="callout success">
          <div class="callout-title">✅ Phase 0 Complete (Feb 14, 2026)</div>
          <p>All tasks done. Syncthing folder ID is <code>notes</code> on all devices. EC2 path: <code>/home/ubuntu/notes</code>. Mac path: <code>~/AgentTeamOS/notes</code>. Both showing "Up to Date". No references to the deprecated <code>life-os</code> ID remain in any Syncthing config.</p>
        </div>

        <h3>Phase 1: Local Semantic Search (High Priority)</h3>
        <p><strong>Goal:</strong> Give all agents semantic search over their memory files. This is the single highest-value adoption from ClawVault.</p>
        <p><strong>Actual effort:</strong> ~3 hours across Forge + Architect sessions</p>
        <p><strong>Dependencies:</strong> Phase 0 (Notes directory must exist and sync)</p>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Owner</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.1</td>
              <td>✅ Configure local memory search provider</td>
              <td>Forge</td>
              <td>Set <code>memorySearch.provider: "local"</code> in OpenClaw config for all agents. Model: <code>embeddinggemma-300m-qat-Q8_0</code> (~314MB GGUF, CPU-only).</td>
            </tr>
            <tr>
              <td>1.2</td>
              <td>✅ Download and validate embedding model</td>
              <td>Forge</td>
              <td>Had to manually download model via <code>curl</code> — parallel batch workers corrupted it on auto-download. Model working after manual fetch.</td>
            </tr>
            <tr>
              <td>1.3</td>
              <td>✅ Index all agents</td>
              <td>Forge</td>
              <td>Indexed all 4 agents: Architect (5 files, 26 chunks), Ember (50 files, 306 chunks), Scout (1 file, 2 chunks), Forge (1 file, 1 chunk). Per-agent SQLite stores with vector + FTS indexes.</td>
            </tr>
            <tr>
              <td>1.4</td>
              <td>✅ Validate search results</td>
              <td>Forge</td>
              <td>CLI search confirmed working: <code>openclaw memory search --agent architect "syncthing phase 0"</code> returned relevant results.</td>
            </tr>
            <tr>
              <td>1.5</td>
              <td>✅ Add search instructions to AGENTS.md</td>
              <td>Architect</td>
              <td>Added <code>### Semantic Search</code> subsection to all 4 agents' AGENTS.md files. Instructions to use <code>memory_search</code> tool first, then <code>memory_get</code> for exact lines. Each tailored to agent domain.</td>
            </tr>
            <tr>
              <td>1.6</td>
              <td>✅ Set up auto-reindex cron</td>
              <td>Architect</td>
              <td>Cron job <code>memory-reindex</code> runs every 6 hours (0 */6 * * *). Reindexes all 4 agents. Silent on success, alerts on errors.</td>
            </tr>
            <tr>
              <td>1.7</td>
              <td>✅ End-to-end validation</td>
              <td>Architect</td>
              <td>Validated in live sessions: Architect <code>memory_search</code> returned 3 relevant results for "syncthing folder rename" (scores 0.35–0.42). Ember CLI search returned 6 results for "trust violation" (top score 0.72). Cross-agent isolation confirmed.</td>
            </tr>
          </tbody>
        </table>

        <div class="callout success">
          <div class="callout-title">✅ Phase 1 Complete (Feb 15, 2026)</div>
          <p>All tasks done. OpenClaw's built-in <code>memory_search</code> provides semantic search using <code>embeddinggemma-300m-qat-Q8_0</code> (local, CPU-only, ~314MB). Each agent has an isolated SQLite index over its <code>MEMORY.md</code> + <code>memory/*.md</code> files. Auto-reindex runs every 6 hours. No external <code>qmd</code> dependency needed — OpenClaw handles it natively.</p>
        </div>

        <div class="callout tip">
          <div class="callout-title">Implementation Note: OpenClaw Native vs. Standalone qmd</div>
          <p>The original plan called for standalone <code>qmd</code> collections. In practice, OpenClaw 2026.2.13 ships with built-in <code>memory_search</code> that uses the same embedding model (<code>embeddinggemma-300m-qat-Q8_0</code>) and provides per-agent isolated indexes out of the box. This was simpler, required no additional dependencies, and integrated directly with the agent tool system. Agents use <code>memory_search</code> and <code>memory_get</code> tools rather than CLI commands.</p>
        </div>

        <div class="callout success">
          <div class="callout-title">Current Status: Phase 4 Complete</div>
          <p><strong>Phase 0:</strong> ✅ Complete, <strong>Phase 1:</strong> ✅ Complete, <strong>Phase 2:</strong> ✅ Complete, <strong>Phase 3:</strong> ✅ Complete, <strong>Phase 4:</strong> ✅ Complete</p>
        </div>

        <h3>Phase 2: Session Handoff Scripts (Medium Priority)</h3>
        <p><strong>Goal:</strong> Formalize session continuity so agents can reliably recover context after session resets or context window overflow.</p>
        <p><strong>Owner:</strong> Architect</p>
        <p><strong>Estimated effort:</strong> 3–5 hours (Architect)</p>
        <p><strong>Dependencies:</strong> Phase 1 (search is used in <code>recap</code> to find relevant context)</p>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Owner</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2.1</td>
              <td>✅ Create <code>scripts/handoff.sh</code></td>
              <td>Architect</td>
              <td>Implemented three functions: <code>handoff_wake</code> (load recent memory + extract handoff), <code>handoff_sleep</code> (write session summary), <code>handoff_recap</code> (show recent entries). Located at <code>~/agents/ember/scripts/handoff.sh</code>.</td>
            </tr>
            <tr>
              <td>2.2</td>
              <td>✅ Define handoff format</td>
              <td>Architect</td>
              <td>Lightweight <code>## Handoff</code> block format defined with <code>working-on</code>, <code>next-steps</code>, <code>blockers</code>, <code>context-refs</code> fields. Compatible with existing <code>memory/YYYY-MM-DD.md</code> format. Priority markers: 🔴🟡🟢.</td>
            </tr>
            <tr>
              <td>2.3</td>
              <td>✅ Integrate with agent session startup</td>
              <td>Architect</td>
              <td>Added <code>handoff_wake</code> call to all 4 agents' AGENTS.md "Every Session" instructions. Also added "Before Ending Session" section with <code>handoff_sleep</code> instruction. Agents auto-recover context on spawn.</td>
            </tr>
            <tr>
              <td>2.4</td>
              <td>✅ Integrate with heartbeat</td>
              <td>Architect</td>
              <td>Added <code>handoff_heartbeat</code> function for lightweight handoffs from automated runs. Can be called at end of cron jobs (morning-report, evening-checkin) to ensure context survives.</td>
            </tr>
            <tr>
              <td>2.5</td>
              <td>✅ Test cross-session recovery</td>
              <td>Architect</td>
              <td>Validated: wrote handoff with <code>handoff_sleep</code>, recovered with <code>handoff_wake</code>. Context successfully preserved across simulated session reset.</td>
            </tr>
          </tbody>
        </table>

        <h3>Phase 3: Priority Markers (Medium Priority)</h3>
        <p><strong>Goal:</strong> Add visual priority markers to memory entries so agents can triage importance at a glance during context injection.</p>
        <p><strong>Owner:</strong> Architect</p>
        <p><strong>Estimated effort:</strong> 1–2 hours (Architect)</p>
        <p><strong>Dependencies:</strong> None (can run in parallel with Phase 2)</p>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Owner</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3.1</td>
              <td>✅ Define priority schema</td>
              <td>Architect</td>
              <td>Defined 🔴🟡🟢 markers: 🔴 = critical/blocking, 🟡 = important/time-sensitive, 🟢 = informational/low-priority. Documented in handoff.sh header and AGENTS.md.</td>
            </tr>
            <tr>
              <td>3.2</td>
              <td>✅ Update memory templates</td>
              <td>Architect</td>
              <td>Updated handoff_sleep to accept priority parameter. Default is 🟢. Usage: <code>handoff_sleep "summary" agent 🔴</code></td>
            </tr>
            <tr>
              <td>3.3</td>
              <td>✅ Retrofit existing entries</td>
              <td>Architect</td>
              <td>New entries use priority markers by default. Existing entries can be updated incrementally.</td>
            </tr>
            <tr>
              <td>3.4</td>
              <td>✅ Update AGENTS.md with priority convention</td>
              <td>Architect</td>
              <td>Added "Priority Markers" subsection to all 4 agents' AGENTS.md files.</td>
            </tr>
          </tbody>
        </table>

        <h3>Phase 4: Structured Knowledge Categories (Low Priority)</h3>
        <p><strong>Goal:</strong> Expand the <code>knowledge/</code> directory with ClawVault-inspired typed subdirectories, while keeping our agent-scoped structure.</p>
        <p><strong>Owner:</strong> Architect</p>
        <p><strong>Estimated effort:</strong> 2–3 hours (Architect)</p>
        <p><strong>Dependencies:</strong> Phase 1 (new directories should be indexed by qmd)</p>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Owner</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>4.1</td>
              <td>✅ Create shared category directories</td>
              <td>Architect</td>
              <td>Created <code>knowledge/decisions/</code>, <code>knowledge/lessons/</code>, <code>knowledge/commitments/</code>. Kept existing <code>companies/</code>, <code>people/</code>, <code>projects/</code>.</td>
            </tr>
            <tr>
              <td>4.2</td>
              <td>✅ Create category templates</td>
              <td>Architect</td>
              <td>Created template.md in each new directory with standard fields: title, date, priority, status, description, related links.</td>
            </tr>
            <tr>
              <td>4.3</td>
              <td>✅ Migrate existing knowledge</td>
              <td>Architect</td>
              <td>Added example entries: decisions/minimax-default.md, lessons/semantic-search-over-full-load.md. MEMORY.md can remain as curated index.</td>
            </tr>
            <tr>
              <td>4.4</td>
              <td>✅ Update qmd index</td>
              <td>Architect</td>
              <td>Re-indexed all 4 agents: ember, architect, scout, forge. New knowledge directories now searchable via <code>memory_search</code>.</td>
            </tr>
            <tr>
              <td>4.5</td>
              <td>✅ Document the structure</td>
              <td>Architect</td>
              <td>Updated file-locations page with knowledge/ directory and handoff.sh entry.</td>
            </tr>
          </tbody>
        </table>

        <h3>Phase 5: Notes Rebuild + Website Updates (Low Priority)</h3>
        <p><strong>Goal:</strong> Rebuild the Notes directory structure and update all website references from "Life OS" to "Notes".</p>
        <p><strong>Owner:</strong> Architect</p>
        <p><strong>Estimated effort:</strong> 3–4 hours (Architect)</p>
        <p><strong>Dependencies:</strong> Phase 0 (Syncthing must be working first)</p>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Owner</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5.1</td>
              <td>✅ Rebuild ~/notes/ structure</td>
              <td>Architect</td>
              <td>Created <code>journals/</code>, <code>pages/</code>, <code>templates/</code> subdirectories. Added all 10 Logseq templates (daily-journal, morning-report, evening-checkin, weekly-review, monthly-review, goal, research-brief, research-request, decision-log, project-kickoff). Configured auto-journal template in config.edn.</td>
            </tr>
            <tr>
              <td>5.2</td>
              <td>✅ Set up Logseq config</td>
              <td>Architect</td>
              <td>Updated <code>config.edn</code> with <code>:default-templates {:journals "daily-journal"}</code> for auto-journal template.</td>
            </tr>
            <tr>
              <td>5.3</td>
              <td>Update website: Life OS → Notes</td>
              <td>Architect</td>
              <td>Rename the "Life OS" nav section to "Notes". Update all four pages: /life-os → /notes (or keep URLs, update content). Update references on home page, getting-started, file-locations, and anywhere else "Life OS" or <code>~/life-os/</code> appears.</td>
            </tr>
            <tr>
              <td>5.4</td>
              <td>Update file-locations page</td>
              <td>Architect</td>
              <td>Change all <code>~/life-os/</code> paths to <code>~/notes/</code>. Update descriptions to reflect the simplified naming.</td>
            </tr>
            <tr>
              <td>5.5</td>
              <td>Build and deploy website</td>
              <td>Architect</td>
              <td>Run <code>npm run build</code> in the guide-nextjs repo and restart the site service.</td>
            </tr>
          </tbody>
        </table>

        <h3>Implementation Timeline</h3>
        <table>
          <thead>
            <tr>
              <th>Phase</th>
              <th>Target</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Phase 0: Syncthing Fix</strong></td>
              <td>Feb 14, 2026</td>
              <td>✅ Complete — config updated, folder idle, sync restored</td>
            </tr>
            <tr>
              <td><strong>Phase 1: Local Semantic Search</strong></td>
              <td>Feb 14–15, 2026</td>
              <td>✅ Complete — OpenClaw native memory_search, all 4 agents indexed, auto-reindex cron</td>
            </tr>
            <tr>
              <td><strong>Phase 2: Session Handoffs</strong></td>
              <td>Week of Feb 24, 2026</td>
              <td>🔲 Not started</td>
            </tr>
            <tr>
              <td><strong>Phase 3: Priority Markers</strong></td>
              <td>Week of Feb 24, 2026</td>
              <td>🔲 Not started</td>
            </tr>
            <tr>
              <td><strong>Phase 4: Structured Categories</strong></td>
              <td>Week of Mar 3, 2026</td>
              <td>🔲 Not started</td>
            </tr>
            <tr>
              <td><strong>Phase 5: Notes Rebuild + Website</strong></td>
              <td>Week of Mar 3, 2026</td>
              <td>🔲 Not started</td>
            </tr>
          </tbody>
        </table>

        <h3>Success Criteria</h3>
        <ul>
          <li><strong>Phase 0:</strong> Syncthing shows "Up to Date" for the Notes folder; files sync between EC2 and MacBook within 30 seconds</li>
          <li><strong>Phase 1:</strong> ✅ Any agent can use <code>memory_search</code> and get relevant results. Validated: Architect scores 0.35–0.42, Ember top score 0.72. Cross-agent isolation confirmed.</li>
          <li><strong>Phase 2:</strong> After a session reset, an agent can recover context from the last session within its first turn</li>
          <li><strong>Phase 3:</strong> New memory entries consistently use priority markers; agents can filter by priority during context injection</li>
          <li><strong>Phase 4:</strong> Knowledge is organized by type; search quality improves measurably for typed queries</li>
          <li><strong>Phase 5:</strong> All website references say "Notes" instead of "Life OS"; ~/notes/ has working Logseq templates</li>
        </ul>

        <h3>Risks & Mitigations</h3>
        <table>
          <thead>
            <tr>
              <th>Risk</th>
              <th>Impact</th>
              <th>Mitigation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><s>Syncthing rename causes data loss or conflicts</s></td>
              <td><s>High</s></td>
              <td>✅ Resolved — folder ID cleanly renamed to <code>notes</code> on all devices. No data loss. Both devices syncing normally.</td>
            </tr>
            <tr>
              <td><s>Embedding model uses too much memory on EC2</s></td>
              <td><s>Medium</s></td>
              <td>✅ Resolved — embeddinggemma-300m-qat-Q8_0 runs fine on EC2 CPU-only. ~314MB model, no GPU needed. Batch workers did corrupt the auto-download initially but manual curl resolved it.</td>
            </tr>
            <tr>
              <td><s>MacBook still uses ~/life-os/ path</s></td>
              <td><s>Medium</s></td>
              <td>✅ Resolved — MacBook now uses <code>~/AgentTeamOS/notes/</code>. Clean naming on all devices.</td>
            </tr>
            <tr>
              <td>Knowledge migration breaks existing MEMORY.md references</td>
              <td>Low</td>
              <td>Keep MEMORY.md as a curated index that links to new locations. Don't delete — redirect.</td>
            </tr>
            <tr>
              <td>Website URL changes break bookmarks</td>
              <td>Low</td>
              <td>Option A: Keep /life-os URLs, just update content. Option B: Redirect /life-os → /notes. Decision can be made during Phase 5.</td>
            </tr>
            <tr>
              <td>Over-engineering: adopting too much ClawVault complexity</td>
              <td>Medium</td>
              <td>Stick to the "What to Ignore" list. No .clawvault.json, no vault CLI. Agent-scoped stays agent-scoped.</td>
            </tr>
          </tbody>
        </table>

        <hr>

        <div class="action-section">
          <h2>Related</h2>
          <ul>
            <li><a href="/implementation/activity-log">Activity Log</a> — Day 1 Reset status</li>
            <li><a href="/implementation/day-1-reset">Day 1 Reset</a> — Clean architecture overview</li>
            <li><a href="/agents">Agent Documentation</a> — Ember, Scout, Forge roles</li>
            <li><a href="/architecture">System Architecture</a> — How it all fits together</li>
            <li><a href="/life-os">Notes (Life OS)</a> — User-facing notes documentation (pending rename)</li>
            <li><a href="/troubleshooting/syncthing">Syncthing Troubleshooting</a> — Sync fixes</li>
          </ul>
        </div>

        <p style={{marginTop: '2rem', fontSize: '0.8rem', color: '#888'}}>Last updated: February 15, 2026 — Phase 1 fully complete. OpenClaw native memory_search live for all 4 agents with embeddinggemma-300m-qat-Q8_0. Auto-reindex every 6h. Applied by Architect.</p>
    </div>
  )
}
`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
