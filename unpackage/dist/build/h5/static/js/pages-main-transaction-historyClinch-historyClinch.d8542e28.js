(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-transaction-historyClinch-historyClinch"],{"061a":function(t,e,i){"use strict";var a=i("3351"),n=i.n(a);n.a},"08f0":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var n=a(i("8a16")),d=a(i("9185")),s=a(i("fda5")),o={components:{cmdNavBar:n.default,MescrollUni:d.default},data:function(){var t=this.getDate({format:!0});return{date1:t,date2:t,buysData:[],sellData:[],buysData1:[],sellData1:[],pageNum:1,pageSize:20,pageTotal:0,mescroll:null,downOption:{use:!1,auto:!1},upOption:{loadFull:{use:!0,auto:!1}}}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},created:function(){},onLoad:function(){},filters:{timeZhuan:function(t){return t.substring(0,10)}},methods:{downCallback:function(t){console.info("下拉")},upCallback:function(t){null==this.mescroll&&(this.mescroll=t),this.queryHistory()},bindDateChange1:function(t){this.date1=t.target.value},bindDateChange2:function(t){this.date2=t.target.value},getDate:function(t){var e=new Date,i=e.getFullYear(),a=e.getMonth()+1,n=e.getDate();return"start"===t?i-=60:"end"===t&&(i+=2),a=a>9?a:"0"+a,n=n>9?n:"0"+n,"".concat(i,"-").concat(a,"-").concat(n)},reset:function(){this.isFirst=!0,this.buysData=[],this.sellData=[],this.pageTotal=1,this.pageNum=1,this.mescroll.endUpScroll(!1),this.mescroll.resetUpScroll()},queryHistory:function(){uni.showLoading({mask:!0}),this.isFirst||(this.pageNum=this.pageNum+1);var t=this;s.default.get("stock/order/getList",{"dateRangeInfo.startTime":t.date1+" 00:00:00","dateRangeInfo.endTime":t.date2+" 23:59:59","pageInfo.num":t.pageNum-1,"pageInfo.size":t.pageSize,"pageInfo.isReturnPage":!0,orderStatus:"COMPLETED"}).then(function(e){if(t.isFirst){if(0==e.data.data.records.length)return uni.showModal({title:"提示",content:"该日期起始无记录",showCancel:!1}),void t.mescroll.endSuccess(10,!1);t.buysData=e.data.data.records,t.sellData=e.data.data.records,t.pageTotal=e.data.data.pages,t.isFirst=!1}else t.buysData=t.buysData.concat(e.data.data.records);t.mescroll.endSuccess(10,Number(t.pageNum)<Number(t.pageTotal))})}}};e.default=o},3351:function(t,e,i){var a=i("c053");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("8b73b4cc",a,!0,{sourceMap:!1,shadowMode:!1})},"8a45":function(t,e,i){"use strict";i.r(e);var a=i("d879"),n=i("8dbd");for(var d in n)"default"!==d&&function(t){i.d(e,t,function(){return n[t]})}(d);i("061a");var s,o=i("f0c5"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"0ed919d8",null,!1,a["a"],s);e["default"]=r.exports},"8dbd":function(t,e,i){"use strict";i.r(e);var a=i("08f0"),n=i.n(a);for(var d in a)"default"!==d&&function(t){i.d(e,t,function(){return a[t]})}(d);e["default"]=n.a},c053:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.status-bar[data-v-0ed919d8]{box-sizing:border-box;display:block;width:100%;margin-bottom:%?-3?%;height:0;line-height:0;position:fixed;top:0;left:0;background:-webkit-linear-gradient(left,#ef9435,#e95e28);background:linear-gradient(90deg,#ef9435,#e95e28);z-index:99}.nav-bar[data-v-0ed919d8]{position:fixed;left:0;z-index:2;width:100%}.content[data-v-0ed919d8]{\n  /*距离顶部范围应该在88-95范围内*/background:#fbfbfb}.timeSelectBox[data-v-0ed919d8]{width:100%;height:%?100?%;background:#f5f5f5;padding-top:%?25?%;box-sizing:border-box;position:fixed;top:0;left:0;z-index:2}.timeSelectBox .tsbCont[data-v-0ed919d8]{width:calc(100% - %?70?%);margin:0 auto}.timeSelectBox .tsbCont .endStart[data-v-0ed919d8],.timeSelectBox .tsbCont .timeStart[data-v-0ed919d8]{width:%?270?%;height:%?50?%;line-height:%?50?%;border-radius:%?10?%;border:%?3?% solid #dadada;box-sizing:border-box;text-indent:%?18?%;color:#000;font-size:%?26?%;position:relative;float:left}.timeSelectBox .tsbCont .endStart .kailong[data-v-0ed919d8],.timeSelectBox .tsbCont .timeStart .kailong[data-v-0ed919d8]{width:0;height:0;border-right:%?16?% solid transparent;border-left:%?16?% solid transparent;border-bottom:%?16?% solid #dadada;position:absolute;right:%?-10?%;bottom:%?-2?%;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.timeSelectBox .tsbCont .trans[data-v-0ed919d8]{width:%?60?%;height:%?50?%;line-height:%?50?%;float:left;text-align:center;color:#424242;font-size:%?30?%}.timeSelectBox .tsbCont .querys[data-v-0ed919d8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;float:right;width:%?58?%;height:%?50?%}.timeSelectBox .tsbCont .querys uni-image[data-v-0ed919d8]{display:block;height:%?42?%;width:%?42?%}.tb[data-v-0ed919d8]{width:100%;position:relative;padding-top:calc(0px + %?190?%)}.tb .tbson[data-v-0ed919d8]{width:100%;text-align:center;color:#464646;font-size:%?30?%;background:#fff;font-weight:600}.tb .tbson uni-view[data-v-0ed919d8]{width:20%;float:left}.tb .thTop[data-v-0ed919d8]{width:100%;height:%?86?%;position:fixed;top:%?100?%;left:0;background:#fbfbfb;z-index:2}.tb .td[data-v-0ed919d8]{border:none;background:#fbfbfb;font-weight:400}.tb .td uni-view[data-v-0ed919d8]:last-child{box-sizing:border-box}.tb .td uni-view:last-child uni-text[data-v-0ed919d8]{width:50%;height:100%;float:left;text-align:center}.tb .td uni-view:last-child uni-text[data-v-0ed919d8]:first-child{color:#0d8ae6}.tb .td uni-view:last-child uni-text[data-v-0ed919d8]:nth-child(2){color:red}.tb .td[data-v-0ed919d8]:nth-child(2n-1){background:#fff}',""])},d879:function(t,e,i){"use strict";var a={"mescroll-uni":i("9185").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("mescroll-uni",{attrs:{down:t.downOption,up:t.upOption},on:{down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"timeSelectBox"},[i("v-uni-view",{staticClass:"tsbCont"},[i("v-uni-view",{staticClass:"timeStart"},[i("v-uni-picker",{attrs:{mode:"date",value:t.date1,start:t.startDate,end:t.endDate},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindDateChange1.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.date1))])],1),i("div",{staticClass:"kailong"})],1),i("v-uni-view",{staticClass:"trans"},[t._v("到")]),i("v-uni-view",{staticClass:"endStart"},[i("v-uni-picker",{attrs:{mode:"date",value:t.date2,start:t.startDate,end:t.endDate},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindDateChange2.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.date2))])],1),i("div",{staticClass:"kailong"})],1),i("v-uni-view",{staticClass:"querys",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.reset.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"../../../../static/icon/queryfdj.png",mode:""}})],1)],1)],1),i("v-uni-view",{staticClass:"tb"},t._l(t.buysData,function(e,a){return i("v-uni-view",{key:a,staticStyle:{width:"100%"}},[i("v-uni-view",{staticStyle:{padding:"2% 4%",width:"92%"}},[i("v-uni-view",{staticClass:"tbson td",staticStyle:{height:"48upx",width:"100%"}},[i("v-uni-view",{staticStyle:{width:"30%"}},[t._v(t._s(e.stockName))]),i("v-uni-view",{staticStyle:{width:"30%"}},[t._v(t._s(e.stockCode))]),3==e.orderStatus.value?i("v-uni-view",{staticStyle:{width:"15%","text-align":"right"}},[t._v("已"+t._s(e.orderStatus.name))]):3!=e.orderStatus.value?i("v-uni-view",{staticStyle:{width:"30%","text-align":"right"}},[t._v(t._s(e.orderStatus.name))]):t._e()],1),i("v-uni-view",{staticClass:"tbson td",staticStyle:{height:"48upx",width:"100%"}},[i("v-uni-view",{staticStyle:{width:"30%",height:"48upx"}},[t._v(t._s(e.orderType.name))]),i("v-uni-view",{staticStyle:{width:"30%"}},[t._v("委托价/数")]),i("v-uni-view",{staticStyle:{width:"30%","text-align":"right"}},[t._v(t._s(e.orderUnitPrice)+"/"+t._s(e.orderNumber))])],1),i("v-uni-view",{staticClass:"tbson td",staticStyle:{height:"48upx",width:"100%"}},[i("v-uni-view",{staticStyle:{width:"30%",height:"48upx"}},[t._v(t._s(e.createTime.split(" ")[0]))]),i("v-uni-view",{staticStyle:{width:"30%"}},[t._v("成交价/数")]),i("v-uni-view",{staticStyle:{width:"30%","text-align":"right"}},[t._v(t._s(e.transactionPrice)+"/"+t._s(e.transactionVolume))])],1),i("v-uni-view",{staticClass:"tbson td",staticStyle:{height:"48upx",width:"100%"}},[i("v-uni-view",{staticStyle:{width:"30%",height:"48upx"}},[t._v(t._s(e.createTime.split(" ")[1]))]),0!=e.orderType.value&&0!=e.profitprice?i("v-uni-view",{staticStyle:{width:"30%"}},[t._v("盈利")]):t._e(),0!=e.orderType.value&&0!=e.profitprice?i("v-uni-view",{staticStyle:{width:"30%","text-align":"right"}},[t._v(t._s(e.profitprice))]):t._e()],1)],1)],1)}),1)],1)],1)},d=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return d}),i.d(e,"a",function(){return a})}}]);