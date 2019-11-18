<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar background-color="linear-gradient(to right, #EF9435, #E95E28)" title="交易" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
		<view class="assetOverview">
			<view class="assContent">
				<view class="assList">
					<view>
						<text>总净资产</text>
						<text>{{mainTransData.balance.quota | isundefined}}元</text>
					</view>
					<view>
						<text>可用本金</text>
						<text>{{mainTransData.balance.principal | isundefined}}元</text>
					</view>
					<view>
						<text>可买市值</text>
						<text>{{mainTransData.balance.surplus | isundefined}}元</text>
					</view>
				</view>
				<view class="assList">
					<view>
						<text>冻结本金</text>
						<text>{{mainTransData.balance.frozenSurplus | isundefined}}元</text>
					</view>
					<view>
						<text>持仓市值</text>
						<text>{{mainTransData.marketValue | isundefined}}元</text>
					</view>
					<view>
						<text>持仓盈亏</text>
						<text>{{mainTransData.rise | isundefined}}元</text>
					</view>
				</view>
			</view>
		</view>
		<view class="manageCost">
			明日递延费={{mainTransData.dayFee.toFixed(2)}}元
		</view>
		<view class="funsBox">
			<navigator url="/pages/main/transaction/buy/buy">
				<view class="lis">
					<view class="lisImg" style="background: #9BD8BF;">
						<image :src="imgArray.icon1" mode=""></image>
					</view>
					<text>买入</text>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/sale/sale">
				<view class="lis">
					<view class="lisImg" style="background: #C071F7;">
						<image :src="imgArray.icon2" mode=""></image>
					</view>
					<text>卖出</text>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/withdrawal/withdrawal">
				<view class="lis">
					<view class="lisImg" style="background: #E6C66C;">
						<image :src="imgArray.icon3" mode=""></image>
					</view>
					<text>撤单</text>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/position/position">
				<view class="lis">
					<view class="lisImg" style="background: #ED7166;">
						<image :src="imgArray.icon4" mode=""></image>
					</view>
					<text>持仓</text>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/todayEntrust/todayEntrust">
				<view class="lis">
					<view class="lisImg" style="background: #EF9073;">
						<image :src="imgArray.icon5" mode=""></image>
					</view>
					<text>当日委托</text>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/todayClinch/todayClinch">
				<view class="lis">
					<view class="lisImg" style="background: #F2C44B;">
						<image :src="imgArray.icon6" mode=""></image>
					</view>
					<text>当日成交</text>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/historyEntrust/historyEntrust">
				<view class="lis">
					<view class="lisImg" style="background: #83CE93;">
						<image :src="imgArray.icon7" mode=""></image>
					</view>
					<text>历史委托</text>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/historyClinch/historyClinch">
				<view class="lis">
					<view class="lisImg" style="background: #EF9073;">
						<image :src="imgArray.icon8" mode=""></image>
					</view>
					<text>历史成交</text>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/capitalFlow/capitalFlow">
				<view class="lis">
					<view class="lisImg" style="background: #8994EA;">
						<image :src="imgArray.icon9" mode=""></image>
					</view>
					<text>资金流水</text>
				</view>
			</navigator>
			<navigator url="/pages/main/myAccount/pay/pay">
				<view class="lis">
					<view class="lisImg" style="background: #EF8838;">
						<image :src="imgArray.icon10" mode=""></image>
					</view>
					<text>我要充值</text>
				</view>
			</navigator>
			<view class="lis" @click="goCash">
				<view class="lisImg" style="background: #57BFE6;">
					<image :src="imgArray.icon11" mode=""></image>
				</view>
				<text>申请提现</text>
			</view>
			<navigator url="/pages/main/transaction/cashBack/cashBack">
				<view class="lis">
					<view class="lisImg" style="background: #8994EA;">
						<image :src="imgArray.icon12" mode=""></image>
					</view>
					<text>活动返现</text>
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
		data() {
			return {
				imgArray : {
					icon1 : require('../../../static/icon/ico_buy.png'),
					icon2 : require('../../../static/icon/ico_sell.png'),
					icon3 : require('../../../static/icon/ico_kill.png'),
					icon4 : require('../../../static/icon/ico_posit.png'),
					icon5 : require('../../../static/icon/ico_depute.png'),
					icon6 : require('../../../static/icon/ico_deal.png'),
					icon7 : require('../../../static/icon/ico_depute_his.png'),
					icon8 : require('../../../static/icon/ico_deal_his.png'),
					icon9 : require('../../../static/icon/ico_flow.png'),
					icon10 : require('../../../static/icon/ico_rechar.png'),
					icon11 : require('../../../static/icon/ico_withdraw.png'),
					icon12 : require('../../../static/icon/ico_fx.png'),
				},
				isBank : false
			};
		},
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
			http.get('bindBankCard/tobind',{phone:this.$store.state.userInfo.phone}).then((res)=>{
				if(res.data.data.bankCardList.length > 0){
					this.isBank = true;
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
							http.get('member/logout').then((res)=>{
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
	.content{
		/*距离顶部范围应该在88-95范围内*/
		/*  #ifdef  APP-PLUS  */
		padding-top: 90upx;
		/*  #endif  */
		top: var(--status-bar-height);
	}
	.assetOverview{
		width: 100%;
		.assContent{
			width: 680upx;
			margin: 0 auto;
			.assList{
				width: 100%;
				height: 200upx;
				padding-top: 45upx;
				box-sizing: border-box;
				border-bottom: 2upx solid #d8d8d8;
				view{
					width: 33.3%;
					float: left;
					height: 100upx;
					border-left: 2upx solid #d8d8d8;
					box-sizing: border-box;
					text{
						display: block;						width: 100%;
						text-align: center;
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
	}
	.funsBox{
		width: 100%;
		.lis{
			width: 25%;
			float: left;
			height: 180upx;
			padding-top: 35upx;
			.lisImg{
				width: 100upx;
				height: 100upx;
				margin: 0 auto;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				image{
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
			}
			
		}
	}
	
</style>
