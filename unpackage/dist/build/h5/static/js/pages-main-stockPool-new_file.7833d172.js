(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-stockPool-new_file"],{"3b53":function(n,t,e){"use strict";e.r(t);var i=e("fdc2"),o=e("7c5e");for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);var u,r=e("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);t["default"]=c.exports},"7c5e":function(n,t,e){"use strict";e.r(t);var i=e("d53e"),o=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);t["default"]=o.a},d53e:function(n,t,e){"use strict";var i=e("4ea4");e("a15b"),e("d3b7"),e("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(e("36cc")),i(e("bc89")),i(e("4a6e"));var o={data:function(){return{src:"",danmuList:[{text:"第 1s 出现的弹幕",color:"#ff0000",time:1},{text:"第 3s 出现的弹幕",color:"#ff00ff",time:3}],danmuValue:""}},onReady:function(n){this.videoContext=uni.createVideoContext("myVideo")},methods:{sendDanmu:function(){this.videoContext.sendDanmu({text:this.danmuValue,color:this.getRandomColor()}),this.danmuValue=""},videoErrorCallback:function(n){uni.showModal({content:n.target.errMsg,showCancel:!1})},getRandomColor:function(){for(var n=[],t=0;t<3;++t){var e=Math.floor(256*Math.random()).toString(16);e=1==e.length?"0"+e:e,n.push(e)}return"#"+n.join("")}}};t.default=o},fdc2:function(n,t,e){"use strict";var i;e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return i}));var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",[e("v-uni-video",{attrs:{id:"myVideo",src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4","danmu-list":n.danmuList,"enable-danmu":!0,"danmu-btn":!0,controls:!0},on:{error:function(t){arguments[0]=t=n.$handleEvent(t),n.videoErrorCallback.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"uni-list uni-common-mt"},[e("v-uni-view",{staticClass:"uni-list-cell"})],1)],1)],1)},a=[]}}]);