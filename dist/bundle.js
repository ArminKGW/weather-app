(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>a});var r=t(354),o=t.n(r),i=t(314),A=t.n(i)()(o());A.push([n.id,":root {\n  font-family: 'Roboto', sans-serif;\n  --dark-bg: rgb(40, 37, 37);\n  --blue-bg: #6495ed;\n}\n\nbody {\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  background-color: var(--blue-bg);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.header {\n  padding: 2rem;\n  background-color: var(--dark-bg);\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: 25% 1fr 25%;\n  align-items: center;\n}\n\n.title-box {\n  grid-column: 2 / 3;\n  display: flex;\n  justify-self: center;\n}\n\nimg {\n  height: 70px;\n}\n\n.title {\n  color: white;\n  font-size: 4rem;\n  font-weight: 700;\n}\n\n.switch {\n  grid-column: 3 / 4;\n  width: 130px;\n  height: 36px;\n  border-radius: 24px;\n  background-color: var(--blue-bg);\n}\n\n.switch:hover {\n  border: 2px solid rgb(218, 206, 206);\n}\n\n.switch:active {\n  color: rgb(166, 163, 163);\n}\n\n.container {\n  flex: 1;\n}\n\n.box {\n  margin: 40px auto;\n  width: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4em;\n}\n\ninput,\nbutton {\n  font-family: inherit;\n  color: inherit;\n  font-size: inherit;\n  border: 0;\n  outline: none;\n}\n\ninput {\n  appearance: none;\n  padding: 0.4rem;\n  border-radius: 4px;\n  background-color: rgb(238, 233, 233);\n  font-size: 1.1rem;\n}\n\nbutton {\n  padding: 0 0.4rem;\n  color: white;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n\nform > button {\n  width: 80px;\n  height: 34px;\n  border-radius: 6px;\n  background-color: black;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\nform > button:hover {\n  border: 2px solid white;\n}\n\nform > button:active {\n  color: rgb(127, 119, 119);\n}\n\n.weather-data {\n  padding: 1.6rem 4rem;\n  border-radius: 12px;\n  background-color: var(--dark-bg);\n  color: rgb(234, 226, 226);\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px 5px;\n  text-align: center;\n}\n\n.city {\n  font-size: 2.8rem;\n  margin: 1.6rem;\n}\n\n.temp {\n  font-size: 2.4rem;\n  font-weight: 700;\n}\n\n.bottom-data {\n  margin-top: 2rem;\n  line-height: 2;\n}\n\n.bottom-data div {\n  font-size: 1.4rem;\n  font-weight: 500;\n}\n\n.footer {\n  padding: 1.4rem 0;\n  background-color: var(--dark-bg);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\na {\n  text-decoration: none;\n  color: white;\n  margin-left: 2rem;\n  font-size: 1rem;\n}\n\n.hidden {\n  visibility: hidden;\n}\n","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;EACE,iCAAiC;EACjC,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,aAAa;EACb,sBAAsB;EACtB,kCAAkC;EAClC,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;;EAEE,oBAAoB;EACpB,cAAc;EACd,kBAAkB;EAClB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,oCAAoC;EACpC,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,gCAAgC;EAChC,yBAAyB;EACzB,gDAAgD;EAChD,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gCAAgC;EAChC,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB",sourcesContent:[":root {\n  font-family: 'Roboto', sans-serif;\n  --dark-bg: rgb(40, 37, 37);\n  --blue-bg: #6495ed;\n}\n\nbody {\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  background-color: var(--blue-bg);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.header {\n  padding: 2rem;\n  background-color: var(--dark-bg);\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: 25% 1fr 25%;\n  align-items: center;\n}\n\n.title-box {\n  grid-column: 2 / 3;\n  display: flex;\n  justify-self: center;\n}\n\nimg {\n  height: 70px;\n}\n\n.title {\n  color: white;\n  font-size: 4rem;\n  font-weight: 700;\n}\n\n.switch {\n  grid-column: 3 / 4;\n  width: 130px;\n  height: 36px;\n  border-radius: 24px;\n  background-color: var(--blue-bg);\n}\n\n.switch:hover {\n  border: 2px solid rgb(218, 206, 206);\n}\n\n.switch:active {\n  color: rgb(166, 163, 163);\n}\n\n.container {\n  flex: 1;\n}\n\n.box {\n  margin: 40px auto;\n  width: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4em;\n}\n\ninput,\nbutton {\n  font-family: inherit;\n  color: inherit;\n  font-size: inherit;\n  border: 0;\n  outline: none;\n}\n\ninput {\n  appearance: none;\n  padding: 0.4rem;\n  border-radius: 4px;\n  background-color: rgb(238, 233, 233);\n  font-size: 1.1rem;\n}\n\nbutton {\n  padding: 0 0.4rem;\n  color: white;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n\nform > button {\n  width: 80px;\n  height: 34px;\n  border-radius: 6px;\n  background-color: black;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\nform > button:hover {\n  border: 2px solid white;\n}\n\nform > button:active {\n  color: rgb(127, 119, 119);\n}\n\n.weather-data {\n  padding: 1.6rem 4rem;\n  border-radius: 12px;\n  background-color: var(--dark-bg);\n  color: rgb(234, 226, 226);\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px 5px;\n  text-align: center;\n}\n\n.city {\n  font-size: 2.8rem;\n  margin: 1.6rem;\n}\n\n.temp {\n  font-size: 2.4rem;\n  font-weight: 700;\n}\n\n.bottom-data {\n  margin-top: 2rem;\n  line-height: 2;\n}\n\n.bottom-data div {\n  font-size: 1.4rem;\n  font-weight: 500;\n}\n\n.footer {\n  padding: 1.4rem 0;\n  background-color: var(--dark-bg);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\na {\n  text-decoration: none;\n  color: white;\n  margin-left: 2rem;\n  font-size: 1rem;\n}\n\n.hidden {\n  visibility: hidden;\n}\n"],sourceRoot:""}]);const a=A},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(A[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&A[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},A=[],a=0;a<n.length;a++){var c=n[a],s=r.base?c[0]+r.base:c[0],d=i[s]||0,u="".concat(s," ").concat(d);i[s]=d+1;var l=t(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)e[l].references++,e[l].updater(p);else{var C=o(p,r);r.byIndex=a,e.splice(a,0,{identifier:u,updater:C,references:1})}A.push(u)}return A}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var A=0;A<i.length;A++){var a=t(i[A]);e[a].references--}for(var c=r(n,o),s=0;s<i.length;s++){var d=t(i[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),o=t.n(r),i=t(825),A=t.n(i),a=t(659),c=t.n(a),s=t(56),d=t.n(s),u=t(540),l=t.n(u),p=t(113),C=t.n(p),m=t(365),f={};f.styleTagTransform=C(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=A(),f.insertStyleElement=l(),o()(m.A,f),m.A&&m.A.locals&&m.A.locals;const g=document.querySelector("form > button"),E=document.querySelector(".switch"),h=document.querySelector("input"),b=document.querySelector(".weather-data"),B=document.querySelector(".city"),x=document.querySelector(".temp"),v=document.querySelector(".feels-like"),y=document.querySelector(".humidity"),k=document.querySelector(".wind-speed");let w="C";function j(n){B.textContent=n,x.textContent="",v.textContent="",y.textContent="",k.textContent=""}g.addEventListener("click",(n=>{n.preventDefault(),async function(){if(!h.value)return;B.textContent="Loading...",x.textContent="",v.textContent="",y.textContent="",k.textContent="";const n=h.value[0].toUpperCase()+h.value.slice(1).toLowerCase(),e=await async function(n){const e=n.toLowerCase();try{const t=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}/today?unitGroup=metric&key=N6PNPLPPUVGW3LE7FFQMM9LJX&include=current&elements=temp,feelslike,humidity,windspeed`,{mode:"cors"});if(!t.ok)throw new Error(`No results found. status: ${t.status}`);const r=await t.json();if(console.log(r),!r||!r.currentConditions)throw new Error(`No weather data available for ${n}.`);const o=r.currentConditions,i=r.resolvedAddress;let A,a,{temp:c,feelslike:s,humidity:d,windspeed:u}=o;return"F"===w?(A=Math.round(1.8*c+32),a=Math.round(1.8*s+32)):(A=Math.round(c),a=Math.round(s)),{roundTemp:A,roundFeelsLike:a,humidity:d,windspeed:u,address:i}}catch(n){j(n.message)}}(n);if(!e)return;const t=e.address.split(",")[0].trim();B.textContent=t,"C"===w?(x.textContent=`${e.roundTemp} °C`,v.textContent=`Feels like: ${e.roundFeelsLike} °C`):"F"===w&&(x.textContent=`${e.roundTemp} °F`,v.textContent=`Feels like: ${e.roundFeelsLike} °F`),y.textContent=`Humidity: ${e.humidity} %`,k.textContent=`Wind Speed: ${e.windspeed} km/h`,b.classList.remove("hidden")}()})),E.addEventListener("click",(()=>{!function(){let n,e,{currentTemp:t,currentFeelsLike:r}=function(n,e){let t,r;return"C"===w?(t=n.textContent.replace("°C",""),r=parseInt(e.textContent.match(/(\d+)/)[0],10),{currentTemp:t,currentFeelsLike:r}):"F"===w?(t=n.textContent.replace("°F",""),r=parseInt(e.textContent.match(/(\d+)/)[0],10),{currentTemp:t,currentFeelsLike:r}):void 0}(x,v);"C"===w?(n=Math.round(1.8*Number(t)+32),e=Math.round(1.8*Number(r)+32),x.textContent=`${n} °F`,v.textContent=`Feels like: ${e} °F`,w="F"):"F"===w&&(n=Math.round((Number(t)-32)/1.8),e=Math.round((Number(r)-32)/1.8),x.textContent=`${n} °C`,v.textContent=`Feels like: ${e} °C`,w="C")}()}))})();
//# sourceMappingURL=bundle.js.map