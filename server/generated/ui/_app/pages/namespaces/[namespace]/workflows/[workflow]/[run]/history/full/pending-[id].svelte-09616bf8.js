import{S as h,i as g,s as v,ad as u,l as p,f as w,ae as j,x as m,u as f,d as y,G as d,Q as r,j as $,m as x,o as A,v as C}from"../../../../../../../../chunks/vendor-aac54a92.js";import{p as E}from"../../../../../../../../chunks/stores-68dc7257.js";import{E as S}from"../../../../../../../../chunks/event-details-ebfb04eb.js";import{g as q}from"../../../../../../../../chunks/get-context-e8546704.js";import"../../../../../../../../chunks/format-camel-case-8b7e013d.js";import"../../../../../../../../chunks/code-block-cf5a23f3.js";function B(a){return{c:r,l:r,m:r,p:r,i:r,o:r,d:r}}function D(a){let n,c;return n=new S({props:{attributes:a[5]}}),{c(){$(n.$$.fragment)},l(e){x(n.$$.fragment,e)},m(e,t){A(n,e,t),c=!0},p(e,t){const o={};t&1&&(o.attributes=e[5]),n.$set(o)},i(e){c||(m(n.$$.fragment,e),c=!0)},o(e){f(n.$$.fragment,e),c=!1},d(e){C(n,e)}}}function G(a){return{c:r,l:r,m:r,p:r,i:r,o:r,d:r}}function I(a){let n,c,e,t={ctx:a,current:null,token:null,hasCatch:!1,pending:G,then:D,catch:B,value:5,blocks:[,,,]};return u(c=a[0],t),{c(){n=p(),t.block.c()},l(o){n=p(),t.block.l(o)},m(o,s){w(o,n,s),t.block.m(o,t.anchor=s),t.mount=()=>n.parentNode,t.anchor=n,e=!0},p(o,[s]){a=o,t.ctx=a,s&1&&c!==(c=a[0])&&u(c,t)||j(t,a,s)},i(o){e||(m(t.block),e=!0)},o(o){for(let s=0;s<3;s+=1){const i=t.blocks[s];f(i)}e=!1},d(o){o&&y(n),t.block.d(o),t.token=null,t=null}}}function N(a,n,c){let e,t,o;d(a,E,l=>c(2,t=l));const s=async(l,_)=>l.then(({pendingActivities:k})=>k.find(b=>b.activityId===_));let i=q("workflow");return d(a,i,l=>c(3,o=l)),a.$$.update=()=>{a.$$.dirty&12&&c(0,e=s(o,t.params.id))},[e,i,t,o]}class K extends h{constructor(n){super();g(this,n,N,I,v,{})}}export{K as default};
