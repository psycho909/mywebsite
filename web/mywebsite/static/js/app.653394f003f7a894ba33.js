webpackJsonp([0],[,,function(t,e,s){function a(t){s(20)}var i=s(0)(s(12),s(34),a,null,null);t.exports=i.exports},function(t,e,s){"use strict";var a=s(1),i=s(36),n=s(27),r=(s.n(n),s(2)),o=s.n(r),c=s(24),l=s.n(c),u=s(23),p=s.n(u),g=s(25),d=s.n(g);a.a.use(i.a),$(function(){$(".grid").masonry({itemSelector:".masonry-box"})}),e.a=new i.a({routes:[{path:"*",component:d.a},{path:"/",name:"Webdesign",component:o.a},{path:"/Design",name:"Design",component:l.a},{path:"/Contact",name:"Contact",component:p.a}]})},function(t,e,s){function a(t){s(18)}var i=s(0)(s(5),s(32),a,null,null);t.exports=i.exports},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(22),i=s.n(a),n=s(2),r=s.n(n),o=s(26),c=s.n(o);e.default={name:"app",components:{Carousel:i.a,Webdesign:r.a,Footers:c.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=[{href:"javascipt:;",img:"../static/images/carousel-a.jpg"},{href:"javascipt:;",img:"../static/images/carousel-b.jpg"}];e.default={name:"Carousel",data:function(){return{caourselData:a}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Contact",data:function(){return{msg:"Hello This is Contact Page"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Webdesign",data:function(){return{designData:["0","1"]}},mounted:function(){var t=this;fetch("../static/js/design.data.js",{method:"get"}).then(function(e){e.json().then(function(e){t.designData=e}).then(function(){var t=$(".grid").masonry({itemSelector:".masonry-box"});t.imagesLoaded().progress(function(){t.masonry("layout")})})})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Error",data:function(){return{msg:"I am Error Page"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Footers"}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=[{href:"http://psycho909.github.io/mywebsite/web/170614_cd/",img:"../static/images/webdesign/cd01.jpg",title:"女神禮包發送活動頁",type:"HTML"},{href:"http://psycho909.github.io/mywebsite/web/170608_7-11/",img:"../static/images/webdesign/7-11.jpg",title:"6月統一限時通路活動",type:"HTML"},{href:"http://psycho909.github.io/mywebsite/web/1700503_BB/",img:"../static/images/webdesign/bb01.jpg",title:"積分王者爭奪戰",type:"HTML"},{href:"http://psycho909.github.io/mywebsite/web/170516_BB/",img:"../static/images/webdesign/bb02.jpg",title:"2017新手組合隊免費送",type:"HTML"},{href:"http://psycho909.github.io/mywebsite/web/170531_cat/",img:"../static/images/webdesign/cat.jpg",title:"國盜戰簡介",type:"HTML"},{href:"http://cd.wasabii.com.tw/index.aspx",img:"../static/images/webdesign/cd.jpg",title:"狂魔Online官網",type:"HTML"},{href:"http://psycho909.github.io/mywebsite/web/170522_cd/",img:"../static/images/webdesign/cd02.jpg",title:"網咖活動頁",type:"HTML"},{href:"http://psycho909.github.io/mywebsite/web/170218_WA/",img:"../static/images/webdesign/wasabii01.jpg",title:"Wasabii點卡儲值活動",type:"HTML"},{href:"http://psycho909.github.io/mywebsite/web/170317_WA/",img:"../static/images/webdesign/wasaibii02.jpg",title:"紅利兌換頁面",type:"HTML"},{href:"http://www.boatyacht.com.tw/",img:"../static/images/webdesign/boatwebsite.jpg",title:"BOK遊艇網",type:"HTML"},{href:"http://psycho909.github.io/abcwebsite/",img:"../static/images/webdesign/abcwebsite.jpg",title:"網站設計",type:"HTML RWD"},{href:"http://psycho909.github.io/furnituredemo/",img:"../static/images/webdesign/furnituredemo.jpg",title:"家具網靜態網頁",type:"HTML"},{href:"http://psycho909.github.io/travelwebsite/",img:"../static/images/webdesign/travelwebsite.jpg",title:"==旅遊網==",type:"HTML RWD"},{href:"http://psycho909.github.io/parallaxWeb01/",img:"../static/images/webdesign/parallaxWeb01.jpg",title:"ParallaxOnePage",type:"HTML RWD"},{href:"http://psycho909.github.io/adweb01/",img:"../static/images/webdesign/adweb01.jpg",title:"森林保育",type:"HTML RWD"},{href:"http://psycho909.github.io/h5animation/",img:"../static/images/webdesign/h5animation.jpg",title:"H5單頁滑動網站",type:"HTML"},{href:"http://psycho909.github.io/petstores/",img:"../static/images/webdesign/petstores.jpg",title:"寵物精品靜態網頁",type:"HTML"},{href:"http://psycho909.github.io/adoption/",img:"../static/images/webdesign/adoption.jpg",title:"認養寵物使用",type:"HTML RWD"},{href:"http://psycho909.github.io/mywebsite2/",img:"../static/images/webdesign/mywebsite2.jpg",title:"我的作品集網站2",type:"HTML"},{href:"http://psycho909.github.io/docchksystemweb/",img:"../static/images/webdesign/docchksystemweb.jpg",title:"文件簽核系統靜態網頁",type:"HTML"}];e.default={name:"Webdesign",data:function(){return{webdesignData:a}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(1),i=s(4),n=s.n(i),r=s(3);a.a.config.productionTip=!1,new a.a({el:"#app",router:r.a,template:"<App/>",components:{App:n.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,s){function a(t){s(16)}var i=s(0)(s(6),s(30),a,null,null);t.exports=i.exports},function(t,e,s){function a(t){s(15)}var i=s(0)(s(7),s(29),a,null,null);t.exports=i.exports},function(t,e,s){function a(t){s(21)}var i=s(0)(s(8),s(35),a,null,null);t.exports=i.exports},function(t,e,s){function a(t){s(19)}var i=s(0)(s(9),s(33),a,null,null);t.exports=i.exports},function(t,e,s){function a(t){s(17)}var i=s(0)(s(10),s(31),a,null,null);t.exports=i.exports},function(t,e,s){function a(t){s(14)}var i=s(0)(s(11),s(28),a,"data-v-11b2d7c6",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contact container"},[s("div",[t._v(t._s(t.msg))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"carousel-box hidden-xs"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2"},[s("div",{staticClass:"user-carousel"},[s("div",{staticClass:"carousel slide",attrs:{id:"carousel","data-ride":"caroudel"}},[s("ol",{staticClass:"carousel-indicators"},t._l(t.caourselData,function(t,e){return s("li",{class:0==e?"active":"",attrs:{"data-target":"#carousel","data-slide-to":e}})})),t._v(" "),s("div",{staticClass:"carousel-inner"},t._l(t.caourselData,function(t,e){return s("div",{staticClass:"item",class:0==e?"active":""},[s("a",{attrs:{href:t.href,target:"_blank"}},[s("img",{attrs:{src:t.img,alt:""}})])])})),t._v(" "),s("a",{staticClass:"left carousel-control",attrs:{href:"#carousel",role:"button","data-slide":"prev"}},[t._v("◀")]),t._v(" "),s("a",{staticClass:"right carousel-control",attrs:{href:"#carousel",role:"button","data-slide":"next"}},[t._v("▶")])])])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"icon-box"},[s("span",{staticClass:"glyphicon glyphicon-earphone icon"}),s("em",[t._v("0972-523-068")])])]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"icon-box"},[s("span",{staticClass:"glyphicon glyphicon-envelope icon"}),s("em",[t._v("psychosocial909@gmail.com")])])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"user-navbar navbar navbar-default"},[s("div",{staticClass:"container"},[s("div",{staticClass:"navbar-header"},[t._m(0),t._v(" "),s("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("作品集")])],1),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar"}},[s("ul",{staticClass:"nav navbar-nav navbar-right"},[s("li",[s("router-link",{attrs:{to:"/"}},[t._v("WebDesign")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/Design"}},[t._v("Design")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/Contact"}},[t._v("Contact")])],1)])])])]),t._v(" "),s("Carousel"),t._v(" "),s("router-view"),t._v(" "),s("Footers")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar"}},[s("span",{staticClass:"icon-bar"}),t._v(" "),s("span",{staticClass:"icon-bar"}),t._v(" "),s("span",{staticClass:"icon-bar"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"error"},[t._v("\n    "+t._s(t.msg)+"\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container main"},[s("div",{staticClass:"row main-box"},t._l(t.webdesignData,function(e){return s("div",{staticClass:"col-md-3 col-sm-4 col-xs-12 my-box"},[s("div",{staticClass:"thumbnail"},[s("div",{staticClass:"thumbnail-box"},[s("img",{staticClass:"img-responsive thumbnail-img",attrs:{src:e.img,alt:""}}),t._v(" "),s("div",{staticClass:"caption caption-box"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 col-sm-6 col-xs-12"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"col-md-6 col-sm-6 col-xs-12"},[t._v(t._s(e.type))]),t._v(" "),s("div",{staticClass:"col-md-12"},[s("a",{staticClass:"thumbnail-link",attrs:{href:e.href,target:"_blank"}},[t._v("LINK")])])])])])])])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container degisn-main"},[s("div",{staticClass:"row main-box"},[s("div",{staticClass:"grid"},t._l(t.designData,function(t){return s("div",{staticClass:"col-md-3 col-sm-4 col-xs-12 my-box masonry-box"},[s("div",{staticClass:"thumbnail"},[s("a",{staticClass:"thumbnail-box",attrs:{"data-fancybox":"gallery",href:t.img}},[s("img",{staticClass:"img-responsive thumbnail-img",attrs:{src:t.img,alt:""}})])])])}))])])},staticRenderFns:[]}}],[13]);
//# sourceMappingURL=app.653394f003f7a894ba33.js.map