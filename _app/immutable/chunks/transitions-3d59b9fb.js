import{g as a}from"./Row-78a3ff57.js";function n(s){return s.style.display="block",{duration:a(s),tick:t=>{t===0&&s.classList.add("show")}}}function e(s){return s.classList.remove("show"),{duration:a(s),tick:t=>{t===0&&(s.style.display="none")}}}function u(s,i){const t=i.horizontal?"width":"height";return s.style[t]=`${s.getBoundingClientRect()[t]}px`,s.classList.add("collapsing"),s.classList.remove("collapse","show"),{duration:a(s),tick:c=>{c>0?s.style[t]="":c===0&&(s.classList.remove("collapsing"),s.classList.add("collapse"))}}}function h(s,i){const t=i.horizontal,l=t?"width":"height";return s.classList.add("collapsing"),s.classList.remove("collapse","show"),s.style[l]=0,{duration:a(s),tick:o=>{o<1?t?s.style.width=`${s.scrollWidth}px`:s.style.height=`${s.scrollHeight}px`:(s.classList.remove("collapsing"),s.classList.add("collapse","show"),s.style[l]="")}}}function p(s){return s.style.display="block",{duration:a(s),tick:t=>{t>0&&s.classList.add("show")}}}function d(s){return s.classList.remove("show"),{duration:a(s),tick:t=>{t===1&&(s.style.display="none")}}}export{e as a,n as b,d as c,h as d,u as e,p as m};