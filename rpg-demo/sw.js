if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const l=e=>n(e,o),a={module:{uri:o},exports:c,require:l};s[o]=Promise.all(i.map((e=>a[e]||l(e)))).then((e=>(r(...e),c)))}}define(["./workbox-4de3aa5f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"36f318ba7291027ea903a9b0c149d6cb"},{url:"assets/gameStore-6a459307.js",revision:null},{url:"assets/Home-cef653d8.js",revision:null},{url:"assets/IconSword-4c225676.js",revision:null},{url:"assets/index-5d090e2a.js",revision:null},{url:"assets/Inventory-b61929d4.js",revision:null},{url:"assets/Map-3d976749.js",revision:null},{url:"assets/Menu-c5627d6b.js",revision:null},{url:"assets/MonsterStats-88907b61.js",revision:null},{url:"assets/NotFound-4cc9bec2.js",revision:null},{url:"favicon.ico",revision:"4132515645dff7eed1de05236692ac50"},{url:"icon-192-maskable.png",revision:"b75766708aba0c9356f8c613aa7054f2"},{url:"icon-192.png",revision:"ca0ce0aad712925b135c3405d0c17a7f"},{url:"icon-512-maskable.png",revision:"d92ff431faf6cb5be08789de53cd129b"},{url:"icon-512.png",revision:"ce26b87919fb878cac66292cd47835de"},{url:"index.html",revision:"82e092ee291b02beeebe37ed5e4a9933"},{url:"favicon.ico",revision:"4132515645dff7eed1de05236692ac50"},{url:"icon-192.png",revision:"ca0ce0aad712925b135c3405d0c17a7f"},{url:"icon-512.png",revision:"ce26b87919fb878cac66292cd47835de"},{url:"icon-192-maskable.png",revision:"b75766708aba0c9356f8c613aa7054f2"},{url:"icon-512-maskable.png",revision:"d92ff431faf6cb5be08789de53cd129b"},{url:"manifest.webmanifest",revision:"095074673eb2be1769033c20fbd830ab"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
