<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
		<view class="status-bar"></view>
		<cmd-nav-bar class="nav-bar" :fixed="true" background-color="linear-gradient(to right, #EF9435, #E95E28)"
			title="交易" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
		<view class="assetOverview">
			<view class="assContent">
				<view class="userName" v-if="power">
					<img src="../../../static/icon/ico_vip.png" mode=""></img>
					<text>{{phone || 'USER'}}</text>
				</view>
				<view class="assList">
					<view>
						<text>总净资产</text>
						<text>{{mainTransData.netAsset | isundefined}}元</text>
					</view>
					<view>
						<text>可用本金</text>
						<text>{{mainTransData.usableMoney | isundefined}}元</text>
					</view>
					<view>
						<text>可买市值</text>
						<text>{{mainTransData.quota | isundefined}}元</text>
					</view>
				</view>
				<view class="assList">
					<view>
						<text>冻结本金</text>
						<text>{{mainTransData.freezeMoney | isundefined}}元</text>
					</view>
					<view>
						<text>持仓市值</text>
						<text>{{mainTransData.marketValue | isundefined}}元</text>
					</view>
					<view>
						<text>持仓盈亏</text>
						<text>{{mainTransData.profitAndLoss | isundefined}}元</text>
					</view>
				</view>
			</view>
		</view>
		<!--
		<view class="manageCost">
			明日递延费={{mainTransData.deferredFees}}元
		</view>
		-->
		<view class="funsBox">
			<navigator url="/pages/main/transaction/buy/buy">
				<view class="lis">
					<view class="lisImg" style="background: #9BD8BF;">
						<img src="../../../static/icon/ico_buy.png" mode=""></img>
					</view>
					<text>买入</text>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/sale/sale">
				<view class="lis">
					<view class="lisImg" style="background: #C071F7;">
						<img src="../../../static/icon/ico_sell.png" mode=""></img>
					</view>
					<text>卖出</text>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/withdrawal/withdrawal">
				<view class="lis">
					<view class="lisImg" style="background: #E6C66C;">
						<img src="../../../static/icon/ico_kill.png" mode=""></img>
					</view>
					<text>撤单</text>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/position/position">
				<view class="lis">
					<view class="lisImg" style="background: #ED7166;">
						<img src="../../../static/icon/ico_posit.png" mode=""></img>
					</view>
					<text>持仓</text>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/todayEntrust/todayEntrust">
				<view class="lis">
					<view class="lisImg" style="background: #EF9073;">
						<img src="../../../static/icon/ico_depute.png" mode=""></img>
					</view>
					<text>当日委托</text>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/todayClinch/todayClinch">
				<view class="lis">
					<view class="lisImg" style="background: #F2C44B;">
						<img src="../../../static/icon/ico_deal.png" mode=""></img>
					</view>
					<text>当日成交</text>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/historyEntrust/historyEntrust">
				<view class="lis">
					<view class="lisImg" style="background: #83CE93;">
						<img src="../../../static/icon/ico_depute_his.png" mode=""></img>
					</view>
					<text>历史委托</text>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/historyClinch/historyClinch">
				<view class="lis">
					<view class="lisImg" style="background: #EF9073;">
						<img src="../../../static/icon/ico_deal_his.png" mode=""></img>
					</view>
					<text>历史成交</text>
				</view>
			</navigator>
			<!--<navigator url="/pages/main/transaction/capitalFlow/capitalFlow">
				<view class="lis">
					<view class="lisImg" style="background: #8994EA;">
						<img src="../../../static/icon/ico_flow.png" mode=""></img>
					</view>
					<text>资金流水</text>
				</view>
			</navigator>
			-->
			<!-- <navigator url="/pages/main/myAccount/pay/pay">
				<view class="lis">
					<view class="lisImg" style="background: #EF8838;">
						<img src="../../../static/icon/ico_rechar.png" mode=""></img>
					</view>
					<text>我要充值</text>
				</view>
			</navigator>
			<view class="lis" @click="goCash">
				<view class="lisImg" style="background: #57BFE6;">
					<img src="../../../static/icon/ico_withdraw.png" mode=""></img>
				</view>
				<text>申请提现</text>
			</view>
			<navigator url="/pages/main/transaction/cashBack/cashBack">
				<view class="lis">
					<view class="lisImg" style="background: #8994EA;">
						<img src="../../../static/icon/ico_fx.png" mode=""></img>
					</view>
					<text>活动返现</text>
				</view>
			</navigator> -->
			<view style="clear:both"></view>
		</view>
	</view>
