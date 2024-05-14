import{p as S,u as z,j as e,c as A,r as T,f as N,a as I,B as C,b as W,d as p,F as d,L}from"./index-3Ssx9kna.js";import{T as x,B as f,A as v}from"./Button-DasI-bBW.js";var _={root:"m_849cf0da"};const R={underline:"hover"},y=S((n,r)=>{const{underline:t,className:o,unstyled:a,mod:s,...i}=z("Anchor",R,n);return e.jsx(x,{component:"a",ref:r,className:A({[_.root]:!a},o),...i,mod:[{underline:t},s],__staticSelector:"Anchor",unstyled:a})});y.classes=_;y.displayName="@mantine/core/Anchor";const D=["h1","h2","h3","h4","h5","h6"];function E(n,r){const t=r!==void 0?r:`h${n}`;return D.includes(t)?{fontSize:`var(--mantine-${t}-font-size)`,fontWeight:`var(--mantine-${t}-font-weight)`,lineHeight:`var(--mantine-${t}-line-height)`}:{fontSize:T(t),fontWeight:`var(--mantine-h${n}-font-weight)`,lineHeight:`var(--mantine-h${n}-line-height)`}}var B={root:"m_8a5d1357"};const F={order:1},H=W((n,{order:r,size:t,lineClamp:o,textWrap:a})=>{const s=E(r,t);return{root:{"--title-fw":s.fontWeight,"--title-lh":s.lineHeight,"--title-fz":s.fontSize,"--title-line-clamp":typeof o=="number"?o.toString():void 0,"--title-text-wrap":a}}}),j=N((n,r)=>{const t=z("Title",F,n),{classNames:o,className:a,style:s,styles:i,unstyled:h,order:l,vars:c,size:m,variant:u,lineClamp:g,textWrap:k,mod:b,...M}=t,$=I({name:"Title",props:t,classes:B,className:a,style:s,classNames:o,styles:i,unstyled:h,vars:c,varsResolver:H});return[1,2,3,4,5,6].includes(l)?e.jsx(C,{...$("root"),component:`h${l}`,variant:u,ref:r,mod:[{order:l,"data-line-clamp":typeof g=="number"},b],size:m,...M}):null});j.classes=B;j.displayName="@mantine/core/Title";/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var P={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=(n,r,t,o)=>{const a=p.forwardRef(({color:s="currentColor",size:i=24,stroke:h=2,className:l,children:c,...m},u)=>p.createElement("svg",{ref:u,...P[n],width:i,height:i,className:["tabler-icon",`tabler-icon-${r}`,l].join(" "),strokeWidth:h,stroke:s,...m},[...o.map(([g,k])=>p.createElement(g,k)),...Array.isArray(c)?c:[c]]));return a.displayName=`${t}`,a};/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var V=w("outline","brand-discord","IconBrandDiscord",[["path",{d:"M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-0"}],["path",{d:"M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3",key:"svg-2"}],["path",{d:"M7 16.5c3.5 1 6.5 1 10 0",key:"svg-3"}]]);/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var X=w("outline","brand-telegram","IconBrandTelegram",[["path",{d:"M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var J=w("outline","brand-x","IconBrandX",[["path",{d:"M4 4l11.733 16h4.267l-11.733 -16z",key:"svg-0"}],["path",{d:"M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772",key:"svg-1"}]]);function G(){return e.jsxs(d,{direction:"column",align:"center",justify:"center",gap:"md",h:"100%",children:[e.jsxs(d,{direction:"column",align:"center",children:[e.jsx(j,{children:"Lord Masters"}),e.jsx(x,{size:"sm",children:"v0.0.2 — May 14, 2024"})]}),e.jsxs(d,{direction:"column",gap:"md",w:"100%",maw:240,children:[e.jsx(f,{size:"md",component:L,to:"/game",children:"Create Match"}),e.jsx(f,{size:"md",variant:"light",children:"Join Match"}),e.jsx(f,{size:"md",variant:"light",children:"Settings"})]}),e.jsxs(d,{gap:"md",children:[e.jsx(v,{size:44,variant:"default",children:e.jsx(J,{size:28})}),e.jsx(v,{size:44,variant:"default",children:e.jsx(V,{size:28})}),e.jsx(v,{size:44,variant:"default",children:e.jsx(X,{size:28})})]}),e.jsxs(x,{children:[e.jsx(y,{href:"https://dorkodu.com",target:"_blank",children:"Dorkodu"})," © ",new Date().getFullYear()]})]})}export{G as default};
