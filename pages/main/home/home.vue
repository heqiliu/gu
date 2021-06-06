<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
		<view class="status-bar"></view>
		<!-- #endif -->
		<img class="banner" src="/static/images/banner.jpg" mode="widthFix"></img>
		<view class="funBox">
			<ul>
				<navigator url="/pages/main/transaction/transaction" hover-class="navigator-hover">
					<li>
						<img src="../../../static/icon/nav-index-01.png" mode=""></img>
						<text>模拟交易</text>
					</li>
				</navigator>
				<navigator url="/pages/main/stockPool/stockPool" hover-class="navigator-hover">
					<li>
						<img src="../../../static/icon/nav-index-03.png" mode=""></img>
						<text>AI选股</text>
					</li>
				</navigator>
				<navigator url="/pages/main/publicView/news/stock_discuss/stock_discuss" hover-class="navigator-hover">
					<li>
						<img src="../../../static/icon/nav-index-04.png" mode=""></img>
						<text>千股千评</text>
					</li>
				</navigator>
				<navigator url="/pages/main/publicView/news/school_article/school_articlelist"
					hover-class="navigator-hover">
					<li>
						<img src="../../../static/icon/nav-index-05.png" mode=""></img>
						<text>股市学堂</text>
					</li>
				</navigator>
			</ul>
		</view>
		<uni-notice-bar v-if="topAnnouncement.length > 0 && topAnnouncement[0].title != ''" show-icon="true"
			scrollable="true" single="true" :text="topAnnouncementStr">
		</uni-notice-bar>
		<view class="customers">

			<view class="exponent">
				<view :class="Number(stockMarketInfo.shmap.rise) > 0 ? 'thrr' : 'thrr fail'">
					<view>{{stockMarketInfo.shmap.marketName | isundefined}}</view>
					<view>{{Number(stockMarketInfo.shmap.rise) > 0 ? '↑' : '↓'}}
						{{stockMarketInfo.shmap.marketPrice | isundefined}}
					</view>
					<view>
						<text>{{stockMarketInfo.shmap.rise | isundefined}}</text>
						<text>{{Number(stockMarketInfo.shmap.rise) > 0 ? '' : ''}}{{stockMarketInfo.shmap.risePercent | isundefined}}%</text>
					</view>
				</view>
				
				<view :class="Number(stockMarketInfo.szmap.rise) > 0 ? 'thrr' : 'thrr fail'">
					<view>{{stockMarketInfo.szmap.marketName | isundefined}}</view>
					<view>{{Number(stockMarketInfo.szmap.rise) > 0 ? '↑' : '↓'}}
						{{stockMarketInfo.szmap.marketPrice | isundefined}}
					</view>
					<view>
						<text>{{stockMarketInfo.szmap.rise | isundefined}}</text>
						<text>{{Number(stockMarketInfo.szmap.rise) > 0 ? '' : ''}}{{stockMarketInfo.szmap.risePercent | isundefined}}%</text>
					</view>
				</view>
				<view :class="Number(stockMarketInfo.gemmap.rise) > 0 ? 'thrr' : 'thrr fail'">
					<view>{{stockMarketInfo.gemmap.marketName | isundefined}}</view>
					<view>{{Number(stockMarketInfo.gemmap.rise) > 0 ? '↑' : '↓'}}
						{{stockMarketInfo.gemmap.marketPrice | isundefined}}
					</view>
					<view>
						<text>{{stockMarketInfo.gemmap.rise | isundefined}}</text>
						<text>{{Number(stockMarketInfo.gemmap.rise) > 0 ? '' : ''}}{{stockMarketInfo.gemmap.risePercent | isundefined}}%</text>
					</view>
				</view>
			</view>



		</view>
		<view class="withInfo">

			<view class="grp his">
				<view class="grpTit">历史战绩</view>
				<view class="grpCon">

					<view class="grpTab">
						<view style="width: 18%;">最高涨幅</view>
						<view style="width: 18%;">区间涨幅</view>
						<view style="width: 36%;">股票名称/代码</view>
						<view style="width: 28%;">入选时间</view>
						<!-- <view style="width: 30%;">截至时间</view> -->

					</view>
					<view class="grpTabL" v-for="(el,i) in dataList" :key="i">	
						<view style="width: 18%;font-weight: 500;text-align:right;border: line-height: 90upx"
						   :class="Number(numFilter(el.highestIncrease)) > 0 ? 'redColor' :Number(numFilter(el.highestIncrease)) < 0 ? 'greenColor':'blackColor'">
								{{ numFilter(el.highestIncrease* 100) }}%
							
						</view>
						
						<view style="width: 18%;font-weight: 500;text-align:center; line-height: 90upx;"
							:class="Number(numFilter(el.intervalIncrease)) > 0 ? 'redColor' :Number(numFilter(el.intervalIncrease)) < 0 ? 'greenColor':'blackColor'"
						>
								{{ numFilter(el.intervalIncrease* 100) }}%
						</view>
						<view style="width: 36%;line-height: 90upx;text-align:center;" @click="buyIn(el.stockCode)">
							<view><view><b>{{el.stockName}}</b></view>({{el.stockCode}})</view>
						</view>
						<view style="width: 28%;text-align:center;">
							<text>{{el.startingTime}}</text>
						</view>
						<!-- <view style="width: 30%;"><text>{{el.deadline}}</text></view> -->
						
					</view>


				</view>


			</view>


		</view>


		

	</view>
	
	</view>

	
