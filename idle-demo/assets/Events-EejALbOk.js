import{a4 as Q,aF as T,aG as $,e as k,aH as C,f as D,aI as S,aJ as A,aK as y,u,r as H,j as e,C as Y,F as m,T as M,l as w,m as q,q as G,ad as c,B as J,g as R,a as F,aL as U,aM as z,h as K,ay as f,D as g,o as I}from"./index-LKG6ecAX.js";import{F as B,R as h}from"./FullscreenModal-6M83FpiP.js";import{S as v}from"./ScrollArea-MB6Bf0Xn.js";import{u as p}from"./use-disclosure-dSY4HeaO.js";var P=Q("circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]]),_=Q("circle","IconCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}]]);function E(s,n){const t=T(s,{id:n.achievementId}),o=$({id:n.achievementId});return!(t<o||s.events.achievements.collected[n.achievementId])}function N(s,n){E(s,n)&&(s.events.achievements.collected[n.achievementId]=!0,k(s,{toAdd:C[n.achievementId].rewards}))}function L(s,n){const t=new Date(s.events.dailyQuests.startDate),o=new Date(D(Date.now()));if(t.getUTCFullYear()!==o.getUTCFullYear()||t.getUTCMonth()!==o.getUTCMonth()||t.getUTCDate()!==o.getUTCDate())return!1;const l=S(s,{id:n.dailyQuestId}),i=A({id:n.dailyQuestId});return!(l<i||s.events.dailyQuests.collected[n.dailyQuestId])}function V(s,n){L(s,n)&&(s.events.dailyQuests.collected[n.dailyQuestId]=!0,k(s,{toAdd:y[n.dailyQuestId].rewards}))}function W(s,n){const t=new Date,o=new Date(D(s.events.dailyQuests.startDate));return!(t.getTime()<o.getTime())}function X(s,n){W(s)&&(s.events.dailyQuests={startDate:Date.now(),progress:{},collected:{}})}function O({dailyQuest:s,achievement:n}){const t=u(l=>l.player),o=H.useMemo(()=>{if(t){if(s)return{name:s.id,rewards:y[s.id].rewards,done:t?S(t,s):0,todo:A(s),onCollect(){u.setState(l=>{l.player&&V(l.player,{dailyQuestId:s.id})})},collectible:L(t,{dailyQuestId:s.id}),collected:!!(t!=null&&t.events.dailyQuests.collected[s.id])};if(n)return{name:n.id,rewards:C[n.id].rewards,done:t?T(t,n):0,todo:$(n),onCollect(){u.setState(l=>{l.player&&N(l.player,{achievementId:n.id})})},collectible:E(t,{achievementId:n.id}),collected:!!(t!=null&&t.events.achievements.collected[n.id])}}},[t,s,n]);return o?e.jsx(Y,{withBorder:!0,radius:"md",children:e.jsxs(m,{direction:"column",gap:"xs",children:[e.jsx(M,{order:6,children:o.name}),e.jsx(v,{children:e.jsx(m,{gap:"xs",children:o.rewards.map(l=>l.item?e.jsx(w,{item:l.item},q(l.item)):e.jsx(w,{monster:l.monster},G(l.monster)))})}),e.jsxs(m,{gap:"md",align:"center",children:[e.jsx(c.Root,{size:"xl",style:{flex:1},children:e.jsx(c.Section,{value:o.done/o.todo*100,children:e.jsx(c.Label,{pos:"absolute",style:{transform:"translate(-50%,0)",left:"50%"},children:`${o.done} / ${o.todo}`})})}),e.jsx(J,{onClick:o.onCollect,disabled:!o.collectible,leftSection:o.collected?e.jsx(P,{}):e.jsx(_,{}),children:"Collect"})]})]})}):null}function Z({opened:s,onClose:n}){var x,b;const t=u(d=>d.player),o=((x=t==null?void 0:t.items[R])==null?void 0:x.count)??0,l=((b=t==null?void 0:t.items[F])==null?void 0:b.count)??0,i=t?U(t):0,r=z(),a=t?D(t.events.dailyQuests.startDate):Date.now(),j=K(a,()=>{u.setState(d=>{d.player&&X(d.player)})});return e.jsx(B,{opened:s,onClose:n,header:e.jsxs(e.Fragment,{children:[e.jsx(f,{emoji:"🪙",count:o}),e.jsx(f,{emoji:"💎",count:l})]}),children:e.jsx(v,{h:"100%",children:e.jsxs(m,{direction:"column",gap:"md",h:"100%",children:[e.jsx(g,{label:"Daily Quests"}),e.jsx(c.Root,{size:24,w:"100%",children:e.jsx(c.Section,{value:i/r*100,children:e.jsx(c.Label,{pos:"absolute",style:{transform:"translate(-50%,0)",left:"50%"},children:`${i} / ${r}`})})}),e.jsxs(M,{order:6,ta:"center",children:["Resets in ",j]}),Object.keys(y).map(d=>e.jsx(O,{dailyQuest:{id:d}},d))]})})})}function ee({opened:s,onClose:n}){var i,r;const t=u(a=>a.player),o=((i=t==null?void 0:t.items[R])==null?void 0:i.count)??0,l=((r=t==null?void 0:t.items[F])==null?void 0:r.count)??0;return e.jsx(B,{opened:s,onClose:n,header:e.jsxs(e.Fragment,{children:[e.jsx(f,{emoji:"🪙",count:o}),e.jsx(f,{emoji:"💎",count:l})]}),children:e.jsx(v,{h:"100%",children:e.jsxs(m,{direction:"column",gap:"md",h:"100%",children:[e.jsx(g,{label:"Achievements"}),Object.keys(C).map(a=>e.jsx(O,{achievement:{id:a}},a))]})})})}function le(){const[s,{open:n,close:t}]=p(),[o,{open:l,close:i}]=p(),r=u(x=>x.player),a=r?U(r):0,j=z();return e.jsxs(e.Fragment,{children:[e.jsx(v,{children:e.jsxs(m,{direction:"column",gap:"md",children:[e.jsx(g,{label:"Continuous Events"}),e.jsx(h,{emoji:"📋",title:"Daily Quests",onClick:n,children:e.jsx(c.Root,{size:"xl",mt:"xs",w:"100%",children:e.jsx(c.Section,{value:a/j*100,children:e.jsx(c.Label,{pos:"absolute",style:{transform:"translate(-50%,0)",left:"50%"},children:`${a} / ${j}`})})})}),e.jsx(h,{emoji:"🎯",title:"Achievements",onClick:l}),e.jsx(g,{label:"Limited Events"}),e.jsx(h,{emoji:"😈",title:"Monster Hunt",onClick:()=>{},children:e.jsx(I,{ta:"left",size:"sm",c:"yellow",children:"Coming soon..."})}),e.jsx(h,{emoji:"💳",title:"Spending Spree",onClick:()=>{},children:e.jsx(I,{ta:"left",size:"sm",c:"yellow",children:"Coming soon..."})})]})}),e.jsx(Z,{opened:s,onClose:t}),e.jsx(ee,{opened:o,onClose:i})]})}export{le as default};
