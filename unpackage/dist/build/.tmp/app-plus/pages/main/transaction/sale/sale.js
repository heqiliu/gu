(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/transaction/sale/sale"],{4552:function(t,e,o){"use strict";o.r(e);var s=o("d85e"),a=o("fee5");for(var n in a)"default"!==n&&function(t){o.d(e,t,function(){return a[t]})}(n);o("b9d9");var i,c=o("f0c5"),u=Object(c["a"])(a["default"],s["b"],s["c"],!1,null,"1eb91f0a",null,!1,s["a"],i);e["default"]=u.exports},"9d67":function(t,e,o){"use strict";(function(t){o("4851"),o("921b");s(o("66fd"));var e=s(o("4552"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},b9d9:function(t,e,o){"use strict";var s=o("d09b"),a=o.n(s);a.a},c074:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(o("287b"));function a(t){return t&&t.__esModule?t:{default:t}}var n=function(){return o.e("components/cmd-nav-bar/cmd-nav-bar").then(o.bind(null,"e3e0"))},i={components:{cmdNavBar:n},data:function(){return{missVal:"",missShow:!1,stockInfo:{},available:0,buyPrice:"",buyNum:"",stocks:[],stocksWant:[],buysData:[],maxSale:0,stase:"",stockOrder:[],quoteMap:{}}},methods:{treChange:function(t){this.buyPrice=this.stockInfo.instantPrice},buyInChange:function(t){this.buyNum=parseInt(100*Math.floor(this.maxSale/t.target.value/100)*1)/1},refresh:function(){6==this.missVal.length&&this.queryStock(this.missVal)},priceDelAdd:function(t){"del"==t?this.buyPrice=(Number(this.buyPrice)-.01).toFixed(2):"add"==t&&(this.buyPrice=(Number(this.buyPrice)+.01).toFixed(2))},numDelAdd:function(t){"del"==t?this.buyNum=Number(this.buyNum)-100:"add"==t&&(this.buyNum=Number(this.buyNum)+100)},bitListen:function(t){var e=t.target.value,o=[];this.stocks.forEach(function(t,s){-1!=t.stockCode.indexOf(e)&&o.push(t)}),o=o.slice(0,5),this.stocksWant=o,this.stocksWant.length>0?this.missShow=!0:this.missShow=!1,6==e.length&&this.queryStock(e)},priceCheck:function(e){this.buyPrice=Number(this.buyPrice).toFixed(2),e.target.value<0&&t.showToast({position:"bottom",title:"卖出价格不能小于0",icon:"none",duration:2500})},numCheck:function(e){e.target.value%100!=0||Number(e.target.value)<=0?t.showToast({position:"bottom",title:"数量只能是100的倍数！",icon:"none",duration:2500}):e.target.value>this.maxSale&&t.showToast({position:"bottom",title:"不能超过最大可卖数！",icon:"none",duration:2500})},selectThis:function(t){this.missShow=!1,this.queryStock(t)},queryStock:function(t){var e=this,o=!1;this.buysData.forEach(function(e){e.stockCode!=t||(o=!0)}),o&&s.default.get("AppPortfolioPage/sell",{stockCode:t}).then(function(t){void 0!=t.data.data.quote&&(e.stockInfo=t.data.data.quote,e.missVal=e.stockInfo.stockCode,e.buyPrice=e.stockInfo.instantPrice,e.available=t.data.data.userAssetsVo.netAsset),void 0!=t.data.data.stockHoldVoList&&(e.buysData=t.data.data.stockHoldVoList,e.stocks=t.data.data.stockHoldVoList)})},getHasStock:function(){var t=this;s.default.get("stock/hold/getList",{"pageInfo.size":100,"pageInfo.num":1,"pageInfo.isReturnPage":!1}).then(function(e){t.buysData=e.data.data.records,t.stocks=e.data.data.records})},immediatelyBuy:function(){if(void 0!=this.stockInfo.stockCode&&""!=this.stockInfo.stockCode)if(Number(this.buyPrice)<0||NaN==Number(this.buyPrice)||""==this.buyPrice)t.showModal({title:"提示",content:"请输入正确的卖出价",showCancel:!1});else if(this.buyNum%100!=0||Number(this.buyNum)<=0||""==this.buyNum)t.showModal({title:"提示",content:"数量只能是100的倍数！",showCancel:!1});else if(Number(this.buyNum)>Number(this.maxSale))t.showModal({title:"提示",content:"不能超过最大可卖数！",showCancel:!1});else{var e=this;t.showModal({title:"请确认",content:"是否卖出【"+this.stockInfo.stockName+"】,代码【"+this.stockInfo.stockCode+"】,卖出价【"+this.buyPrice+"】,卖出数量【"+this.buyNum+"】",success:function(o){o.confirm?(t.showLoading({title:"提交中~"}),s.default.get("stock/order/add",{stockCode:e.stockInfo.stockCode,orderNumber:e.buyNum,orderUnitPrice:e.buyPrice,orderType:"SELL"}).then(function(e){e.data.success&&(t.showModal({title:"提示",content:e.data.message,showCancel:!1}),t.redirectTo({url:"/pages/main/transaction/sale/sale"}))})):o.cancel}})}else t.showModal({title:"提示",content:"请选择您要卖出的股票",showCancel:!1})},cancellation:function(t,e){this.queryStock(t.stockCode),this.maxSale=t.sharesNumber},cancle:function(e,o){var a=this;t.showModal({title:"请确认",content:"是否取消卖出【"+e.stockName+"/"+e.stockCode+"】",success:function(o){o.confirm&&s.default.get("stock/order/cancellations",{id:e.id}).then(function(e){e.data.success?(t.showToast({title:"提示",content:e.data.message,showCancel:!1}),a.getHasStock()):(t.showModal({title:"提示",content:e.data.message,showCancel:!1}),a.getHasStock())})}})}},onLoad:function(e){var o=this;t.showLoading({mask:!0}),"zxgp"==e.type&&(this.queryStock(e.stockCode),this.maxSale=e.maxSale,s.default.get("AppPortfolioPage/sell",{stockCode:e.stockCode}).then(function(t){void 0!=t.data.data.quote&&(o.stockInfo=t.data.data.quote,o.missVal=o.stockInfo.stockCode,o.buyPrice=o.stockInfo.instantPrice,o.available=t.data.data.userAssetsVo.netAsset),void 0!=t.data.data.stockHoldVoList&&(o.buysData=t.data.data.stockHoldVoList,o.stocks=t.data.data.stockHoldVoList)})),this.getHasStock()},mounted:function(){}};e.default=i}).call(this,o("6e42")["default"])},d09b:function(t,e,o){},d85e:function(t,e,o){"use strict";var s={"cmd-nav-bar":()=>o.e("components/cmd-nav-bar/cmd-nav-bar").then(o.bind(null,"e3e0"))},a=function(){var t=this,e=t.$createElement;t._self._c},n=[];o.d(e,"b",function(){return a}),o.d(e,"c",function(){return n}),o.d(e,"a",function(){return s})},fee5:function(t,e,o){"use strict";o.r(e);var s=o("c074"),a=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);e["default"]=a.a}},[["9d67","common/runtime","common/vendor"]]]);