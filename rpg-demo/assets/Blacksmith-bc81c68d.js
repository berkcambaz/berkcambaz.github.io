import{e as w,G as j,Q as C,n as g,r as I,h,j as e,F as n,C as x,S as d,f as m,i as a,T as b,k}from"./index-b1a9d3db.js";import{I as B}from"./ItemList-f881fae6.js";import{I as U}from"./IconHammer-b8a37ba7.js";var A=w("arrow-big-right-filled","IconArrowBigRightFilled",[["path",{d:"M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-6.999a2 2 0 0 0 -2 2v4l.005 .15a2 2 0 0 0 1.995 1.85l6.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]);const f={act:F,actable:v};function v(r,s){if(!s.itemId)return!1;const t=r.inventory.items[s.itemId];return!(!t||t.count<3||!j.getItemUpgrade(s.itemId))}function F(r,s){if(!v(r,s)||!s.itemId)return;const t=r.inventory.items[s.itemId];if(!t)return;const i=j.getItemUpgrade(s.itemId);i&&(r.inventory.items[i]||(r.inventory.items[i]={id:i,count:0}),r.inventory.items[i].count++,t.count-=3,t.count===0&&delete r.inventory.items[s.itemId],C.upgradeItem.dispatch({data:r}))}function G(){var l,u,p;const r=g(o=>o.data),s=I.useMemo(()=>h.util.sortItems(Object.values(r.inventory.items)),[r.inventory.items]),[t,i]=I.useState(void 0),c=h.util.getItemUpgrade(t),y=()=>{g.setState(o=>{t&&f.act(o.data,{itemId:t})})};return e.jsx(n,{direction:"column",align:"center",gap:"md",mx:"md",my:80,children:e.jsx(x,{withBorder:!0,w:"100%",maw:360,children:e.jsxs(n,{direction:"column",gap:"md",children:[e.jsx(x,{withBorder:!0,children:e.jsxs(n,{direction:"column",gap:"md",children:[e.jsxs(n,{align:"center",justify:"space-evenly",children:[t?e.jsx(d,{src:m.url(a[t].path),count:(l=r.inventory.items[t])==null?void 0:l.count,stars:a[t].stars,onClick:()=>i(void 0)}):e.jsx(d,{src:m.url(a["Common Axe"].path),blur:!0}),e.jsxs(n,{pos:"relative",children:[e.jsx(A,{}),e.jsx(b,{order:6,pos:"absolute",top:24,children:t?`${(u=r.inventory.items[t])==null?void 0:u.count}/3`:"0/3"})]}),c?e.jsx(d,{src:m.url(a[c].path),count:(p=r.inventory.items[c])==null?void 0:p.count,stars:a[c].stars}):e.jsx(d,{src:m.url(a["Common Axe"].path),blur:!0})]}),e.jsx(k,{leftIcon:e.jsx(U,{}),onClick:y,disabled:!f.actable(r,{itemId:t}),children:"Upgrade"})]})}),e.jsx(n,{direction:"row",gap:"md",wrap:"wrap",children:e.jsx(B,{items:s,itemsOnClick:o=>i(o.id)})})]})})})}export{G as default};