</template>

<script>
	import store from '@/store.js'
	import http from '@/http/interface.js'
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	export default {
		components: {
			cmdNavBar
		},
		data() {
			return {
				hasLogin: this.$store.state.userInfo.hasLogin,
				phone: this.$store.state.userInfo.phone,
				power: this.$store.state.userInfo.power,
				myToken: store.state.userInfo.token,
				imgArray: {
					icon1: require('../../../static/icon/ico_buy.png'),
					icon2: require('../../../static/icon/ico_sell.png'),
					icon3: require('../../../static/icon/ico_kill.png'),
					icon4: require('../../../static/icon/ico_posit.png'),
					icon5: require('../../../static/icon/ico_depute.png'),
					icon6: require('../../../static/icon/ico_deal.png'),
					icon7: require('../../../static/icon/ico_depute_his.png'),
					icon8: require('../../../static/icon/ico_deal_his.png'),
					icon9: require('../../../static/icon/ico_flow.png'),
					icon10: require('../../../static/icon/ico_rechar.png'),
					icon11: require('../../../static/icon/ico_withdraw.png'),
					icon12: require('../../../static/icon/ico_fx.png'),
				},
				isBank: false,
				power: store.state.userInfo.power
			};
		},
		onLoad(){
			console.log('有没有登录啊！',this.hasLogin);
		},
		filters: {
			isundefined(val) {
				return (parseInt(val * 100) / 100).toFixed(2);
			}
		},
		computed: {
			mainTransData() {
				return this.$store.state.mainTransData;
			}
		},
		created() {
			// let _this = this;
			// _this.initData();
			// setInterval(()=>{
			// 	_this.initData();
			// },3000)

		},
		mounted() {
			console.log('aaa', store.state.userInfo.token)
			console.log('bbb', store.state.userInfo.power)
			console.log('ccc', store.state.userInfo)
			//是否银行卡
			http.get('user/wallet/getList', {}).then((res) => {
				if (res.data.data.records.length > 0) {
					this.isBank = true;
				}
			});
			var _self = this;
			if (this.$store.state.userInfo.token == null || this.$store.state.userInfo.token == '') {
				console.log('用户未登陆');
				this.$store.commit('userGoOut', {});
				uni.showModal({
					title: "提示",
					showCancel: true,
					mask: true,
					content: '温馨提示：该功能为会员专享请先登录app！',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.redirectTo({
								url: '/pages/checkpoint/login/login',
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
							uni.navigateBack();
						}
					}
				})
				return;
			}
			http.get('user/assets', {}).then((res) => {
				
				// console.log("res.data.data:"+res);
				this.$store.commit('mainTransDataUpdate', res.data.data)
				let balance = res.data.data.balance;


			})



			uni.getStorage({
				key: "shareTipsNum",
				success(e) {
					// _self.userPhoneNum = JSON.parse(e.data) ? JSON.parse(e.data) : [] //这就是你想要取的token

					if (e.data != undefined && e.data != null && e.data > 0) {
						try {
							uni.setStorage({
								key: "shareTipsNum",
								data: e.data - 1
								// data: JSON.stringify(this.userPhoneNum)
							});
							uni.showModal({
								title: '温馨提示',
								content: '亲，分享五个群再领取一个红包，详情咨询客服',
								showCancel: false,
							});
						} catch (e2) {
							//TODO handle the exception
						}
					}

				}
			})
		},
		methods: {
			goCash() {
				if (!this.isBank) {
					uni.showModal({
						showCancel: false,
						content: '请先绑定银行卡'
					})
					return;
				}
				uni.navigateTo({
					url: '/pages/main/myAccount/cash/cash'
				})
			},

			jumpMonth() {
				let _this = this;
				uni.showModal({
					title: '提示',
					content: '是否切换账户？',
					success(res) {
						if (res.confirm) {
							uni.showLoading({
								title: '退出登录中 ~'
							})
							http.get('logout').then((res) => {
								_this.$store.commit('mainPageNumUpdate', 1);
								_this.$store.commit('userGoOut', {});
								uni.reLaunch({
									url: '/pages/checkpoint/login/login'
								});
							})
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.status-bar {
		box-sizing: border-box;
		display: block;
		width: 100%;
		margin-bottom: -3upx;
		height: var(--status-bar-height);
		line-height: var(--status-bar-height);
		position: fixed;
		top: 0;
		left: 0;
		background: linear-gradient(to right, #EF9435, #E95E28);
		z-index: 99;
	}

	.nav-bar {
		position: fixed;
		// top: var(--status-bar-height);
		left: 0;
		z-index: 2;
		width: 100%;
	}

	.content {
		/*距离顶部范围应该在88-95范围内*/
		/*  #ifdef  APP-PLUS  */
		// padding-top: 90upx;
		/*  #endif  */
		// top: var(--status-bar-height);
	}

	.assetOverview {
		padding-top: calc(var(--status-bar-height) + 90upx);

		color: #FFFFFF;
		/*background:#d34a43;*/

		background: linear-gradient(to bottom, #FF4500, #FF7256);

		width: 100%;

		.accountNumber {
			font-size: 30upx;
			text-align: center;
			padding-top: 20upx;
			height: 60upx;
			line-height: 60upx;

			.accountnumber {
				widht: 200upx;
				margin-left: 20upx;
				border: 2upx solid white;
				border-radius: 12upx;
				padding: 4upx 40upx;

			}
		}

		.loginAccount {
			font-size: 30upx;
			text-align: center;
			margin: 30upx auto;

			text {
				border: 2upx solid white;
				padding: 10upx 36upx;
				border-radius: 12upx;
			}
		}
		.assContent {
			width: 680upx;
			margin: 0 auto;

			.userName {
				margin: 30upx 0;

				display: block;
				width: 100%;
				text-align: center;
				color: #fff;
				font-size: 34upx;
				margin-top: 40upx;

				img {
					vertical-align: middle;
					width: 60upx;
					height: 50upx;
				}

				text {
					padding-left: 20upx;
				}
			}
			.assList {
				width: 100%;
				height: 140upx;
				padding-top: 20upx;
				box-sizing: border-box;
				border-bottom: 1upx solid #d8d8d8;
				view {
					color: #FFFFFF;
					width: 33.3%;
					float: left;
					height: 100upx;
					border-left: 1upx solid #d8d8d8;
					box-sizing: border-box;
					text {
						display: block;
						color: #FFFFFF;
						width: 100%;
						text-align: center;
					}

					text:nth-child(1) {
						font-size: 28upx;
					}

					text:nth-child(2) {
						font-size: 28upx;
						margin-top: 16upx;
					}
				}

				view:nth-child(1) {
					border: none;
				}
				view:nth-child(2) {
					border-left: 1upx solid #d8d8d8;
				}
			}
		}
	}

	.manageCost {
		width: 100%;
		height: 80upx;
		line-height: 130upx;
		border-bottom: 2upx solid #d8d8d8;
		font-size: 32upx;
		color: #e94c10;
	}

	.funsBox {
		width: 100%;
		.lis {
			width: 25%;
			float: left;
			height: 180upx;
			padding-top: 35upx;

			.lisImg {
				width: 90upx;
				height: 90upx;
				margin: 0 auto;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;

				img {
					display: block;
					width: 60upx;
					height: 60upx;
				}
			}

			text {
				display: block;
				margin-top: 30upx;
				color: #000;
				text-align: center;
				font-size: 28upx;
			}

		}
	}
</style>
