import{r as o,_ as v,a as Fe,c as Xe,b as L,u as Se,d as we,R as O,B as re,p as Ye,e as Ve,j as f,C as _,F as P,I as q,f as K,i as Ge,T as N,E as Z,g as J,h as $e,m as ie,k as xe,l as Ee,n as Y,o as ye,q as qe}from"./index-509871e5.js";import{g as ue,M as Pe,I as Ke}from"./MonsterStats-4a9609af.js";import{I as Ce}from"./IconSword-7bee48c0.js";function Ze(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Re(...e){return t=>e.forEach(n=>Ze(n,t))}function U(...e){return o.useCallback(Re(...e),e)}const je=o.forwardRef((e,t)=>{const{children:n,...r}=e,c=o.Children.toArray(n),a=c.find(Qe);if(a){const d=a.props.children,u=c.map(h=>h===a?o.Children.count(d)>1?o.Children.only(null):o.isValidElement(d)?d.props.children:null:h);return o.createElement(oe,v({},r,{ref:t}),o.isValidElement(d)?o.cloneElement(d,void 0,u):null)}return o.createElement(oe,v({},r,{ref:t}),n)});je.displayName="Slot";const oe=o.forwardRef((e,t)=>{const{children:n,...r}=e;return o.isValidElement(n)?o.cloneElement(n,{...et(r,n.props),ref:Re(t,n.ref)}):o.Children.count(n)>1?o.Children.only(null):null});oe.displayName="SlotClone";const Je=({children:e})=>o.createElement(o.Fragment,null,e);function Qe(e){return o.isValidElement(e)&&e.type===Je}function et(e,t){const n={...t};for(const r in t){const c=e[r],a=t[r];/^on[A-Z]/.test(r)?c&&a?n[r]=(...u)=>{a(...u),c(...u)}:c&&(n[r]=c):r==="style"?n[r]={...c,...a}:r==="className"&&(n[r]=[c,a].filter(Boolean).join(" "))}return{...e,...n}}const tt=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],W=tt.reduce((e,t)=>{const n=o.forwardRef((r,c)=>{const{asChild:a,...d}=r,u=a?je:t;return o.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.createElement(u,v({},d,{ref:c}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),ce=globalThis!=null&&globalThis.document?o.useLayoutEffect:()=>{};function nt(e,t){return o.useReducer((n,r)=>{const c=t[n][r];return c??n},e)}const F=e=>{const{present:t,children:n}=e,r=rt(t),c=typeof n=="function"?n({present:r.isPresent}):o.Children.only(n),a=U(r.ref,c.ref);return typeof n=="function"||r.isPresent?o.cloneElement(c,{ref:a}):null};F.displayName="Presence";function rt(e){const[t,n]=o.useState(),r=o.useRef({}),c=o.useRef(e),a=o.useRef("none"),d=e?"mounted":"unmounted",[u,h]=nt(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.useEffect(()=>{const m=X(r.current);a.current=u==="mounted"?m:"none"},[u]),ce(()=>{const m=r.current,s=c.current;if(s!==e){const i=a.current,b=X(m);e?h("MOUNT"):b==="none"||(m==null?void 0:m.display)==="none"?h("UNMOUNT"):h(s&&i!==b?"ANIMATION_OUT":"UNMOUNT"),c.current=e}},[e,h]),ce(()=>{if(t){const m=l=>{const b=X(r.current).includes(l.animationName);l.target===t&&b&&Fe.flushSync(()=>h("ANIMATION_END"))},s=l=>{l.target===t&&(a.current=X(r.current))};return t.addEventListener("animationstart",s),t.addEventListener("animationcancel",m),t.addEventListener("animationend",m),()=>{t.removeEventListener("animationstart",s),t.removeEventListener("animationcancel",m),t.removeEventListener("animationend",m)}}else h("ANIMATION_END")},[t,h]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:o.useCallback(m=>{m&&(r.current=getComputedStyle(m)),n(m)},[])}}function X(e){return(e==null?void 0:e.animationName)||"none"}function ot(e,t=[]){let n=[];function r(a,d){const u=o.createContext(d),h=n.length;n=[...n,d];function m(l){const{scope:i,children:b,...p}=l,S=(i==null?void 0:i[e][h])||u,w=o.useMemo(()=>p,Object.values(p));return o.createElement(S.Provider,{value:w},b)}function s(l,i){const b=(i==null?void 0:i[e][h])||u,p=o.useContext(b);if(p)return p;if(d!==void 0)return d;throw new Error(`\`${l}\` must be used within \`${a}\``)}return m.displayName=a+"Provider",[m,s]}const c=()=>{const a=n.map(d=>o.createContext(d));return function(u){const h=(u==null?void 0:u[e])||a;return o.useMemo(()=>({[`__scope${e}`]:{...u,[e]:h}}),[u,h])}};return c.scopeName=e,[r,ct(c,...t)]}function ct(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(a){const d=r.reduce((u,{useScope:h,scopeName:m})=>{const l=h(a)[`__scope${m}`];return{...u,...l}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:d}),[d])}};return n.scopeName=t.scopeName,n}function I(e){const t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}const at=o.createContext(void 0);function st(e){const t=o.useContext(at);return e||t||"ltr"}function lt(e,[t,n]){return Math.min(n,Math.max(t,e))}function k(e,t,{checkForDefaultPrevented:n=!0}={}){return function(c){if(e==null||e(c),n===!1||!c.defaultPrevented)return t==null?void 0:t(c)}}function it(e,t){return o.useReducer((n,r)=>{const c=t[n][r];return c??n},e)}const Te="ScrollArea",[Ae,ln]=ot(Te),[dt,R]=Ae(Te),ut=o.forwardRef((e,t)=>{const{__scopeScrollArea:n,type:r="hover",dir:c,scrollHideDelay:a=600,...d}=e,[u,h]=o.useState(null),[m,s]=o.useState(null),[l,i]=o.useState(null),[b,p]=o.useState(null),[S,w]=o.useState(null),[x,j]=o.useState(0),[y,C]=o.useState(0),[$,T]=o.useState(!1),[M,z]=o.useState(!1),g=U(t,A=>h(A)),E=st(c);return o.createElement(dt,{scope:n,type:r,dir:E,scrollHideDelay:a,scrollArea:u,viewport:m,onViewportChange:s,content:l,onContentChange:i,scrollbarX:b,onScrollbarXChange:p,scrollbarXEnabled:$,onScrollbarXEnabledChange:T,scrollbarY:S,onScrollbarYChange:w,scrollbarYEnabled:M,onScrollbarYEnabledChange:z,onCornerWidthChange:j,onCornerHeightChange:C},o.createElement(W.div,v({dir:E},d,{ref:g,style:{position:"relative","--radix-scroll-area-corner-width":x+"px","--radix-scroll-area-corner-height":y+"px",...e.style}})))}),ft="ScrollAreaViewport",ht=o.forwardRef((e,t)=>{const{__scopeScrollArea:n,children:r,...c}=e,a=R(ft,n),d=o.useRef(null),u=U(t,d,a.onViewportChange);return o.createElement(o.Fragment,null,o.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),o.createElement(W.div,v({"data-radix-scroll-area-viewport":""},c,{ref:u,style:{overflowX:a.scrollbarXEnabled?"scroll":"hidden",overflowY:a.scrollbarYEnabled?"scroll":"hidden",...e.style}}),o.createElement("div",{ref:a.onContentChange,style:{minWidth:"100%",display:"table"}},r)))}),D="ScrollAreaScrollbar",mt=o.forwardRef((e,t)=>{const{forceMount:n,...r}=e,c=R(D,e.__scopeScrollArea),{onScrollbarXEnabledChange:a,onScrollbarYEnabledChange:d}=c,u=e.orientation==="horizontal";return o.useEffect(()=>(u?a(!0):d(!0),()=>{u?a(!1):d(!1)}),[u,a,d]),c.type==="hover"?o.createElement(bt,v({},r,{ref:t,forceMount:n})):c.type==="scroll"?o.createElement(pt,v({},r,{ref:t,forceMount:n})):c.type==="auto"?o.createElement(Oe,v({},r,{ref:t,forceMount:n})):c.type==="always"?o.createElement(de,v({},r,{ref:t})):null}),bt=o.forwardRef((e,t)=>{const{forceMount:n,...r}=e,c=R(D,e.__scopeScrollArea),[a,d]=o.useState(!1);return o.useEffect(()=>{const u=c.scrollArea;let h=0;if(u){const m=()=>{window.clearTimeout(h),d(!0)},s=()=>{h=window.setTimeout(()=>d(!1),c.scrollHideDelay)};return u.addEventListener("pointerenter",m),u.addEventListener("pointerleave",s),()=>{window.clearTimeout(h),u.removeEventListener("pointerenter",m),u.removeEventListener("pointerleave",s)}}},[c.scrollArea,c.scrollHideDelay]),o.createElement(F,{present:n||a},o.createElement(Oe,v({"data-state":a?"visible":"hidden"},r,{ref:t})))}),pt=o.forwardRef((e,t)=>{const{forceMount:n,...r}=e,c=R(D,e.__scopeScrollArea),a=e.orientation==="horizontal",d=ee(()=>h("SCROLL_END"),100),[u,h]=it("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return o.useEffect(()=>{if(u==="idle"){const m=window.setTimeout(()=>h("HIDE"),c.scrollHideDelay);return()=>window.clearTimeout(m)}},[u,c.scrollHideDelay,h]),o.useEffect(()=>{const m=c.viewport,s=a?"scrollLeft":"scrollTop";if(m){let l=m[s];const i=()=>{const b=m[s];l!==b&&(h("SCROLL"),d()),l=b};return m.addEventListener("scroll",i),()=>m.removeEventListener("scroll",i)}},[c.viewport,a,h,d]),o.createElement(F,{present:n||u!=="hidden"},o.createElement(de,v({"data-state":u==="hidden"?"hidden":"visible"},r,{ref:t,onPointerEnter:k(e.onPointerEnter,()=>h("POINTER_ENTER")),onPointerLeave:k(e.onPointerLeave,()=>h("POINTER_LEAVE"))})))}),Oe=o.forwardRef((e,t)=>{const n=R(D,e.__scopeScrollArea),{forceMount:r,...c}=e,[a,d]=o.useState(!1),u=e.orientation==="horizontal",h=ee(()=>{if(n.viewport){const m=n.viewport.offsetWidth<n.viewport.scrollWidth,s=n.viewport.offsetHeight<n.viewport.scrollHeight;d(u?m:s)}},10);return B(n.viewport,h),B(n.content,h),o.createElement(F,{present:r||a},o.createElement(de,v({"data-state":a?"visible":"hidden"},c,{ref:t})))}),de=o.forwardRef((e,t)=>{const{orientation:n="vertical",...r}=e,c=R(D,e.__scopeScrollArea),a=o.useRef(null),d=o.useRef(0),[u,h]=o.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),m=De(u.viewport,u.content),s={...r,sizes:u,onSizesChange:h,hasThumb:m>0&&m<1,onThumbChange:i=>a.current=i,onThumbPointerUp:()=>d.current=0,onThumbPointerDown:i=>d.current=i};function l(i,b){return yt(i,d.current,u,b)}return n==="horizontal"?o.createElement(gt,v({},s,{ref:t,onThumbPositionChange:()=>{if(c.viewport&&a.current){const i=c.viewport.scrollLeft,b=fe(i,u,c.dir);a.current.style.transform=`translate3d(${b}px, 0, 0)`}},onWheelScroll:i=>{c.viewport&&(c.viewport.scrollLeft=i)},onDragScroll:i=>{c.viewport&&(c.viewport.scrollLeft=l(i,c.dir))}})):n==="vertical"?o.createElement(vt,v({},s,{ref:t,onThumbPositionChange:()=>{if(c.viewport&&a.current){const i=c.viewport.scrollTop,b=fe(i,u);a.current.style.transform=`translate3d(0, ${b}px, 0)`}},onWheelScroll:i=>{c.viewport&&(c.viewport.scrollTop=i)},onDragScroll:i=>{c.viewport&&(c.viewport.scrollTop=l(i))}})):null}),gt=o.forwardRef((e,t)=>{const{sizes:n,onSizesChange:r,...c}=e,a=R(D,e.__scopeScrollArea),[d,u]=o.useState(),h=o.useRef(null),m=U(t,h,a.onScrollbarXChange);return o.useEffect(()=>{h.current&&u(getComputedStyle(h.current))},[h]),o.createElement(Me,v({"data-orientation":"horizontal"},c,{ref:m,sizes:n,style:{bottom:0,left:a.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:a.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":Q(n)+"px",...e.style},onThumbPointerDown:s=>e.onThumbPointerDown(s.x),onDragScroll:s=>e.onDragScroll(s.x),onWheelScroll:(s,l)=>{if(a.viewport){const i=a.viewport.scrollLeft+s.deltaX;e.onWheelScroll(i),Ie(i,l)&&s.preventDefault()}},onResize:()=>{h.current&&a.viewport&&d&&r({content:a.viewport.scrollWidth,viewport:a.viewport.offsetWidth,scrollbar:{size:h.current.clientWidth,paddingStart:V(d.paddingLeft),paddingEnd:V(d.paddingRight)}})}}))}),vt=o.forwardRef((e,t)=>{const{sizes:n,onSizesChange:r,...c}=e,a=R(D,e.__scopeScrollArea),[d,u]=o.useState(),h=o.useRef(null),m=U(t,h,a.onScrollbarYChange);return o.useEffect(()=>{h.current&&u(getComputedStyle(h.current))},[h]),o.createElement(Me,v({"data-orientation":"vertical"},c,{ref:m,sizes:n,style:{top:0,right:a.dir==="ltr"?0:void 0,left:a.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":Q(n)+"px",...e.style},onThumbPointerDown:s=>e.onThumbPointerDown(s.y),onDragScroll:s=>e.onDragScroll(s.y),onWheelScroll:(s,l)=>{if(a.viewport){const i=a.viewport.scrollTop+s.deltaY;e.onWheelScroll(i),Ie(i,l)&&s.preventDefault()}},onResize:()=>{h.current&&a.viewport&&d&&r({content:a.viewport.scrollHeight,viewport:a.viewport.offsetHeight,scrollbar:{size:h.current.clientHeight,paddingStart:V(d.paddingTop),paddingEnd:V(d.paddingBottom)}})}}))}),[St,_e]=Ae(D),Me=o.forwardRef((e,t)=>{const{__scopeScrollArea:n,sizes:r,hasThumb:c,onThumbChange:a,onThumbPointerUp:d,onThumbPointerDown:u,onThumbPositionChange:h,onDragScroll:m,onWheelScroll:s,onResize:l,...i}=e,b=R(D,n),[p,S]=o.useState(null),w=U(t,g=>S(g)),x=o.useRef(null),j=o.useRef(""),y=b.viewport,C=r.content-r.viewport,$=I(s),T=I(h),M=ee(l,10);function z(g){if(x.current){const E=g.clientX-x.current.left,A=g.clientY-x.current.top;m({x:E,y:A})}}return o.useEffect(()=>{const g=E=>{const A=E.target;(p==null?void 0:p.contains(A))&&$(E,C)};return document.addEventListener("wheel",g,{passive:!1}),()=>document.removeEventListener("wheel",g,{passive:!1})},[y,p,C,$]),o.useEffect(T,[r,T]),B(p,M),B(b.content,M),o.createElement(St,{scope:n,scrollbar:p,hasThumb:c,onThumbChange:I(a),onThumbPointerUp:I(d),onThumbPositionChange:T,onThumbPointerDown:I(u)},o.createElement(W.div,v({},i,{ref:w,style:{position:"absolute",...i.style},onPointerDown:k(e.onPointerDown,g=>{g.button===0&&(g.target.setPointerCapture(g.pointerId),x.current=p.getBoundingClientRect(),j.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",z(g))}),onPointerMove:k(e.onPointerMove,z),onPointerUp:k(e.onPointerUp,g=>{const E=g.target;E.hasPointerCapture(g.pointerId)&&E.releasePointerCapture(g.pointerId),document.body.style.webkitUserSelect=j.current,x.current=null})})))}),ae="ScrollAreaThumb",wt=o.forwardRef((e,t)=>{const{forceMount:n,...r}=e,c=_e(ae,e.__scopeScrollArea);return o.createElement(F,{present:n||c.hasThumb},o.createElement($t,v({ref:t},r)))}),$t=o.forwardRef((e,t)=>{const{__scopeScrollArea:n,style:r,...c}=e,a=R(ae,n),d=_e(ae,n),{onThumbPositionChange:u}=d,h=U(t,l=>d.onThumbChange(l)),m=o.useRef(),s=ee(()=>{m.current&&(m.current(),m.current=void 0)},100);return o.useEffect(()=>{const l=a.viewport;if(l){const i=()=>{if(s(),!m.current){const b=Pt(l,u);m.current=b,u()}};return u(),l.addEventListener("scroll",i),()=>l.removeEventListener("scroll",i)}},[a.viewport,s,u]),o.createElement(W.div,v({"data-state":d.hasThumb?"visible":"hidden"},c,{ref:h,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...r},onPointerDownCapture:k(e.onPointerDownCapture,l=>{const b=l.target.getBoundingClientRect(),p=l.clientX-b.left,S=l.clientY-b.top;d.onThumbPointerDown({x:p,y:S})}),onPointerUp:k(e.onPointerUp,d.onThumbPointerUp)}))}),Ne="ScrollAreaCorner",xt=o.forwardRef((e,t)=>{const n=R(Ne,e.__scopeScrollArea),r=!!(n.scrollbarX&&n.scrollbarY);return n.type!=="scroll"&&r?o.createElement(Et,v({},e,{ref:t})):null}),Et=o.forwardRef((e,t)=>{const{__scopeScrollArea:n,...r}=e,c=R(Ne,n),[a,d]=o.useState(0),[u,h]=o.useState(0),m=!!(a&&u);return B(c.scrollbarX,()=>{var s;const l=((s=c.scrollbarX)===null||s===void 0?void 0:s.offsetHeight)||0;c.onCornerHeightChange(l),h(l)}),B(c.scrollbarY,()=>{var s;const l=((s=c.scrollbarY)===null||s===void 0?void 0:s.offsetWidth)||0;c.onCornerWidthChange(l),d(l)}),m?o.createElement(W.div,v({},r,{ref:t,style:{width:a,height:u,position:"absolute",right:c.dir==="ltr"?0:void 0,left:c.dir==="rtl"?0:void 0,bottom:0,...e.style}})):null});function V(e){return e?parseInt(e,10):0}function De(e,t){const n=e/t;return isNaN(n)?0:n}function Q(e){const t=De(e.viewport,e.content),n=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,r=(e.scrollbar.size-n)*t;return Math.max(r,18)}function yt(e,t,n,r="ltr"){const c=Q(n),a=c/2,d=t||a,u=c-d,h=n.scrollbar.paddingStart+d,m=n.scrollbar.size-n.scrollbar.paddingEnd-u,s=n.content-n.viewport,l=r==="ltr"?[0,s]:[s*-1,0];return Le([h,m],l)(e)}function fe(e,t,n="ltr"){const r=Q(t),c=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,a=t.scrollbar.size-c,d=t.content-t.viewport,u=a-r,h=n==="ltr"?[0,d]:[d*-1,0],m=lt(e,h);return Le([0,d],[0,u])(m)}function Le(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}function Ie(e,t){return e>0&&e<t}const Pt=(e,t=()=>{})=>{let n={left:e.scrollLeft,top:e.scrollTop},r=0;return function c(){const a={left:e.scrollLeft,top:e.scrollTop},d=n.left!==a.left,u=n.top!==a.top;(d||u)&&t(),n=a,r=window.requestAnimationFrame(c)}(),()=>window.cancelAnimationFrame(r)};function ee(e,t){const n=I(e),r=o.useRef(0);return o.useEffect(()=>()=>window.clearTimeout(r.current),[]),o.useCallback(()=>{window.clearTimeout(r.current),r.current=window.setTimeout(n,t)},[n,t])}function B(e,t){const n=I(t);ce(()=>{let r=0;if(e){const c=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(n)});return c.observe(e),()=>{window.cancelAnimationFrame(r),c.unobserve(e)}}},[e,n])}const Ct=ut,Rt=ht,he=mt,me=wt,jt=xt;var Tt=Xe((e,{scrollbarSize:t,offsetScrollbars:n,scrollbarHovered:r,hidden:c})=>({root:{overflow:"hidden"},viewport:{width:"100%",height:"100%",paddingRight:n?L(t):void 0,paddingBottom:n?L(t):void 0},scrollbar:{display:c?"none":"flex",userSelect:"none",touchAction:"none",boxSizing:"border-box",padding:`calc(${L(t)}  / 5)`,transition:"background-color 150ms ease, opacity 150ms ease","&:hover":{backgroundColor:e.colorScheme==="dark"?e.colors.dark[8]:e.colors.gray[0],[`& .${ue("thumb")}`]:{backgroundColor:e.colorScheme==="dark"?e.fn.rgba(e.white,.5):e.fn.rgba(e.black,.5)}},'&[data-orientation="vertical"]':{width:L(t)},'&[data-orientation="horizontal"]':{flexDirection:"column",height:L(t)},'&[data-state="hidden"]':{display:"none",opacity:0}},thumb:{ref:ue("thumb"),flex:1,backgroundColor:e.colorScheme==="dark"?e.fn.rgba(e.white,.4):e.fn.rgba(e.black,.4),borderRadius:L(t),position:"relative",transition:"background-color 150ms ease",display:c?"none":void 0,overflow:"hidden","&::before":{content:'""',position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",height:"100%",minWidth:L(44),minHeight:L(44)}},corner:{backgroundColor:e.colorScheme==="dark"?e.colors.dark[6]:e.colors.gray[0],transition:"opacity 150ms ease",opacity:r?1:0,display:c?"none":void 0}}));const At=Tt;var Ot=Object.defineProperty,_t=Object.defineProperties,Mt=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,ke=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable,be=(e,t,n)=>t in e?Ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,se=(e,t)=>{for(var n in t||(t={}))ke.call(t,n)&&be(e,n,t[n]);if(G)for(var n of G(t))Ue.call(t,n)&&be(e,n,t[n]);return e},ze=(e,t)=>_t(e,Mt(t)),He=(e,t)=>{var n={};for(var r in e)ke.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&G)for(var r of G(e))t.indexOf(r)<0&&Ue.call(e,r)&&(n[r]=e[r]);return n};const Be={scrollbarSize:12,scrollHideDelay:1e3,type:"hover",offsetScrollbars:!1},te=o.forwardRef((e,t)=>{const n=Se("ScrollArea",Be,e),{children:r,className:c,classNames:a,styles:d,scrollbarSize:u,scrollHideDelay:h,type:m,dir:s,offsetScrollbars:l,viewportRef:i,onScrollPositionChange:b,unstyled:p,variant:S,viewportProps:w}=n,x=He(n,["children","className","classNames","styles","scrollbarSize","scrollHideDelay","type","dir","offsetScrollbars","viewportRef","onScrollPositionChange","unstyled","variant","viewportProps"]),[j,y]=o.useState(!1),C=we(),{classes:$,cx:T}=At({scrollbarSize:u,offsetScrollbars:l,scrollbarHovered:j,hidden:m==="never"},{name:"ScrollArea",classNames:a,styles:d,unstyled:p,variant:S});return O.createElement(Ct,{type:m==="never"?"always":m,scrollHideDelay:h,dir:s||C.dir,ref:t,asChild:!0},O.createElement(re,se({className:T($.root,c)},x),O.createElement(Rt,ze(se({},w),{className:$.viewport,ref:i,onScroll:typeof b=="function"?({currentTarget:M})=>b({x:M.scrollLeft,y:M.scrollTop}):void 0}),r),O.createElement(he,{orientation:"horizontal",className:$.scrollbar,forceMount:!0,onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1)},O.createElement(me,{className:$.thumb})),O.createElement(he,{orientation:"vertical",className:$.scrollbar,forceMount:!0,onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1)},O.createElement(me,{className:$.thumb})),O.createElement(jt,{className:$.corner})))}),We=o.forwardRef((e,t)=>{const n=Se("ScrollAreaAutosize",Be,e),{children:r,classNames:c,styles:a,scrollbarSize:d,scrollHideDelay:u,type:h,dir:m,offsetScrollbars:s,viewportRef:l,onScrollPositionChange:i,unstyled:b,sx:p,variant:S,viewportProps:w}=n,x=He(n,["children","classNames","styles","scrollbarSize","scrollHideDelay","type","dir","offsetScrollbars","viewportRef","onScrollPositionChange","unstyled","sx","variant","viewportProps"]);return O.createElement(re,ze(se({},x),{ref:t,sx:[{display:"flex"},...Ye(p)]}),O.createElement(re,{sx:{display:"flex",flexDirection:"column",flex:1}},O.createElement(te,{classNames:c,styles:a,scrollHideDelay:u,scrollbarSize:d,type:h,dir:m,offsetScrollbars:s,viewportRef:l,onScrollPositionChange:i,unstyled:b,variant:S,viewportProps:w},r)))});We.displayName="@mantine/core/ScrollAreaAutosize";te.displayName="@mantine/core/ScrollArea";te.Autosize=We;const Nt=te;var Dt=Ve("hand-move","IconHandMove",[["path",{d:"M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5",key:"svg-0"}],["path",{d:"M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5",key:"svg-1"}],["path",{d:"M14 10.5a1.5 1.5 0 0 1 3 0v1.5",key:"svg-2"}],["path",{d:"M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47",key:"svg-3"}],["path",{d:"M2.541 5.594a13.487 13.487 0 0 1 2.46 -1.427",key:"svg-4"}],["path",{d:"M14 3.458c1.32 .354 2.558 .902 3.685 1.612",key:"svg-5"}]]);const Lt="Left",It="Right",kt="Up",Ut="Down",H={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},le={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},pe="mousemove",ge="mouseup",zt="touchend",Ht="touchmove",Bt="touchstart";function Wt(e,t,n,r){return e>t?n>0?It:Lt:r>0?Ut:kt}function ve(e,t){if(t===0)return e;const n=Math.PI/180*t,r=e[0]*Math.cos(n)+e[1]*Math.sin(n),c=e[1]*Math.cos(n)-e[0]*Math.sin(n);return[r,c]}function Ft(e,t){const n=s=>{const l="touches"in s;l&&s.touches.length>1||e((i,b)=>{b.trackMouse&&!l&&(document.addEventListener(pe,r),document.addEventListener(ge,d));const{clientX:p,clientY:S}=l?s.touches[0]:s,w=ve([p,S],b.rotationAngle);return b.onTouchStartOrOnMouseDown&&b.onTouchStartOrOnMouseDown({event:s}),Object.assign(Object.assign(Object.assign({},i),le),{initial:w.slice(),xy:w,start:s.timeStamp||0})})},r=s=>{e((l,i)=>{const b="touches"in s;if(b&&s.touches.length>1)return l;if(s.timeStamp-l.start>i.swipeDuration)return l.swiping?Object.assign(Object.assign({},l),{swiping:!1}):l;const{clientX:p,clientY:S}=b?s.touches[0]:s,[w,x]=ve([p,S],i.rotationAngle),j=w-l.xy[0],y=x-l.xy[1],C=Math.abs(j),$=Math.abs(y),T=(s.timeStamp||0)-l.start,M=Math.sqrt(C*C+$*$)/(T||1),z=[j/(T||1),y/(T||1)],g=Wt(C,$,j,y),E=typeof i.delta=="number"?i.delta:i.delta[g.toLowerCase()]||H.delta;if(C<E&&$<E&&!l.swiping)return l;const A={absX:C,absY:$,deltaX:j,deltaY:y,dir:g,event:s,first:l.first,initial:l.initial,velocity:M,vxvy:z};A.first&&i.onSwipeStart&&i.onSwipeStart(A),i.onSwiping&&i.onSwiping(A);let ne=!1;return(i.onSwiping||i.onSwiped||i[`onSwiped${g}`])&&(ne=!0),ne&&i.preventScrollOnSwipe&&i.trackTouch&&s.cancelable&&s.preventDefault(),Object.assign(Object.assign({},l),{first:!1,eventData:A,swiping:!0})})},c=s=>{e((l,i)=>{let b;if(l.swiping&&l.eventData){if(s.timeStamp-l.start<i.swipeDuration){b=Object.assign(Object.assign({},l.eventData),{event:s}),i.onSwiped&&i.onSwiped(b);const p=i[`onSwiped${b.dir}`];p&&p(b)}}else i.onTap&&i.onTap({event:s});return i.onTouchEndOrOnMouseUp&&i.onTouchEndOrOnMouseUp({event:s}),Object.assign(Object.assign(Object.assign({},l),le),{eventData:b})})},a=()=>{document.removeEventListener(pe,r),document.removeEventListener(ge,d)},d=s=>{a(),c(s)},u=(s,l)=>{let i=()=>{};if(s&&s.addEventListener){const b=Object.assign(Object.assign({},H.touchEventOptions),l.touchEventOptions),p=[[Bt,n,b],[Ht,r,Object.assign(Object.assign({},b),l.preventScrollOnSwipe?{passive:!1}:{})],[zt,c,b]];p.forEach(([S,w,x])=>s.addEventListener(S,w,x)),i=()=>p.forEach(([S,w])=>s.removeEventListener(S,w))}return i},m={ref:s=>{s!==null&&e((l,i)=>{if(l.el===s)return l;const b={};return l.el&&l.el!==s&&l.cleanUpTouch&&(l.cleanUpTouch(),b.cleanUpTouch=void 0),i.trackTouch&&s&&(b.cleanUpTouch=u(s,i)),Object.assign(Object.assign(Object.assign({},l),{el:s}),b)})}};return t.trackMouse&&(m.onMouseDown=n),[m,u]}function Xt(e,t,n,r){return!t.trackTouch||!e.el?(e.cleanUpTouch&&e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:void 0})):e.cleanUpTouch?t.preventScrollOnSwipe!==n.preventScrollOnSwipe||t.touchEventOptions.passive!==n.touchEventOptions.passive?(e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:r(e.el,t)})):e:Object.assign(Object.assign({},e),{cleanUpTouch:r(e.el,t)})}function Yt(e){const{trackMouse:t}=e,n=o.useRef(Object.assign({},le)),r=o.useRef(Object.assign({},H)),c=o.useRef(Object.assign({},r.current));c.current=Object.assign({},r.current),r.current=Object.assign(Object.assign({},H),e);let a;for(a in H)r.current[a]===void 0&&(r.current[a]=H[a]);const[d,u]=o.useMemo(()=>Ft(h=>n.current=h(n.current,r.current),{trackMouse:t}),[t]);return n.current=Xt(n.current,r.current,c.current,u),d}function Vt({event:e}){switch(e==null?void 0:e.id){case"item":return f.jsx(Gt,{event:e});case"gold":return f.jsx(qt,{event:e});case"diamond":return f.jsx(Kt,{event:e});case"monster_fight":return f.jsx(Zt,{event:e});case"monster_unlock":return f.jsx(Jt,{event:e});case"mystery_box":return f.jsx(Qt,{event:e});case"scratch_card":return f.jsx(en,{event:e});case"experience":return f.jsx(tn,{event:e});case"food":return f.jsx(nn,{event:e});case"boss_fight":return f.jsx(rn,{event:e});default:return f.jsx(on,{})}}function Gt({event:e}){return f.jsx(_,{withBorder:!0,w:"100%",maw:360,children:f.jsxs(P,{direction:"column",align:"center",gap:"md",children:[f.jsx(q,{src:K.url(Ge[e.itemId].path),width:64,height:64,style:{imageRendering:"pixelated"}}),f.jsxs(N,{order:3,align:"center",children:["Found: ",f.jsx("br",{})," ",e.itemId]})]})})}function qt({event:e}){return f.jsx(_,{withBorder:!0,w:"100%",maw:360,children:f.jsxs(P,{direction:"column",align:"center",gap:"md",children:[f.jsx(Z,{emoji:"🪙",style:{width:48,height:48}}),f.jsxs(N,{order:3,align:"center",children:["Received: ",f.jsx("br",{}),`${J.formatNumber(e.count)} Gold`]})]})})}function Kt({event:e}){return f.jsx(_,{withBorder:!0,w:"100%",maw:360,children:f.jsxs(P,{direction:"column",align:"center",gap:"md",children:[f.jsx(Z,{emoji:"💎",style:{width:48,height:48}}),f.jsxs(N,{order:3,align:"center",children:["Received: ",f.jsx("br",{}),`${J.formatNumber(e.count)} Diamond`]})]})})}function Zt({event:e}){const t=o.useMemo(()=>$e.util.getMonsterStats({id:e.monsterId,level:e.level},!1),[e]),n=()=>{Ee.setState(r=>{r.modals.monsterFight.opened=!0}),Y.setState(r=>{const c={id:e.monsterId,level:e.level,xp:0},a=r.data.inventory.monsters[r.data.inventory.currentMonsterIndex];a&&ye.act(r.data,{type:"start",ally:a,enemy:c,isEnemyBoss:!1})})};return f.jsx(_,{withBorder:!0,w:"100%",maw:360,children:f.jsxs(P,{direction:"column",align:"center",gap:"md",children:[f.jsx(q,{src:K.url(ie[e.monsterId].path),width:64,height:64,style:{imageRendering:"pixelated"}}),f.jsx(N,{order:3,align:"center",children:e.monsterId}),f.jsx(Pe,{...t}),f.jsx(xe,{fullWidth:!0,leftIcon:f.jsx(Ce,{}),onClick:n,children:"Fight"})]})})}function Jt({event:e}){return f.jsx(_,{withBorder:!0,w:"100%",maw:360,children:f.jsxs(P,{direction:"column",align:"center",gap:"md",children:[f.jsx(q,{src:K.url(ie[e.monsterId].path),width:64,height:64,style:{imageRendering:"pixelated"}}),f.jsxs(N,{order:3,align:"center",children:["Found: ",f.jsx("br",{}),e.monsterId]})]})})}function Qt({}){return f.jsx(_,{withBorder:!0,w:"100%",maw:360,children:"mystery_box"})}function en({}){return f.jsx(_,{withBorder:!0,w:"100%",maw:360,children:"scratch_card"})}function tn({event:e}){return f.jsx(_,{withBorder:!0,w:"100%",maw:360,children:f.jsxs(P,{direction:"column",align:"center",gap:"md",children:[f.jsx(Z,{emoji:"⭐",style:{width:48,height:48}}),f.jsxs(N,{order:3,align:"center",children:["Received: ",f.jsx("br",{}),`${J.formatNumber(e.count)} Experience`]})]})})}function nn({event:e}){return f.jsx(_,{withBorder:!0,w:"100%",maw:360,children:f.jsxs(P,{direction:"column",align:"center",gap:"md",children:[f.jsx(Z,{emoji:"🍏",style:{width:48,height:48}}),f.jsxs(N,{order:3,align:"center",children:["Received: ",f.jsx("br",{}),`${J.formatNumber(e.count)} Food`]})]})})}function rn({event:e}){const t=o.useMemo(()=>$e.util.getMonsterStats({id:e.monsterId,level:e.level},!0),[e]),n=()=>{Ee.setState(r=>{r.modals.monsterFight.opened=!0}),Y.setState(r=>{const c={id:e.monsterId,level:e.level,xp:0},a=r.data.inventory.monsters[r.data.inventory.currentMonsterIndex];a&&ye.act(r.data,{type:"start",ally:a,enemy:c,isEnemyBoss:!0})})};return f.jsx(_,{withBorder:!0,w:"100%",maw:360,children:f.jsxs(P,{direction:"column",align:"center",gap:"md",children:[f.jsx(q,{src:K.url(ie[e.monsterId].path),width:64,height:64,style:{imageRendering:"pixelated"}}),f.jsx(N,{order:3,color:"red",children:e.monsterId}),f.jsx(Pe,{...t}),f.jsx(xe,{fullWidth:!0,leftIcon:f.jsx(Ce,{}),onClick:n,children:"Fight"})]})})}function on(){return f.jsx(_,{withBorder:!0,w:"100%",maw:360,children:f.jsxs(P,{direction:"column",align:"center",gap:"md",children:[f.jsx(N,{order:3,align:"center",children:"Start swiping up!"}),f.jsxs(P,{children:[f.jsx(Ke,{size:32}),f.jsx(Dt,{size:32})]})]})})}function dn(){const e=we(),t=Yt({onSwipedUp:c=>{Y.setState(a=>{qe.act(a.data,{})})},trackMouse:!0}),n=Y(c=>c.data),r=o.useRef(null);return o.useLayoutEffect(()=>{r.current&&(r.current.firstChild.style.height="100%")},[r]),f.jsx(f.Fragment,{children:f.jsx(P,{pos:"absolute",top:64,bottom:64,maw:e.breakpoints.sm,w:"100%",...t,children:f.jsx(P,{w:"100%",h:"100%",mx:"md",children:f.jsx(Nt,{w:"100%",h:"100%",viewportRef:r,children:f.jsx(P,{w:"100%",h:"100%",py:"md",align:"center",justify:"center",children:f.jsx(Vt,{event:n.currentGameEvent})})})})})})}export{dn as default};
