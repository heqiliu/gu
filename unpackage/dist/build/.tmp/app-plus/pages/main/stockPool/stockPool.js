(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/stockPool/stockPool"],{4131:function(t,a,n){"use strict";var o=function(){var t=this,a=t.$createElement;t._self._c},e=[];n.d(a,"a",function(){return o}),n.d(a,"b",function(){return e})},"67c0":function(t,a,n){"use strict";(function(t){n("3c6d"),n("921b");o(n("66fd"));var a=o(n("ba48"));function o(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,n("6e42")["createPage"])},"7d53":function(t,a,n){"use strict";n.r(a);var o=n("82fa"),e=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(a,t,function(){return o[t]})}(c);a["default"]=e.a},"82fa":function(t,a,n){"use strict";(function(t,o){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=c(n("bda0"));function c(t){return t&&t.__esModule?t:{default:t}}var u=function(){return n.e("components/cmd-nav-bar/cmd-nav-bar").then(n.bind(null,"ed35"))},i={components:{cmdNavBar:u},data:function(){return{imgArray:{add:n("7750")},isRecharged:"N"}},onLoad:function(){},created:function(){var a=this;e.default.get("transaction/totransaction",{phone:this.$store.state.userInfo.phone}).then(function(n){console.log(t(n.data.data.balance.quota," at pages\\main\\stockPool\\stockPool.vue:98")),Number(n.data.data.balance.quota)>=2e3&&(a.isRecharged="Y")})},computed:{storeData:function(){return this.$store.state.mainPoolData}},methods:{buyIn:function(t){o.navigateTo({url:"/pages/main/transaction/buy/buy?type=zxgp&stockCode="+t})},addMyStock:function(t){e.default.get("stock/addStock",{stockCode:t.stockCode,stockName:t.stockName,holder:this.$store.state.userInfo.phone}).then(function(t){o.showModal({title:"提示",content:"加入自选股票成功",showCancel:!1})})},goBuy:function(){o.navigateTo({url:"/pages/main/myAccount/pay/pay"})},initData:function(){var t=this;o.showLoading({mask:!0}),e.default.get("transaction/toGoldStock").then(function(a){t.$store.commit("mainPoolDataUpdate",a.data.data)})}},mounted:function(){this.initData(),o.showModal({title:"提示",showCancel:!1,mask:!0,content:"温馨提示：该股票池由AI智能自动选取展示，仅供欣赏不做任何投资推荐，所有交易风险自负，与本平台无关！"})}};a.default=i}).call(this,n("0de9")["default"],n("6e42")["default"])},a795:function(t,a,n){"use strict";var o=n("dfae"),e=n.n(o);e.a},ba48:function(t,a,n){"use strict";n.r(a);var o=n("4131"),e=n("7d53");for(var c in e)"default"!==c&&function(t){n.d(a,t,function(){return e[t]})}(c);n("a795");var u=n("2877"),i=Object(u["a"])(e["default"],o["a"],o["b"],!1,null,"9cb6af2e",null);a["default"]=i.exports},dfae:function(t,a,n){}},[["67c0","common/runtime","common/vendor"]]]);