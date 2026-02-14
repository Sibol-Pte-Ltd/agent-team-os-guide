1:"$Sreact.fragment"
2:I[9766,[],""]
3:I[8924,[],""]
4:I[3370,["7340","static/chunks/app/(authenticated)/layout-8a56e70ab4050a46.js"],"default"]
8:I[7150,[],""]
:HL["/_next/static/css/56998b7e09014914.css","style"]
5:T18c8,<div class="breadcrumbs">
          <a href="/">Home</a> / <a href="/cadence">Cadence</a> / Weekly Review
        </div>

        <h1>Weekly Review</h1>

        <p>Every Sunday, Ember automatically compiles a summary of your week. The weekly review zooms out from the daily rhythm to give you a broader perspective — what you accomplished, what's still in motion, and what the upcoming week holds. This is your chance to step back, reflect, and recalibrate.</p>

        <p>The compilation happens automatically, but the review itself is a human activity. Plan to spend <strong>15-20 minutes</strong> reading through the summary, adjusting your priorities, and setting intentions for the week ahead.</p>

        <h2>What the Weekly Review Covers</h2>

        <h3>Tasks Completed</h3>
        <p>A full list of everything you checked off during the week, drawn from your daily check-ins and Notes records. This gives you a clear picture of your output and helps you recognize patterns — are you consistently completing certain types of tasks while others linger?</p>

        <h3>Tasks Carried Over</h3>
        <p>Items that appeared in daily priorities but were never completed. Ember tracks how many times a task has been carried over. If something has been deferred three or more times, it gets a special flag — it might need to be broken down, delegated, or dropped entirely.</p>

        <h3>Projects Progressed</h3>
        <p>A summary of movement across your active projects. Even if individual tasks were small, seeing them rolled up at the project level reveals whether you're making meaningful progress or just treading water.</p>

        <h3>Notable Events</h3>
        <p>Highlights from the week that don't fit neatly into tasks or projects. A significant meeting, a decision that was made, something you learned, an unexpected problem that arose. Ember pulls these from your daily logs and flags.</p>

        <h3>Upcoming Week Preview</h3>
        <p>A look ahead at what's already scheduled or known for next week — deadlines, meetings, milestones, and any tasks that Ember is pre-loading into your priorities.</p>

        <h2>The Review Process</h2>

        <ol class="steps">
          <li><strong>Read the summary.</strong> Start by reading Ember's compiled review from top to bottom without making changes. Get the full picture first.</li>
          <li><strong>Acknowledge completions.</strong> Take a moment to recognize what you accomplished. This isn't fluff — it builds an accurate mental model of your capacity and momentum.</li>
          <li><strong>Address carried-over tasks.</strong> For each carried-over item, make a decision: commit to it next week, break it into smaller pieces, delegate it to an agent, or drop it. Don't let tasks linger indefinitely.</li>
          <li><strong>Review project progress.</strong> Are your projects moving at the pace you expected? If not, identify what's blocking them and decide whether to adjust scope, timeline, or resources.</li>
          <li><strong>Set weekly intentions.</strong> Based on everything you've reviewed, write 3-5 intentions for the coming week. These are higher-level than daily priorities — think themes and goals, not individual tasks.</li>
          <li><strong>Communicate adjustments to Ember.</strong> If you've changed priorities, dropped tasks, or set new intentions, let Ember know so the daily reports for the coming week reflect your decisions.</li>
        </ol>

        <div class="callout note">
          <strong>Note:</strong> The weekly review uses a dedicated template in Notes. You can find it in your templates collection — see <a href="/life-os/templates">Templates</a> for details. The template provides a structured format for your reflections and intentions, making it easy to stay consistent week over week.
        </div>

        <h2>Making the Weekly Review Work for You</h2>

        <p>The weekly review is the single most important cadence element for staying on track long-term. Daily check-ins keep you oriented, but the weekly review is where real course corrections happen. Here are some tips:</p>

        <ul>
          <li><strong>Pick a consistent time.</strong> Sunday morning with coffee works for many people, but find what fits your rhythm. The key is consistency.</li>
          <li><strong>Don't rush it.</strong> 15-20 minutes is the target, but if a particular week demands more reflection, take the time. Skimming defeats the purpose.</li>
          <li><strong>Be honest about carry-overs.</strong> If something has been on the list for three weeks and you haven't done it, ask yourself whether it's truly important or just occupying mental space.</li>
          <li><strong>Use intentions, not mandates.</strong> Weekly intentions should feel like direction, not obligation. "Focus on the infrastructure project" is better than "Complete 14 infrastructure tasks."</li>
        </ul>

        <div class="callout note">
          <strong>Under the Hood:</strong> The Gateway's <a href="/architecture/gateway">cron scheduler</a> triggers the weekly review compilation in the cron lane every Sunday. The <a href="/architecture/agent-runner">Agent Runner</a> assembles context from your workspace — all seven daily pages, task lists, project notes, and agent activity logs. For reviews compiling large amounts of data, the Agent Runner may use summarization to fit within <a href="/architecture/agent-runner">context limits</a> — focusing on highlights rather than exhaustive detail. The <a href="/architecture/execution-layer">Execution Layer</a> handles any tool calls needed to pull calendar events or external data.
        </div>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li>Explore the <a href="/cadence/monthly-review">Monthly Review</a> to see how weekly reviews feed into the bigger picture.</li>
            <li>Check out the <a href="/life-os/templates">Templates</a> page to find the weekly review template in Notes.</li>
            <li>Revisit the <a href="/cadence">Cadence Overview</a> to see how weekly fits into the full rhythm.</li>
            <li>Learn how the <a href="/architecture/agent-runner">Agent Runner</a> manages conversation history and context windows.</li>
          </ul>
        </div>0:{"P":null,"b":"vzbdtBP5U_venz5tN8oS4","p":"","c":["","cadence","weekly-review"],"i":false,"f":[[["",{"children":["(authenticated)",{"children":["cadence",{"children":["weekly-review",{"children":["__PAGE__",{}]}]}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/56998b7e09014914.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]]}],{"children":["(authenticated)",["$","$1","c",{"children":[null,["$","body",null,{"children":[["$","input",null,{"type":"checkbox","id":"menu-toggle","className":"menu-toggle"}],["$","label",null,{"htmlFor":"menu-toggle","className":"hamburger","aria-label":"Toggle navigation","children":"☰"}],["$","label",null,{"htmlFor":"menu-toggle","className":"overlay"}],["$","div",null,{"className":"site-wrapper","children":[["$","$L4",null,{}],["$","main",null,{"className":"main-content","children":["$","div",null,{"className":"content-wrapper","children":["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:style","children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:1:props:style","children":404}],["$","div",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:2:props:style","children":["$","h2",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:2:props:children:props:style","children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]}]]}]]}]]}],{"children":["cadence",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["weekly-review",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["__PAGE__",["$","$1","c",{"children":[["$","div",null,{"dangerouslySetInnerHTML":{"__html":"$5"}}],null,"$L6"]}],{},null,false]},null,false]},null,false]},null,false]},null,false],"$L7",false]],"m":"$undefined","G":["$8",[]],"s":false,"S":true}
9:I[4431,[],"OutletBoundary"]
b:I[5278,[],"AsyncMetadataOutlet"]
d:I[4431,[],"ViewportBoundary"]
f:I[4431,[],"MetadataBoundary"]
10:"$Sreact.suspense"
6:["$","$L9",null,{"children":["$La",["$","$Lb",null,{"promise":"$@c"}]]}]
7:["$","$1","h",{"children":[null,[["$","$Ld",null,{"children":"$Le"}],null],["$","$Lf",null,{"children":["$","div",null,{"hidden":true,"children":["$","$10",null,{"fallback":null,"children":"$L11"}]}]}]]}]
e:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
a:null
c:{"metadata":[["$","title","0",{"children":"Weekly Review — Agent Team OS Guide"}],["$","meta","1",{"name":"description","content":"Your personal AI agent team, working together to keep your life organized."}]],"error":null,"digest":"$undefined"}
11:"$c:metadata"
