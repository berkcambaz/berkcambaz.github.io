if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const a=e=>i(e,o),l={module:{uri:o},exports:c,require:a};s[o]=Promise.all(n.map((e=>l[e]||a(e)))).then((e=>(r(...e),c)))}}define(["./workbox-4de3aa5f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"733e926575e8b38d10035a7f74a4e4e7"},{url:"assets/avatar.webp",revision:"ea7e7c2e502b007992687443fa30a35f"},{url:"assets/Game-284138f4.js",revision:null},{url:"assets/GameLayout-dc2fd1da.js",revision:null},{url:"assets/Home-bb6591f8.js",revision:null},{url:"assets/index-ba4e56ff.css",revision:null},{url:"assets/index-c4337402.js",revision:null},{url:"assets/locale/en.svg",revision:"d788b9231ed2028dc29245f76cf0a415"},{url:"assets/MainLayout-d7664faf.js",revision:null},{url:"assets/NotFound-84218158.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"favicon.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"icon-192-maskable.png",revision:"6914f6743149c0ff293953cbd6b230af"},{url:"icon-192.png",revision:"8ed2c4c691bd5be7464f46c23a95cc76"},{url:"icon-512-maskable.png",revision:"640dcbff65b5e115563cd7895c94c99c"},{url:"icon-512.png",revision:"020fda679366acf4b55a221837422ebe"},{url:"index.html",revision:"695ad5dd739c5cce8237c487530cd0dc"},{url:"favicon.ico",revision:"25079f2b00d8280d48430e6977498ed9"},{url:"icon-512.png",revision:"020fda679366acf4b55a221837422ebe"},{url:"icon-512-maskable.png",revision:"640dcbff65b5e115563cd7895c94c99c"},{url:"icon-192.png",revision:"8ed2c4c691bd5be7464f46c23a95cc76"},{url:"icon-192-maskable.png",revision:"6914f6743149c0ff293953cbd6b230af"},{url:"manifest.webmanifest",revision:"282b9c6a3d7ea358d496adb033fd88f2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
