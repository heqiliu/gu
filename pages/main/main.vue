<template>
	<view class="contentMain">
		<scroll-view class="container" scroll-y scroll-top="1">
			<home v-if="pageNum == 1"></home>
			<optionalStock v-if="pageNum == 2"></optionalStock>
			<stockPool v-if="pageNum == 3"></stockPool>
			<transaction v-if="pageNum == 4"></transaction>
			<myAccount v-if="pageNum == 5"></myAccount>
		</scroll-view>
		<view class="bottomNav">
			<ul>
				<li @click="changePage(1)" :class="pageNum == 1 ? 'isTask' : ''">
					<image v-if="pageNum != 1" src="../../static/icon/m_home.png" mode=""></image>
					<image v-if="pageNum == 1" src="../../static/icon/m_home_h.png" mode=""></image>
					<span>首页</span>
				</li>
				
				<li @click="changePage(2)" :class="pageNum == 2 ? 'isTask' : ''">
					<image v-if="pageNum != 2" src="../../static/icon/m-zx.png" mode=""></image>
					<image v-if="pageNum == 2" src="../../static/icon/m-zx-h.png" mode=""></image>
					<span>自选股票</span>
				</li>
				<!-- <li @click="changePage(3)" :class="pageNum == 3 ? 'isTask' : ''"> -->
				<li @click="changePage(3)" class='isTask'> 
					<view class="tu">
						<!-- <image v-if="pageNum != 3" src="../../static/icon/m_gp.png" mode=""></image> -->
						<!-- <image v-if="pageNum == 3" src="../../static/icon/m_gp_h.png" mode=""></image> -->
						<image src="../../static/icon/mc.png" mode=""></image>
					</view>
					<image src="../../static/icon/m_gp.png" style="opacity: 0;" mode=""></image>
					<span>AI智能选股</span>	
				</li>
				<li @click="changePage(4)" :class="pageNum == 4 ? 'isTask' : ''">
					<image v-if="pageNum != 4" src="../../static/icon/m_stock.png" mode=""></image>
					<image v-if="pageNum == 4" src="../../static/icon/m_stock_h.png" mode=""></image>
					<span>交易</span>
				</li>
				<li @click="changePage(5)" :class="pageNum == 5 ? 'isTask' : ''">
					<image v-if="pageNum != 5"  src="../../static/icon/m_account.png" mode=""></image>
					<image v-if="pageNum == 5" src="../../static/icon/m_account_h.png" mode=""></image>
					<span>我的账户</span>
				</li>
			</ul>
		</view>
		<view class="bottomTu">
			
		</view>
	</view>
</template>

<script>
	import home from './home/home'
	import myAccount from './myAccount/myAccount'
	import optionalStock from './optionalStock/optionalStock'
	import transaction from './transaction/transaction'
	import stockPool from './stockPool/stockPool'
	import http from '@/http/interface.js'
	
	export default {
		components: { home , myAccount , optionalStock , transaction , stockPool},
		
		data() {
			return {
				pageNum : 1,
				transDataSet : "",
				showBanalTip :0,
			}
		},
		computed: {
		    mainPageNum () {
				return this.$store.state.mainPageNum;
		    }
		},
		onLoad() {
			//
			this.pageNum = this.$store.state.mainPageNum;
			let _this = this;
			_this.initData();
			this.transDataSet = setInterval(()=>{
				if(_this.$store.state.hasLogin){
					_this.initData();
				}
			},3000)
			
		},
		onUnload() {
			clearInterval(this.transDataSet)
		},
		onShow() {
			//获取主页四大板块数据
			this.initMain();
		},
		mounted() {
			
		},
		methods: {
			changePage(num){
				this.pageNum = num;
				this.$store.commit('mainPageNumUpdate',num);
			},
			initMain(){
				
			},
			//交易数据轮询
			initData(){
				// console.log("交易轮询");
				if(this.$store.state.userInfo.token == null || this.$store.state.userInfo.token == ''){
					console.log("缺少token，终止轮询");
					this.$store.commit('userGoOut', {});
					uni.reLaunch({
							//url : '/pages/checkpoint/login/login?msg=token失效，请重新登录'
							url : '/pages/checkpoint/login/login'
					});
					return;
				}
				http.get('user/assets',{}).then((res)=>{
					// console.log("res.data.data:"+res);
					this.$store.commit('mainTransDataUpdate',res.data.data)
					let balance=res.data.data.balance;
					// let _this=this;
					// let principal=balance.principal;
					// if(parseFloat(principal) <= 0 && _this.showBanalTip < 1){
					// 	uni.showToast({
					// 		title : '您当前可用余额为：'+principal+'；请尽快充值！',
					// 		icon:'none',
					// 		duration:5000,
					// 		complete(res){
					// 			_this.showBanalTip=_this.showBanalTip+1;
					// 			console.log("this.showBanalTip"+_this.showBanalTip)
					// 		}
					// 	})
					// }
					
				})
			}
		},
		watch: {
			mainPageNum(newval,oldval){
				this.pageNum = newval;
			}
		}
	}
</script>

<style lang="scss">
	.contentMain{
		height: 100%;
		background: #fbfbfb;
	}
	.container{
		height: calc(100% - 100upx);
		// overflow-y: scroll;
		// -webkit-overflow-scrolling: touch;
		width: 100%;
		text-align: center;
		// background: #333333
	}
	.bottomNav{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 99upx;
		background: #ffffff;
		border-top: 1upx solid #ffffff;
		box-shadow: 0upx 0upx 7upx #C3C3C3;
		z-index: 999;
		ul{
			margin: 0;
			padding: 0;
			width: 100%;
			height: 100%;
			li{
				float: left;
				list-style: none;
				width: 20%;
				height: 100%;
				position: relative;
				
				image{
					width: 48upx;
					height: 48upx;
					display: block;
					margin: 0 auto;
					margin-top: 10upx;
				}
				.tu{
					width: 90upx;
					height: 90upx;
					background: #fff;
					position: absolute;
					left: 0;
					right: 0;
					top: -26upx;
					margin: 0 auto;
					border-radius: 50%;
					image{
						width: 80upx;
						height: 80upx;
						display: block;
						margin-top: 5rpx;
					}
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
					font-size: 24upx;
					color: #b9b9b9;
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
					color: #FF6D28;
				}
			}
		}
	}
	.bottomTu{
		position: fixed;
		width: 90upx;
		height: 90upx;
		background: #fff;
		left: 0;
		right: 0;
		margin: 0 auto;
		bottom: 40upx;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0upx 0upx 7upx #A0A0A0;
		// border:1upx solid #FF6D28;
	}
</style>
