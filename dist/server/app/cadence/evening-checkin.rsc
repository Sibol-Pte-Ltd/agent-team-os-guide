1:"$Sreact.fragment"
2:I[9766,[],""]
3:I[8924,[],""]
4:I[3370,["7340","static/chunks/app/(authenticated)/layout-8a56e70ab4050a46.js"],"default"]
8:I[7150,[],""]
:HL["/_next/static/css/56998b7e09014914.css","style"]
5:T15e4,<div class="breadcrumbs">
          <a href="/">Home</a> / <a href="/cadence">Cadence</a> / Evening Check-in
        </div>

        <h1>Evening Check-in</h1>

        <p>At 9:30 PM each day, Ember delivers your evening check-in via Discord and a Pushover notification. Where the morning report opens your day with a forward-looking briefing, the evening check-in closes it with a backward-looking summary. It's your daily bookend — a chance to take stock of what happened, acknowledge progress, and set the stage for tomorrow.</p>

        <h2>What the Evening Check-in Includes</h2>

        <p>The evening check-in is organized into three sections:</p>

        <h3>Completed Today</h3>
        <p>Everything you checked off, finished, or resolved during the day. Ember pulls this from your Notes daily page, task completions, and any agent activity that wrapped up. Seeing what you accomplished is more than satisfying — it helps Ember calibrate how much to load onto tomorrow's priorities.</p>

        <h3>Still Pending</h3>
        <p>Tasks and priorities from this morning's report that didn't get completed. This isn't a guilt trip — it's information. Some things naturally carry over, and that's fine. Ember will automatically move these to tomorrow's priorities unless you tell it otherwise.</p>

        <h3>Attention Tomorrow</h3>
        <p>Items that Ember is flagging for tomorrow based on the day's activity. Maybe a deadline is approaching, a follow-up is needed from a meeting, or a task that was blocked is now unblocked. This section gives you a head start on tomorrow's morning report.</p>

        <h2>Sample Evening Check-in</h2>

<pre><code>Good evening, Colin. Here's your check-in for Monday, February 10.

COMPLETED TODAY
- Finalized Q1 roadmap draft and shared with team
- Reviewed Scout's backup solutions research
  (selected Option B — noted in Projects/Infrastructure)
- Team standup attended
- 1:1 with Sarah completed

STILL PENDING
- Submit expense report (was flagged this morning —
  still not found in documents)

ATTENTION TOMORROW
- Expense report is now overdue. Prioritizing as #1
  for tomorrow morning.
- Sarah requested a follow-up doc from your 1:1.
  Adding to tomorrow's priorities.
