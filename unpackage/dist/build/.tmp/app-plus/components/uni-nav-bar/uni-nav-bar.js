(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-nav-bar/uni-nav-bar"],{"5aa1":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("components/uni-status-bar/uni-status-bar").then(e.bind(null,"6eab"))},r=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"afaa"))},u={components:{uniStatusBar:i,uniIcon:r},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:""},shadow:{type:String,default:""}},computed:{isFixed:function(){return"true"===String(this.fixed)},insertStatusBar:function(){switch(String(this.statusBar)){case"true":return!0;case"false":return!1;default:return this.isFixed}},hasShadow:function(){var t=this.backgroundColor;switch(String(this.shadow)){case"true":return!0;case"false":return!1;default:return"transparent"!==t&&t.indexOf("rgba")<0}}},methods:{onClickLeft:function(){this.$emit("clickLeft"),this.$emit("click-left")},onClickRight:function(){this.$emit("clickRight"),this.$emit("click-right")}}};n.default=u},"66fb":function(t,n,e){"use strict";e.r(n);var i=e("5aa1"),r=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);n["default"]=r.a},9173:function(t,n,e){"use strict";e.r(n);var i=e("c841"),r=e("66fb");for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);e("b31b");var a=e("2877"),o=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,null,null);n["default"]=o.exports},ae64:function(t,n,e){},b31b:function(t,n,e){"use strict";var i=e("ae64"),r=e.n(i);r.a},c841:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return r})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-nav-bar/uni-nav-bar-create-component',
    {
        'components/uni-nav-bar/uni-nav-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("9173"))
        })
    },
    [['components/uni-nav-bar/uni-nav-bar-create-component']]
]);                
