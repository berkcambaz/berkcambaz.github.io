import{r as o,_ as v,a as He,c as We,b as N,u as ve,d as Se,R as T,B as ne,p as Xe,j as h,C as j,F as O,T as L}from"./index-655578dc.js";import{g as ie,m as W,I as q,a as K,E as Z,b as we,M as $e,u as ue}from"./MonsterStats-616a3935.js";import{B as xe}from"./Button-7d9890a1.js";import{I as Ee}from"./IconSword-04ad5f54.js";function Ye(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function ye(...e){return t=>e.forEach(n=>Ye(n,t))}function U(...e){return o.useCallback(ye(...e),e)}const Pe=o.forwardRef((e,t)=>{const{children:n,...r}=e,c=o.Children.toArray(n),s=c.find(Ge);if(s){const l=s.props.children,d=c.map(f=>f===s?o.Children.count(l)>1?o.Children.only(null):o.isValidElement(l)?l.props.children:null:f);return o.createElement(re,v({},r,{ref:t}),o.isValidElement(l)?o.cloneElement(l,void 0,d):null)}return o.createElement(re,v({},r,{ref:t}),n)});Pe.displayName="Slot";const re=o.forwardRef((e,t)=>{const{children:n,...r}=e;return o.isValidElement(n)?o.cloneElement(n,{...Ve(r,n.props),ref:ye(t,n.ref)}):o.Children.count(n)>1?o.Children.only(null):null});re.displayName="SlotClone";const Fe=({children:e})=>o.createElement(o.Fragment,null,e);function Ge(e){return o.isValidElement(e)&&e.type===Fe}function Ve(e,t){const n={...t};for(const r in t){const c=e[r],s=t[r];/^on[A-Z]/.test(r)?c&&s?n[r]=(...d)=>{s(...d),c(...d)}:c&&(n[r]=c):r==="style"?n[r]={...c,...s}:r==="className"&&(n[r]=[c,s].filter(Boolean).join(" "))}return{...e,...n}}const qe=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],X=qe.reduce((e,t)=>{const n=o.forwardRef((r,c)=>{const{asChild:s,...l}=r,d=s?Pe:t;return o.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.createElement(d,v({},l,{ref:c}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),oe=globalThis!=null&&globalThis.document?o.useLayoutEffect:()=>{};function Ke(e,t){return o.useReducer((n,r)=>{const c=t[n][r];return c??n},e)}const Y=e=>{const{present:t,children:n}=e,r=Ze(t),c=typeof n=="function"?n({present:r.isPresent}):o.Children.only(n),s=U(r.ref,c.ref);return typeof n=="function"||r.isPresent?o.cloneElement(c,{ref:s}):null};Y.displayName="Presence";function Ze(e){const[t,n]=o.useState(),r=o.useRef({}),c=o.useRef(e),s=o.useRef("none"),l=e?"mounted":"unmounted",[d,f]=Ke(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.useEffect(()=>{const m=F(r.current);s.current=d==="mounted"?m:"none"},[d]),oe(()=>{const m=r.current,a=c.current;if(a!==e){const u=s.current,b=F(m);e?f("MOUNT"):b==="none"||(m==null?void 0:m.display)==="none"?f("UNMOUNT"):f(a&&u!==b?"ANIMATION_OUT":"UNMOUNT"),c.current=e}},[e,f]),oe(()=>{if(t){const m=i=>{const b=F(r.current).includes(i.animationName);i.target===t&&b&&He.flushSync(()=>f("ANIMATION_END"))},a=i=>{i.target===t&&(s.current=F(r.current))};return t.addEventListener("animationstart",a),t.addEventListener("animationcancel",m),t.addEventListener("animationend",m),()=>{t.removeEventListener("animationstart",a),t.removeEventListener("animationcancel",m),t.removeEventListener("animationend",m)}}else f("ANIMATION_END")},[t,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:o.useCallback(m=>{m&&(r.current=getComputedStyle(m)),n(m)},[])}}function F(e){return(e==null?void 0:e.animationName)||"none"}function Je(e,t=[]){let n=[];function r(s,l){const d=o.createContext(l),f=n.length;n=[...n,l];function m(i){const{scope:u,children:b,...p}=i,S=(u==null?void 0:u[e][f])||d,w=o.useMemo(()=>p,Object.values(p));return o.createElement(S.Provider,{value:w},b)}function a(i,u){const b=(u==null?void 0:u[e][f])||d,p=o.useContext(b);if(p)return p;if(l!==void 0)return l;throw new Error(`\`${i}\` must be used within \`${s}\``)}return m.displayName=s+"Provider",[m,a]}const c=()=>{const s=n.map(l=>o.createContext(l));return function(d){const f=(d==null?void 0:d[e])||s;return o.useMemo(()=>({[`__scope${e}`]:{...d,[e]:f}}),[d,f])}};return c.scopeName=e,[r,Qe(c,...t)]}function Qe(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(s){const l=r.reduce((d,{useScope:f,scopeName:m})=>{const i=f(s)[`__scope${m}`];return{...d,...i}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return n.scopeName=t.scopeName,n}function k(e){const t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}const et=o.createContext(void 0);function tt(e){const t=o.useContext(et);return e||t||"ltr"}function nt(e,[t,n]){return Math.min(n,Math.max(t,e))}function I(e,t,{checkForDefaultPrevented:n=!0}={}){return function(c){if(e==null||e(c),n===!1||!c.defaultPrevented)return t==null?void 0:t(c)}}function rt(e,t){return o.useReducer((n,r)=>{const c=t[n][r];return c??n},e)}const _e="ScrollArea",[Ce,_n]=Je(_e),[ot,_]=Ce(_e),ct=o.forwardRef((e,t)=>{const{__scopeScrollArea:n,type:r="hover",dir:c,scrollHideDelay:s=600,...l}=e,[d,f]=o.useState(null),[m,a]=o.useState(null),[i,u]=o.useState(null),[b,p]=o.useState(null),[S,w]=o.useState(null),[x,C]=o.useState(0),[y,P]=o.useState(0),[$,A]=o.useState(!1),[M,z]=o.useState(!1),g=U(t,R=>f(R)),E=tt(c);return o.createElement(ot,{scope:n,type:r,dir:E,scrollHideDelay:s,scrollArea:d,viewport:m,onViewportChange:a,content:i,onContentChange:u,scrollbarX:b,onScrollbarXChange:p,scrollbarXEnabled:$,onScrollbarXEnabledChange:A,scrollbarY:S,onScrollbarYChange:w,scrollbarYEnabled:M,onScrollbarYEnabledChange:z,onCornerWidthChange:C,onCornerHeightChange:P},o.createElement(X.div,v({dir:E},l,{ref:g,style:{position:"relative","--radix-scroll-area-corner-width":x+"px","--radix-scroll-area-corner-height":y+"px",...e.style}})))}),st="ScrollAreaViewport",at=o.forwardRef((e,t)=>{const{__scopeScrollArea:n,children:r,...c}=e,s=_(st,n),l=o.useRef(null),d=U(t,l,s.onViewportChange);return o.createElement(o.Fragment,null,o.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),o.createElement(X.div,v({"data-radix-scroll-area-viewport":""},c,{ref:d,style:{overflowX:s.scrollbarXEnabled?"scroll":"hidden",overflowY:s.scrollbarYEnabled?"scroll":"hidden",...e.style}}),o.createElement("div",{ref:s.onContentChange,style:{minWidth:"100%",display:"table"}},r)))}),D="ScrollAreaScrollbar",lt=o.forwardRef((e,t)=>{const{forceMount:n,...r}=e,c=_(D,e.__scopeScrollArea),{onScrollbarXEnabledChange:s,onScrollbarYEnabledChange:l}=c,d=e.orientation==="horizontal";return o.useEffect(()=>(d?s(!0):l(!0),()=>{d?s(!1):l(!1)}),[d,s,l]),c.type==="hover"?o.createElement(it,v({},r,{ref:t,forceMount:n})):c.type==="scroll"?o.createElement(ut,v({},r,{ref:t,forceMount:n})):c.type==="auto"?o.createElement(Ae,v({},r,{ref:t,forceMount:n})):c.type==="always"?o.createElement(le,v({},r,{ref:t})):null}),it=o.forwardRef((e,t)=>{const{forceMount:n,...r}=e,c=_(D,e.__scopeScrollArea),[s,l]=o.useState(!1);return o.useEffect(()=>{const d=c.scrollArea;let f=0;if(d){const m=()=>{window.clearTimeout(f),l(!0)},a=()=>{f=window.setTimeout(()=>l(!1),c.scrollHideDelay)};return d.addEventListener("pointerenter",m),d.addEventListener("pointerleave",a),()=>{window.clearTimeout(f),d.removeEventListener("pointerenter",m),d.removeEventListener("pointerleave",a)}}},[c.scrollArea,c.scrollHideDelay]),o.createElement(Y,{present:n||s},o.createElement(Ae,v({"data-state":s?"visible":"hidden"},r,{ref:t})))}),ut=o.forwardRef((e,t)=>{const{forceMount:n,...r}=e,c=_(D,e.__scopeScrollArea),s=e.orientation==="horizontal",l=Q(()=>f("SCROLL_END"),100),[d,f]=rt("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return o.useEffect(()=>{if(d==="idle"){const m=window.setTimeout(()=>f("HIDE"),c.scrollHideDelay);return()=>window.clearTimeout(m)}},[d,c.scrollHideDelay,f]),o.useEffect(()=>{const m=c.viewport,a=s?"scrollLeft":"scrollTop";if(m){let i=m[a];const u=()=>{const b=m[a];i!==b&&(f("SCROLL"),l()),i=b};return m.addEventListener("scroll",u),()=>m.removeEventListener("scroll",u)}},[c.viewport,s,f,l]),o.createElement(Y,{present:n||d!=="hidden"},o.createElement(le,v({"data-state":d==="hidden"?"hidden":"visible"},r,{ref:t,onPointerEnter:I(e.onPointerEnter,()=>f("POINTER_ENTER")),onPointerLeave:I(e.onPointerLeave,()=>f("POINTER_LEAVE"))})))}),Ae=o.forwardRef((e,t)=>{const n=_(D,e.__scopeScrollArea),{forceMount:r,...c}=e,[s,l]=o.useState(!1),d=e.orientation==="horizontal",f=Q(()=>{if(n.viewport){const m=n.viewport.offsetWidth<n.viewport.scrollWidth,a=n.viewport.offsetHeight<n.viewport.scrollHeight;l(d?m:a)}},10);return H(n.viewport,f),H(n.content,f),o.createElement(Y,{present:r||s},o.createElement(le,v({"data-state":s?"visible":"hidden"},c,{ref:t})))}),le=o.forwardRef((e,t)=>{const{orientation:n="vertical",...r}=e,c=_(D,e.__scopeScrollArea),s=o.useRef(null),l=o.useRef(0),[d,f]=o.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),m=je(d.viewport,d.content),a={...r,sizes:d,onSizesChange:f,hasThumb:m>0&&m<1,onThumbChange:u=>s.current=u,onThumbPointerUp:()=>l.current=0,onThumbPointerDown:u=>l.current=u};function i(u,b){return vt(u,l.current,d,b)}return n==="horizontal"?o.createElement(dt,v({},a,{ref:t,onThumbPositionChange:()=>{if(c.viewport&&s.current){const u=c.viewport.scrollLeft,b=de(u,d,c.dir);s.current.style.transform=`translate3d(${b}px, 0, 0)`}},onWheelScroll:u=>{c.viewport&&(c.viewport.scrollLeft=u)},onDragScroll:u=>{c.viewport&&(c.viewport.scrollLeft=i(u,c.dir))}})):n==="vertical"?o.createElement(ft,v({},a,{ref:t,onThumbPositionChange:()=>{if(c.viewport&&s.current){const u=c.viewport.scrollTop,b=de(u,d);s.current.style.transform=`translate3d(0, ${b}px, 0)`}},onWheelScroll:u=>{c.viewport&&(c.viewport.scrollTop=u)},onDragScroll:u=>{c.viewport&&(c.viewport.scrollTop=i(u))}})):null}),dt=o.forwardRef((e,t)=>{const{sizes:n,onSizesChange:r,...c}=e,s=_(D,e.__scopeScrollArea),[l,d]=o.useState(),f=o.useRef(null),m=U(t,f,s.onScrollbarXChange);return o.useEffect(()=>{f.current&&d(getComputedStyle(f.current))},[f]),o.createElement(Te,v({"data-orientation":"horizontal"},c,{ref:m,sizes:n,style:{bottom:0,left:s.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:s.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":J(n)+"px",...e.style},onThumbPointerDown:a=>e.onThumbPointerDown(a.x),onDragScroll:a=>e.onDragScroll(a.x),onWheelScroll:(a,i)=>{if(s.viewport){const u=s.viewport.scrollLeft+a.deltaX;e.onWheelScroll(u),De(u,i)&&a.preventDefault()}},onResize:()=>{f.current&&s.viewport&&l&&r({content:s.viewport.scrollWidth,viewport:s.viewport.offsetWidth,scrollbar:{size:f.current.clientWidth,paddingStart:G(l.paddingLeft),paddingEnd:G(l.paddingRight)}})}}))}),ft=o.forwardRef((e,t)=>{const{sizes:n,onSizesChange:r,...c}=e,s=_(D,e.__scopeScrollArea),[l,d]=o.useState(),f=o.useRef(null),m=U(t,f,s.onScrollbarYChange);return o.useEffect(()=>{f.current&&d(getComputedStyle(f.current))},[f]),o.createElement(Te,v({"data-orientation":"vertical"},c,{ref:m,sizes:n,style:{top:0,right:s.dir==="ltr"?0:void 0,left:s.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":J(n)+"px",...e.style},onThumbPointerDown:a=>e.onThumbPointerDown(a.y),onDragScroll:a=>e.onDragScroll(a.y),onWheelScroll:(a,i)=>{if(s.viewport){const u=s.viewport.scrollTop+a.deltaY;e.onWheelScroll(u),De(u,i)&&a.preventDefault()}},onResize:()=>{f.current&&s.viewport&&l&&r({content:s.viewport.scrollHeight,viewport:s.viewport.offsetHeight,scrollbar:{size:f.current.clientHeight,paddingStart:G(l.paddingTop),paddingEnd:G(l.paddingBottom)}})}}))}),[mt,Re]=Ce(D),Te=o.forwardRef((e,t)=>{const{__scopeScrollArea:n,sizes:r,hasThumb:c,onThumbChange:s,onThumbPointerUp:l,onThumbPointerDown:d,onThumbPositionChange:f,onDragScroll:m,onWheelScroll:a,onResize:i,...u}=e,b=_(D,n),[p,S]=o.useState(null),w=U(t,g=>S(g)),x=o.useRef(null),C=o.useRef(""),y=b.viewport,P=r.content-r.viewport,$=k(a),A=k(f),M=Q(i,10);function z(g){if(x.current){const E=g.clientX-x.current.left,R=g.clientY-x.current.top;m({x:E,y:R})}}return o.useEffect(()=>{const g=E=>{const R=E.target;(p==null?void 0:p.contains(R))&&$(E,P)};return document.addEventListener("wheel",g,{passive:!1}),()=>document.removeEventListener("wheel",g,{passive:!1})},[y,p,P,$]),o.useEffect(A,[r,A]),H(p,M),H(b.content,M),o.createElement(mt,{scope:n,scrollbar:p,hasThumb:c,onThumbChange:k(s),onThumbPointerUp:k(l),onThumbPositionChange:A,onThumbPointerDown:k(d)},o.createElement(X.div,v({},u,{ref:w,style:{position:"absolute",...u.style},onPointerDown:I(e.onPointerDown,g=>{g.button===0&&(g.target.setPointerCapture(g.pointerId),x.current=p.getBoundingClientRect(),C.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",z(g))}),onPointerMove:I(e.onPointerMove,z),onPointerUp:I(e.onPointerUp,g=>{const E=g.target;E.hasPointerCapture(g.pointerId)&&E.releasePointerCapture(g.pointerId),document.body.style.webkitUserSelect=C.current,x.current=null})})))}),ce="ScrollAreaThumb",ht=o.forwardRef((e,t)=>{const{forceMount:n,...r}=e,c=Re(ce,e.__scopeScrollArea);return o.createElement(Y,{present:n||c.hasThumb},o.createElement(bt,v({ref:t},r)))}),bt=o.forwardRef((e,t)=>{const{__scopeScrollArea:n,style:r,...c}=e,s=_(ce,n),l=Re(ce,n),{onThumbPositionChange:d}=l,f=U(t,i=>l.onThumbChange(i)),m=o.useRef(),a=Q(()=>{m.current&&(m.current(),m.current=void 0)},100);return o.useEffect(()=>{const i=s.viewport;if(i){const u=()=>{if(a(),!m.current){const b=St(i,d);m.current=b,d()}};return d(),i.addEventListener("scroll",u),()=>i.removeEventListener("scroll",u)}},[s.viewport,a,d]),o.createElement(X.div,v({"data-state":l.hasThumb?"visible":"hidden"},c,{ref:f,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...r},onPointerDownCapture:I(e.onPointerDownCapture,i=>{const b=i.target.getBoundingClientRect(),p=i.clientX-b.left,S=i.clientY-b.top;l.onThumbPointerDown({x:p,y:S})}),onPointerUp:I(e.onPointerUp,l.onThumbPointerUp)}))}),Oe="ScrollAreaCorner",pt=o.forwardRef((e,t)=>{const n=_(Oe,e.__scopeScrollArea),r=!!(n.scrollbarX&&n.scrollbarY);return n.type!=="scroll"&&r?o.createElement(gt,v({},e,{ref:t})):null}),gt=o.forwardRef((e,t)=>{const{__scopeScrollArea:n,...r}=e,c=_(Oe,n),[s,l]=o.useState(0),[d,f]=o.useState(0),m=!!(s&&d);return H(c.scrollbarX,()=>{var a;const i=((a=c.scrollbarX)===null||a===void 0?void 0:a.offsetHeight)||0;c.onCornerHeightChange(i),f(i)}),H(c.scrollbarY,()=>{var a;const i=((a=c.scrollbarY)===null||a===void 0?void 0:a.offsetWidth)||0;c.onCornerWidthChange(i),l(i)}),m?o.createElement(X.div,v({},r,{ref:t,style:{width:s,height:d,position:"absolute",right:c.dir==="ltr"?0:void 0,left:c.dir==="rtl"?0:void 0,bottom:0,...e.style}})):null});function G(e){return e?parseInt(e,10):0}function je(e,t){const n=e/t;return isNaN(n)?0:n}function J(e){const t=je(e.viewport,e.content),n=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,r=(e.scrollbar.size-n)*t;return Math.max(r,18)}function vt(e,t,n,r="ltr"){const c=J(n),s=c/2,l=t||s,d=c-l,f=n.scrollbar.paddingStart+l,m=n.scrollbar.size-n.scrollbar.paddingEnd-d,a=n.content-n.viewport,i=r==="ltr"?[0,a]:[a*-1,0];return Me([f,m],i)(e)}function de(e,t,n="ltr"){const r=J(t),c=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,s=t.scrollbar.size-c,l=t.content-t.viewport,d=s-r,f=n==="ltr"?[0,l]:[l*-1,0],m=nt(e,f);return Me([0,l],[0,d])(m)}function Me(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}function De(e,t){return e>0&&e<t}const St=(e,t=()=>{})=>{let n={left:e.scrollLeft,top:e.scrollTop},r=0;return function c(){const s={left:e.scrollLeft,top:e.scrollTop},l=n.left!==s.left,d=n.top!==s.top;(l||d)&&t(),n=s,r=window.requestAnimationFrame(c)}(),()=>window.cancelAnimationFrame(r)};function Q(e,t){const n=k(e),r=o.useRef(0);return o.useEffect(()=>()=>window.clearTimeout(r.current),[]),o.useCallback(()=>{window.clearTimeout(r.current),r.current=window.setTimeout(n,t)},[n,t])}function H(e,t){const n=k(t);oe(()=>{let r=0;if(e){const c=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(n)});return c.observe(e),()=>{window.cancelAnimationFrame(r),c.unobserve(e)}}},[e,n])}const wt=ct,$t=at,fe=lt,me=ht,xt=pt;var Et=We((e,{scrollbarSize:t,offsetScrollbars:n,scrollbarHovered:r,hidden:c})=>({root:{overflow:"hidden"},viewport:{width:"100%",height:"100%",paddingRight:n?N(t):void 0,paddingBottom:n?N(t):void 0},scrollbar:{display:c?"none":"flex",userSelect:"none",touchAction:"none",boxSizing:"border-box",padding:`calc(${N(t)}  / 5)`,transition:"background-color 150ms ease, opacity 150ms ease","&:hover":{backgroundColor:e.colorScheme==="dark"?e.colors.dark[8]:e.colors.gray[0],[`& .${ie("thumb")}`]:{backgroundColor:e.colorScheme==="dark"?e.fn.rgba(e.white,.5):e.fn.rgba(e.black,.5)}},'&[data-orientation="vertical"]':{width:N(t)},'&[data-orientation="horizontal"]':{flexDirection:"column",height:N(t)},'&[data-state="hidden"]':{display:"none",opacity:0}},thumb:{ref:ie("thumb"),flex:1,backgroundColor:e.colorScheme==="dark"?e.fn.rgba(e.white,.4):e.fn.rgba(e.black,.4),borderRadius:N(t),position:"relative",transition:"background-color 150ms ease",display:c?"none":void 0,overflow:"hidden","&::before":{content:'""',position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",height:"100%",minWidth:N(44),minHeight:N(44)}},corner:{backgroundColor:e.colorScheme==="dark"?e.colors.dark[6]:e.colors.gray[0],transition:"opacity 150ms ease",opacity:r?1:0,display:c?"none":void 0}}));const yt=Et;var Pt=Object.defineProperty,_t=Object.defineProperties,Ct=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,Ne=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,he=(e,t,n)=>t in e?Pt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,se=(e,t)=>{for(var n in t||(t={}))Ne.call(t,n)&&he(e,n,t[n]);if(V)for(var n of V(t))Le.call(t,n)&&he(e,n,t[n]);return e},ke=(e,t)=>_t(e,Ct(t)),Ie=(e,t)=>{var n={};for(var r in e)Ne.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&V)for(var r of V(e))t.indexOf(r)<0&&Le.call(e,r)&&(n[r]=e[r]);return n};const Ue={scrollbarSize:12,scrollHideDelay:1e3,type:"hover",offsetScrollbars:!1},ee=o.forwardRef((e,t)=>{const n=ve("ScrollArea",Ue,e),{children:r,className:c,classNames:s,styles:l,scrollbarSize:d,scrollHideDelay:f,type:m,dir:a,offsetScrollbars:i,viewportRef:u,onScrollPositionChange:b,unstyled:p,variant:S,viewportProps:w}=n,x=Ie(n,["children","className","classNames","styles","scrollbarSize","scrollHideDelay","type","dir","offsetScrollbars","viewportRef","onScrollPositionChange","unstyled","variant","viewportProps"]),[C,y]=o.useState(!1),P=Se(),{classes:$,cx:A}=yt({scrollbarSize:d,offsetScrollbars:i,scrollbarHovered:C,hidden:m==="never"},{name:"ScrollArea",classNames:s,styles:l,unstyled:p,variant:S});return T.createElement(wt,{type:m==="never"?"always":m,scrollHideDelay:f,dir:a||P.dir,ref:t,asChild:!0},T.createElement(ne,se({className:A($.root,c)},x),T.createElement($t,ke(se({},w),{className:$.viewport,ref:u,onScroll:typeof b=="function"?({currentTarget:M})=>b({x:M.scrollLeft,y:M.scrollTop}):void 0}),r),T.createElement(fe,{orientation:"horizontal",className:$.scrollbar,forceMount:!0,onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1)},T.createElement(me,{className:$.thumb})),T.createElement(fe,{orientation:"vertical",className:$.scrollbar,forceMount:!0,onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1)},T.createElement(me,{className:$.thumb})),T.createElement(xt,{className:$.corner})))}),ze=o.forwardRef((e,t)=>{const n=ve("ScrollAreaAutosize",Ue,e),{children:r,classNames:c,styles:s,scrollbarSize:l,scrollHideDelay:d,type:f,dir:m,offsetScrollbars:a,viewportRef:i,onScrollPositionChange:u,unstyled:b,sx:p,variant:S,viewportProps:w}=n,x=Ie(n,["children","classNames","styles","scrollbarSize","scrollHideDelay","type","dir","offsetScrollbars","viewportRef","onScrollPositionChange","unstyled","sx","variant","viewportProps"]);return T.createElement(ne,ke(se({},x),{ref:t,sx:[{display:"flex"},...Xe(p)]}),T.createElement(ne,{sx:{display:"flex",flexDirection:"column",flex:1}},T.createElement(ee,{classNames:c,styles:s,scrollHideDelay:d,scrollbarSize:l,type:f,dir:m,offsetScrollbars:a,viewportRef:i,onScrollPositionChange:u,unstyled:b,variant:S,viewportProps:w},r)))});ze.displayName="@mantine/core/ScrollAreaAutosize";ee.displayName="@mantine/core/ScrollArea";ee.Autosize=ze;const At=ee,Rt="Left",Tt="Right",Ot="Up",jt="Down",B={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},ae={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},be="mousemove",pe="mouseup",Mt="touchend",Dt="touchmove",Nt="touchstart";function Lt(e,t,n,r){return e>t?n>0?Tt:Rt:r>0?jt:Ot}function ge(e,t){if(t===0)return e;const n=Math.PI/180*t,r=e[0]*Math.cos(n)+e[1]*Math.sin(n),c=e[1]*Math.cos(n)-e[0]*Math.sin(n);return[r,c]}function kt(e,t){const n=a=>{const i="touches"in a;i&&a.touches.length>1||e((u,b)=>{b.trackMouse&&!i&&(document.addEventListener(be,r),document.addEventListener(pe,l));const{clientX:p,clientY:S}=i?a.touches[0]:a,w=ge([p,S],b.rotationAngle);return b.onTouchStartOrOnMouseDown&&b.onTouchStartOrOnMouseDown({event:a}),Object.assign(Object.assign(Object.assign({},u),ae),{initial:w.slice(),xy:w,start:a.timeStamp||0})})},r=a=>{e((i,u)=>{const b="touches"in a;if(b&&a.touches.length>1)return i;if(a.timeStamp-i.start>u.swipeDuration)return i.swiping?Object.assign(Object.assign({},i),{swiping:!1}):i;const{clientX:p,clientY:S}=b?a.touches[0]:a,[w,x]=ge([p,S],u.rotationAngle),C=w-i.xy[0],y=x-i.xy[1],P=Math.abs(C),$=Math.abs(y),A=(a.timeStamp||0)-i.start,M=Math.sqrt(P*P+$*$)/(A||1),z=[C/(A||1),y/(A||1)],g=Lt(P,$,C,y),E=typeof u.delta=="number"?u.delta:u.delta[g.toLowerCase()]||B.delta;if(P<E&&$<E&&!i.swiping)return i;const R={absX:P,absY:$,deltaX:C,deltaY:y,dir:g,event:a,first:i.first,initial:i.initial,velocity:M,vxvy:z};R.first&&u.onSwipeStart&&u.onSwipeStart(R),u.onSwiping&&u.onSwiping(R);let te=!1;return(u.onSwiping||u.onSwiped||u[`onSwiped${g}`])&&(te=!0),te&&u.preventScrollOnSwipe&&u.trackTouch&&a.cancelable&&a.preventDefault(),Object.assign(Object.assign({},i),{first:!1,eventData:R,swiping:!0})})},c=a=>{e((i,u)=>{let b;if(i.swiping&&i.eventData){if(a.timeStamp-i.start<u.swipeDuration){b=Object.assign(Object.assign({},i.eventData),{event:a}),u.onSwiped&&u.onSwiped(b);const p=u[`onSwiped${b.dir}`];p&&p(b)}}else u.onTap&&u.onTap({event:a});return u.onTouchEndOrOnMouseUp&&u.onTouchEndOrOnMouseUp({event:a}),Object.assign(Object.assign(Object.assign({},i),ae),{eventData:b})})},s=()=>{document.removeEventListener(be,r),document.removeEventListener(pe,l)},l=a=>{s(),c(a)},d=(a,i)=>{let u=()=>{};if(a&&a.addEventListener){const b=Object.assign(Object.assign({},B.touchEventOptions),i.touchEventOptions),p=[[Nt,n,b],[Dt,r,Object.assign(Object.assign({},b),i.preventScrollOnSwipe?{passive:!1}:{})],[Mt,c,b]];p.forEach(([S,w,x])=>a.addEventListener(S,w,x)),u=()=>p.forEach(([S,w])=>a.removeEventListener(S,w))}return u},m={ref:a=>{a!==null&&e((i,u)=>{if(i.el===a)return i;const b={};return i.el&&i.el!==a&&i.cleanUpTouch&&(i.cleanUpTouch(),b.cleanUpTouch=void 0),u.trackTouch&&a&&(b.cleanUpTouch=d(a,u)),Object.assign(Object.assign(Object.assign({},i),{el:a}),b)})}};return t.trackMouse&&(m.onMouseDown=n),[m,d]}function It(e,t,n,r){return!t.trackTouch||!e.el?(e.cleanUpTouch&&e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:void 0})):e.cleanUpTouch?t.preventScrollOnSwipe!==n.preventScrollOnSwipe||t.touchEventOptions.passive!==n.touchEventOptions.passive?(e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:r(e.el,t)})):e:Object.assign(Object.assign({},e),{cleanUpTouch:r(e.el,t)})}function Ut(e){const{trackMouse:t}=e,n=o.useRef(Object.assign({},ae)),r=o.useRef(Object.assign({},B)),c=o.useRef(Object.assign({},r.current));c.current=Object.assign({},r.current),r.current=Object.assign(Object.assign({},B),e);let s;for(s in B)r.current[s]===void 0&&(r.current[s]=B[s]);const[l,d]=o.useMemo(()=>kt(f=>n.current=f(n.current,r.current),{trackMouse:t}),[t]);return n.current=It(n.current,r.current,c.current,d),l}const zt={path:"/src/assets/weapons/axe.png"},Bt={"Ancient Sword":{path:"/src/assets/weapons/ancient_sword.png"},Axe:zt},Ht={"Bone Gray Amulet":{path:"/src/assets/amulets/bone_gray.png"},"Cameo Blue Amulet":{path:"/src/assets/amulets/cameo_blue.png"}},Wt={"Animal Skin Armor":{path:"/src/assets/armors/animal_skin_1_new.png"},"Banded Mail Armor":{path:"/src/assets/armors/banded_mail_1.png"}},Xt={"Agate Ring":{path:"/src/assets/rings/agate.png"},"Brass Ring":{path:"/src/assets/rings/brass.png"}},Yt={"Generic Rune":{path:"/src/assets/runes/generic.png"},"Abyss Rune":{path:"/src/assets/runes/rune_abyss.png"}},Ft=Bt,Gt=Wt,Vt=Yt,qt=Xt,Kt=Ht,Be={...Ft,...Gt,...Vt,...qt,...Kt},Zt={act:Qt,actable:Jt};function Jt(e,t){return!0}function Qt(e,t){const n=e.srandom.percent([{result:"item",percent:5},{result:"gold",percent:25},{result:"diamond",percent:1},{result:"monster_fight",percent:50},{result:"monster_unlock",percent:1},{result:"mystery_box",percent:10},{result:"scratch_card",percent:10},{result:"experience",percent:10},{result:"food",percent:10},{result:"boss_fight",percent:5}]);switch(n){case"item":en(n,e);break;case"gold":tn(n,e);break;case"diamond":nn(n,e);break;case"monster_fight":rn(n,e);break;case"monster_unlock":on(n,e);break;case"mystery_box":cn(n,e);break;case"scratch_card":sn(n,e);break;case"experience":an(n,e);break;case"food":ln(n,e);break;case"boss_fight":un(n,e);break}}function en(e,t,n){const r=t.srandom.percent(Object.keys(Be).map(c=>({percent:1,result:c})));r&&(t.currentGameEvent={id:e,itemId:r})}function tn(e,t,n){t.currentGameEvent={id:e,count:t.srandom.number(1,100+1)}}function nn(e,t,n){t.currentGameEvent={id:e,count:t.srandom.number(1,100+1)}}function rn(e,t,n){const r=t.srandom.percent(Object.keys(W).map(c=>({percent:1,result:c})));r&&(t.currentGameEvent={id:e,monsterId:r,level:t.srandom.number(1,100+1)})}function on(e,t,n){const r=t.srandom.percent(Object.keys(W).map(c=>({percent:1,result:c})));r&&(t.currentGameEvent={id:e,monsterId:r})}function cn(e,t,n){t.currentGameEvent={id:e}}function sn(e,t,n){t.currentGameEvent={id:e}}function an(e,t,n){t.currentGameEvent={id:e,count:t.srandom.number(1,100+1)}}function ln(e,t,n){t.currentGameEvent={id:e,count:t.srandom.number(1,100+1)}}function un(e,t,n){const r=t.srandom.percent(Object.keys(W).map(c=>({percent:1,result:c})));r&&(t.currentGameEvent={id:e,monsterId:r,level:t.srandom.number(1,100+1)})}function dn({event:e}){switch(e==null?void 0:e.id){case"item":return h.jsx(fn,{event:e});case"gold":return h.jsx(mn,{event:e});case"diamond":return h.jsx(hn,{event:e});case"monster_fight":return h.jsx(bn,{event:e});case"monster_unlock":return h.jsx(pn,{event:e});case"mystery_box":return h.jsx(gn,{event:e});case"scratch_card":return h.jsx(vn,{event:e});case"experience":return h.jsx(Sn,{event:e});case"food":return h.jsx(wn,{event:e});case"boss_fight":return h.jsx($n,{event:e});default:return null}}function fn({event:e}){return h.jsx(j,{withBorder:!0,w:"100%",maw:360,children:h.jsxs(O,{direction:"column",align:"center",gap:"md",children:[h.jsx(q,{src:K.url(Be[e.itemId].path),width:64,height:64,style:{imageRendering:"pixelated"}}),h.jsx(L,{order:3,children:e.itemId})]})})}function mn({event:e}){return h.jsx(j,{withBorder:!0,w:"100%",maw:360,children:h.jsxs(O,{direction:"column",align:"center",gap:"md",children:[h.jsx(Z,{emoji:"🪙",style:{width:48,height:48}}),h.jsx(L,{order:3,children:e.count})]})})}function hn({event:e}){return h.jsx(j,{withBorder:!0,w:"100%",maw:360,children:h.jsxs(O,{direction:"column",align:"center",gap:"md",children:[h.jsx(Z,{emoji:"💎",style:{width:48,height:48}}),h.jsx(L,{order:3,children:e.count})]})})}function bn({event:e}){const t=o.useMemo(()=>we.util.getMonsterStats(e.monsterId,e.level,!1),[e]);return h.jsx(j,{withBorder:!0,w:"100%",maw:360,children:h.jsxs(O,{direction:"column",align:"center",gap:"md",children:[h.jsx(q,{src:K.url(W[e.monsterId].path),width:64,height:64,style:{imageRendering:"pixelated"}}),h.jsx(L,{order:3,children:e.monsterId}),h.jsx($e,{...t}),h.jsx(xe,{fullWidth:!0,leftIcon:h.jsx(Ee,{}),children:"Fight"})]})})}function pn({event:e}){return h.jsx(j,{withBorder:!0,w:"100%",maw:360,children:h.jsxs(O,{direction:"column",align:"center",gap:"md",children:[h.jsx(q,{src:K.url(W[e.monsterId].path),width:64,height:64,style:{imageRendering:"pixelated"}}),h.jsx(L,{order:3,children:e.monsterId})]})})}function gn({}){return h.jsx(j,{withBorder:!0,w:"100%",maw:360,children:"mystery_box"})}function vn({}){return h.jsx(j,{withBorder:!0,w:"100%",maw:360,children:"scratch_card"})}function Sn({event:e}){return h.jsx(j,{withBorder:!0,w:"100%",maw:360,children:h.jsxs(O,{direction:"column",align:"center",gap:"md",children:[h.jsx(Z,{emoji:"⭐",style:{width:48,height:48}}),h.jsx(L,{order:3,children:e.count})]})})}function wn({event:e}){return h.jsx(j,{withBorder:!0,w:"100%",maw:360,children:h.jsxs(O,{direction:"column",align:"center",gap:"md",children:[h.jsx(Z,{emoji:"🍏",style:{width:48,height:48}}),h.jsx(L,{order:3,children:e.count})]})})}function $n({event:e}){const t=o.useMemo(()=>we.util.getMonsterStats(e.monsterId,e.level,!0),[e]);return h.jsx(j,{withBorder:!0,w:"100%",maw:360,children:h.jsxs(O,{direction:"column",align:"center",gap:"md",children:[h.jsx(q,{src:K.url(W[e.monsterId].path),width:64,height:64,style:{imageRendering:"pixelated"}}),h.jsx(L,{order:3,color:"red",children:e.monsterId}),h.jsx($e,{...t}),h.jsx(xe,{fullWidth:!0,leftIcon:h.jsx(Ee,{}),children:"Fight"})]})})}function Cn(){const e=Se(),t=Ut({onSwipedUp:l=>{c(r+1)},trackMouse:!0,swipeDuration:100}),n=ue(l=>l.data),[r,c]=o.useState(0),s=o.useRef(null);return o.useEffect(()=>{ue.setState(l=>{Zt.act(l.data,{})})},[r]),o.useLayoutEffect(()=>{s.current&&(s.current.firstChild.style.height="100%")},[s]),h.jsx(h.Fragment,{children:h.jsx(O,{pos:"absolute",top:64,bottom:64,maw:e.breakpoints.sm,w:"100%",...t,children:h.jsx(O,{w:"100%",h:"100%",mx:"md",children:h.jsx(At,{w:"100%",h:"100%",viewportRef:s,children:h.jsx(O,{w:"100%",h:"100%",py:"md",align:"center",justify:"center",children:h.jsx(dn,{event:n.currentGameEvent})})})})})})}export{Cn as default};
