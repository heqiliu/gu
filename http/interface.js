/**
 * 通用uni-app网络请求
 * 基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截
 */

import store from '../store.js'
import md5 from 'js-md5'

export default {

	config: {
		baseUrl : store.state.webPath,
		header: {
			// 请求头信息
			// 'Content-Type':'application/json;charset=UTF-8',
			// 'Content-Type':'application/x-www-form-urlencoded',
			// 'token': store.state.userInfo.token
		},  
		data: {},
		method: "GET",
		dataType: "json",  /* 如设为json，会对返回的数据做一次 JSON.parse */
		responseType: "text",
		success() {},
		fail() {},
		complete() {}
	},
	interceptor: {
		request: null,
		response: null
	},
	request(options) {
		if (!options) {
			options = {}
		}
		options.baseUrl = options.baseUrl || this.config.baseUrl
		options.dataType = options.dataType || this.config.dataType
		options.url = options.baseUrl + options.url
		options.data = options.data || {}
		options.method = options.method || this.config.method
		//TODO 加密数据
		
		//TODO 数据签名
		/* 
		_token = {'token': getStorage(STOREKEY_LOGIN).token || 'undefined'},
		_sign = {'sign': sign(JSON.stringify(options.data))}
		options.header = Object.assign({}, options.header, _token,_sign) 
		*/
	   
		
		// if(!store.state.hasLogin){
		// 	uni.redirectTo({
		// 		url : '/pages/checkpoint/login/login?msg=登录态过期',
		// 	})
		// 	return false;
		// }
	   
		// ascii排序后MD5加密
		let dataObj = options.data;
		let ascArr = [];
		for (let key in dataObj) {
			ascArr.push(dataObj[key]);
		}
		let ascStr = md5('caidao' + ascArr.sort().join('') + 'celue');
		
		
		options.header = {
		    'token' : store.state.userInfo.token,
			'signature' : ascStr
		}
		
		//注册时需要单独添加请求头
		if(options.isRe != undefined){
			options.header = {
			    'token' : store.state.userInfo.token,
				'identifier' : options.isRe,
				// 'signature' : ascStr
			}
		}
		
		return new Promise((resolve, reject) => {
			let _config = null
			
			options.complete = (response) => {
				let statusCode = response.statusCode
				response.config = _config
				if (process.env.NODE_ENV === 'development') {
					if (statusCode === 200) {
						// console.log("【" + _config.requestId + "】 结果：" + JSON.stringify(response.data))
					}
				}
				if (this.interceptor.response) {
					let newResponse = this.interceptor.response(response)
					if (newResponse) {
						response = newResponse
					}
				}
				// 统一的响应日志记录
				_reslog(response);
				if (statusCode === 200) { //成功
					uni.hideLoading();
					// ************** 状态码统一处理
					// console.log(response.data);
					// if(response.data.success == false && response.data.status == 4004){
					// 	//退出登录，并且返回登录页面
					// 	store.commit('userGoOut','')
					// 	uni.redirectTo({
					// 		url : '/pages/checkpoint/login/login?msg=登录状态过期,请重新登录',
					// 	})
					// }
					
					if(response.data.success == false && response.data.message != '删除会员收藏的股票信息成功'){
						uni.showToast({
							title: response.data.message,
							position: 'bottom',
							icon: 'none',
							duration: 2500
						})
						return;
					}
					
					//加密比对
					// if(response.data.data.signature != '' && response.data.data.signature != undefined){
					// 	let sigStr = response.data.data.signature;
					// 	let dataObj = response.data.data;
					// 	let ascArr = [];
					// 	for (let key in dataObj) {
					// 		if(key != 'signature'){
					// 			ascArr.push(dataObj[key]);
					// 		}
					// 	}
					// 	let ascStr = md5('caidao' + ascArr.sort().join('') + 'celue');
					// 	console.error(ascStr);
					// 	if(ascStr != sigStr){
					// 		uni.showToast({
					// 			title: '数据异常！',
					// 			position: 'bottom',
					// 			icon: 'none',
					// 			duration: 2500
					// 		})
					// 		return;
					// 	}
					// }
					
					resolve(response);
				}
				// else if(response.data.success == false && response.data.status == 4004){
				// 		//token错误
				// 		//退出登录，并且返回登录页面
				// 		store.commit('userGoOut','')
				// 		uni.redirectTo({
				// 			url : '/pages/checkpoint/login/login?msg=登录状态过期,请重新登录',
				// 		})
				// }
				 else {
					uni.hideLoading();
					reject(response)
				}
				
			}

			_config = Object.assign({}, this.config, options)
			_config.requestId = new Date().getTime()

			if (this.interceptor.request) {
				this.interceptor.request(_config)
			}
			
			// 统一的请求日志记录
			_reqlog(_config)
			
			if (process.env.NODE_ENV === 'development') {
				// console.log("【" + _config.requestId + "】 地址：" + _config.url)
				if (_config.data) {
					// console.log("【" + _config.requestId + "】 参数：" + JSON.stringify(_config.data))
				}
			}

			uni.request(_config);
		});
	},
	get(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'GET'  
		return this.request(options)
	},
	post(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	},
	put(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'PUT'
		return this.request(options)
	},
	delete(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'DELETE'
		return this.request(options)
	}
}


/**
 * 请求接口日志记录
 */
function _reqlog(req) {
	if (process.env.NODE_ENV === 'development') {
		console.log("【" + req.requestId + "】 地址：" + req.url)
		if (req.data) {
			console.log("【" + req.requestId + "】 请求参数：" + JSON.stringify(req.data))
		}
	}
	//TODO 调接口异步写入日志数据库
}

/**
 * 响应接口日志记录
 */
function _reslog(res) {
	let _statusCode = res.statusCode;
	if (process.env.NODE_ENV === 'development') {
		console.log("【" + res.config.requestId + "】 地址：" + res.config.url)
		if (res.config.data) {
			// console.log("【" + res.config.requestId + "】 请求参数：", JSON.stringify(res.config.data))
		}
		// console.warn("【" + res.config.requestId + "】 响应结果：",JSON.stringify(res))
		console.warn("【" + res.config.requestId + "】 响应结果2：",res)
	}
	//TODO 除了接口服务错误外，其他日志调接口异步写入日志数据库
	switch(_statusCode){
		case 200:
			break;
		case 401:
			break;
		case 404:
			break;
		default:
			break;
	}
}

