!function(){"use strict";var e,t,n,a,r,c,o,f={},i={};function d(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={id:e,loaded:!1,exports:{}};return f[e].call(n.exports,n,n.exports,d),n.loaded=!0,n.exports}d.m=f,e=[],d.O=function(t,n,a,r){if(!n){var c=1/0;for(s=0;s<e.length;s++){n=e[s][0],a=e[s][1],r=e[s][2];for(var o=!0,f=0;f<n.length;f++)(!1&r||c>=r)&&Object.keys(d.O).every((function(e){return d.O[e](n[f])}))?n.splice(f--,1):(o=!1,r<c&&(c=r));if(o){e.splice(s--,1);var i=a();void 0!==i&&(t=i)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[n,a,r]},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},d.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var r=Object.create(null);d.r(r);var c={};t=t||[null,n({}),n([]),n(n)];for(var o=2&a&&e;"object"==typeof o&&!~t.indexOf(o);o=n(o))Object.getOwnPropertyNames(o).forEach((function(t){c[t]=function(){return e[t]}}));return c.default=function(){return e},d.d(r,c),r},d.d=function(e,t){for(var n in t)d.o(t,n)&&!d.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},d.f={},d.e=function(e){return Promise.all(Object.keys(d.f).reduce((function(t,n){return d.f[n](e,t),t}),[]))},d.u=function(e){return({95:"component---gatsby-theme-academic-src-pages-404-index-jsx",127:"c9824dda9df8f7685f01c7fadceef7595220f4e6",130:"d2a718c8715fc45ec24ea729f89039a1469fefa2",222:"component---gatsby-theme-academic-src-templates-tags-index-jsx",226:"component---gatsby-theme-academic-src-pages-project-index-jsx",241:"component---gatsby-theme-academic-src-pages-research-index-jsx",256:"d6f511a7c2f74f09216a1428737e8d2af795a22c",260:"fb0e25797f7a937f14053ab13d3cef43692ea3c4",306:"component---cache-caches-gatsby-plugin-offline-app-shell-js",379:"62f20c319861073dbe6a5a0c1880c98e670acca4",448:"component---gatsby-theme-academic-src-templates-post-post-jsx",477:"component---gatsby-theme-academic-src-pages-wakatime-index-jsx",527:"component---gatsby-theme-academic-src-pages-posts-index-jsx",532:"styles",622:"component---gatsby-theme-academic-src-pages-contact-index-jsx",652:"4e865d82",660:"3a983af86ed716c08f291f80a8d40ca29d279b41",689:"component---gatsby-theme-academic-src-pages-index-jsx",692:"component---gatsby-theme-academic-src-pages-resume-jsx",724:"component---gatsby-theme-academic-src-pages-tags-index-jsx",842:"component---gatsby-theme-academic-src-pages-experience-index-jsx",920:"e85f25298d4438c3b406272b000b2ab1ed083256"}[e]||e)+"-"+{19:"b936ff7219d5b656a264",54:"8894d58a5607cbf63ee0",95:"ce28ed717474603064c1",127:"adfedddd4a0bf88d1d25",130:"5cdba71d092b3bda65d0",222:"17012592d84f38ee7c86",226:"130f2e724ee6dfdaea71",241:"2c4c64499b705886894c",256:"08f70763e6d4e2ff2326",260:"075490ae55412281867e",306:"35b1fe95e3c754a126ff",379:"bf47f2c5635a6c93a410",448:"0cf79439786e7b6eee2b",477:"5512d35c83b7688b1545",527:"2c5adc784ffc5f8b0bd2",532:"43fc9e9b4782f6405396",577:"179cbda775b3d8ecb00c",622:"7a1fcd16d7c23df0bfdd",652:"bfc97aa1524f93e255e6",660:"74bde95e62c3b6dec2a8",689:"4fb1ede88212b57223f3",692:"d26cefeff5ead9c5b293",724:"c43f74772633651d43b1",776:"1608a23343c86d53a6e3",842:"a20661dfbaa5e5dc0b1c",920:"07a79e48101ecb7f696c",929:"439e8f0c71e7d2d8cdc0"}[e]+".js"},d.miniCssF=function(e){return"styles.d545ad398b6ff99b9705.css"},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a={},r="example:",d.l=function(e,t,n,c){if(a[e])a[e].push(t);else{var o,f;if(void 0!==n)for(var i=document.getElementsByTagName("script"),s=0;s<i.length;s++){var u=i[s];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+n){o=u;break}}o||(f=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,d.nc&&o.setAttribute("nonce",d.nc),o.setAttribute("data-webpack",r+n),o.src=e),a[e]=[t];var l=function(t,n){o.onerror=o.onload=null,clearTimeout(b);var r=a[e];if(delete a[e],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(e){return e(n)})),t)return t(n)},b=setTimeout(l.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=l.bind(null,o.onerror),o.onload=l.bind(null,o.onload),f&&document.head.appendChild(o)}},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},d.p="/",c=function(e){return new Promise((function(t,n){var a=d.miniCssF(e),r=d.p+a;if(function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=(o=n[a]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var c=document.getElementsByTagName("style");for(a=0;a<c.length;a++){var o;if((r=(o=c[a]).getAttribute("data-href"))===e||r===t)return o}}(a,r))return t();!function(e,t,n,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",r.onerror=r.onload=function(c){if(r.onerror=r.onload=null,"load"===c.type)n();else{var o=c&&("load"===c.type?"missing":c.type),f=c&&c.target&&c.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+f+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=o,i.request=f,r.parentNode.removeChild(r),a(i)}},r.href=t,document.head.appendChild(r)}(e,r,t,n)}))},o={658:0},d.f.miniCss=function(e,t){o[e]?t.push(o[e]):0!==o[e]&&{532:1}[e]&&t.push(o[e]=c(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))},function(){var e={658:0,532:0};d.f.j=function(t,n){var a=d.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var r=new Promise((function(n,r){a=e[t]=[n,r]}));n.push(a[2]=r);var c=d.p+d.u(t),o=new Error;d.l(c,(function(n){if(d.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",o.name="ChunkLoadError",o.type=r,o.request=c,a[1](o)}}),"chunk-"+t,t)}},d.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,r,c=n[0],o=n[1],f=n[2],i=0;if(c.some((function(t){return 0!==e[t]}))){for(a in o)d.o(o,a)&&(d.m[a]=o[a]);if(f)var s=f(d)}for(t&&t(n);i<c.length;i++)r=c[i],d.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return d.O(s)},n=self.webpackChunkexample=self.webpackChunkexample||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-99401c56686bd6a805ae.js.map