</template>


<script>
	import http from '@/http/interface.js'
	import store from '@/store.js'
	import uniNoticeBar from "@/components/uni-notice-bar/uni-notice-bar.vue"
	import countup from "@/components/countUp/countUp.vue"
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	export default {
		components: {
			uniNoticeBar,
			countup,
			cmdNavBar
		},
		onShow(){
			
		},
		data() {
			return {
				//子组件中必须reuqire 否则不显示
				imgArray: {
					funImg1: require('../../../static/icon/nav-index-01.png'),
					funImg2: require('../../../static/icon/nav-index-03.png'),
					funImg3: require('../../../static/icon/nav-index-04.png'),
					funImg4: require('../../../static/icon/nav-index-05.png'),
					head1: require('../../../static/img/kf-bg1.jpg'),
					newImg: require('../../../static/icon/head-mark3.gif'),
					coin1: require('../../../static/icon/coin_btc.png'),
					coin2: require('../../../static/icon/coin_eth.png'),
					coin3: require('../../../static/icon/coin_usdt.png'),
					coin4: require('../../../static/icon/coin_ltc.png'),
					hdp: require('../../../static/icon/h_dp.png'),
					hxt: require('../../../static/icon/h_xt.png'),
					openrbag: require('../../../static/icon/openrbag.png'),
					
				},
				bannerList: [],
				navNumber:5,
				userType: 3,
				topAnnouncement: [],
				topAnnouncementStr: '',

				num: 12.68,
				bag1animation: {},
				openbrnanimation: {},
				rbagmodelshow: false,
				openrbagmodelshow: false,
				dataList: [],
				stockMarketInfo: {
					shmap: {
						size: 0
					},
					szmap: {
						size: 0
					},
					gemmap: {
						size: 0
					}
				},
			};
		},
		filters: {
			isundefined(val) {
				return val == undefined ? '' : val
			}
		},
		computed: {
			listenMainStockData() {
				return this.$store.state.mainStockData;
			},
			webPath() {
				return this.$store.state.webPath;
			}
		},
		mounted() {
			//console.log('aaaaaa',this.$store.state.userInfo);
			var that1 = this;
			// this.getHb();
			http.get('website/banner/getList', {
				type: 'APP_HOME_SLIDESHOW',
				status: true,
				'pageInfo.size': 100,
				'pageInfo.isReturnPage': false
			}).then((res) => {
				that1.bannerList = res.data.data.records;
			});
			let pageNum = 1; // 页码, 默认从1开始
			let pageSize = 10; // 页长, 默认每页10条

			http.get('website/app/getListTop').then((res) => {
				// console.log(res.data);
				// 接口返回的当前页数据列表 (数组)
				let curPageData = res.data.data.records;
				let totalSize = res.data.data.total;
				this.formatTime(this.time, "mm-dd hh:mm:ss");
				//设置列表数据
				// if (mescroll.num == 1) this.dataList = []; //如果是第一页需手动置空列表
				this.dataList = this.dataList.concat(curPageData); //追加新数据

				// mescroll.endBySize(curPageData.length, totalSize);
			});
			// http.get('home/item',{type:'1006'}).then((res)=>{
			// 	this.topAnnouncement = res.data.data;
			// 	let _this = this;
			// 	this.topAnnouncement.forEach((el,i)=>{
			// 		if(i != _this.topAnnouncement.length){
			// 			_this.topAnnouncementStr+=el.title +' ';
			// 		}
			// 	})

			// });
			this.initData();
			if (this.$store.state.mainStockData.stockMarketInfo != undefined) {
				this.stockMarketInfo = this.$store.state.mainStockData.stockMarketInfo;
				this.stocks = this.$store.state.mainStockData.stockCollectionVoList;
			}
		},
		watch: {
			listenMainStockData(newval, oldval) {
				this.stockMarketInfo = newval.stockMarketInfo;
				this.stocks = newval.stockCollectionVoList;
			}
		},
		methods: {
			 //进入买入股票
			buyIn(stockCode) {
				if(store.state.userInfo.token != ''){
					if(stockCode == undefined || stockCode == ''){
						uni.showModal({
							title : '提示',
							content : '请选择您要买入的股票',
							showCancel : false,
						})
						return;
					}
					uni.navigateTo({
					url: '/pages/main/transaction/buy/buy?type=zxgp&stockCode=' + stockCode,
						});
					 
				
					
				}
				
				
			},
			useTypeChange(type) {
				this.userType = type
			},
			initData() {
				uni.showLoading({
					mask: true
				})
				http.get('AppPortfolioPage/stockPools').then((res) => {
					this.$store.commit('mainStockDataUpdate', res.data.data)
				})
			},

			numFilter (value) {
			// 截取当前数据到小数点后两位
			let realVal = parseFloat(value).toFixed(2)
			return realVal
			},

			goBuy() {
				uni.navigateTo({
					url: '/pages/main/myAccount/pay/pay'
				})
			},
			goJoin() {
				this.$store.commit('mainPageNumUpdate', 1);
			},
			coinQuery() {
				uni.showModal({
					title: '提示',
					content: '敬请期待',
					showCancel: false
				})
			},

		}
		
		
	}
