(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/home/home"],{"2c0d":function(t,n,e){},9089:function(t,n,e){"use strict";e.r(n);var o=e("d405"),a=e("f078");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);e("ae3d");var i=e("2877"),c=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,"59fd6410",null);n["default"]=c.exports},ae3d:function(t,n,e){"use strict";var o=e("2c0d"),a=e.n(o);a.a},c659:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(e("bda0"));function a(t){return t&&t.__esModule?t:{default:t}}var u=function(){return e.e("components/uni-notice-bar/uni-notice-bar").then(e.bind(null,"7f48"))},i={components:{uniNoticeBar:u},data:function(){return{imgArray:{funImg1:e("4bfa"),funImg2:e("9e99"),funImg3:e("397f"),funImg4:e("7e8c"),head1:e("1480"),newImg:e("92e1"),coin1:e("a8e7"),coin2:e("5062"),coin3:e("1ab4"),coin4:e("d54b"),hdp:e("aae0"),hxt:e("09fc")},bannerList:[],userType:3,topAnnouncement:[],topAnnouncementStr:""}},computed:{webPath:function(){return this.$store.state.webPath}},mounted:function(){var t=this;o.default.get("banner/findBanners").then(function(n){t.bannerList=n.data.data}),o.default.get("home/item",{type:"1006"}).then(function(n){t.topAnnouncement=n.data.data;var e=t;t.topAnnouncement.forEach(function(t,n){n!=e.topAnnouncement.length&&(e.topAnnouncementStr+=t.title+" ")})})},methods:{useTypeChange:function(t){this.userType=t},comeBuy:function(){if(""==this.$store.state.userInfo.capitalType||3==this.userType)1==this.userType?o.default.get("home/setCapitalType",{phone:this.$store.state.userInfo.phone,type:1001}).then(function(n){t.showModal({title:"提示",content:"成功选择为按天使用",showCancel:!1})}):2==this.userType?o.default.get("home/setCapitalType",{phone:this.$store.state.userInfo.phone,type:1002}).then(function(n){t.showModal({title:"提示",content:"成功选择为按月使用",showCancel:!1})}):3==this.userType&&t.navigateTo({url:"/pages/main/transaction/buy/buy"});else{var n="1001"==this.$store.state.userInfo.capitalType?"按天":"按月";t.showModal({title:"提示",content:"您当前已选择使用方式为"+n+"使用，无法再次选择！",showCancel:!1})}},goBuy:function(){t.navigateTo({url:"/pages/main/myAccount/pay/pay"})},goJoin:function(){this.$store.commit("mainPageNumUpdate",4)},coinQuery:function(){t.showModal({title:"提示",content:"敬请期待",showCancel:!1})}}};n.default=i}).call(this,e("6e42")["default"])},d405:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},e595:function(t,n,e){"use strict";(function(t){e("3c6d"),e("921b");o(e("66fd"));var n=o(e("9089"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},f078:function(t,n,e){"use strict";e.r(n);var o=e("c659"),a=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=a.a}},[["e595","common/runtime","common/vendor"]]]);