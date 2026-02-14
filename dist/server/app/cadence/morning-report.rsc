1:"$Sreact.fragment"
2:I[9766,[],""]
3:I[8924,[],""]
4:I[3370,["7340","static/chunks/app/(authenticated)/layout-8a56e70ab4050a46.js"],"default"]
8:I[7150,[],""]
:HL["/_next/static/css/56998b7e09014914.css","style"]
5:T1ac7,<div class="breadcrumbs">
          <a href="/">Home</a> / <a href="/cadence">Cadence</a> / Morning Report
        </div>

        <h1>Morning Report</h1>

        <p>Every morning at 6:00 AM, Ember generates and delivers your morning report via Discord and a Pushover notification to your phone. This is your daily briefing — a concise snapshot of what matters today, delivered before you even start your first cup of coffee.</p>

        <p>The morning report is designed to answer one question: <strong>"What do I need to know right now?"</strong> It pulls together information from your Notes journal, calendar, task lists, and any overnight agent activity into a single, scannable summary.</p>

        <h2>What the Morning Report Includes</h2>

        <p>Each morning report is organized into four sections:</p>

        <h3>Today's Priorities</h3>
        <p>The top tasks and commitments for the day, pulled from your Notes daily page. These are the items Ember has identified as most important based on deadlines, carry-over status, and any flags you've set. Priorities are listed in order of importance, not chronologically.</p>

        <h3>Calendar Overview</h3>
        <p>A quick view of your scheduled events — meetings, appointments, time blocks. Calendar data is pulled from Google Calendar via the <code>gog</code> CLI. This helps you see the shape of your day at a glance and understand how much open time you have for deep work or ad-hoc tasks.</p>

        <h3>Overnight Activity</h3>
        <p>A summary of anything your agents did while you were away. This might include research Scout completed, background tasks Forge finished, or organizational work Ember handled. If nothing happened overnight, this section is omitted.</p>

        <h3>Flags</h3>
        <p>Items that need your attention or decision. These are things the agents can't resolve on their own — a task that's overdue, a conflict in your schedule, a question from a previous session that's still unanswered. Flags are the most important part of the report to read carefully.</p>

        <h2>Sample Morning Report</h2>

<pre><code>Good morning, Colin. Here's your report for Monday, February 10.

PRIORITIES
1. Finalize Q1 roadmap draft (carry-over from Friday)
2. Review Scout's research on backup solutions
3. Submit expense report (due today)

CALENDAR
09:00  Team standup (30 min)
11:00  1:1 with Sarah (45 min)
14:00  Deep work block (2 hrs)

OVERNIGHT ACTIVITY
- Scout completed research on off-site backup solutions.
  Summary saved to Notes under Projects/Infrastructure.
- Forge finished the notification script refactor.
  Ready for your review.

FLAGS
- Expense report deadline is today. No draft found in
  your documents — you may need to create it from scratch.
