<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar class="nav-bar" :fixed="false" back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="持仓" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
		
		<view class="tb">
			<view class="tbson thTop">
				<view style="width: 20%;">名称/代码</view>
				<view style="width: 20%;">盈亏/比例</view>
				<view style="width: 20%;">持仓/可用</view>
				<view style="width: 20%;">成本/现价</view>
				<view style="width: 20%;">市值/操作</view>
			</view>
			<view class="tbson td" v-for="(el,i) in posData" :key="i">
				<view>
					<text>{{el.stockName}}\n</text> 
					<text>{{el.stockCode}}</text>
				</view>
				<view style="line-height: 44upx;">
					<text>{{el.profitAndLoss}}\n</text>
					<text>{{el.lossThan}}%</text>
				</view>
				<view style="line-height: 44upx;">
					<text>{{el.freezeNumber+el.sharesNumber}}\n</text>
					<text>{{el.sharesNumber}}</text>
				</view>
				<view style="line-height: 44upx;">
					<text>{{el.costPrice}}\n</text>
					<text>{{el.currentPrice}}</text>
				</view>
				<view style="line-height: 44upx;">
					<text>{{el.marketValue}}\n</text>
					<text style="color: #0D8AE6;"  @click="jumpSells(el)">买入\</text>
					<text style="color: #0D8AE6;"  @click="jumpSell(el)">卖出</text>
				
				</view>
				<!-- <view style="width: 100%;height: 20upx;background: #a7a7a7;" > </view> -->
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
			jumpSell(el){
				let maxSale = el.sharesNumber;
				uni.navigateTo({
					url : '/pages/main/transaction/sale/sale?type=zxgp&stockCode='+el.stockCode+'&maxSale='+maxSale
				})
			},
			jumpSells(el){
				let maxSale = el.sharesNumber;
				uni.navigateTo({
					url : '/pages/main/transaction/buy/buy?type=zxgp&stockCode='+el.stockCode+'&maxSale='+maxSale
				})
			},
			
			//获取持有股票
			getHasStock(){
				uni.showLoading({
					mask:true
				})
				http.get('stock/hold/getList',{'pageInfo.size':100,'pageInfo.num':1,'pageInfo.isReturnPage':false}).then((res)=>{
					this.posData = res.data.data.records;
				})
			},
		},
		onLoad() {
			this.getHasStock();
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
		/*  #ifdef  APP-PLUS  */
		// top: var(--status-bar-height);
		/*  #endif  */
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
		// padding-bottom: 95upx;
		// background: #fbfbfb;
		// height: 100%;
	}
	
	.tb{
		padding-top: calc(var(--status-bar-height) + 90upx + 86upx);
		width: 100%;
		position: relative;
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
				width: 20%;
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
			// view:last-child{
			// 	box-sizing: border-box;
			// 	font-size: 25upx;
			// 	text{
			// 		width: 50%;
			// 		height: 100%;
			// 		float: left;
			// 		text-align: center;
			// 	}
			// 	text:nth-child(1){
			// 		color: #0D8AE6;
			// 	}
			// 	text:nth-child(2){
			// 		color: red;
			// 	}
			// }
		}
		.td:nth-child(2n-1){
			background: #fff;
		}
	}
</style>
