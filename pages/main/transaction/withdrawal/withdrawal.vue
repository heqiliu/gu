<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="撤单" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
		<view class="tb">
			<view class="tbson thTop">
				<view>代码</view>
				<view>时间/方向</view>
				<view>价格/数量</view>
				<view>状态/操作</view>
			</view>
			<view class="tbson td" v-for="(el,i) in withDataBuys" :key="i">
				<view>{{el.stockCode}}</view>
				<!-- <view>{{el.buyDate | timeZhuan}} 买入</view> -->
				<view>{{el.buyDate}} 买入</view>
				<view>{{el.price}}元/{{el.amount}}</view>
				<view>
					<text>{{el.flag == 'S' ? '成功' : ''}}{{el.flag == 'F' ? '失败' : ''}}{{el.flag == 'C' ? '已撤单' : ''}}{{el.flag == 'N' ? '交易中 ' : ''}}{{el.flag == 'W' ? '撤单中' : ''}}</text>
					<text @click="cancelStock(el,'buy')">{{el.flag != 'N' ? '' : ' 撤单'}}</text>
				</view>
			</view>
			<view class="tbson td" v-for="(el,i) in withDataSells" :key="i">
				<view>{{el.stockCode}}</view>
				<!-- <view>{{el.sellDate | timeZhuan}} 卖出</view> -->
				<view>{{el.sellDate}} 卖出</view>
				<view>{{el.price}}元/{{el.amount}}</view>
				<view>
					<text>{{el.flag == 'S' ? '成功' : ''}}{{el.flag == 'F' ? '失败' : ''}}{{el.flag == 'C' ? '已撤单' : ''}}{{el.flag == 'N' ? '交易中 ' : ''}}{{el.flag == 'W' ? '撤单中' : ''}}</text>
					<text @click="cancelStock(el,'sell')">{{el.flag != 'N' ? '  ' : ' 撤单'}}</text>
				</view>
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
				withDataBuys : [],
				withDataSells : []
			};
		},
		methods: {
			cancelStock(el,type){
				if(el.flag != 'N'){
					return;
				}
				let _this = this;
				uni.showModal({
					title: '请确认',
					content: '是否撤单？',
					success: function (res) {
						if (res.confirm) {
							http.get('transaction/cancel',{id:el.id,type:type}).then((res)=>{
								uni.showModal({
									title : '提示',
									content : '撤单成功',
									showCancel : false,
								})
								_this.init();
							})
						} else if (res.cancel) {
							
						}
					}
				});
			},
			init(){
				uni.showLoading({
					mask:true
				})
				http.get('transaction/tocancel',{phone:this.$store.state.userInfo.phone}).then((res)=>{
					this.withDataBuys = res.data.data.buys;
					this.withDataSells = res.data.data.sells;
				})
			}
		},
		onLoad() {
			this.init();
		},
		filters: {
	　　　　 timeZhuan(value) {
				   return value.substring(0,10);
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
				float: left;
				height: 86upx;
			}
			view:nth-child(1){
				width: 15%;
			}
			view:nth-child(2){
				width: 35%;
			}
			view:nth-child(3){
				width: 25%;
			}
			view:nth-child(4){
				width: 25%;
			}
		}
		.thTop{
			width: 100%;
			height: 86upx;
			// position: fixed;
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
			font-size: 21upx;
			view:last-child{
				font-size: 25upx;
				box-sizing: border-box;
				text{
					float: left;
					text-align: center;
					margin-right: 15upx;
				}
				text:nth-child(0){
					color: #0D8AE6;
				}
				text:nth-child(1){
					color: red;
				}
			}
		}
		.td:nth-child(2n-1){
			background: #fff;
		}
	}
</style>
