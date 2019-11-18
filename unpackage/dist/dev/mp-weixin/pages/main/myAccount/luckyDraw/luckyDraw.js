(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/main/myAccount/luckyDraw/luckyDraw"],{

/***/ 209:
/*!************************************************************************************************************************!*\
  !*** C:/Users/panli/Documents/HBuilderProjects/NM/main.js?{"page":"pages%2Fmain%2FmyAccount%2FluckyDraw%2FluckyDraw"} ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _luckyDraw = _interopRequireDefault(__webpack_require__(/*! ./pages/main/myAccount/luckyDraw/luckyDraw.vue */ 210));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_luckyDraw.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 210:
/*!*************************************************************************************************!*\
  !*** C:/Users/panli/Documents/HBuilderProjects/NM/pages/main/myAccount/luckyDraw/luckyDraw.vue ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _luckyDraw_vue_vue_type_template_id_f00dea6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./luckyDraw.vue?vue&type=template&id=f00dea6a&scoped=true& */ 211);
/* harmony import */ var _luckyDraw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./luckyDraw.vue?vue&type=script&lang=js& */ 213);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _luckyDraw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _luckyDraw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _luckyDraw_vue_vue_type_style_index_0_id_f00dea6a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./luckyDraw.vue?vue&type=style&index=0&id=f00dea6a&lang=scss&scoped=true& */ 215);
/* harmony import */ var _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 21);






/* normalize component */

var component = Object(_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _luckyDraw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _luckyDraw_vue_vue_type_template_id_f00dea6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _luckyDraw_vue_vue_type_template_id_f00dea6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f00dea6a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/panli/Documents/HBuilderProjects/NM/pages/main/myAccount/luckyDraw/luckyDraw.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 211:
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/panli/Documents/HBuilderProjects/NM/pages/main/myAccount/luckyDraw/luckyDraw.vue?vue&type=template&id=f00dea6a&scoped=true& ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_luckyDraw_vue_vue_type_template_id_f00dea6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./luckyDraw.vue?vue&type=template&id=f00dea6a&scoped=true& */ 212);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_luckyDraw_vue_vue_type_template_id_f00dea6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_luckyDraw_vue_vue_type_template_id_f00dea6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 212:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/panli/Documents/HBuilderProjects/NM/pages/main/myAccount/luckyDraw/luckyDraw.vue?vue&type=template&id=f00dea6a&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      _vm.lcyShow = false
    }

    _vm.e1 = function($event) {
      _vm.lcyShow = false
    }
  }
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 213:
/*!**************************************************************************************************************************!*\
  !*** C:/Users/panli/Documents/HBuilderProjects/NM/pages/main/myAccount/luckyDraw/luckyDraw.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_luckyDraw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./luckyDraw.vue?vue&type=script&lang=js& */ 214);
/* harmony import */ var _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_luckyDraw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_luckyDraw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_luckyDraw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_luckyDraw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_luckyDraw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 214:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/panli/Documents/HBuilderProjects/NM/pages/main/myAccount/luckyDraw/luckyDraw.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var cmdNavBar = function cmdNavBar() {return __webpack_require__.e(/*! import() | components/cmd-nav-bar/cmd-nav-bar */ "components/cmd-nav-bar/cmd-nav-bar").then(__webpack_require__.bind(null, /*! @/components/cmd-nav-bar/cmd-nav-bar.vue */ 411));};var _default =




























































































