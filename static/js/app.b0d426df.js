(function(e){function t(t){for(var o,c,s=t[0],i=t[1],u=t[2],d=0,b=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);l&&l(t);while(b.length)b.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},r=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/static/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0735":function(e,t,n){"use strict";n("f1f0")},1038:function(e,t,n){"use strict";n("939b")},"142c":function(e,t,n){"use strict";n("19eb")},1514:function(e,t,n){},"19eb":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function a(e,t,n,a,r,c){var s=Object(o["w"])("TheNavigator"),i=Object(o["w"])("router-view");return Object(o["q"])(),Object(o["d"])(o["a"],null,[Object(o["e"])("div",null,[Object(o["h"])(s)]),Object(o["h"])(i)],64)}var r=function(e){return Object(o["t"])("data-v-268cb2b2"),e=e(),Object(o["r"])(),e},c={class:"navbar navbar-expand-lg navbar-light bg-light"},s=r((function(){return Object(o["e"])("a",{class:"navbar-brand",href:"#"},"Etch a Sketch",-1)})),i=r((function(){return Object(o["e"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(o["e"])("span",{class:"navbar-toggler-icon"})],-1)})),u={class:"collapse navbar-collapse",id:"navbarNav"},l={class:"navbar-nav"},d={class:"nav-item active"},b=Object(o["g"])(" Home "),p=r((function(){return Object(o["e"])("span",{class:"sr-only"},"(current)",-1)})),f={class:"nav-item"},m=Object(o["g"])("Sketch"),h={key:0,class:"navbar-nav ml-auto"},g={class:"nav-item"},v=Object(o["g"])("Login"),j={key:1,class:"navbar-nav ml-auto"},O={class:"nav-item"},w={href:"#"},y={class:"nav-item"},k=Object(o["g"])("Logout");function x(e,t,n,a,r,x){var S=Object(o["w"])("router-link");return Object(o["q"])(),Object(o["d"])("nav",c,[s,i,Object(o["e"])("div",u,[Object(o["e"])("ul",l,[Object(o["e"])("li",d,[Object(o["h"])(S,{class:"nav-link",to:"/"},{default:Object(o["C"])((function(){return[b,p]})),_:1})]),Object(o["e"])("li",f,[Object(o["h"])(S,{class:"nav-link",to:"/sketch"},{default:Object(o["C"])((function(){return[m]})),_:1})])]),x.isLoggedin?(Object(o["q"])(),Object(o["d"])("ul",h,[Object(o["e"])("li",g,[Object(o["h"])(S,{to:"/login",class:"nav-link"},{default:Object(o["C"])((function(){return[v]})),_:1})])])):(Object(o["q"])(),Object(o["d"])("ul",j,[Object(o["e"])("li",O,[Object(o["e"])("a",w," Welcome!! "+Object(o["y"])(x.username),1)]),Object(o["e"])("li",y,[Object(o["h"])(S,{onClick:x.logout,to:"/",class:"nav-link"},{default:Object(o["C"])((function(){return[k]})),_:1},8,["onClick"])])]))])])}var S={name:"NavigationBar",data:function(){return{}},computed:{isLoggedin:function(){return!this.$store.state.auth.isLoggedIn},username:function(){return console.log(this.$store.state.auth.username),this.$store.state.auth.username}},methods:{logout:function(){this.$store.dispatch("auth/logout")}}},q=(n("0735"),n("6b0d")),L=n.n(q);const _=L()(S,[["render",x],["__scopeId","data-v-268cb2b2"]]);var I=_,E={components:{TheNavigator:I}};n("1038");const N=L()(E,[["render",a]]);var C=N,U=(n("d3b7"),n("ac1f"),n("5319"),n("6c02")),T={class:"home vh-100"},P=Object(o["f"])('<div class="d-flex flex-wrap" data-v-73b043e4><div id="left-container" class="vh-100 col-6 d-flex flex-wrap align-items-center" data-v-73b043e4><div class="inner-wrapper" data-v-73b043e4><h1 class="mb-5" data-v-73b043e4>&quot;Etch a sketch as you used to do <br data-v-73b043e4>when you were a kid!!&quot;</h1><p data-v-73b043e4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt asperiores modi quis odit iure beatae totam autem earum quas inventore numquam quo, iusto placeat praesentium suscipit quidem odio mollitia officia!</p><p data-v-73b043e4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt asperiores modi quis odit iure beatae totam autem earum quas inventore numquam quo, iusto placeat praesentium suscipit quidem odio mollitia officia!</p><p data-v-73b043e4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt asperiores modi quis odit iure beatae totam autem earum quas inventore numquam quo, iusto placeat praesentium suscipit quidem odio mollitia officia!</p></div></div><div id="right-container" class="vh-100 col-6" data-v-73b043e4><div class="h-100 d-flex align-items-center" data-v-73b043e4><img class="w-100 h-auto" src="https://cdn.pixabay.com/photo/2020/01/11/21/42/hand-draw-vector-arrows-4758776_960_720.png" alt="" data-v-73b043e4></div></div></div>',1),W=[P];function R(e,t,n,a,r,c){return Object(o["q"])(),Object(o["d"])("div",T,W)}var $={name:"Home"};n("7f3e");const J=L()($,[["render",R],["__scopeId","data-v-73b043e4"]]);var H=J,D=function(e){return Object(o["t"])("data-v-351fd67c"),e=e(),Object(o["r"])(),e},A={id:"all-container",class:"vh-100"},M={id:"upper-container",class:"col-12 d-flex py-2"},V={id:"buuton-container",class:"col-2 d-flex"},z={class:"mx-3"},B=D((function(){return Object(o["e"])("div",{class:"mx-3"},[Object(o["e"])("button",{class:"btn btn-lg"},"Load")],-1)})),F=D((function(){return Object(o["e"])("div",{class:"offset-md-1"},[Object(o["e"])("h2",{class:"mb-0"},[Object(o["g"])("How to etch a sketch "),Object(o["e"])("span",null,"s:← d:→ k:↑ l:↓")])],-1)})),G=D((function(){return Object(o["e"])("div",{id:"tokoron-container"},[Object(o["e"])("img",{id:"tokoron-image",src:"http://www.city.tokorozawa.saitama.jp/other/tokoron_gazou/jpeg/asobu.jpg",alt:""})],-1)})),K={id:"sketch-board",class:"h-75 w-75 d-flex flex-wrap justify-content-center"},X=D((function(){return Object(o["e"])("h1",{class:"col-12 my-3"},"Etch a sketch",-1)})),Q={id:"inner-frame",class:"h-75 w-75"},Y=D((function(){return Object(o["e"])("div",{id:"left-control",class:"h-10 w-10"},null,-1)})),Z=D((function(){return Object(o["e"])("div",{id:"right-control",class:"h-10 w-10"},null,-1)}));function ee(e,t,n,a,r,c){var s=Object(o["w"])("Sketch");return Object(o["q"])(),Object(o["d"])("div",A,[Object(o["e"])("div",M,[Object(o["e"])("div",V,[Object(o["e"])("div",z,[Object(o["e"])("button",{onClick:t[0]||(t[0]=Object(o["E"])((function(){return c.saveWork&&c.saveWork.apply(c,arguments)}),["prevent"])),class:"btn btn-lg"},"Save")]),B]),F,G]),Object(o["e"])("div",K,[X,Object(o["e"])("div",Q,[Object(o["h"])(s)]),Y,Z])])}n("e9c4");var te={class:"h-100 w-100"},ne=Object(o["e"])("div",{id:"canvas-container",class:"h-100 w-100"},null,-1),oe=[ne];function ae(e,t,n,a,r,c){return Object(o["q"])(),Object(o["d"])("div",te,oe)}n("99af"),n("bf19");var re=n("362d"),ce={name:"Sketch",props:{msg:String},data:function(){return{stage:null,layer:null,box:null,xpos:200,ypos:200,line:null}},mounted:function(){var e=document.getElementById("canvas-container");console.log(e.parentElement.offsetWidth),console.log(e.offsetHeight),this.stage=new re["a"].Stage({container:"canvas-container",width:e.offsetWidth,height:e.offsetHeight}),this.layer=new re["a"].Layer,this.box=new re["a"].Rect({width:e.offsetWidth,height:e.offsetHeight,fill:"#ddd",stroke:"#000",strokeWidth:3,opacity:1,cornerRadius:[3,3,3,3]}),this.layer.add(this.box),this.stage.add(this.layer),this.layer.draw();var t=new re["a"].Line({points:[],stroke:"#696969",strokeWidth:6,lineCap:"round",lineJoin:"round"});this.line=t,window.addEventListener("keydown",this.sketching)},methods:{sketching:function(e){var t=0,n=0,o=document.getElementById("canvas-container");if("k"===e.key?(t=0,n=-5):"l"===e.key?(t=0,n=5):"s"===e.key?(t=-5,n=0):"d"===e.key&&(t=5,n=0),this.xpos+t>=0&&this.xpos+t<=o.offsetWidth&&this.ypos+n>=0&&this.ypos+n<=o.offsetHeight){this.xpos=this.xpos+t,this.ypos=this.ypos+n,this.line.points(this.line.points().concat([this.xpos,this.ypos])),this.layer.add(this.line),this.stage.add(this.layer),this.layer.draw();var a=this.stage.toJSON();this.$store.commit("updateWorkCoordinate",a)}}}};const se=L()(ce,[["render",ae]]);var ie=se;n("1276"),n("498a");function ue(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),o=0;o<n.length;o++){var a=n[o].trim();if(a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}return t}var le=ue("csrftoken"),de={name:"Sketchpage",components:{Sketch:ie},methods:{saveWork:function(){var e=JSON.parse(this.$store.state.work),t={name:"test",work:e};console.log(t),console.log("------------"),console.log(JSON.stringify(t)),console.log(le);var n={method:"POST",body:JSON.stringify(t),headers:{"content-type":"application/json","X-CSRFTOKEN":le}};fetch("http://127.0.0.1:8000/api/works/",n).then((function(e){console.log(e.data)}))}}};n("7780");const be=L()(de,[["render",ee],["__scopeId","data-v-351fd67c"]]);var pe=be,fe=function(e){return Object(o["t"])("data-v-b9d03a88"),e=e(),Object(o["r"])(),e},me={id:"outer-container",class:"vh-100 d-flex justify-content-center"},he=fe((function(){return Object(o["e"])("div",{id:"title-container",class:"mt-5"},[Object(o["e"])("h1",null,"Etch a Sketch")],-1)})),ge={id:"login-modal",class:"col-11 col-md-6 d-flex flex-column justify-content-center align-items-center"},ve={id:"modal-inner",class:"col-12 col-md-10 px-0"},je=fe((function(){return Object(o["e"])("div",{id:"login-container",class:"my-3"},[Object(o["e"])("h2",{class:"text-center"},"Login")],-1)})),Oe={class:"col-12"},we=fe((function(){return Object(o["e"])("td",{class:"text-right",nowrap:"nowrap"},[Object(o["e"])("label",{for:"user-name"},"User Name :")],-1)})),ye=fe((function(){return Object(o["e"])("td",{class:"text-right",nowrap:"nowrap"},[Object(o["e"])("label",{for:"password"},"Password :")],-1)})),ke=fe((function(){return Object(o["e"])("div",{id:"submit-container",class:"col-12 my-3"},[Object(o["e"])("div",{class:"d-flex justify-content-center"},[Object(o["e"])("button",{class:"col-6 btn btn-lg btn-secondary",type:"submit"},"Login")])],-1)})),xe={id:"register-route-container"},Se=Object(o["g"])("If you have not registered yet, please "),qe={class:"text-primary"},Le=Object(o["g"])("Sign up here");function _e(e,t,n,a,r,c){var s=Object(o["w"])("router-link");return Object(o["q"])(),Object(o["d"])("div",me,[he,Object(o["e"])("div",ge,[Object(o["e"])("div",ve,[je,Object(o["e"])("form",{onSubmit:t[2]||(t[2]=Object(o["E"])((function(){return c.submitLogin&&c.submitLogin.apply(c,arguments)}),["prevent"])),class:"col-12 my-3 px-0"},[Object(o["e"])("table",Oe,[Object(o["e"])("tr",null,[we,Object(o["e"])("td",null,[Object(o["D"])(Object(o["e"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.form.username=e}),class:"col-12",type:"text",id:"user-name",name:"user-name",required:""},null,512),[[o["A"],r.form.username]])])]),Object(o["e"])("tr",null,[ye,Object(o["e"])("td",null,[Object(o["D"])(Object(o["e"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.form.password=e}),class:"col-12",type:"password",id:"password",name:"password",required:""},null,512),[[o["A"],r.form.password]])])])]),ke,Object(o["e"])("div",xe,[Object(o["e"])("p",null,[Se,Object(o["e"])("span",qe,[Object(o["h"])(s,{to:"/signup"},{default:Object(o["C"])((function(){return[Le]})),_:1})])])])],32)])])])}var Ie={name:"Login",data:function(){return{form:{username:"",password:""}}},methods:{submitLogin:function(){var e=this;this.$store.dispatch("auth/login",{username:this.form.username,password:this.form.password}).then((function(){console.log("Login succedes");var t=e.$route.query.next||"/";e.$router.replace(t)}))}}};n("142c");const Ee=L()(Ie,[["render",_e],["__scopeId","data-v-b9d03a88"]]);var Ne=Ee,Ce=function(e){return Object(o["t"])("data-v-94c5832a"),e=e(),Object(o["r"])(),e},Ue={id:"outer-container",class:"vh-100 d-flex justify-content-center"},Te=Ce((function(){return Object(o["e"])("div",{id:"title-container",class:"mt-5"},[Object(o["e"])("h1",null,"Etch a Sketch")],-1)})),Pe={id:"login-modal",class:"col-11 col-md-6 d-flex flex-column justify-content-center align-items-center"},We={id:"modal-inner",class:"col-12 col-md-10 px-0"},Re=Ce((function(){return Object(o["e"])("div",{id:"login-container",class:"my-3"},[Object(o["e"])("h2",{class:"text-center"},"Sign Up")],-1)})),$e={class:"col-12"},Je=Ce((function(){return Object(o["e"])("td",{class:"text-right",nowrap:"nowrap"},[Object(o["e"])("label",{for:"user-name"},"User Name :")],-1)})),He=Ce((function(){return Object(o["e"])("td",{class:"text-right",nowrap:"nowrap"},[Object(o["e"])("label",{for:"password"},"Password :")],-1)})),De=Ce((function(){return Object(o["e"])("div",{id:"submit-container",class:"col-12 my-3"},[Object(o["e"])("div",{class:"d-flex justify-content-center"},[Object(o["e"])("button",{class:"col-6 btn btn-lg btn-secondary",type:"submit"},"Sign Up")])],-1)})),Ae={id:"register-route-container"},Me=Object(o["g"])("If you already have an account "),Ve={class:"text-primary"},ze=Object(o["g"])("Login here");function Be(e,t,n,a,r,c){var s=Object(o["w"])("router-link");return Object(o["q"])(),Object(o["d"])("div",Ue,[Te,Object(o["e"])("div",Pe,[Object(o["e"])("div",We,[Re,Object(o["e"])("form",{onSubmit:t[2]||(t[2]=Object(o["E"])((function(){return c.submitSignUp&&c.submitSignUp.apply(c,arguments)}),["prevent"])),class:"col-12 my-3 px-0"},[Object(o["e"])("table",$e,[Object(o["e"])("tr",null,[Je,Object(o["e"])("td",null,[Object(o["D"])(Object(o["e"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.form.username=e}),class:"col-12",type:"text",id:"user-name",name:"user-name"},null,512),[[o["A"],r.form.username]])])]),Object(o["e"])("tr",null,[He,Object(o["e"])("td",null,[Object(o["D"])(Object(o["e"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.form.password=e}),class:"col-12",type:"password",id:"password",name:"password"},null,512),[[o["A"],r.form.password]])])])]),De,Object(o["e"])("div",Ae,[Object(o["e"])("p",null,[Me,Object(o["e"])("span",Ve,[Object(o["h"])(s,{to:"/login"},{default:Object(o["C"])((function(){return[ze]})),_:1})])])])],32)])])])}var Fe={name:"SignUp",data:function(){return{form:{username:"",password:""}}},methods:{submitSignUp:function(){var e=this;this.$store.dispatch("auth/register",{username:this.form.username,password:this.form.password}).then((function(t){console.log(t),console.log("Register succeed"),e.$store.dispatch("auth/login",{username:e.form.username,password:e.form.password})}))}}};n("ce81");const Ge=L()(Fe,[["render",Be],["__scopeId","data-v-94c5832a"]]);var Ke=Ge,Xe=n("1da1"),Qe=(n("96cf"),n("5502"));function Ye(e,t,n){var o=localStorage.getItem("access");console.log("json前データ",n);var a={method:t||"GET",body:void 0!==n?JSON.stringify(n):null,headers:{"content-type":"application/json","X-CSRFTOKEN":le,Authorization:o?"JWT "+o:null}};return fetch(e,a).then((function(e){return console.log(e),e.json()}))}var Ze={namespaced:!0,state:{username:"",isLoggedIn:!1},mutations:{set:function(e,t){e.username=t.user.username,e.isLoggedIn=!0},clear:function(e){e.username="",e.isLoggedIn=!1}},actions:{login:function(e,t){return Object(Xe["a"])(regeneratorRuntime.mark((function n(){var o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o={username:t.username,password:t.password},console.log(JSON.stringify(o)),n.next=4,Ye("http://127.0.0.1:8000/api/auth/jwt/create/","POST",o);case 4:return a=n.sent,console.log(a),localStorage.setItem("access",a.access),n.abrupt("return",e.dispatch("renew"));case 8:case"end":return n.stop()}}),n)})))()},logout:function(e){localStorage.removeItem("access"),e.commit("clear")},renew:function(e){return Object(Xe["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ye("http://127.0.0.1:8000/api/auth/users/me/","GET");case 2:n=t.sent,console.log(n),o=n,console.log(o),console.log(o.username),e.commit("set",{user:o});case 8:case"end":return t.stop()}}),t)})))()},register:function(e,t){return Object(Xe["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("payload ",t),n={username:t.username,password:t.password},e.next=4,Ye("http://127.0.0.1:8000/api/user/register/","POST",n);case 4:o=e.sent,console.log(o);case 6:case"end":return e.stop()}}),e)})))()}}},et={state:{work:{}},mutations:{updateWorkCoordinate:function(e,t){e.work=t}}},tt=Object(Qe["a"])({modules:{auth:Ze,work:et}}),nt=[{path:"/",name:"Home",component:H},{path:"/sketch",name:"Sketchpage",component:pe},{path:"/login",name:"Login",component:Ne},{path:"/signup",name:"SignUp",component:Ke}],ot=Object(U["a"])({history:Object(U["b"])("/"),routes:nt});function at(e){console.log("Forc to login page"),ot.replace({path:"/login",query:{next:e.fullPath}})}ot.beforeEach((function(e,t,n){var o=tt.state.auth.isLoggedIn,a=localStorage.getItem("access");console.log("to.path",e.path),console.log("isLoggedIn=",o),e.matched.some((function(e){return e.meta.requireAuth}))?o?(console.log("already logged in "),n()):(console.log("User is not logged in"),null!=a?(console.log("Try to renew user info"),tt.dispatch("auth/renew").then((function(){console.log("Succeded to renew. So free to next"),n()})).catch((function(){at(e)}))):at(e)):(console.log("go to public page"),n())}));var rt=ot;n("f9e3"),n("2dd8");Object(o["c"])(C).use(tt).use(rt).mount("#app")},"6d92":function(e,t,n){},7780:function(e,t,n){"use strict";n("1514")},"7f3e":function(e,t,n){"use strict";n("df0c")},"939b":function(e,t,n){},ce81:function(e,t,n){"use strict";n("6d92")},df0c:function(e,t,n){},f1f0:function(e,t,n){}});
//# sourceMappingURL=app.b0d426df.js.map