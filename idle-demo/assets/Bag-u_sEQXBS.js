import{r as a,f as le,u as ce,e as ue,g as de,h as fe,R as m,i as b,k as me,l as pe,m as ge,n as he,o as ve,p as be,q as Re,j as c,F as ye,s as O,a as L,t as D,v as M,w as W}from"./index-qerRH5rX.js";import{C as B}from"./ContentList-TRk878Gp.js";import{u as we}from"./ScrollArea-tgAtQfOl.js";var xe={};function Se(){return typeof process<"u"&&xe?"production":"development"}function Ce({value:o,defaultValue:n,finalValue:e,onChange:t=()=>{}}){const[r,i]=a.useState(n!==void 0?n:e),l=(p,...y)=>{i(p),t==null||t(p,...y)};return o!==void 0?[o,t,!0]:[r,l,!1]}const ke={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function Ee(){const o=a.useRef(0),n=a.useRef(null),[e,t]=a.useState(ke),r=a.useMemo(()=>typeof window<"u"?new ResizeObserver(i=>{const l=i[0];l&&(cancelAnimationFrame(o.current),o.current=requestAnimationFrame(()=>{n.current&&t(l.contentRect)}))}):null,[]);return a.useEffect(()=>(n.current&&(r==null||r.observe(n.current)),()=>{r==null||r.disconnect(),o.current&&cancelAnimationFrame(o.current)}),[n.current]),[n,e]}function _e(o,n,e={autoInvoke:!1}){const t=a.useRef(null),r=a.useCallback((...l)=>{t.current||(t.current=window.setTimeout(()=>{o(l),t.current=null},n))},[n]),i=a.useCallback(()=>{t.current&&(window.clearTimeout(t.current),t.current=null)},[]);return a.useEffect(()=>(e.autoInvoke&&r(),i),[i,r]),{start:r,clear:i}}function R(o,n){const e=parseFloat(o.replace("px",""));return Number.isNaN(e)?n:e}function je(o,n){const e=window.getComputedStyle(o);return{top:R(e.getPropertyValue("padding-top"),n),right:R(e.getPropertyValue("padding-right"),n),bottom:R(e.getPropertyValue("padding-bottom"),n),left:R(e.getPropertyValue("padding-left"),n)}}var Ie={root:"m-cf365364",indicator:"m-9e182ccd",label:"m-1738fcb2",input:"m-1714d588",control:"m-69686b9b"};const U=Ie,Pe=4,Ae={},$e=ge((o,{radius:n,color:e,transitionDuration:t,size:r,transitionTimingFunction:i})=>({root:{"--sc-radius":n===void 0?void 0:he(n),"--sc-color":e?ve(e,o):void 0,"--sc-shadow":e?void 0:"var(--mantine-shadow-xs)","--sc-transition-duration":t===void 0?void 0:`${t}ms`,"--sc-transition-timing-function":i,"--sc-padding":be(r,"sc-padding"),"--sc-font-size":Re(r)}})),C=le((o,n)=>{var T,z;const e=ce("SegmentedControl",Ae,o),{classNames:t,className:r,style:i,styles:l,unstyled:p,vars:y,data:g,value:q,defaultValue:G,onChange:H,size:J,name:K,disabled:w,readOnly:k,fullWidth:Q,orientation:E,radius:ze,color:_,transitionDuration:Ve,transitionTimingFunction:Ne,variant:X,autoContrast:De,...Y}=e,f=ue({name:"SegmentedControl",props:e,classes:U,className:r,style:i,classNames:t,styles:l,unstyled:p,vars:y,varsResolver:$e}),{dir:h}=we(),j=de(),I=g.map(s=>typeof s=="string"?{label:s,value:s}:s),[u,Z]=Ce({value:q,defaultValue:G,finalValue:Array.isArray(g)?((T=I.find(s=>!s.disabled))==null?void 0:T.value)??((z=g[0])==null?void 0:z.value)??null:null,onChange:H}),[v,P]=a.useState({width:0,height:0,translate:[0,0]}),x=fe(K),S=a.useRef({}),A=a.useRef(null),[ee,te]=a.useState(!1),[$,F]=Ee();a.useEffect(()=>{if(u in S.current&&$.current){const s=S.current[u];if(s){const d=je(A.current,Pe),oe=s.getBoundingClientRect(),V=s.offsetWidth/oe.width,N=s.clientWidth*V||0,re=s.clientHeight*V||0,ae=F.width-s.parentElement.offsetLeft+(h==="rtl"?d.left:d.right)-N,ie=s.parentElement.offsetLeft-(h==="rtl"?d.right:d.left);P({width:N,height:re,translate:[h==="rtl"?ae*-1:ie,s.parentElement.offsetTop-d.top]})}else P({width:0,height:0,translate:[0,0]})}},[u,F,h]),_e(()=>{Se()!=="test"&&te(!0)},20,{autoInvoke:!0});const ne=I.map(s=>m.createElement(b,{...f("control"),mod:{active:u===s.value,orientation:E},key:s.value},m.createElement("input",{...f("input"),disabled:w||s.disabled,type:"radio",name:x,value:s.value,id:`${x}-${s.value}`,checked:u===s.value,onChange:()=>!k&&Z(s.value),"data-focus-ring":j.focusRing}),m.createElement(b,{component:"label",...f("label"),mod:{active:u===s.value&&!(w||s.disabled),disabled:w||s.disabled,"read-only":k},htmlFor:`${x}-${s.value}`,ref:d=>{S.current[s.value]=d},__vars:{"--sc-label-color":_!==void 0?me({color:_,theme:j}):void 0}},s.label))),se=pe($,A,n);return g.length===0?null:m.createElement(b,{...f("root"),variant:X,size:J,ref:se,mod:{"full-width":Q,orientation:E,initialization:!ee},...Y,role:"radiogroup"},typeof u=="string"&&m.createElement(b,{component:"span",...f("indicator"),__vars:{"--sc-indicator-width":`${v.width}px`,"--sc-indicator-height":`${v.height}px`,"--sc-indicator-transform":`translate(${v.translate[0]}px, ${v.translate[1]}px)`}}),ne)});C.classes=U;C.displayName="@mantine/core/SegmentedControl";function We(){const[o,n]=a.useState("monster"),e=t=>{switch(t){case"monster":break;case"item":break;default:return}n(t)};return c.jsxs(ye,{direction:"column",gap:"md",h:"100%",children:[c.jsx(C,{mx:"auto",w:"100%",maw:360,style:{flexShrink:0},data:[{value:"monster",label:"Monsters"},{value:"item",label:"Items"}],value:o,onChange:e}),o==="monster"&&c.jsx(Fe,{}),o==="item"&&c.jsx(Te,{})]})}function Fe(){const o=O(e=>{var t;return(t=e.player)==null?void 0:t.monsters}),n=e=>{W.setState(t=>{t.modals.monsterDetails={opened:!0,monsterId:D(e)}})};return c.jsx(B,{children:o&&Object.values(o).map(e=>c.jsx(L,{monster:e,onClick:()=>n(e)},D(e)))})}function Te(){const o=O(e=>{var t;return(t=e.player)==null?void 0:t.items}),n=e=>{W.setState(t=>{t.modals.itemDetails={opened:!0,itemId:M(e)}})};return c.jsx(B,{children:o&&Object.values(o).map(e=>c.jsx(L,{item:e,onClick:()=>n(e)},M(e)))})}export{We as default};
