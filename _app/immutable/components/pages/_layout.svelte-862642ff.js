import{S as Y,i as G,s as H,O as ge,p as ue,g as P,y as j,u as g,q as re,t as _,r as fe,d as h,j as L,P as Ce,Q as _e,a as C,k as Z,x as W,e as I,c as T,b as R,f as D,R as le,z as M,A as q,B as V,h as w,T as Le,U as Be,V as $e,v as X,W as Ae,F as b,G as v,H as p,I as k,X as je,L as se,n as x,J as B,K as A,Y as oe,C as F,D as S,M as K}from"../../chunks/index-4dc2d971.js";import{s as Fe}from"../../chunks/singletons-8ff0778c.js";import{w as Se}from"../../chunks/index-29d28d03.js";import{c as De,a as Ie,B as Te}from"../../chunks/Button-70531b93.js";import{c as y,C as Re,R as We,a as Me}from"../../chunks/Row-5b400ca3.js";import{I as ee}from"../../chunks/Icon-10c06870.js";const qe=()=>{const s=Fe;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},Ve={subscribe(s){return qe().page.subscribe(s)}},ce=["touchstart","click"],Qe=(s,e)=>{let n;if(typeof s=="string"&&typeof window<"u"&&document&&document.createElement){let t=document.querySelectorAll(s);if(t.length||(t=document.querySelectorAll(`#${s}`)),!t.length)throw new Error(`The target '${s}' could not be identified in the dom, tip: check spelling`);ce.forEach(l=>{t.forEach(a=>{a.addEventListener(l,e)})}),n=()=>{ce.forEach(l=>{t.forEach(a=>{a.removeEventListener(l,e)})})}}return()=>{typeof n=="function"&&(n(),n=void 0)}};function me(s){let e,n,t,l,a,u,f;const o=s[16].default,r=W(o,s,s[15],null);let i=[{style:n=s[2]?void 0:"overflow: hidden;"},s[9],{class:s[8]}],m={};for(let c=0;c<i.length;c+=1)m=C(m,i[c]);return{c(){e=I("div"),r&&r.c(),this.h()},l(c){e=T(c,"DIV",{style:!0,class:!0});var d=R(e);r&&r.l(d),d.forEach(h),this.h()},h(){D(e,m)},m(c,d){P(c,e,d),r&&r.m(e,null),a=!0,u||(f=[j(e,"introstart",s[17]),j(e,"introend",s[18]),j(e,"outrostart",s[19]),j(e,"outroend",s[20]),j(e,"introstart",function(){le(s[3])&&s[3].apply(this,arguments)}),j(e,"introend",function(){le(s[4])&&s[4].apply(this,arguments)}),j(e,"outrostart",function(){le(s[5])&&s[5].apply(this,arguments)}),j(e,"outroend",function(){le(s[6])&&s[6].apply(this,arguments)})],u=!0)},p(c,d){s=c,r&&r.p&&(!a||d&32768)&&M(r,o,s,s[15],a?V(o,s[15],d,null):q(s[15]),null),D(e,m=w(i,[(!a||d&4&&n!==(n=s[2]?void 0:"overflow: hidden;"))&&{style:n},d&512&&s[9],(!a||d&256)&&{class:s[8]}]))},i(c){a||(g(r,c),ge(()=>{l&&l.end(1),t=Le(e,De,{horizontal:s[1]}),t.start()}),a=!0)},o(c){_(r,c),t&&t.invalidate(),c&&(l=Be(e,Ie,{horizontal:s[1]})),a=!1},d(c){c&&h(e),r&&r.d(c),c&&l&&l.end(),u=!1,$e(f)}}}function Ue(s){let e,n,t,l;ge(s[21]);let a=s[0]&&me(s);return{c(){a&&a.c(),e=ue()},l(u){a&&a.l(u),e=ue()},m(u,f){a&&a.m(u,f),P(u,e,f),n=!0,t||(l=j(window,"resize",s[21]),t=!0)},p(u,[f]){u[0]?a?(a.p(u,f),f&1&&g(a,1)):(a=me(u),a.c(),g(a,1),a.m(e.parentNode,e)):a&&(re(),_(a,1,1,()=>{a=null}),fe())},i(u){n||(g(a),n=!0)},o(u){_(a),n=!1},d(u){a&&a.d(u),u&&h(e),t=!1,l()}}}function Ye(s,e,n){let t;const l=["isOpen","class","horizontal","navbar","onEntering","onEntered","onExiting","onExited","expand","toggler"];let a=L(e,l),{$$slots:u={},$$scope:f}=e;const o=Ce();let{isOpen:r=!1}=e,{class:i=""}=e,{horizontal:m=!1}=e,{navbar:c=!1}=e,{onEntering:d=()=>o("opening")}=e,{onEntered:$=()=>o("open")}=e,{onExiting:z=()=>o("closing")}=e,{onExited:E=()=>o("close")}=e,{expand:O=!1}=e,{toggler:ae=null}=e;_e(()=>Qe(ae,N=>{n(0,r=!r),N.preventDefault()}));let te=0,ne=!1;const Q={};Q.xs=0,Q.sm=576,Q.md=768,Q.lg=992,Q.xl=1200;function ie(){o("update",r)}function Ee(N){X.call(this,s,N)}function ze(N){X.call(this,s,N)}function Ne(N){X.call(this,s,N)}function Oe(N){X.call(this,s,N)}function Pe(){n(7,te=window.innerWidth)}return s.$$set=N=>{e=C(C({},e),Z(N)),n(9,a=L(e,l)),"isOpen"in N&&n(0,r=N.isOpen),"class"in N&&n(10,i=N.class),"horizontal"in N&&n(1,m=N.horizontal),"navbar"in N&&n(2,c=N.navbar),"onEntering"in N&&n(3,d=N.onEntering),"onEntered"in N&&n(4,$=N.onEntered),"onExiting"in N&&n(5,z=N.onExiting),"onExited"in N&&n(6,E=N.onExited),"expand"in N&&n(11,O=N.expand),"toggler"in N&&n(12,ae=N.toggler),"$$scope"in N&&n(15,f=N.$$scope)},s.$$.update=()=>{s.$$.dirty&1030&&n(8,t=y(i,{"collapse-horizontal":m,"navbar-collapse":c})),s.$$.dirty&26757&&c&&O&&(te>=Q[O]&&!r?(n(0,r=!0),n(13,ne=!0),ie()):te<Q[O]&&ne&&(n(0,r=!1),n(13,ne=!1),ie()))},[r,m,c,d,$,z,E,te,t,a,i,O,ae,ne,Q,f,u,Ee,ze,Ne,Oe,Pe]}class he extends Y{constructor(e){super(),G(this,e,Ye,Ue,H,{isOpen:0,class:10,horizontal:1,navbar:2,onEntering:3,onEntered:4,onExiting:5,onExited:6,expand:11,toggler:12})}}function Ge(s){let e,n;const t=s[12].default,l=W(t,s,s[11],null);let a=[s[1],{class:s[0]}],u={};for(let f=0;f<a.length;f+=1)u=C(u,a[f]);return{c(){e=I("ul"),l&&l.c(),this.h()},l(f){e=T(f,"UL",{class:!0});var o=R(e);l&&l.l(o),o.forEach(h),this.h()},h(){D(e,u)},m(f,o){P(f,e,o),l&&l.m(e,null),n=!0},p(f,[o]){l&&l.p&&(!n||o&2048)&&M(l,t,f,f[11],n?V(t,f[11],o,null):q(f[11]),null),D(e,u=w(a,[o&2&&f[1],(!n||o&1)&&{class:f[0]}]))},i(f){n||(g(l,f),n=!0)},o(f){_(l,f),n=!1},d(f){f&&h(e),l&&l.d(f)}}}function He(s){return s===!1?!1:s===!0||s==="xs"?"flex-column":`flex-${s}-column`}function Je(s,e,n){let t;const l=["class","tabs","pills","vertical","horizontal","justified","fill","navbar","card"];let a=L(e,l),{$$slots:u={},$$scope:f}=e,{class:o=""}=e,{tabs:r=!1}=e,{pills:i=!1}=e,{vertical:m=!1}=e,{horizontal:c=""}=e,{justified:d=!1}=e,{fill:$=!1}=e,{navbar:z=!1}=e,{card:E=!1}=e;return s.$$set=O=>{e=C(C({},e),Z(O)),n(1,a=L(e,l)),"class"in O&&n(2,o=O.class),"tabs"in O&&n(3,r=O.tabs),"pills"in O&&n(4,i=O.pills),"vertical"in O&&n(5,m=O.vertical),"horizontal"in O&&n(6,c=O.horizontal),"justified"in O&&n(7,d=O.justified),"fill"in O&&n(8,$=O.fill),"navbar"in O&&n(9,z=O.navbar),"card"in O&&n(10,E=O.card),"$$scope"in O&&n(11,f=O.$$scope)},s.$$.update=()=>{s.$$.dirty&2044&&n(0,t=y(o,z?"navbar-nav":"nav",c?`justify-content-${c}`:!1,He(m),{"nav-tabs":r,"card-header-tabs":E&&r,"nav-pills":i,"card-header-pills":E&&i,"nav-justified":d,"nav-fill":$}))},[t,a,o,r,i,m,c,d,$,z,E,f,u]}class be extends Y{constructor(e){super(),G(this,e,Je,Ge,H,{class:2,tabs:3,pills:4,vertical:5,horizontal:6,justified:7,fill:8,navbar:9,card:10})}}function Ke(s){let e;const n=s[10].default,t=W(n,s,s[11],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&2048)&&M(t,n,l,l[11],e?V(n,l[11],a,null):q(l[11]),null)},i(l){e||(g(t,l),e=!0)},o(l){_(t,l),e=!1},d(l){t&&t.d(l)}}}function Xe(s){let e,n;return e=new Re({props:{fluid:s[0]==="fluid",$$slots:{default:[Ze]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){p(e,t,l),n=!0},p(t,l){const a={};l&1&&(a.fluid=t[0]==="fluid"),l&2048&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function Ze(s){let e;const n=s[10].default,t=W(n,s,s[11],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&2048)&&M(t,n,l,l[11],e?V(n,l[11],a,null):q(l[11]),null)},i(l){e||(g(t,l),e=!0)},o(l){_(t,l),e=!1},d(l){t&&t.d(l)}}}function we(s){let e,n,t,l;const a=[Xe,Ke],u=[];function f(i,m){return i[0]?0:1}n=f(s),t=u[n]=a[n](s);let o=[s[2],{class:s[1]}],r={};for(let i=0;i<o.length;i+=1)r=C(r,o[i]);return{c(){e=I("nav"),t.c(),this.h()},l(i){e=T(i,"NAV",{class:!0});var m=R(e);t.l(m),m.forEach(h),this.h()},h(){D(e,r)},m(i,m){P(i,e,m),u[n].m(e,null),l=!0},p(i,[m]){let c=n;n=f(i),n===c?u[n].p(i,m):(re(),_(u[c],1,1,()=>{u[c]=null}),fe(),t=u[n],t?t.p(i,m):(t=u[n]=a[n](i),t.c()),g(t,1),t.m(e,null)),D(e,r=w(o,[m&4&&i[2],(!l||m&2)&&{class:i[1]}]))},i(i){l||(g(t),l=!0)},o(i){_(t),l=!1},d(i){i&&h(e),u[n].d()}}}function ye(s){return s===!1?!1:s===!0||s==="xs"?"navbar-expand":`navbar-expand-${s}`}function xe(s,e,n){let t;const l=["class","container","color","dark","expand","fixed","light","sticky"];let a=L(e,l),{$$slots:u={},$$scope:f}=e;Ae("navbar",{inNavbar:!0});let{class:o=""}=e,{container:r="fluid"}=e,{color:i=""}=e,{dark:m=!1}=e,{expand:c=""}=e,{fixed:d=""}=e,{light:$=!1}=e,{sticky:z=""}=e;return s.$$set=E=>{e=C(C({},e),Z(E)),n(2,a=L(e,l)),"class"in E&&n(3,o=E.class),"container"in E&&n(0,r=E.container),"color"in E&&n(4,i=E.color),"dark"in E&&n(5,m=E.dark),"expand"in E&&n(6,c=E.expand),"fixed"in E&&n(7,d=E.fixed),"light"in E&&n(8,$=E.light),"sticky"in E&&n(9,z=E.sticky),"$$scope"in E&&n(11,f=E.$$scope)},s.$$.update=()=>{s.$$.dirty&1016&&n(1,t=y(o,"navbar",ye(c),{"navbar-light":$,"navbar-dark":m,[`bg-${i}`]:i,[`fixed-${d}`]:d,[`sticky-${z}`]:z}))},[r,t,a,o,i,m,c,d,$,z,u,f]}class ve extends Y{constructor(e){super(),G(this,e,xe,we,H,{class:3,container:0,color:4,dark:5,expand:6,fixed:7,light:8,sticky:9})}}function et(s){let e,n;const t=s[5].default,l=W(t,s,s[4],null);let a=[s[1],{class:s[0]}],u={};for(let f=0;f<a.length;f+=1)u=C(u,a[f]);return{c(){e=I("li"),l&&l.c(),this.h()},l(f){e=T(f,"LI",{class:!0});var o=R(e);l&&l.l(o),o.forEach(h),this.h()},h(){D(e,u)},m(f,o){P(f,e,o),l&&l.m(e,null),n=!0},p(f,[o]){l&&l.p&&(!n||o&16)&&M(l,t,f,f[4],n?V(t,f[4],o,null):q(f[4]),null),D(e,u=w(a,[o&2&&f[1],(!n||o&1)&&{class:f[0]}]))},i(f){n||(g(l,f),n=!0)},o(f){_(l,f),n=!1},d(f){f&&h(e),l&&l.d(f)}}}function tt(s,e,n){let t;const l=["class","active"];let a=L(e,l),{$$slots:u={},$$scope:f}=e,{class:o=""}=e,{active:r=!1}=e;return s.$$set=i=>{e=C(C({},e),Z(i)),n(1,a=L(e,l)),"class"in i&&n(2,o=i.class),"active"in i&&n(3,r=i.active),"$$scope"in i&&n(4,f=i.$$scope)},s.$$.update=()=>{s.$$.dirty&12&&n(0,t=y(o,"nav-item",r?"active":!1))},[t,a,o,r,f,u]}class U extends Y{constructor(e){super(),G(this,e,tt,et,H,{class:2,active:3})}}function nt(s){let e,n,t,l;const a=s[8].default,u=W(a,s,s[7],null);let f=[s[3],{href:s[0]},{class:s[1]}],o={};for(let r=0;r<f.length;r+=1)o=C(o,f[r]);return{c(){e=I("a"),u&&u.c(),this.h()},l(r){e=T(r,"A",{href:!0,class:!0});var i=R(e);u&&u.l(i),i.forEach(h),this.h()},h(){D(e,o)},m(r,i){P(r,e,i),u&&u.m(e,null),n=!0,t||(l=[j(e,"click",s[9]),j(e,"click",s[2])],t=!0)},p(r,[i]){u&&u.p&&(!n||i&128)&&M(u,a,r,r[7],n?V(a,r[7],i,null):q(r[7]),null),D(e,o=w(f,[i&8&&r[3],(!n||i&1)&&{href:r[0]},(!n||i&2)&&{class:r[1]}]))},i(r){n||(g(u,r),n=!0)},o(r){_(u,r),n=!1},d(r){r&&h(e),u&&u.d(r),t=!1,$e(l)}}}function lt(s,e,n){let t;const l=["class","disabled","active","href"];let a=L(e,l),{$$slots:u={},$$scope:f}=e,{class:o=""}=e,{disabled:r=!1}=e,{active:i=!1}=e,{href:m="#"}=e;function c($){if(r){$.preventDefault(),$.stopImmediatePropagation();return}m==="#"&&$.preventDefault()}function d($){X.call(this,s,$)}return s.$$set=$=>{e=C(C({},e),Z($)),n(3,a=L(e,l)),"class"in $&&n(4,o=$.class),"disabled"in $&&n(5,r=$.disabled),"active"in $&&n(6,i=$.active),"href"in $&&n(0,m=$.href),"$$scope"in $&&n(7,f=$.$$scope)},s.$$.update=()=>{s.$$.dirty&112&&n(1,t=y(o,"nav-link",{disabled:r,active:i}))},[m,t,c,a,o,r,i,f,u,d]}class J extends Y{constructor(e){super(),G(this,e,lt,nt,H,{class:4,disabled:5,active:6,href:0})}}function st(s){let e,n,t,l;const a=s[5].default,u=W(a,s,s[4],null);let f=[s[2],{class:s[1]},{href:s[0]}],o={};for(let r=0;r<f.length;r+=1)o=C(o,f[r]);return{c(){e=I("a"),u&&u.c(),this.h()},l(r){e=T(r,"A",{class:!0,href:!0});var i=R(e);u&&u.l(i),i.forEach(h),this.h()},h(){D(e,o)},m(r,i){P(r,e,i),u&&u.m(e,null),n=!0,t||(l=j(e,"click",s[6]),t=!0)},p(r,[i]){u&&u.p&&(!n||i&16)&&M(u,a,r,r[4],n?V(a,r[4],i,null):q(r[4]),null),D(e,o=w(f,[i&4&&r[2],(!n||i&2)&&{class:r[1]},(!n||i&1)&&{href:r[0]}]))},i(r){n||(g(u,r),n=!0)},o(r){_(u,r),n=!1},d(r){r&&h(e),u&&u.d(r),t=!1,l()}}}function at(s,e,n){let t;const l=["class","href"];let a=L(e,l),{$$slots:u={},$$scope:f}=e,{class:o=""}=e,{href:r="/"}=e;function i(m){X.call(this,s,m)}return s.$$set=m=>{e=C(C({},e),Z(m)),n(2,a=L(e,l)),"class"in m&&n(3,o=m.class),"href"in m&&n(0,r=m.href),"$$scope"in m&&n(4,f=m.$$scope)},s.$$.update=()=>{s.$$.dirty&8&&n(1,t=y(o,"navbar-brand"))},[r,t,a,o,f,u,i]}class pe extends Y{constructor(e){super(),G(this,e,at,st,H,{class:3,href:0})}}function rt(s){let e;return{c(){e=I("span"),this.h()},l(n){e=T(n,"SPAN",{class:!0}),R(e).forEach(h),this.h()},h(){se(e,"class","navbar-toggler-icon")},m(n,t){P(n,e,t)},p:x,d(n){n&&h(e)}}}function ft(s){let e;const n=s[3].default,t=W(n,s,s[5],null),l=t||rt();return{c(){l&&l.c()},l(a){l&&l.l(a)},m(a,u){l&&l.m(a,u),e=!0},p(a,u){t&&t.p&&(!e||u&32)&&M(t,n,a,a[5],e?V(n,a[5],u,null):q(a[5]),null)},i(a){e||(g(l,a),e=!0)},o(a){_(l,a),e=!1},d(a){l&&l.d(a)}}}function it(s){let e,n;const t=[s[1],{class:s[0]}];let l={$$slots:{default:[ft]},$$scope:{ctx:s}};for(let a=0;a<t.length;a+=1)l=C(l,t[a]);return e=new Te({props:l}),e.$on("click",s[4]),{c(){b(e.$$.fragment)},l(a){v(e.$$.fragment,a)},m(a,u){p(e,a,u),n=!0},p(a,[u]){const f=u&3?w(t,[u&2&&je(a[1]),u&1&&{class:a[0]}]):{};u&32&&(f.$$scope={dirty:u,ctx:a}),e.$set(f)},i(a){n||(g(e.$$.fragment,a),n=!0)},o(a){_(e.$$.fragment,a),n=!1},d(a){k(e,a)}}}function ut(s,e,n){let t;const l=["class"];let a=L(e,l),{$$slots:u={},$$scope:f}=e,{class:o=""}=e;function r(i){X.call(this,s,i)}return s.$$set=i=>{e=C(C({},e),Z(i)),n(1,a=L(e,l)),"class"in i&&n(2,o=i.class),"$$scope"in i&&n(5,f=i.$$scope)},s.$$.update=()=>{s.$$.dirty&4&&n(0,t=y(o,"navbar-toggler"))},[t,a,o,u,r,f]}class ke extends Y{constructor(e){super(),G(this,e,ut,it,H,{class:2})}}function ot(s){let e,n;return e=new ve({props:{color:"dark",dark:!0,expand:"md",fixed:"bottom",$$slots:{default:[zt]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){p(e,t,l),n=!0},p(t,l){const a={};l&1025&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function ct(s){let e,n;return e=new ve({props:{style:`background-color: ${s[1]}; transition-duration: ${de};`,dark:!0,expand:"md",fixed:"top",$$slots:{default:[It]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){p(e,t,l),n=!0},p(t,l){const a={};l&2&&(a.style=`background-color: ${t[1]}; transition-duration: ${de};`),l&1025&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function mt(s){let e;return{c(){e=F("Bitcoin & Friends")},l(n){e=S(n,"Bitcoin & Friends")},m(n,t){P(n,e,t)},d(n){n&&h(e)}}}function dt(s){let e;return{c(){e=F("Ordinals")},l(n){e=S(n,"Ordinals")},m(n,t){P(n,e,t)},d(n){n&&h(e)}}}function gt(s){let e,n;return e=new J({props:{href:"/ordinals",$$slots:{default:[dt]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){p(e,t,l),n=!0},p(t,l){const a={};l&1024&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function _t(s){let e;return{c(){e=F("Patreon")},l(n){e=S(n,"Patreon")},m(n,t){P(n,e,t)},d(n){n&&h(e)}}}function $t(s){let e,n;return e=new J({props:{href:"https://www.patreon.com/bitcoinandfriends",target:"_blank",$$slots:{default:[_t]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){p(e,t,l),n=!0},p(t,l){const a={};l&1024&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function ht(s){let e,n;return e=new ee({props:{name:"youtube"}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){p(e,t,l),n=!0},p:x,i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function bt(s){let e,n;return e=new J({props:{href:"https://www.youtube.com/@BitcoinandFriends",target:"_blank",$$slots:{default:[ht]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){p(e,t,l),n=!0},p(t,l){const a={};l&1024&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function vt(s){let e,n;return e=new ee({props:{name:"twitter"}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){p(e,t,l),n=!0},p:x,i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function pt(s){let e,n;return e=new J({props:{href:"https://twitter.com/btcandfriends",target:"_blank",$$slots:{default:[vt]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){p(e,t,l),n=!0},p(t,l){const a={};l&1024&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function kt(s){let e,n,t,l,a,u,f,o;return e=new U({props:{$$slots:{default:[gt]},$$scope:{ctx:s}}}),t=new U({props:{$$slots:{default:[$t]},$$scope:{ctx:s}}}),a=new U({props:{$$slots:{default:[bt]},$$scope:{ctx:s}}}),f=new U({props:{$$slots:{default:[pt]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment),n=B(),b(t.$$.fragment),l=B(),b(a.$$.fragment),u=B(),b(f.$$.fragment)},l(r){v(e.$$.fragment,r),n=A(r),v(t.$$.fragment,r),l=A(r),v(a.$$.fragment,r),u=A(r),v(f.$$.fragment,r)},m(r,i){p(e,r,i),P(r,n,i),p(t,r,i),P(r,l,i),p(a,r,i),P(r,u,i),p(f,r,i),o=!0},p(r,i){const m={};i&1024&&(m.$$scope={dirty:i,ctx:r}),e.$set(m);const c={};i&1024&&(c.$$scope={dirty:i,ctx:r}),t.$set(c);const d={};i&1024&&(d.$$scope={dirty:i,ctx:r}),a.$set(d);const $={};i&1024&&($.$$scope={dirty:i,ctx:r}),f.$set($)},i(r){o||(g(e.$$.fragment,r),g(t.$$.fragment,r),g(a.$$.fragment,r),g(f.$$.fragment,r),o=!0)},o(r){_(e.$$.fragment,r),_(t.$$.fragment,r),_(a.$$.fragment,r),_(f.$$.fragment,r),o=!1},d(r){k(e,r),r&&h(n),k(t,r),r&&h(l),k(a,r),r&&h(u),k(f,r)}}}function Et(s){let e,n;return e=new be({props:{class:"ms-auto",navbar:!0,$$slots:{default:[kt]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){p(e,t,l),n=!0},p(t,l){const a={};l&1024&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function zt(s){let e,n,t,l,a,u;return e=new pe({props:{style:"margin-left: 1rem;",href:"/",$$slots:{default:[mt]},$$scope:{ctx:s}}}),t=new ke({}),t.$on("click",s[9]),a=new he({props:{isOpen:s[0],navbar:!0,expand:"md",$$slots:{default:[Et]},$$scope:{ctx:s}}}),a.$on("update",s[4]),{c(){b(e.$$.fragment),n=B(),b(t.$$.fragment),l=B(),b(a.$$.fragment)},l(f){v(e.$$.fragment,f),n=A(f),v(t.$$.fragment,f),l=A(f),v(a.$$.fragment,f)},m(f,o){p(e,f,o),P(f,n,o),p(t,f,o),P(f,l,o),p(a,f,o),u=!0},p(f,o){const r={};o&1024&&(r.$$scope={dirty:o,ctx:f}),e.$set(r);const i={};o&1&&(i.isOpen=f[0]),o&1024&&(i.$$scope={dirty:o,ctx:f}),a.$set(i)},i(f){u||(g(e.$$.fragment,f),g(t.$$.fragment,f),g(a.$$.fragment,f),u=!0)},o(f){_(e.$$.fragment,f),_(t.$$.fragment,f),_(a.$$.fragment,f),u=!1},d(f){k(e,f),f&&h(n),k(t,f),f&&h(l),k(a,f)}}}function Nt(s){let e;return{c(){e=F("Bitcoin & Friends")},l(n){e=S(n,"Bitcoin & Friends")},m(n,t){P(n,e,t)},d(n){n&&h(e)}}}function Ot(s){let e;return{c(){e=F("Ordinals")},l(n){e=S(n,"Ordinals")},m(n,t){P(n,e,t)},d(n){n&&h(e)}}}function Pt(s){let e,n;return e=new J({props:{href:"/ordinals",$$slots:{default:[Ot]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){p(e,t,l),n=!0},p(t,l){const a={};l&1024&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function Ct(s){let e;return{c(){e=F("Patreon")},l(n){e=S(n,"Patreon")},m(n,t){P(n,e,t)},d(n){n&&h(e)}}}function Lt(s){let e,n;return e=new J({props:{href:"https://www.patreon.com/bitcoinandfriends",target:"_blank",$$slots:{default:[Ct]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){p(e,t,l),n=!0},p(t,l){const a={};l&1024&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function Bt(s){let e,n;return e=new ee({props:{name:"youtube"}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){p(e,t,l),n=!0},p:x,i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function At(s){let e,n;return e=new J({props:{href:"https://www.youtube.com/@BitcoinandFriends",target:"_blank",$$slots:{default:[Bt]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){p(e,t,l),n=!0},p(t,l){const a={};l&1024&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function jt(s){let e,n;return e=new ee({props:{name:"twitter"}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){p(e,t,l),n=!0},p:x,i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function Ft(s){let e,n;return e=new J({props:{href:"https://twitter.com/btcandfriends",target:"_blank",$$slots:{default:[jt]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){p(e,t,l),n=!0},p(t,l){const a={};l&1024&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function St(s){let e,n,t,l,a,u,f,o;return e=new U({props:{$$slots:{default:[Pt]},$$scope:{ctx:s}}}),t=new U({props:{$$slots:{default:[Lt]},$$scope:{ctx:s}}}),a=new U({props:{$$slots:{default:[At]},$$scope:{ctx:s}}}),f=new U({props:{$$slots:{default:[Ft]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment),n=B(),b(t.$$.fragment),l=B(),b(a.$$.fragment),u=B(),b(f.$$.fragment)},l(r){v(e.$$.fragment,r),n=A(r),v(t.$$.fragment,r),l=A(r),v(a.$$.fragment,r),u=A(r),v(f.$$.fragment,r)},m(r,i){p(e,r,i),P(r,n,i),p(t,r,i),P(r,l,i),p(a,r,i),P(r,u,i),p(f,r,i),o=!0},p(r,i){const m={};i&1024&&(m.$$scope={dirty:i,ctx:r}),e.$set(m);const c={};i&1024&&(c.$$scope={dirty:i,ctx:r}),t.$set(c);const d={};i&1024&&(d.$$scope={dirty:i,ctx:r}),a.$set(d);const $={};i&1024&&($.$$scope={dirty:i,ctx:r}),f.$set($)},i(r){o||(g(e.$$.fragment,r),g(t.$$.fragment,r),g(a.$$.fragment,r),g(f.$$.fragment,r),o=!0)},o(r){_(e.$$.fragment,r),_(t.$$.fragment,r),_(a.$$.fragment,r),_(f.$$.fragment,r),o=!1},d(r){k(e,r),r&&h(n),k(t,r),r&&h(l),k(a,r),r&&h(u),k(f,r)}}}function Dt(s){let e,n;return e=new be({props:{class:"ms-auto",navbar:!0,$$slots:{default:[St]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){p(e,t,l),n=!0},p(t,l){const a={};l&1024&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function It(s){let e,n,t,l,a,u;return e=new pe({props:{style:"margin-left: 1rem;",href:"/",$$slots:{default:[Nt]},$$scope:{ctx:s}}}),t=new ke({}),t.$on("click",s[8]),a=new he({props:{isOpen:s[0],navbar:!0,expand:"md",$$slots:{default:[Dt]},$$scope:{ctx:s}}}),a.$on("update",s[4]),{c(){b(e.$$.fragment),n=B(),b(t.$$.fragment),l=B(),b(a.$$.fragment)},l(f){v(e.$$.fragment,f),n=A(f),v(t.$$.fragment,f),l=A(f),v(a.$$.fragment,f)},m(f,o){p(e,f,o),P(f,n,o),p(t,f,o),P(f,l,o),p(a,f,o),u=!0},p(f,o){const r={};o&1024&&(r.$$scope={dirty:o,ctx:f}),e.$set(r);const i={};o&1&&(i.isOpen=f[0]),o&1024&&(i.$$scope={dirty:o,ctx:f}),a.$set(i)},i(f){u||(g(e.$$.fragment,f),g(t.$$.fragment,f),g(a.$$.fragment,f),u=!0)},o(f){_(e.$$.fragment,f),_(t.$$.fragment,f),_(a.$$.fragment,f),u=!1},d(f){k(e,f),f&&h(n),k(t,f),f&&h(l),k(a,f)}}}function Tt(s){let e,n,t,l,a,u,f,o,r,i,m,c;return o=new ee({props:{name:"heart-fill"}}),{c(){e=I("p"),n=F("© Copyright B & Friends LLC "),t=F(s[3]),l=F(". All Rights Reserved."),a=B(),u=I("p"),f=F("Website made with "),b(o.$$.fragment),r=F(` by
			`),i=I("a"),m=F("Tirith Tech"),this.h()},l(d){e=T(d,"P",{});var $=R(e);n=S($,"© Copyright B & Friends LLC "),t=S($,s[3]),l=S($,". All Rights Reserved."),$.forEach(h),a=A(d),u=T(d,"P",{});var z=R(u);f=S(z,"Website made with "),v(o.$$.fragment,z),r=S(z,` by
			`),i=T(z,"A",{href:!0,target:!0,rel:!0});var E=R(i);m=S(E,"Tirith Tech"),E.forEach(h),z.forEach(h),this.h()},h(){se(i,"href","https://tirith.tech"),se(i,"target","_blank"),se(i,"rel","noreferrer")},m(d,$){P(d,e,$),K(e,n),K(e,t),K(e,l),P(d,a,$),P(d,u,$),K(u,f),p(o,u,null),K(u,r),K(u,i),K(i,m),c=!0},p:x,i(d){c||(g(o.$$.fragment,d),c=!0)},o(d){_(o.$$.fragment,d),c=!1},d(d){d&&h(e),d&&h(a),d&&h(u),k(o)}}}function Rt(s){let e,n;return e=new Me({props:{lg:"12",class:"text-center mt-4",$$slots:{default:[Tt]},$$scope:{ctx:s}}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){p(e,t,l),n=!0},p(t,l){const a={};l&1024&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function Wt(s){let e,n,t,l,a,u;const f=[ct,ot],o=[];function r(c,d){return c[2]==="desktop"?0:1}e=r(s),n=o[e]=f[e](s);const i=s[7].default,m=W(i,s,s[10],null);return a=new We({props:{class:"footer",$$slots:{default:[Rt]},$$scope:{ctx:s}}}),{c(){n.c(),t=B(),m&&m.c(),l=B(),b(a.$$.fragment)},l(c){n.l(c),t=A(c),m&&m.l(c),l=A(c),v(a.$$.fragment,c)},m(c,d){o[e].m(c,d),P(c,t,d),m&&m.m(c,d),P(c,l,d),p(a,c,d),u=!0},p(c,[d]){let $=e;e=r(c),e===$?o[e].p(c,d):(re(),_(o[$],1,1,()=>{o[$]=null}),fe(),n=o[e],n?n.p(c,d):(n=o[e]=f[e](c),n.c()),g(n,1),n.m(t.parentNode,t)),m&&m.p&&(!u||d&1024)&&M(m,i,c,c[10],u?V(i,c[10],d,null):q(c[10]),null);const z={};d&1024&&(z.$$scope={dirty:d,ctx:c}),a.$set(z)},i(c){u||(g(n),g(m,c),g(a.$$.fragment,c),u=!0)},o(c){_(n),_(m,c),_(a.$$.fragment,c),u=!1},d(c){o[e].d(c),c&&h(t),m&&m.d(c),c&&h(l),k(a,c)}}}let de="0.9s";function Mt(s,e,n){let t,l;oe(s,Ve,z=>n(6,t=z));let{$$slots:a={},$$scope:u}=e,f=new Date().getFullYear(),o=!1,r="transparent";function i(z){n(0,o=z.detail.isOpen)}function m(){window.scrollY>10?n(1,r="rgba(33, 37, 41, 1)"):n(1,r="rgba(33, 37, 41, 0)")}const c=Se("");oe(s,c,z=>n(2,l=z)),_e(()=>{window.innerWidth>768&&window.addEventListener("scroll",m);const z=window.matchMedia("(min-width: 768px)"),E=O=>{c.set(O.matches?"desktop":"mobile")};return E(z),z.addListener(E),()=>{z.removeListener(E)}});const d=()=>n(0,o=!o),$=()=>n(0,o=!o);return s.$$set=z=>{"$$scope"in z&&n(10,u=z.$$scope)},s.$$.update=()=>{s.$$.dirty&64&&t.url.pathname==="/ordinals"&&n(1,r="rgba(33, 37, 41, 1)")},[o,r,l,f,i,c,t,a,d,$,u]}class Ht extends Y{constructor(e){super(),G(this,e,Mt,Wt,H,{})}}export{Ht as default};
