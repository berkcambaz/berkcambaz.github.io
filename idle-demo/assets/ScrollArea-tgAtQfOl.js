import{r as i,_ as $,$ as re,R as f,u as F,l as W,i as M,f as q,e as ne,m as le,a0 as se}from"./index-qerRH5rX.js";function T(e){const o=i.useRef(e);return i.useEffect(()=>{o.current=e}),i.useMemo(()=>(...t)=>{var r;return(r=o.current)==null?void 0:r.call(o,...t)},[])}function Y(e,o){const t=T(e),r=i.useRef(0);return i.useEffect(()=>()=>window.clearTimeout(r.current),[]),i.useCallback(()=>{window.clearTimeout(r.current),r.current=window.setTimeout(t,o)},[t,o])}const ce=i.createContext({dir:"ltr",toggleDirection:()=>{},setDirection:()=>{}});function ae(){return i.useContext(ce)}const[ie,y]=$("ScrollArea.Root component was not found in tree");function L(e,o){const t=T(o);re(()=>{let r=0;if(e){const n=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(t)});return n.observe(e),()=>{window.cancelAnimationFrame(r),n.unobserve(e)}}},[e,t])}const ue=f.forwardRef((e,o)=>{const{style:t,...r}=e,n=y(),[l,s]=f.useState(0),[c,m]=f.useState(0),u=!!(l&&c);return L(n.scrollbarX,()=>{var h;const a=((h=n.scrollbarX)==null?void 0:h.offsetHeight)||0;n.onCornerHeightChange(a),m(a)}),L(n.scrollbarY,()=>{var h;const a=((h=n.scrollbarY)==null?void 0:h.offsetWidth)||0;n.onCornerWidthChange(a),s(a)}),u?f.createElement("div",{...r,ref:o,style:{...t,width:l,height:c}}):null}),de=f.forwardRef((e,o)=>{const t=y(),r=!!(t.scrollbarX&&t.scrollbarY);return t.type!=="scroll"&&r?f.createElement(ue,{...e,ref:o}):null}),fe={scrollHideDelay:1e3,type:"hover"},j=i.forwardRef((e,o)=>{const t=F("ScrollAreaRoot",fe,e),{type:r,scrollHideDelay:n,scrollbars:l,...s}=t,[c,m]=i.useState(null),[u,a]=i.useState(null),[h,b]=i.useState(null),[d,p]=i.useState(null),[E,g]=i.useState(null),[v,R]=i.useState(0),[D,C]=i.useState(0),[w,x]=i.useState(!1),[H,S]=i.useState(!1),P=W(o,z=>m(z));return f.createElement(ie,{value:{type:r,scrollHideDelay:n,scrollArea:c,viewport:u,onViewportChange:a,content:h,onContentChange:b,scrollbarX:d,onScrollbarXChange:p,scrollbarXEnabled:w,onScrollbarXEnabledChange:x,scrollbarY:E,onScrollbarYChange:g,scrollbarYEnabled:H,onScrollbarYEnabledChange:S,onCornerWidthChange:R,onCornerHeightChange:C}},f.createElement(M,{...s,ref:P,__vars:{"--sa-corner-width":l!=="xy"?"0px":`${v}px`,"--sa-corner-height":l!=="xy"?"0px":`${D}px`}}))});j.displayName="@mantine/core/ScrollAreaRoot";function G(e,o){const t=e/o;return Number.isNaN(t)?0:t}function U(e){const o=G(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,r=(e.scrollbar.size-t)*o;return Math.max(r,18)}function J(e,o){return t=>{if(e[0]===e[1]||o[0]===o[1])return o[0];const r=(o[1]-o[0])/(e[1]-e[0]);return o[0]+r*(t-e[0])}}function he(e,[o,t]){return Math.min(t,Math.max(o,e))}function k(e,o,t="ltr"){const r=U(o),n=o.scrollbar.paddingStart+o.scrollbar.paddingEnd,l=o.scrollbar.size-n,s=o.content-o.viewport,c=l-r,m=t==="ltr"?[0,s]:[s*-1,0],u=he(e,m);return J([0,s],[0,c])(u)}function me(e,o,t,r="ltr"){const n=U(t),l=n/2,s=o||l,c=n-s,m=t.scrollbar.paddingStart+s,u=t.scrollbar.size-t.scrollbar.paddingEnd-c,a=t.content-t.viewport,h=r==="ltr"?[0,a]:[a*-1,0];return J([m,u],h)(e)}function K(e,o){return e>0&&e<o}function X(e){return e?parseInt(e,10):0}function A(e,o,{checkForDefaultPrevented:t=!0}={}){return r=>{e==null||e(r),(t===!1||!r.defaultPrevented)&&(o==null||o(r))}}const[be,Q]=$("ScrollAreaScrollbar was not found in tree"),Z=i.forwardRef((e,o)=>{const{sizes:t,hasThumb:r,onThumbChange:n,onThumbPointerUp:l,onThumbPointerDown:s,onThumbPositionChange:c,onDragScroll:m,onWheelScroll:u,onResize:a,...h}=e,b=y(),[d,p]=f.useState(null),E=W(o,S=>p(S)),g=f.useRef(null),v=f.useRef(""),{viewport:R}=b,D=t.content-t.viewport,C=T(u),w=T(c),x=Y(a,10),H=S=>{if(g.current){const P=S.clientX-g.current.left,z=S.clientY-g.current.top;m({x:P,y:z})}};return i.useEffect(()=>{const S=P=>{const z=P.target;(d==null?void 0:d.contains(z))&&C(P,D)};return document.addEventListener("wheel",S,{passive:!1}),()=>document.removeEventListener("wheel",S,{passive:!1})},[R,d,D,C]),i.useEffect(w,[t,w]),L(d,x),L(b.content,x),f.createElement(be,{value:{scrollbar:d,hasThumb:r,onThumbChange:T(n),onThumbPointerUp:T(l),onThumbPositionChange:w,onThumbPointerDown:T(s)}},f.createElement("div",{...h,ref:E,style:{position:"absolute",...h.style},onPointerDown:A(e.onPointerDown,S=>{S.button===0&&(S.target.setPointerCapture(S.pointerId),g.current=d.getBoundingClientRect(),v.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",H(S))}),onPointerMove:A(e.onPointerMove,H),onPointerUp:A(e.onPointerUp,S=>{const P=S.target;P.hasPointerCapture(S.pointerId)&&P.releasePointerCapture(S.pointerId),document.body.style.webkitUserSelect=v.current,g.current=null})}))}),Se=i.forwardRef((e,o)=>{const{sizes:t,onSizesChange:r,style:n,...l}=e,s=y(),[c,m]=i.useState(),u=i.useRef(null),a=W(o,u,s.onScrollbarXChange);return i.useEffect(()=>{u.current&&m(getComputedStyle(u.current))},[u]),f.createElement(Z,{"data-orientation":"horizontal",...l,ref:a,sizes:t,style:{...n,"--sa-thumb-width":`${U(t)}px`},onThumbPointerDown:h=>e.onThumbPointerDown(h.x),onDragScroll:h=>e.onDragScroll(h.x),onWheelScroll:(h,b)=>{if(s.viewport){const d=s.viewport.scrollLeft+h.deltaX;e.onWheelScroll(d),K(d,b)&&h.preventDefault()}},onResize:()=>{u.current&&s.viewport&&c&&r({content:s.viewport.scrollWidth,viewport:s.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:X(c.paddingLeft),paddingEnd:X(c.paddingRight)}})}})}),pe=i.forwardRef((e,o)=>{const{sizes:t,onSizesChange:r,style:n,...l}=e,s=y(),[c,m]=f.useState(),u=i.useRef(null),a=W(o,u,s.onScrollbarYChange);return i.useEffect(()=>{u.current&&m(getComputedStyle(u.current))},[u]),f.createElement(Z,{...l,"data-orientation":"vertical",ref:a,sizes:t,style:{"--sa-thumb-height":`${U(t)}px`,...n},onThumbPointerDown:h=>e.onThumbPointerDown(h.y),onDragScroll:h=>e.onDragScroll(h.y),onWheelScroll:(h,b)=>{if(s.viewport){const d=s.viewport.scrollTop+h.deltaY;e.onWheelScroll(d),K(d,b)&&h.preventDefault()}},onResize:()=>{u.current&&s.viewport&&c&&r({content:s.viewport.scrollHeight,viewport:s.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:X(c.paddingTop),paddingEnd:X(c.paddingBottom)}})}})}),N=i.forwardRef((e,o)=>{const{orientation:t="vertical",...r}=e,{dir:n}=ae(),l=y(),s=i.useRef(null),c=i.useRef(0),[m,u]=i.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),a=G(m.viewport,m.content),h={...r,sizes:m,onSizesChange:u,hasThumb:a>0&&a<1,onThumbChange:d=>{s.current=d},onThumbPointerUp:()=>{c.current=0},onThumbPointerDown:d=>{c.current=d}},b=(d,p)=>me(d,c.current,m,p);return t==="horizontal"?f.createElement(Se,{...h,ref:o,onThumbPositionChange:()=>{if(l.viewport&&s.current){const d=l.viewport.scrollLeft,p=k(d,m,n);s.current.style.transform=`translate3d(${p}px, 0, 0)`}},onWheelScroll:d=>{l.viewport&&(l.viewport.scrollLeft=d)},onDragScroll:d=>{l.viewport&&(l.viewport.scrollLeft=b(d,n))}}):t==="vertical"?f.createElement(pe,{...h,ref:o,onThumbPositionChange:()=>{if(l.viewport&&s.current){const d=l.viewport.scrollTop,p=k(d,m);s.current.style.transform=`translate3d(0, ${p}px, 0)`}},onWheelScroll:d=>{l.viewport&&(l.viewport.scrollTop=d)},onDragScroll:d=>{l.viewport&&(l.viewport.scrollTop=b(d))}}):null}),ee=i.forwardRef((e,o)=>{const t=y(),{forceMount:r,...n}=e,[l,s]=i.useState(!1),c=e.orientation==="horizontal",m=Y(()=>{if(t.viewport){const u=t.viewport.offsetWidth<t.viewport.scrollWidth,a=t.viewport.offsetHeight<t.viewport.scrollHeight;s(c?u:a)}},10);return L(t.viewport,m),L(t.content,m),r||l?f.createElement(N,{"data-state":l?"visible":"hidden",...n,ref:o}):null}),ve=i.forwardRef((e,o)=>{const{forceMount:t,...r}=e,n=y(),[l,s]=i.useState(!1);return i.useEffect(()=>{const{scrollArea:c}=n;let m=0;if(c){const u=()=>{window.clearTimeout(m),s(!0)},a=()=>{m=window.setTimeout(()=>s(!1),n.scrollHideDelay)};return c.addEventListener("pointerenter",u),c.addEventListener("pointerleave",a),()=>{window.clearTimeout(m),c.removeEventListener("pointerenter",u),c.removeEventListener("pointerleave",a)}}},[n.scrollArea,n.scrollHideDelay]),t||l?f.createElement(ee,{"data-state":l?"visible":"hidden",...r,ref:o}):null}),we=i.forwardRef((e,o)=>{const{forceMount:t,...r}=e,n=y(),l=e.orientation==="horizontal",[s,c]=i.useState("hidden"),m=Y(()=>c("idle"),100);return i.useEffect(()=>{if(s==="idle"){const u=window.setTimeout(()=>c("hidden"),n.scrollHideDelay);return()=>window.clearTimeout(u)}},[s,n.scrollHideDelay]),i.useEffect(()=>{const{viewport:u}=n,a=l?"scrollLeft":"scrollTop";if(u){let h=u[a];const b=()=>{const d=u[a];h!==d&&(c("scrolling"),m()),h=d};return u.addEventListener("scroll",b),()=>u.removeEventListener("scroll",b)}},[n.viewport,l,m]),t||s!=="hidden"?f.createElement(N,{"data-state":s==="hidden"?"hidden":"visible",...r,ref:o,onPointerEnter:A(e.onPointerEnter,()=>c("interacting")),onPointerLeave:A(e.onPointerLeave,()=>c("idle"))}):null}),O=f.forwardRef((e,o)=>{const{forceMount:t,...r}=e,n=y(),{onScrollbarXEnabledChange:l,onScrollbarYEnabledChange:s}=n,c=e.orientation==="horizontal";return f.useEffect(()=>(c?l(!0):s(!0),()=>{c?l(!1):s(!1)}),[c,l,s]),n.type==="hover"?f.createElement(ve,{...r,ref:o,forceMount:t}):n.type==="scroll"?f.createElement(we,{...r,ref:o,forceMount:t}):n.type==="auto"?f.createElement(ee,{...r,ref:o,forceMount:t}):n.type==="always"?f.createElement(N,{...r,ref:o}):null});function ge(e,o=()=>{}){let t={left:e.scrollLeft,top:e.scrollTop},r=0;return function n(){const l={left:e.scrollLeft,top:e.scrollTop},s=t.left!==l.left,c=t.top!==l.top;(s||c)&&o(),t=l,r=window.requestAnimationFrame(n)}(),()=>window.cancelAnimationFrame(r)}const ye=i.forwardRef((e,o)=>{const{style:t,...r}=e,n=y(),l=Q(),{onThumbPositionChange:s}=l,c=W(o,a=>l.onThumbChange(a)),m=i.useRef(),u=Y(()=>{m.current&&(m.current(),m.current=void 0)},100);return i.useEffect(()=>{const{viewport:a}=n;if(a){const h=()=>{if(u(),!m.current){const b=ge(a,s);m.current=b,s()}};return s(),a.addEventListener("scroll",h),()=>a.removeEventListener("scroll",h)}},[n.viewport,u,s]),f.createElement("div",{"data-state":l.hasThumb?"visible":"hidden",...r,ref:c,style:{width:"var(--sa-thumb-width)",height:"var(--sa-thumb-height)",...t},onPointerDownCapture:A(e.onPointerDownCapture,a=>{const b=a.target.getBoundingClientRect(),d=a.clientX-b.left,p=a.clientY-b.top;l.onThumbPointerDown({x:d,y:p})}),onPointerUp:A(e.onPointerUp,l.onThumbPointerUp)})}),_=f.forwardRef((e,o)=>{const{forceMount:t,...r}=e,n=Q();return t||n.hasThumb?f.createElement(ye,{ref:o,...r}):null}),te=i.forwardRef(({children:e,style:o,...t},r)=>{const n=y(),l=W(r,n.onViewportChange);return f.createElement(M,{...t,ref:l,style:{overflowX:n.scrollbarXEnabled?"scroll":"hidden",overflowY:n.scrollbarYEnabled?"scroll":"hidden",...o}},f.createElement("div",{style:{minWidth:"100%",display:"table"},ref:n.onContentChange},e))});te.displayName="@mantine/core/ScrollAreaViewport";var Pe={root:"m-d57069b5",viewport:"m-c0783ff9",viewportInner:"m-f8f631dd",scrollbar:"m-c44ba933",thumb:"m-d8b5e363",corner:"m-21657268"};const B=Pe,oe={scrollHideDelay:1e3,type:"hover",scrollbars:"xy"},Ce=le((e,{scrollbarSize:o})=>({root:{"--scrollarea-scrollbar-size":se(o)}})),V=q((e,o)=>{const t=F("ScrollArea",oe,e),{classNames:r,className:n,style:l,styles:s,unstyled:c,scrollbarSize:m,vars:u,type:a,scrollHideDelay:h,viewportProps:b,viewportRef:d,onScrollPositionChange:p,children:E,offsetScrollbars:g,scrollbars:v,...R}=t,[D,C]=i.useState(!1),w=ne({name:"ScrollArea",props:t,classes:B,className:n,style:l,classNames:r,styles:s,unstyled:c,vars:u,varsResolver:Ce});return f.createElement(j,{type:a==="never"?"always":a,scrollHideDelay:h,ref:o,scrollbars:v,...w("root"),...R},f.createElement(te,{...b,...w("viewport"),ref:d,"data-offset-scrollbars":g===!0?"xy":g||void 0,"data-scrollbars":v||void 0,onScroll:typeof p=="function"?({currentTarget:x})=>p({x:x.scrollLeft,y:x.scrollTop}):void 0},E),(v==="xy"||v==="x")&&f.createElement(O,{...w("scrollbar"),orientation:"horizontal","data-hidden":a==="never"||void 0,forceMount:!0,onMouseEnter:()=>C(!0),onMouseLeave:()=>C(!1)},f.createElement(_,{...w("thumb")})),(v==="xy"||v==="y")&&f.createElement(O,{...w("scrollbar"),orientation:"vertical","data-hidden":a==="never"||void 0,forceMount:!0,onMouseEnter:()=>C(!0),onMouseLeave:()=>C(!1)},f.createElement(_,{...w("thumb")})),f.createElement(de,{...w("corner"),"data-hovered":D||void 0,"data-hidden":a==="never"||void 0}))});V.displayName="@mantine/core/ScrollArea";const I=q((e,o)=>{const{children:t,classNames:r,styles:n,scrollbarSize:l,scrollHideDelay:s,type:c,dir:m,offsetScrollbars:u,viewportRef:a,onScrollPositionChange:h,unstyled:b,variant:d,viewportProps:p,scrollbars:E,style:g,vars:v,...R}=F("ScrollAreaAutosize",oe,e);return f.createElement(M,{...R,ref:o,style:[{display:"flex",overflow:"auto"},g]},f.createElement(M,{style:{display:"flex",flexDirection:"column",flex:1}},f.createElement(V,{classNames:r,styles:n,scrollHideDelay:s,scrollbarSize:l,type:c,dir:m,offsetScrollbars:u,viewportRef:a,onScrollPositionChange:h,unstyled:b,variant:d,viewportProps:p,vars:v,scrollbars:E},t)))});V.classes=B;I.displayName="@mantine/core/ScrollAreaAutosize";I.classes=B;V.Autosize=I;export{V as S,ae as u};
