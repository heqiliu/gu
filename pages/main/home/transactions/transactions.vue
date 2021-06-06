<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar class="nav-bar" :fixed="false" back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="场外期权" font-color="#fff"></cmd-nav-bar>
	<!-- #endif -->
	
	<view class="bottomNav">
		<ul>
			<li @click="jump('/pages/main/home/home',1)" :class="pageNum == 1 ? 'isTask' : ''">
				<span>交易</span>
			</li>
			<li @click="jump('/pages/main/optionalStock/optionalStock',2)" :class="pageNum == 2 ? 'isTask' : ''">
				<span>行情</span>
			</li>
			<li @click="jump('/pages/main/transaction/transaction',3)" :class="pageNum == 3 ? 'isTask' : ''">
				<span>自选</span>
			</li>
			<li @click="jump('/pages/main/myAccount/myAccount',4)" :class="pageNum == 4 ? 'isTask' : ''">
				<span>查询</span>
			</li>
		</ul>
	</view>
		<view class="assetOverview">
			<view class="assContent">
				<view class="assList">
					<navigator url="/pages/main/transaction/todayEntrust/todayEntrust">
					<view>
						<img src="../../../../static/icon/ico_rechar.png" mode=""></img>
						<text>快速下单</text>
					</view>
					</navigator>
					<navigator url="/pages/main/transaction/withdrawal/withdrawal">
					<view>
						<img src="../../../../static/icon/ico_sell.png" mode=""></img>
						<text>行权</text>
					</view>
					</navigator>
					<navigator url="/pages/main/transaction/historyEntrust/historyEntrust">
					<view>
						<img src="../../../../static/icon/ico_posit.png" mode=""></img>
						<text>持仓</text>
					</view>
					</navigator>
					<navigator url="/pages/main/transaction/capitalFlow/capitalFlow">
					<view>
						<img src="../../../../static/icon/ico_kill.png" mode=""></img>
						<text>可撤委托</text>
					</view>
					</navigator>
				</view>
			</view>
		</view>
		<view class="funsBox">
			<navigator url="/pages/main/home/buys/buys">
				<view class="lis">
					<view class="lisImg" style="background: #9BD8BF;">
						<img src="../../../../static/icon/ico_buy.png" mode=""></img>
					</view>
					<text>买入开仓</text>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/sale/sale">
				<view class="lis">
					<view class="lisImg" style="background: #C071F7;">
						<img src="../../../../static/icon/ico_sell.png" mode=""></img>
					</view>
					<text>卖出平仓</text>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/withdrawal/withdrawal">
				<view class="lis">
					<view class="lisImg" style="background: #E6C66C;">
						<img src="../../../../static/icon/ico_kill.png" mode=""></img>
					</view>
					<text>卖出开仓</text>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/position/position">
				<view class="lis">
					<view class="lisImg" style="background: #ED7166;">
						<img src="../../../../static/icon/ico_posit.png" mode=""></img>
					</view>
					<text>买入平仓</text>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/todayEntrust/todayEntrust">
				<view class="lis">
					<view class="lisImg" style="background: #EF9073;">
						<img src="../../../../static/icon/ico_depute.png" mode=""></img>
					</view>
					<text>备兑开仓</text>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/todayClinch/todayClinch">
				<view class="lis">
					<view class="lisImg" style="background: #F2C44B;">
						<img src="../../../../static/icon/ico_deal.png" mode=""></img>
					</view>
					<text>备兑平仓</text>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/historyEntrust/historyEntrust">
				<view class="lis">
					<view class="lisImg" style="background: #83CE93;">
						<img src="../../../../static/icon/ico_depute_his.png" mode=""></img>
					</view>
					<text>备兑券锁定</text>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/historyClinch/historyClinch">
				<view class="lis">
					<view class="lisImg" style="background: #EF9073;">
						<img src="../../../../static/icon/ico_deal_his.png" mode=""></img>
					</view>
					<text>备兑券解锁</text>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/capitalFlow/capitalFlow">
				<view class="lis">
					<view class="lisImg" style="background: #8994EA;">
						<img src="../../../../static/icon/ico_flow.png" mode=""></img>
					</view>
					<text>当日委托</text>
				</view>
			</navigator>
			<navigator url="/pages/main/myAccount/pay/pay">
				<view class="lis">
					<view class="lisImg" style="background: #EF8838;">
						<img src="../../../../static/icon/ico_rechar.png" mode=""></img>
					</view>
					<text>备兑股份</text>
				</view>
			</navigator>
			<view class="lis" @click="goCash">
				<view class="lisImg" style="background: #57BFE6;">
					<img src="../../../../static/icon/ico_withdraw.png" mode=""></img>
				</view>
				<text>设置</text>
			</view>
			<navigator url="/pages/main/transaction/cashBack/cashBack">
				<view class="lis">
					<view class="lisImg" style="background: #8994EA;">
						<img src="../../../../static/icon/ico_fx.png" mode=""></img>
					</view>
					<text>我的资产</text>
				</view>
			</navigator>
			<view style="clear:both"></view>
		</view>
	</view>
</template>

