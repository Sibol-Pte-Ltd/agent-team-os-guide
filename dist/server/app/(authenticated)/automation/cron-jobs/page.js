(()=>{var a={};a.id=7719,a.ids=[7719],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},801:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>g,metadata:()=>e});var d=c(75338);let e={title:"Cron Jobs — Agent Team OS Guide"},f=`<div class="breadcrumbs">
          <a href="/">Home</a> / <a href="/automation">Automation</a> / Cron Jobs
        </div>

        <h1>Cron Jobs</h1>

        <p>Cron jobs are the heartbeat of Agent Team OS. They trigger data gathering, report generation, backups, and health checks on a reliable schedule. Every scheduled task is defined in the OpenClaw configuration and executed by the <a href="/architecture/gateway">Gateway's</a> built-in cron scheduler.</p>

        <div class="callout info">
          <div class="callout-title">OpenClaw Cron vs. System Cron</div>
          <p>Agent Team OS uses <strong>OpenClaw's built-in cron scheduler</strong> — not your server's system crontab. When you see cron schedules in this guide, they refer to entries in the OpenClaw configuration file, not lines in <code>/etc/crontab</code> or <code>crontab -e</code>. See <a href="#openclaw-cron-vs-system-cron">the comparison below</a> for details.</p>
        </div>

        <h2>How OpenClaw Cron Works</h2>

        <p>The Gateway includes a cron scheduler that starts when the Gateway starts. Each cron job is defined in the OpenClaw configuration file with a standard cron expression, a target agent, a session label, and a prompt or action to execute. When a cron job fires:</p>

        <ol>
          <li>The Gateway creates a dedicated session for the job (e.g., <code>agent:ember:cron:morning-report</code>).</li>
          <li>The task is enqueued in the <strong>cron lane</strong> — a separate <a href="/architecture/lane-queue">lane</a> that runs independently from user conversations.</li>
          <li>The Agent Runner processes the task just like any other message, with full access to tools, memory, and workspace files.</li>
          <li>Output is delivered to the configured channel (Discord, Telegram, etc.) or stored in logs.</li>
        </ol>

        <p>Because cron jobs run in their own lane, they never block your conversations. A morning report generating at 6:00 AM won't delay a Discord message you send at the same time. This isolation is managed by the <a href="/architecture/lane-queue">Lane Queue</a>.</p>

        <h2>Scheduled Tasks</h2>

        <p>These are the cron jobs configured in a typical Agent Team OS setup:</p>

        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Schedule</th>
                <th>Description</th>
                <th>Agent</th>
                <th>Session Label</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>45 5 * * *</code></td>
                <td>Gather data for morning report</td>
                <td>Ember</td>
                <td><code>morning-gather</code></td>
              </tr>
              <tr>
                <td><code>0 6 * * *</code></td>
                <td>Generate and send morning report</td>
                <td>Ember</td>
                <td><code>morning-report</code></td>
              </tr>
              <tr>
                <td><code>15 16 * * *</code></td>
                <td>Gather data for evening check-in</td>
                <td>Ember</td>
                <td><code>evening-gather</code></td>
              </tr>
              <tr>
                <td><code>30 16 * * *</code></td>
                <td>Generate and send evening check-in</td>
                <td>Ember</td>
                <td><code>evening-checkin</code></td>
              </tr>
              <tr>
                <td><code>0 0 * * *</code></td>
                <td>Daily backup of Notes data</td>
                <td>Forge</td>
                <td><code>daily-backup</code></td>
              </tr>
              <tr>
                <td><code>0 3 * * *</code></td>
                <td>Log rotation and compression</td>
                <td>Forge</td>
                <td><code>log-rotate</code></td>
              </tr>
              <tr>
                <td><code>*/30 * * * *</code></td>
                <td>Heartbeat check (health, inbox, calendar)</td>
                <td>Ember</td>
                <td><code>heartbeat</code></td>
              </tr>
              <tr>
                <td><code>0 8 * * 0</code></td>
                <td>Weekly review compilation</td>
                <td>Ember</td>
                <td><code>weekly-review</code></td>
              </tr>
              <tr>
                <td><code>0 8 1 * *</code></td>
                <td>Monthly review compilation</td>
                <td>Ember</td>
                <td><code>monthly-review</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Managing Cron Jobs</h2>

        <p>OpenClaw provides CLI commands to view and manage scheduled jobs without editing config files directly:</p>

        <pre><code># List all configured cron jobs and their next run times
openclaw cron list

# Show detailed cron status (running, last fired, next fire)
openclaw cron status

# Trigger a specific cron job immediately (useful for testing)
openclaw cron trigger &lt;job-label&gt;</code></pre>

        <p>Example output of <code>openclaw cron list</code>:</p>

        <pre><code>Label              Schedule       Agent   Next Run
morning-gather     45 5 * * *     ember   2025-01-15 05:45:00
morning-report     0 6 * * *      ember   2025-01-15 06:00:00
evening-gather     15 16 * * *    ember   2025-01-15 16:15:00
evening-checkin    30 16 * * *    ember   2025-01-15 16:30:00
daily-backup       0 0 * * *      forge   2025-01-16 00:00:00
log-rotate         0 3 * * *      forge   2025-01-16 03:00:00
heartbeat          */30 * * * *   ember   2025-01-15 14:30:00
weekly-review      0 8 * * 0      ember   2025-01-19 08:00:00
monthly-review     0 8 1 * *      ember   2025-02-01 08:00:00</code></pre>

        <div class="callout warning">
          <strong>Do not edit the OpenClaw configuration's cron section by hand</strong> unless you know what you are doing. The Gateway hot-reloads configuration changes, and a malformed cron expression will prevent all scheduled jobs from running. Use the CLI commands above to inspect jobs, and ask your infrastructure agent (Forge) to make changes — this ensures expressions are validated and logged properly.
        </div>

        <h2>Understanding Cron Format</h2>

        <p>Each schedule follows the standard five-field cron format:</p>

        <pre><code>┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of month (1 - 31)
│ │ │ ┌───────────── month (1 - 12)
│ │ │ │ ┌───────────── day of week (0 - 6, Sunday = 0)
│ │ │ │ │
* * * * *</code></pre>

        <p>Some common patterns used in Agent Team OS:</p>

        <ul>
          <li><code>45 5 * * *</code> — Every day at 5:45 AM</li>
          <li><code>0 0 * * *</code> — Every day at midnight</li>
          <li><code>*/30 * * * *</code> — Every 30 minutes</li>
          <li><code>0 8 * * 0</code> — Every Sunday at 8:00 AM</li>
          <li><code>0 8 1 * *</code> — First day of every month at 8:00 AM</li>
        </ul>

        <h2 id="openclaw-cron-vs-system-cron">OpenClaw Cron vs. System Cron</h2>

        <p>It is important to understand that there are two completely different scheduling mechanisms at play, and Agent Team OS uses only one of them:</p>

        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>OpenClaw Cron</th>
                <th>System Cron (crontab)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>What it is</strong></td>
                <td>Built-in scheduler inside the <a href="/architecture/gateway">Gateway</a> daemon</td>
                <td>Linux's <code>cron</code> daemon (<code>/etc/crontab</code>, <code>crontab -e</code>)</td>
              </tr>
              <tr>
                <td><strong>Where jobs are defined</strong></td>
                <td>OpenClaw configuration file (YAML)</td>
                <td>System crontab files</td>
              </tr>
              <tr>
                <td><strong>What runs</strong></td>
                <td>Agent sessions — full LLM reasoning with tool access</td>
                <td>Shell commands and scripts</td>
              </tr>
              <tr>
                <td><strong>Concurrency</strong></td>
                <td>Managed by the <a href="/architecture/lane-queue">Lane Queue</a> (cron lane)</td>
                <td>Unmanaged — jobs run independently</td>
              </tr>
              <tr>
                <td><strong>How to view</strong></td>
                <td><code>openclaw cron list</code></td>
                <td><code>crontab -l</code></td>
              </tr>
              <tr>
                <td><strong>Used by Agent Team OS?</strong></td>
                <td><strong>Yes</strong> — all scheduled agent tasks</td>
                <td>No — not used for agent tasks (though your server may have its own system cron jobs for unrelated purposes)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>The key difference: OpenClaw cron jobs trigger <em>agent sessions</em>, not shell scripts. When a cron job fires, the Gateway starts an agent run with the configured prompt, and the agent reasons about what to do — checking calendars, reading files, sending messages — using the same tools and capabilities it has in a normal conversation. This is far more flexible than a static bash script, because the agent can adapt its behavior based on context.</p>

        <p>For example, the morning report cron job doesn't run a script that fetches hardcoded data sources. It starts an Ember session with a prompt like "Compile the morning report," and Ember decides what to check based on her instructions, recent context, and what tools are available. If a new data source is added (say, a stock portfolio tracker), Ember picks it up without any script changes.</p>

        <h2>When Jobs Fail</h2>

        <p>If a cron job fails, OpenClaw logs the error and can optionally send a notification via <a href="/automation/notifications">Pushover</a> or the configured alert channel. Common causes of failure include:</p>

        <ul>
          <li>Network issues preventing API calls (calendar, weather, etc.)</li>
          <li>The Gateway being stopped when a job was scheduled to run (missed jobs are logged but not retroactively executed)</li>
          <li>LLM rate limits or provider outages during the agent run</li>
          <li>Tool execution errors (disk full, permissions, network timeouts)</li>
        </ul>

        <p>Check the Gateway logs for cron-related entries:</p>

        <pre><code># View recent cron execution logs
openclaw logs --filter cron</code></pre>

        <p>Consult <a href="/troubleshooting">Common Issues</a> if the problem is not obvious.</p>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li>Run <code>openclaw cron list</code> to verify all scheduled jobs are configured correctly.</li>
            <li>Check that the <a href="/architecture/gateway">Gateway</a> is running — cron jobs only fire when the Gateway daemon is active.</li>
            <li>Review <a href="/automation/notifications">Notifications</a> to make sure you will be alerted if something breaks.</li>
            <li>Read about the <a href="/architecture/gateway">Gateway</a> to understand how the cron scheduler fits into the overall architecture.</li>
            <li>See <a href="/architecture/lane-queue">Lane Queue</a> to understand how cron jobs are isolated from your conversations.</li>
          </ul>
        </div>`;function g(){return(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:f}})}},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14306:(a,b,c)=>{"use strict";c.r(b),c.d(b,{GlobalError:()=>D.a,__next_app__:()=>J,handler:()=>L,pages:()=>I,routeModule:()=>K,tree:()=>H});var d=c(49754),e=c(9117),f=c(46595),g=c(32324),h=c(39326),i=c(38928),j=c(20175),k=c(12),l=c(54290),m=c(12696),n=c(82802),o=c(77533),p=c(45229),q=c(32822),r=c(261),s=c(26453),t=c(52474),u=c(26713),v=c(51356),w=c(62685),x=c(36225),y=c(63446),z=c(2762),A=c(45742),B=c(86439),C=c(81170),D=c.n(C),E=c(62506),F=c(91203),G={};for(let a in E)0>["default","tree","pages","GlobalError","__next_app__","routeModule","handler"].indexOf(a)&&(G[a]=()=>E[a]);c.d(b,G);let H={children:["",{children:["(authenticated)",{children:["automation",{children:["cron-jobs",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,801)),"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/(authenticated)/automation/cron-jobs/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(c.bind(c,64916)),"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/(authenticated)/layout.tsx"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,87028,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,90461,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,32768,23)),"next/dist/client/components/builtin/unauthorized.js"]}]},{layout:[()=>Promise.resolve().then(c.bind(c,16953)),"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,81170,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,87028,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,90461,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,32768,23)),"next/dist/client/components/builtin/unauthorized.js"]}]}.children,I=["/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/(authenticated)/automation/cron-jobs/page.tsx"],J={require:c,loadChunk:()=>Promise.resolve()},K=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/(authenticated)/automation/cron-jobs/page",pathname:"/automation/cron-jobs",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:H},distDir:".next",relativeProjectDir:""});async function L(a,b,d){var C;let G="/(authenticated)/automation/cron-jobs/page";"/index"===G&&(G="/");let M=(0,h.getRequestMeta)(a,"postponed"),N=(0,h.getRequestMeta)(a,"minimalMode"),O=await K.prepare(a,b,{srcPage:G,multiZoneDraftMode:!1});if(!O)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:P,query:Q,params:R,parsedUrl:S,pageIsDynamic:T,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,serverActionsManifest:X,clientReferenceManifest:Y,subresourceIntegrityManifest:Z,prerenderManifest:$,isDraftMode:_,resolvedPathname:aa,revalidateOnlyGenerated:ab,routerServerContext:ac,nextConfig:ad,interceptionRoutePatterns:ae}=O,af=S.pathname||"/",ag=(0,r.normalizeAppPath)(G),{isOnDemandRevalidate:ah}=O,ai=K.match(af,$),aj=!!$.routes[aa],ak=!!(ai||aj||$.routes[ag]),al=a.headers["user-agent"]||"",am=(0,u.getBotType)(al),an=(0,p.isHtmlBotRequest)(a),ao=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[t.NEXT_ROUTER_PREFETCH_HEADER],ap=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[t.RSC_HEADER],aq=(0,s.getIsPossibleServerAction)(a),ar=(0,m.checkIsAppPPREnabled)(ad.experimental.ppr)&&(null==(C=$.routes[ag]??$.dynamicRoutes[ag])?void 0:C.renderingMode)==="PARTIALLY_STATIC",as=!1,at=!1,au=ar?M:void 0,av=ar&&ap&&!ao,aw=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),ax=!al||(0,p.shouldServeStreamingMetadata)(al,ad.htmlLimitedBots);an&&ar&&(ak=!1,ax=!1);let ay=!0===K.isDev||!ak||"string"==typeof M||av,az=an&&ar,aA=null;_||!ak||ay||aq||au||av||(aA=aa);let aB=aA;!aB&&K.isDev&&(aB=aa),K.isDev||_||!ak||!ap||av||(0,k.d)(a.headers);let aC={...E,tree:H,pages:I,GlobalError:D(),handler:L,routeModule:K,__next_app__:J};X&&Y&&(0,o.setReferenceManifestsSingleton)({page:G,clientReferenceManifest:Y,serverActionsManifest:X,serverModuleMap:(0,q.createServerModuleMap)({serverActionsManifest:X})});let aD=a.method||"GET",aE=(0,g.getTracer)(),aF=aE.getActiveScopeSpan();try{let f=K.getVaryHeader(aa,ae);b.setHeader("Vary",f);let k=async(c,d)=>{let e=new l.NodeNextRequest(a),f=new l.NodeNextResponse(b);return K.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=aE.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${aD} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${aD} ${a.url}`)})},m=async({span:e,postponed:f,fallbackRouteParams:g})=>{let i={query:Q,params:R,page:ag,sharedContext:{buildId:P},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aC,Component:(0,j.T)(aC),params:R,routeModule:K,page:G,postponed:f,shouldWaitOnAllReady:az,serveStreamingMetadata:ax,supportsDynamicResponse:"string"==typeof f||ay,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,subresourceIntegrityManifest:Z,serverActionsManifest:X,clientReferenceManifest:Y,setIsrStatus:null==ac?void 0:ac.setIsrStatus,dir:c(33873).join(process.cwd(),K.relativeProjectDir),isDraftMode:_,isRevalidate:ak&&!f&&!av,botType:am,isOnDemandRevalidate:ah,isPossibleServerAction:aq,assetPrefix:ad.assetPrefix,nextConfigOutput:ad.output,crossOrigin:ad.crossOrigin,trailingSlash:ad.trailingSlash,previewProps:$.preview,deploymentId:ad.deploymentId,enableTainting:ad.experimental.taint,htmlLimitedBots:ad.htmlLimitedBots,devtoolSegmentExplorer:ad.experimental.devtoolSegmentExplorer,reactMaxHeadersLength:ad.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:ad.experimental.cacheLife,basePath:ad.basePath,serverActions:ad.experimental.serverActions,...as?{nextExport:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isRevalidate:!0,isDebugDynamicAccesses:as}:{},experimental:{isRoutePPREnabled:ar,expireTime:ad.expireTime,staleTimes:ad.experimental.staleTimes,cacheComponents:!!ad.experimental.cacheComponents,clientSegmentCache:!!ad.experimental.clientSegmentCache,clientParamParsing:!!ad.experimental.clientParamParsing,dynamicOnHover:!!ad.experimental.dynamicOnHover,inlineCss:!!ad.experimental.inlineCss,authInterrupts:!!ad.experimental.authInterrupts,clientTraceMetadata:ad.experimental.clientTraceMetadata||[]},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d)=>K.onRequestError(a,b,d,ac),err:(0,h.getRequestMeta)(a,"invokeError"),dev:K.isDev}},l=await k(e,i),{metadata:m}=l,{cacheControl:n,headers:o={},fetchTags:p}=m;if(p&&(o[y.NEXT_CACHE_TAGS_HEADER]=p),a.fetchMetrics=m.fetchMetrics,ak&&(null==n?void 0:n.revalidate)===0&&!K.isDev&&!ar){let a=m.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${aa}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:v.CachedRouteKind.APP_PAGE,html:l,headers:o,rscData:m.flightData,postponed:m.postponed,status:m.statusCode,segmentData:m.segmentData},cacheControl:n}},o=async({hasResolved:c,previousCacheEntry:f,isRevalidating:g,span:i})=>{let j,k=!1===K.isDev,l=c||b.writableEnded;if(ah&&ab&&!f&&!N)return(null==ac?void 0:ac.render404)?await ac.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ai&&(j=(0,w.parseFallbackField)(ai.fallback)),j===w.FallbackMode.PRERENDER&&(0,u.isBot)(al)&&(!ar||an)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),(null==f?void 0:f.isStale)===-1&&(ah=!0),ah&&(j!==w.FallbackMode.NOT_FOUND||f)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),!N&&j!==w.FallbackMode.BLOCKING_STATIC_RENDER&&aB&&!l&&!_&&T&&(k||!aj)){let b;if((k||ai)&&j===w.FallbackMode.NOT_FOUND)throw new B.NoFallbackError;if(ar&&!ap){let c="string"==typeof(null==ai?void 0:ai.fallback)?ai.fallback:k?ag:null;if(b=await K.handleResponse({cacheKey:c,req:a,nextConfig:ad,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:$,isRoutePPREnabled:ar,responseGenerator:async()=>m({span:i,postponed:void 0,fallbackRouteParams:k||at?(0,n.u)(ag):null}),waitUntil:d.waitUntil}),null===b)return null;if(b)return delete b.cacheControl,b}}let o=ah||g||!au?void 0:au;if(as&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:v.CachedRouteKind.PAGES,html:x.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let p=T&&ar&&((0,h.getRequestMeta)(a,"renderFallbackShell")||at)?(0,n.u)(af):null;return m({span:i,postponed:o,fallbackRouteParams:p})},p=async c=>{var f,g,i,j,k;let l,n=await K.handleResponse({cacheKey:aA,responseGenerator:a=>o({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ah,isRoutePPREnabled:ar,req:a,nextConfig:ad,prerenderManifest:$,waitUntil:d.waitUntil});if(_&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),K.isDev&&b.setHeader("Cache-Control","no-store, must-revalidate"),!n){if(aA)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=n.value)?void 0:f.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=n.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let p="string"==typeof n.value.postponed;ak&&!av&&(!p||ao)&&(N||b.setHeader("x-nextjs-cache",ah?"REVALIDATED":n.isMiss?"MISS":n.isStale?"STALE":"HIT"),b.setHeader(t.NEXT_IS_PRERENDER_HEADER,"1"));let{value:q}=n;if(au)l={revalidate:0,expire:void 0};else if(N&&ap&&!ao&&ar)l={revalidate:0,expire:void 0};else if(!K.isDev)if(_)l={revalidate:0,expire:void 0};else if(ak){if(n.cacheControl)if("number"==typeof n.cacheControl.revalidate){if(n.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${n.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});l={revalidate:n.cacheControl.revalidate,expire:(null==(j=n.cacheControl)?void 0:j.expire)??ad.expireTime}}else l={revalidate:y.CACHE_ONE_YEAR,expire:void 0}}else b.getHeader("Cache-Control")||(l={revalidate:0,expire:void 0});if(n.cacheControl=l,"string"==typeof aw&&(null==q?void 0:q.kind)===v.CachedRouteKind.APP_PAGE&&q.segmentData){b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=q.headers)?void 0:k[y.NEXT_CACHE_TAGS_HEADER];N&&ak&&c&&"string"==typeof c&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,c);let d=q.segmentData.get(aw);return void 0!==d?(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(d,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl}):(b.statusCode=204,(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.EMPTY,cacheControl:n.cacheControl}))}let r=(0,h.getRequestMeta)(a,"onCacheEntry");if(r&&await r({...n,value:{...n.value,kind:"PAGE"}},{url:(0,h.getRequestMeta)(a,"initURL")}))return null;if(p&&au)throw Object.defineProperty(Error("Invariant: postponed state should not be present on a resume request"),"__NEXT_ERROR_CODE",{value:"E396",enumerable:!1,configurable:!0});if(q.headers){let a={...q.headers};for(let[c,d]of(N&&ak||delete a[y.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let s=null==(g=q.headers)?void 0:g[y.NEXT_CACHE_TAGS_HEADER];if(N&&ak&&s&&"string"==typeof s&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,s),!q.status||ap&&ar||(b.statusCode=q.status),!N&&q.status&&F.RedirectStatusCode[q.status]&&ap&&(b.statusCode=200),p&&b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"1"),ap&&!_){if(void 0===q.rscData){if(q.postponed)throw Object.defineProperty(Error("Invariant: Expected postponed to be undefined"),"__NEXT_ERROR_CODE",{value:"E372",enumerable:!1,configurable:!0});return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:q.html,cacheControl:av?{revalidate:0,expire:void 0}:n.cacheControl})}return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(q.rscData,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl})}let u=q.html;if(!p||N||ap)return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:n.cacheControl});if(as)return u.push(new ReadableStream({start(a){a.enqueue(z.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}});let w=new TransformStream;return u.push(w.readable),m({span:c,postponed:q.postponed,fallbackRouteParams:null}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(w.writable)}).catch(a=>{w.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}})};if(!aF)return await aE.withPropagatedContext(a.headers,()=>aE.trace(i.BaseServerSpan.handleRequest,{spanName:`${aD} ${a.url}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aD,"http.target":a.url}},p));await p(aF)}catch(b){throw b instanceof B.NoFallbackError||await K.onRequestError(a,b,{routerKind:"App Router",routePath:G,routeType:"render",revalidateReason:(0,f.c)({isRevalidate:ak,isOnDemandRevalidate:ah})},ac),b}}},16953:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>f,metadata:()=>e});var d=c(75338);c(82704);let e={title:"Agent Team OS — User Guide",description:"Your personal AI agent team, working together to keep your life organized."};function f({children:a}){return(0,d.jsx)("html",{lang:"en",children:a})}},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},20671:()=>{},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},28354:a=>{"use strict";a.exports=require("util")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:a=>{"use strict";a.exports=require("path")},36478:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(97954).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/components/Sidebar.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/components/Sidebar.tsx","default")},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},57623:()=>{},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},64916:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>f});var d=c(75338),e=c(36478);function f({children:a}){return(0,d.jsxs)("body",{children:[(0,d.jsx)("input",{type:"checkbox",id:"menu-toggle",className:"menu-toggle"}),(0,d.jsx)("label",{htmlFor:"menu-toggle",className:"hamburger","aria-label":"Toggle navigation",children:"☰"}),(0,d.jsx)("label",{htmlFor:"menu-toggle",className:"overlay"}),(0,d.jsxs)("div",{className:"site-wrapper",children:[(0,d.jsx)(e.default,{}),(0,d.jsx)("main",{className:"main-content",children:(0,d.jsx)("div",{className:"content-wrapper",children:a})})]})]})}},67031:(a,b,c)=>{Promise.resolve().then(c.bind(c,36478))},71759:(a,b,c)=>{Promise.resolve().then(c.bind(c,95010))},78335:()=>{},82615:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,81170,23)),Promise.resolve().then(c.t.bind(c,23597,23)),Promise.resolve().then(c.t.bind(c,36893,23)),Promise.resolve().then(c.t.bind(c,89748,23)),Promise.resolve().then(c.t.bind(c,6060,23)),Promise.resolve().then(c.t.bind(c,7184,23)),Promise.resolve().then(c.t.bind(c,69576,23)),Promise.resolve().then(c.t.bind(c,73041,23)),Promise.resolve().then(c.t.bind(c,51384,23))},82704:()=>{},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},87343:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,54160,23)),Promise.resolve().then(c.t.bind(c,31603,23)),Promise.resolve().then(c.t.bind(c,68495,23)),Promise.resolve().then(c.t.bind(c,75170,23)),Promise.resolve().then(c.t.bind(c,77526,23)),Promise.resolve().then(c.t.bind(c,78922,23)),Promise.resolve().then(c.t.bind(c,29234,23)),Promise.resolve().then(c.t.bind(c,12263,23)),Promise.resolve().then(c.bind(c,82146))},95010:(a,b,c)=>{"use strict";c.d(b,{default:()=>i});var d=c(21124),e=c(3991),f=c.n(e),g=c(42378);let h=[{title:null,links:[{href:"/",label:"Home"}]},{title:"Getting Started",links:[{href:"/getting-started",label:"Quick Start"},{href:"/getting-started/first-day",label:"Your First Day"},{href:"/getting-started/setup-checklist",label:"Setup Checklist"}]},{title:"Notes & Sync",links:[{href:"/life-os",label:"What is Notes"},{href:"/life-os/daily-workflow",label:"Daily Workflow"},{href:"/life-os/templates",label:"Templates"},{href:"/life-os/logseq-tips",label:"LogSeq Tips"}]},{title:"Agents",links:[{href:"/agents",label:"Meet Your Agents"},{href:"/agents/ember",label:"Ember"},{href:"/agents/scout",label:"Scout"},{href:"/agents/forge",label:"Forge"},{href:"/agents/architect",label:"Architect"},{href:"/agents/trust-levels",label:"Trust Levels"}]},{title:"Cadence",links:[{href:"/cadence",label:"Overview"},{href:"/cadence/morning-report",label:"Morning Report"},{href:"/cadence/evening-checkin",label:"Evening Check-in"},{href:"/cadence/weekly-review",label:"Weekly Review"},{href:"/cadence/monthly-review",label:"Monthly Review"}]},{title:"OpenClaw Architecture",links:[{href:"/architecture",label:"Overview"},{href:"/architecture/channel-adapters",label:"Channel Adapters"},{href:"/architecture/gateway",label:"Gateway"},{href:"/architecture/lane-queue",label:"Lane Queue"},{href:"/architecture/agent-runner",label:"Agent Runner"},{href:"/architecture/execution-layer",label:"Execution Layer"}]},{title:"Automation",links:[{href:"/automation",label:"Overview"},{href:"/automation/cron-jobs",label:"Cron Jobs"},{href:"/automation/notifications",label:"Notifications"}]},{title:"Troubleshooting",links:[{href:"/troubleshooting",label:"Common Issues"},{href:"/troubleshooting/syncthing",label:"Syncthing"},{href:"/troubleshooting/faq",label:"FAQ"}]},{title:"Reference",links:[{href:"/reference/commands",label:"Commands"},{href:"/reference/file-locations",label:"File Locations"},{href:"/reference/glossary",label:"Glossary"},{href:"/reference/changelog",label:"Changelog"}]},{title:"Implementation",links:[{href:"/implementation",label:"Status"},{href:"/implementation/gap-analysis",label:"Gap Analysis"},{href:"/implementation/roadmap",label:"Roadmap"},{href:"/implementation/activity-log",label:"Activity Log"},{href:"/implementation/site-improvements",label:"Site Improvements"},{href:"/implementation/clawvault-analysis",label:"ClawVault Analysis"}]}];function i(){let a=(0,g.usePathname)(),b=(0,g.useRouter)();async function c(){await fetch("/api/auth/logout",{method:"POST"}),b.push("/login"),b.refresh()}return(0,d.jsxs)("aside",{className:"sidebar",children:[(0,d.jsxs)("div",{className:"sidebar-header",children:[(0,d.jsx)("h1",{children:"Agent Team OS"}),(0,d.jsx)("div",{className:"subtitle",children:"User Guide"})]}),(0,d.jsx)("nav",{children:h.map((b,c)=>(0,d.jsxs)("div",{className:"nav-section",children:[b.title&&(0,d.jsx)("div",{className:"nav-section-title",children:b.title}),b.links.map(b=>(0,d.jsx)(f(),{href:b.href,className:`nav-link${a===b.href?" active":""}`,children:b.label},b.href))]},c))}),(0,d.jsx)("div",{className:"sidebar-footer",children:(0,d.jsx)("button",{onClick:c,className:"nav-link logout-link",children:"⎋ Logout"})})]})}},96487:()=>{}};var b=require("../../../../webpack-runtime.js");b.C(a);var c=b.X(0,[8543,8361,7506],()=>b(b.s=14306));module.exports=c})();