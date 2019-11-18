<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
		<view class="status-bar"></view>
		<cmd-nav-bar back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="历史委托" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
		<view class="timeSelectBox">
			<view class="tsbCont">
				<view class="timeStart">
					<picker mode="date" :value="date1" :start="startDate" :end="endDate" @change="bindDateChange1">
						<view class="uni-input">{{date1}}</view>
					</picker>
					<div class="kailong"></div>
				</view>
				<view class="trans">到</view>
				<view class="endStart">
					<picker mode="date" :value="date2" :start="startDate" :end="endDate" @change="bindDateChange2">
						<view class="uni-input">{{date2}}</view>
					</picker>
					<div class="kailong"></div>
				</view>
				<view class="querys" @click="queryHistory">
					<image src="../../../../static/icon/queryfdj.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="tb">
			<view class="tbson thTop">
				<view>时间/类型</view>
				<view>名称/代码</view>
				<view>价格/手续费</view>
				<view>状态</view>
			</view>
			<view class="tbson td" v-for="(el,i) in buysData" :key="i">
				<view>{{el.buyDate}} 买入</view>
				<view><text>{{el.stockName}}\n</text> <text>{{el.stockCode}}</text></view>
				<view>{{el.price}}/{{el.serviceFee}}</view>
				<view>
					{{el.flag == 'S' ? '成功' : ''}}
					{{el.flag == 'F' ? '失败' : ''}}
					{{el.flag == 'C' ? '撤单' : ''}}
					{{el.flag == 'W' ? '撤单中' : ''}}
					{{el.flag == 'N' ? '交易中' : ''}}
				</view>
			</view>
			<view class="tbson td" v-for="(el,i) in sellData" :key="i">
				<!-- <view>{{el.sellDate | timeZhuan}}<br/>卖出</view> -->
				<view>{{el.sellDate}} 卖出</view>
				<view><text>{{el.stockName}}\n</text> <text>{{el.stockCode}}</text></view>
				<view>{{el.price}}/{{el.serviceFee}}</view>
				<view>
					{{el.flag == 'S' ? '成功' : ''}}
					{{el.flag == 'F' ? '失败' : ''}}
					{{el.flag == 'C' ? '撤单' : ''}}
					{{el.flag == 'W' ? '撤单中' : ''}}
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
		components: {
			cmdNavBar
		},
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				date1: currentDate,
				date2: currentDate,
				buysData: [],
				sellData: []
			};
		},
		onLoad() {
			this.queryHistory();
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		filters: {
			timeZhuan(value) {
				return value.substring(0, 10);
			}
		},
		methods: {
			bindDateChange1: function(e) {
				this.date1 = e.target.value
			},
			bindDateChange2: function(e) {
				this.date2 = e.target.value
			},
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
			queryHistory() {
				// var oDate1 = new Date(this.date1);
				// var oDate2 = new Date(this.date2);
				// if(oDate1.getTime() > oDate2.getTime()){
				// 	uni.showModal({
				// 		title : '提示',
				// 		content : '查询日期顺序有误',
				// 		showCancel : false,
				// 	})
				// 	return
				// }
				uni.showLoading({
					mask: true
				})
				http.get('transaction/findTransactionRecord', {
					phone: this.$store.state.userInfo.phone
				}).then((res) => {
					if (res.data.data.buys.length == 0 && res.data.data.sells.length == 0) {
						uni.showModal({
							title: '提示',
							content: '该日期起始无记录',
							showCancel: false,
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
	.content {
		/*距离顶部范围应该在88-95范围内*/
		/*  #ifdef  APP-PLUS  */
		padding-top: 90upx;
		/*  #endif  */
		top: var(--status-bar-height);
		padding-bottom: 95upx;
		background: #fbfbfb;
		height: 100%;
	}

	.timeSelectBox {
		width: 100%;
		height: 100upx;
		background: #f5f5f5;
		padding-top: 25upx;
		box-sizing: border-box;
		position: fixed;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		top: calc(var(--status-bar-height) + 90upx);
		/*  #endif  */
		left: 0;
		z-index: 2;

		.tsbCont {
			width: calc(100% - 70upx);
			margin: 0 auto;

			.timeStart,
			.endStart {
				width: 270upx;
				height: 50upx;
				line-height: 50upx;
				border-radius: 10upx;
				border: 3upx solid #dadada;
				box-sizing: border-box;
				text-indent: 18upx;
				color: #000;
				font-size: 26upx;
				position: relative;
				float: left;

				.kailong {
					width: 0;
					height: 0;
					border-right: 16upx solid transparent;
					border-left: 16upx solid transparent;
					border-bottom: 16upx solid #dadada;
					position: absolute;
					right: -10upx;
					bottom: -2upx;
					transform: rotate(135deg);
				}
			}

			.trans {
				width: 60upx;
				height: 50upx;
				line-height: 50upx;
				float: left;
				text-align: center;
				color: #424242;
				font-size: 30upx;
			}

			.querys {
				display: flex;
				justify-content: center;
				align-items: center;
				float: right;
				width: 58upx;
				height: 50upx;

				image {
					display: block;
					height: 42upx;
					width: 42upx;
				}
			}
		}
	}

	.tb {
		width: 100%;
		position: relative;
		padding-top: 186upx;

		.tbson {
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

			view {
				width: 25%;
				float: left;
				height: 86upx;
			}
		}

		.thTop {
			width: 100%;
			height: 86upx;
			position: fixed;
			top: 100upx;
			/*  #ifdef  APP-PLUS  */
			top: calc(var(--status-bar-height) + 190upx);
			/*  #endif  */
			left: 0;
			background: #fbfbfb;
			z-index: 2;
		}

		.td {
			border: none;
			background: #FBFBFB;
			font-weight: 400;

			view:nth-child(1),
			view:nth-child(2) {
				line-height: 43upx;
			}

			view:last-child {
				box-sizing: border-box;

				text {
					width: 50%;
					height: 100%;
					float: left;
					text-align: center;
				}

				text:nth-child(1) {
					color: #0D8AE6;
				}

				text:nth-child(2) {
					color: red;
				}
			}
		}

		.td:nth-child(2n-1) {
			background: #fff;
		}
	}
</style>
