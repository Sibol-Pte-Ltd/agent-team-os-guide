1:"$Sreact.fragment"
2:I[9766,[],""]
3:I[8924,[],""]
4:I[3370,["7340","static/chunks/app/(authenticated)/layout-8a56e70ab4050a46.js"],"default"]
8:I[7150,[],""]
:HL["/_next/static/css/56998b7e09014914.css","style"]
5:T1d39,<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/architecture">Architecture</a>
          <span class="separator">/</span>
          Channel Adapters
        </div>

        <h1>Channel Adapters</h1>

        <p>Channel Adapters are the outermost layer of OpenClaw. They sit between the outside world — chat platforms like Discord, WhatsApp, Telegram, Slack, Signal, iMessage, IRC, and Google Chat — and the internal system. Their job is translation: take whatever format a platform uses for messages and convert it into OpenClaw's unified internal representation, and vice versa for outgoing replies.</p>

        <p>Without Channel Adapters, every component downstream would need to understand the specifics of every platform. With them, the Gateway, Lane Queue, and Agent Runner can operate on a clean, consistent message format regardless of whether the message came from a Discord guild, a WhatsApp group, or an IRC channel.</p>

        <h2>Supported Channels</h2>

        <p>OpenClaw ships with adapters for eight chat platforms. Each is implemented as a channel plugin with a monitor (for receiving messages), a send layer (for delivering replies), and platform-specific configuration:</p>

        <table class="ref-table">
          <thead>
            <tr>
              <th>Channel</th>
              <th>Protocol</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Telegram</strong></td><td>Bot API</td><td>Simplest setup — register a bot with @BotFather and go.</td></tr>
            <tr><td><strong>WhatsApp</strong></td><td>QR link (Web)</td><td>Uses your own number via WhatsApp Web bridge. Separate phone + eSIM recommended.</td></tr>
            <tr><td><strong>Discord</strong></td><td>Bot API</td><td>Well-supported. Handles guilds, threads, DMs, reactions, slash commands.</td></tr>
            <tr><td><strong>Slack</strong></td><td>Socket Mode</td><td>Real-time event streaming. Supports threads, reactions, file uploads.</td></tr>
            <tr><td><strong>Signal</strong></td><td>signal-cli (REST)</td><td>Linked device via signal-cli. More setup required.</td></tr>
            <tr><td><strong>iMessage</strong></td><td>imsg bridge</td><td>macOS only. Work in progress.</td></tr>
            <tr><td><strong>IRC</strong></td><td>Server + Nick</td><td>Classic IRC networks with DM/channel routing and pairing controls.</td></tr>
            <tr><td><strong>Google Chat</strong></td><td>Chat API</td><td>Google Workspace Chat app with HTTP webhook.</td></tr>
          </tbody>
        </table>

        <h2>What an Adapter Does</h2>

        <p>Each Channel Adapter has three main responsibilities:</p>

        <h3>1. Monitor: Receiving Messages</h3>

        <p>The monitor connects to the platform's API (webhooks, WebSocket, polling — whatever the platform provides) and listens for incoming messages. When a message arrives, the monitor:</p>

        <ul>
          <li><strong>Identifies the sender</strong> — who sent the message, using the platform's user ID system</li>
          <li><strong>Resolves the conversation</strong> — which channel, thread, group, or DM the message belongs to</li>
          <li><strong>Extracts the content</strong> — text, media attachments, reply context, reactions</li>
          <li><strong>Determines if the agent should respond</strong> — based on mention detection, allowlist rules, and activation policies</li>
          <li><strong>Normalizes everything</strong> into a <code>MsgContext</code> — the unified inbound message format that the rest of the system operates on</li>
        </ul>

        <p>The normalized context includes fields like sender identity, conversation label, raw text, media URLs, reply references, and channel-specific metadata. From this point forward, nothing in the pipeline needs to know whether the message came from Discord or WhatsApp.</p>

        <h3>2. Send: Delivering Replies</h3>

        <p>When the agent produces a response, the adapter's send layer translates it back into the platform's format:</p>

        <ul>
          <li><strong>Formatting</strong> — applying platform-appropriate markdown (Discord supports full markdown; WhatsApp uses a subset; IRC has no formatting)</li>
          <li><strong>Chunking</strong> — splitting long responses to fit platform character limits (Discord's 2000 chars, Telegram's 4096 chars, etc.)</li>
          <li><strong>Threading</strong> — placing replies in the correct thread, channel, or conversation</li>
          <li><strong>Attachments</strong> — converting files, images, and voice messages into the platform's media upload format</li>
          <li><strong>Reactions</strong> — translating emoji reactions to the platform's reaction system</li>
        </ul>

        <h3>3. Configuration: Platform-Specific Settings</h3>

        <p>Each channel has its own configuration section in the OpenClaw config file, controlling things like:</p>

        <ul>
          <li>API tokens and authentication credentials</li>
          <li>Which groups/guilds/channels the agent should listen in</li>
          <li>Whether mentions are required to trigger a response</li>
          <li>Allowlists and blocklists for senders</li>
          <li>Reply-to behavior and threading preferences</li>
        </ul>

        <h2>How It Works in Code</h2>

        <p>Channel Adapters are implemented as plugins in the <code>src/channels/plugins/</code> directory, with platform-specific logic in dedicated top-level directories (e.g., <code>src/discord/</code>, <code>src/telegram/</code>, <code>src/slack/</code>). The channel registry in <code>src/channels/registry.ts</code> maintains the list of supported channels and their metadata.</p>

        <p>Each channel plugin follows a consistent pattern:</p>

        <ul>
          <li>A <strong>monitor</strong> module that connects to the platform API and emits normalized inbound events</li>
          <li>A <strong>send</strong> module that accepts outbound messages and delivers them via the platform API</li>
          <li>A <strong>format</strong> module that handles platform-specific text formatting</li>
          <li>A <strong>targets</strong> module that resolves delivery targets (channels, users, threads)</li>
          <li>A <strong>threading</strong> module that manages conversation threading semantics</li>
        </ul>

        <p>The Gateway's channel manager (<code>server-channels.ts</code>) coordinates startup, shutdown, and lifecycle management for all active channel monitors.</p>

        <div class="callout tip">
          <div class="callout-title">Adding a New Channel</div>
          <p>Because Channel Adapters isolate all platform-specific logic, adding support for a new chat platform means implementing a new plugin that conforms to the channel interface — a monitor, a sender, and configuration handling. The Gateway, Lane Queue, Agent Runner, and Execution Layer require zero changes. This is the power of the adapter pattern.</p>
        </div>

        <div class="action-section">
          <h2>Next</h2>
          <ul>
            <li><a href="/architecture/gateway">Gateway</a> — how messages are routed after normalization</li>
            <li><a href="/architecture">Architecture Overview</a> — see how all five components connect</li>
          </ul>
        </div>0:{"P":null,"b":"vzbdtBP5U_venz5tN8oS4","p":"","c":["","architecture","channel-adapters"],"i":false,"f":[[["",{"children":["(authenticated)",{"children":["architecture",{"children":["channel-adapters",{"children":["__PAGE__",{}]}]}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/56998b7e09014914.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]]}],{"children":["(authenticated)",["$","$1","c",{"children":[null,["$","body",null,{"children":[["$","input",null,{"type":"checkbox","id":"menu-toggle","className":"menu-toggle"}],["$","label",null,{"htmlFor":"menu-toggle","className":"hamburger","aria-label":"Toggle navigation","children":"☰"}],["$","label",null,{"htmlFor":"menu-toggle","className":"overlay"}],["$","div",null,{"className":"site-wrapper","children":[["$","$L4",null,{}],["$","main",null,{"className":"main-content","children":["$","div",null,{"className":"content-wrapper","children":["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:style","children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:1:props:style","children":404}],["$","div",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:2:props:style","children":["$","h2",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:2:props:children:props:style","children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]}]]}]]}]]}],{"children":["architecture",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["channel-adapters",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["__PAGE__",["$","$1","c",{"children":[["$","div",null,{"dangerouslySetInnerHTML":{"__html":"$5"}}],null,"$L6"]}],{},null,false]},null,false]},null,false]},null,false]},null,false],"$L7",false]],"m":"$undefined","G":["$8",[]],"s":false,"S":true}
9:I[4431,[],"OutletBoundary"]
b:I[5278,[],"AsyncMetadataOutlet"]
d:I[4431,[],"ViewportBoundary"]
f:I[4431,[],"MetadataBoundary"]
10:"$Sreact.suspense"
6:["$","$L9",null,{"children":["$La",["$","$Lb",null,{"promise":"$@c"}]]}]
7:["$","$1","h",{"children":[null,[["$","$Ld",null,{"children":"$Le"}],null],["$","$Lf",null,{"children":["$","div",null,{"hidden":true,"children":["$","$10",null,{"fallback":null,"children":"$L11"}]}]}]]}]
e:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
a:null
c:{"metadata":[["$","title","0",{"children":"Channel Adapters — OpenClaw Architecture"}],["$","meta","1",{"name":"description","content":"Your personal AI agent team, working together to keep your life organized."}]],"error":null,"digest":"$undefined"}
11:"$c:metadata"
