1:"$Sreact.fragment"
2:I[9766,[],""]
3:I[8924,[],""]
4:I[3370,["7340","static/chunks/app/(authenticated)/layout-8a56e70ab4050a46.js"],"default"]
8:I[7150,[],""]
:HL["/_next/static/css/56998b7e09014914.css","style"]
5:T1f0d,<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/architecture">Architecture</a>
          <span class="separator">/</span>
          Lane Queue
        </div>

        <h1>Lane Queue</h1>

        <p>The Lane Queue is OpenClaw's concurrency management system. It answers a deceptively simple question: when two messages arrive at the same time, what happens? The answer is central to the system's reliability — without proper serialization, conversations would corrupt each other's state, tool executions would interleave unpredictably, and the entire system would become unreliable.</p>

        <p>The Lane Queue solves this with a straightforward principle: <strong>serial within a session, parallel across sessions.</strong></p>

        <h2>The Problem It Solves</h2>

        <p>Consider what happens when you send two messages in quick succession to the same agent on Discord:</p>

        <ol>
          <li>Message 1: "Check my email for anything urgent"</li>
          <li>Message 2: "Also, what's the weather in Berlin?"</li>
        </ol>

        <p>Without serialization, both messages would be processed simultaneously. Both would read the same conversation history. Both would append to the session transcript at the same time. The agent might try to execute shell commands from both runs concurrently, producing interleaved output. The conversation history would become corrupted — replies might reference the wrong context, tool results might be attributed to the wrong request.</p>

        <p>The Lane Queue prevents this by ensuring Message 2 waits until Message 1 has fully completed — including all LLM calls, tool executions, and transcript updates — before processing begins.</p>

        <h2>How Lanes Work</h2>

        <p>A <strong>lane</strong> is a named serial queue. Each lane processes tasks one at a time (or up to a configurable concurrency limit). Different lanes operate independently and in parallel.</p>

        <p>OpenClaw uses four types of lanes:</p>

        <table class="ref-table">
          <thead>
            <tr>
              <th>Lane</th>
              <th>Purpose</th>
              <th>Default Concurrency</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Main</strong></td><td>Primary message processing for user conversations</td><td>Configurable (typically 1–4)</td></tr>
            <tr><td><strong>Cron</strong></td><td>Scheduled task execution (heartbeats, reports)</td><td>1</td></tr>
            <tr><td><strong>Subagent</strong></td><td>Subagent spawning and execution</td><td>Configurable</td></tr>
            <tr><td><strong>Nested</strong></td><td>Nested agent invocations within a run</td><td>1</td></tr>
          </tbody>
        </table>

        <p>Within each lane type, individual sessions get their own sub-lane. When a message arrives for session <code>agent:ember:discord:dm:12345</code>, it is enqueued in that session's specific lane: <code>session:agent:ember:discord:dm:12345</code>. A different session's messages go to a different lane and run in parallel.</p>

        <h2>Queuing and Draining</h2>

        <p>When a task is enqueued in a lane, here is what happens:</p>

        <ol class="steps">
          <li><strong>Enqueue.</strong> The task (a function that returns a Promise) is added to the lane's queue along with timing metadata. The queue depth and wait position are logged for diagnostics.</li>
          <li><strong>Check capacity.</strong> If the number of active tasks in the lane is below the concurrency limit, the task starts immediately. Otherwise, it waits.</li>
          <li><strong>Execute.</strong> When the task reaches the front of the queue and capacity is available, it begins execution. The lane tracks it as an active task.</li>
          <li><strong>Complete.</strong> When the task finishes (success or error), it is removed from the active set and the queue drains the next waiting task, if any.</li>
          <li><strong>Warning.</strong> If a task waits longer than a configurable threshold before starting, a diagnostic warning is emitted. This helps identify bottlenecks — for example, a particularly slow agent run blocking subsequent messages.</li>
        </ol>

        <h2>Session-Level Isolation</h2>

        <p>The key insight is that <em>session lanes are named after their session key</em>. This means:</p>

        <ul>
          <li>Your Discord DM with Ember (<code>session:agent:ember:discord:dm:you</code>) and your WhatsApp chat with Ember (<code>session:agent:ember:whatsapp:dm:you</code>) are separate lanes — they run in parallel.</li>
          <li>Your conversation and another user's conversation with the same agent are separate lanes — they never interfere.</li>
          <li>A cron job (heartbeat check) runs in the <code>cron</code> lane — it doesn't block your conversations.</li>
          <li>A subagent spawned by Ember runs in the <code>subagent</code> lane — it has its own concurrency budget.</li>
        </ul>

        <h2>Lane Clearing</h2>

        <p>In some situations, a lane needs to be cleared — all pending tasks are rejected. This happens during:</p>

        <ul>
          <li><strong>Session reset</strong> — when a conversation is reset, queued messages for that session are discarded</li>
          <li><strong>Gateway shutdown</strong> — pending tasks are rejected gracefully during shutdown</li>
          <li><strong>Configuration reload</strong> — when concurrency limits change, the lane state is updated</li>
        </ul>

        <p>Cleared tasks receive a <code>CommandLaneClearedError</code>, which callers can catch and handle appropriately (typically by silently dropping the work).</p>

        <h2>How It Works in Code</h2>

        <p>The Lane Queue is implemented in two key files:</p>

        <ul>
          <li><code>src/process/lanes.ts</code> — defines the <code>CommandLane</code> enum with the four lane types: <code>Main</code>, <code>Cron</code>, <code>Subagent</code>, <code>Nested</code></li>
          <li><code>src/process/command-queue.ts</code> — the queue implementation itself: <code>enqueueCommandInLane()</code> for adding tasks, <code>setCommandLaneConcurrency()</code> for configuring limits, and the internal drain loop that processes queued work</li>
        </ul>

        <p>Session-specific lanes are created dynamically via <code>src/agents/pi-embedded-runner/lanes.ts</code>, which provides <code>resolveSessionLane()</code> and <code>resolveEmbeddedSessionLane()</code> to map session keys to lane names.</p>

        <p>The Gateway applies lane concurrency at startup via <code>server-lanes.ts</code>, reading limits from the configuration file and applying them to each lane type.</p>

        <div class="callout tip">
          <div class="callout-title">Why Not Just Use a Database Lock?</div>
          <p>OpenClaw runs as a single Node.js process, so traditional database-level locking would be overkill. The in-process queue is fast (no network round-trips), simple (just a Map of arrays), and sufficient (there's only one process to coordinate). This is a deliberate architectural choice: the single-process design makes concurrency management trivial compared to distributed systems, at the cost of scaling to a single machine — which is exactly the right tradeoff for a personal AI assistant.</p>
        </div>

        <div class="action-section">
          <h2>Next</h2>
          <ul>
            <li><a href="/architecture/agent-runner">Agent Runner</a> — what happens when a message is dequeued and processed</li>
            <li><a href="/architecture/gateway">Gateway</a> — the server that manages lane configuration</li>
            <li><a href="/architecture">Architecture Overview</a> — see how all five components connect</li>
          </ul>
        </div>0:{"P":null,"b":"vzbdtBP5U_venz5tN8oS4","p":"","c":["","architecture","lane-queue"],"i":false,"f":[[["",{"children":["(authenticated)",{"children":["architecture",{"children":["lane-queue",{"children":["__PAGE__",{}]}]}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/56998b7e09014914.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]]}],{"children":["(authenticated)",["$","$1","c",{"children":[null,["$","body",null,{"children":[["$","input",null,{"type":"checkbox","id":"menu-toggle","className":"menu-toggle"}],["$","label",null,{"htmlFor":"menu-toggle","className":"hamburger","aria-label":"Toggle navigation","children":"☰"}],["$","label",null,{"htmlFor":"menu-toggle","className":"overlay"}],["$","div",null,{"className":"site-wrapper","children":[["$","$L4",null,{}],["$","main",null,{"className":"main-content","children":["$","div",null,{"className":"content-wrapper","children":["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:style","children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:1:props:style","children":404}],["$","div",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:2:props:style","children":["$","h2",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:2:props:children:props:style","children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]}]]}]]}]]}],{"children":["architecture",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["lane-queue",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["__PAGE__",["$","$1","c",{"children":[["$","div",null,{"dangerouslySetInnerHTML":{"__html":"$5"}}],null,"$L6"]}],{},null,false]},null,false]},null,false]},null,false]},null,false],"$L7",false]],"m":"$undefined","G":["$8",[]],"s":false,"S":true}
9:I[4431,[],"OutletBoundary"]
b:I[5278,[],"AsyncMetadataOutlet"]
d:I[4431,[],"ViewportBoundary"]
f:I[4431,[],"MetadataBoundary"]
10:"$Sreact.suspense"
6:["$","$L9",null,{"children":["$La",["$","$Lb",null,{"promise":"$@c"}]]}]
7:["$","$1","h",{"children":[null,[["$","$Ld",null,{"children":"$Le"}],null],["$","$Lf",null,{"children":["$","div",null,{"hidden":true,"children":["$","$10",null,{"fallback":null,"children":"$L11"}]}]}]]}]
e:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
a:null
c:{"metadata":[["$","title","0",{"children":"Lane Queue — OpenClaw Architecture"}],["$","meta","1",{"name":"description","content":"Your personal AI agent team, working together to keep your life organized."}]],"error":null,"digest":"$undefined"}
11:"$c:metadata"
