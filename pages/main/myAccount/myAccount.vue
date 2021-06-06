<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<!-- <view class="status-bar"></view> -->
			<!-- <cmd-nav-bar background-color="#1480ED" title="个人中心" iconTwo="reload" font-color="#fff"></cmd-nav-bar> -->
		<!-- #endif -->
		<view class="userInfo">
			<img class="userBack" mode="aspectFill" src="../../../static/img/account_bg.jpg"></img>
			<view class="userContent">
				<img class="userHead" src="../../../static/icon/default.jpg" mode=""></img>
				<view class="userName">
					<img src="../../../static/icon/ico_vip.png" mode=""></img>
					<text>{{phone || 'USER'}}</text>
				</view>
<!-- 				<view class="num">{{
					netAsset
				}}</view> -->
				<view class="num"></view>
				<!-- <view class="myMn">我的资产（元）</view> -->
				<view></view>
				<view class="assetsOpe">
				<!-- 	<navigator url="/pages/main/myAccount/pay/pay">
						<view class="btn">
							<text>充值</text>
						</view>
					</navigator> -->
					<!-- <view class="btn" @click="goCash">
						<text>提现</text>
					</view> -->
				</view>
			</view>
		</view>
		
		<view class="funList">
			<view class="lis" >
				<!-- 	<view class="lis" @click="goBindCard">  去掉触发方法-->
				<view class="funIcon">
					<!-- <img style="width:40upx;height:32upx" src="../../../static/icon/m_ntrue.png" mode=""></img> -->
				</view>
				<view class="funName">
				<!-- 	实名认证 -->
				</view>
				<view class="funRight">
					<!-- <img src="../../../static/icon/bar_right.png" mode=""></img> -->
				</view>
				<view class="result">
				<!-- 	{{isBindIdCard == 2 || isBindIdCard == 0 ? '未认证' : '已认证'}} -->
				</view>
			</view>
			<view class="lis" >
				<!-- <view class="lis" @click="goBindBank"> -->
				<view class="funIcon">
					<!-- <img src="../../../static/icon/m_bank.png" mode=""></img> -->
				</view>
				<view class="funName">
					<!-- 绑定钱包 -->
				</view>
				<view class="funRight">
					<!-- <img src="../../../static/icon/bar_right.png" mode=""></img> -->
				</view>
				<view class="result">
					<!-- 已绑定 -->
				</view>
			</view>
	
		</view>
		<view class="funList">
			<!-- <navigator url="/pages/main/myAccount/luckyDraw/luckyDraw">
				<view class="lis">
					<view class="funIcon">
						<image :src="imgArray.funImg4" mode=""></image>
					</view>
					<view class="funName">
						奖励合约
					</view>
					<view class="funRight">
						<image :src="imgArray.funRight" mode=""></image>
					</view>
				</view>
			</navigator> -->
			
	<!-- 		<navigator url="/pages/main/myAccount/helpCenter/helpCenter">
				<view class="lis">
					<view class="funIcon">
						<img src="../../../static/icon/m_help.png" mode=""></img>
					</view>
					<view class="funName">
						帮助中心
					</view>
					<view class="funRight">
						<img src="../../../static/icon/bar_right.png" mode=""></img>
					</view>
				</view>
			</navigator> -->
		</view>
		<view class="funList">
			<navigator url="/pages/main/myAccount/changePassword/changePassword">
				<view class="lis">
					<view class="funIcon">
						<img src="../../../static/icon/m_mpass.png" mode=""></img>
					</view>
					<view class="funName">
						修改密码
					</view>
					<view class="funRight">
						<img src="../../../static/icon/bar_right.png" mode=""></img>
					</view>
				</view>
			</navigator>
			<navigator url="/pages/main/myAccount/myDownload/myDownload">
				<view class="lis">
					<view class="funIcon">
						<img src="../../../static/icon/m_share.png" mode=""></img>
					</view>
					<view class="funName">
						扫码下载
					</view>
					<view class="funRight">
						<img src="../../../static/icon/bar_right.png" mode=""></img>
					</view>
				</view>
			</navigator>
			<navigator url="/pages/main/myAccount/myMessage/myMessage?title=信息">
				<view class="lis">
					<view class="funIcon">
						<img src="../../../static/icon/m_free2.png" mode=""></img>
					</view>
					<view class="funName">
						我的信息
					</view>
					<view class="funCount" v-if="msgCount > 0">
						{{msgCount}}
					</view>
					<view class="funRight">
						<img src="../../../static/icon/bar_right.png" mode=""></img>
					</view>
				</view>
			</navigator>
		<!-- 	<navigator url="/pages/main/myAccount/cancellation/cancellation">
				<view class="lis">
					<view class="funIcon">
						<img src="../../../static/icon/cancellation.png" mode=""></img>
					</view>
					<view class="funName">
						注销账户
					</view>
					<view class="funRight">
						<img src="../../../static/icon/bar_right.png" mode=""></img>
					</view>
				</view>
			</navigator> -->
		</view>
		
		<view v-show="this.thisLocalityVersion != this.onLineVersion" class="testVersion" @click="testVersion()">
			版本升级
		</view>
		<view class="logout" @click="logout()">
			退出登录
		</view>
		<!-- 检测版本 -->
		<view style="height:26upx"></view>
	</view>
