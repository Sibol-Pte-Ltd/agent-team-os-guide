(()=>{var a={};a.id=2794,a.ids=[2794],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},7738:(a,b,c)=>{"use strict";c.r(b),c.d(b,{GlobalError:()=>D.a,__next_app__:()=>J,handler:()=>L,pages:()=>I,routeModule:()=>K,tree:()=>H});var d=c(49754),e=c(9117),f=c(46595),g=c(32324),h=c(39326),i=c(38928),j=c(20175),k=c(12),l=c(54290),m=c(12696),n=c(82802),o=c(77533),p=c(45229),q=c(32822),r=c(261),s=c(26453),t=c(52474),u=c(26713),v=c(51356),w=c(62685),x=c(36225),y=c(63446),z=c(2762),A=c(45742),B=c(86439),C=c(81170),D=c.n(C),E=c(62506),F=c(91203),G={};for(let a in E)0>["default","tree","pages","GlobalError","__next_app__","routeModule","handler"].indexOf(a)&&(G[a]=()=>E[a]);c.d(b,G);let H={children:["",{children:["(authenticated)",{children:["implementation",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,63372)),"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/(authenticated)/implementation/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(c.bind(c,64916)),"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/(authenticated)/layout.tsx"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,87028,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,90461,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,32768,23)),"next/dist/client/components/builtin/unauthorized.js"]}]},{layout:[()=>Promise.resolve().then(c.bind(c,16953)),"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,81170,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,87028,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,90461,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,32768,23)),"next/dist/client/components/builtin/unauthorized.js"]}]}.children,I=["/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/(authenticated)/implementation/page.tsx"],J={require:c,loadChunk:()=>Promise.resolve()},K=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/(authenticated)/implementation/page",pathname:"/implementation",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:H},distDir:".next",relativeProjectDir:""});async function L(a,b,d){var C;let G="/(authenticated)/implementation/page";"/index"===G&&(G="/");let M=(0,h.getRequestMeta)(a,"postponed"),N=(0,h.getRequestMeta)(a,"minimalMode"),O=await K.prepare(a,b,{srcPage:G,multiZoneDraftMode:!1});if(!O)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:P,query:Q,params:R,parsedUrl:S,pageIsDynamic:T,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,serverActionsManifest:X,clientReferenceManifest:Y,subresourceIntegrityManifest:Z,prerenderManifest:$,isDraftMode:_,resolvedPathname:aa,revalidateOnlyGenerated:ab,routerServerContext:ac,nextConfig:ad,interceptionRoutePatterns:ae}=O,af=S.pathname||"/",ag=(0,r.normalizeAppPath)(G),{isOnDemandRevalidate:ah}=O,ai=K.match(af,$),aj=!!$.routes[aa],ak=!!(ai||aj||$.routes[ag]),al=a.headers["user-agent"]||"",am=(0,u.getBotType)(al),an=(0,p.isHtmlBotRequest)(a),ao=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[t.NEXT_ROUTER_PREFETCH_HEADER],ap=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[t.RSC_HEADER],aq=(0,s.getIsPossibleServerAction)(a),ar=(0,m.checkIsAppPPREnabled)(ad.experimental.ppr)&&(null==(C=$.routes[ag]??$.dynamicRoutes[ag])?void 0:C.renderingMode)==="PARTIALLY_STATIC",as=!1,at=!1,au=ar?M:void 0,av=ar&&ap&&!ao,aw=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),ax=!al||(0,p.shouldServeStreamingMetadata)(al,ad.htmlLimitedBots);an&&ar&&(ak=!1,ax=!1);let ay=!0===K.isDev||!ak||"string"==typeof M||av,az=an&&ar,aA=null;_||!ak||ay||aq||au||av||(aA=aa);let aB=aA;!aB&&K.isDev&&(aB=aa),K.isDev||_||!ak||!ap||av||(0,k.d)(a.headers);let aC={...E,tree:H,pages:I,GlobalError:D(),handler:L,routeModule:K,__next_app__:J};X&&Y&&(0,o.setReferenceManifestsSingleton)({page:G,clientReferenceManifest:Y,serverActionsManifest:X,serverModuleMap:(0,q.createServerModuleMap)({serverActionsManifest:X})});let aD=a.method||"GET",aE=(0,g.getTracer)(),aF=aE.getActiveScopeSpan();try{let f=K.getVaryHeader(aa,ae);b.setHeader("Vary",f);let k=async(c,d)=>{let e=new l.NodeNextRequest(a),f=new l.NodeNextResponse(b);return K.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=aE.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${aD} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${aD} ${a.url}`)})},m=async({span:e,postponed:f,fallbackRouteParams:g})=>{let i={query:Q,params:R,page:ag,sharedContext:{buildId:P},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aC,Component:(0,j.T)(aC),params:R,routeModule:K,page:G,postponed:f,shouldWaitOnAllReady:az,serveStreamingMetadata:ax,supportsDynamicResponse:"string"==typeof f||ay,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,subresourceIntegrityManifest:Z,serverActionsManifest:X,clientReferenceManifest:Y,setIsrStatus:null==ac?void 0:ac.setIsrStatus,dir:c(33873).join(process.cwd(),K.relativeProjectDir),isDraftMode:_,isRevalidate:ak&&!f&&!av,botType:am,isOnDemandRevalidate:ah,isPossibleServerAction:aq,assetPrefix:ad.assetPrefix,nextConfigOutput:ad.output,crossOrigin:ad.crossOrigin,trailingSlash:ad.trailingSlash,previewProps:$.preview,deploymentId:ad.deploymentId,enableTainting:ad.experimental.taint,htmlLimitedBots:ad.htmlLimitedBots,devtoolSegmentExplorer:ad.experimental.devtoolSegmentExplorer,reactMaxHeadersLength:ad.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:ad.experimental.cacheLife,basePath:ad.basePath,serverActions:ad.experimental.serverActions,...as?{nextExport:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isRevalidate:!0,isDebugDynamicAccesses:as}:{},experimental:{isRoutePPREnabled:ar,expireTime:ad.expireTime,staleTimes:ad.experimental.staleTimes,cacheComponents:!!ad.experimental.cacheComponents,clientSegmentCache:!!ad.experimental.clientSegmentCache,clientParamParsing:!!ad.experimental.clientParamParsing,dynamicOnHover:!!ad.experimental.dynamicOnHover,inlineCss:!!ad.experimental.inlineCss,authInterrupts:!!ad.experimental.authInterrupts,clientTraceMetadata:ad.experimental.clientTraceMetadata||[]},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d)=>K.onRequestError(a,b,d,ac),err:(0,h.getRequestMeta)(a,"invokeError"),dev:K.isDev}},l=await k(e,i),{metadata:m}=l,{cacheControl:n,headers:o={},fetchTags:p}=m;if(p&&(o[y.NEXT_CACHE_TAGS_HEADER]=p),a.fetchMetrics=m.fetchMetrics,ak&&(null==n?void 0:n.revalidate)===0&&!K.isDev&&!ar){let a=m.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${aa}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:v.CachedRouteKind.APP_PAGE,html:l,headers:o,rscData:m.flightData,postponed:m.postponed,status:m.statusCode,segmentData:m.segmentData},cacheControl:n}},o=async({hasResolved:c,previousCacheEntry:f,isRevalidating:g,span:i})=>{let j,k=!1===K.isDev,l=c||b.writableEnded;if(ah&&ab&&!f&&!N)return(null==ac?void 0:ac.render404)?await ac.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ai&&(j=(0,w.parseFallbackField)(ai.fallback)),j===w.FallbackMode.PRERENDER&&(0,u.isBot)(al)&&(!ar||an)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),(null==f?void 0:f.isStale)===-1&&(ah=!0),ah&&(j!==w.FallbackMode.NOT_FOUND||f)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),!N&&j!==w.FallbackMode.BLOCKING_STATIC_RENDER&&aB&&!l&&!_&&T&&(k||!aj)){let b;if((k||ai)&&j===w.FallbackMode.NOT_FOUND)throw new B.NoFallbackError;if(ar&&!ap){let c="string"==typeof(null==ai?void 0:ai.fallback)?ai.fallback:k?ag:null;if(b=await K.handleResponse({cacheKey:c,req:a,nextConfig:ad,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:$,isRoutePPREnabled:ar,responseGenerator:async()=>m({span:i,postponed:void 0,fallbackRouteParams:k||at?(0,n.u)(ag):null}),waitUntil:d.waitUntil}),null===b)return null;if(b)return delete b.cacheControl,b}}let o=ah||g||!au?void 0:au;if(as&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:v.CachedRouteKind.PAGES,html:x.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let p=T&&ar&&((0,h.getRequestMeta)(a,"renderFallbackShell")||at)?(0,n.u)(af):null;return m({span:i,postponed:o,fallbackRouteParams:p})},p=async c=>{var f,g,i,j,k;let l,n=await K.handleResponse({cacheKey:aA,responseGenerator:a=>o({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ah,isRoutePPREnabled:ar,req:a,nextConfig:ad,prerenderManifest:$,waitUntil:d.waitUntil});if(_&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),K.isDev&&b.setHeader("Cache-Control","no-store, must-revalidate"),!n){if(aA)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=n.value)?void 0:f.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=n.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let p="string"==typeof n.value.postponed;ak&&!av&&(!p||ao)&&(N||b.setHeader("x-nextjs-cache",ah?"REVALIDATED":n.isMiss?"MISS":n.isStale?"STALE":"HIT"),b.setHeader(t.NEXT_IS_PRERENDER_HEADER,"1"));let{value:q}=n;if(au)l={revalidate:0,expire:void 0};else if(N&&ap&&!ao&&ar)l={revalidate:0,expire:void 0};else if(!K.isDev)if(_)l={revalidate:0,expire:void 0};else if(ak){if(n.cacheControl)if("number"==typeof n.cacheControl.revalidate){if(n.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${n.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});l={revalidate:n.cacheControl.revalidate,expire:(null==(j=n.cacheControl)?void 0:j.expire)??ad.expireTime}}else l={revalidate:y.CACHE_ONE_YEAR,expire:void 0}}else b.getHeader("Cache-Control")||(l={revalidate:0,expire:void 0});if(n.cacheControl=l,"string"==typeof aw&&(null==q?void 0:q.kind)===v.CachedRouteKind.APP_PAGE&&q.segmentData){b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=q.headers)?void 0:k[y.NEXT_CACHE_TAGS_HEADER];N&&ak&&c&&"string"==typeof c&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,c);let d=q.segmentData.get(aw);return void 0!==d?(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(d,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl}):(b.statusCode=204,(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.EMPTY,cacheControl:n.cacheControl}))}let r=(0,h.getRequestMeta)(a,"onCacheEntry");if(r&&await r({...n,value:{...n.value,kind:"PAGE"}},{url:(0,h.getRequestMeta)(a,"initURL")}))return null;if(p&&au)throw Object.defineProperty(Error("Invariant: postponed state should not be present on a resume request"),"__NEXT_ERROR_CODE",{value:"E396",enumerable:!1,configurable:!0});if(q.headers){let a={...q.headers};for(let[c,d]of(N&&ak||delete a[y.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let s=null==(g=q.headers)?void 0:g[y.NEXT_CACHE_TAGS_HEADER];if(N&&ak&&s&&"string"==typeof s&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,s),!q.status||ap&&ar||(b.statusCode=q.status),!N&&q.status&&F.RedirectStatusCode[q.status]&&ap&&(b.statusCode=200),p&&b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"1"),ap&&!_){if(void 0===q.rscData){if(q.postponed)throw Object.defineProperty(Error("Invariant: Expected postponed to be undefined"),"__NEXT_ERROR_CODE",{value:"E372",enumerable:!1,configurable:!0});return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:q.html,cacheControl:av?{revalidate:0,expire:void 0}:n.cacheControl})}return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(q.rscData,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl})}let u=q.html;if(!p||N||ap)return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:n.cacheControl});if(as)return u.push(new ReadableStream({start(a){a.enqueue(z.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}});let w=new TransformStream;return u.push(w.readable),m({span:c,postponed:q.postponed,fallbackRouteParams:null}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(w.writable)}).catch(a=>{w.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}})};if(!aF)return await aE.withPropagatedContext(a.headers,()=>aE.trace(i.BaseServerSpan.handleRequest,{spanName:`${aD} ${a.url}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aD,"http.target":a.url}},p));await p(aF)}catch(b){throw b instanceof B.NoFallbackError||await K.onRequestError(a,b,{routerKind:"App Router",routePath:G,routeType:"render",revalidateReason:(0,f.c)({isRevalidate:ak,isOnDemandRevalidate:ah})},ac),b}}},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},16953:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>f,metadata:()=>e});var d=c(75338);c(82704);let e={title:"Agent Team OS — User Guide",description:"Your personal AI agent team, working together to keep your life organized."};function f({children:a}){return(0,d.jsx)("html",{lang:"en",children:a})}},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},20671:()=>{},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},28354:a=>{"use strict";a.exports=require("util")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:a=>{"use strict";a.exports=require("path")},36478:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(97954).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/components/Sidebar.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/components/Sidebar.tsx","default")},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},57623:()=>{},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},63372:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>g,metadata:()=>e});var d=c(75338);let e={title:"Implementation Status — Agent Team OS Guide"},f=`<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          Implementation
        </div>

        <h1>Implementation Status</h1>
        <p class="page-subtitle">Tracking the build-out of Agent Team OS — what's working, what's missing, and what's next.</p>

        <div class="status-summary">
          <div class="status-card success">
            <div class="status-title">Website</div>
            <div class="status-value">Deployed</div>
            <div class="status-detail">Next.js migration complete, server-side auth</div>
          </div>
          <div class="status-card success">
            <div class="status-title"><a href="/architecture/gateway">Gateway</a></div>
            <div class="status-value">Running</div>
            <div class="status-detail">Port 18789, systemd enabled — <a href="/architecture">see architecture</a></div>
          </div>
          <div class="status-card success">
            <div class="status-title"><a href="/automation/cron-jobs">Cron Jobs</a></div>
            <div class="status-value">5/5 OK</div>
            <div class="status-detail">All jobs rebuilt &amp; working — managed by <a href="/architecture/gateway">Gateway cron</a></div>
          </div>
          <div class="status-card success">
            <div class="status-title"><a href="/agents/trust">Trust System</a></div>
            <div class="status-value">Enforcing</div>
            <div class="status-detail">L0–L3 levels, approval queue, audit log</div>
          </div>
          <div class="status-card success">
            <div class="status-title"><a href="/implementation/day-1-reset">Knowledge</a></div>
            <div class="status-value">Reset</div>
            <div class="status-detail"><a href="/implementation/day-1-reset">Day 1 clean slate</a> — legacy data deleted</div>
          </div>
          <div class="status-card success">
            <div class="status-title">Forge</div>
            <div class="status-value">Active</div>
            <div class="status-detail">Health checks every 5 min, log rotation, backup verify</div>
          </div>
        </div>

        <h2>Quick Stats</h2>
        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Website (Next.js)</strong></td>
              <td><span class="badge success">Deployed</span></td>
              <td>Migrated from static HTML to Next.js with server-side auth (Feb 13)</td>
            </tr>
            <tr>
              <td><strong><a href="/architecture/gateway">OpenClaw Gateway</a></strong></td>
              <td><span class="badge success">Running</span></td>
              <td>Dashboard accessible, all services up — <a href="/architecture">architecture overview</a></td>
            </tr>
            <tr>
              <td><strong><a href="/automation/cron-jobs">Morning Report</a></strong></td>
              <td><span class="badge success">Working</span></td>
              <td>6:00 AM Manila daily → <a href="/architecture/channel-adapters">Discord</a> + Pushover</td>
            </tr>
            <tr>
              <td><strong><a href="/automation/cron-jobs">Evening Check-in</a></strong></td>
              <td><span class="badge success">Working</span></td>
              <td>9:30 PM Manila daily → <a href="/architecture/channel-adapters">Discord</a> + Pushover</td>
            </tr>
            <tr>
              <td><strong><a href="/automation/cron-jobs">Weekly Review</a></strong></td>
              <td><span class="badge success">Working</span></td>
              <td>Sundays 9 AM Manila → <a href="/architecture/channel-adapters">Discord</a> + Pushover</td>
            </tr>
            <tr>
              <td><strong><a href="/automation/cron-jobs">Monthly Review</a></strong></td>
              <td><span class="badge success">Working</span></td>
              <td>1st of month 9 AM Manila → <a href="/architecture/channel-adapters">Discord</a> + Pushover</td>
            </tr>
            <tr>
              <td><strong><a href="/implementation/day-1-reset">Knowledge System</a></strong></td>
              <td><span class="badge success">Reset</span></td>
              <td><a href="/implementation/day-1-reset">Day 1 clean slate</a> — ~/agents/ember/knowledge/ is source of truth</td>
            </tr>
            <tr>
              <td><strong>Syncthing (Notes)</strong></td>
              <td><span class="badge success">Syncing</span></td>
              <td>Notes folder syncing via Syncthing (folder ID: <code>notes</code>) — EC2 ↔ MacBook</td>
            </tr>
            <tr>
              <td><strong>Semantic Search</strong></td>
              <td><span class="badge success">Active</span></td>
              <td>OpenClaw <code>memory_search</code> with embeddinggemma — all 4 agents indexed</td>
            </tr>
            <tr>
              <td><strong><a href="/automation/notifications">Pushover</a></strong></td>
              <td><span class="badge success">Working</span></td>
              <td>Test confirmed, mobile push active — <a href="/architecture/channel-adapters">channel adapter</a></td>
            </tr>
            <tr>
              <td><strong><a href="/agents/trust-levels">Trust System</a></strong></td>
              <td><span class="badge success">Implemented</span></td>
              <td>Fully enforced with approval workflows</td>
            </tr>
            <tr>
              <td><strong>Google Calendar</strong></td>
              <td><span class="badge success">Authenticated</span></td>
              <td>OAuth completed Feb 12, integrated via gog CLI</td>
            </tr>
            <tr>
              <td><strong><a href="/agents/forge">Forge</a> Health Checks</strong></td>
              <td><span class="badge success">Active</span></td>
              <td>Every 5 min — disk, memory, CPU, Syncthing, <a href="/architecture/gateway">gateway</a></td>
            </tr>
            <tr>
              <td><strong><a href="/agents/forge">Forge Agent</a></strong></td>
              <td><span class="badge success">Active</span></td>
              <td>Health checks, log rotation, backup verification</td>
            </tr>
            <tr>
              <td><strong>Scout Agent</strong></td>
              <td><span class="badge warning">Partial</span></td>
              <td>Discord bot active, trust system enforced (L2), own SOUL.md — research workflow still pending</td>
            </tr>
          </tbody>
        </table>

        <h2>Current Phase</h2>
        <p><strong>Phase 0–1 complete.</strong> Syncthing fixed (Notes folder syncing), semantic search live. Now in <strong>Phase 2: Session Handoffs</strong> — Architect designing handoff block format for session continuity. See the <a href="/implementation/clawvault-analysis">ClawVault Analysis</a> for full phase details.</p>

        <div class="callout success">
          <div class="callout-title">✅ Feb 14, 2026: Day 1 Reset — Clean Architecture</div>
          <p><strong>Complete deletion</strong> of legacy Life OS data. <code>~/life-os/</code> and <code>~/life/</code> fully removed. Fresh start with simplified two-directory structure:</p>
          <ul>
            <li><strong>~/agents/</strong> — Everything Agent Team OS (ember/knowledge/, scout/, forge/, shared/)</li>
            <li><strong>~/notes/</strong> — Empty for now, ready for future personal use</li>
          </ul>
          <p>Agent knowledge now lives exclusively in <code>~/agents/ember/knowledge/</code> — single source of truth, git-managed, no Syncthing dependency. <a href="/implementation/day-1-reset">Full reset details</a>.</p>
        </div>

        <div class="callout success">
          <div class="callout-title">✅ Feb 14, 2026: Documentation Overhaul Complete — 25 Site Improvements</div>
          <p>A comprehensive review of all 39 site pages against the new <a href="/architecture">OpenClaw Architecture</a> section identified 25 improvements. All were implemented by 11 parallel subagents in a single coordinated push:</p>
          <ul>
            <li><strong>4 critical fixes:</strong> Cron jobs page now correctly describes OpenClaw Gateway scheduler (not system crontab). Trust system documentation bridges with OpenClaw tool policy. Forge role reframed — monitoring, not managing cron. Morning report attribution fixed throughout.</li>
            <li><strong>New Architecture section (6 pages)</strong> now cross-linked throughout the entire site</li>
            <li><strong>All agent pages</strong> now explain sessions, models, and subagent spawning</li>
            <li><strong>Glossary expanded</strong> from 20 to 33 terms (added Gateway, Lane Queue, Session, etc.)</li>
            <li><strong>Reference pages updated:</strong> OpenClaw CLI commands, file paths, troubleshooting guidance</li>
            <li><strong>Getting Started</strong> now introduces OpenClaw as the runtime engine</li>
          </ul>
          <p>See the <a href="/implementation/site-improvements">full Site Improvements review</a> for details on all 25 items.</p>
        </div>

        <div class="callout success">
          <div class="callout-title">✅ Feb 13, 2026: Phase 2.5 Audit Remediation Complete</div>
          <p><strong>Life OS:</strong> All 10 templates now Logseq-functional with <code>template::</code> properties. Journal auto-template active. Feb 12–13 journals backfilled. Auto-journal creation via cron. Area pages fleshed out with real content. 81 internal links (was 1). Contents.md transformed into navigational hub. CWA Magento project page created.</p>
          <p><strong>Git:</strong> <code>.gitignore</code> created, <code>logseq/config.edn</code> and <code>custom.css</code> tracked, <code>contents.md</code> tracked.</p>
          <p><strong>Cleanup:</strong> 26 legacy files archived, 3,429 node_modules files deleted, orphaned directories removed, AppleDouble files deleted.</p>
          <p><strong>Security:</strong> Supabase token rotation deferred per Colin's instruction (files in ~/agent-guide/ will change later).</p>
        </div>

        <div class="callout success">
          <div class="callout-title">✅ Feb 13, 2026: Next.js Migration Complete</div>
          <p>Website migrated from static HTML with client-side password gate to Next.js with server-side authentication via Supabase. All 34 pages preserved. Deployed to Vercel. Old nginx-served site replaced. Three overlapping copies of old site identified for cleanup.</p>
        </div>

        <div class="callout success">
          <div class="callout-title">Feb 12, 2026: Trust System Live &amp; Tested</div>
          <p>Trust system fully implemented, enforcing permissions, and <strong>tested end-to-end</strong>. Scout Trust Protocol test passed — Scout correctly requested approval before posting to Discord, user approved via CLI, Scout posted only after approval. Agent-specific SOUL.md files created for Scout and Forge. All documentation updated. Agents: Ember=L3, Scout=L2, Forge=L3.</p>
        </div>

        <h2>Next Actions</h2>
        <ol>
          <li><strong>🔴 Rotate Supabase token</strong> — deferred per Colin; will address when agent-guide files change</li>
          <li><strong>Phase 2: Session Handoffs</strong> — Architect designing handoff block format for context continuity</li>
          <li><strong>Phase 3: Priority Markers</strong> — Add 🔴🟡🟢 markers to memory entries</li>
          <li><strong>Phase 4: Structured Categories</strong> — Expand knowledge/ with decisions/, lessons/, commitments/</li>
          <li><strong>Phase 5: Notes Rebuild</strong> — Populate ~/notes/ with Logseq templates</li>
        </ol>

      <h3>Recently Completed</h3>3>
        <ul>
          <li><s>Phase 0: Syncthing Fix</s> — <span class="badge success">Done Feb 14</span> Notes folder syncing (folder ID: notes) — <a href="/implementation/clawvault-analysis">details</a></li>
          <li><s>Phase 1: Semantic Search</s> — <span class="badge success">Done Feb 15</span> OpenClaw memory_search with embeddinggemma — all 4 agents indexed</li>
          <li><s>Day 1 Reset</s> — <span class="badge success">Done Feb 14</span> Clean architecture, ~/notes/ ready — <a href="/implementation/day-1-reset">full details</a></li>
          <li><s>Documentation Overhaul (25 improvements)</s> — <span class="badge success">Done Feb 14</span> Architecture alignment — <a href="/implementation/site-improvements">full details</a></li>
          <li><s>Phase 2.5 Audit Remediation</s> — <span class="badge success">Done Feb 13</span> Templates, journals, git, content</li>
          <li><s>Next.js migration</s> — <span class="badge success">Done Feb 13</span> Server-side auth, Vercel deploy</li>
          <li><s>Trust system enforcement</s> — <span class="badge success">Done Feb 12</span> L0-L3 levels, approval workflows</li>
          <li><s>Forge activation</s> — <span class="badge success">Done Feb 11</span> Health checks, log rotation</li>
        </ul>

        <div class="callout">
          <div class="callout-title">🏗️ Architecture Reference</div>
          <p>Understanding the implementation status is easier with context on <em>how</em> the system is built. The <a href="/architecture">Architecture section</a> explains the Gateway, Channel Adapters, Lane Queue, and other components referenced on this page. Start with the <a href="/architecture">Architecture Overview</a> for the big picture, or jump directly to the <a href="/architecture/gateway">Gateway</a> to understand the daemon that powers scheduling, agent sessions, and tool execution.</p>
        </div>

        <div class="action-section">
          <h2>Explore</h2>
          <ul>
            <li><a href="/implementation/day-1-reset">Day 1 Reset</a> — clean architecture, deleted legacy data, fresh start</li>
            <li><a href="/implementation/clawvault-analysis">ClawVault Analysis</a> — structured memory system comparison, qmd recommendations</li>
            <li><a href="/architecture">Review system Architecture</a> — understand how the components fit together</li>
            <li><a href="/implementation/site-improvements">Site Improvements Review</a> — 25 improvements identified and implemented across the guide</li>
            <li><a href="/implementation/gap-analysis">View detailed Gap Analysis</a> — comprehensive audit results including security findings</li>
            <li><a href="/implementation/roadmap">See the Roadmap</a> — updated priorities from audit</li>
            <li><a href="/implementation/activity-log">Check Activity Log</a> — recent work history</li>
          </ul>
        </div>

        <p style="margin-top: 2rem; font-size: 0.8rem; color: #888;">Last updated: February 14, 2026</p>`;function g(){return(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:f}})}},64916:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>f});var d=c(75338),e=c(36478);function f({children:a}){return(0,d.jsxs)("body",{children:[(0,d.jsx)("input",{type:"checkbox",id:"menu-toggle",className:"menu-toggle"}),(0,d.jsx)("label",{htmlFor:"menu-toggle",className:"hamburger","aria-label":"Toggle navigation",children:"☰"}),(0,d.jsx)("label",{htmlFor:"menu-toggle",className:"overlay"}),(0,d.jsxs)("div",{className:"site-wrapper",children:[(0,d.jsx)(e.default,{}),(0,d.jsx)("main",{className:"main-content",children:(0,d.jsx)("div",{className:"content-wrapper",children:a})})]})]})}},67031:(a,b,c)=>{Promise.resolve().then(c.bind(c,36478))},71759:(a,b,c)=>{Promise.resolve().then(c.bind(c,95010))},78335:()=>{},82615:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,81170,23)),Promise.resolve().then(c.t.bind(c,23597,23)),Promise.resolve().then(c.t.bind(c,36893,23)),Promise.resolve().then(c.t.bind(c,89748,23)),Promise.resolve().then(c.t.bind(c,6060,23)),Promise.resolve().then(c.t.bind(c,7184,23)),Promise.resolve().then(c.t.bind(c,69576,23)),Promise.resolve().then(c.t.bind(c,73041,23)),Promise.resolve().then(c.t.bind(c,51384,23))},82704:()=>{},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},87343:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,54160,23)),Promise.resolve().then(c.t.bind(c,31603,23)),Promise.resolve().then(c.t.bind(c,68495,23)),Promise.resolve().then(c.t.bind(c,75170,23)),Promise.resolve().then(c.t.bind(c,77526,23)),Promise.resolve().then(c.t.bind(c,78922,23)),Promise.resolve().then(c.t.bind(c,29234,23)),Promise.resolve().then(c.t.bind(c,12263,23)),Promise.resolve().then(c.bind(c,82146))},95010:(a,b,c)=>{"use strict";c.d(b,{default:()=>i});var d=c(21124),e=c(3991),f=c.n(e),g=c(42378);let h=[{title:null,links:[{href:"/",label:"Home"}]},{title:"Getting Started",links:[{href:"/getting-started",label:"Quick Start"},{href:"/getting-started/first-day",label:"Your First Day"},{href:"/getting-started/setup-checklist",label:"Setup Checklist"}]},{title:"Notes & Sync",links:[{href:"/life-os",label:"What is Notes"},{href:"/life-os/daily-workflow",label:"Daily Workflow"},{href:"/life-os/templates",label:"Templates"},{href:"/life-os/logseq-tips",label:"LogSeq Tips"}]},{title:"Agents",links:[{href:"/agents",label:"Meet Your Agents"},{href:"/agents/ember",label:"Ember"},{href:"/agents/scout",label:"Scout"},{href:"/agents/forge",label:"Forge"},{href:"/agents/architect",label:"Architect"},{href:"/agents/trust-levels",label:"Trust Levels"}]},{title:"Cadence",links:[{href:"/cadence",label:"Overview"},{href:"/cadence/morning-report",label:"Morning Report"},{href:"/cadence/evening-checkin",label:"Evening Check-in"},{href:"/cadence/weekly-review",label:"Weekly Review"},{href:"/cadence/monthly-review",label:"Monthly Review"}]},{title:"OpenClaw Architecture",links:[{href:"/architecture",label:"Overview"},{href:"/architecture/channel-adapters",label:"Channel Adapters"},{href:"/architecture/gateway",label:"Gateway"},{href:"/architecture/lane-queue",label:"Lane Queue"},{href:"/architecture/agent-runner",label:"Agent Runner"},{href:"/architecture/execution-layer",label:"Execution Layer"}]},{title:"Automation",links:[{href:"/automation",label:"Overview"},{href:"/automation/cron-jobs",label:"Cron Jobs"},{href:"/automation/notifications",label:"Notifications"}]},{title:"Troubleshooting",links:[{href:"/troubleshooting",label:"Common Issues"},{href:"/troubleshooting/syncthing",label:"Syncthing"},{href:"/troubleshooting/faq",label:"FAQ"}]},{title:"Reference",links:[{href:"/reference/commands",label:"Commands"},{href:"/reference/file-locations",label:"File Locations"},{href:"/reference/glossary",label:"Glossary"},{href:"/reference/changelog",label:"Changelog"}]},{title:"Implementation",links:[{href:"/implementation",label:"Status"},{href:"/implementation/gap-analysis",label:"Gap Analysis"},{href:"/implementation/roadmap",label:"Roadmap"},{href:"/implementation/activity-log",label:"Activity Log"},{href:"/implementation/site-improvements",label:"Site Improvements"},{href:"/implementation/clawvault-analysis",label:"ClawVault Analysis"}]}];function i(){let a=(0,g.usePathname)(),b=(0,g.useRouter)();async function c(){await fetch("/api/auth/logout",{method:"POST"}),b.push("/login"),b.refresh()}return(0,d.jsxs)("aside",{className:"sidebar",children:[(0,d.jsxs)("div",{className:"sidebar-header",children:[(0,d.jsx)("h1",{children:"Agent Team OS"}),(0,d.jsx)("div",{className:"subtitle",children:"User Guide"})]}),(0,d.jsx)("nav",{children:h.map((b,c)=>(0,d.jsxs)("div",{className:"nav-section",children:[b.title&&(0,d.jsx)("div",{className:"nav-section-title",children:b.title}),b.links.map(b=>(0,d.jsx)(f(),{href:b.href,className:`nav-link${a===b.href?" active":""}`,children:b.label},b.href))]},c))}),(0,d.jsx)("div",{className:"sidebar-footer",children:(0,d.jsx)("button",{onClick:c,className:"nav-link logout-link",children:"⎋ Logout"})})]})}},96487:()=>{}};var b=require("../../../webpack-runtime.js");b.C(a);var c=b.X(0,[8543,8361,7506],()=>b(b.s=7738));module.exports=c})();