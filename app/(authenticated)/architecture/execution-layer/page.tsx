import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Execution Layer — OpenClaw Architecture',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/architecture">Architecture</a>
          <span class="separator">/</span>
          Execution Layer
        </div>

        <h1>Execution Layer</h1>

        <p>The Execution Layer is where intentions become actions. When the Agent Runner's LLM decides to read a file, run a command, search the web, or click a button in a browser, the Execution Layer is what actually carries out that operation. It provides a controlled, sandboxed environment for tool execution and returns structured results back to the Agent Runner for the next reasoning step.</p>

        <p>The Execution Layer is not a single module — it is a collection of tool implementations that share common patterns: input validation, environment control, output capture, error handling, and security gating.</p>

        <h2>Tool Categories</h2>

        <p>OpenClaw's tools fall into several categories, each with its own execution characteristics:</p>

        <h3>File Operations</h3>

        <p>The core coding tools that let agents read, write, and edit files:</p>

        <ul>
          <li><strong>read</strong> — read file contents with offset/limit support for large files; handles both text files and images (images are sent as attachments to the LLM)</li>
          <li><strong>write</strong> — create or overwrite files, automatically creating parent directories</li>
          <li><strong>edit</strong> — surgical text replacement: find an exact string in a file and replace it with new text</li>
        </ul>

        <p>File tools are sandboxed to the agent's workspace directory. Path traversal outside the workspace is blocked. Read operations support pagination for large files — the agent can read a file in chunks rather than loading the entire thing into context.</p>

        <h3>Shell Execution</h3>

        <p>The <code>exec</code> tool runs shell commands and the <code>process</code> tool manages long-running processes:</p>

        <ul>
          <li><strong>exec</strong> — execute a shell command with configurable timeout, working directory, environment variables, and background mode. Supports PTY mode for interactive terminal applications.</li>
          <li><strong>process</strong> — manage background processes: list active sessions, poll for output, write stdin, send keystrokes, kill processes. Essential for long-running development servers, test suites, and interactive CLIs.</li>
        </ul>

        <p>Shell execution includes several safety mechanisms:</p>

        <ul>
          <li><strong>Security modes</strong> — <code>deny</code> (no exec), <code>allowlist</code> (only pre-approved commands), or <code>full</code> (unrestricted)</li>
          <li><strong>Exec approval</strong> — commands can require human approval before execution, with a configurable timeout</li>
          <li><strong>Ask mode</strong> — the agent can be configured to ask the user before running potentially destructive commands</li>
          <li><strong>Path sanitization</strong> — PATH is controlled and safe binaries are resolved explicitly</li>
          <li><strong>Output truncation</strong> — command output is truncated to a configurable maximum to prevent context overflow</li>
          <li><strong>Timeout enforcement</strong> — commands are killed after their timeout expires</li>
        </ul>

        <h3>Browser Automation</h3>

        <p>The browser tool provides full web automation capabilities via Playwright:</p>

        <ul>
          <li><strong>Navigation</strong> — open URLs, navigate between pages</li>
          <li><strong>Snapshots</strong> — capture the accessibility tree (structured page content) for the LLM to reason about</li>
          <li><strong>Screenshots</strong> — capture visual screenshots when the accessibility tree is insufficient</li>
          <li><strong>Actions</strong> — click elements, type text, press keys, hover, drag, select options, fill forms</li>
          <li><strong>Tabs</strong> — open, close, switch between, and list browser tabs</li>
          <li><strong>PDF generation</strong> — convert pages to PDF</li>
          <li><strong>Console access</strong> — read browser console output for debugging</li>
        </ul>

        <p>The browser can run in multiple profiles — an isolated OpenClaw-managed browser, or via Chrome Extension relay that connects to the user's existing Chrome tabs. Browser sessions persist across tool calls within a run, so the agent can navigate, interact, and observe across multiple steps.</p>

        <h3>Web Operations</h3>

        <ul>
          <li><strong>web_search</strong> — search the web using Brave Search API, returning titles, URLs, and snippets</li>
          <li><strong>web_fetch</strong> — fetch and extract readable content from a URL, converting HTML to markdown</li>
        </ul>

        <h3>Messaging &amp; Channel Tools</h3>

        <ul>
          <li><strong>message</strong> — send messages, manage channels, create threads, upload emoji, manage polls, and perform other channel operations on the current platform</li>
          <li><strong>tts</strong> — convert text to speech for voice message delivery</li>
        </ul>

        <h3>System &amp; Agent Tools</h3>

        <ul>
          <li><strong>OpenClaw tools</strong> — session management, subagent spawning, agent coordination, Gateway control</li>
          <li><strong>Node tools</strong> — interact with paired mobile devices: camera, location, notifications, screen recording</li>
          <li><strong>Canvas tools</strong> — present visual content to users via rendered HTML/React canvases</li>
          <li><strong>Memory tools</strong> — search and retrieve from the agent's long-term memory files</li>
          <li><strong>Image analysis</strong> — analyze images using a vision model</li>
        </ul>

        <h2>Sandbox Architecture</h2>

        <p>For enhanced isolation, OpenClaw supports running tool execution inside Docker containers (sandboxes). The sandbox system provides:</p>

        <ul>
          <li><strong>Workspace mounting</strong> — the agent's workspace directory is mounted into the container, so file operations work as expected</li>
          <li><strong>Network isolation</strong> — sandboxed commands can be restricted from network access</li>
          <li><strong>Resource limits</strong> — CPU, memory, and disk usage can be constrained</li>
          <li><strong>Disposability</strong> — containers can be pruned and recreated without affecting the host system</li>
          <li><strong>Browser sandboxing</strong> — browser automation can run in a separate container with its own display server</li>
        </ul>

        <p>Sandbox configuration is per-agent: one agent might run fully sandboxed while another runs directly on the host, depending on the trust level and use case.</p>

        <h2 id="tool-policy">Tool Policy &amp; Filtering</h2>

        <p>Not every tool is available to every agent in every context. The Execution Layer applies policy-based filtering:</p>

        <ul>
          <li><strong>Tool allowlists</strong> — agents can be restricted to a specific set of tools</li>
          <li><strong>Owner-only tools</strong> — certain tools (like Gateway management) are restricted to the system owner</li>
          <li><strong>Subagent policies</strong> — spawned subagents can inherit or override the parent's tool policy</li>
          <li><strong>Plugin tools</strong> — external plugins can register additional tools that are subject to the same policy system</li>
          <li><strong>Per-channel tool visibility</strong> — some tools may only be available on certain channels</li>
        </ul>

        <h2>How It Works in Code</h2>

        <p>Tool implementations are distributed across several modules in <code>src/agents/</code>:</p>

        <ul>
          <li><code>bash-tools.exec.ts</code> — the exec tool: command execution with approval, sandboxing, and output management</li>
          <li><code>bash-tools.process.ts</code> — the process tool: background process management (list, poll, write, send-keys, kill)</li>
          <li><code>pi-tools.read.ts</code> — file operation tools (read, write, edit) with sandboxing support</li>
          <li><code>channel-tools.ts</code> — messaging and channel management tools</li>
          <li><code>openclaw-tools.ts</code> — session management, subagent spawning, and Gateway tools</li>
          <li><code>tools/</code> — additional tool implementations (nodes, browser delegation, etc.)</li>
        </ul>

        <p>The browser automation system lives in <code>src/browser/</code> with its own server, Playwright session management, CDP integration, and Chrome extension relay.</p>

        <p>Tool schemas and policy filtering are handled by <code>pi-tools.ts</code> (catalog construction), <code>pi-tools.schema.ts</code> (schema normalization for different LLM providers), and <code>tool-policy.ts</code> (allowlist/blocklist resolution).</p>

        <div class="callout tip">
          <div class="callout-title">Everything Is a Tool</div>
          <p>One of OpenClaw's key design decisions is that nearly every capability is exposed as a tool. The LLM doesn't have special built-in abilities — it can only reason about text and request tool calls. This uniformity means adding new capabilities is straightforward: implement a tool function, define its schema, register it in the catalog, and the agent can immediately use it. The same mechanism that lets an agent read a file also lets it send a Discord message, snap a photo on your phone, or spawn a subagent to handle a complex task.</p>
        </div>

        <div class="action-section">
          <h2>Next</h2>
          <ul>
            <li><a href="/architecture">Architecture Overview</a> — see how all five components connect</li>
            <li><a href="/architecture/agent-runner">Agent Runner</a> — what decides which tools to call</li>
            <li><a href="/architecture/channel-adapters">Channel Adapters</a> — start from the beginning of the pipeline</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
