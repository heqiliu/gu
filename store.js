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
		// webPath : 'http://119.23.219.191:9090/',
		webPath : 'http://szcaimi.com:8080/',
		adminPath :'http://szcaimi.com:8088/',
		// webPath: 'http://192.168.0.15:8080/',
		// adminPath: 'http://192.168.0.15:8080/',
		//是否登录
		hasLogin: false,
		//用户信息
		userInfo: {
			//账户
			phone: '',
			//token
			token: '',
			//配资使用方式
			capitalType: '',
			//是否充值过
			isRecharged: 'N',
			//是否为代理  1001普通用户  1002一级代理  1003二级代理   1004三级代理
			agent: 0
		},
		//缓存的手机号
		// userPhoneNum: ["123456", "111111", "1000000"],
		//首页默认展示页
		mainPageNum: '1',
		//存储主页四大板块数据 数据缓存
		mainIndexData: {},
		mainStockData: {},
		mainPoolData: {
			goldStocks: [{}, {}, {}, {}, {}],
		},
		mainTransData: {},
		mainMydata: {}
	},
	mutations: {
		//登录
		userIsLogin(state, obj) {
			state.hasLogin = true;
			state.userInfo = obj;
			console.log(obj);
			//将用户信息保存在本地  
			uni.setStorage({
				key: 'userLoginInfo',
				data: obj
			})
		},
		//登出
		userGoOut(state, obj) {
			state.hasLogin = false;
			state.userInfo = {};
			uni.removeStorage({
				key: 'userLoginInfo'
			})
		},
		//添加缓存账号
		// userPhoneNum(state, num) {
		// 	state.userPhoneNum.unshift(num);
		// 	// if ($.inArray(num, arr) < 0) {
		// 	// 	state.userPhoneNum.unshift(num)
		// 	// }


		// 	if (state.userPhoneNum.length > 5) {
		// 		state.userPhoneNum.pop()
		// 	}

		// },
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
