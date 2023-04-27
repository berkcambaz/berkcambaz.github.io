import{l as V,m as F,n as M,o as T,r as x,c as E,R as C,B as N,d as L,p as W}from"./index-4b9284c8.js";function X(r){return Array.isArray(r)?r:[r]}function Y({cx:r,classes:e,context:t,classNames:n,name:o,cache:a}){const s=t.reduce((p,l)=>(Object.keys(l.classNames).forEach(i=>{typeof p[i]!="string"?p[i]=`${l.classNames[i]}`:p[i]=`${p[i]} ${l.classNames[i]}`}),p),{});return Object.keys(e).reduce((p,l)=>(p[l]=r(e[l],s[l],n!=null&&n[l],Array.isArray(o)?o.filter(Boolean).map(i=>`${(a==null?void 0:a.key)||"mantine"}-${i}-${l}`).join(" "):o?`${(a==null?void 0:a.key)||"mantine"}-${o}-${l}`:null),p),{})}var q=Object.defineProperty,m=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,P=(r,e,t)=>e in r?q(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,v=(r,e)=>{for(var t in e||(e={}))H.call(e,t)&&P(r,t,e[t]);if(m)for(var t of m(e))J.call(e,t)&&P(r,t,e[t]);return r};function O(r,e){return e&&Object.keys(e).forEach(t=>{r[t]?r[t]=v(v({},r[t]),e[t]):r[t]=v({},e[t])}),r}function g(r,e,t,n){const o=a=>typeof a=="function"?a(e,t||{},n):a||{};return Array.isArray(r)?r.map(a=>o(a.styles)).reduce((a,s)=>O(a,s),{}):o(r)}function K({ctx:r,theme:e,params:t,variant:n,size:o}){return r.reduce((a,s)=>(s.variants&&n in s.variants&&O(a,s.variants[n](e,t,{variant:n,size:o})),s.sizes&&o in s.sizes&&O(a,s.sizes[o](e,t,{variant:n,size:o})),a),{})}function Q(r){const e=typeof r=="function"?r:()=>r;function t(n,o){const a=V(),s=F(o==null?void 0:o.name),p=M(),l={variant:o==null?void 0:o.variant,size:o==null?void 0:o.size},{css:i,cx:f}=T(),u=e(a,n,l),_=g(o==null?void 0:o.styles,a,n,l),z=g(s,a,n,l),D=K({ctx:s,theme:a,params:n,variant:o==null?void 0:o.variant,size:o==null?void 0:o.size}),R=Object.fromEntries(Object.keys(u).map(c=>{const U=f({[i(u[c])]:!(o!=null&&o.unstyled)},i(D[c]),i(z[c]),i(_[c]));return[c,U]}));return{classes:Y({cx:f,classes:R,context:s,classNames:o==null?void 0:o.classNames,name:o==null?void 0:o.name,cache:p}),cx:f,theme:a}}return t}var Z=Object.defineProperty,k=Object.defineProperties,rr=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,er=Object.prototype.hasOwnProperty,tr=Object.prototype.propertyIsEnumerable,$=(r,e,t)=>e in r?Z(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,S=(r,e)=>{for(var t in e||(e={}))er.call(e,t)&&$(r,t,e[t]);if(w)for(var t of w(e))tr.call(e,t)&&$(r,t,e[t]);return r},nr=(r,e)=>k(r,rr(e)),or=Q(r=>({root:nr(S(S({},r.fn.focusStyles()),r.fn.fontStyles()),{cursor:"pointer",border:0,padding:0,appearance:"none",fontSize:r.fontSizes.md,backgroundColor:"transparent",textAlign:"left",color:r.colorScheme==="dark"?r.colors.dark[0]:r.black,textDecoration:"none",boxSizing:"border-box"})}));const ar=or;var sr=Object.defineProperty,d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,b=(r,e,t)=>e in r?sr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,lr=(r,e)=>{for(var t in e||(e={}))h.call(e,t)&&b(r,t,e[t]);if(d)for(var t of d(e))I.call(e,t)&&b(r,t,e[t]);return r},ir=(r,e)=>{var t={};for(var n in r)h.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&d)for(var n of d(r))e.indexOf(n)<0&&I.call(r,n)&&(t[n]=r[n]);return t};const A=x.forwardRef((r,e)=>{const t=E("UnstyledButton",{},r),{className:n,component:o="button",unstyled:a,variant:s}=t,p=ir(t,["className","component","unstyled","variant"]),{classes:l,cx:i}=ar(null,{name:"UnstyledButton",unstyled:a,variant:s});return C.createElement(N,lr({component:o,ref:e,className:i(l.root,n),type:o==="button"?"button":void 0},p))});A.displayName="@mantine/core/UnstyledButton";const Pr=L(A),pr={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}};var fr=Object.defineProperty,cr=Object.defineProperties,ur=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,j=(r,e,t)=>e in r?fr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,dr=(r,e)=>{for(var t in e||(e={}))B.call(e,t)&&j(r,t,e[t]);if(y)for(var t of y(e))G.call(e,t)&&j(r,t,e[t]);return r},yr=(r,e)=>cr(r,ur(e)),_r=(r,e)=>{var t={};for(var n in r)B.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&y)for(var n of y(r))e.indexOf(n)<0&&G.call(r,n)&&(t[n]=r[n]);return t};const vr={},Or=x.forwardRef((r,e)=>{const t=E("Flex",vr,r),{gap:n,rowGap:o,columnGap:a,align:s,justify:p,wrap:l,direction:i,sx:f}=t,u=_r(t,["gap","rowGap","columnGap","align","justify","wrap","direction","sx"]);return C.createElement(N,yr(dr({},u),{sx:[{display:"flex"},_=>W({gap:n,rowGap:o,columnGap:a,align:s,justify:p,wrap:l,direction:i},_,pr),...X(f)],ref:e}))});Or.displayName="@mantine/core/Flex";export{Or as F,Pr as U,Q as c,X as p};
