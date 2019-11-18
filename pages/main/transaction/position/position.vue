<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="持仓" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
		<view class="tb">
			<view class="tbson thTop">
				<view>名称/代码</view>
				<view>数量/可用</view>
				<view>成本/现价</view>
				<view>市值/盈亏</view>
			</view>
			<view class="tbson td" v-for="(el,i) in posData" :key="i">
				<view><text>{{el.stockName}}\n</text> <text>{{el.stockCode}}</text></view>
				<view>{{el.amount + el.freeze}}/{{el.amount}}</view>
				<view>{{el.buyPrice}}/{{el.curPrice}}</view>
				<view>{{el.marketValue}}/{{el.rise}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	import http from '@/http/interface.js'
	export default {
		components: {cmdNavBar},
		data() {
			return {
				posData : []
			};
		},
		methods: {
			//获取持有股票
			getHasStock(){
				uni.showLoading({
					mask:true
				})
				http.get('transaction/findPosition',{phone:this.$store.state.userInfo.phone}).then((res)=>{
					this.posData = res.data.data;
				})
			},
		},
		onLoad() {
			this.getHasStock();
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
	.tb{
		width: 100%;
		position: relative;
		padding-top: 86upx;
		.tbson{
			width: 100%;
			text-align: center;
			line-height: 86upx;
			height: 86upx;
			color: #464646;
			border-bottom: 1upx solid #d9d9d9;
			font-size: 28upx;
			background: #fff;
			font-weight: 600;
			view{
				width: 25%;
				float: left;
				height: 86upx;
			}
		}
		.thTop{
			width: 100%;
			height: 86upx;
			position: fixed;
			top: 0;
			/*  #ifdef  APP-PLUS  */
			top: calc(var(--status-bar-height) + 90upx);
			/*  #endif  */
			left: 0;
			background: #fbfbfb;
			z-index:2;
		}
		.td{
			border: none;
			background: #FBFBFB;
			font-weight: 400;
			font-size: 26upx;
			view:first-child{
				line-height: 43upx;
			}
			view:last-child{
				box-sizing: border-box;
				font-size: 25upx;
				text{
					width: 50%;
					height: 100%;
					float: left;
					text-align: center;
				}
				text:nth-child(1){
					color: #0D8AE6;
				}
				text:nth-child(2){
					color: red;
				}
			}
		}
		.td:nth-child(2n-1){
			background: #fff;
		}
	}
</style>