</script>

<style lang="scss" scoped>
	@import 'scss/red_bag.scss';
	
	.content {
		/*  #ifdef  APP-PLUS  */
		// padding-top: var(--status-bar-height);
		/*  #endif  */

	}

	.status-bar {
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

	.topBanner {
		width: 100%;
		height: 300upx;

		.uni-padding-wrap {
			height: 100%;

			.page-section {
				height: 100%;

				.page-section-spacing {
					height: 100%;

					.swiper {
						height: 100%;
					}
				}
			}
		}

		swiper-item view{
			box-sizing:border-box;
			width: 100%;
			height: 100%;
			border: 10upx solid blue;
			display:flex;
			justify-content:center;
			align-items:center;
			
		}
	}
	.banner{
		width:100%;
		height:240upx;
	}
	.funBox {
		width: 100%;
		height: 200upx;
		background: #ffffff;
		
		ul {
			margin: 0;
			padding: 0;
			width: 100%;
			height: 100%;

			li {
				list-style: none;
				width: 25%;
				height: 200upx;
				float: left;

				img {
					display: block;
					width: 84upx;
					height: 84upx;
					margin: 0 auto;
					margin-top: 42upx;
					border-radius: 50%;
				}

				text {
					display: block;
					width: 100%;
					text-align: center;
					font-size: 24upx;
					color: #000;
					margin-top: 20upx;
					font-weight: 600;
				}
			}
		}
	}

	.customers {
		width: 710upx;
		height: 204upx;
		margin: 0 auto;
		margin-top: 20upx;
		box-shadow: 0upx 0upx 20upx #FF6D28;
		color: #555;

		.left,
		.rit {
			width: 40%;
			float: left;
			height: 200upx;
			padding-top: 15upx;
			box-sizing: border-box;

			img {
				display: block;
				width: 120upx;
				height: 120upx;
				margin: 0 auto;
				box-sizing: border-box;
			}

			text {
				display: block;
				margin-top: 15upx;
				font-size: 26upx;
				font-weight: 600;
			}
		}

		.left {
			img {
				padding: 22upx;
			}
		}

		.rit {
			float: right;

			img {
				padding: 0upx;
			}
		}

		.cen {
			width: 20%;
			float: left;
			height: 200upx;
			padding-top: 50upx;

			img {
				display: block;
				width: 60upx;
				height: 60upx;
				margin: 0 auto;
				border-radius: 50%;
				border: 1upx solid #D6E8F2;
			}

			text {
				display: block;
				margin-top: 15upx;
				font-size: 22upx;
				color: #8d8d8d;
			}
		}

		.son {
			width: 50%;
			height: 100%;
			float: left;

			.cusHead {
				height: 100%;
				width: 140upx;
				float: left;
				display: flex;
				justify-content: center;
				align-items: center;

				img {
					display: block;
					width: 88upx;
					height: 88upx;
					border-radius: 50%;
					border: 1upx solid #D6E8F2;
				}
			}

			.cusDetails {
				width: calc(100% - 140upx);
				height: 100%;
				float: left;

				text {
					display: block;
					width: 100%;
					text-align: left;
				}

				text:nth-child(1) {
					color: #8d8d8d;
					font-size: 26upx;
					font-weight: 600;
					margin-top: 45upx;
				}

				text:nth-child(2) {
					color: #FF6D28;
					font-size: 30upx;
					font-weight: 600;
					margin-top: 10upx;
				}

				text:nth-child(3) {
					color: #484848;
					font-size: 22upx;
					margin-top: 12upx;
				}
			}
		}
	}

	.withInfo {
		width: 100%;
		height: 500upx;
		margin-top: 20upx;
		padding-top: 20upx;
		background: #fff;

		.contents {
			width: 650upx;
			height: 350upx;
			border: 2upx solid #FF6D28;
			border-radius: 15upx;
			margin: 0 auto;
			position: relative;
			padding: 75upx 0upx;
			box-sizing: border-box;
			display: flex;
			justify-content: center;
			align-items: center;

			.pzThree {
				width: 584upx;
				height: 94upx;
				border: 2upx solid #FF6D28;
				background: #fff;
				border-radius: 15upx;
				position: absolute;
				left: 0;
				right: 0;
				margin: 0 auto;
				top: -47upx;
				overflow: hidden;
				display: flex;
				flex-wrap: nowrap;

				text {
					display: block;
					width: 33.5%;
					height: 100%;
					float: left;
					border-left: 2upx solid #FF6D28;
					box-sizing: border-box;
					text-align: center;
					line-height: 94upx;
					font-size: 24upx;
					color: #FF6D28;
				}

				text:nth-child(1) {
					border: none;
				}

				text:nth-child(3) {
					float: left;

				}

				.isTask {
					background: #FF6D28;
					color: #fff;
					border-right: 2upx solid #FF6D28;
				}
			}

			.pz91 {
				width: 584upx;
				background: #FDF5E6;
				margin: 0 auto;
				// line-height: 40upx;
				color: #0e0e0e;
				text-align: center;
				font-size: 28upx;
				padding: 30upx 30upx;
				box-sizing: border-box;
				border-radius: 8upx;

				.pzRed {
					color: #FF6D28;
				}
			}

			.pzInfo {
				view {
					color: #000;
					font-size: 28upx;
					height: 70upx;
					line-height: 70upx;
					text-align: center;

					.pzInfoRed {
						font-weight: 600;
						color: #FF6600;
					}

					color: #000;
				}
			}

			.immediately {
				width: 320upx;
				height: 90upx;
				line-height: 90upx;
				font-size: 22upx;
				border-radius: 100upx;
				position: absolute;
				left: 0;
				right: 0;
				bottom: -45upx;
				margin: 0 auto;
				background: linear-gradient(to bottom right, #FFAA25, #FF6D28);
				color: #fff;
			}

		}
	}

	.newInfo {
		width: 100%;
		margin-top: 20upx;
		background: #fff;
		padding-bottom: 50upx;

		.tit {
			width: 100%;
			height: 100upx;
			line-height: 100upx;
			color: #555555;
			padding-left: 40upx;
			text-align: left;
			box-sizing: border-box;
			font-size: 30upx;
			font-weight: 600;
		}

		.infoList {
			width: 100%;

			.lis {
				width: 100%;
				height: 60upx;
				line-height: 68upx;
				float: left;
				padding-left: 16upx;
				box-sizing: border-box;
				background: #fff;

				.lisImg {
					float: left;
					width: 50upx;
					height: 60upx;
					display: flex;
					justify-content: center;
					align-items: center;

					img {
						display: block;
						width: 11upx;
						height: 18upx;
					}

				}

				text {
					height: 60upx;
					width: calc(100% - 50upx);
					display: block;
					float: left;
					font-size: 26upx;
					color: #161616;
					text-align: left;
				}
			}
		}

		.coinlist {
			width: 100%;
			display: flex;
			flex-wrap: nowrap;

			.coli {
				width: 25%;

				img {
					display: block;
					width: 60upx;
					height: 60upx;
					margin: 0 auto;
				}

				text {
					display: block;
					margin-top: 10upx;
					font-size: 24upx;
					color: #555;
				}
			}
		}
	}

	.exponent {
		width: 100%;
		height: 170upx;
		background: #fff;
		padding-top: 18upx;
		box-sizing: border-box;

		.thrr {
			width: 33.3%;
			height: 130upx;
			float: left;
			border-left:  1upx solid #f5f5f5;
			box-sizing: border-box;

			view:nth-child(1) {
				color: #aaaaaa;
				text-align: center;
				font-size: 26upx;
			}

			view:nth-child(2) {
				margin-top: 8upx;
				color: #eb4f47;
				text-align: center;
				font-size: 32upx;
				font-weight: 600;
			}

			view:nth-child(3) {
				margin-top: 8upx;
				color: #eb4f47;
				text-align: center;
				font-size: 24upx;
				font-weight: 600;

				text {
					display: block;
					width: 50%;
					float: left;
				}
			}
		}

		.thrr:nth-child(1) {
			border: none;
		}

		.fail {
			view:nth-child(2) {
				color: #1E8449;
			}

			view:nth-child(3) {
				color: #1E8449;
			}
		}
	}

	.grp {
		padding-top: var(--status-bar-height);
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
			border-bottom: 2upx solid #ccc;
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
				border-bottom: 1upx solid #ddd;
				font-size: 26upx;
				color: #fff;

				background-color: #e64340;

				view {
					height: 80upx;
					/**border-right: 1upx solid #ddd;**/
					display:flex;
					justify-content:center;
					align-items:center;
				}
			}

			.grpTabL {
				width: 100%;
				height: 100upx;
				line-height:100upx;
				// padding: 0 10upx;
				box-sizing: border-box;
				display: flex;
				// flex-wrap: wrap;
				justify-content:center;
				align-items: center;
				border-bottom: 1upx solid #f5f5f5;
				font-size: 24upx;

				view {
					// line-height: 100upx;
					/**border-right: 2upx solid #ccc;**/
					height: 100upx;
					line-height:100upx;
					display: flex;
					justify-content:center;
					
					
					
				}
				
				.redColor{
					color:red;
				}
				.greenColor{
					color:green;
				}
				.blackColor{
					color:black;
				}
				view:nth-child(1){
					
					display: flex;
					justify-content:center;
					align-items: center;
				}
				
					
				
				
			}

			.grpLi {
				width: 100%;
				height: 120upx;
				box-sizing: border-box;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				border-bottom: 2upx solid #ccc;
				font-size: 26upx;

				view {
					height: 100upx;
				}

				view:nth-child(1) {

					line-height: 100upx;
					
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

					text:nth-child(1) {
						background-color: #f5f5f5;
						font-size: 26upx;
						color: #a5a5a5;
						line-height: 33px;
					}

					text:nth-child(2) {
						// font-size: 32upx;
						// font-weight: 600;
						// color: #404040;
						// line-height: 33px;
						font-size: 22upx;
						/* font-weight: 600; */
						color: #e64340;
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
					border-left: 2upx solid #ccc;
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
						font-size: 24upx;
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