{
  components: { cmdNavBar: cmdNavBar },
  data: function data() {
    return {
      awardsConfig: {
        chance: true, //是否有抽奖机会
        lists: [] //奖品列表 
      },
      awardsList: {},
      animationData: {},
      btnDisabled: '',
      thanksarr: [], //存储谢谢参与的索引
      chishu: 0,
      mold: 1,
      myPrizelist: [],

      lcyShow: false };

  },
  onLoad: function onLoad() {
    // 获取奖品列表
    this.initdata(this);
  },
  onReady: function onReady(e) {

  },
  methods: {
    // 邀请好友
    getmyPrize: function getmyPrize() {

    },
    // 初始化抽奖数据
    initdata: function initdata(that) {
      //服务器数据
      var data = {
        "lists": [
        {
          "mold": 1, //  1 积分转盘抽奖     2现金转盘抽奖
          "type": 1, // 1积分  2经验   3现金
          "name": "1万", //  名称
          "amount": "1.00", //  数额
          "scale": "0.60", //  中奖比例
          "createtime": 1553651469 },

        {
          "name": "3万" },

        {
          "name": "5万" },

        {
          "name": "8万" },

        {
          "name": "15万" },

        {
          "name": "20万" },

        {
          "name": "30万" }],


        "luckdraw": 1 // 用户剩余抽奖次数
      };

      that.awardsConfig = data;
      that.chishu = data.luckdraw;
      // 获取奖品的个数
      var awarrlength = that.awardsConfig.lists.length;
      // push 谢谢参与奖项
      for (var i = 0; i <= 0; i++) {
        that.thanksarr.push(i);
        that.awardsConfig.lists.splice(i, 0, {
          name: '谢谢参与',
          type: 0 });

      }
      // 为每一项追加index属性
      that.awardsConfig.lists.forEach(function (element, index) {
        element.index = index;
      });

      // 画转盘
      that.drawAwardRoundel();
    },
    //画抽奖圆盘  
    drawAwardRoundel: function drawAwardRoundel() {
      // 拿到奖品列表
      var awards = this.awardsConfig.lists;
      var awardsList = [];
      // 每份奖品所占角度
      var turnNum = 1 / awards.length * 360; // 文字旋转 turn 值  
      // 奖项列表  
      for (var i = 0; i < awards.length; i++) {
        awardsList.push({
          turn: i * turnNum + 'deg', //每个奖品块旋转的角度
          lineTurn: i * turnNum + turnNum / 2 + 'deg', //奖品分割线的旋转角度
          award: awards[i].name, //奖品的名字,
          type: awards[i].type,
          id: awards[i].type });

      }
      this.btnDisabled = this.chishu ? '' : 'disabled';
      this.awardsList = awardsList;
    },
    //发起抽奖  
    playReward: function playReward() {
      var that = this;
      if (this.chishu == 0) {
        uni.showToast({
          title: '抽奖次数已经用完',
          icon: 'none' });

        return;
      }
      this.chishu--;
      var awardIndex = 1;
      //中奖index  
      var awardsNum = that.awardsConfig.lists;
      // var awardIndex = 1 || Math.round(Math.random() * (awardsNum.length - 1)); //随机数  
      var runNum = 4; //旋转8周  
      var duration = 4000; //时长  
      // 旋转角度  
      that.runDeg = that.runDeg || 0;
      var preDeg = that.runDeg;
      that.runDeg = that.runDeg + (360 - that.runDeg % 360) + (360 * runNum - awardIndex * (360 / awardsNum.length)) + 1;
      //创建动画  
      var animationRun = uni.createAnimation({
        duration: duration,
        timingFunction: 'ease' });

      animationRun.rotate(that.runDeg).step();
      that.animationData = animationRun.export();
      setTimeout(function () {
        // uni.showModal({
        // 	title: '恭喜',
        // 	content: '获得' + (that.awardsConfig.lists[awardIndex].name),
        // 	showCancel: false,
        // 	success:function(){
        // 		// 置空style  否则动画不生效
        // 		setTimeout(function(){
        // 			document.getElementById('zhuanpano').style=''
        // 		},1000)
        // 	}
        // });
        that.lcyShow = true;
        that.btnDisabled = '';
      }.bind(that), duration);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 215:
/*!***********************************************************************************************************************************************************!*\
  !*** C:/Users/panli/Documents/HBuilderProjects/NM/pages/main/myAccount/luckyDraw/luckyDraw.vue?vue&type=style&index=0&id=f00dea6a&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_luckyDraw_vue_vue_type_style_index_0_id_f00dea6a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./luckyDraw.vue?vue&type=style&index=0&id=f00dea6a&lang=scss&scoped=true& */ 216);
/* harmony import */ var _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_luckyDraw_vue_vue_type_style_index_0_id_f00dea6a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_luckyDraw_vue_vue_type_style_index_0_id_f00dea6a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_luckyDraw_vue_vue_type_style_index_0_id_f00dea6a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_luckyDraw_vue_vue_type_style_index_0_id_f00dea6a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_luckyDraw_vue_vue_type_style_index_0_id_f00dea6a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 216:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/panli/Documents/HBuilderProjects/NM/pages/main/myAccount/luckyDraw/luckyDraw.vue?vue&type=style&index=0&id=f00dea6a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[209,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/main/myAccount/luckyDraw/luckyDraw.js.map