(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/transaction/buy/buy"],{"04ce":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(o("bda0"));function n(t){return t&&t.__esModule?t:{default:t}}var i=function(){return o.e("components/cmd-nav-bar/cmd-nav-bar").then(o.bind(null,"ed35"))},a={components:{cmdNavBar:i},data:function(){return{missVal:"",missShow:!1,stockInfo:{},available:0,buyPrice:"",buyNum:"",stocks:[],stocksWant:[],buysData:[],buyInbfb:1}},watch:{buyPrice:function(t,e){this.buyNum=parseInt(6*this.available*.7/this.buyPrice/this.buyInbfb*1)/1}},methods:{treChange:function(t){this.buyPrice=this.stockInfo.curPrice},buyInChange:function(t){this.buyInbfb=t.target.value,this.buyNum=parseInt(6*this.available*.7/this.buyPrice/t.target.value*1)/1},refresh:function(){6==this.missVal.length&&this.queryStock(this.missVal)},priceDelAdd:function(t){"del"==t?this.buyPrice=(Number(this.buyPrice)-.01).toFixed(2):"add"==t&&(this.buyPrice=(Number(this.buyPrice)+.01).toFixed(2))},numDelAdd:function(t){"del"==t?this.buyNum=Number(this.buyNum)-100:"add"==t&&(this.buyNum=Number(this.buyNum)+100)},bitListen:function(t){var e=t.target.value,o=[];this.stocks.forEach(function(t,s){-1!=t.stockCode.indexOf(e)&&o.push(t)}),o=o.slice(0,5),this.stocksWant=o,this.stocksWant.length>0?this.missShow=!0:this.missShow=!1,6==e.length&&this.queryStock(e)},priceCheck:function(e){this.buyPrice=Number(this.buyPrice).toFixed(2),e.target.value<0&&t.showToast({position:"bottom",title:"买入价格不能小于0",icon:"none",duration:2500})},numCheck:function(t){},selectThis:function(t){this.missShow=!1,this.queryStock(t)},queryStock:function(e){var o=this;s.default.get("transaction/tobuy",{stockCode:e,phone:this.$store.state.userInfo.phone}).then(function(e){e.data.success?(void 0!=e.data.data.stockMap&&(o.stockInfo=e.data.data.stockMap,o.missVal=o.stockInfo.stockCode,o.buyPrice=o.stockInfo.curPrice,o.available=e.data.data.balance.quota),o.buysData=e.data.data.buys):t.showToast({position:"bottom",title:"没有查询到当前股票代码",icon:"none",duration:2500})})},immediatelyBuy:function(){if(void 0!=this.stockInfo.stockCode&&""!=this.stockInfo.stockCode)if(Number(this.buyPrice)<0||NaN==Number(this.buyPrice)||""==this.buyPrice)t.showModal({title:"提示",content:"请输入正确的买入价",showCancel:!1});else if(this.buyNum%100!=0||Number(this.buyNum)<=0||""==this.buyNum)t.showModal({title:"提示",content:"买入数量只能是100的倍数！",showCancel:!1});else if(this.buyNum>parseInt(6*this.available*.7/this.buyPrice*1)/1)t.showModal({title:"提示",content:"不能超过最大可买数！",showCancel:!1});else{var e=this;t.showModal({title:"请确认",content:"是否买入【"+this.stockInfo.stockName+"】,代码【"+this.stockInfo.stockCode+"】,买入价【"+this.buyPrice+"】,买入数量【"+this.buyNum+"】",success:function(o){o.confirm?(t.showLoading({title:"提交中~"}),s.default.get("transaction/buy",{stockCode:e.stockInfo.stockCode,holder:e.$store.state.userInfo.phone,price:e.buyPrice,amount:e.buyNum}).then(function(o){o.data.success&&(t.showModal({title:"提示",content:o.data.message,showCancel:!1}),e.queryStock(""))})):o.cancel}})}else t.showModal({title:"提示",content:"请选择您要买入的股票",showCancel:!1})},cancellation:function(e,o){if("N"==e.flag){var n=this;t.showModal({title:"请确认",content:"是否撤单【"+e.stockName+"/"+e.stockCode+"】",success:function(o){o.confirm&&s.default.get("transaction/cancel",{id:e.id,type:"buy"}).then(function(e){e.data.success&&(t.showModal({title:"提示",content:e.data.message,showCancel:!1}),n.queryStock(""))})}})}}},onLoad:function(e){var o=this;t.showLoading({mask:!0}),"zxgp"==e.type&&this.queryStock(e.stockCode),this.queryStock(""),s.default.get("stock/findStocks",{phone:this.$store.state.userInfo.phone}).then(function(t){o.stocks=t.data.data.stocks})}};e.default=a}).call(this,o("6e42")["default"])},1417:function(t,e,o){},"175a":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=(t._self._c,parseInt(6*t.available*.7/t.buyPrice*1));t.$mp.data=Object.assign({},{$root:{m0:o}})},n=[];o.d(e,"a",function(){return s}),o.d(e,"b",function(){return n})},"51a3":function(t,e,o){"use strict";o.r(e);var s=o("175a"),n=o("ecbf");for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);o("e7f4");var a=o("2877"),c=Object(a["a"])(n["default"],s["a"],s["b"],!1,null,"7204087a",null);e["default"]=c.exports},d4d4:function(t,e,o){"use strict";(function(t){o("3c6d"),o("921b");s(o("66fd"));var e=s(o("51a3"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},e7f4:function(t,e,o){"use strict";var s=o("1417"),n=o.n(s);n.a},ecbf:function(t,e,o){"use strict";o.r(e);var s=o("04ce"),n=o.n(s);for(var i in s)"default"!==i&&function(t){o.d(e,t,function(){return s[t]})}(i);e["default"]=n.a}},[["d4d4","common/runtime","common/vendor"]]]);