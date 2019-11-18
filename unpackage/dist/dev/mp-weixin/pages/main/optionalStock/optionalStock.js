(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/main/optionalStock/optionalStock"],{

/***/ 135:
/*!********************************************************************************************************************!*\
  !*** C:/Users/panli/Documents/HBuilderProjects/NM/main.js?{"page":"pages%2Fmain%2FoptionalStock%2FoptionalStock"} ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _optionalStock = _interopRequireDefault(__webpack_require__(/*! ./pages/main/optionalStock/optionalStock.vue */ 66));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_optionalStock.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 66:
/*!***********************************************************************************************!*\
  !*** C:/Users/panli/Documents/HBuilderProjects/NM/pages/main/optionalStock/optionalStock.vue ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _optionalStock_vue_vue_type_template_id_a98a1ae6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./optionalStock.vue?vue&type=template&id=a98a1ae6&scoped=true& */ 67);
/* harmony import */ var _optionalStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./optionalStock.vue?vue&type=script&lang=js& */ 69);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _optionalStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _optionalStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _optionalStock_vue_vue_type_style_index_0_id_a98a1ae6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./optionalStock.vue?vue&type=style&index=0&id=a98a1ae6&lang=scss&scoped=true& */ 73);
/* harmony import */ var _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 21);






/* normalize component */

var component = Object(_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _optionalStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _optionalStock_vue_vue_type_template_id_a98a1ae6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _optionalStock_vue_vue_type_template_id_a98a1ae6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a98a1ae6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/panli/Documents/HBuilderProjects/NM/pages/main/optionalStock/optionalStock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 67:
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/panli/Documents/HBuilderProjects/NM/pages/main/optionalStock/optionalStock.vue?vue&type=template&id=a98a1ae6&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_optionalStock_vue_vue_type_template_id_a98a1ae6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./optionalStock.vue?vue&type=template&id=a98a1ae6&scoped=true& */ 68);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_optionalStock_vue_vue_type_template_id_a98a1ae6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_optionalStock_vue_vue_type_template_id_a98a1ae6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 68:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/panli/Documents/HBuilderProjects/NM/pages/main/optionalStock/optionalStock.vue?vue&type=template&id=a98a1ae6&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var m0 = Number(_vm.stockMarketInfo.shmap.rise)

  var f0 = _vm._f("isundefined")(_vm.stockMarketInfo.shmap.marketName)

  var m1 = Number(_vm.stockMarketInfo.shmap.rise)

  var f1 = _vm._f("isundefined")(_vm.stockMarketInfo.shmap.marketPrice)

  var f2 = _vm._f("isundefined")(_vm.stockMarketInfo.shmap.rise)

  var m2 = Number(_vm.stockMarketInfo.shmap.rise)

  var f3 = _vm._f("isundefined")(_vm.stockMarketInfo.shmap.risePercent)

  var m3 = Number(_vm.stockMarketInfo.szmap.rise)

  var f4 = _vm._f("isundefined")(_vm.stockMarketInfo.szmap.marketName)

  var m4 = Number(_vm.stockMarketInfo.szmap.rise)

  var f5 = _vm._f("isundefined")(_vm.stockMarketInfo.szmap.marketPrice)

  var f6 = _vm._f("isundefined")(_vm.stockMarketInfo.szmap.rise)

  var m5 = Number(_vm.stockMarketInfo.szmap.rise)

  var f7 = _vm._f("isundefined")(_vm.stockMarketInfo.szmap.risePercent)

  var m6 = Number(_vm.stockMarketInfo.gemmap.rise)

  var f8 = _vm._f("isundefined")(_vm.stockMarketInfo.gemmap.marketName)

  var m7 = Number(_vm.stockMarketInfo.gemmap.rise)

  var f9 = _vm._f("isundefined")(_vm.stockMarketInfo.gemmap.marketPrice)

  var f10 = _vm._f("isundefined")(_vm.stockMarketInfo.gemmap.rise)

  var m8 = Number(_vm.stockMarketInfo.gemmap.rise)

  var f11 = _vm._f("isundefined")(_vm.stockMarketInfo.gemmap.risePercent)

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0,
        f0: f0,
        m1: m1,
        f1: f1,
        f2: f2,
        m2: m2,
        f3: f3,
        m3: m3,
        f4: f4,
        m4: m4,
        f5: f5,
        f6: f6,
        m5: m5,
        f7: f7,
        m6: m6,
        f8: f8,
        m7: m7,
        f9: f9,
        f10: f10,
        m8: m8,
        f11: f11
      }
    }
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 69:
/*!************************************************************************************************************************!*\
  !*** C:/Users/panli/Documents/HBuilderProjects/NM/pages/main/optionalStock/optionalStock.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_optionalStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./optionalStock.vue?vue&type=script&lang=js& */ 70);
