(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-transaction-buy-buy"],{"0faf":function(t,i,e){var s=e("cc8c");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=e("4f06").default;n("3b4d1989",s,!0,{sourceMap:!1,shadowMode:!1})},"1ef3":function(t,i,e){"use strict";var s,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"buyMsg"},[t._v("昨收"),e("v-uni-text",[t._v(t._s(void 0==t.stockInfo.lastClosePrice?"0.00":t.stockInfo.lastClosePrice))]),t._v("今开"),e("v-uni-text",[t._v(t._s(void 0==t.stockInfo.openPrice?"0.00":t.stockInfo.openPrice))]),t._v("最高"),e("v-uni-text",[t._v(t._s(void 0==t.stockInfo.highest?"0.00":t.stockInfo.highest))]),t._v("最低"),e("v-uni-text",[t._v(t._s(void 0==t.stockInfo.lowest?"0.00":t.stockInfo.lowest))]),t._v("涨停"),e("v-uni-text",{staticClass:"red"},[t._v(t._s(void 0==t.stockInfo.dailyLimit?"0.00":t.stockInfo.dailyLimit))]),t._v("跌停"),e("v-uni-text",{staticClass:"green"},[t._v(t._s(void 0==t.stockInfo.downLimit?"0.00":t.stockInfo.downLimit))])],1),e("v-uni-view",{staticClass:"buyInfo"},[e("v-uni-view",{staticClass:"infoLeft"},[e("v-uni-input",{staticClass:"bit",attrs:{type:"number",maxlength:"6",placeholder:"股票代码"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.bitListen.apply(void 0,arguments)}},model:{value:t.missVal,callback:function(i){t.missVal=i},expression:"missVal"}}),e("v-uni-view",{staticClass:"thinkBox"},t._l(t.stocksWant,function(i,s){return t.missShow?e("v-uni-view",{key:s,staticClass:"miss",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectThis(i.stockCode)}}},[e("v-uni-text",[t._v(t._s(i.stockCode))]),e("v-uni-text",[t._v(t._s(i.stockName))])],1):t._e()}),1),e("v-uni-view",{staticClass:"buyTerm"},[e("v-uni-view",{staticClass:"treLeft",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.treChange.apply(void 0,arguments)}}},[e("v-uni-radio-group",{on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.treChange.apply(void 0,arguments)}}},[e("v-uni-label",[e("v-uni-radio",{attrs:{color:"#FF6D28",value:"1"}}),t._v("市价买入")],1)],1)],1),e("v-uni-view",{staticClass:"treRight",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.refresh.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:"../../../../static/icon/reload.png",mode:""}}),e("v-uni-text",[t._v("刷新")])],1)],1),e("v-uni-view",{staticClass:"bbg"},[e("v-uni-view",{staticClass:"backRed bbgcon",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.priceDelAdd("del")}}},[t._v("-")]),e("v-uni-input",{staticClass:"bbi",attrs:{type:"number",value:""},on:{blur:function(i){arguments[0]=i=t.$handleEvent(i),t.priceCheck.apply(void 0,arguments)}},model:{value:t.buyPrice,callback:function(i){t.buyPrice=i},expression:"buyPrice"}}),e("v-uni-view",{staticClass:"backRed bbgcon",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.priceDelAdd("add")}}},[t._v("+")])],1),e("v-uni-view",{staticClass:"buyxz"},[t._v("现价："),e("v-uni-text",{staticClass:"rd"},[t._v(t._s(void 0==t.stockInfo.instantPrice?"0.00":t.stockInfo.instantPrice))]),t._v("最大可买："),e("v-uni-text",[t._v(t._s(parseInt(t.available*t.multiple/t.buyPrice-t.available*t.multiple/t.buyPrice%100*1)/1))])],1),e("v-uni-view",{staticClass:"bbg"},[e("v-uni-view",{staticClass:"backRed bbgcon",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.numDelAdd("del")}}},[t._v("-")]),e("v-uni-input",{staticClass:"bbi",attrs:{type:"number",value:""},on:{blur:function(i){arguments[0]=i=t.$handleEvent(i),t.numCheck.apply(void 0,arguments)}},model:{value:t.buyNum,callback:function(i){t.buyNum=i},expression:"buyNum"}}),e("v-uni-view",{staticClass:"backRed bbgcon",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.numDelAdd("add")}}},[t._v("+")])],1),e("v-uni-view",{staticClass:"buyInPro"},[e("v-uni-radio-group",{on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.buyInChange.apply(void 0,arguments)}}},[e("v-uni-label",[e("v-uni-view",{staticClass:"ct"},[e("v-uni-radio",{attrs:{color:"#FF6D28",value:"1"}}),t._v("全部")],1)],1),e("v-uni-label",[e("v-uni-view",{staticClass:"ct"},[e("v-uni-radio",{attrs:{color:"#FF6D28",value:"2"}}),t._v("1/2")],1)],1),e("v-uni-label",[e("v-uni-view",{staticClass:"ct"},[e("v-uni-radio",{attrs:{color:"#FF6D28",value:"3"}}),t._v("1/3")],1)],1),e("v-uni-label",[e("v-uni-view",{staticClass:"ct"},[e("v-uni-radio",{attrs:{color:"#FF6D28",value:"4"}}),t._v("1/4")],1)],1)],1)],1),e("v-uni-view",{staticClass:"buyInBtn backRed",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.immediatelyBuy.apply(void 0,arguments)}}},[t._v("立即买入")])],1),e("v-uni-view",{staticClass:"infoRight"},[e("v-uni-view",{staticClass:"xux"},[e("v-uni-view",{staticClass:"infoName"},[t._v(t._s(void 0==t.stockInfo.stockName?"--":t.stockInfo.stockName))]),e("v-uni-view",{staticClass:"maill"},[e("v-uni-view",{staticClass:"m1"},[t._v("卖五")]),e("v-uni-view",{staticClass:"m2"},[t._v(t._s(void 0==t.stockInfo.sellPrices[4]?"0.00":t.stockInfo.sellPrices[4]))]),e("v-uni-view",{staticClass:"m3"},[t._v(t._s(void 0==t.stockInfo.sellAmounts[4]?"0":t.stockInfo.sellAmounts[4]))])],1),e("v-uni-view",{staticClass:"maill"},[e("v-uni-view",{staticClass:"m1"},[t._v("卖四")]),e("v-uni-view",{staticClass:"m2"},[t._v(t._s(void 0==t.stockInfo.sellPrices[3]?"0.00":t.stockInfo.sellPrices[3]))]),e("v-uni-view",{staticClass:"m3"},[t._v(t._s(void 0==t.stockInfo.sellAmounts[3]?"0":t.stockInfo.sellAmounts[3]))])],1),e("v-uni-view",{staticClass:"maill"},[e("v-uni-view",{staticClass:"m1"},[t._v("卖三")]),e("v-uni-view",{staticClass:"m2"},[t._v(t._s(void 0==t.stockInfo.sellPrices[2]?"0.00":t.stockInfo.sellPrices[2]))]),e("v-uni-view",{staticClass:"m3"},[t._v(t._s(void 0==t.stockInfo.sellAmounts[2]?"0":t.stockInfo.sellAmounts[2]))])],1),e("v-uni-view",{staticClass:"maill"},[e("v-uni-view",{staticClass:"m1"},[t._v("卖二")]),e("v-uni-view",{staticClass:"m2"},[t._v(t._s(void 0==t.stockInfo.sellPrices[1]?"0.00":t.stockInfo.sellPrices[1]))]),e("v-uni-view",{staticClass:"m3"},[t._v(t._s(void 0==t.stockInfo.sellAmounts[1]?"0":t.stockInfo.sellAmounts[1]))])],1),e("v-uni-view",{staticClass:"maill"},[e("v-uni-view",{staticClass:"m1"},[t._v("卖一")]),e("v-uni-view",{staticClass:"m2"},[t._v(t._s(void 0==t.stockInfo.sellPrices[0]?"0.00":t.stockInfo.sellPrices[0]))]),e("v-uni-view",{staticClass:"m3"},[t._v(t._s(void 0==t.stockInfo.sellAmounts[0]?"0":t.stockInfo.sellAmounts[0]))])],1)],1),e("v-uni-view",{staticClass:"xux",staticStyle:{"margin-top":"16upx"}},[e("v-uni-view",{staticClass:"maill"},[e("v-uni-view",{staticClass:"m1"},[t._v("买一")]),e("v-uni-view",{staticClass:"m2"},[t._v(t._s(void 0==t.stockInfo.buyPrices[0]?"0.00":t.stockInfo.buyPrices[0]))]),e("v-uni-view",{staticClass:"m3"},[t._v(t._s(void 0==t.stockInfo.buyAmounts[0]?"0":t.stockInfo.buyAmounts[0]))])],1),e("v-uni-view",{staticClass:"maill"},[e("v-uni-view",{staticClass:"m1"},[t._v("买二")]),e("v-uni-view",{staticClass:"m2"},[t._v(t._s(void 0==t.stockInfo.buyPrices[1]?"0.00":t.stockInfo.buyPrices[1]))]),e("v-uni-view",{staticClass:"m3"},[t._v(t._s(void 0==t.stockInfo.buyAmounts[1]?"0":t.stockInfo.buyAmounts[1]))])],1),e("v-uni-view",{staticClass:"maill"},[e("v-uni-view",{staticClass:"m1"},[t._v("买三")]),e("v-uni-view",{staticClass:"m2"},[t._v(t._s(void 0==t.stockInfo.buyPrices[2]?"0.00":t.stockInfo.buyPrices[2]))]),e("v-uni-view",{staticClass:"m3"},[t._v(t._s(void 0==t.stockInfo.buyAmounts[2]?"0":t.stockInfo.buyAmounts[2]))])],1),e("v-uni-view",{staticClass:"maill"},[e("v-uni-view",{staticClass:"m1"},[t._v("买四")]),e("v-uni-view",{staticClass:"m2"},[t._v(t._s(void 0==t.stockInfo.buyPrices[3]?"0.00":t.stockInfo.buyPrices[3]))]),e("v-uni-view",{staticClass:"m3"},[t._v(t._s(void 0==t.stockInfo.buyAmounts[3]?"0":t.stockInfo.buyAmounts[3]))])],1),e("v-uni-view",{staticClass:"maill"},[e("v-uni-view",{staticClass:"m1"},[t._v("买五")]),e("v-uni-view",{staticClass:"m2"},[t._v(t._s(void 0==t.stockInfo.buyPrices[4]?"0.00":t.stockInfo.buyPrices[4]))]),e("v-uni-view",{staticClass:"m3"},[t._v(t._s(void 0==t.stockInfo.buyAmounts[4]?"0":t.stockInfo.buyAmounts[4]))])],1)],1)],1),e("v-uni-text",{staticStyle:{display:"block",clear:"both",height:"50upx"}})],1),e("v-uni-view",{staticClass:"jrwt"},[t._v("持股信息")]),e("v-uni-view",{staticClass:"tb"},[e("v-uni-view",{staticClass:"tbson thTop"},[e("v-uni-view",{staticStyle:{width:"20%"}},[t._v("名称/代码")]),e("v-uni-view",{staticStyle:{width:"20%"}},[t._v("盈亏/比例")]),e("v-uni-view",{staticStyle:{width:"20%"}},[t._v("持仓/可用")]),e("v-uni-view",{staticStyle:{width:"20%"}},[t._v("成本/现价")]),e("v-uni-view",{staticStyle:{width:"20%"}},[t._v("市值/操作")])],1),t._l(t.buysData,function(i,s){return e("v-uni-view",{key:s,staticClass:"tbson td"},[e("v-uni-view",[e("v-uni-text",[t._v(t._s(i.stockName)+"\\n")]),e("v-uni-text",[t._v(t._s(i.stockCode))])],1),e("v-uni-view",{staticStyle:{"line-height":"44upx"}},[e("v-uni-text",[t._v(t._s(i.profitAndLoss)+"\\n")]),e("v-uni-text",[t._v(t._s(i.lossThan))])],1),e("v-uni-view",{staticStyle:{"line-height":"44upx"}},[e("v-uni-text",[t._v(t._s(i.freezeNumber+i.sharesNumber)+"\\n")]),e("v-uni-text",[t._v(t._s(i.sharesNumber))])],1),e("v-uni-view",{staticStyle:{"line-height":"44upx"}},[e("v-uni-text",[t._v(t._s(i.costPrice)+"\\n")]),e("v-uni-text",[t._v(t._s(i.currentPrice))])],1),e("v-uni-view",{staticStyle:{"line-height":"44upx"}},[e("v-uni-text",[t._v(t._s(i.marketValue)+"\\n")]),e("v-uni-text",{staticStyle:{color:"#0D8AE6"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancellations(i,s)}}},[t._v("买入")])],1),e("v-uni-view",{staticStyle:{width:"100%",height:"20upx",background:"#a7a7a7"}})],1)})],2)],1)},o=[];e.d(i,"b",function(){return n}),e.d(i,"c",function(){return o}),e.d(i,"a",function(){return s})},2138:function(t,i,e){"use strict";var s=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("ac6a"),e("c5f6");var n=s(e("e814")),o=s(e("8a16")),a=s(e("fda5")),c={components:{cmdNavBar:o.default},data:function(){return{missVal:"",missShow:!1,stockInfo:{buyPrices:[0,0,0,0,0],buyAmounts:[0,0,0,0,0],sellPrices:[0,0,0,0,0],sellAmounts:[0,0,0,0,0]},available:0,buyPrice:"",buyNum:"",stocks:[],stocksWant:[],buysData:[],buyInbfb:1,multiple:8,isRouterAlive:!0}},watch:{buyPrice:function(t,i){this.buyNum=(0,n.default)(100*Math.floor(this.available*this.multiple/this.buyPrice/this.buyInbfb/100)*1)/1}},methods:{treChange:function(t){this.buyPrice=this.stockInfo.instantPrice},buyInChange:function(t){this.buyInbfb=t.target.value,this.buyNum=(0,n.default)(100*Math.floor(this.available*this.multiple/this.buyPrice/t.target.value/100)*1)/1},refresh:function(){6==this.missVal.length&&this.queryStock(this.missVal)},priceDelAdd:function(t){"del"==t?this.buyPrice=(Number(this.buyPrice)-.01).toFixed(2):"add"==t&&(this.buyPrice=(Number(this.buyPrice)+.01).toFixed(2))},numDelAdd:function(t){"del"==t?this.buyNum=Number(this.buyNum)-100:"add"==t&&(this.buyNum=Number(this.buyNum)+100)},bitListen:function(t){var i=t.target.value,e=[];this.stocks.forEach(function(t,s){-1!=t.stockCode.indexOf(i)&&e.push(t)}),e=e.slice(0,5),this.stocksWant=e,this.stocksWant.length>0?this.missShow=!0:this.missShow=!1,6==i.length&&this.queryStock(i)},priceCheck:function(t){this.buyPrice=Number(this.buyPrice).toFixed(2),t.target.value<0&&uni.showToast({position:"bottom",title:"买入价格不能小于0",icon:"none",duration:2500})},numCheck:function(t){},selectThis:function(t){this.missShow=!1,this.queryStock(t)},queryStock:function(t){var i=this;a.default.get("AppPortfolioPage/buy",{stockCode:t}).then(function(t){t.data.success?(void 0!=t.data.data.quote&&(i.stockInfo=t.data.data.quote,i.missVal=i.stockInfo.stockCode,i.buyPrice=i.stockInfo.instantPrice,i.available=t.data.data.userAssetsVo.money,i.multiple=t.data.data.multiple),void 0!=t.data.data.stockHoldVoList&&(i.buysData=t.data.data.stockHoldVoList,i.stocks=t.data.data.stockHoldVoList)):uni.showToast({position:"bottom",title:"没有查询到当前股票代码",icon:"none",duration:2500})})},immediatelyBuy:function(){if(void 0!=this.stockInfo.stockCode&&""!=this.stockInfo.stockCode)if(Number(this.buyPrice)<0||NaN==Number(this.buyPrice)||""==this.buyPrice)uni.showModal({title:"提示",content:"请输入正确的买入价",showCancel:!1});else if(this.buyNum%100!=0||Number(this.buyNum)<=0||""==this.buyNum)uni.showModal({title:"提示",content:"买入数量只能是100的倍数！",showCancel:!1});else if(Number(this.buyNum)>(0,n.default)(this.available*this.multiple/this.buyPrice*1)/1)uni.showModal({title:"提示",content:"不能超过最大可买数！",showCancel:!1});else{var t=this;uni.showModal({title:"请确认",content:"是否买入【"+this.stockInfo.stockName+"】,代码【"+this.stockInfo.stockCode+"】,买入价【"+this.buyPrice+"】,买入数量【"+this.buyNum+"】",success:function(i){i.confirm?(uni.showLoading({title:"提交中~"}),a.default.get("stock/order/add",{stockCode:t.stockInfo.stockCode,orderUnitPrice:t.buyPrice,orderNumber:t.buyNum,orderType:"BUY"}).then(function(t){t.data.success&&(uni.showModal({title:"提示",content:"购买成功",showCancel:!1}),uni.redirectTo({url:"/pages/main/transaction/buy/buy"}))})):i.cancel}})}else uni.showModal({title:"提示",content:"请选择您要买入的股票",showCancel:!1})},cancellations:function(t,i){this.queryStock(t.stockCode),this.maxSale=t.sharesNumber},getHasStock:function(){var t=this;a.default.get("stock/hold/getList",{"pageInfo.size":100,"pageInfo.num":1,"pageInfo.isReturnPage":!1}).then(function(i){t.buysData=i.data.data.records,t.stocks=i.data.data.records})},cancellation:function(t,i){if(0==t.orderStatus.value){var e=this;uni.showModal({title:"请确认",content:"是否撤单【"+t.stockName+"/"+t.stockCode+"】",success:function(i){i.confirm&&a.default.get("stock/order/cancellations",{id:t.id+""}).then(function(t){t.data.success&&(uni.showModal({title:"提示",content:t.data.message,showCancel:!1}),e.queryStock(""))})}})}}},onLoad:function(t){var i=this;uni.showLoading({mask:!0}),"zxgp"==t.type&&(this.queryStock(t.stockCode),this.maxSale=t.maxSale,a.default.get("AppPortfolioPage/sell",{stockCode:t.stockCode}).then(function(t){void 0!=t.data.data.quote&&(i.stockInfo=t.data.data.quote,i.missVal=i.stockInfo.stockCode,i.buyPrice=i.stockInfo.instantPrice,i.available=t.data.data.userAssetsVo.netAsset),void 0!=t.data.data.stockHoldVoList&&(i.buysData=t.data.data.stockHoldVoList,i.stocks=t.data.data.stockHoldVoList)})),this.getHasStock()}};i.default=c},"47f8":function(t,i,e){"use strict";e.r(i);var s=e("1ef3"),n=e("cd1a");for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);e("66b6");var a,c=e("f0c5"),u=Object(c["a"])(n["default"],s["b"],s["c"],!1,null,"10588040",null,!1,s["a"],a);i["default"]=u.exports},"66b6":function(t,i,e){"use strict";var s=e("0faf"),n=e.n(s);n.a},cc8c:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.status-bar[data-v-10588040]{box-sizing:border-box;display:block;width:100%;margin-bottom:%?-3?%;height:0;line-height:0;position:fixed;top:0;left:0;background:-webkit-linear-gradient(left,#ef9435,#e95e28);background:linear-gradient(90deg,#ef9435,#e95e28);z-index:99}.nav-bar[data-v-10588040]{position:fixed;left:0;z-index:20;width:100%}.content[data-v-10588040]{\n  /*距离顶部范围应该在88-95范围内*/background:#fbfbfb}.buyMsg[data-v-10588040]{width:%?730?%;margin:0 auto;color:#555;text-align:left;font-size:%?26?%;padding-top:calc(0px + %?90?%);padding-left:%?10?%;padding-bottom:%?10?%;padding-right:%?10?%;box-sizing:border-box}.buyMsg uni-text[data-v-10588040]{margin-right:%?8?%}.buyMsg .red[data-v-10588040]{color:#ff3e3e}.buyMsg .green[data-v-10588040]{color:#094}.buyInfo[data-v-10588040]{width:%?730?%;height:auto;margin:0 auto}.buyInfo .infoLeft[data-v-10588040]{width:calc(50% - %?7?%);float:left;position:relative}.buyInfo .infoLeft .bit[data-v-10588040]{display:block;width:100%;height:%?60?%;box-sizing:border-box;border:%?2?% solid #d5d5d5;border-radius:%?5?%;font-size:%?26?%;padding-left:%?10?%;box-sizing:border-box}.buyInfo .infoLeft .thinkBox[data-v-10588040]{width:100%;position:absolute;top:%?60?%;left:%?0?%;z-index:10;background:#fff;border:%?2?% solid #ddd;border-top:none;box-sizing:border-box}.buyInfo .infoLeft .thinkBox .miss[data-v-10588040]{width:100%;height:%?60?%;line-height:%?60?%;font-size:%?24?%;color:#cc3d3b;padding-left:%?8?%;box-sizing:border-box}.buyInfo .infoLeft .thinkBox .miss uni-text[data-v-10588040]:nth-child(2){margin-left:%?12?%}.buyInfo .infoLeft .buyTerm[data-v-10588040]{width:100%;height:%?70?%;line-height:%?70?%;font-size:%?28?%}.buyInfo .infoLeft .buyTerm .treLeft[data-v-10588040]{float:left;color:#404040}.buyInfo .infoLeft .buyTerm .treRight[data-v-10588040]{height:%?70?%;float:right;color:#000}.buyInfo .infoLeft .buyTerm .treRight uni-image[data-v-10588040]{width:%?47?%;height:%?47?%;vertical-align:middle}.buyInfo .infoLeft .buyTerm .treRight uni-text[data-v-10588040]{margin-left:%?8?%}.buyInfo .infoLeft .bbg[data-v-10588040]{height:%?65?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.buyInfo .infoLeft .bbg .bbgcon[data-v-10588040]{width:%?80?%;text-align:center;line-height:%?65?%;font-size:%?36?%;border-radius:%?8?%;color:#fff;font-weight:600}.buyInfo .infoLeft .bbg .bbi[data-v-10588040]{display:block;width:%?180?%;height:%?65?%;border-radius:%?8?%;border:%?1?% solid #d5d5d5;text-align:center;font-size:%?26?%}.buyInfo .infoLeft .buyxz[data-v-10588040]{width:100%;height:%?70?%;line-height:%?70?%;font-size:%?20?%;text-align:left;word-wrap:break-word}.buyInfo .infoLeft .buyxz uni-text[data-v-10588040]{margin:0 %?5?%}.buyInfo .infoLeft .buyxz .rd[data-v-10588040]{color:#ff3e3e}.buyInfo .infoLeft .buyInPro[data-v-10588040]{margin-top:%?20?%}.buyInfo .infoLeft .buyInPro uni-radio-group[data-v-10588040]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.buyInfo .infoLeft .buyInPro uni-label[data-v-10588040]{width:50%}.buyInfo .infoLeft .buyInPro .ct[data-v-10588040]{width:100%;height:%?50?%;line-height:%?50?%;text-align:left;margin-top:%?5?%;font-size:%?27?%;color:#404040}.buyInfo .infoLeft .buyInBtn[data-v-10588040]{width:100%;height:%?80?%;line-height:%?80?%;text-align:center;color:#fff;font-size:%?30?%;border-radius:%?8?%;margin-top:%?64?%}.buyInfo .infoRight[data-v-10588040]{width:calc(50% - %?7?%);float:right}.buyInfo .infoRight .xux[data-v-10588040]{width:100%;border:%?4?% dashed #c4c4c4;box-sizing:border-box;border-radius:%?8?%}.buyInfo .infoRight .xux .infoName[data-v-10588040]{height:%?65?%;border-bottom:%?5?% solid #c4c4c4;text-indent:%?8?%;line-height:%?65?%;color:#3b3b3b;font-size:%?32?%}.buyInfo .infoRight .xux .maill[data-v-10588040]{height:%?50?%;width:100%;padding:0 %?20?%;box-sizing:border-box;line-height:%?50?%;color:#3b3b3b;font-size:%?28?%}.buyInfo .infoRight .xux .maill .m1[data-v-10588040]{width:%?90?%;float:left}.buyInfo .infoRight .xux .maill .m2[data-v-10588040]{float:left}.buyInfo .infoRight .xux .maill .m3[data-v-10588040]{float:right}.jrwt[data-v-10588040]{width:100%;height:%?88?%;text-align:center;line-height:%?88?%;color:#464646;font-size:%?28?%;background:#eee;border-top:%?2?% solid #d9d9d9;border-bottom:%?2?% solid #d9d9d9}.tb[data-v-10588040]{width:100%}.tb .tbson[data-v-10588040]{text-align:center;line-height:%?86?%;height:%?86?%;color:#464646;border-bottom:%?1?% solid #d9d9d9;font-size:%?26?%;background:#fff;font-weight:600}.tb .tbson uni-view[data-v-10588040]{width:20%;float:left;height:%?86?%}.tb .td[data-v-10588040]{border:none;background:#fbfbfb;font-weight:400;font-size:%?25?%;overflow:hidden}.tb .td .buy-or-can[data-v-10588040]{float:none}.tb .td uni-text[data-v-10588040]:first-child{color:#0d8ae6}.tb .td uni-text[data-v-10588040]:nth-child(3){color:red}.tb .td[data-v-10588040]:nth-child(2n-1){background:#fff}.backRed[data-v-10588040]{background:#1176bd}',""])},cd1a:function(t,i,e){"use strict";e.r(i);var s=e("2138"),n=e.n(s);for(var o in s)"default"!==o&&function(t){e.d(i,t,function(){return s[t]})}(o);i["default"]=n.a}}]);