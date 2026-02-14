1:"$Sreact.fragment"
2:I[9766,[],""]
3:I[8924,[],""]
4:I[3370,["7340","static/chunks/app/(authenticated)/layout-8a56e70ab4050a46.js"],"default"]
8:I[7150,[],""]
:HL["/_next/static/css/56998b7e09014914.css","style"]
5:T2c1f,<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/agents">Agents</a>
          <span class="separator">/</span>
          Architect
        </div>

        <h1>Architect — Strategic Analysis</h1>

        <p>Architect is the deep thinker of the agent team. While Ember coordinates, Scout researches, and Forge maintains infrastructure, Architect is reserved for work that demands nuanced judgment, complex synthesis, and high-quality output. He is the scalpel, not the hammer — deployed when the stakes justify the cost of Opus-level reasoning.</p>

        <div class="callout note">
          <div class="callout-title">Status</div>
          <p><strong>Trust Level:</strong> L2 — Act with Approval<br>
          <strong>Model:</strong> MiniMax M2.5 (default)<br>
          <em>Can be temporarily changed using /model command</em><br>
          <strong>Workspace:</strong> /home/ubuntu/agents/architect</p>
        </div>

        <h2>What Architect Does</h2>

        <p>Architect exists for cognitive depth. Most tasks in your system can be handled by faster, lighter agents — and they should be. Architect is called in when a task requires holding multiple variables in tension, evaluating complex trade-offs, and producing recommendations that hold up under scrutiny. Every token Architect uses costs more than the other agents, so every paragraph must advance understanding.</p>

        <p>His operating method follows a clear sequence: understand the full context, break down complexity into patterns and dependencies, synthesize disparate inputs into coherent frameworks, and lead with clear, actionable conclusions supported by evidence. When certainty is limited, Architect distinguishes what he knows from what he is inferring — he flags uncertainty rather than hiding it.</p>

        <h2>How Architect Runs</h2>

        <p>Architect's execution model is unique among the agents — he is primarily <strong>spawned as a subagent by Ember</strong> rather than running as a standalone conversational agent.</p>

        <h3>Spawned by Ember</h3>

        <p>When Ember identifies a task that warrants Opus-level reasoning — complex analysis, strategic planning, comprehensive reviews — she spawns Architect as a <strong>subagent</strong>. This creates an independent session in the <a href="/architecture/lane-queue">subagent lane</a>, with its own concurrency budget separate from Ember's main conversation. Architect receives a focused task description, works through it independently, and reports results back to Ember when finished.</p>

        <p>This means you typically interact with Architect <strong>indirectly through Ember</strong>. You tell Ember what you need analyzed, Ember spawns Architect, and the results flow back to your conversation. You can also message Architect directly if needed — the <a href="/architecture/gateway">Gateway</a> will create a standard session for the conversation.</p>

        <h3>Model</h3>

        <p>Architect uses <strong>MiniMax M2.5</strong> (<code>openrouter/minimax/minimax-m2.5</code>) as the default model. This was chosen as the standard model across all agents for consistency and cost-efficiency. The model is configured in the OpenClaw configuration file and invoked by the <a href="/architecture/agent-runner">Agent Runner</a>.</p>

        <p>If a task genuinely requires Opus-level reasoning, you can temporarily switch Architect to <strong>Claude Opus 4.6</strong> using the <code>/model openrouter/anthropic/claude-opus-4.6</code> command in your conversation. This override applies only for the current session and gives you access to the most powerful reasoning model when the stakes justify it.</p>

        <h3>Sessions and Isolation</h3>

        <p>Whether spawned as a subagent or messaged directly, Architect gets a fully isolated session. As a subagent, his session key follows the pattern <code>agent:subagent:subagent:&lt;uuid&gt;</code> and runs in the subagent lane. As a direct conversation, his session key follows the standard pattern (e.g., <code>agent:architect:discord:dm:987654321</code>) and runs in the main lane. In both cases, Architect does not share conversation history with other agents — he works with only the context provided to his session.</p>

        <h2>When to Call Architect</h2>

        <p>Architect is not for routine work. He is deployed specifically when the quality and depth of reasoning justify the cost. Call Architect when you need:</p>

        <ul>
          <li><strong>Comprehensive reviews and audits</strong> — Deep evaluation of systems, processes, or documents where missing something carries real consequences.</li>
          <li><strong>Implementation planning with complex trade-offs</strong> — When a project involves competing priorities, dependencies, and constraints that need to be weighed carefully before committing to a direction.</li>
          <li><strong>System architecture design</strong> — Designing or restructuring technical systems where the decisions are hard to reverse and the interaction effects are non-obvious.</li>
          <li><strong>Research synthesis requiring deep reasoning</strong> — When Scout has gathered raw information and you need it transformed into a coherent analysis with layered conclusions.</li>
          <li><strong>Tasks where errors are expensive</strong> — Any situation where getting it wrong means significant rework, wasted resources, or cascading problems downstream.</li>
        </ul>

        <div class="callout tip">
          <div class="callout-title">Tip</div>
          <p>A good rule of thumb: if the task can be described in a single sentence and has a straightforward answer, it probably does not need Architect. If you find yourself thinking "I need someone to really think this through," that is when Architect earns his keep.</p>
        </div>

        <h2>Key Capabilities</h2>

        <ul>
          <li><strong>Layered analysis</strong> — Breaks complex problems into component parts, evaluates each layer, and maps how they interact.</li>
          <li><strong>Trade-off evaluation</strong> — Holds multiple competing options in tension and evaluates them against explicit criteria rather than defaulting to the first viable solution.</li>
          <li><strong>Framework synthesis</strong> — Connects disparate inputs — research, requirements, constraints, preferences — into coherent decision frameworks.</li>
          <li><strong>Rigorous without verbose</strong> — Produces depth without padding. Every section advances understanding; nothing is filler.</li>
          <li><strong>Uncertainty flagging</strong> — Clearly separates conclusions backed by evidence from educated guesses, so you know where the solid ground is.</li>
          <li><strong>Edge case identification</strong> — Actively looks for the scenarios that break assumptions, the dependencies that are easy to miss, and the second-order effects that surface later.</li>
        </ul>

        <h2>Example Outputs</h2>

        <p>Here is what Architect typically produces:</p>

        <ul>
          <li><strong>Architecture decision records</strong> — Structured documents evaluating options for a technical decision, with clear recommendations and reasoning.</li>
          <li><strong>Implementation plans</strong> — Step-by-step plans for complex projects, including dependencies, risk factors, and rollback strategies.</li>
          <li><strong>Comprehensive audits</strong> — Thorough reviews of existing systems, configurations, or processes, identifying gaps, risks, and improvements.</li>
          <li><strong>Research synthesis documents</strong> — Analyses that take raw research (often from Scout) and produce layered conclusions with actionable recommendations.</li>
          <li><strong>Strategic recommendations</strong> — Position papers on significant decisions, weighing options against stated goals and constraints.</li>
        </ul>

        <h2>Trust Level</h2>

        <p>Architect operates at <strong>Trust Level 2 — Act with Approval</strong>. This means Architect can research, analyze, and prepare outputs independently — reading files, searching the web, running read-only commands, and writing within his own workspace all happen without needing your permission. However, Architect requires your explicit approval before taking any external action.</p>

        <p>Specifically, Architect needs approval before:</p>

        <ul>
          <li>Sending messages to Discord, email, or any external channel</li>
          <li>Modifying files outside his own workspace</li>
          <li>Making system configuration changes</li>
          <li>Any financial or public-facing action</li>
        </ul>

        <p>This trust level is a deliberate choice. Architect's value is in his analysis and recommendations — the thinking, not the doing. He produces the plan; you decide whether to execute it. This keeps the most powerful reasoning agent firmly under your oversight while still giving him the freedom to do deep, independent work.</p>

        <div class="callout success">
          <div class="callout-title">Trust Level Active</div>
          <p>Architect's L2 trust level is <strong>active and enforcing</strong>. All external actions are checked against the trust system. Architect's <code>SOUL.md</code> includes trust-specific instructions, so even when spawned as a subagent, he knows to check trust before acting externally.</p>
        </div>

        <div class="callout note">
          <div class="callout-title">Trust System vs. Tool Policy</div>
          <p>Architect's trust-level enforcement is separate from OpenClaw's <a href="/architecture/execution-layer#tool-policy">tool policy system</a>. OpenClaw's tool policy determines which tools Architect can <em>see</em> (e.g., which tools appear in his toolbox based on allowlists and security modes). The trust system adds a behavioral layer on top: even for tools Architect has access to, restricted actions require your approval at L2. These are complementary — one controls availability, the other controls approval workflows. See <a href="/agents/trust-levels#trust-vs-tool-policy">How Trust Relates to OpenClaw Tool Policy</a> for details.</p>
        </div>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li><a href="/agents/ember">Learn about Ember</a>, who coordinates Architect's deployment and spawns him as a subagent</li>
            <li><a href="/agents/scout">Meet Scout</a>, whose research often feeds into Architect's analysis</li>
            <li><a href="/agents/forge">Meet Forge</a>, the Infrastructure Specialist</li>
            <li><a href="/agents/trust-levels">Understand Trust Levels</a> and what Level 2 means in practice</li>
            <li><a href="/architecture/lane-queue">Lane Queue</a> — subagent lane where Architect typically runs</li>
            <li><a href="/architecture/agent-runner">Agent Runner</a> — the reasoning loop and model selection</li>
            <li><a href="/architecture/gateway">Gateway</a> — session routing and management</li>
          </ul>
        </div>0:{"P":null,"b":"vzbdtBP5U_venz5tN8oS4","p":"","c":["","agents","architect"],"i":false,"f":[[["",{"children":["(authenticated)",{"children":["agents",{"children":["architect",{"children":["__PAGE__",{}]}]}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/56998b7e09014914.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]]}],{"children":["(authenticated)",["$","$1","c",{"children":[null,["$","body",null,{"children":[["$","input",null,{"type":"checkbox","id":"menu-toggle","className":"menu-toggle"}],["$","label",null,{"htmlFor":"menu-toggle","className":"hamburger","aria-label":"Toggle navigation","children":"☰"}],["$","label",null,{"htmlFor":"menu-toggle","className":"overlay"}],["$","div",null,{"className":"site-wrapper","children":[["$","$L4",null,{}],["$","main",null,{"className":"main-content","children":["$","div",null,{"className":"content-wrapper","children":["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:style","children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:1:props:style","children":404}],["$","div",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:2:props:style","children":["$","h2",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:2:props:children:props:style","children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]}]]}]]}]]}],{"children":["agents",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["architect",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["__PAGE__",["$","$1","c",{"children":[["$","div",null,{"dangerouslySetInnerHTML":{"__html":"$5"}}],null,"$L6"]}],{},null,false]},null,false]},null,false]},null,false]},null,false],"$L7",false]],"m":"$undefined","G":["$8",[]],"s":false,"S":true}
9:I[4431,[],"OutletBoundary"]
b:I[5278,[],"AsyncMetadataOutlet"]
d:I[4431,[],"ViewportBoundary"]
f:I[4431,[],"MetadataBoundary"]
10:"$Sreact.suspense"
6:["$","$L9",null,{"children":["$La",["$","$Lb",null,{"promise":"$@c"}]]}]
7:["$","$1","h",{"children":[null,[["$","$Ld",null,{"children":"$Le"}],null],["$","$Lf",null,{"children":["$","div",null,{"hidden":true,"children":["$","$10",null,{"fallback":null,"children":"$L11"}]}]}]]}]
e:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
a:null
c:{"metadata":[["$","title","0",{"children":"Architect — Strategic Analysis — Agent Team OS Guide"}],["$","meta","1",{"name":"description","content":"Your personal AI agent team, working together to keep your life organized."}]],"error":null,"digest":"$undefined"}
11:"$c:metadata"
