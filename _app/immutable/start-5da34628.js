import{S as dt,i as ht,s as pt,J as mt,p as q,K as _t,g as K,q as pe,t as B,r as me,u as F,d as G,a8 as gt,Q as $e,e as wt,c as yt,b as bt,L as ke,aa as C,C as vt,D as Et,E as kt,a9 as W,F as Y,G as Ne,H as x,I as z,ac as le}from"./chunks/index-4dc2d971.js";import{w as je}from"./chunks/index-29d28d03.js";function St(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function Rt(t){return t.split("%25").map(decodeURI).join("%25")}function Lt(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}const It=["href","pathname","search","searchParams","toString","toJSON"];function At(t,e){const n=new URL(t);for(const r of It){let s=n[r];Object.defineProperty(n,r,{get(){return e(),s},enumerable:!0,configurable:!0})}return $t(n),n}function $t(t){Object.defineProperty(t,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Ut="/__data.json";function Ot(t){return t.replace(/\/$/,"")+Ut}let Xe="",it="";function Pt(t){Xe=t.base,it=t.assets||Xe}let lt="";function Tt(t){lt=t}const ct="sveltekit:scroll",V="sveltekit:index",he={tap:1,hover:2,viewport:3,eager:4,off:-1};function Qe(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}function de(){return{x:pageXOffset,y:pageYOffset}}function ce(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const Ze={...he,"":he.hover};function ft(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function et(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A")return t;t=ft(t)}}function Se(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r={rel_external:(t.getAttribute("rel")||"").split(/\s+/).includes("external"),download:t.hasAttribute("download"),target:!!(t instanceof SVGAElement?t.target.baseVal:t.target)},s=!n||Ue(n,e)||r.rel_external||r.target||r.download;return{url:n,has:r,external:s}}function fe(t){let e=null,n=null,r=null,s=null,l=t;for(;l&&l!==document.documentElement;)n===null&&(n=ce(l,"preload-code")),r===null&&(r=ce(l,"preload-data")),e===null&&(e=ce(l,"noscroll")),s===null&&(s=ce(l,"reload")),l=ft(l);return{preload_code:Ze[n??"off"],preload_data:Ze[r??"off"],noscroll:e==="off"?!1:e===""?!0:null,reload:s==="off"?!1:s===""?!0:null}}function tt(t){const e=je(t);let n=!0;function r(){n=!0,e.update(a=>a)}function s(a){n=!1,e.set(a)}function l(a){let c;return e.subscribe(m=>{(c===void 0||n&&m!==c)&&a(c=m)})}return{notify:r,set:s,subscribe:l}}function Nt(){const{set:t,subscribe:e}=je(!1);let n;async function r(){clearTimeout(n);const s=await fetch(`${it}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(s.ok){const a=(await s.json()).version!==lt;return a&&(t(!0),clearTimeout(n)),a}else throw new Error(`Version check failed: ${s.status}`)}return{subscribe:e,check:r}}function Ue(t,e){return t.origin!==location.origin||!t.pathname.startsWith(e)}function jt(t){let e=5381;if(typeof t=="string"){let n=t.length;for(;n;)e=e*33^t.charCodeAt(--n)}else if(ArrayBuffer.isView(t)){const n=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let r=n.length;for(;r;)e=e*33^n[--r]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const _e=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ee.delete(De(t)),_e(t,e));const ee=new Map;function Dt(t,e){const n=De(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){const{body:s,...l}=JSON.parse(r.textContent),a=r.getAttribute("data-ttl");return a&&ee.set(n,{body:s,init:l,ttl:1e3*Number(a)}),Promise.resolve(new Response(s,l))}return _e(t,e)}function Ct(t,e,n){if(ee.size>0){const r=De(t,n),s=ee.get(r);if(s){if(performance.now()<s.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(s.body,s.init);ee.delete(r)}}return _e(e,n)}function De(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(r+=`[data-hash="${jt(e.body)}"]`),r}const Vt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function qt(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Ft(t).map(r=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const l=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(l)return e.push({name:l[1],matcher:l[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const a=r.split(/\[(.+?)\](?!\])/);return"/"+a.map((m,d)=>{if(d%2){if(m.startsWith("x+"))return Re(String.fromCharCode(parseInt(m.slice(2),16)));if(m.startsWith("u+"))return Re(String.fromCharCode(...m.slice(2).split("-").map(O=>parseInt(O,16))));const g=Vt.exec(m);if(!g)throw new Error(`Invalid param: ${m}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,E,k,L,j]=g;return e.push({name:L,matcher:j,optional:!!E,rest:!!k,chained:k?d===1&&a[0]==="":!1}),k?"(.*?)":E?"([^/]*)?":"([^/]+?)"}return Re(m)}).join("")}).join("")}/?$`),params:e}}function Bt(t){return!/^\([^)]+\)$/.test(t)}function Ft(t){return t.slice(1).split("/").filter(Bt)}function Gt(t,e,n){const r={},s=t.slice(1);let l="";for(let a=0;a<e.length;a+=1){const c=e[a];let m=s[a];if(c.chained&&c.rest&&l&&(m=m?l+"/"+m:l),l="",m===void 0)c.rest&&(r[c.name]="");else{if(c.matcher&&!n[c.matcher](m)){if(c.optional&&c.chained){let d=s.indexOf(void 0,a);if(d===-1){const g=e[a+1];if(g!=null&&g.rest&&g.chained)l=m;else return}for(;d>=a;)s[d]=s[d-1],d-=1;continue}return}r[c.name]=m}}if(!l)return r}function Re(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ht(t,e,n,r){const s=new Set(e);return Object.entries(n).map(([c,[m,d,g]])=>{const{pattern:E,params:k}=qt(c),L={id:c,exec:j=>{const O=E.exec(j);if(O)return Gt(O,k,r)},errors:[1,...g||[]].map(j=>t[j]),layouts:[0,...d||[]].map(a),leaf:l(m)};return L.errors.length=L.layouts.length=Math.max(L.errors.length,L.layouts.length),L});function l(c){const m=c<0;return m&&(c=~c),[m,t[c]]}function a(c){return c===void 0?c:[s.has(c),t[c]]}}function Jt(t){let e,n,r;var s=t[0][0];function l(a){return{props:{data:a[2],form:a[1]}}}return s&&(e=W(s,l(t))),{c(){e&&Y(e.$$.fragment),n=q()},l(a){e&&Ne(e.$$.fragment,a),n=q()},m(a,c){e&&x(e,a,c),K(a,n,c),r=!0},p(a,c){const m={};if(c&4&&(m.data=a[2]),c&2&&(m.form=a[1]),s!==(s=a[0][0])){if(e){pe();const d=e;B(d.$$.fragment,1,0,()=>{z(d,1)}),me()}s?(e=W(s,l(a)),Y(e.$$.fragment),F(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else s&&e.$set(m)},i(a){r||(e&&F(e.$$.fragment,a),r=!0)},o(a){e&&B(e.$$.fragment,a),r=!1},d(a){a&&G(n),e&&z(e,a)}}}function Kt(t){let e,n,r;var s=t[0][0];function l(a){return{props:{data:a[2],$$slots:{default:[Mt]},$$scope:{ctx:a}}}}return s&&(e=W(s,l(t))),{c(){e&&Y(e.$$.fragment),n=q()},l(a){e&&Ne(e.$$.fragment,a),n=q()},m(a,c){e&&x(e,a,c),K(a,n,c),r=!0},p(a,c){const m={};if(c&4&&(m.data=a[2]),c&523&&(m.$$scope={dirty:c,ctx:a}),s!==(s=a[0][0])){if(e){pe();const d=e;B(d.$$.fragment,1,0,()=>{z(d,1)}),me()}s?(e=W(s,l(a)),Y(e.$$.fragment),F(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else s&&e.$set(m)},i(a){r||(e&&F(e.$$.fragment,a),r=!0)},o(a){e&&B(e.$$.fragment,a),r=!1},d(a){a&&G(n),e&&z(e,a)}}}function Mt(t){let e,n,r;var s=t[0][1];function l(a){return{props:{data:a[3],form:a[1]}}}return s&&(e=W(s,l(t))),{c(){e&&Y(e.$$.fragment),n=q()},l(a){e&&Ne(e.$$.fragment,a),n=q()},m(a,c){e&&x(e,a,c),K(a,n,c),r=!0},p(a,c){const m={};if(c&8&&(m.data=a[3]),c&2&&(m.form=a[1]),s!==(s=a[0][1])){if(e){pe();const d=e;B(d.$$.fragment,1,0,()=>{z(d,1)}),me()}s?(e=W(s,l(a)),Y(e.$$.fragment),F(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else s&&e.$set(m)},i(a){r||(e&&F(e.$$.fragment,a),r=!0)},o(a){e&&B(e.$$.fragment,a),r=!1},d(a){a&&G(n),e&&z(e,a)}}}function nt(t){let e,n=t[5]&&at(t);return{c(){e=wt("div"),n&&n.c(),this.h()},l(r){e=yt(r,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=bt(e);n&&n.l(s),s.forEach(G),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(r,s){K(r,e,s),n&&n.m(e,null)},p(r,s){r[5]?n?n.p(r,s):(n=at(r),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(r){r&&G(e),n&&n.d()}}}function at(t){let e;return{c(){e=vt(t[6])},l(n){e=Et(n,t[6])},m(n,r){K(n,e,r)},p(n,r){r&64&&kt(e,n[6])},d(n){n&&G(e)}}}function Wt(t){let e,n,r,s,l;const a=[Kt,Jt],c=[];function m(g,E){return g[0][1]?0:1}e=m(t),n=c[e]=a[e](t);let d=t[4]&&nt(t);return{c(){n.c(),r=mt(),d&&d.c(),s=q()},l(g){n.l(g),r=_t(g),d&&d.l(g),s=q()},m(g,E){c[e].m(g,E),K(g,r,E),d&&d.m(g,E),K(g,s,E),l=!0},p(g,[E]){let k=e;e=m(g),e===k?c[e].p(g,E):(pe(),B(c[k],1,1,()=>{c[k]=null}),me(),n=c[e],n?n.p(g,E):(n=c[e]=a[e](g),n.c()),F(n,1),n.m(r.parentNode,r)),g[4]?d?d.p(g,E):(d=nt(g),d.c(),d.m(s.parentNode,s)):d&&(d.d(1),d=null)},i(g){l||(F(n),l=!0)},o(g){B(n),l=!1},d(g){c[e].d(g),g&&G(r),d&&d.d(g),g&&G(s)}}}function Yt(t,e,n){let{stores:r}=e,{page:s}=e,{components:l}=e,{form:a}=e,{data_0:c=null}=e,{data_1:m=null}=e;gt(r.page.notify);let d=!1,g=!1,E=null;return $e(()=>{const k=r.page.subscribe(()=>{d&&(n(5,g=!0),n(6,E=document.title||"untitled page"))});return n(4,d=!0),k}),t.$$set=k=>{"stores"in k&&n(7,r=k.stores),"page"in k&&n(8,s=k.page),"components"in k&&n(0,l=k.components),"form"in k&&n(1,a=k.form),"data_0"in k&&n(2,c=k.data_0),"data_1"in k&&n(3,m=k.data_1)},t.$$.update=()=>{t.$$.dirty&384&&r.page.set(s)},[l,a,c,m,d,g,E,r,s]}class xt extends dt{constructor(e){super(),ht(this,e,Yt,Wt,pt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const zt="modulepreload",Xt=function(t,e){return new URL(t,e).href},rt={},ue=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(l=>{if(l=Xt(l,r),l in rt)return;rt[l]=!0;const a=l.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let g=s.length-1;g>=0;g--){const E=s[g];if(E.href===l&&(!a||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${c}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":zt,a||(d.as="script",d.crossOrigin=""),d.href=l,document.head.appendChild(d),a)return new Promise((g,E)=>{d.addEventListener("load",g),d.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>e())},Qt={},ge=[()=>ue(()=>import("./chunks/0-d9060bfa.js"),["./chunks/0-d9060bfa.js","./components/pages/_layout.svelte-553805d9.js","./chunks/index-4dc2d971.js","./chunks/index-29d28d03.js","./chunks/Button-70531b93.js","./chunks/Row-5b400ca3.js","./assets/Row-60614438.css","./chunks/Icon-10c06870.js","./assets/_layout-a79b33d6.css"],import.meta.url),()=>ue(()=>import("./chunks/1-bacbb3cf.js"),["./chunks/1-bacbb3cf.js","./components/pages/_error.svelte-016e7b31.js","./chunks/index-4dc2d971.js","./chunks/Row-5b400ca3.js","./assets/Row-60614438.css","./chunks/index-c7c9934e.js","./chunks/index-29d28d03.js","./assets/_error-c88a3739.css"],import.meta.url),()=>ue(()=>import("./chunks/2-e6847dbe.js"),["./chunks/2-e6847dbe.js","./components/pages/_page.svelte-43942a0b.js","./chunks/index-4dc2d971.js","./chunks/Button-70531b93.js","./chunks/Row-5b400ca3.js","./assets/Row-60614438.css","./chunks/Icon-10c06870.js","./chunks/Modal-fb25ed7f.js","./chunks/index-c7c9934e.js","./chunks/index-29d28d03.js","./assets/_page-9caf8780.css"],import.meta.url),()=>ue(()=>import("./chunks/3-94153703.js"),["./chunks/3-94153703.js","./components/pages/ordinals/_page.svelte-278710df.js","./chunks/index-4dc2d971.js","./chunks/Row-5b400ca3.js","./assets/Row-60614438.css","./chunks/Button-70531b93.js","./chunks/Modal-fb25ed7f.js","./assets/_page-e490de3a.css"],import.meta.url)],Zt=[],en={"/":[2],"/ordinals":[3]},tn={handleError:({error:t})=>{console.error(t)}};class Oe{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class ot{constructor(e,n){this.status=e,this.location=n}}function nn(t){t.client}const J={url:tt({}),page:tt({}),navigating:je(null),updated:Nt()};async function an(t){var e;for(const n in t)if(typeof((e=t[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(t).map(async([r,s])=>[r,await s])));return t}const rn=-1,on=-2,sn=-3,ln=-4,cn=-5,fn=-6;function un(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(l,a=!1){if(l===rn)return;if(l===sn)return NaN;if(l===ln)return 1/0;if(l===cn)return-1/0;if(l===fn)return-0;if(a)throw new Error("Invalid input");if(l in r)return r[l];const c=n[l];if(!c||typeof c!="object")r[l]=c;else if(Array.isArray(c))if(typeof c[0]=="string"){const m=c[0],d=e==null?void 0:e[m];if(d)return r[l]=d(s(c[1]));switch(m){case"Date":r[l]=new Date(c[1]);break;case"Set":const g=new Set;r[l]=g;for(let L=1;L<c.length;L+=1)g.add(s(c[L]));break;case"Map":const E=new Map;r[l]=E;for(let L=1;L<c.length;L+=2)E.set(s(c[L]),s(c[L+1]));break;case"RegExp":r[l]=new RegExp(c[1],c[2]);break;case"Object":r[l]=Object(c[1]);break;case"BigInt":r[l]=BigInt(c[1]);break;case"null":const k=Object.create(null);r[l]=k;for(let L=1;L<c.length;L+=2)k[c[L]]=s(c[L+1]);break;default:throw new Error(`Unknown type ${m}`)}}else{const m=new Array(c.length);r[l]=m;for(let d=0;d<c.length;d+=1){const g=c[d];g!==on&&(m[d]=s(g))}}else{const m={};r[l]=m;for(const d in c){const g=c[d];m[d]=s(g)}}return r[l]}return s(0)}function Ce(t){const e=new Set(t);function n(r,s){if(r){for(const l in r)if(l[0]!=="_"&&!e.has(l)){const a=t.join(", ");throw new Error(`Invalid export '${l}'${s?` in ${s}`:""} (valid exports are ${a}, or anything with a '_' prefix)`)}}}return n}Ce(["load","prerender","csr","ssr","trailingSlash"]);Ce(["load","prerender","csr","ssr","actions","trailingSlash"]);Ce(["GET","POST","PATCH","PUT","DELETE","prerender","trailingSlash"]);const Le=Ht(ge,Zt,en,Qt),Pe=ge[0],Te=ge[1];Pe();Te();let te={};try{te=JSON.parse(sessionStorage[ct])}catch{}function Ie(t){te[t]=de()}function dn({target:t,base:e}){var Ye;const n=document.documentElement,r=[];let s=null;const l={before_navigate:[],after_navigate:[]};let a={branch:[],error:null,url:null},c=!1,m=!1,d=!0,g=!1,E=!1,k=!1,L=!1,j,O=(Ye=history.state)==null?void 0:Ye[V];O||(O=Date.now(),history.replaceState({...history.state,[V]:O},"",location.href));const we=te[O];we&&(history.scrollRestoration="manual",scrollTo(we.x,we.y));let H,Ve,ne;async function qe(){ne=ne||Promise.resolve(),await ne,ne=null;const o=new URL(location.href),i=oe(o,!0);s=null,await Fe(i,o,[])}async function ye(o,{noScroll:i=!1,replaceState:u=!1,keepFocus:f=!1,state:h={},invalidateAll:p=!1},_,b){return typeof o=="string"&&(o=new URL(o,Qe(document))),se({url:o,scroll:i?de():null,keepfocus:f,redirect_chain:_,details:{state:h,replaceState:u},nav_token:b,accepted:()=>{p&&(L=!0)},blocked:()=>{},type:"goto"})}async function Be(o){const i=oe(o,!1);if(!i)throw new Error(`Attempted to preload a URL that does not belong to this app: ${o}`);return s={id:i.id,promise:Je(i).then(u=>(u.type==="loaded"&&u.state.error&&(s=null),u))},s.promise}async function ae(...o){const u=Le.filter(f=>o.some(h=>f.exec(h))).map(f=>Promise.all([...f.layouts,f.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(u)}async function Fe(o,i,u,f,h={},p){var b,y;Ve=h;let _=o&&await Je(o);if(_||(_=await We(i,{id:null},await Z(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=(o==null?void 0:o.url)||i,Ve!==h)return!1;if(_.type==="redirect")if(u.length>10||u.includes(i.pathname))_=await re({status:500,error:await Z(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return ye(new URL(_.location,i).href,{},[...u,i.pathname],h),!1;else((y=(b=_.props)==null?void 0:b.page)==null?void 0:y.status)>=400&&await J.updated.check()&&await ie(i);if(r.length=0,L=!1,g=!0,f&&f.details){const{details:w}=f,R=w.replaceState?0:1;w.state[V]=O+=R,history[w.replaceState?"replaceState":"pushState"](w.state,"",i)}if(s=null,m?(a=_.state,_.props.page&&(_.props.page.url=i),j.$set(_.props)):Ge(_),f){const{scroll:w,keepfocus:R}=f;if(R||Ae(),await le(),d){const I=i.hash&&document.getElementById(i.hash.slice(1));w?scrollTo(w.x,w.y):I?I.scrollIntoView():scrollTo(0,0)}}else await le();d=!0,_.props.page&&(H=_.props.page),p&&p(),g=!1}function Ge(o){var f;a=o.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),H=o.props.page,j=new xt({target:t,props:{...o.props,stores:J},hydrate:!0});const u={from:null,to:{params:a.params,route:{id:((f=a.route)==null?void 0:f.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};l.after_navigate.forEach(h=>h(u)),m=!0}async function X({url:o,params:i,branch:u,status:f,error:h,route:p,form:_}){const b=u.filter(Boolean);let y="never";for(const A of u)(A==null?void 0:A.slash)!==void 0&&(y=A.slash);o.pathname=St(o.pathname,y),o.search=o.search;const w={type:"loaded",state:{url:o,params:i,branch:u,error:h,route:p},props:{components:b.map(A=>A.node.component)}};_!==void 0&&(w.props.form=_);let R={},I=!H;for(let A=0;A<b.length;A+=1){const v=b[A];R={...R,...v.data},(I||!a.branch.some(T=>T===v))&&(w.props[`data_${A}`]=R,I=I||Object.keys(v.data??{}).length>0)}return I||(I=Object.keys(H.data).length!==Object.keys(R).length),(!a.url||o.href!==a.url.href||a.error!==h||_!==void 0||I)&&(w.props.page={error:h,params:i,route:p,status:f,url:new URL(o),form:_??null,data:I?R:H.data}),w}async function be({loader:o,parent:i,url:u,params:f,route:h,server_data_node:p}){var w,R,I;let _=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await o();if((w=y.universal)!=null&&w.load){let D=function(...v){for(const T of v){const{href:N}=new URL(T,u);b.dependencies.add(N)}};const A={route:{get id(){return b.route=!0,h.id}},params:new Proxy(f,{get:(v,T)=>(b.params.add(T),v[T])}),data:(p==null?void 0:p.data)??null,url:At(u,()=>{b.url=!0}),async fetch(v,T){let N;v instanceof Request?(N=v.url,T={body:v.method==="GET"||v.method==="HEAD"?void 0:await v.blob(),cache:v.cache,credentials:v.credentials,headers:v.headers,integrity:v.integrity,keepalive:v.keepalive,method:v.method,mode:v.mode,redirect:v.redirect,referrer:v.referrer,referrerPolicy:v.referrerPolicy,signal:v.signal,...T}):N=v;const S=new URL(N,u).href;return D(S),m?Ct(N,S,T):Dt(N,T)},setHeaders:()=>{},depends:D,parent(){return b.parent=!0,i()}};_=await y.universal.load.call(null,A)??null,_=_?await an(_):null}return{node:y,loader:o,server:p,universal:(R=y.universal)!=null&&R.load?{type:"data",data:_,uses:b}:null,data:_??(p==null?void 0:p.data)??null,slash:((I=y.universal)==null?void 0:I.trailingSlash)??(p==null?void 0:p.slash)}}function He(o,i,u,f,h){if(L)return!0;if(!f)return!1;if(f.parent&&o||f.route&&i||f.url&&u)return!0;for(const p of f.params)if(h[p]!==a.params[p])return!0;for(const p of f.dependencies)if(r.some(_=>_(new URL(p))))return!0;return!1}function ve(o,i){return(o==null?void 0:o.type)==="data"?{type:"data",data:o.data,uses:{dependencies:new Set(o.uses.dependencies??[]),params:new Set(o.uses.params??[]),parent:!!o.uses.parent,route:!!o.uses.route,url:!!o.uses.url},slash:o.slash}:(o==null?void 0:o.type)==="skip"?i??null:null}async function Je({id:o,invalidating:i,url:u,params:f,route:h}){if((s==null?void 0:s.id)===o)return s.promise;const{errors:p,layouts:_,leaf:b}=h,y=[..._,b];p.forEach(S=>S==null?void 0:S().catch(()=>{})),y.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let w=null;const R=a.url?o!==a.url.pathname+a.url.search:!1,I=a.route?o!==a.route.id:!1,D=y.reduce((S,U,P)=>{var Q;const $=a.branch[P],M=!!(U!=null&&U[0])&&(($==null?void 0:$.loader)!==U[1]||He(S.some(Boolean),I,R,(Q=$.server)==null?void 0:Q.uses,f));return S.push(M),S},[]);if(D.some(Boolean)){try{w=await st(u,D)}catch(S){return re({status:500,error:await Z(S,{url:u,params:f,route:{id:h.id}}),url:u,route:h})}if(w.type==="redirect")return w}const A=w==null?void 0:w.nodes;let v=!1;const T=y.map(async(S,U)=>{var Q;if(!S)return;const P=a.branch[U],$=A==null?void 0:A[U];if((!$||$.type==="skip")&&S[1]===(P==null?void 0:P.loader)&&!He(v,I,R,(Q=P.universal)==null?void 0:Q.uses,f))return P;if(v=!0,($==null?void 0:$.type)==="error")throw $;return be({loader:S[1],url:u,params:f,route:h,parent:async()=>{var ze;const xe={};for(let Ee=0;Ee<U;Ee+=1)Object.assign(xe,(ze=await T[Ee])==null?void 0:ze.data);return xe},server_data_node:ve($===void 0&&S[0]?{type:"skip"}:$??null,P==null?void 0:P.server)})});for(const S of T)S.catch(()=>{});const N=[];for(let S=0;S<y.length;S+=1)if(y[S])try{N.push(await T[S])}catch(U){if(U instanceof ot)return{type:"redirect",location:U.location};let P=500,$;A!=null&&A.includes(U)?(P=U.status??P,$=U.error):U instanceof Oe?(P=U.status,$=U.body):$=await Z(U,{params:f,url:u,route:{id:h.id}});const M=await Ke(S,N,p);return M?await X({url:u,params:f,branch:N.slice(0,M.idx).concat(M.node),status:P,error:$,route:h}):await We(u,{id:h.id},$,P)}else N.push(void 0);return await X({url:u,params:f,branch:N,status:200,error:null,route:h,form:i?void 0:null})}async function Ke(o,i,u){for(;o--;)if(u[o]){let f=o;for(;!i[f];)f-=1;try{return{idx:f+1,node:{node:await u[o](),loader:u[o],data:{},server:null,universal:null}}}catch{continue}}}async function re({status:o,error:i,url:u,route:f}){const h={},p=await Pe();let _=null;if(p.server)try{const w=await st(u,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;_=w.nodes[0]??null}catch{(u.origin!==location.origin||u.pathname!==location.pathname||c)&&await ie(u)}const b=await be({loader:Pe,url:u,params:h,route:f,parent:()=>Promise.resolve({}),server_data_node:ve(_)}),y={node:await Te(),loader:Te,universal:null,server:null,data:null};return await X({url:u,params:h,branch:[b,y],status:o,error:i,route:null})}function oe(o,i){if(Ue(o,e))return;const u=Rt(o.pathname.slice(e.length)||"/");for(const f of Le){const h=f.exec(u);if(h)return{id:o.pathname+o.search,invalidating:i,route:f,params:Lt(h),url:o}}}function Me({url:o,type:i,intent:u,delta:f}){var b,y;let h=!1;const p={from:{params:a.params,route:{id:((b=a.route)==null?void 0:b.id)??null},url:a.url},to:{params:(u==null?void 0:u.params)??null,route:{id:((y=u==null?void 0:u.route)==null?void 0:y.id)??null},url:o},willUnload:!u,type:i};f!==void 0&&(p.delta=f);const _={...p,cancel:()=>{h=!0}};return E||l.before_navigate.forEach(w=>w(_)),h?null:p}async function se({url:o,scroll:i,keepfocus:u,redirect_chain:f,details:h,type:p,delta:_,nav_token:b,accepted:y,blocked:w}){const R=oe(o,!1),I=Me({url:o,type:p,delta:_,intent:R});if(!I){w();return}Ie(O),y(),E=!0,m&&J.navigating.set(I),await Fe(R,o,f,{scroll:i,keepfocus:u,details:h},b,()=>{E=!1,l.after_navigate.forEach(D=>D(I)),J.navigating.set(null)})}async function We(o,i,u,f){return o.origin===location.origin&&o.pathname===location.pathname&&!c?await re({status:f,error:u,url:o,route:i}):await ie(o)}function ie(o){return location.href=o.href,new Promise(()=>{})}function ut(){let o;n.addEventListener("mousemove",p=>{const _=p.target;clearTimeout(o),o=setTimeout(()=>{f(_,2)},20)});function i(p){f(p.composedPath()[0],1)}n.addEventListener("mousedown",i),n.addEventListener("touchstart",i,{passive:!0});const u=new IntersectionObserver(p=>{for(const _ of p)_.isIntersecting&&(ae(new URL(_.target.href).pathname),u.unobserve(_.target))},{threshold:0});function f(p,_){const b=et(p,n);if(!b)return;const{url:y,external:w}=Se(b,e);if(w)return;const R=fe(b);R.reload||(_<=R.preload_data?Be(y):_<=R.preload_code&&ae(y.pathname))}function h(){u.disconnect();for(const p of n.querySelectorAll("a")){const{url:_,external:b}=Se(p,e);if(b)continue;const y=fe(p);y.reload||(y.preload_code===he.viewport&&u.observe(p),y.preload_code===he.eager&&ae(_.pathname))}}l.after_navigate.push(h),h()}return{after_navigate:o=>{$e(()=>(l.after_navigate.push(o),()=>{const i=l.after_navigate.indexOf(o);l.after_navigate.splice(i,1)}))},before_navigate:o=>{$e(()=>(l.before_navigate.push(o),()=>{const i=l.before_navigate.indexOf(o);l.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(g||!m)&&(d=!1)},goto:(o,i={})=>ye(o,i,[]),invalidate:o=>{if(typeof o=="function")r.push(o);else{const{href:i}=new URL(o,location.href);r.push(u=>u.href===i)}return qe()},invalidateAll:()=>(L=!0,qe()),preload_data:async o=>{const i=new URL(o,Qe(document));await Be(i)},preload_code:ae,apply_action:async o=>{if(o.type==="error"){const i=new URL(location.href),{branch:u,route:f}=a;if(!f)return;const h=await Ke(a.branch.length,u,f.errors);if(h){const p=await X({url:i,params:a.params,branch:u.slice(0,h.idx).concat(h.node),status:o.status??500,error:o.error,route:f});a=p.state,j.$set(p.props),le().then(Ae)}}else if(o.type==="redirect")ye(o.location,{invalidateAll:!0},[]);else{const i={form:o.data,page:{...H,form:o.data,status:o.status}};j.$set(i),o.type==="success"&&le().then(Ae)}},_start_router:()=>{var o;history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var f;let u=!1;if(!E){const h={from:{params:a.params,route:{id:((f=a.route)==null?void 0:f.id)??null},url:a.url},to:null,willUnload:!0,type:"leave",cancel:()=>u=!0};l.before_navigate.forEach(p=>p(h))}u?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Ie(O);try{sessionStorage[ct]=JSON.stringify(te)}catch{}}}),(o=navigator.connection)!=null&&o.saveData||ut(),n.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const u=et(i.composedPath()[0],n);if(!u)return;const{url:f,external:h,has:p}=Se(u,e),_=fe(u);if(!f||!(u instanceof SVGAElement)&&f.protocol!==location.protocol&&!(f.protocol==="https:"||f.protocol==="http:")||p.download)return;if(h||_.reload){Me({url:f,type:"link"})||i.preventDefault(),E=!0;return}const[y,w]=f.href.split("#");if(w!==void 0&&y===location.href.split("#")[0]){k=!0,Ie(O),a.url=f,J.page.set({...H,url:f}),J.page.notify();return}se({url:f,scroll:_.noscroll?de():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:f.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),n.addEventListener("submit",i=>{var y;if(i.defaultPrevented)return;const u=HTMLFormElement.prototype.cloneNode.call(i.target),f=i.submitter;if(((f==null?void 0:f.formMethod)||u.method)!=="get")return;const p=new URL(((y=i.submitter)==null?void 0:y.hasAttribute("formaction"))&&(f==null?void 0:f.formAction)||u.action);if(Ue(p,e))return;const{noscroll:_,reload:b}=fe(i.target);b||(i.preventDefault(),i.stopPropagation(),p.search=new URLSearchParams(new FormData(i.target)).toString(),se({url:p,scroll:_?de():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",i=>{var u;if((u=i.state)!=null&&u[V]){if(i.state[V]===O)return;const f=i.state[V]-O;se({url:new URL(location.href),scroll:te[i.state[V]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=i.state[V]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{k&&(k=!1,history.replaceState({...history.state,[V]:++O},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&J.navigating.set(null)})},_hydrate:async({status:o=200,error:i,node_ids:u,params:f,route:h,data:p,form:_})=>{c=!0;const b=new URL(location.href);({params:f={},route:h={id:null}}=oe(b,!1)||{});let y;try{const w=u.map(async(R,I)=>{const D=p[I];return be({loader:ge[R],url:b,params:f,route:h,parent:async()=>{const A={};for(let v=0;v<I;v+=1)Object.assign(A,(await w[v]).data);return A},server_data_node:ve(D)})});y=await X({url:b,params:f,branch:await Promise.all(w),status:o,error:i,form:_,route:Le.find(({id:R})=>R===h.id)??null})}catch(w){if(w instanceof ot){await ie(new URL(w.location,location.href));return}y=await re({status:w instanceof Oe?w.status:500,error:await Z(w,{url:b,params:f,route:h}),url:b,route:h})}Ge(y)}}}async function st(t,e){var l;const n=new URL(t);n.pathname=Ot(t.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(a=>a?"1":"").join("_"));const r=await _e(n.href),s=await r.json();if(!r.ok)throw new Error(s);return(l=s.nodes)==null||l.forEach(a=>{(a==null?void 0:a.type)==="data"&&(a.data=un(a.data),a.uses={dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url})}),s}function Z(t,e){return t instanceof Oe?t.body:tn.handleError({error:t,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Ae(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var r;(r=getSelection())==null||r.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function mn({env:t,hydrate:e,paths:n,target:r,version:s}){Pt(n),Tt(s);const l=dn({target:r,base:n.base});nn({client:l}),e?await l._hydrate(e):l.goto(location.href,{replaceState:!0}),l._start_router()}export{mn as start};