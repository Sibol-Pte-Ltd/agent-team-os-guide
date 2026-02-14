import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OpenClaw Architecture — Agent Team OS Guide',
}

const content = `<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          Architecture
        </div>

        <h1>OpenClaw Architecture</h1>

        <p>OpenClaw is the runtime engine that powers Agent Team OS. It is the daemon process that receives your messages, reasons about them, executes actions, and sends replies back — all while managing concurrency, security, and state isolation across every conversation you have with every agent, on every platform.</p>

        <p>Understanding how OpenClaw works helps you reason about why things happen the way they do — why an agent pauses before replying, why two conversations never interfere with each other, and why the system feels like a single coherent assistant even though it spans Discord, WhatsApp, Telegram, and more.</p>

        <h2>The Five Components</h2>

        <p>OpenClaw's architecture is a pipeline. A message enters from one end, flows through a series of components, and produces a reply at the other end. Each component has a single, well-defined responsibility:</p>

        <div class="arch-pipeline">
          <div class="arch-stage">
            <div class="arch-stage-number">1</div>
            <div class="arch-stage-content">
              <h3><a href="/architecture/channel-adapters">Channel Adapters</a></h3>
              <p>Standardize messages from chat platforms (WhatsApp, Telegram, Discord, Slack, Signal, iMessage, IRC, Google Chat) into a unified internal format. Every platform speaks its own protocol; Channel Adapters translate them into a common language so the rest of the system doesn't need to care where a message came from.</p>
            </div>
          </div>

          <div class="arch-connector">↓</div>

          <div class="arch-stage">
            <div class="arch-stage-number">2</div>
            <div class="arch-stage-content">
              <h3><a href="/architecture/gateway">Gateway</a></h3>
              <p>The central server that routes each incoming message to the correct session, manages authentication, coordinates channel monitors, and provides the WebSocket and HTTP interfaces that everything connects through. The Gateway is the nerve center — it knows about every active session, every connected channel, and every running agent.</p>
            </div>
          </div>

          <div class="arch-connector">↓</div>

          <div class="arch-stage">
            <div class="arch-stage-number">3</div>
            <div class="arch-stage-content">
              <h3><a href="/architecture/lane-queue">Lane Queue</a></h3>
              <p>Executes tasks serially within each session lane to prevent race conditions and state drift. When two messages arrive for the same session simultaneously, the Lane Queue ensures they are processed one at a time, in order. Different sessions run in parallel; within a session, everything is sequential.</p>
            </div>
          </div>

          <div class="arch-connector">↓</div>

          <div class="arch-stage">
            <div class="arch-stage-number">4</div>
            <div class="arch-stage-content">
              <h3><a href="/architecture/agent-runner">Agent Runner</a></h3>
              <p>Orchestrates the reasoning loop — assembles the system prompt and chat history, calls the LLM, handles tool use, and feeds results back until the agent has produced a complete response. This is where the AI "thinks" — the iterative cycle of reasoning, acting, and observing that makes agents capable of complex multi-step tasks.</p>
            </div>
          </div>

          <div class="arch-connector">↓</div>

          <div class="arch-stage">
            <div class="arch-stage-number">5</div>
            <div class="arch-stage-content">
              <h3><a href="/architecture/execution-layer">Execution Layer</a></h3>
              <p>Runs shell commands, file operations, and browser automation in a controlled environment and returns structured outputs. When the agent decides to read a file, execute a script, or navigate a web page, the Execution Layer carries out that action safely and reports back what happened.</p>
            </div>
          </div>
        </div>

        <h2>How a Message Flows Through the System</h2>

        <p>Here is what happens when you send a message to an agent — say, you type "What's on my calendar today?" in Discord:</p>

        <ol class="steps">
          <li><strong>Channel Adapter receives the message.</strong> The Discord monitor detects your message via the Discord Bot API. It extracts the text, identifies you as the sender, resolves the conversation thread, and packages everything into a standardized inbound message format. Platform-specific details like Discord's message IDs, guild context, and attachment formats are normalized.</li>
          <li><strong>Gateway routes it to a session.</strong> The Gateway receives the normalized message and determines which agent session it belongs to, based on the channel, your identity, and the conversation context. It resolves the session key (e.g., <code>agent:ember:discord:channel:12345</code>) and prepares the message for processing.</li>
          <li><strong>Lane Queue serializes execution.</strong> The message is enqueued in the session's dedicated lane. If another message for this session is already being processed, yours waits. If you have a separate conversation on WhatsApp, that runs independently in its own lane. The queue ensures your Discord conversation's state is never corrupted by concurrent access.</li>
          <li><strong>Agent Runner orchestrates the response.</strong> Once the lane dequeues your message, the Agent Runner builds the full context: system prompt, workspace files, conversation history, and available tools. It calls the LLM, which might decide to use a tool (like checking a calendar). If so, the Runner executes the tool, feeds the result back to the LLM, and repeats until the model produces a final text response.</li>
          <li><strong>Execution Layer handles tool calls.</strong> When the LLM requests a tool action — say, running a shell command to check your calendar API — the Execution Layer executes it in a controlled environment. The command runs with appropriate permissions, the output is captured and truncated if necessary, and the structured result is returned to the Agent Runner for the next reasoning step.</li>
          <li><strong>Reply flows back out.</strong> The final response text travels back through the Gateway and Channel Adapter, which formats it appropriately for Discord (applying markdown, respecting character limits, handling threading) and sends it as a reply in your Discord channel.</li>
        </ol>

        <div class="callout tip">
          <div class="callout-title">Why This Matters</div>
          <p>This architecture means you can message the same agent from Discord and WhatsApp simultaneously without conflicts. Each conversation gets its own isolated session lane. The agent sees the correct history for each conversation, tools execute without stepping on each other, and replies go back to the right place. The system is designed to be invisible — it just works.</p>
        </div>

        <h2>Key Design Principles</h2>

        <ul>
          <li><strong>Platform agnosticism.</strong> The core logic knows nothing about Discord, WhatsApp, or any specific platform. Channel Adapters abstract that away entirely. Adding a new platform means writing a new adapter — the rest of the system stays unchanged.</li>
          <li><strong>Session isolation.</strong> Every conversation gets its own lane. State never leaks between sessions. Two users talking to the same agent cannot interfere with each other.</li>
          <li><strong>Serial within, parallel across.</strong> Messages within a session are processed sequentially (preventing state corruption). Messages across different sessions are processed in parallel (keeping things responsive).</li>
          <li><strong>Graceful degradation.</strong> If an LLM call fails, the system retries with fallback models. If a tool times out, it returns a structured error. If a channel disconnects, messages queue until it reconnects.</li>
          <li><strong>Everything is a tool.</strong> File reads, shell commands, web searches, browser automation, and even inter-agent communication are all exposed as tools the LLM can call. The Agent Runner doesn't need special logic for each capability — it just orchestrates tool calls.</li>
        </ul>

        <div class="action-section">
          <h2>Explore Each Component</h2>
          <ul>
            <li><a href="/architecture/channel-adapters">Channel Adapters</a> — how chat platforms are unified</li>
            <li><a href="/architecture/gateway">Gateway</a> — the central routing and coordination server</li>
            <li><a href="/architecture/lane-queue">Lane Queue</a> — concurrency isolation and serial execution</li>
            <li><a href="/architecture/agent-runner">Agent Runner</a> — the LLM reasoning loop</li>
            <li><a href="/architecture/execution-layer">Execution Layer</a> — tool execution in a controlled environment</li>
          </ul>
        </div>`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
