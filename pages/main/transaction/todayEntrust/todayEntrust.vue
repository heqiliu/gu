<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="当日委托" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
		<view class="tb">
			<view class="tbson thTop">
				<view>时间/类型</view>
				<view>名称/代码</view>
				<view>价格/手续费</view>
				<view>状态</view>
			</view>
			<view class="tbson td" v-for="(el,i) in buysData" :key="i">
				<!-- <view>{{el.buyDate | timeZhuan}} 买入</view> -->
				<view>{{el.buyDate}} 买入</view>
				<view><text>{{el.stockName}}\n</text> <text>{{el.stockCode}}</text></view>
				<view>{{el.price}}元/{{el.serviceFee}}元</view>
				<view>
					{{el.flag == 'S' ? '成功' : ''}}
					{{el.flag == 'F' ? '失败' : ''}}
					{{el.flag == 'C' ? '已取消' : ''}}
					{{el.flag == 'CC' ? '撤单中' : ''}}
					{{el.flag == 'N' ? '交易中' : ''}}
				</view>
			</view>
			<view class="tbson td" v-for="(el,i) in sellData" :key="i">
				<!-- <view>{{el.sellDate | timeZhuan}}<br/>卖出</view> -->
				<view>{{el.sellDate}} 卖出<br/></view>
				<view><text>{{el.stockName}}\n</text> <text>{{el.stockCode}}</text></view>
				<view>{{el.price}}元/{{el.serviceFee}}元</view>
				<view>
					{{el.flag == 'S' ? '成功' : ''}}
					{{el.flag == 'F' ? '失败' : ''}}
					{{el.flag == 'C' ? '已取消' : ''}}
					{{el.flag == 'CC' ? '撤单中' : ''}}
					{{el.flag == 'N' ? '交易中' : ''}}
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
			const currentDate = this.getDate({
				format: true
			})
			return {
				date1: currentDate,
				date2: currentDate,
				buysData : [],
				sellData : []
			};
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		onLoad(){
			this.queryHistory();
		},
		filters: {
	　　　　 timeZhuan(value) {
				return value.substring(0,10);
	　　　　 }
	　　},
		methods: {
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			queryHistory(){
				uni.showLoading({
					mask:true
				})
				http.get('transaction/findTransactionRecord',{phone:this.$store.state.userInfo.phone,starTime:this.date1,endTime:this.date2}).then((res)=>{
					if(res.data.data.buys.length == 0 && res.data.data.sells.length == 0){
						uni.showModal({
							title : '提示',
							content : '今日无记录',
							showCancel : false,
						})
						return;
					}
					this.buysData = res.data.data.buys;
					this.sellData = res.data.data.sells;
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
			border-top: 1upx solid #d9d9d9;
			border-bottom: 1upx solid #d9d9d9;
			font-size: 25upx;
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
			top: calc(var(--status-bar-height));
			/*  #endif  */
			left: 0;
			background: #fbfbfb;
			z-index:2;
		}
		.td{
			border: none;
			background: #FBFBFB;
			font-weight: 400;
			view:nth-child(1),view:nth-child(2){
				line-height: 43upx;
			}
			view:last-child{
				box-sizing: border-box;
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
