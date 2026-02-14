import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agent Runner — OpenClaw Architecture',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/architecture">Architecture</a>
          <span class="separator">/</span>
          Agent Runner
        </div>

        <h1>Agent Runner (Agent Loop)</h1>

        <p>The Agent Runner is where the intelligence lives. It is the component that orchestrates the full reasoning cycle: assembling context, calling the LLM, interpreting its response, executing any requested tool calls, feeding results back, and repeating until the agent produces a final answer. This iterative loop — reason, act, observe, repeat — is what transforms a raw language model into a capable assistant that can research, code, browse the web, and manage your life.</p>

        <h2>The Agent Loop</h2>

        <p>When the Lane Queue dequeues a message for processing, the Agent Runner takes over. Here is what happens in each cycle of the loop:</p>

        <ol class="steps">
          <li>
            <strong>Build context.</strong> The Runner assembles everything the LLM needs to generate a response:
            <ul>
              <li><em>System prompt</em> — the agent's identity, instructions, available tools, workspace context, runtime information, and behavioral rules</li>
              <li><em>Conversation history</em> — previous messages in this session, loaded from the transcript file</li>
              <li><em>Bootstrap files</em> — workspace files like AGENTS.md, TOOLS.md, SOUL.md, and memory files that provide the agent's persistent context</li>
              <li><em>User message</em> — the new inbound message that triggered this run</li>
            </ul>
          </li>
          <li>
            <strong>Call the LLM.</strong> The assembled messages are sent to the configured language model (e.g., Claude, GPT-4, Gemini) via its API. The model receives the full context and produces a response — which may be plain text, a tool call, or a combination.
          </li>
          <li>
            <strong>Handle the response.</strong> If the model returns plain text, the loop ends and the text becomes the agent's reply. If the model returns one or more tool calls, the Runner proceeds to step 4.
          </li>
          <li>
            <strong>Execute tool calls.</strong> Each tool call is dispatched to the Execution Layer. The tool's function runs, produces a result (success or error), and the result is captured as a structured tool response.
          </li>
          <li>
            <strong>Feed results back.</strong> The tool results are appended to the conversation as tool response messages, and the loop returns to step 2 — the LLM sees what the tools returned and decides what to do next.
          </li>
          <li>
            <strong>Repeat until complete.</strong> The loop continues until the model produces a final text response without requesting any more tool calls. Complex tasks might loop dozens of times (read a file, edit it, run a test, read the output, fix an error, run again…).
          </li>
        </ol>

        <h2>System Prompt Assembly</h2>

        <p>The system prompt is one of the most critical pieces of the Agent Runner. It is dynamically assembled for each run based on the agent's configuration and the current context. It includes:</p>

        <ul>
          <li><strong>Identity</strong> — the agent's name, persona description, and channel-specific identity if configured</li>
          <li><strong>Tool catalog</strong> — descriptions and schemas for every tool the agent can use in this session</li>
          <li><strong>Workspace context</strong> — bootstrap files (AGENTS.md, SOUL.md, USER.md, TOOLS.md, memory files) injected directly into the prompt</li>
          <li><strong>Runtime info</strong> — current date/time, timezone, OS details, model name, available capabilities, channel type</li>
          <li><strong>Skills</strong> — available skill descriptions with instructions for the agent to read the relevant SKILL.md before using a skill</li>
          <li><strong>Memory</strong> — instructions for using memory search and retrieval tools</li>
          <li><strong>Behavioral rules</strong> — reply formatting, silent reply tokens, heartbeat behavior, reply tags, messaging guidelines</li>
          <li><strong>Subagent context</strong> — if this is a subagent session, additional context about the parent task and reporting instructions</li>
        </ul>

        <p>The prompt mode varies: main agents get the full prompt with all sections; subagents get a minimal prompt focused on their specific task; and special modes like "none" provide just a basic identity line.</p>

        <h2>Model Selection &amp; Failover</h2>

        <p>The Agent Runner supports sophisticated model management:</p>

        <ul>
          <li><strong>Per-agent model config</strong> — different agents can use different models (Ember on Sonnet, Architect on Opus)</li>
          <li><strong>Inline model switching</strong> — users can switch models mid-conversation using directives like <code>/model opus</code></li>
          <li><strong>Auth profile rotation</strong> — multiple API keys for the same provider, with automatic rotation on rate limits</li>
          <li><strong>Automatic failover</strong> — if a model call fails (rate limit, timeout, context overflow), the Runner retries with fallback models or providers</li>
          <li><strong>Thinking/reasoning levels</strong> — configurable reasoning depth (off, low, medium, high) that maps to provider-specific extended thinking features</li>
          <li><strong>Context window management</strong> — automatic compaction when conversation history approaches the model's context limit</li>
        </ul>

        <h2>Streaming &amp; Block Replies</h2>

        <p>The Agent Runner streams responses in real time. As the LLM generates tokens, they are:</p>

        <ul>
          <li><strong>Chunked into paragraphs</strong> — the block chunker accumulates tokens and flushes complete paragraphs to the Channel Adapter, so users see responses appearing in natural-feeling blocks rather than character by character</li>
          <li><strong>Filtered for thinking tags</strong> — reasoning/thinking content (from models like Claude with extended thinking) is handled according to the configured reasoning mode: suppressed, streamed separately, or included in the reply</li>
          <li><strong>Checked for reply directives</strong> — inline directives like model switches, reply-to tags, and status commands are parsed and handled during streaming</li>
          <li><strong>Tracked for tool calls</strong> — tool call delimiters are detected in the stream so tool execution can begin as soon as the model finishes specifying the call</li>
        </ul>

        <h2>Conversation History Management</h2>

        <p>Each session maintains a transcript file on disk. The Agent Runner manages this transcript across runs:</p>

        <ul>
          <li><strong>History limiting</strong> — only the most recent N turns are included in the LLM context, configurable per agent and per channel</li>
          <li><strong>Compaction</strong> — when the transcript grows too large for the context window, the system summarizes older messages and replaces them with a compact summary, preserving key context while freeing token space</li>
          <li><strong>Tool result truncation</strong> — oversized tool outputs in the history are automatically truncated to prevent context overflow on subsequent runs</li>
          <li><strong>Transcript repair</strong> — malformed transcripts (from crashes or interrupted writes) are automatically detected and repaired on load</li>
        </ul>

        <h2>How It Works in Code</h2>

        <p>The Agent Runner is implemented across several key files in <code>src/agents/</code>:</p>

        <ul>
          <li><code>pi-embedded-runner/run.ts</code> — the main entry point: <code>runEmbeddedPiAgent()</code> orchestrates the full run lifecycle including auth resolution, failover, and context assembly</li>
          <li><code>pi-embedded-runner/runs.ts</code> — manages the registry of active runs, message queueing to active sessions, and abort handling</li>
          <li><code>pi-embedded-subscribe.ts</code> — the streaming subscription layer that processes LLM output events (message chunks, tool calls, reasoning tokens) and dispatches them to the appropriate handlers</li>
          <li><code>pi-embedded-subscribe.handlers.ts</code> — event handlers for the six LLM event types: message_start, message_update, message_end, tool_execution_start, tool_execution_update, tool_execution_end</li>
          <li><code>system-prompt.ts</code> — the system prompt builder that assembles all context sections</li>
          <li><code>pi-tools.ts</code> — tool catalog construction: which tools are available, their schemas, and their policy-based filtering</li>
          <li><code>compaction.ts</code> — conversation compaction logic for managing context window limits</li>
        </ul>

        <div class="callout tip">
          <div class="callout-title">The Loop Is the Agent</div>
          <p>An LLM by itself is just a text-completion engine. The Agent Runner is what transforms it into an agent — the ability to observe a situation, decide on an action, execute it, observe the result, and decide again. This loop is the fundamental mechanism that enables complex, multi-step tasks like "research this topic, write a report, and email it to me." Each step requires the model to see what happened in the previous step and decide what to do next.</p>
        </div>

        <div class="action-section">
          <h2>Next</h2>
          <ul>
            <li><a href="/architecture/execution-layer">Execution Layer</a> — how tool calls are actually executed</li>
            <li><a href="/architecture/lane-queue">Lane Queue</a> — what happens before the Runner gets the message</li>
            <li><a href="/architecture">Architecture Overview</a> — see how all five components connect</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
