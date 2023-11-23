var D=Object.defineProperty;var R=(e,t,s)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var r=(e,t,s)=>(R(e,typeof t!="symbol"?t+"":t,s),s);import{r as v,j as k}from"./index-99b77826.js";function b(e,t,s){return e<t?t:e>s?s:e}function h(e,t,s){return(t-e)*s+e}function w(e,t,s){const i={x:t.x-e.x,y:t.y-e.y},a=Math.sqrt(i.x*i.x+i.y*i.y);return a<=s||a===0?t:{x:e.x+i.x/a*s,y:e.y+i.y/a*s}}function f(e,t){return e.x*t.x+e.y*t.y}class H{constructor(t,s,i,a){r(this,"x");r(this,"y");r(this,"oldX");r(this,"oldY");r(this,"w");r(this,"h");r(this,"wRatio");r(this,"hRatio");this.x=t,this.y=s,this.oldX=t,this.oldY=s,this.w=i,this.h=a,this.wRatio=0,this.hRatio=0,n.signals.onResize.add(({w:o,h:c})=>{this.onResize(o,c)}),n.signals.onResize.dispatch({w:innerWidth,h:innerHeight})}tick(){this.oldX=this.x,this.oldY=this.y}getPos(){return{x:h(this.oldX,this.x,n.dt),y:h(this.oldY,this.y,n.dt)}}screenToWorld(t){const s=n.camera.getPos();return{x:t.x*this.wRatio+s.x-n.camera.w/2,y:t.y*this.hRatio+s.y-n.camera.h/2}}onResize(t,s){const i=this.w/this.h;t/s>i?t=s*(this.w/this.h):s=t*(this.h/this.w),this.wRatio=this.w/t,this.hRatio=this.h/s,n.canvas.width=this.w,n.canvas.height=this.h,n.canvas.style.width=t+"px",n.canvas.style.height=s+"px"}}function K(){return{x:0,y:0}}function x(e){return{x:e.x,y:e.y}}function A(e,t){return e.x===t.x&&e.y===t.y}const m=40,S=30,E=50,P=300;class B{constructor(){r(this,"heroes",{});r(this,"minions",{});r(this,"towers",{})}tick(){n.match.heroes.forEach(t=>{this.updatePositions(t,this.heroes)}),n.match.minions.forEach(t=>{this.updatePositions(t,this.minions)}),n.match.towers.forEach(t=>{this.updatePositions(t,this.towers)})}updatePositions(t,s){s[t.id]?(s[t.id].prev=x(s[t.id].curr),s[t.id].curr=x(t.pos)):s[t.id]={prev:t.pos,curr:t.pos}}renderHero(t){const s=this.heroes[t.id];if(!s)return;const i=n.camera.getPos();this.circle(h(s.prev.x,s.curr.x,n.dt)-i.x+n.camera.w/2,h(s.prev.y,s.curr.y,n.dt)-i.y+n.camera.h/2,m,t.team==="A"?"#3BDF70":"#F22625",t.team==="A"?"#00963C":"#A90003"),this.renderHp({x:h(s.prev.x,s.curr.x,n.dt)-i.x+n.camera.w/2,y:h(s.prev.y,s.curr.y,n.dt)-i.y+n.camera.h/2-m-25},t.hp,1)}renderMinion(t){const s=this.minions[t.id];if(!s)return;const i=n.camera.getPos();this.circle(h(s.prev.x,s.curr.x,n.dt)-i.x+n.camera.w/2,h(s.prev.y,s.curr.y,n.dt)-i.y+n.camera.h/2,S,t.team==="A"?"#3BDF70":"#F22625",t.team==="A"?"#00963C":"#A90003"),this.renderHp({x:h(s.prev.x,s.curr.x,n.dt)-i.x+n.camera.w/2,y:h(s.prev.y,s.curr.y,n.dt)-i.y+n.camera.h/2-S-25},t.hp,.75)}renderTower(t){const s=this.towers[t.id];if(!s)return;const i=n.camera.getPos();this.circle(h(s.prev.x,s.curr.x,n.dt)-i.x+n.camera.w/2,h(s.prev.y,s.curr.y,n.dt)-i.y+n.camera.h/2,P,t.team==="A"?"#E5FEEEaa":"#FFE9E9aa",t.team==="A"?"#53E383":"#F34141"),this.circle(h(s.prev.x,s.curr.x,n.dt)-i.x+n.camera.w/2,h(s.prev.y,s.curr.y,n.dt)-i.y+n.camera.h/2,E,t.team==="A"?"#3BDF70":"#F22625",t.team==="A"?"#00963C":"#A90003"),this.renderHp({x:h(s.prev.x,s.curr.x,n.dt)-i.x+n.camera.w/2,y:h(s.prev.y,s.curr.y,n.dt)-i.y+n.camera.h/2-E-25},t.hp,1.25)}renderBounds(){const t=n.camera.getPos(),s=n.match.bounds[0].x-t.x+n.camera.w/2,i=n.match.bounds[0].y-t.y+n.camera.h/2,a=Math.abs(n.match.bounds[0].x)+Math.abs(n.match.bounds[1].x),o=Math.abs(n.match.bounds[0].y)+Math.abs(n.match.bounds[1].y);n.ctx.strokeStyle="#575757",n.ctx.strokeRect(s,i,a,o)}renderHp(t,s,i){const a=80*i,o=20*i;n.ctx.fillStyle="#F22625",n.ctx.fillRect(t.x-a/2,t.y-o/2,a,o),n.ctx.fillStyle="#3BDF70",n.ctx.fillRect(t.x-a/2,t.y-o/2,a*(s.curr/s.max),o)}circle(t,s,i,a,o){n.ctx.beginPath(),n.ctx.arc(t,s,i,0,2*Math.PI,!1),n.ctx.fillStyle=a,n.ctx.fill(),n.ctx.lineWidth=5,n.ctx.strokeStyle=o,n.ctx.stroke()}}class q{constructor(){r(this,"listeners",[])}add(t){this.listeners.push(t)}remove(t){for(let s=0;s<this.listeners.length;++s)if(this.listeners[s]===t){this.listeners.splice(s,1);return}}dispatch(t){var s,i;for(let a=0;a<this.listeners.length;++a)(i=(s=this.listeners)[a])==null||i.call(s,t)}clear(){this.listeners=[]}}var y=(e=>(e[e.Skill1=0]="Skill1",e[e.Skill2=1]="Skill2",e[e.Skill3=2]="Skill3",e[e.Skill4=3]="Skill4",e[e.Mouse1=4]="Mouse1",e[e.TeamChange=5]="TeamChange",e))(y||{});class F{constructor(){r(this,"mouse");r(this,"keys");r(this,"keysDown");r(this,"keysUnlimited");r(this,"keyToId");this.mouse={x:0,y:0},this.keys=[],this.keysDown=[],this.keysUnlimited=[],this.keyToId={KeyQ:0,KeyW:1,KeyE:2,KeyR:3,Mouse1:4,KeyT:5},window.addEventListener("keydown",t=>{this.onKeyDown(t)}),window.addEventListener("keyup",t=>{this.onKeyUp(t)}),n.canvas.addEventListener("mousemove",t=>{this.onMouseMove(t)}),n.canvas.addEventListener("mousedown",t=>{this.onMouseDown(t)}),n.canvas.addEventListener("mouseup",t=>{this.onMouseUp(t)}),n.canvas.addEventListener("mouseleave",t=>{this.onMouseLeave(t)})}tick(){this.keys=[...this.keysUnlimited],this.keysDown=[]}getKey(t){return!!this.keys[t]}getKeyDown(t){return!!this.keysDown[t]}onKeyDown(t){this.handleKey(t.code,!0)}onKeyUp(t){this.handleKey(t.code,!1)}onMouseMove(t){const s=n.canvas.getBoundingClientRect();this.mouse.x=t.pageX-s.left-scrollX,this.mouse.y=t.pageY-s.top-scrollY}onMouseDown(t){this.handleKey("Mouse1",!0);const s=n.canvas.getBoundingClientRect();this.mouse.x=t.pageX-s.left-scrollX,this.mouse.y=t.pageY-s.top-scrollY}onMouseUp(t){this.handleKey("Mouse1",!1)}onMouseLeave(t){}handleKey(t,s){const i=this.keyToId[t];if(i===void 0)return;const a=this.keysUnlimited[i];s&&(this.keys[i]=s),!a&&s&&(this.keysDown[i]=s),this.keysUnlimited[i]=s}}function M(e,t,s,i){const a={x:s.x-e.x,y:s.y-e.y},o={x:t.x-e.x,y:t.y-e.y},c=f(o,o);let d=f(a,o)/c;d=d<0?0:d,d=d>1?1:d;const g={x:o.x*d+e.x-s.x,y:o.y*d+e.y-s.y};return f(g,g)<=i*i}function L(e,t){return t.x<e.bounds[0].x||t.y<e.bounds[0].y||t.x>e.bounds[1].x||t.y>e.bounds[1].y}function z(){return{createState:()=>({}),onTick(e,t){const i=[...e.minions,...e.towers].filter(a=>a.id!==t.id&&a.team!==t.team).sort((a,o)=>Math.abs(a.pos.x-t.pos.x)-Math.abs(o.pos.x-t.pos.x))[0];i&&Math.abs(i.pos.x-t.pos.x)>100&&(t.pos=w(t.pos,{x:i.pos.x,y:t.pos.y},7.5))},onGetHit(e,t,s){t.hp.curr-=s,t.hp.curr<=0&&this.onDespawn(e,t)},onSpawn(e,t){},onDespawn(e,t){e.minions=e.minions.filter(s=>s.id!==t.id)}}}const _={basic:z()};function U(){return{cooldown:10,blocking:!0,createState:()=>({target:K(),heroesHit:[],minionsHit:[]}),onTick(e,t,s){const i=s.state,a=x(t.pos);t.pos=w(t.pos,i.target,250),t.target=void 0;const o=x(t.pos);e.heroes.filter(c=>c.team!==t.team&&i.heroesHit.indexOf(c.id)===-1&&M(a,o,c.pos,m)).forEach(c=>{l[t.type].onHit(e,t,c),l[c.type].onGetHit(e,t,c),i.heroesHit.push(c.id)}),e.minions.filter(c=>c.team!==t.team&&i.minionsHit.indexOf(c.id)===-1&&M(a,o,c.pos,m)).forEach(c=>{_[c.type].onGetHit(e,c,1),i.minionsHit.push(c.id)}),(A(t.pos,i.target)||L(e,t.pos))&&this.onEnd(e,t,s)},onStart(e,t,s){var a;if(!((a=t.input)!=null&&a.target))return;s.active=!0;const i=s.state;i.target=t.input.target,i.heroesHit=[],i.minionsHit=[]},onEnd(e,t,s){s.active=!1,t.skills[s.id].cooldown=this.cooldown}}}const u={dash:U()};function X(){return{skills:{q:"dash",w:"dash",e:"dash",r:"dash"},createState:()=>({}),onTick(e,t){var s,i,a,o,c;(s=t.input)!=null&&s.mouse&&(t.target=t.input.target),t.skills.q.active&&u[l[t.type].skills.q].onTick(e,t,t.skills.q),t.skills.w.active&&u[l[t.type].skills.w].onTick(e,t,t.skills.w),t.skills.e.active&&u[l[t.type].skills.e].onTick(e,t,t.skills.e),t.skills.r.active&&u[l[t.type].skills.r].onTick(e,t,t.skills.r),(i=t.input)!=null&&i.skills.q&&p(e,t,"q")&&this.onSkill(e,t,t.input.target,"q"),(a=t.input)!=null&&a.skills.w&&p(e,t,"w")&&this.onSkill(e,t,t.input.target,"w"),(o=t.input)!=null&&o.skills.e&&p(e,t,"e")&&this.onSkill(e,t,t.input.target,"e"),(c=t.input)!=null&&c.skills.r&&p(e,t,"r")&&this.onSkill(e,t,t.input.target,"r"),t.target&&(t.pos=w(t.pos,t.target,10)),t.pos.x=b(t.pos.x,e.bounds[0].x,e.bounds[1].x),t.pos.y=b(t.pos.y,e.bounds[0].y,e.bounds[1].y),t.skills.q.cooldown--,t.skills.w.cooldown--,t.skills.e.cooldown--,t.skills.r.cooldown--},onInput(e,t,s,i,a){t.input={target:s,mouse:i,skills:a}},onStartMove(e,t){},onMove(e,t){},onEndMove(e,t){},onAttack(e,t,s){},onSkill(e,t,s,i){u[l[t.type].skills[i]].onStart(e,t,t.skills[i]),t.input=void 0},onHit(e,t,s){},onGetHit(e,t,s){--s.hp.curr<=0&&(l[t.type].onKill(e,t,s),l[s.type].onDeath(e,t,s)),console.log(s.hp.curr)},onKill(e,t,s){},onDeath(e,t,s){e.heroes=e.heroes.filter(i=>i.id!==s.id)}}}const l={basic:X()};function p(e,t,s){return!(t.skills.q.active&&u[l[t.type].skills.q].blocking||t.skills.w.active&&u[l[t.type].skills.w].blocking||t.skills.e.active&&u[l[t.type].skills.e].blocking||t.skills.r.active&&u[l[t.type].skills.r].blocking||t.skills[s].cooldown>0)}function Y(){return{createState:()=>({}),onTick(e,t){}}}const G={basic:Y()};function W(){return{createState:()=>({}),onTick(e){e.ticks++,e.heroes.forEach(t=>l[t.type].onTick(e,t)),e.minions.forEach(t=>_[t.type].onTick(e,t)),e.towers.forEach(t=>G[t.type].onTick(e,t))}}}const j={basic:W()};function T(e,t,s,i){return{id:e,team:t,type:s,pos:i,level:1,xp:0,hp:{curr:5,max:5},skills:{q:{active:!1,cooldown:0,id:"q",state:u[l[s].skills.q].createState()},w:{active:!1,cooldown:0,id:"w",state:u[l[s].skills.w].createState()},e:{active:!1,cooldown:0,id:"e",state:u[l[s].skills.e].createState()},r:{active:!1,cooldown:0,id:"r",state:u[l[s].skills.r].createState()}}}}let O=class{constructor(){r(this,"canvas");r(this,"ctx");r(this,"tps",1e3/10);r(this,"currentTime",0);r(this,"accumulator",0);r(this,"dt",0);r(this,"camera");r(this,"renderer");r(this,"input");r(this,"team");r(this,"match");r(this,"signals",{onResize:new q})}run(t){this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw Error("HTML Canvas is not supported in the browser.");this.ctx=s,this.camera=new H(0,0,1280,720),this.renderer=new B,this.input=new F,this.team="A",this.match={id:Date.now().toString(),matchType:"basic",bounds:[{x:-1e3,y:-300},{x:1e3,y:300}],ticks:0,heroes:[T(0,"A","basic",{x:-1e3,y:0}),T(1,"B","basic",{x:1e3,y:0})],minions:[{id:0,team:"A",type:"basic",pos:{x:-1e3,y:-50},hp:{curr:5,max:5}},{id:1,team:"A",type:"basic",pos:{x:-1e3,y:50},hp:{curr:5,max:5}},{id:2,team:"B",type:"basic",pos:{x:1e3,y:-50},hp:{curr:5,max:5}},{id:3,team:"B",type:"basic",pos:{x:1e3,y:50},hp:{curr:5,max:5}}],towers:[{id:0,team:"A",type:"basic",pos:{x:-1e3,y:0},hp:{curr:50,max:50}},{id:1,team:"A",type:"basic",pos:{x:-600,y:0},hp:{curr:25,max:25}},{id:2,team:"B",type:"basic",pos:{x:600,y:0},hp:{curr:25,max:25}},{id:3,team:"B",type:"basic",pos:{x:1e3,y:0},hp:{curr:50,max:50}}]},this.addEventListeners(),this.loop(0)}loop(t){window.requestAnimationFrame(i=>{this.loop(i)});let s=t-this.currentTime;for(s>this.tps&&(s=this.tps),this.currentTime=t,this.accumulator+=s;this.accumulator>=this.tps;)this.tick(),this.accumulator-=this.tps;this.dt=this.accumulator/this.tps,this.render()}tick(){this.camera.tick(),this.input.getKeyDown(y.TeamChange)&&(this.team=this.team==="A"?"B":"A");const t=this.match.heroes.filter(s=>s.team===this.team)[0];if(t){let s=this.camera.screenToWorld(this.input.mouse),i=this.input.getKey(y.Mouse1),a={q:this.input.getKey(y.Skill1),w:this.input.getKey(y.Skill2),e:this.input.getKey(y.Skill3),r:this.input.getKey(y.Skill4)};l[t.type].onInput(this.match,t,s,i,a)}j[this.match.matchType].onTick(this.match),t&&(this.camera.x=t.pos.x,this.camera.y=t.pos.y),this.input.tick(),this.renderer.tick()}render(){this.ctx.clearRect(0,0,this.camera.w,this.camera.h),this.renderer.renderBounds(),this.match.towers.forEach(t=>{this.renderer.renderTower(t)}),this.match.heroes.forEach(t=>{this.renderer.renderHero(t)}),this.match.minions.forEach(t=>{this.renderer.renderMinion(t)})}addEventListeners(){window.addEventListener("resize",()=>{this.signals.onResize.dispatch({w:innerWidth,h:innerHeight})})}};function V(){const e=v.useRef(null);return v.useEffect(()=>{e.current&&n.run(e.current)},[]),k.jsx(k.Fragment,{children:k.jsx("canvas",{ref:e,style:{display:"block",backgroundColor:"#000"}})})}const n=new O;export{V as default,n as game};