- Weekly review was skipped last Sunday. Consider
  scheduling catch-up time this week.</code></pre>

        <h2>Understanding the Report</h2>

        <p>The morning report is intentionally brief. Ember distills what could be pages of information into a quick read that takes under two minutes. Here are some things to keep in mind:</p>

        <ul>
          <li><strong>Priorities are curated, not exhaustive.</strong> Ember picks the top 3-5 items. Your full task list is always available in Notes.</li>
          <li><strong>Flags deserve immediate attention.</strong> If Ember flagged something, it means the system couldn't handle it automatically and needs your input.</li>
          <li><strong>Overnight activity is informational.</strong> You don't need to act on it immediately — it's there so you know what changed while you slept.</li>
          <li><strong>The report adapts.</strong> Over time, Ember learns what level of detail you prefer and adjusts the report accordingly.</li>
        </ul>

        <div class="callout tip">
          <strong>Tip:</strong> If something looks wrong in the morning report — a missing priority, an incorrect calendar entry, or a flag that doesn't make sense — message Ember to correct it. The sooner you flag inaccuracies, the better the reports become over time.
        </div>

        <h2>When the Report Doesn't Arrive</h2>

        <p>If you don't receive your morning report by 6:15 AM, check the following:</p>

        <ul>
          <li>Is your Pushover app configured and connected? See <a href="/automation/notifications">Notifications</a> for setup details.</li>
          <li>Is the cron job running? See <a href="/automation/cron-jobs">Cron Jobs</a> to verify.</li>
          <li>Check the Ember logs for errors — see <a href="/troubleshooting">Common Issues</a> for guidance.</li>
        </ul>

        <h2>How Notifications Reach You</h2>

        <p>When the morning report is ready, Ember doesn't deliver it to Discord directly — it goes through the <strong>Channel Adapter</strong> layer. Here's the path:</p>

        <ol>
          <li><strong>Gateway</strong> triggers the morning report cron job at 6:00 AM.</li>
          <li><strong>Agent Runner</strong> assembles your workspace context and generates the report.</li>
          <li>The report is handed to the <strong>Channel Adapter</strong>, which translates it into the right format for each destination.</li>
          <li>The <strong>Discord adapter</strong> posts it to your channel; the <strong>Pushover adapter</strong> sends a push notification to your phone.</li>
        </ol>

        <p>This separation means you can add or swap delivery channels without changing anything about how the report is generated. Want to add Telegram? Add the adapter — the report itself stays the same. See <a href="/architecture/channel-adapters">Channel Adapters</a> for the full picture of how multi-channel delivery works.</p>

        <div class="callout note">
          <strong>Under the Hood:</strong> The Gateway's <a href="/architecture/gateway">cron scheduler</a> triggers this run in the cron lane. The <a href="/architecture/agent-runner">Agent Runner</a> assembles context from workspace files, and the <a href="/architecture/execution-layer">Execution Layer</a> runs any necessary tool calls to pull calendar data, read your Notes pages, and format the final report.
        </div>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li>Learn how the <a href="/cadence/evening-checkin">Evening Check-in</a> closes out what the morning report started.</li>
            <li>See how the morning report fits into your <a href="/life-os/daily-workflow">Daily Workflow</a>.</li>
            <li>Explore <a href="/automation/notifications">Notifications</a> to customize how and where you receive reports.</li>
            <li>Dive into <a href="/architecture/channel-adapters">Channel Adapters</a> to understand how delivery works across platforms.</li>
          </ul>
        </div>0:{"P":null,"b":"vzbdtBP5U_venz5tN8oS4","p":"","c":["","cadence","morning-report"],"i":false,"f":[[["",{"children":["(authenticated)",{"children":["cadence",{"children":["morning-report",{"children":["__PAGE__",{}]}]}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/56998b7e09014914.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]]}],{"children":["(authenticated)",["$","$1","c",{"children":[null,["$","body",null,{"children":[["$","input",null,{"type":"checkbox","id":"menu-toggle","className":"menu-toggle"}],["$","label",null,{"htmlFor":"menu-toggle","className":"hamburger","aria-label":"Toggle navigation","children":"☰"}],["$","label",null,{"htmlFor":"menu-toggle","className":"overlay"}],["$","div",null,{"className":"site-wrapper","children":[["$","$L4",null,{}],["$","main",null,{"className":"main-content","children":["$","div",null,{"className":"content-wrapper","children":["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:style","children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:1:props:style","children":404}],["$","div",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:2:props:style","children":["$","h2",null,{"style":"$0:f:0:1:1:props:children:1:props:children:props:notFound:0:1:props:children:props:children:2:props:children:props:style","children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]}]]}]]}]]}],{"children":["cadence",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["morning-report",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["__PAGE__",["$","$1","c",{"children":[["$","div",null,{"dangerouslySetInnerHTML":{"__html":"$5"}}],null,"$L6"]}],{},null,false]},null,false]},null,false]},null,false]},null,false],"$L7",false]],"m":"$undefined","G":["$8",[]],"s":false,"S":true}
9:I[4431,[],"OutletBoundary"]
b:I[5278,[],"AsyncMetadataOutlet"]
d:I[4431,[],"ViewportBoundary"]
f:I[4431,[],"MetadataBoundary"]
10:"$Sreact.suspense"
6:["$","$L9",null,{"children":["$La",["$","$Lb",null,{"promise":"$@c"}]]}]
7:["$","$1","h",{"children":[null,[["$","$Ld",null,{"children":"$Le"}],null],["$","$Lf",null,{"children":["$","div",null,{"hidden":true,"children":["$","$10",null,{"fallback":null,"children":"$L11"}]}]}]]}]
e:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
a:null
c:{"metadata":[["$","title","0",{"children":"Morning Report — Agent Team OS Guide"}],["$","meta","1",{"name":"description","content":"Your personal AI agent team, working together to keep your life organized."}]],"error":null,"digest":"$undefined"}
11:"$c:metadata"