/* harmony import */ var _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_optionalStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_optionalStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_optionalStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_optionalStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_optionalStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 70:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/panli/Documents/HBuilderProjects/NM/pages/main/optionalStock/optionalStock.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


































































var _interface = _interopRequireDefault(__webpack_require__(/*! @/http/interface.js */ 12));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var cmdNavBar = function cmdNavBar() {return __webpack_require__.e(/*! import() | components/cmd-nav-bar/cmd-nav-bar */ "components/cmd-nav-bar/cmd-nav-bar").then(__webpack_require__.bind(null, /*! @/components/cmd-nav-bar/cmd-nav-bar.vue */ 411));};var _default = { components: { cmdNavBar: cmdNavBar }, data: function data() {return { imgArray: { img1: __webpack_require__(/*! ../../../static/icon/refresh.jpg */ 71), img2: __webpack_require__(/*! ../../../static/icon/m_search.png */ 72) }, //各项指数
      stockMarketInfo: { shmap: { size: 0 }, szmap: { size: 0 }, gemmap: { size: 0 } }, //选入股票列表
      stocks: [] };}, filters: { isundefined: function isundefined(val) {return val == undefined ? '' : val;} }, computed: { listenMainStockData: function listenMainStockData() {return this.$store.state.mainStockData;} }, mounted: function mounted() {this.initData();if (this.$store.state.mainStockData.stockMarketInfo != undefined) {this.stockMarketInfo = this.$store.state.mainStockData.stockMarketInfo;this.stocks = this.$store.state.mainStockData.stocks;}}, watch: { listenMainStockData: function listenMainStockData(newval, oldval) {this.stockMarketInfo = newval.stockMarketInfo;this.stocks = newval.stocks;} }, methods: { jumpBuy: function jumpBuy(stockCode) {uni.navigateTo({ url: '/pages/main/transaction/buy/buy?type=zxgp&stockCode=' + stockCode });}, initData: function initData() {var _this2 = this;uni.showLoading({ mask: true });_interface.default.get('stock/findStocks', { phone: this.$store.state.userInfo.phone }).then(function (res) {_this2.$store.commit('mainStockDataUpdate', res.data.data);});}, delStock: function delStock(el) {var _this = this;uni.showModal({ title: '请确认', content: '是否删除【' + el.stockName + '/' + el.stockCode + '】', success: function success(res) {
          if (res.confirm) {
            uni.showLoading({
              mask: true });

            _interface.default.get('stock/delStock', { holder: _this.$store.state.userInfo.phone, stockCode: el.stockCode }).then(function (res) {
              uni.showModal({
                title: '提示',
                content: '操作成功',
                showCancel: false });

              _interface.default.get('stock/findStocks', { phone: _this.$store.state.userInfo.phone }).then(function (res) {
                _this.$store.commit('mainStockDataUpdate', res.data.data);
                _this.stockMarketInfo = _this.$store.state.mainStockData.stockMarketInfo;
                _this.stocks = _this.$store.state.mainStockData.stocks;
              });
            });
          } else if (res.cancel) {

          }
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 73:
/*!*********************************************************************************************************************************************************!*\
  !*** C:/Users/panli/Documents/HBuilderProjects/NM/pages/main/optionalStock/optionalStock.vue?vue&type=style&index=0&id=a98a1ae6&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_optionalStock_vue_vue_type_style_index_0_id_a98a1ae6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./optionalStock.vue?vue&type=style&index=0&id=a98a1ae6&lang=scss&scoped=true& */ 74);
/* harmony import */ var _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_optionalStock_vue_vue_type_style_index_0_id_a98a1ae6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_optionalStock_vue_vue_type_style_index_0_id_a98a1ae6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_optionalStock_vue_vue_type_style_index_0_id_a98a1ae6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_optionalStock_vue_vue_type_style_index_0_id_a98a1ae6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBX_HBuilderX_2_0_0_20190610_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_optionalStock_vue_vue_type_style_index_0_id_a98a1ae6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 74:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/panli/Documents/HBuilderProjects/NM/pages/main/optionalStock/optionalStock.vue?vue&type=style&index=0&id=a98a1ae6&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[135,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/main/optionalStock/optionalStock.js.map