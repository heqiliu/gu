 
 import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * 
 * 我的#   FF6D28   FF9226
 * 账号13265862654 密码1164052421pl
 * 客户
 * 账号13600425811 密码abc123456
 * 测试登录账户
 * 18188184328 l12345678
 */

export default new Vuex.Store({
	state: {
		//服务器地址
		    // webPath: 'http://192.168.5.101:8015/',
		  // webPath: 'http://cds688.com:8011/',
			webPath: 'http://szcaimi.com:8015/',
			// webPath:'http://gzb168.com.cn:8015/',
		
		//是否登录
		hasLogin: false,
		//用户信息
		userInfo: {
			//账户
			phone: '',
			//token
			token: '',
			//会员权限
			power:false,
		},
		//是否显示过AI页面弹窗
		isShowAIDialog: true,
		//首页默认展示页
		mainPageNum: '1',
		//存储主页四大板块数据 数据缓存
		mainIndexData: {},
		mainStockData: {}, 
		mainPoolData: {
			goldStocks: [{}, {}, {}, {}, {}],
		},
		mainTransData: {},
		mainMydata: {},
		//分享领红包是否提示
		// shareTipsNum: 3
	},
	mutations: {
		//登录
		userIsLogin(state, obj) { 
			state.hasLogin = true;
			
			state.userInfo = obj;
			//console.log(obj);
			//将用户信息保存在本地  
			uni.setStorage({
				key: 'userLoginInfo',
				data: obj
			})
		},
		//登出
		userGoOut(state, obj) {
			state.hasLogin = false;
			state.userInfo.power = false;
			state.userInfo = {};
			state.isShowAIDialog = false;
			uni.removeStorage({
				key: 'userLoginInfo'
			})
		},
		//设置弹窗为已弹出
		isShowAIDialog(state) {
			state.isShowAIDialog = true;
		},

		mainPageNumUpdate(state, num) {
			state.mainPageNum = num
		},
		mainIndexDataUpdate(state, obj) {
			state.mainIndexData = obj
		},
		mainStockDataUpdate(state, obj) {
			state.mainStockData = obj
		},
		mainPoolDataUpdate(state, obj) {
			state.mainPoolData = obj
		},
		mainarticleDataUpdate(state, obj) {
			state.mainarticleData = obj
		},
		
		mainTransDataUpdate(state, obj) {
			state.mainTransData = obj
		},
		mainMydataUpdate(state, obj) {
			state.mainMydata = obj
		}
	},
	actions: {

	}
})
