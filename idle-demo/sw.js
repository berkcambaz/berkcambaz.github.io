if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const a=e=>n(e,r),u={module:{uri:r},exports:o,require:a};s[r]=Promise.all(i.map((e=>u[e]||a(e)))).then((e=>(l(...e),o)))}}define(["./workbox-cd63daf5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"f12edf3309b59fb873c0f152c8bec52b"},{url:"assets/Bag-WEagGvEy.js",revision:null},{url:"assets/Campaign-EOV5w5KK.js",revision:null},{url:"assets/ContentAsset-buRFZ2Lb.js",revision:null},{url:"assets/ContentList-NdGfWjdq.js",revision:null},{url:"assets/eternal_temple-FDbKMk7P.png",revision:null},{url:"assets/Events-EejALbOk.js",revision:null},{url:"assets/forgotten_gateway-Khlem3iY.png",revision:null},{url:"assets/FullscreenModal-6M83FpiP.js",revision:null},{url:"assets/icy_kingdom-ZRMNIQIT.png",revision:null},{url:"assets/index-4SRrmVcL.css",revision:null},{url:"assets/index-LKG6ecAX.js",revision:null},{url:"assets/MainLayout-VGRPeANy.js",revision:null},{url:"assets/Map-oT2UR3xO.js",revision:null},{url:"assets/mossy_tower-kxTrCYij.png",revision:null},{url:"assets/NotFound-9QnyWE8t.js",revision:null},{url:"assets/ruins-Sb--1uCO.png",revision:null},{url:"assets/sand_castle-QIhxbPPo.png",revision:null},{url:"assets/ScrollArea-MB6Bf0Xn.js",revision:null},{url:"assets/Shop-vWBvmVec.js",revision:null},{url:"assets/tree_of_life-f7cA03Jv.png",revision:null},{url:"assets/use-disclosure-dSY4HeaO.js",revision:null},{url:"assets/weird_forest-egkPK5Fz.png",revision:null},{url:"assets/workbox-window.prod.es5-prqDwDSL.js",revision:null},{url:"endless-constellation.svg",revision:"9bfc9641bc84a2d068717f5d9ce3bdce"},{url:"favicon.png",revision:"6b1b4c09ea07e779a2f60c8223c3aecf"},{url:"gggrain.svg",revision:"385c0b007f7fd1c6e29ba5128e0f7d33"},{url:"icon-192-maskable.png",revision:"adb3117b006deaa8dfb9642a15accbc9"},{url:"icon-192.png",revision:"c0b15421cc669efa8df6073c89d516d6"},{url:"icon-512-maskable.png",revision:"9ab95ba60da1074070df2696c869eed2"},{url:"icon-512.png",revision:"9dff9b0ef7e59401d4b95dd0e3271d42"},{url:"index.html",revision:"44d91382430b56a2c5b39ecc1fe90172"},{url:"ssspot.svg",revision:"56d90e1d0987f51b27d8379f43a56126"},{url:"wavey-fingerprint.svg",revision:"f32ca51712fc855f80085b2c44e5ba2c"},{url:"favicon.ico",revision:"2867e3221fee9273d46b6690de08ff61"},{url:"icon-512.png",revision:"9dff9b0ef7e59401d4b95dd0e3271d42"},{url:"icon-512-maskable.png",revision:"9ab95ba60da1074070df2696c869eed2"},{url:"icon-192.png",revision:"c0b15421cc669efa8df6073c89d516d6"},{url:"icon-192-maskable.png",revision:"adb3117b006deaa8dfb9642a15accbc9"},{url:"manifest.webmanifest",revision:"71d3127266364ac3ace6df06d2413691"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