<script>
	import http from '@/http/interface.js'
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	export default {
		components: {cmdNavBar},
		// data() {
		// 	return {
		// 		imgArray : {
		// 			icon1 : require('../../../static/icon/ico_buy.png'),
		// 			icon2 : require('../../../static/icon/ico_sell.png'),
		// 			icon3 : require('../../../static/icon/ico_kill.png'),
		// 			icon4 : require('../../../static/icon/ico_posit.png'),
		// 			icon5 : require('../../../static/icon/ico_depute.png'),
		// 			icon6 : require('../../../static/icon/ico_deal.png'),
		// 			icon7 : require('../../../static/icon/ico_depute_his.png'),
		// 			icon8 : require('../../../static/icon/ico_deal_his.png'),
		// 			icon9 : require('../../../static/icon/ico_flow.png'),
		// 			icon10 : require('../../../static/icon/ico_rechar.png'),
		// 			icon11 : require('../../../static/icon/ico_withdraw.png'),
		// 			icon12 : require('../../../static/icon/ico_fx.png'),
		// 		},
		// 		isBank : false
		// 	};
		// },
		filters:{
			isundefined(val){
				return (parseInt( val * 100 ) / 100 ).toFixed(2);
			}
		},
		computed:{
			mainTransData(){
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
			//是否银行卡
			http.get('user/wallet/getList',{}).then((res)=>{
				if(res.data.data.records.length > 0){
					this.isBank = true;
				}
			});
			var _self = this;
			
			uni.getStorage({
				key: "shareTipsNum",
				success(e) {
					// _self.userPhoneNum = JSON.parse(e.data) ? JSON.parse(e.data) : [] //这就是你想要取的token
					
					if(e.data != undefined && e.data != null && e.data > 0){
						try {
							uni.setStorage({
								key: "shareTipsNum",
								data: e.data - 1
								// data: JSON.stringify(this.userPhoneNum)
							});
							uni.showModal({
								title : '温馨提示',
								content : '亲，分享五个群再领取一个红包，详情咨询客服',
								showCancel : false,
							});
						} catch (e2) {
							//TODO handle the exception
						}
					}
					
				}
			})
		},
		methods:{
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
			jump(url,take){
				if(this.pageNum == take){
					return;
				}
				uni.navigateTo({
					url : url,
					animationType : 'none'
				})
			},
			jumpMonth(){
				let _this = this;
				uni.showModal({
					title:'提示',
					content:'是否切换账户？',
					success(res) {
						if(res.confirm){
							uni.showLoading({
								title : '退出登录中 ~'
							})
							http.get('logout').then((res)=>{
								_this.$store.commit('mainPageNumUpdate',1);
								_this.$store.commit('userGoOut',{});
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
.status-bar{
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
	.nav-bar{
		position: fixed;
		// top: var(--status-bar-height);
		left: 0;
		z-index:2;
		width: 100%;
	}
	.content{
		/*距离顶部范围应该在88-95范围内*/
		/*  #ifdef  APP-PLUS  */
		// padding-top: 90upx;
		/*  #endif  */
		// top: var(--status-bar-height);
	}
	
	.assetOverview{
		padding-top: calc(var(--status-bar-height) + 200upx);
		width: 100%;
		background: #d63d54;
		.assContent{
			width: 680upx;
			margin: 0 auto;
			.assList{
				width: 100%;
				height: 200upx;
				// padding-top: 45upx;
				box-sizing: border-box;
				// border-bottom: 2upx solid #d8d8d8;
				view{
					width: 25%;
					float: left;
					height: 200upx;
					// border-left: 2upx solid #d8d8d8;
					box-sizing: border-box;
					
					img{
						display: block;
						width: 80%;
						height: 120upx;
					}
					text{
						display: block;						width: 100%;
						text-align: center;
						margin-top: 30upx;
						color: #ffffff;
					}
					text:nth-child(1){
						font-size: 30upx;
						color: #616161;
					}
					text:nth-child(2){
						font-size: 28upx;
						color: #FF6D28;
						margin-top: 16upx;
					}
					text:nth-child(3){
						font-size: 28upx;
						color: #FF6D28;
						margin-top: 16upx;
					}
				}
				view:nth-child(1){
					border: none;
				}
			}
		}
	}
	.manageCost{
		width: 100%;
		height: 130upx;
		line-height: 130upx;
		border-bottom: 2upx solid #d8d8d8;
		font-size: 32upx;
		color: #e94c10;
		text-align:center;
	}
	.funsBox{
		width: 100%;
		.lis{
			width: 25%;
			float: left;
			height: 180upx;
			padding-top: 35upx;
			box-sizing: border-box;
			border-right: 2upx solid #d8d8d8;
			.lisImg{
				width: 100upx;
				height: 100upx;
				margin: 0 auto;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				img{
					display: block;
					width: 60upx;
					height: 60upx;
				}
			}
			text{
				display: block;
				margin-top: 30upx;
				color: #000;
				text-align: center;
				font-size: 28upx;
				border-bottom: 2upx solid #d8d8d8;
				box-sizing: border-box;
				border-right: 2upx solid #d8d8d8;
			}
			
		}
	}
	.bottomNav{
		position: fixed;
		top: 95upx;
		width: 100%;
		height: 80upx;
		background: #ffffff;
		border-top: 1upx solid #ffffff;
		ul{
			margin: 0;
			padding: 0;
			width: 100%;
			height: 100%;
			li{
				float: left;
				list-style: none;
				width: 25%;
				height: 100%;
				image{
					width: 48upx;
					height: 48upx;
					display: block;
					margin: 0 auto;
					margin-top: 10upx;
				}
				.is{
					display: none;
				}
				.nois{
					display: block;
				}
				span{
					display: block;
					width: 100%;
					text-align: center;
					font-size: 50upx;
					color: #8f8f8f;
					margin-top: 5upx;
				}
			}
			.isTask{
				.is{
					display: block;
				}
				.nois{
					display: none;
				}
				span{
					color: #ff7b2e;
				}
			}
		}
	}
</style>