</template>

<script>
	import http from '@/http/interface.js'
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	export default {
		components: {cmdNavBar},
		data() {
			return {
				imgArray : {
					userBack : require('../../../static/img/account_bg.jpg'),
					userHead : require('../../../static/icon/default.jpg'),
					vip : require('../../../static/icon/ico_vip.png'),
					funImg1 : require('../../../static/icon/m_ntrue.png'),
					funImg2 : require('../../../static/icon/m_bank.png'),
					funImg3 : require('../../../static/icon/m_mpass.png'),
					funImg4 : require('../../../static/icon/m_free.png'),
					funImg5 : require('../../../static/icon/m_share.png'),
					funImg6 : require('../../../static/icon/m_help.png'),
					funImg7 : require('../../../static/icon/m_free2.png'),
					funImg8 : require('../../../static/icon/cancellation.png'),
					funRight : require('../../../static/icon/bar_right.png')
				},
				//是否绑定了身份证  0未校验  1已绑定  2未绑定
				isBindIdCard : 0,
				//消息
				msgCount : 0,
				//是否绑定银行卡
				isBank : false,
				//银行身份证银行卡信息等等
				userCardIdInfo : '',
				//本地APP版本
				thisLocalityVersion :null,
				//线上APP版本
				onLineVersion : null,
				//用户手机号
				phone : this.$store.state.userInfo.phone,
				//用户净资产
				netAsset: this.$store.state.mainTransData.netAsset,
				
				showHb : false
			};
		},
		computed:{
			userData(){
				return this.$store.state.mainTransData;
			},
			userPhone(){
				return this.$store.state.userInfo.phone;
			}
		},
		mounted() {
			//获取线上APP版本
			http.get('appVersion').then((res)=>{
				this.onLineVersion = res.data.data;
			});
			/**plus.runtime.getProperty(plus.runtime.appid,(wgtinfo)=>{
			this.thisLocalityVersion=wgtinfo.version;
			})**/
			// 获取本地应用资源版本号，因为测试时反应缓慢，所以暂时放弃，以后再找办法处理
			// plus.runtime.getProperty(plus.runtime.appid,function(inf){
			// 	this.thisLocalityVersion = inf.version;  //获取当前版本号
			// });
			// 获取用户个人信息
			http.get('user/assets').then((res)=>{
				this.$store.commit('mainTransDataUpdate',res.data.data)
			})
			
			//是否实名认证 银行卡
			http.get('user/details/getById',{}).then((res)=>{
				this.userCardIdInfo = res.data.data;
				if(res.data.data.realName != '' || res.data.data.idNumber != ""){
					this.isBindIdCard = 1;
				}else{
					this.isBindIdCard = 2;
				}
			})
			
			http.get('user/wallet/getList',{}).then((res)=>{
				if(res.data.data.records.length > 0){
					this.isBank = true;
				}
			})
			
			//获取用户消息
			http.get('home/getMessage',{phone:this.$store.state.userInfo.phone,flag:'N'}).then((res)=>{
				this.msgCount = res.data.data.length;
			})
			
			},
			
		onShow() {
            this.phoneNumShow()
		},

		methods : {
			
			 //隐藏手机号
			phoneNumShow () {
			let that = this;
			let number = this.phone; //获取到手机号码字段
			console.log('手机号', this.phone)
			let mphone = number.substring(0, 3) + '****' + number.substring(7);
			that.phone = mphone
			 },
			//跳转到绑定身份证界面
			goBindCard(){
				if(this.isBindIdCard == 1){
					uni.showModal({
						showCancel:false,
						title:'提示',
						content:'已认证'
					})
					return;
				}
				uni.navigateTo({
					url : '/pages/main/myAccount/verified/verified'
				})
			},
			//去提现
			goCash(){
				if(!this.isBank){
					uni.showModal({
						showCancel:false,
						content:'请先绑定银行卡'
					})
					return;
				}
				uni.navigateTo({
					url : '/pages/main/myAccount/cash/cash'
				})
			},
			//跳转到银行卡界面
			goBindBank(){
				if(this.isBindIdCard == 0 || this.isBindIdCard == 2){
					uni.showModal({
						showCancel:false,
						title:'提示',
						content:'请先进行实名认证'
					})
					return;
				}
				uni.navigateTo({
					url : '/pages/main/myAccount/bankCard/bankCard?userName=' + this.userCardIdInfo.realName + '&userIdCard=' + this.userCardIdInfo.idNumber
				})
			},
			logout(){
				uni.showLoading({
					title : '退出登录中 ~'
				})
				http.get('quit').then((res)=>{
					this.$store.commit('mainPageNumUpdate',1);
					this.$store.commit('userGoOut',{});
					uni.reLaunch({
						url: '/pages/checkpoint/login/login'
					});
				})
			},
			// 检测版本
			
			testVersion(){
				// uni.showLoading({
				// 	title : '检测版本中 ~'
				// });
				
				// let _this = this;
				// // plus.runtime.getProperty(plus.runtime.appid,function(inf){
				// // 	_this.thisLocalityVersion = inf.version;  //获取当前版本号
				// // });
				// if(this.onLineVersion != null &&  _this.onLineVersion.trim() != _this.thisLocalityVersion.trim()){
					// uni.showModal({
					// 	title: '版本升级',
					// 	content: '当前版本为' + this.thisLocalityVersion +',线上版本为'+ this.onLineVersion + ',版本不一致是否升级？\n静默下载完成后会提示安装',
					// 	success: function(res) {
					// 			if (res.confirm) {
					// 				uni.showLoading({
					// 					title: '下载中~'
					// 				});
					// 				//判断是否是安卓
					// 				uni.getSystemInfo({
					//                     success:(res) => {
					//                         if(res.platform=="android"){  
					//                             //调用升级方法
					// 							_this.up();
					//                         }
					//                     }
					//                 });
					// 			} else if (res.cancel) {
									
					// 			}
					// 		}
					// 	});
				// }else{
				// 	uni.showModal({
				// 		showCancel:false,
				// 		title:'提示',
				// 		content:'已是最新版本，不用升级'
				// 	})
				// }
				http.get('appVersion').then((res)=>{
					this.onLineVersion = res.data.data;
				});
				var version=this.onLineVersion;
			var appid=this.thisLocalityVersion;
			var that = this;
						plus.runtime.getProperty(appid,function(info){//传入appid，可获取app的版本信息等参数，function里面的info是回调参数，包含了返回的一些参数。详细用法可查阅官方文档
												//alert('本地当前版本号：'+info.version+'服务器版本号：'+resp.version);
												//比较版本大小，进行更新，下面需要先转换一下格式，例如转换之前是：1.0.8，转换之后是108
												 var serverVersion = parseInt(appid.replace(/\./g,''));//把所有点替换成空字符,并转成整数
												 var currentVersion = parseInt(version.replace(/\./g,''));
												if(currentVersion!= serverVersion){//如果服务器版本大于本地版本，则进行更新，否则结束更新
													uni.showModal({
														title: '版本升级',
														content: '当前版本为' + serverVersion +',线上版本为'+ currentVersion + ',版本不一致是否升级？\n静默下载完成后会提示安装',
														success: function(res) {
																if (res.confirm) {
																	uni.showLoading({
																		title: '下载中~'
																	});
																	//判断是否是安卓
																	uni.getSystemInfo({
													                    success:(res) => {
													                        if(res.platform=="android"){  
													                            //调用升级方法
																				that.downloadWgt();
													                        }
													                    }
													                });
																} else if (res.cancel) {
																	
																}
															}
														});
												}else{
													alert('当前已是最新版本');
												}
											});
										
				
			},
			downloadWgt(){
				 plus.nativeUI.showWaiting('正在下载更新文件...');//为了用户体验友好，打开一个菊花等待框，告诉用户正在下载文件
				var that = this;
				var wgtUrl=this.$store.state.webPath + "appDown?mobileType=ANDROID";
					
					//新建一个下载任务，注意此时只是新建，并没有启动
			
				// var wgtUrl="http://cds688.com:8011/home/caimiduoduo/app/CaiMiDuoDuo.apk";
				  plus.downloader.createDownload( wgtUrl, {filename:'_downloads/download/'}, function(d,status){
				     if ( status == 200 ) {
						 plus.nativeUI.closeWaiting();
				          that.installWgt(d.filename); // 安装wgt方法
				      } else {
						   plus.nativeUI.closeWaiting();
				          plus.nativeUI.alert("下载wgt失败！");
				      }
				  }).start();
				// http.get('appDowns',{
				// }).then((res)=>{
				// 	that.installWgt(filename);
					
				// })
				},
			installWgt(filename){
				//开始安装
				plus.runtime.install(filename,{},function(){//安装成功的话
					plus.nativeUI.alert('应用资源更新完成!',function(){
						//安装成功后重启app
						plus.runtime.restart();
					});
				},function(e){//安装失败的话
						plus.nativeUI.alert('安装失败！',e.message);
				});
			},
			// up(){
			 	// var url=this.$store.state.webPath + "appDown?mobileType=ANDROID";
			// 	var dtask = plus.downloader.createDownload(url, {}, function ( d, status ) {  
			// 		// 下载完成  
			// 		if ( status == 200 ) {   
			// 		plus.runtime.install(plus.io.convertLocalFileSystemURL(d.filename),{},{},function(error){
			// 			uni.showToast({  
			// 					title: '安装失败',  
			// 					mask: false,  
			// 					duration: 1500  
			//                 });  
			//             })  
			//         } else {
			// 			console.log(error);
			// 			uni.showToast({  
			// 				title: '更新失败',  
			// 				mask: false,  
			// 				duration: 1500  
			// 			});
			// 		}
			// 	});
			// 	dtask.start();
			// },
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		/*距离顶部范围应该在88-95范围内*/
		/*  #ifdef  APP-PLUS  */
		// padding-top: 90upx;
		/*  #endif  */
		// top: var(--status-bar-height);
		// background: #e9e9e9;
		height: 100%;
		padding-bottom: 40upx;
	}
	.userInfo{
		width: 100%;
		height: 650upx;
		position: relative;
		.userBack{
			display: block;
			width: 100%;
			height: 650upx;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 2;
		}
		.userContent{
			display: block;
			width: 100%;
			height: 650upx;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 4;
			padding-top: 120upx;
			box-sizing: border-box;
			text-align: center;
			color: #fff;
			.userHead{
				display: block;
				width: 170upx;
				height: 170upx;
				margin: 0 auto;
				border-radius: 50%;
				border: 6upx solid #f2f2f4;
			}
			.userName{
				display: block;
				width: 100%;
				text-align: center;
				color: #fff;
				font-size: 34upx;
				margin-top: 40upx;
				img{
					vertical-align:middle;
					width: 60upx;
					height: 50upx;
				}
				text{
					padding-left: 20upx;
				}
			}
			.num{
				font-size: 42upx;
			}
			.myMn{
				font-size: 28upx;
			}
		}
	}
	.assetsOpe{
		width: 100%;
		height: 100upx;
		margin-top: 30upx;
		.btn{
			width: 50%;
			height: 100upx;
			float: left;
			box-sizing: border-box;
			display: flex;
			justify-content: center;
			align-items: center;
			text{
				display: block;
				width: 186upx;
				height: 60upx;
				border: 2upx solid #fff;
				border-radius: 10upx;
				text-align: center;
				line-height: 60upx;
				font-size: 32upx;
				color: #fff;
				box-sizing: border-box;
			}
		}
	}
	.funList{
		width: 100%;
		background: #fff;
		margin-top: 20upx;
		.lis{
			width: 100%;
			height: 88upx;
			background: #fff;
			border-bottom: 2upx solid #e6e6e6;
			line-height: 88upx;
			.funIcon{
				width: 90upx;
				height: 88upx;
				display: flex;
				justify-content: center;
				align-items: center;
				float: left;
				img{
					display: block;
					width: 54upx;
					height: 54upx;
				}
			}
			.funName{
				height: 88upx;
				color: #3f3f3f;
				text-align: left;
				float: left;
				font-size: 28upx;
			}
			.funCount{
				float: left;
				width: 30upx;
				height: 30upx;
				background: #d34a34;
				color: #fff;
				text-align: center;
				line-height: 30upx;
				font-size: 18upx;
				border-radius: 50%;
				margin-top: 27upx;
				margin-left: 15upx;
			}
			.funRight{
				width: 50upx;
				height: 88upx;
				display: flex;
				justify-content: center;
				align-items: center;
				float: right;
				img{
					display: block;
					width: 18upx;
					height: 28upx;
					padding-right:30upx;
				}
			}
			.result{
				color: #8f8f8f;
				font-size: 26upx;
				height: 88upx;
				float: right;
			}
		}
	}
	.logout{
		width: 678upx;
		height: 84upx;
		background: #d34a34;
		border-radius: 10upx;
		color: #fff;
		text-align: center;
		line-height: 84upx;
		margin: 0 auto;
		margin-top: 26upx;
		font-size: 30upx;
	}
	.testVersion{
		width: 678upx;
		height: 84upx;
		background: #d38c3a;
		border-radius: 10upx;
		color: #fff;
		text-align: center;
		line-height: 84upx;
		margin: 0 auto;
		margin-top: 26upx;
		font-size: 30upx;
		// display: none;
	}
</style>
