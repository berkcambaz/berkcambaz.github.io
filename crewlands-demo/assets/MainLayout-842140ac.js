import{r as p,l as u,h as S,k as z,j as s,F as e,I as i,i as n,T as x,A as g,U as R,c as N}from"./index-7b5acefe.js";import{P as h}from"./Progress-dab0c7a7.js";import{c as B}from"./createReactComponent-e05d64ef.js";import{S as C}from"./ScrollArea-95c3d691.js";import{B as o}from"./Button-2e435760.js";import"./get-floating-position-717958fa.js";import"./get-styles-ref-1f22bf7e.js";function m(t){return typeof t=="number"?t:typeof t=="string"?t.includes("px")?Number(t.replace("px","")):t.includes("rem")?Number(t.replace("rem",""))*16:Number(t):NaN}const f={passive:!0};function I(){const[t,r]=p.useState({width:0,height:0}),a=p.useCallback(()=>{r({width:window.innerWidth||0,height:window.innerHeight||0})},[]);return u("resize",a,f),u("orientationchange",a,f),p.useEffect(a,[]),t}var j=B("plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]]);const W=N(t=>({top:{maxWidth:t.breakpoints.xs,height:40,position:"fixed",top:0,left:0,right:0,padding:t.spacing.xs,margin:"0 auto",zIndex:101,boxSizing:"content-box"},bottom:{maxWidth:t.breakpoints.xs,height:64,position:"fixed",bottom:0,left:0,right:0,padding:`0 ${t.spacing.xs}`,paddingTop:t.spacing.xs,margin:"0 auto",zIndex:101,boxSizing:"content-box"},main:{maxWidth:t.breakpoints.xs,width:"100%",margin:"0 auto",padding:`0 ${t.spacing.xs}`,marginTop:40+m(t.spacing.xs)*2,marginBottom:64+m(t.spacing.xs)}}));function O(){const{height:t}=I(),{classes:r}=W(),a=S(d=>d.route),c=z(),l=d=>a===d?"filled":"default",b=()=>{c("/shop")},w=()=>{c("/backpack")},k=()=>{c("/battle")},y=()=>{c("/clan")},v=()=>{c("/events")};return s.jsxs(s.Fragment,{children:[s.jsxs(e,{direction:"row",gap:"xs",className:r.top,children:[s.jsxs(e,{align:"center",pos:"relative",style:{flex:1},children:[s.jsx(h,{ml:20,size:24,style:{flex:1}}),s.jsxs(e,{align:"center",justify:"center",pos:"absolute",left:0,w:40,h:40,children:[s.jsx(i,{src:n.misc.star,width:40,pos:"absolute"}),s.jsx(x,{order:5,color:"dark",pos:"absolute",children:"99"})]}),s.jsx(e,{pos:"absolute",justify:"center",w:"100%",pl:30,children:s.jsx(x,{order:5,children:"99/999"})})]}),s.jsxs(e,{align:"center",pos:"relative",style:{flex:1},children:[s.jsx(h,{mr:"md",size:24,style:{flex:1}}),s.jsxs(e,{align:"center",pos:"absolute",w:"100%",children:[s.jsx(g,{variant:"filled",color:"green",w:24,h:24,children:s.jsx(j,{})}),s.jsx(x,{order:5,align:"right",style:{flex:1},children:"999k"}),s.jsx(i,{src:n.misc.coin,width:40,pos:"relative"})]})]}),s.jsxs(e,{align:"center",pos:"relative",style:{flex:1},children:[s.jsx(h,{mr:"md",size:24,style:{flex:1}}),s.jsxs(e,{align:"center",pos:"absolute",w:"100%",children:[s.jsx(g,{variant:"filled",color:"green",w:24,h:24,children:s.jsx(j,{})}),s.jsx(x,{order:5,align:"right",style:{flex:1},children:"999k"}),s.jsx(i,{src:n.misc.gem,width:40,pos:"relative",bottom:3})]})]})]}),s.jsx(C,{h:t,children:s.jsx(e,{direction:"column",className:r.main,children:s.jsx(R,{})})}),s.jsx(e,{direction:"column",gap:"xs",className:r.bottom,children:s.jsxs(o.Group,{h:"100%",children:[s.jsx(o,{variant:l("shop"),onClick:b,h:"auto",style:{flex:1,borderBottomLeftRadius:0},children:s.jsx(i,{src:n.misc.shop,width:32})}),s.jsx(o,{variant:l("backpack"),onClick:w,h:"auto",style:{flex:1},children:s.jsx(i,{src:n.misc.backpack,width:32})}),s.jsx(o,{variant:l("battle"),onClick:k,h:"auto",style:{flex:1},children:s.jsx(i,{src:n.misc.battle,width:32})}),s.jsx(o,{variant:l("clan"),onClick:y,h:"auto",style:{flex:1},children:s.jsx(i,{src:n.misc.shield,width:32})}),s.jsx(o,{variant:l("events"),onClick:v,h:"auto",style:{flex:1,borderBottomRightRadius:0},children:s.jsx(i,{src:n.misc.circus,width:32})})]})})]})}export{O as default};
