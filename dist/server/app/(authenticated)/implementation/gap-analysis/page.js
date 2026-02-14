(()=>{var a={};a.id=6430,a.ids=[6430],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},16953:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>f,metadata:()=>e});var d=c(75338);c(82704);let e={title:"Agent Team OS — User Guide",description:"Your personal AI agent team, working together to keep your life organized."};function f({children:a}){return(0,d.jsx)("html",{lang:"en",children:a})}},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},20671:()=>{},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},28354:a=>{"use strict";a.exports=require("util")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:a=>{"use strict";a.exports=require("path")},36478:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(97954).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/components/Sidebar.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/components/Sidebar.tsx","default")},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},51674:(a,b,c)=>{"use strict";c.r(b),c.d(b,{GlobalError:()=>D.a,__next_app__:()=>J,handler:()=>L,pages:()=>I,routeModule:()=>K,tree:()=>H});var d=c(49754),e=c(9117),f=c(46595),g=c(32324),h=c(39326),i=c(38928),j=c(20175),k=c(12),l=c(54290),m=c(12696),n=c(82802),o=c(77533),p=c(45229),q=c(32822),r=c(261),s=c(26453),t=c(52474),u=c(26713),v=c(51356),w=c(62685),x=c(36225),y=c(63446),z=c(2762),A=c(45742),B=c(86439),C=c(81170),D=c.n(C),E=c(62506),F=c(91203),G={};for(let a in E)0>["default","tree","pages","GlobalError","__next_app__","routeModule","handler"].indexOf(a)&&(G[a]=()=>E[a]);c.d(b,G);let H={children:["",{children:["(authenticated)",{children:["implementation",{children:["gap-analysis",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,71206)),"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/(authenticated)/implementation/gap-analysis/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(c.bind(c,64916)),"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/(authenticated)/layout.tsx"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,87028,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,90461,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,32768,23)),"next/dist/client/components/builtin/unauthorized.js"]}]},{layout:[()=>Promise.resolve().then(c.bind(c,16953)),"/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,81170,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,87028,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,90461,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,32768,23)),"next/dist/client/components/builtin/unauthorized.js"]}]}.children,I=["/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/(authenticated)/implementation/gap-analysis/page.tsx"],J={require:c,loadChunk:()=>Promise.resolve()},K=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/(authenticated)/implementation/gap-analysis/page",pathname:"/implementation/gap-analysis",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:H},distDir:".next",relativeProjectDir:""});async function L(a,b,d){var C;let G="/(authenticated)/implementation/gap-analysis/page";"/index"===G&&(G="/");let M=(0,h.getRequestMeta)(a,"postponed"),N=(0,h.getRequestMeta)(a,"minimalMode"),O=await K.prepare(a,b,{srcPage:G,multiZoneDraftMode:!1});if(!O)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:P,query:Q,params:R,parsedUrl:S,pageIsDynamic:T,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,serverActionsManifest:X,clientReferenceManifest:Y,subresourceIntegrityManifest:Z,prerenderManifest:$,isDraftMode:_,resolvedPathname:aa,revalidateOnlyGenerated:ab,routerServerContext:ac,nextConfig:ad,interceptionRoutePatterns:ae}=O,af=S.pathname||"/",ag=(0,r.normalizeAppPath)(G),{isOnDemandRevalidate:ah}=O,ai=K.match(af,$),aj=!!$.routes[aa],ak=!!(ai||aj||$.routes[ag]),al=a.headers["user-agent"]||"",am=(0,u.getBotType)(al),an=(0,p.isHtmlBotRequest)(a),ao=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[t.NEXT_ROUTER_PREFETCH_HEADER],ap=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[t.RSC_HEADER],aq=(0,s.getIsPossibleServerAction)(a),ar=(0,m.checkIsAppPPREnabled)(ad.experimental.ppr)&&(null==(C=$.routes[ag]??$.dynamicRoutes[ag])?void 0:C.renderingMode)==="PARTIALLY_STATIC",as=!1,at=!1,au=ar?M:void 0,av=ar&&ap&&!ao,aw=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),ax=!al||(0,p.shouldServeStreamingMetadata)(al,ad.htmlLimitedBots);an&&ar&&(ak=!1,ax=!1);let ay=!0===K.isDev||!ak||"string"==typeof M||av,az=an&&ar,aA=null;_||!ak||ay||aq||au||av||(aA=aa);let aB=aA;!aB&&K.isDev&&(aB=aa),K.isDev||_||!ak||!ap||av||(0,k.d)(a.headers);let aC={...E,tree:H,pages:I,GlobalError:D(),handler:L,routeModule:K,__next_app__:J};X&&Y&&(0,o.setReferenceManifestsSingleton)({page:G,clientReferenceManifest:Y,serverActionsManifest:X,serverModuleMap:(0,q.createServerModuleMap)({serverActionsManifest:X})});let aD=a.method||"GET",aE=(0,g.getTracer)(),aF=aE.getActiveScopeSpan();try{let f=K.getVaryHeader(aa,ae);b.setHeader("Vary",f);let k=async(c,d)=>{let e=new l.NodeNextRequest(a),f=new l.NodeNextResponse(b);return K.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=aE.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${aD} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${aD} ${a.url}`)})},m=async({span:e,postponed:f,fallbackRouteParams:g})=>{let i={query:Q,params:R,page:ag,sharedContext:{buildId:P},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aC,Component:(0,j.T)(aC),params:R,routeModule:K,page:G,postponed:f,shouldWaitOnAllReady:az,serveStreamingMetadata:ax,supportsDynamicResponse:"string"==typeof f||ay,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,subresourceIntegrityManifest:Z,serverActionsManifest:X,clientReferenceManifest:Y,setIsrStatus:null==ac?void 0:ac.setIsrStatus,dir:c(33873).join(process.cwd(),K.relativeProjectDir),isDraftMode:_,isRevalidate:ak&&!f&&!av,botType:am,isOnDemandRevalidate:ah,isPossibleServerAction:aq,assetPrefix:ad.assetPrefix,nextConfigOutput:ad.output,crossOrigin:ad.crossOrigin,trailingSlash:ad.trailingSlash,previewProps:$.preview,deploymentId:ad.deploymentId,enableTainting:ad.experimental.taint,htmlLimitedBots:ad.htmlLimitedBots,devtoolSegmentExplorer:ad.experimental.devtoolSegmentExplorer,reactMaxHeadersLength:ad.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:ad.experimental.cacheLife,basePath:ad.basePath,serverActions:ad.experimental.serverActions,...as?{nextExport:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isRevalidate:!0,isDebugDynamicAccesses:as}:{},experimental:{isRoutePPREnabled:ar,expireTime:ad.expireTime,staleTimes:ad.experimental.staleTimes,cacheComponents:!!ad.experimental.cacheComponents,clientSegmentCache:!!ad.experimental.clientSegmentCache,clientParamParsing:!!ad.experimental.clientParamParsing,dynamicOnHover:!!ad.experimental.dynamicOnHover,inlineCss:!!ad.experimental.inlineCss,authInterrupts:!!ad.experimental.authInterrupts,clientTraceMetadata:ad.experimental.clientTraceMetadata||[]},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d)=>K.onRequestError(a,b,d,ac),err:(0,h.getRequestMeta)(a,"invokeError"),dev:K.isDev}},l=await k(e,i),{metadata:m}=l,{cacheControl:n,headers:o={},fetchTags:p}=m;if(p&&(o[y.NEXT_CACHE_TAGS_HEADER]=p),a.fetchMetrics=m.fetchMetrics,ak&&(null==n?void 0:n.revalidate)===0&&!K.isDev&&!ar){let a=m.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${aa}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:v.CachedRouteKind.APP_PAGE,html:l,headers:o,rscData:m.flightData,postponed:m.postponed,status:m.statusCode,segmentData:m.segmentData},cacheControl:n}},o=async({hasResolved:c,previousCacheEntry:f,isRevalidating:g,span:i})=>{let j,k=!1===K.isDev,l=c||b.writableEnded;if(ah&&ab&&!f&&!N)return(null==ac?void 0:ac.render404)?await ac.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ai&&(j=(0,w.parseFallbackField)(ai.fallback)),j===w.FallbackMode.PRERENDER&&(0,u.isBot)(al)&&(!ar||an)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),(null==f?void 0:f.isStale)===-1&&(ah=!0),ah&&(j!==w.FallbackMode.NOT_FOUND||f)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),!N&&j!==w.FallbackMode.BLOCKING_STATIC_RENDER&&aB&&!l&&!_&&T&&(k||!aj)){let b;if((k||ai)&&j===w.FallbackMode.NOT_FOUND)throw new B.NoFallbackError;if(ar&&!ap){let c="string"==typeof(null==ai?void 0:ai.fallback)?ai.fallback:k?ag:null;if(b=await K.handleResponse({cacheKey:c,req:a,nextConfig:ad,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:$,isRoutePPREnabled:ar,responseGenerator:async()=>m({span:i,postponed:void 0,fallbackRouteParams:k||at?(0,n.u)(ag):null}),waitUntil:d.waitUntil}),null===b)return null;if(b)return delete b.cacheControl,b}}let o=ah||g||!au?void 0:au;if(as&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:v.CachedRouteKind.PAGES,html:x.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let p=T&&ar&&((0,h.getRequestMeta)(a,"renderFallbackShell")||at)?(0,n.u)(af):null;return m({span:i,postponed:o,fallbackRouteParams:p})},p=async c=>{var f,g,i,j,k;let l,n=await K.handleResponse({cacheKey:aA,responseGenerator:a=>o({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ah,isRoutePPREnabled:ar,req:a,nextConfig:ad,prerenderManifest:$,waitUntil:d.waitUntil});if(_&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),K.isDev&&b.setHeader("Cache-Control","no-store, must-revalidate"),!n){if(aA)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=n.value)?void 0:f.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=n.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let p="string"==typeof n.value.postponed;ak&&!av&&(!p||ao)&&(N||b.setHeader("x-nextjs-cache",ah?"REVALIDATED":n.isMiss?"MISS":n.isStale?"STALE":"HIT"),b.setHeader(t.NEXT_IS_PRERENDER_HEADER,"1"));let{value:q}=n;if(au)l={revalidate:0,expire:void 0};else if(N&&ap&&!ao&&ar)l={revalidate:0,expire:void 0};else if(!K.isDev)if(_)l={revalidate:0,expire:void 0};else if(ak){if(n.cacheControl)if("number"==typeof n.cacheControl.revalidate){if(n.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${n.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});l={revalidate:n.cacheControl.revalidate,expire:(null==(j=n.cacheControl)?void 0:j.expire)??ad.expireTime}}else l={revalidate:y.CACHE_ONE_YEAR,expire:void 0}}else b.getHeader("Cache-Control")||(l={revalidate:0,expire:void 0});if(n.cacheControl=l,"string"==typeof aw&&(null==q?void 0:q.kind)===v.CachedRouteKind.APP_PAGE&&q.segmentData){b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=q.headers)?void 0:k[y.NEXT_CACHE_TAGS_HEADER];N&&ak&&c&&"string"==typeof c&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,c);let d=q.segmentData.get(aw);return void 0!==d?(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(d,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl}):(b.statusCode=204,(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.EMPTY,cacheControl:n.cacheControl}))}let r=(0,h.getRequestMeta)(a,"onCacheEntry");if(r&&await r({...n,value:{...n.value,kind:"PAGE"}},{url:(0,h.getRequestMeta)(a,"initURL")}))return null;if(p&&au)throw Object.defineProperty(Error("Invariant: postponed state should not be present on a resume request"),"__NEXT_ERROR_CODE",{value:"E396",enumerable:!1,configurable:!0});if(q.headers){let a={...q.headers};for(let[c,d]of(N&&ak||delete a[y.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let s=null==(g=q.headers)?void 0:g[y.NEXT_CACHE_TAGS_HEADER];if(N&&ak&&s&&"string"==typeof s&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,s),!q.status||ap&&ar||(b.statusCode=q.status),!N&&q.status&&F.RedirectStatusCode[q.status]&&ap&&(b.statusCode=200),p&&b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"1"),ap&&!_){if(void 0===q.rscData){if(q.postponed)throw Object.defineProperty(Error("Invariant: Expected postponed to be undefined"),"__NEXT_ERROR_CODE",{value:"E372",enumerable:!1,configurable:!0});return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:q.html,cacheControl:av?{revalidate:0,expire:void 0}:n.cacheControl})}return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(q.rscData,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl})}let u=q.html;if(!p||N||ap)return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:n.cacheControl});if(as)return u.push(new ReadableStream({start(a){a.enqueue(z.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}});let w=new TransformStream;return u.push(w.readable),m({span:c,postponed:q.postponed,fallbackRouteParams:null}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(w.writable)}).catch(a=>{w.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}})};if(!aF)return await aE.withPropagatedContext(a.headers,()=>aE.trace(i.BaseServerSpan.handleRequest,{spanName:`${aD} ${a.url}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aD,"http.target":a.url}},p));await p(aF)}catch(b){throw b instanceof B.NoFallbackError||await K.onRequestError(a,b,{routerKind:"App Router",routePath:G,routeType:"render",revalidateReason:(0,f.c)({isRevalidate:ak,isOnDemandRevalidate:ah})},ac),b}}},57623:()=>{},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},64916:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>f});var d=c(75338),e=c(36478);function f({children:a}){return(0,d.jsxs)("body",{children:[(0,d.jsx)("input",{type:"checkbox",id:"menu-toggle",className:"menu-toggle"}),(0,d.jsx)("label",{htmlFor:"menu-toggle",className:"hamburger","aria-label":"Toggle navigation",children:"☰"}),(0,d.jsx)("label",{htmlFor:"menu-toggle",className:"overlay"}),(0,d.jsxs)("div",{className:"site-wrapper",children:[(0,d.jsx)(e.default,{}),(0,d.jsx)("main",{className:"main-content",children:(0,d.jsx)("div",{className:"content-wrapper",children:a})})]})]})}},67031:(a,b,c)=>{Promise.resolve().then(c.bind(c,36478))},71206:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>g,metadata:()=>e});var d=c(75338);let e={title:"Gap Analysis — Agent Team OS Guide"},f=`<div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/implementation">Implementation</a>
          <span class="separator">/</span>
          Gap Analysis
        </div>

        <h1>Gap Analysis</h1>
        <p class="page-subtitle">Comprehensive audit comparing documented Agent Team OS features against actual implementation. Includes security audit findings and Notes graph analysis from Feb 13.</p>

        <div class="callout info">
          <div class="callout-title">Audit Summary</div>
          <p><strong>Initial Audit:</strong> February 11, 2026 (~04:30 UTC)<br>
          <strong>Updated:</strong> February 12, 2026 (~03:08 UTC) — Trust system completion<br>
          <strong>Updated:</strong> February 13, 2026 (~16:25 UTC) — Comprehensive directory audit + Notes graph gap audit<br>
          <strong>Updated:</strong> February 14, 2026 (~03:00 UTC) — Phase 2.5 remediation complete, gaps resolved<br>
          <strong>Updated:</strong> February 14, 2026 (~05:30 UTC) — Documentation overhaul complete; documentation gaps addressed<br>
          <strong>Auditors:</strong> Ember + Architect + subagents<br>
          <strong>Method:</strong> Website crawl + implementation inspection + directory audit + Logseq graph analysis + site improvement review</p>
        </div>

        <div class="callout success">
          <div class="callout-title">✅ Documentation Gaps Addressed — Feb 14, 2026</div>
          <p>A comprehensive <a href="/implementation/site-improvements">site improvement review</a> on Feb 14 identified a new category of gaps: <strong>documentation/architecture alignment</strong>. The review found that while the system was fully operational, the documentation described what agents do without explaining how they do it — the OpenClaw runtime was essentially invisible outside the Architecture section.</p>
          <p><strong>25 improvements were implemented</strong> by 11 parallel subagents, closing the following documentation gaps:</p>
          <ul>
            <li><strong>OpenClaw visibility:</strong> Now introduced in Getting Started, referenced consistently across all sections</li>
            <li><strong>Cron mechanism confusion:</strong> Cron Jobs page clarified — OpenClaw Gateway scheduler vs system crontab</li>
            <li><strong>Permission system ambiguity:</strong> Trust system page now bridges with OpenClaw tool policy</li>
            <li><strong>Agent session context:</strong> All agent pages explain sessions, models, and subagent spawning</li>
            <li><strong>Architecture cross-links:</strong> Added throughout the site (were only in Architecture section)</li>
            <li><strong>Glossary completeness:</strong> Expanded from 20 to 33 terms with all architecture concepts</li>
            <li><strong>Reference pages:</strong> OpenClaw CLI commands and file paths added</li>
            <li><strong>Troubleshooting:</strong> OpenClaw-specific guidance added to Common Issues and FAQ</li>
          </ul>
          <p>See the <a href="/implementation/site-improvements">full Site Improvements review</a> for the complete list of 25 items and their resolutions.</p>
        </div>

        <h2>🔴 Security Findings (Feb 13 Audit)</h2>

        <table>
          <thead>
            <tr>
              <th>Finding</th>
              <th>Severity</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Exposed Supabase bearer token</strong></td>
              <td><span class="badge danger">CRITICAL</span></td>
              <td><code>~/agent-guide/agents/ember/config/mcporter.json</code></td>
              <td>⚠️ Needs rotation</td>
            </tr>
            <tr>
              <td><strong>Client-side password auth</strong></td>
              <td><span class="badge danger">CRITICAL</span></td>
              <td><code>login.html</code> — password <code>$OS2026$</code> in client JS</td>
              <td>✅ Fixed — Next.js migration replaced with server-side auth</td>
            </tr>
            <tr>
              <td><strong>trust-levels.json permissions</strong></td>
              <td><span class="badge success">Good</span></td>
              <td><code>~/agents/ember/config/trust-levels.json</code></td>
              <td>✅ 600 (owner-only)</td>
            </tr>
            <tr>
              <td><strong>Two approval queue files world-readable</strong></td>
              <td><span class="badge warning">Minor</span></td>
              <td><code>req-1770872136</code>, <code>req-1770978435</code></td>
              <td>⚠️ Should be 600</td>
            </tr>
            <tr>
              <td><strong>.claude.json backups in home dir</strong></td>
              <td><span class="badge warning">Moderate</span></td>
              <td><code>~/.claude.json.backup.*</code> (5 files)</td>
              <td>⚠️ May contain session data</td>
            </tr>
          </tbody>
        </table>

        <h2>🔴 Structural Issues (Feb 13 Audit)</h2>

        <h3>Three Overlapping Copies of Website — ✅ RESOLVED</h3>
        <p>The directory audit found <strong>three separate locations</strong> holding versions of the agent-team-os-guide. <strong>Cleanup completed Feb 13, 23:15 UTC:</strong></p>
        <ul>
          <li><strong><code>~/agent-guide/</code></strong> — 3,660 files (93.7% is node_modules bloat). Contains legacy agent data, old memories, and the exposed Supabase token. Only ~159 actual content files. <em>Still needs migration of valuable data.</em></li>
          <li><strong><code>~/workspace/repos/agent-team-os-guide/</code></strong> — 46 files. Was the nginx-served site (now superseded by Next.js). <strong>✅ DELETED</strong></li>
          <li><strong><code>~/workspace/repos/agent-team-os-guide.git/</code></strong> — Orphaned bare repo, never used. <strong>✅ DELETED</strong></li>
          <li><strong><code>~/workspace/repos/agent-team-os-guide-nextjs/</code></strong> — The current Next.js site. <strong>✅ SOLE SOURCE OF TRUTH</strong></li>
        </ul>
        <p><strong>Remaining:</strong> <code>~/agent-guide/</code> should be archived after migrating valuable legacy data (11 Ember memory files, project files, reflections).</p>

        <h3>Legacy Data Migration — ✅ RESOLVED</h3>
        <p>Legacy Ember files from <code>~/agent-guide/agents/ember/</code> have been migrated:</p>
        <ul>
          <li><strong>✅ 13 memory files migrated</strong> to <code>~/agents/ember/memory/archive/</code></li>
          <li><strong>✅ 8 project files migrated</strong> to <code>~/agents/ember/memory/archive/</code></li>
          <li><strong>✅ 4 reflection files migrated</strong> to <code>~/agents/ember/memory/archive/</code></li>
          <li><strong>✅ 1 heartbeat-state file migrated</strong></li>
          <li><strong>✅ exa-search node_modules deleted</strong> — 3,429 files (26MB) removed</li>
          <li>Remaining in agent-guide: Clawdbot Canvas UI, debug screenshots, visual debugging doc (low-priority)</li>
        </ul>

        <h3>Orphaned Directories — ✅ RESOLVED</h3>
        <ul>
          <li><code>~/guide/</code> — <strong>✅ DELETED</strong></li>
          <li><code>~/guide-temp/</code> — <strong>✅ DELETED</strong></li>
          <li><code>~/guide.tar.gz</code> — <strong>✅ DELETED</strong></li>
        </ul>
        <p><strong>Status:</strong> All orphaned directories removed during Phase 2.5.6 cleanup (Feb 13).</p>

        <h2>✅ Notes Graph Gaps (Feb 13 Audit — RESOLVED)</h2>
        <p>All critical and important gaps from the Feb 13 audit were resolved during Phase 2.5 Audit Remediation (completed Feb 13).</p>

        <h3>Critical Gaps — All Resolved ✅</h3>

        <div class="callout success">
          <div class="callout-title">✅ GAP-01: Templates Not Logseq-Compatible — FIXED</div>
          <p>All 10 templates now have <code>template:: &lt;name&gt;</code> and <code>template-including-parent:: false</code> properties. Templates reformatted as proper Logseq blocks with indented <code>-</code> prefix structure. All templates are now insertable via Logseq's <code>/template</code> command.</p>
        </div>

        <div class="callout success">
          <div class="callout-title">✅ GAP-02: Journal Template Not Auto-Applied — FIXED</div>
          <p><code>config.edn</code> updated to <code>:default-templates {:journals "Daily Journal"}</code>. New journal pages now automatically receive the Daily Journal template structure.</p>
        </div>

        <div class="callout success">
          <div class="callout-title">✅ GAP-03: 2-Day Journal Gap — FIXED</div>
          <p>Feb 12 and Feb 13 journal entries created with full backfill from agent logs. Auto-journal creation script (<code>~/agents/ember/scripts/create-daily-journal.sh</code>) set up with cron at 00:01 UTC daily to prevent future gaps. Feb 14 pre-created as bonus.</p>
        </div>

        <h3>Important Gaps — All Resolved ✅</h3>

        <table>
          <thead>
            <tr>
              <th>Gap</th>
              <th>Resolution</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>GAP-04: No project pages</strong></td>
              <td>CWA Magento project page created with status, objectives, tasks. Implementation Status page created.</td>
              <td>✅ Fixed</td>
            </tr>
            <tr>
              <td><strong>GAP-05: Broken link</strong></td>
              <td><code>[[Implementation Status]]</code> page created — full build-out tracker with Phase 2.5 roadmap</td>
              <td>✅ Fixed</td>
            </tr>
            <tr>
              <td><strong>GAP-06: contents.md empty</strong></td>
              <td>Transformed from single dash to 53-line navigational hub with Areas, Projects, Templates, Journals, Quick Navigation</td>
              <td>✅ Fixed</td>
            </tr>
            <tr>
              <td><strong>GAP-07: Area pages skeleton-only</strong></td>
              <td>All 5 area pages fleshed out with priorities, standards, active projects, key decisions, tracking methods. Also copied to <code>pages/</code> for Logseq link resolution.</td>
              <td>✅ Fixed</td>
            </tr>
            <tr>
              <td><strong>GAP-08: No .gitignore</strong></td>
              <td><code>.gitignore</code> created at <code>~/notes/.gitignore</code> — excludes .recycle/, bak/, node_modules/, editor dirs, OS artifacts</td>
              <td>✅ Fixed</td>
            </tr>
            <tr>
              <td><strong>GAP-09: logseq/ not in git</strong></td>
              <td><code>logseq/config.edn</code> (421 lines) and <code>logseq/custom.css</code> added to git. Committed as <code>320ae8a</code>.</td>
              <td>✅ Fixed</td>
            </tr>
            <tr>
              <td><strong>GAP-10: No inter-page linking</strong></td>
              <td><strong>81 internal <code>[[links]]</code></strong> added across the graph (was 1). Journals, areas, projects, and templates are now interconnected.</td>
              <td>✅ Fixed</td>
            </tr>
          </tbody>
        </table>

        <h3>Nice-to-Have Gaps</h3>
        <ul>
          <li><strong>GAP-11:</strong> No <code>assets/</code> directory for images/attachments</li>
          <li><strong>GAP-12:</strong> <code>research/</code> directory is empty (will resolve when Scout workflow activates)</li>
          <li><strong>GAP-13:</strong> No favorites configured in Logseq (<code>:favorites []</code>)</li>
          <li><strong>GAP-14:</strong> Area pages stored in <code>areas/</code> instead of <code>pages/</code> — may not be fully indexed by Logseq</li>
          <li><strong>GAP-15:</strong> No tags or properties (<code>key:: value</code>) used anywhere — Logseq's query system unused</li>
        </ul>

        <h2>Notes Graph Summary Metrics</h2>
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Before (Feb 13)</th>
              <th>After (Feb 14)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Total markdown files</td><td>24</td><td>35+</td></tr>
            <tr><td>Journal coverage</td><td>2/4 days (50%)</td><td>4/4 days (100%) + auto-creation active</td></tr>
            <tr><td>Templates created</td><td>10</td><td>10</td></tr>
            <tr><td>Templates Logseq-compatible</td><td><strong>0/10 (0%)</strong></td><td><strong>10/10 (100%) ✅</strong></td></tr>
            <tr><td>Area pages</td><td>5/5</td><td>5/5</td></tr>
            <tr><td>Area pages with content</td><td><strong>0/5 (0%)</strong></td><td><strong>5/5 (100%) ✅</strong></td></tr>
            <tr><td>Project pages</td><td>1</td><td>3 (+ Implementation Status)</td></tr>
            <tr><td>Internal links</td><td><strong>1</strong></td><td><strong>81 ✅</strong></td></tr>
            <tr><td>Git commits</td><td>3</td><td>4+ (320ae8a)</td></tr>
            <tr><td>Critical gaps</td><td>3</td><td><strong>0 ✅</strong></td></tr>
            <tr><td>Important gaps</td><td>7</td><td><strong>0 ✅</strong></td></tr>
            <tr><td>Nice-to-have gaps</td><td>5</td><td>5 (unchanged)</td></tr>
          </tbody>
        </table>

        <div class="callout success">
          <div class="callout-title">Overall Assessment — Updated Feb 14</div>
          <p>The Notes graph is now <strong>fully operational</strong>. All 10 templates are Logseq-functional via the <code>/template</code> command. Journal auto-template ensures new days start with structure. Auto-journal creation via cron prevents future gaps. Area pages contain real content with priorities, standards, and active projects. The graph has 81 internal bidirectional links creating a connected knowledge network. Git hygiene is solid with proper .gitignore and critical config files tracked. The system has transitioned from architecturally sound but operationally dormant to <strong>architecturally sound and operationally active</strong>.</p>
        </div>

        <h2>Previously Resolved Issues</h2>

        <h3>✅ Cron Jobs — Fully Fixed (Feb 11)</h3>
        <p>All 10 old broken cron jobs deleted. Rebuilt as 5 clean, verified jobs:</p>
        <ul>
          <li><strong>morning-report</strong> — 6 AM Manila daily → Discord #ember + Pushover <span class="badge success">Working</span></li>
          <li><strong>evening-checkin</strong> — 9:30 PM Manila daily → Discord #ember + Pushover <span class="badge success">Working</span></li>
          <li><strong>lifeos-git-backup</strong> — 2 AM UTC daily → Discord #ember <span class="badge success">Working</span></li>
          <li><strong>weekly-review</strong> — Sun 9 AM Manila → Discord #ember + Pushover <span class="badge success">Working</span></li>
          <li><strong>monthly-review</strong> — 1st of month 9 AM Manila → Discord #ember + Pushover <span class="badge success">Working</span></li>
        </ul>

        <h3>✅ Syncthing — Fixed &amp; Connected (Feb 11)</h3>
        <p>Root cause: EC2 had wrong device ID for MacBook. Now connected: 76 files synced, idle, 0 errors.</p>

        <h3>✅ Notes Structure — Built Out (Feb 11) &amp; Remediated (Feb 13)</h3>
        <ul>
          <li>10 templates created and made Logseq-functional with <code>template::</code> properties</li>
          <li>5 area pages created and fleshed out with real content</li>
          <li>Journal auto-template and auto-creation active</li>
          <li>81 internal links, contents.md as navigational hub</li>
          <li>Git repo with .gitignore, config.edn tracked</li>
          <li>26 legacy files archived, 3,429 node_modules files deleted, orphaned directories removed</li>
        </ul>

        <h3>✅ Trust System — Fully Implemented (Feb 12)</h3>
        <p>Complete implementation with config, enforcement module, approval workflow, integration, and logging. Tested end-to-end with Scout approval workflow.</p>

        <h3>✅ Website Auth — Fixed (Feb 13)</h3>
        <p>Client-side password gate replaced by server-side authentication via Next.js + Supabase. The hardcoded password <code>$OS2026$</code> in client JS is no longer a vulnerability.</p>

        <h3>✅ Google Calendar — Authenticated (Feb 12)</h3>
        <p><code>gog</code> CLI installed and OAuth completed. Calendar data available for morning reports.</p>

        <div class="action-section">
          <h2>What You Do Next</h2>
          <ul>
            <li><a href="/implementation/site-improvements">Site Improvements Review</a> — the Feb 14 documentation overhaul that addressed documentation-level gaps</li>
            <li><a href="/implementation/roadmap">View the Roadmap</a> — updated priorities from audit</li>
            <li><a href="/implementation/activity-log">Check Activity Log</a> — see recent work</li>
            <li><a href="/implementation">Return to Status Dashboard</a></li>
          </ul>
        </div>

        <p style="margin-top: 2rem; font-size: 0.8rem; color: #888;">Last updated: February 14, 2026 — Documentation overhaul complete</p>`;function g(){return(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:f}})}},71759:(a,b,c)=>{Promise.resolve().then(c.bind(c,95010))},78335:()=>{},82615:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,81170,23)),Promise.resolve().then(c.t.bind(c,23597,23)),Promise.resolve().then(c.t.bind(c,36893,23)),Promise.resolve().then(c.t.bind(c,89748,23)),Promise.resolve().then(c.t.bind(c,6060,23)),Promise.resolve().then(c.t.bind(c,7184,23)),Promise.resolve().then(c.t.bind(c,69576,23)),Promise.resolve().then(c.t.bind(c,73041,23)),Promise.resolve().then(c.t.bind(c,51384,23))},82704:()=>{},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},87343:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,54160,23)),Promise.resolve().then(c.t.bind(c,31603,23)),Promise.resolve().then(c.t.bind(c,68495,23)),Promise.resolve().then(c.t.bind(c,75170,23)),Promise.resolve().then(c.t.bind(c,77526,23)),Promise.resolve().then(c.t.bind(c,78922,23)),Promise.resolve().then(c.t.bind(c,29234,23)),Promise.resolve().then(c.t.bind(c,12263,23)),Promise.resolve().then(c.bind(c,82146))},95010:(a,b,c)=>{"use strict";c.d(b,{default:()=>i});var d=c(21124),e=c(3991),f=c.n(e),g=c(42378);let h=[{title:null,links:[{href:"/",label:"Home"}]},{title:"Getting Started",links:[{href:"/getting-started",label:"Quick Start"},{href:"/getting-started/first-day",label:"Your First Day"},{href:"/getting-started/setup-checklist",label:"Setup Checklist"}]},{title:"Notes & Sync",links:[{href:"/life-os",label:"What is Notes"},{href:"/life-os/daily-workflow",label:"Daily Workflow"},{href:"/life-os/templates",label:"Templates"},{href:"/life-os/logseq-tips",label:"LogSeq Tips"}]},{title:"Agents",links:[{href:"/agents",label:"Meet Your Agents"},{href:"/agents/ember",label:"Ember"},{href:"/agents/scout",label:"Scout"},{href:"/agents/forge",label:"Forge"},{href:"/agents/architect",label:"Architect"},{href:"/agents/trust-levels",label:"Trust Levels"}]},{title:"Cadence",links:[{href:"/cadence",label:"Overview"},{href:"/cadence/morning-report",label:"Morning Report"},{href:"/cadence/evening-checkin",label:"Evening Check-in"},{href:"/cadence/weekly-review",label:"Weekly Review"},{href:"/cadence/monthly-review",label:"Monthly Review"}]},{title:"OpenClaw Architecture",links:[{href:"/architecture",label:"Overview"},{href:"/architecture/channel-adapters",label:"Channel Adapters"},{href:"/architecture/gateway",label:"Gateway"},{href:"/architecture/lane-queue",label:"Lane Queue"},{href:"/architecture/agent-runner",label:"Agent Runner"},{href:"/architecture/execution-layer",label:"Execution Layer"}]},{title:"Automation",links:[{href:"/automation",label:"Overview"},{href:"/automation/cron-jobs",label:"Cron Jobs"},{href:"/automation/notifications",label:"Notifications"}]},{title:"Troubleshooting",links:[{href:"/troubleshooting",label:"Common Issues"},{href:"/troubleshooting/syncthing",label:"Syncthing"},{href:"/troubleshooting/faq",label:"FAQ"}]},{title:"Reference",links:[{href:"/reference/commands",label:"Commands"},{href:"/reference/file-locations",label:"File Locations"},{href:"/reference/glossary",label:"Glossary"},{href:"/reference/changelog",label:"Changelog"}]},{title:"Implementation",links:[{href:"/implementation",label:"Status"},{href:"/implementation/gap-analysis",label:"Gap Analysis"},{href:"/implementation/roadmap",label:"Roadmap"},{href:"/implementation/activity-log",label:"Activity Log"},{href:"/implementation/site-improvements",label:"Site Improvements"},{href:"/implementation/clawvault-analysis",label:"ClawVault Analysis"}]}];function i(){let a=(0,g.usePathname)(),b=(0,g.useRouter)();async function c(){await fetch("/api/auth/logout",{method:"POST"}),b.push("/login"),b.refresh()}return(0,d.jsxs)("aside",{className:"sidebar",children:[(0,d.jsxs)("div",{className:"sidebar-header",children:[(0,d.jsx)("h1",{children:"Agent Team OS"}),(0,d.jsx)("div",{className:"subtitle",children:"User Guide"})]}),(0,d.jsx)("nav",{children:h.map((b,c)=>(0,d.jsxs)("div",{className:"nav-section",children:[b.title&&(0,d.jsx)("div",{className:"nav-section-title",children:b.title}),b.links.map(b=>(0,d.jsx)(f(),{href:b.href,className:`nav-link${a===b.href?" active":""}`,children:b.label},b.href))]},c))}),(0,d.jsx)("div",{className:"sidebar-footer",children:(0,d.jsx)("button",{onClick:c,className:"nav-link logout-link",children:"⎋ Logout"})})]})}},96487:()=>{}};var b=require("../../../../webpack-runtime.js");b.C(a);var c=b.X(0,[8543,8361,7506],()=>b(b.s=51674));module.exports=c})();