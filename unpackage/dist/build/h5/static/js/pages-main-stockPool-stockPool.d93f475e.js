(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-stockPool-stockPool"],{"1caa":function(t,e,i){"use strict";var a={"mescroll-uni":i("9185").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("mescroll-uni",{attrs:{down:t.downOption},on:{down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"grp"},[i("v-uni-view",{staticClass:"grpTit"},[t._v("AI精选")]),i("v-uni-view",{class:"N"==t.isRecharged?"grpCon isShow":"grpCon"},[t._l(t.storeData.goldStocks,function(e,a){return i("v-uni-view",{key:a,staticClass:"grpLi"},[i("v-uni-view",{staticClass:"left",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.buyIn(e.stockCode)}}},[i("v-uni-text",[t._v("入选时间")]),i("v-uni-text",[t._v(t._s(t.getMyDate(e.addTime)))])],1),i("v-uni-view",{staticClass:"cen",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.buyIn(e.stockCode)}}},[i("v-uni-text",[t._v(t._s(e.stockName))]),i("v-uni-text",[t._v(t._s(e.remark))])],1),i("v-uni-view",{staticClass:"right",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.addMyStock(e)}}},[i("v-uni-image",{attrs:{src:t.imgArray.add,mode:""}})],1)],1)}),i("v-uni-view",{staticClass:"pagination"},[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goldStock.apply(void 0,arguments)}}},[t._v("查看更多")])],1)],2),"N"==t.isRecharged?i("v-uni-view",{staticClass:"buyVip"},[i("v-uni-view",{staticClass:"ts"},[t._v("亲，您的总净资产不足两千，足额可显示")]),i("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBuy.apply(void 0,arguments)}}},[t._v("充值")])],1):t._e()],1),i("v-uni-view",{staticClass:"grp his"},[i("v-uni-view",{staticClass:"grpTit"},[t._v("历史战绩")]),i("v-uni-view",{staticClass:"grpCon"},[i("v-uni-view",{staticClass:"grpTab"},[i("v-uni-view",{staticStyle:{width:"20%"}},[t._v("区间涨幅")]),i("v-uni-view",{staticStyle:{width:"20%"}},[t._v("股票")]),i("v-uni-view",{staticStyle:{width:"30%"}},[t._v("入选时间")]),i("v-uni-view",{staticStyle:{width:"30%"}},[t._v("截至时间")])],1),t._l(t.dataList,function(e,a){return i("v-uni-view",{key:a,staticClass:"grpTabL"},[i("v-uni-view",{staticStyle:{width:"20%","font-weight":"600",color:"red","line-height":"90upx"}},[t._v("30%")]),i("v-uni-view",{staticStyle:{width:"20%"}},[t._v(t._s(e.stockName)+"（"+t._s(e.stockCode)+"）")]),i("v-uni-view",{staticStyle:{width:"30%"}},[i("v-uni-text",[t._v(t._s(t.getMyDate(e.addTime)))])],1),i("v-uni-view",{staticStyle:{width:"30%"}},[i("v-uni-text",[t._v(t._s(t.getMyDate(e.endTime)))])],1)],1)})],2)],1)],1)],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},"65bc":function(t,e,i){"use strict";i.r(e);var a=i("1caa"),n=i("de48");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("9735");var d,r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"d7437bda",null,!1,a["a"],d);e["default"]=s.exports},9735:function(t,e,i){"use strict";var a=i("c9ce"),n=i.n(a);n.a},"9bc6":function(t,e){t.exports="data:image/png;base64,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"},b569:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var n=a(i("8a16")),o=a(i("9185")),d=a(i("fda5")),r={components:{cmdNavBar:n.default,MescrollUni:o.default},data:function(){return{imgArray:{add:i("9bc6")},isRecharged:"N",downOption:{use:!1,auto:!1},upOption:{use:!0,auto:!0,page:{num:0,size:10},noMoreSize:5,empty:{tip:"暂无相关数据"}},dataList:[]}},onLoad:function(){},created:function(){var t=this;d.default.get("userAssets",{}).then(function(e){console.log(e.data.data.netAsset),Number(e.data.data.netAsset)/8>=2e3&&(t.isRecharged="Y")})},computed:{storeData:function(){return this.$store.state.mainPoolData}},methods:{_pullup:function(){},getMyDate:function(t){var e=new Date(t),i=e.getFullYear(),a=e.getMonth()+1,n=e.getDate();return i+"/"+(a<10?"0"+a:a)+"/"+(n<10?"0"+n:n)+" \n"+e.toTimeString().substr(0,8)},downCallback:function(t){},upCallback:function(t){var e=this,i=t.num,a=15;d.default.get("transaction/getHistoryRecordByPage?pageNum="+i+"&pageSize="+a).then(function(i){console.log(i.data);var a=i.data.data.historyRecord,n=i.data.data.pageTotal;1==t.num&&(e.dataList=[]),e.dataList=e.dataList.concat(a),t.endBySize(a.length,n)})},buyIn:function(t){uni.navigateTo({url:"/pages/main/transaction/buy/buy?type=zxgp&stockCode="+t})},addMyStock:function(t){d.default.get("stock/addStock",{stockCode:t.stockCode,stockName:t.stockName,holder:this.$store.state.userInfo.phone}).then(function(t){uni.showModal({title:"提示",content:"加入自选股票成功",showCancel:!1})})},goBuy:function(){uni.navigateTo({url:"/pages/main/myAccount/pay/pay"})},initData:function(){var t=this;uni.showLoading({mask:!0}),d.default.get("transaction/toGoldStock").then(function(e){t.$store.commit("mainPoolDataUpdate",e.data.data)})},goldStock:function(){uni.navigateTo({url:"/pages/main/stockPool/goldStock"})}},mounted:function(){this.initData(),this.$store.state.isShowAIDialog||(uni.showModal({title:"提示",showCancel:!1,mask:!0,content:"温馨提示：该股票池由AI智能自动选取展示，仅供欣赏不做任何投资推荐，所有交易风险自负，与本平台无关！"}),this.$store.commit("isShowAIDialog",!0))}};e.default=r},c9ce:function(t,e,i){var a=i("e6fd");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("58f1b6ea",a,!0,{sourceMap:!1,shadowMode:!1})},de48:function(t,e,i){"use strict";i.r(e);var a=i("b569"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},e6fd:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.status-bar[data-v-d7437bda]{box-sizing:border-box;display:block;width:100%;margin-bottom:%?-3?%;height:0;line-height:0;position:fixed;top:0;left:0;background:-webkit-linear-gradient(left,#ef9435,#e95e28);background:linear-gradient(90deg,#ef9435,#e95e28);z-index:99}.nav-bar[data-v-d7437bda]{position:fixed;left:0;z-index:2;width:100%}.pagination[data-v-d7437bda]{font-size:%?26?%;color:#007aff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly;text-align:center;margin:auto}.pagination uni-view[data-v-d7437bda]{padding:10px}.content[data-v-d7437bda]{\n  /*距离顶部范围应该在88-95范围内*/}.grp[data-v-d7437bda]{padding-top:0;width:100%;position:relative}.grp .grpTit[data-v-d7437bda]{width:100%;height:%?80?%;line-height:%?80?%;color:#0e0e0e;text-indent:%?36?%;position:relative;text-align:left;font-size:%?28?%;border-bottom:%?2?% solid #ccc}.grp .grpTit[data-v-d7437bda]:after{position:absolute;content:"";height:%?34?%;width:%?5?%;background:#ff6d28;left:%?20?%;top:%?23?%}.grp .grpCon[data-v-d7437bda]{width:100%;position:relative}.grp .grpCon .grpTab[data-v-d7437bda]{width:100%;line-height:%?80?%;background-color:#f5f5f5;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?2?% solid #ccc;font-size:%?26?%;color:#fff;background-color:#e64340}.grp .grpCon .grpTab uni-view[data-v-d7437bda]{height:%?80?%;border-right:%?2?% solid #ccc}.grp .grpCon .grpTabL[data-v-d7437bda]{width:100%;height:%?100?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?2?% solid #ccc;font-size:%?26?%}.grp .grpCon .grpTabL uni-view[data-v-d7437bda]{border-right:%?2?% solid #ccc;height:%?88?%}.grp .grpCon .grpLi[data-v-d7437bda]{width:100%;height:%?120?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?2?% solid #ccc;font-size:%?26?%}.grp .grpCon .grpLi uni-view[data-v-d7437bda]{height:%?100?%}.grp .grpCon .grpLi uni-view[data-v-d7437bda]:first-child{line-height:%?100?%}.grp .grpCon .grpLi .left[data-v-d7437bda]{width:%?225?%;height:%?120?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.grp .grpCon .grpLi .left uni-text[data-v-d7437bda]{display:block;width:100%;text-align:center}.grp .grpCon .grpLi .left uni-text[data-v-d7437bda]:first-child{background-color:#f5f5f5;font-size:%?26?%;color:#a5a5a5;line-height:33px}.grp .grpCon .grpLi .left uni-text[data-v-d7437bda]:nth-child(2){font-size:%?22?%;\n          /* font-weight: 600; */color:#e64340;line-height:33px}.grp .grpCon .grpLi .left .red[data-v-d7437bda]{color:#da2430!important}.grp .grpCon .grpLi .left .green[data-v-d7437bda]{color:#50a97c!important}.grp .grpCon .grpLi .cen[data-v-d7437bda]{width:%?400?%;border-left:%?2?% solid #ccc;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.grp .grpCon .grpLi .cen uni-text[data-v-d7437bda]{display:block;width:100%;text-align:left;padding:0 %?20?%;box-sizing:border-box}.grp .grpCon .grpLi .cen uni-text[data-v-d7437bda]:first-child{font-weight:600;font-size:%?32?%;color:#262626}.grp .grpCon .grpLi .cen uni-text[data-v-d7437bda]:nth-child(2){font-size:%?24?%;color:#565656}.grp .grpCon .grpLi .right[data-v-d7437bda]{width:calc(100% - %?225?% - %?400?%);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.grp .grpCon .grpLi .right uni-image[data-v-d7437bda]{display:block;width:%?50?%;height:%?50?%}.grp .buyVip[data-v-d7437bda]{width:100%;height:calc(100% - %?80?%);left:0;bottom:0}.grp .buyVip .ts[data-v-d7437bda]{font-size:%?26?%;color:#ff6d28;margin-top:30%;letter-spacing:%?5?%;font-weight:600}.grp .buyVip .btn[data-v-d7437bda]{width:%?160?%;height:%?60?%;background:#ff6d28;color:#fff;border-radius:%?8?%;margin:0 auto;margin-top:%?20?%;font-size:%?28?%;line-height:%?60?%}.grp .isShow[data-v-d7437bda]{-webkit-filter:blur(%?10?%);filter:blur(%?10?%)}.alertBack[data-v-d7437bda]{width:100%;height:100%;position:fixed;left:0;top:0;z-index:10;background:rgba(0,0,0,.2);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.alertBack .alertContent[data-v-d7437bda]{width:%?680?%;height:%?900?%;background:#fff;border-radius:%?8?%;overflow:hidden}.alertBack .alertContent .top[data-v-d7437bda]{height:%?84?%;width:100%;background:#e64340;padding-left:%?40?%;box-sizing:border-box;border-bottom:%?1?% solid #ebebeb}.alertBack .alertContent .top uni-text[data-v-d7437bda]{display:block;float:left;text-align:left;line-height:%?84?%;color:#fff;font-size:%?26?%}.alertBack .alertContent .top .closeBtn[data-v-d7437bda]{width:%?105?%;height:%?84?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;float:right}.alertBack .alertContent .top .closeBtn uni-image[data-v-d7437bda]{display:block;width:%?25?%;height:%?25?%}.alertBack .alertContent .aDetails[data-v-d7437bda]{width:100%;height:calc(100% - %?84?% - %?84?%);padding-top:%?20?%;box-sizing:border-box;overflow-y:scroll}.alertBack .alertContent .aDetails .ft[data-v-d7437bda]{color:#333;text-align:center;line-height:%?50?%;font-size:%?28?%}.alertBack .alertContent .aDetails uni-image[data-v-d7437bda]{display:block;width:%?410?%;height:%?630?%;margin:0 auto}.alertBack .alertContent .btm[data-v-d7437bda]{width:100%;background:#fff;height:%?84?%;border-top:%?1?% solid #ebebeb;box-sizing:border-box}.alertBack .alertContent .btm .leftBtn[data-v-d7437bda]{float:left;margin-left:%?30?%;background:#51a6f6}.alertBack .alertContent .btm .rightBtn[data-v-d7437bda]{float:right;background:#e64340}.alertBack .alertContent .btm .btBtn[data-v-d7437bda]{height:%?60?%;width:%?230?%;text-align:center;color:#fff;line-height:%?60?%;font-size:%?26?%;border-radius:%?5?%;margin-top:%?12?%;margin-right:%?30?%}',""])}}]);