import{d as b,r as d,e as O,R as y,B as T,f as S,g as q,u as G,b as K,a as C,j as i,O as M}from"./index-bac8f620.js";import{c as h,F as P}from"./Flex-99e3941b.js";import{A as N}from"./createReactComponent-3bc6d6fd.js";import{I as Q}from"./IconArrowLeft-c16c884f.js";import{T as U}from"./Title-fcdefcdc.js";import"./UnstyledButton-eaa25e51.js";function k(r){return typeof r=="number"?r:typeof r=="string"?r.includes("px")?Number(r.replace("px","")):r.includes("rem")?Number(r.replace("rem",""))*16:Number(r):NaN}var X=h((r,{radius:a,shadow:e})=>({root:{outline:0,WebkitTapHighlightColor:"transparent",display:"block",textDecoration:"none",color:r.colorScheme==="dark"?r.colors.dark[0]:r.black,backgroundColor:r.colorScheme==="dark"?r.colors.dark[7]:r.white,boxSizing:"border-box",borderRadius:r.fn.radius(a),boxShadow:r.shadows[e]||e||"none","&[data-with-border]":{border:`${b(1)} solid ${r.colorScheme==="dark"?r.colors.dark[4]:r.colors.gray[3]}`}}}));const Y=X;var Z=Object.defineProperty,g=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,j=(r,a,e)=>a in r?Z(r,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[a]=e,rr=(r,a)=>{for(var e in a||(a={}))B.call(a,e)&&j(r,e,a[e]);if(g)for(var e of g(a))I.call(a,e)&&j(r,e,a[e]);return r},er=(r,a)=>{var e={};for(var t in r)B.call(r,t)&&a.indexOf(t)<0&&(e[t]=r[t]);if(r!=null&&g)for(var t of g(r))a.indexOf(t)<0&&I.call(r,t)&&(e[t]=r[t]);return e};const ar={},L=d.forwardRef((r,a)=>{const e=O("Paper",ar,r),{className:t,children:o,radius:n,withBorder:s,shadow:p,unstyled:l,variant:f}=e,m=er(e,["className","children","radius","withBorder","shadow","unstyled","variant"]),{classes:w,cx:u}=Y({radius:n,shadow:p},{name:"Paper",unstyled:l,variant:f});return y.createElement(T,rr({className:u(w.root,t),"data-with-border":s||void 0,ref:a},m),o)});L.displayName="@mantine/core/Paper";const tr=S(L),z=d.createContext({padding:0}),or=z.Provider,nr=()=>d.useContext(z).padding;var sr=h((r,{padding:a,withBorder:e,inheritPadding:t})=>{const o=q({size:a,sizes:r.spacing}),n=`calc(-1 * ${o})`,s=r.colorScheme==="dark"?r.colors.dark[4]:r.colors.gray[3];return{cardSection:{display:"block",marginLeft:n,marginRight:n,paddingLeft:t?o:void 0,paddingRight:t?o:void 0,borderTop:e?`${b(1)} solid ${s}`:void 0,borderBottom:e?`${b(1)} solid ${s}`:void 0,"& + &":{borderTop:0},"&[data-first]":{marginTop:n,borderTop:0,borderBottom:e?`${b(1)} solid ${s}`:void 0},"&[data-last]":{marginBottom:n,borderBottom:0}}}});const ir=sr;var dr=Object.defineProperty,v=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,R=(r,a,e)=>a in r?dr(r,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[a]=e,lr=(r,a)=>{for(var e in a||(a={}))A.call(a,e)&&R(r,e,a[e]);if(v)for(var e of v(a))D.call(a,e)&&R(r,e,a[e]);return r},cr=(r,a)=>{var e={};for(var t in r)A.call(r,t)&&a.indexOf(t)<0&&(e[t]=r[t]);if(r!=null&&v)for(var t of v(r))a.indexOf(t)<0&&D.call(r,t)&&(e[t]=r[t]);return e};const pr={withBorder:!1,inheritPadding:!1},F=d.forwardRef((r,a)=>{const e=O("CardSection",pr,r),{className:t,withBorder:o,inheritPadding:n,unstyled:s,variant:p}=e,l=cr(e,["className","withBorder","inheritPadding","unstyled","variant"]),{classes:f,cx:m}=ir({padding:nr(),withBorder:o,inheritPadding:n},{name:"Card",unstyled:s,variant:p});return y.createElement(T,lr({className:m(f.cardSection,t),ref:a},l))});F.displayName="@mantine/core/CardSection";const V=S(F);var fr=h(r=>({root:{position:"relative",overflow:"hidden",backgroundColor:r.colorScheme==="dark"?r.colors.dark[6]:r.white}}));const mr=fr;var ur=Object.defineProperty,_=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,E=(r,a,e)=>a in r?ur(r,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[a]=e,br=(r,a)=>{for(var e in a||(a={}))W.call(a,e)&&E(r,e,a[e]);if(_)for(var e of _(a))H.call(a,e)&&E(r,e,a[e]);return r},yr=(r,a)=>{var e={};for(var t in r)W.call(r,t)&&a.indexOf(t)<0&&(e[t]=r[t]);if(r!=null&&_)for(var t of _(r))a.indexOf(t)<0&&H.call(r,t)&&(e[t]=r[t]);return e};const gr={padding:"md"},$=d.forwardRef((r,a)=>{const e=O("Card",gr,r),{className:t,padding:o,radius:n,children:s,unstyled:p,variant:l}=e,f=yr(e,["className","padding","radius","children","unstyled","variant"]),{classes:m,cx:w}=mr(null,{name:"Card",unstyled:p,variant:l}),u=d.Children.toArray(s),J=u.map((c,x)=>typeof c=="object"&&c&&"type"in c&&c.type===V?d.cloneElement(c,{variant:l,padding:o,"data-first":x===0||void 0,"data-last":x===u.length-1||void 0}):c);return y.createElement(or,{value:{padding:o}},y.createElement(tr,br({className:w(m.root,t),radius:n,p:o,ref:a},f),J))});$.Section=V;$.displayName="@mantine/core/Card";const vr=S($),_r=h(r=>({container:{position:"relative",maxWidth:r.breakpoints.sm,margin:"0 auto"},header:{position:"fixed",top:0,width:"100%",maxWidth:r.breakpoints.sm,height:64,margin:"0 auto",zIndex:100,borderTopRightRadius:0,borderTopLeftRadius:0,[`@media (max-width: ${r.breakpoints.sm})`]:{borderRadius:0}},main:{width:"100%",marginTop:64+k(r.spacing.md),marginBottom:0+k(r.spacing.md)}}));function xr(){const r=G(),a=K(n=>n.route),{classes:e}=_r(),t=()=>{switch(a){case"chat":case"lobby-preview":case"settings":case"saves":r(-1);break;case"join-lobby":case"lobby":r("/main-menu");break}},o=()=>{switch(a){case"chat":return"Chat";case"join-lobby":return"Join Lobby";case"lobby":return"Lobby";case"settings":return"Settings";case"saves":return"Saves";default:return"Not Found"}};return C(P,{className:e.container,children:[i(vr,{className:e.header,children:C(P,{align:"center",justify:"space-between",style:{height:"100%"},children:[i(N,{onClick:t,children:i(Q,{})}),i(U,{order:3,children:o()}),i(N,{style:{visibility:"hidden"}})]})}),i(P,{direction:"column",mx:"md",className:e.main,children:i(M,{})})]})}export{xr as default};
