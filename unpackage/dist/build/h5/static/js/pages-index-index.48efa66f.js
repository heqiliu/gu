(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"11e7":function(t,a,n){"use strict";var e=n("7676"),i=n.n(e);i.a},"266e":function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.contentMain[data-v-edc2f3bc]{height:100%;background:#fbfbfb}.container[data-v-edc2f3bc]{height:calc(100% - %?100?%);width:100%;text-align:center}.bottomNav[data-v-edc2f3bc]{position:fixed;bottom:0;width:100%;height:%?99?%;background:#fff;border-top:%?1?% solid #fff;box-shadow:%?0?% %?0?% %?7?% #c3c3c3;z-index:999}.bottomNav ul[data-v-edc2f3bc]{margin:0;padding:0;width:100%;height:100%}.bottomNav ul li[data-v-edc2f3bc]{float:left;list-style:none;width:20%;height:100%;position:relative}.bottomNav ul li uni-image[data-v-edc2f3bc]{width:%?48?%;height:%?48?%;display:block;margin:0 auto;margin-top:%?10?%}.bottomNav ul li .tu[data-v-edc2f3bc]{width:%?90?%;height:%?90?%;background:#fff;position:absolute;left:0;right:0;top:%?-26?%;margin:0 auto;border-radius:50%}.bottomNav ul li .tu uni-image[data-v-edc2f3bc]{width:%?80?%;height:%?80?%;display:block;margin-top:%?5?%}.bottomNav ul li .is[data-v-edc2f3bc]{display:none}.bottomNav ul li .nois[data-v-edc2f3bc]{display:block}.bottomNav ul li span[data-v-edc2f3bc]{display:block;width:100%;text-align:center;font-size:%?24?%;color:#b9b9b9;margin-top:%?5?%}.bottomNav ul .isTask .is[data-v-edc2f3bc]{display:block}.bottomNav ul .isTask .nois[data-v-edc2f3bc]{display:none}.bottomNav ul .isTask span[data-v-edc2f3bc]{color:#ff6d28}.bottomTu[data-v-edc2f3bc]{position:fixed;width:%?90?%;height:%?90?%;background:#fff;left:0;right:0;margin:0 auto;bottom:%?40?%;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-shadow:%?0?% %?0?% %?7?% #a0a0a0}',""]),t.exports=a},"602b":function(t,a,n){"use strict";var e=n("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e(n("f708")),o=(e(n("4a6e")),{components:{home:i.default},data:function(){return{pageNum:4,transDataSet:"",showBanalTip:0}},computed:{mainPageNum:function(){return this.$store.state.mainPageNum}},onLoad:function(){this.pageNum=this.$store.state.mainPageNum},created:function(){if(""!=this.$store.state.userInfo.token)return uni.reLaunch({url:"/pages/main/main"}),void console.log("判断是否未已经登陆过的用户");console.log("判断是否未登陆过的用户")}});a.default=o},7676:function(t,a,n){var e=n("266e");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("4f06").default;i("6658ca97",e,!0,{sourceMap:!1,shadowMode:!1})},"7ddf":function(t,a,n){"use strict";n.r(a);var e=n("602b"),i=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(a,t,(function(){return e[t]}))}(o);a["default"]=i.a},"8af3":function(t,a,n){"use strict";n.r(a);var e=n("ba16"),i=n("7ddf");for(var o in i)"default"!==o&&function(t){n.d(a,t,(function(){return i[t]}))}(o);n("11e7");var r,c=n("f0c5"),s=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,"edc2f3bc",null,!1,e["a"],r);a["default"]=s.exports},ba16:function(t,a,n){"use strict";var e;n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return o})),n.d(a,"a",(function(){return e}));var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"contentMain"},[n("v-uni-scroll-view",{staticClass:"container",attrs:{"scroll-y":!0,"scroll-top":"1"}},[1==t.pageNum?n("home"):t._e()],1),n("v-uni-view",{staticClass:"bottomNav"}),n("v-uni-view",{staticClass:"bottomTu"})],1)},o=[]}}]);