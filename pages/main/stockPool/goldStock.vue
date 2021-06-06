<template>
	<mescroll-uni :down="downOption" @down="downCallback" @up="upCallback">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar class="nav-bar" :fixed="false" back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="AI智能选股" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
		<view class="grp">

			<view class="grpCon">
				<view class="grpLi">
					<view class="left"> <text>入选时间</text></view>
					<view class="cen"><text>AI精选</text></view>
				</view>

				<view class="grpLi" v-for="(el,i) in dataList" :key="i">
					<view class="left" @click="buyIn(el.stockCode)">
						<text>{{getMyDate(el.addTime)}}</text>
					</view>
					<view class="cen" @click="buyIn(el.stockCode)">
						<text>{{el.stockName}}</text>
						<text>{{el.remark}}</text>
					</view>

					<view class="right" @click="addMyStock(el)">
						<image :src="imgArray.add" mode=""></image>
					</view>
				</view>
			</view>
		</view>

	</mescroll-uni>
</template>

<script>
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	import http from '@/http/interface.js'
	export default {
		components: {
			cmdNavBar,
			MescrollUni
		},
		data() {
			return {
				isRecharged: 'N',
				imgArray: {
					add: require('../../../static/icon/m-zx-h.png')
				},
				downOption: {
					use: false,
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				dataList: [],

			}
		},
		methods: {
			//进入买入股票
			buyIn(stockCode) {
				uni.navigateTo({
					url: '/pages/main/transaction/buy/buy?type=zxgp&stockCode=' + stockCode
				})
			},
			//加入自选
			addMyStock(el) {
				http.get('stock/addStock', {
					stockCode: el.stockCode,
					stockName: el.stockName,
					holder: this.$store.state.userInfo.phone
				}).then((res) => {
					uni.showModal({
						title: '提示',
						content: '加入自选股票成功',
						showCancel: false,
					})
				})
			},
			//时间转换
			getMyDate(times) {
				var now = new Date(times),
					y = now.getFullYear(),
					m = now.getMonth() + 1,
					d = now.getDate();
				return y + "/" + (m < 10 ? "0" + m : m) + "/" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
			},
			/*下拉刷新的回调 */
			downCallback(mescroll) {
			},
			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			upCallback(mescroll) {
				let pageNum = mescroll.num; // 页码, 默认从1开始
				let pageSize = mescroll.size; // 页长, 默认每页10条

				http.get('transaction/toGoldStocksByPage?pageNum=' + pageNum + '&pageSize=' + pageSize).then((res) => {
					console.log(res.data);
					// 接口返回的当前页数据列表 (数组)
					let curPageData = res.data.data.goldStock;
					let totalSize = res.data.data.pageTotal;

					//设置列表数据
					if (mescroll.num == 1) this.dataList = []; //如果是第一页需手动置空列表
					this.dataList = this.dataList.concat(curPageData); //追加新数据

					// 成功隐藏下拉加载状态
					//方法一(推荐): 后台接口有返回列表的总页数 totalPage
					// mescroll.endByPage(curPageData.length, totalPage);

					mescroll.endBySize(curPageData.length, totalSize); 


				})


			},
		}
	}
</script>

<style lang="scss" scoped>
	
	.nav-bar{
		position: fixed;
		/*  #ifdef  APP-PLUS  */
		// top: var(--status-bar-height);
		/*  #endif  */
		left: 0;
		z-index:2;
		width: 100%;
	}
	.pagination {
		font-size: 26upx;
		color: #007aff;
		// padding: 10px 5px;
		display: flex;
		justify-content: space-evenly;
		text-align: center;
		margin: auto;

		view {
			padding: 10px;
		}
	}
	

	.content {
		/*距离顶部范围应该在88-95范围内*/
		/*  #ifdef  APP-PLUS  */
		// padding-top: 90upx;
		/*  #endif  */
		// top: var(--status-bar-height);
		// padding-bottom: 50upx;
	}

	.grp {
		width: 100%;
		position: relative;

		.grpTit {
			width: 100%;
			height: 80upx;
			line-height: 80upx;
			color: #0e0e0e;
			text-indent: 36upx;
			position: relative;
			text-align: left;
			font-size: 28upx;
			border-bottom: 2upx solid #efefef;
		}

		.grpTit:after {
			position: absolute;
			content: '';
			height: 34upx;
			width: 5upx;
			background: #FF6D28;
			left: 20upx;
			top: 23upx;
		}

		.grpCon {
			width: 100%;
			position: relative;

			.grpTab {
				width: 100%;
				line-height: 80upx;
				background-color: #f5f5f5;
				// padding: 0 10upx;
				box-sizing: border-box;
				display: flex;
				// flex-wrap: wrap;
				align-items: center;
				border-bottom: 2upx solid #efefef;
				font-size: 26upx;

				view {
					height: 80upx;
					border-right: 2upx solid #efefef;
				}
			}

			.grpTabL {
				width: 100%;
				height: 100upx;
				// padding: 0 10upx;
				box-sizing: border-box;
				display: flex;
				// flex-wrap: wrap;
				align-items: center;
				border-bottom: 2upx solid #efefef;
				font-size: 26upx;

				view {
					line-height: 100upx;
					border-right: 2upx solid #efefef;
				}
			}

			.grpLi {
				width: 100%;
				height: 120upx;
				box-sizing: border-box;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				border-bottom: 2upx solid #efefef;
				font-size: 26upx;

				view {
					height: 100upx;
				}

				.left {
					width: 225upx;
					height: 120upx;
					display: flex;
					flex-wrap: wrap;
					align-items: center;

					text {
						display: block;
						width: 100%;
						text-align: center;
					}

					// text:nth-child(1) {
					// 	background-color: #f5f5f5;
					// 	font-size: 26upx;
					// 	color: #a5a5a5;
					// 	line-height: 33px;
					// }

					text:nth-child(2) {
						// font-size: 32upx;
						// font-weight: 600;
						// color: #404040;
						// line-height: 33px;
						font-size: 22upx;
						/* font-weight: 600; */
						color: #404040;
						line-height: 33px;
					}

					.red {
						color: #da2430 !important;
					}

					.green {
						color: #50a97c !important;
					}
				}

				.cen {
					width: 400upx;
					border-left: 2upx solid #efefef;
					box-sizing: border-box;
					display: flex;
					flex-wrap: wrap;
					align-items: center;

					text {
						display: block;
						width: 100%;
						text-align: left;
						padding: 0 20upx;
						box-sizing: border-box;
					}

					text:nth-child(1) {
						font-weight: 600;
						font-size: 32upx;
						color: #262626;
					}

					text:nth-child(2) {
						font-size: 24upx;
						color: #565656;
					}
				}

				.right {
					width: calc(100% - 225upx - 400upx);
					display: flex;
					justify-content: center;
					align-items: center;

					image {
						display: block;
						width: 50upx;
						height: 50upx;
					}
				}
			}
		}

		.buyVip {
			// position: absolute;
			width: 100%;
			height: calc(100% - 80upx);
			left: 0;
			bottom: 0;

			.ts {
				font-size: 26upx;
				color: #FF6D28;
				margin-top: 30%;
				letter-spacing: 5upx;
				font-weight: 600;

			}

			.btn {
				width: 160upx;
				height: 60upx;
				background: #FF6D28;
				color: #fff;
				border-radius: 8upx;
				margin: 0 auto;
				margin-top: 20upx;
				font-size: 28upx;
				line-height: 60upx;
			}
		}

		.isShow {
			filter: blur(10upx);
		}

	}
</style>
