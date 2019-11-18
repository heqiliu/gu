<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar back background-color="#FF8554" title="资金转入" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
		<view class="moneyView">
			<view class="yp">月配账户余额</view>
			<view class="jr">
				<text>0</text>
				元
			</view>
		</view>
		<view class="moneyView">
			<view class="yp">天配账户余额</view>
			<view class="jr">
				<text>0</text>
				元
			</view>
		</view>
		<view class="prompt">
			提示：
			<text>支付转入将从www.nmw668.com主站余额转出相应资金，请确保您在主站有足够的余额。</text>
			有问题请联系我们的客服人员。
		</view>
	</view>
</template>

<script>
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	export default {
		components: {cmdNavBar},
		data() {
			return {
				
			};
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
		padding-bottom: 95upx;
		background: #fbfbfb;
		height: 100%;
	}
	.moneyView{
		width: 100%;
		background: #fdf5db;
		height: 90upx;
		line-height: 90upx;
		padding: 0 30upx;
		box-sizing: border-box;
		font-size: 28upx;
		color: #16181b;
		.yp{
			float: left;
		}
		.jr{
			float: right;
			text{
				color: #e94642;
				padding-right: 12upx;
			}
		}
	}
	.prompt{
		background: #fff;
		padding: 30upx;
		box-sizing: border-box;
		font-size: 30upx;
		border-bottom: 2upx solid #e3e3e3;
		text{
			color: #e71c0c;
		}
	}
</style>