- Forge's notification script refactor is ready for
  your review whenever you have time.</code></pre>

        <h2>Your Role in the Evening Check-in</h2>

        <p>The evening check-in is not just a report you passively receive. It's your moment to interact with the system before the day ends. Here's what you can do:</p>

        <ul>
          <li><strong>Flag adjustments.</strong> If Ember carried over something you've decided to drop, let it know. Reply or message Ember to remove it from tomorrow's priorities.</li>
          <li><strong>Add notes for tomorrow.</strong> If something came up late in the day that you want to remember, tell Ember to add it to tomorrow's briefing.</li>
          <li><strong>Acknowledge completed work.</strong> If you finished something after the check-in was generated, let Ember know so the records stay accurate.</li>
          <li><strong>Reprioritize.</strong> If tomorrow's "attention" items don't match your actual priorities, now is the time to reorder them.</li>
        </ul>

        <div class="callout tip">
          <strong>Tip:</strong> Use the evening check-in as a natural stopping point for your workday. Once you've reviewed it and made any adjustments, you're done. The system is set up for tomorrow, your agents know what to expect, and you can step away with confidence that nothing will be lost overnight.
        </div>

        <h2>The Daily Loop</h2>

        <p>Together, the morning report and evening check-in form a complete daily loop:</p>

        <ol>
          <li><strong>6:00 AM</strong> — Morning report arrives. You review priorities and plan your day.</li>
          <li><strong>Throughout the day</strong> — You work, agents assist, tasks get completed or deferred.</li>
          <li><strong>9:30 PM</strong> — Evening check-in arrives. You review, adjust, and close out the day.</li>
          <li><strong>Overnight</strong> — Agents continue background work. The cycle resets.</li>
        </ol>

        <p>This loop ensures that every day has a clear start and a clear end, with nothing falling through the cracks in between.</p>

        <div class="callout note">
          <strong>Under the Hood:</strong> The Gateway's <a href="/architecture/gateway">cron scheduler</a> triggers the evening check-in in the cron lane at 9:30 PM. The <a href="/architecture/agent-runner">Agent Runner</a> assembles context from your workspace files — today's daily page, task completions, and agent activity logs — and the <a href="/architecture/execution-layer">Execution Layer</a> runs any necessary tool calls. The finished check-in is delivered through <a href="/architecture/channel-adapters">Channel Adapters</a> to Discord and Pushover.
        </div>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li>Revisit the <a href="/cadence/morning-report">Morning Report</a> to see the other half of the daily loop.</li>
            <li>Learn how daily check-ins feed into the <a href="/cadence/weekly-review">Weekly Review</a>.</li>
            <li>See how the evening check-in integrates with your <a href="/life-os/daily-workflow">Daily Workflow</a> in Notes.</li>
            <li>Explore the <a href="/architecture">Architecture Overview</a> to see how all the components connect.</li>
          </ul>
        </div>0:{"P":null,"b":"vzbdtBP5U_venz5tN8oS4","p":"","c":["","cadence","evening-checkin"],"i":false,"f":[[["",{"children":["(authenticated)",{"children":["cadence",{"children":["evening-checkin",{"children":["__PAGE__",{}]}]}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/56998b7e09014914.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]]}],{"children":["(authenticated)",["$","$1","c",{"children":[null,["$","body",null,{"children":[["$","input",null,{"type":"checkbox","id":"menu-toggle","className":"menu-toggle"}],["$","label",null,{"htmlFor":"menu-toggle","className":"hamburger","aria-label":"Toggle navigation","children":"☰"}],["$","label",null,{"htmlFor":"menu-toggle","className":"overlay"}],["$","div",null,{"className":"site-wrapper","children":[["$","$L4",null,{}],["$","main",null,{"className":"main-content","children":["$","div",null,{"className":"content-wrapper","children":["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:style","children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:1:props:style","children":404}],["$","div",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:2:props:style","children":["$","h2",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:2:props:children:props:style","children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]}]]}]]}]]}],{"children":["cadence",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["evening-checkin",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["__PAGE__",["$","$1","c",{"children":[["$","div",null,{"dangerouslySetInnerHTML":{"__html":"$5"}}],null,"$L6"]}],{},null,false]},null,false]},null,false]},null,false]},null,false],"$L7",false]],"m":"$undefined","G":["$8",[]],"s":false,"S":true}
9:I[4431,[],"OutletBoundary"]
b:I[5278,[],"AsyncMetadataOutlet"]
d:I[4431,[],"ViewportBoundary"]
f:I[4431,[],"MetadataBoundary"]
10:"$Sreact.suspense"
6:["$","$L9",null,{"children":["$La",["$","$Lb",null,{"promise":"$@c"}]]}]
7:["$","$1","h",{"children":[null,[["$","$Ld",null,{"children":"$Le"}],null],["$","$Lf",null,{"children":["$","div",null,{"hidden":true,"children":["$","$10",null,{"fallback":null,"children":"$L11"}]}]}]]}]
e:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
a:null
c:{"metadata":[["$","title","0",{"children":"Evening Check-in — Agent Team OS Guide"}],["$","meta","1",{"name":"description","content":"Your personal AI agent team, working together to keep your life organized."}]],"error":null,"digest":"$undefined"}
11:"$c:metadata"
