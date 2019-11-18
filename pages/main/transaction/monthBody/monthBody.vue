<template>
	<view class="monthBd">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<!-- <cmd-nav-bar back background-color="linear-gradient(to right, #FFBE9E, #FF8554)" :title="topTitle" font-color="#fff"></cmd-nav-bar> -->
			<cmd-nav-bar back background-color="#FF8554" :title="topTitle" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
		<view class="monthViewContent">
			<withInfo v-if="pageNum == 1"></withInfo>
			<trade v-if="pageNum == 2"></trade>
			<userCenter v-if="pageNum == 3"></userCenter>
		</view>
		<view class="monthBottomNav">
			<ul>
				<li @click="changePage(1)" :class="pageNum == 1 ? 'isTask' : ''">
					<image v-if="pageNum != 1" src="../../../../static/icon/massets.png" mode=""></image>
					<image v-if="pageNum == 1" src="../../../../static/icon/massets-is.png" mode=""></image>
					<span>按月配资</span>
				</li>
				<li @click="changePage(2)" :class="pageNum == 2 ? 'isTask' : ''">
					<image v-if="pageNum != 2" src="../../../../static/icon/trading.png" mode=""></image>
					<image v-if="pageNum == 2" src="../../../../static/icon/trading-is.png" mode=""></image>
					<span>我要交易</span>
				</li>
				<li @click="changePage(3)" :class="pageNum == 3 ? 'isTask' : ''">
					<image v-if="pageNum != 3" src="../../../../static/icon/account.png" mode=""></image>
					<image v-if="pageNum == 3" src="../../../../static/icon/account-is.png" mode=""></image>
					<span>账户中心</span>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	import withInfo from './withInfo/withInfo'
	import trade from './trade/trade'
	import userCenter from './userCenter/userCenter'
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	export default {
		components: {withInfo , trade , userCenter , cmdNavBar},
		data() {
			return {
				pageNum : 3,
				topTitle : '按月配资'
			};
		},
		methods:{
			changePage(num){
				this.pageNum = num;
				if(num == 1){
					this.topTitle = '按月配资';
				}else if(num == 2){
					this.topTitle = '我要交易';
				}else if(num == 3){
					this.topTitle = '账户中心';
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.monthBd{
		height: 100%;
		background: #f2f2f2;
		/*  #ifdef  APP-PLUS  */
		padding-top: 90upx;
		/*  #endif  */
		top: var(--status-bar-height);
		box-sizing: border-box;
	}
	.monthViewContent{
		width: 100%;
		height: calc(100% - 100upx);
		/*  #ifdef  APP-PLUS  */
		height: calc(100% - 100upx - 90upx);
		/*  #endif  */
	}
	.monthBottomNav{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100upx;
		background: linear-gradient(to bottom, #F9D9CE, #FFBA9D);
		// background: #F9D9CE;
		// box-shadow: 0upx 0upx 7upx #CE765E;
		z-index: 999;
		ul{
			margin: 0;
			padding: 0;
			width: 100%;
			height: 100%;
			li{
				float: left;
				list-style: none;
				width: 33.3%;
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
					font-size: 24upx;
					color: #CE765E;
					margin-top: 5upx;
					font-weight: 600;
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
					color: #983522;
				}
			}
		}
	}
</style>
