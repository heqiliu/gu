<template>
	<view class="content">
		<mescroll-uni :down="downOption" @down="downCallback" @up="upCallback">
			<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar class="nav-bar" :fixed="false" back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="资金流水" font-color="#fff"></cmd-nav-bar>
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
					<view class="querys" @click="reset">
						<image src="../../../../static/icon/queryfdj.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="tb">
				<view class="tbson thTop">
					<view style="width: 30%;">时间</view>
					<view>类型</view>
					<view>金额</view>
				</view>


				<view class="tbson td" v-for="(el,i) in buysData" :key="i">
					<view style="width: 30%;"><text>{{el.createTime}}</text></view>
					<view><text>{{el.businessType.name}}</text></view>
					<view style="width: 20%;">{{el.calculateMoney}}</view>
					
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
		components: {
			cmdNavBar,
			MescrollUni
		},
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				date1: currentDate,
				date2: currentDate,
				buysData: [],
				sellData: [],
				buysData1: [],
				sellData1: [],
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
		created() {},
		onLoad() {
			// this.queryHistory();
		},
		filters: {
			timeZhuan(value) {
				return value.substring(0, 10);
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
			reset(){
				this.isFirst = true;
				this.buysData = [];
				this.sellData = [];
				this.pageTotal = 1;
				this.pageNum = 1;
				this.mescroll.endUpScroll(false);
				this.mescroll.resetUpScroll();
			},
			queryHistory() {
				uni.showLoading({
					mask: true
				})
				
				if(!this.isFirst){
					this.pageNum = this.pageNum + 1;
				}
				var _this = this;
				http.get('user/assets/record/getList', {
					'dateRangeInfo.startTime': _this.date1 + " 00:00:00",
					'dateRangeInfo.endTime': _this.date2 + " 23:59:59",
					'pageInfo.num':_this.pageNum-1,
					'pageInfo.size':_this.pageSize,
					'pageInfo.isReturnPage': true
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
					_this.mescroll.endSuccess(10, Number(_this.pageNum) < Number(_this.pageTotal) );
					
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
	.content {
		/*距离顶部范围应该在88-95范围内*/
		/*  #ifdef  APP-PLUS  */
		// padding-top: 90upx;
		/*  #endif  */
		// top: var(--status-bar-height);
		// padding-bottom: 95upx;
		background: #fbfbfb;
		// height: 100%;
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
		padding-top: calc(var(--status-bar-height) + 190upx + 86upx);;

		.tbson {
			width: 100%;
			text-align: center;
			line-height: 86upx;
			height: 86upx;
			color: #464646;
			border-top: 1upx solid #d9d9d9;
			border-bottom: 1upx solid #d9d9d9;
			font-size: 22upx;
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
			font-size: 12px;

			view:first-child {
				line-height: 43upx;
			}

			view:nth-child(4) {
				color: #00B26A;
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
