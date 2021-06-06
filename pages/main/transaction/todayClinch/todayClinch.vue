<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar class="nav-bar" :fixed="false" back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="当日成交" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
		<mescroll-uni :down="downOption" @down="downCallback" :up="upOption" @up="upCallback">
		<view class="tb">
			<!-- <view class="tbson thTop">
				<view>名称/代码</view>
				<view style="width: 25%;">时间/类型</view>
				<view style="width: 25%;">价格/手续费</view>
				<view style="width: 15%;">成交数</view>
				<view style="width: 15%;">状态</view>
			</view>
			<view class="tbson td" v-for="(el,i) in buysData" :key="i">
				<view><text>{{el.stockName}}\n</text> <text>{{el.stockCode}}</text></view>
				<view style="width: 25%;"><text>{{el.createTime}} {{el.orderType.name}}</text></view>
				<view style="width: 25%;">{{el.orderUnitPrice}}元\n</text><text>{{el.serviceCharge}}元</text></view>
				<view style="width: 15%;"><text>{{el.transactionVolume}}</text></view>
				<view style="width: 15%;">
					{{el.orderStatus.name}}
				</view>
			</view> -->
			<view style="width: 100%;" v-for="(el,i) in buysData" :key="i">
				<view style="padding: 2% 4%;width: 92%;">
					<view class="tbson td" style="height: 48upx;width: 100%;">
						<view style="width: 30%;">{{el.stockName}}</view>
						<view style="width: 30%;">{{el.stockCode}}</view>
						<view style="width: 15%;text-align: right;" v-if="el.orderStatus.value==3">已{{el.orderStatus.name}}</view>
						<view style="width: 30%;text-align: right;" v-else-if="el.orderStatus.value!=3">{{el.orderStatus.name}}</view>
					</view>
					<view class="tbson td" style="height: 48upx;width: 100%;">
						<view style="width: 30%;height: 48upx;">{{el.orderType.name}}</view>
						<view style="width: 30%;">委托价/数</view>
						<view style="width: 30%;text-align: right;">{{el.orderUnitPrice}}/{{el.orderNumber}}</view>
					</view>
					<view class="tbson td" style="height: 48upx;width: 100%;">
						<view style="width: 30%;height: 48upx;">{{el.createTime.split(" ")[0]}}</view>
						<view style="width: 30%;">成交价/数</view>
						<view style="width: 30%;text-align: right;">{{el.transactionPrice}}/{{el.transactionVolume}}</view>
					</view>
					<view class="tbson td" style="height: 48upx;width: 100%;">
						<view style="width: 30%;height: 48upx;">{{el.createTime.split(" ")[1]}}</view>
						<view style="width: 30%;" v-if="el.orderType.value!=0">盈利</view>
						<view style="width: 30%;text-align: right;" v-if="el.orderType.value!=0">{{el.profitprice}}</view>
					</view>
				</view>
				<!-- <view style="width: 100%;height: 20upx;background: #a7a7a7;" > </view> -->
			</view>
			
		</view>
		</mescroll-uni>
	</view>
</template>

<script>
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
	import http from '@/http/interface.js'
	export default {
		components: {cmdNavBar,MescrollUni},
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				date1: currentDate,
				date2: currentDate,
				buysData : [],
				sellData : [],
				buysDate1 : [],
				sellData1 : [],
				pageNum : 1,
				pageSize : 20,
				pageTotal : 0,
				mescroll : null,
				downOption: { //下拉刷新的配置
					use: false,
					auto: false, //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {//上拉加载的配置
					loadFull: {
						use: true, //列表数据过少,不足以滑动触发上拉加载,是否自动加载下一页,直到满屏或者无更多数据为止;默认false,因为可通过调高page.size避免这个情况
						auto : false,
						// delay: 100 //延时执行的毫秒数; 延时是为了保证列表数据或占位的图片都已初始化完成,且下拉刷新上拉加载中区域动画已执行完毕;
					},
				},
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
			// this.queryHistory();
		},
		filters: {
	　　　　 timeZhuan(value) {
				return value.substring(0,10);
	　　　　 }
	　　},
		methods: {
			downCallback(mescroll) {console.info("下拉");},
			upCallback(mescroll) {
				if(this.mescroll == null){
					this.mescroll = mescroll;
				}
				this.queryHistory();
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
			reset(){
				this.isFirst = true;
				this.buysData = [];
				this.sellData = [];
				this.pageTotal = 1;
				this.pageNum = 1;
				this.mescroll.endUpScroll(false);
				this.mescroll.resetUpScroll();
			},
			queryHistory(){
				uni.showLoading({
					mask: true
				})
				
				if(!this.isFirst){
					this.pageNum = this.pageNum + 1;
				}
				var _this = this;
				http.get('stock/order/getList', {
					'dateRangeInfo.startTime': _this.date1 + " 00:00:00",
					'dateRangeInfo.endTime': _this.date2 + " 23:59:59",
					'pageInfo.num':_this.pageNum - 1,
					'pageInfo.size':_this.pageSize,
					'pageInfo.isReturnPage': true,
					'orderStatus': 'COMPLETED'
				}).then((res) => {
					if(_this.isFirst){
						if (res.data.data.records.length == 0) {
							uni.showModal({
								title: '提示',
								content: '该日期起始无记录',
								showCancel: false,
							})
							_this.mescroll.endSuccess(10, false);
							return;
						}
						_this.buysData = res.data.data.records;
						_this.sellData = res.data.data.records;
						_this.pageTotal = res.data.data.pages;
						_this.isFirst = false;
					}else{
						_this.buysData = _this.buysData.concat(res.data.data.records);
					}
					_this.mescroll.endSuccess(10, Number(_this.pageNum) < Number(res.data.data.pages) );
					
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
		// padding-bottom: 95upx;
		background: #fbfbfb;
		// height: 100%;
	}
	
	.tb{
		/*  #ifdef  APP-PLUS  */
		top: calc(var(--status-bar-height) + 90upx);
		/*  #endif  */
		width: 100%;
		position: relative;
		// padding-top: 86upx;
		.tbson{
			width: 100%;
			text-align: center;
			// line-height: 86upx;
			// height: 86upx;
			color: #464646;
			// border-top: 1upx solid #d9d9d9;
			// border-bottom: 1upx solid #d9d9d9;
			font-size: 30upx;
			background: #fff;
			font-weight: 600;
			view{
				width: 20%;
				float: left;
				// height: 86upx;
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
			// view:nth-child(1),view:nth-child(2){
			// 	line-height: 43upx;
			// }
			view:last-child{
				box-sizing: border-box;
				text{
					// width: 50%;
					// height: 100%;
					// float: left;
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
