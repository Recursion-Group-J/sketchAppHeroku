(function(e){function t(t){for(var n,i,c=t[0],s=t[1],u=t[2],l=0,p=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var s=a[i];0!==o[s]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},o={app:0},r=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4b2b11dd"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=o[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=n);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var u=new Error;r=function(t){s.onerror=s.onload=null,clearTimeout(l);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,a[1](u)}o[e]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/static/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1038:function(e,t,a){"use strict";a("939b")},"22a6":function(e,t,a){},"4d91":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function o(e,t,a,o,r,i){var c=Object(n["w"])("TheNavigator"),s=Object(n["w"])("router-view");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["e"])("div",null,[Object(n["h"])(c)]),Object(n["h"])(s)],64)}var r=function(e){return Object(n["t"])("data-v-34a46417"),e=e(),Object(n["r"])(),e},i={class:"navbar navbar-expand-lg navbar-light bg-light"},c=r((function(){return Object(n["e"])("a",{class:"navbar-brand",href:"#"},"Etch a Sketch",-1)})),s=r((function(){return Object(n["e"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["e"])("span",{class:"navbar-toggler-icon"})],-1)})),u={class:"collapse navbar-collapse",id:"navbarNav"},l={class:"navbar-nav"},d={class:"nav-item active"},p=Object(n["g"])(" Home "),b=r((function(){return Object(n["e"])("span",{class:"sr-only"},"(current)",-1)})),f={class:"nav-item"},h=Object(n["g"])("Sketch"),v=r((function(){return Object(n["e"])("ul",{class:"navbar-nav ml-auto"},[Object(n["e"])("li",{class:"nav-item"},[Object(n["e"])("a",{href:"#",class:"nav-link"},"Login")])],-1)}));function m(e,t){var a=Object(n["w"])("router-link");return Object(n["q"])(),Object(n["d"])("nav",i,[c,s,Object(n["e"])("div",u,[Object(n["e"])("ul",l,[Object(n["e"])("li",d,[Object(n["h"])(a,{class:"nav-link",to:"/"},{default:Object(n["A"])((function(){return[p,b]})),_:1})]),Object(n["e"])("li",f,[Object(n["h"])(a,{class:"nav-link",to:"/sketch"},{default:Object(n["A"])((function(){return[h]})),_:1})])]),v])])}a("c0ad");var g=a("6b0d"),j=a.n(g);const O={},y=j()(O,[["render",m],["__scopeId","data-v-34a46417"]]);var w=y,k={components:{TheNavigator:w}};a("1038");const x=j()(k,[["render",o]]);var q=x,_=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),S={class:"home vh-100"},E=Object(n["f"])('<div class="d-flex flex-wrap" data-v-73b043e4><div id="left-container" class="vh-100 col-6 d-flex flex-wrap align-items-center" data-v-73b043e4><div class="inner-wrapper" data-v-73b043e4><h1 class="mb-5" data-v-73b043e4>&quot;Etch a sketch as you used to do <br data-v-73b043e4>when you were a kid!!&quot;</h1><p data-v-73b043e4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt asperiores modi quis odit iure beatae totam autem earum quas inventore numquam quo, iusto placeat praesentium suscipit quidem odio mollitia officia!</p><p data-v-73b043e4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt asperiores modi quis odit iure beatae totam autem earum quas inventore numquam quo, iusto placeat praesentium suscipit quidem odio mollitia officia!</p><p data-v-73b043e4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt asperiores modi quis odit iure beatae totam autem earum quas inventore numquam quo, iusto placeat praesentium suscipit quidem odio mollitia officia!</p></div></div><div id="right-container" class="vh-100 col-6" data-v-73b043e4><div class="h-100 d-flex align-items-center" data-v-73b043e4><img class="w-100 h-auto" src="https://cdn.pixabay.com/photo/2020/01/11/21/42/hand-draw-vector-arrows-4758776_960_720.png" alt="" data-v-73b043e4></div></div></div>',1),L=[E];function P(e,t,a,o,r,i){return Object(n["q"])(),Object(n["d"])("div",S,L)}var T={name:"Home"};a("7f3e");const H=j()(T,[["render",P],["__scopeId","data-v-73b043e4"]]);var C=H,N=function(e){return Object(n["t"])("data-v-9acc37a2"),e=e(),Object(n["r"])(),e},W={class:"wh-100"},A=N((function(){return Object(n["e"])("div",{id:"tokoron-container"},[Object(n["e"])("img",{id:"tokoron-image",src:"http://www.city.tokorozawa.saitama.jp/other/tokoron_gazou/jpeg/asobu.jpg",alt:""})],-1)})),I={id:"sketchBoard",class:"h-75 w-75 d-flex flex-wrap justify-content-center"},M=N((function(){return Object(n["e"])("h1",{class:"col-12 my-3"},"Etch a sketch",-1)})),D={id:"innerFrame",class:"h-75 w-75"},J=N((function(){return Object(n["e"])("div",{id:"leftControl",class:"h-10 w-10"},null,-1)})),z=N((function(){return Object(n["e"])("div",{id:"rightControl",class:"h-10 w-10"},null,-1)}));function B(e,t,a,o,r,i){var c=Object(n["w"])("Sketch");return Object(n["q"])(),Object(n["d"])("div",W,[A,Object(n["e"])("div",I,[M,Object(n["e"])("div",D,[Object(n["h"])(c)]),J,z])])}var R={class:"h-100 w-100"},F=Object(n["e"])("p",null,"s:← d:→ k:↑ l:↓ ",-1),G=Object(n["e"])("div",{id:"canvas-container",class:"h-100 w-100"},null,-1),K=[F,G];function Q(e,t,a,o,r,i){return Object(n["q"])(),Object(n["d"])("div",R,K)}var U=a("362d"),V={name:"Sketch",props:{msg:String},data:function(){return{stage:null,layer:null,box:null,xpos:200,ypos:200}},mounted:function(){var e=document.getElementById("canvas-container");console.log(e.parentElement.offsetWidth),console.log(e.offsetHeight),this.stage=new U["a"].Stage({container:"canvas-container",width:e.offsetWidth,height:e.offsetHeight}),this.layer=new U["a"].Layer,this.box=new U["a"].Rect({width:e.offsetWidth,height:e.offsetHeight,fill:"#ddd",stroke:"#000",strokeWidth:1,opacity:1,cornerRadius:[3,3,3,3]}),this.layer.add(this.box),this.stage.add(this.layer),this.layer.draw(),window.addEventListener("keydown",this.sketching)},methods:{sketching:function(e){var t=0,a=0;if("k"===e.key?(t=0,a=-1):"l"===e.key?(t=0,a=1):"s"===e.key?(t=-1,a=0):"d"===e.key&&(t=1,a=0),this.xpos+t>=0&&this.xpos+t<=400&&this.ypos+a>=0&&this.ypos+a<=400){var n=new U["a"].Line({points:[this.xpos,this.ypos,this.xpos+t,this.ypos+a],stroke:"#696969",strokeWidth:3,lineCap:"round",lineJoin:"round"});this.xpos=this.xpos+t,this.ypos=this.ypos+a,this.layer.add(n),this.stage.add(this.layer),this.layer.draw()}}}};const X=j()(V,[["render",Q]]);var Y=X,Z={name:"Sketchpage",components:{Sketch:Y}};a("8af0");const $=j()(Z,[["render",B],["__scopeId","data-v-9acc37a2"]]);var ee=$,te=[{path:"/",name:"Home",component:C},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/sketch",name:"Sketchpage",component:ee}],ae=Object(_["a"])({history:Object(_["b"])("/static/"),routes:te}),ne=ae,oe=a("5502"),re=Object(oe["a"])({state:{},mutations:{},actions:{},modules:{}});a("f9e3"),a("2dd8");Object(n["c"])(q).use(re).use(ne).mount("#app")},"7f3e":function(e,t,a){"use strict";a("df0c")},"8af0":function(e,t,a){"use strict";a("22a6")},"939b":function(e,t,a){},c0ad:function(e,t,a){"use strict";a("4d91")},df0c:function(e,t,a){}});
//# sourceMappingURL=app.096f62f3.js.map