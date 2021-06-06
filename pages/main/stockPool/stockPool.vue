<template>
	<mescroll-uni :down="downOption" @down="downCallback" @up="upCallback">
		<view class="content">
			<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar class="nav-bar" :fixed="false" background-color="linear-gradient(to right, #EF9435, #E95E28)" title="AI智能选股" font-color="#fff" iconTwo="reload"
			 @iconTwo="initData()"></cmd-nav-bar>

			<!-- #endif -->

			<view class="grp">
				
				<view class="grpTit">历史战绩</view>
				<view class="grpCon">
				
					<view class="grpTab">
						
						<view style="width: 18%;">最高涨幅</view>
						<view style="width: 18%;">区间涨幅</view>
						<view style="width: 36%;">股票</view>
						<view style="width: 28%;">入选时间</view>
						<!-- <view style="width: 30%;">截至时间</view> -->
				
					</view>
					<view class="grpTabL" v-for="(el,i) in storeData" :key="i">
						
						
						<view style="width: 20%;font-weight: 500; line-height: 90upx"
							:class="Number(numFilter(el.highestIncrease)) > 0 ? 'redColor' :Number(numFilter(el.highestIncrease)) < 0 ? 'greenColor':'blackColor'"
							
						>
								{{ numFilter(el.highestIncrease* 100) }}%
							 
						</view>
						<view style="width: 20%;font-weight: 500; line-height: 90upx;"
							:class="Number(numFilter(el.intervalIncrease)) > 0 ? 'redColor' :Number(numFilter(el.intervalIncrease)) < 0 ? 'greenColor':'blackColor'"
						>
							{{ numFilter(el.intervalIncrease* 100) }}%	
							
						</view>
						<view style="width: 32%;line-height: 90upx;"><view><b>{{el.stockName}}</b>({{el.stockCode}})</view></view>
						<view style=" width: 28%;line-height: 90upx;"><text>{{el.startingTime}}</text></view>
						<!-- <view style="width: 30%;"><text>{{el.deadline}}</text></view> -->
				
					</view>
				
				
				</view>
				
				</view>
			
			</view>
			<view class="grp his" v-if="hasLogin">
				<view class="grpTit">AI精选</view>
					<!-- isShow -->
					
				<view :class="isRecharged == 'N' ? 'grpCon isShow' : 'grpCon'">
					<view class="grpLi" v-for="(el,i) in dataList" :key="i">
						
						<view class="cen" @click="buyIn(el.stockCode)">
							<text><b>{{el.stockName}}</b>({{el.stockCode}})</text>
							<text>{{el.remark}}</text>
						</view>
						<view class="middle" @click="buyIn(el.stockCode)">
							<text>入选时间</text>
							<text>{{el.startingTime}}</text>
						</view>
						<view class="right" @click="addMyStock(el)">
							<image :src="imgArray.add" mode=""></image>
						</view>
					</view>
					
			</view>
				<view class="buyVip" v-if="isRecharged == 'N'">
					<view class="ts">亲，您还不是会员用户，注册APP可显示</view>
					<view class="btn" @click="goBuy">注册</view>
				</view>
			
		</view>
	</mescroll-uni>
</template>

<script>
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
	import http from '@/http/interface.js'

	var _self,
		page = 1,
		timer = null;

	export default {
		components: {
			cmdNavBar,
			MescrollUni
		},
		data() {
			return {
				hasLogin:this.$store.state.hasLogin,
				imgArray: {
					add: require('../../../static/icon/m-zx-h.png')
				},
				isRecharged: 'N',
				downOption: {
					use: false, // 是否启用下拉刷新; 默认true
					auto: false, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
				},
				// 上拉加载的常用配置
				upOption: {
					use: true, // 是否启用上拉加载; 默认true
					auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
					page: {
						num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
						size: 10 // 每页数据的数量,默认10
					},
					noMoreSize: 5, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
					empty: {
						tip: '暂无相关数据'
					}
				},
				// 列表数据
				dataList: []

			};
		},
		
		created(){
			
			let _this = this;
				if (this.$store.state.userInfo.token != ''&&  this.$store.state.userInfo.power==true) {
						
						_this.isRecharged='Y'
					}
		},
		

		computed: {
			storeData() {
				return this.$store.state.mainPoolData;
			}

		},
		onLoad:function(){
			console.log('storeData',this.storeData);
			
		},
		
		methods: {
			_pullup() {},
			//时间转换
			getMyDate(times) {
				var now = new Date(times),
					y = now.getFullYear(),
					m = now.getMonth() + 1,
					d = now.getDate();
				return y + "/" + (m < 10 ? "0" + m : m) + "/" + (d < 10 ? "0" + d : d) + " "+"\n" + now.toTimeString().substr(0, 8);
			},


			//下拉刷新
			downCallback(mescroll) {},
			/*上拉加载的回调*/
			upCallback(mescroll) {
				let pageNum = mescroll.num; // 页码, 默认从1开始
				let pageSize = 10; // 页长, 默认每页10条

				// http.get('website/app/getList?num=' + pageNum + '&size=' + pageSize)
				http.get('website/app/getList',
				{
					'pageInfo.num':pageNum,
					'pageInfo.size':pageSize,
					'pageInfo.isReturnPage': true
					
				})
				
				.then((res) => {
					// console.log(res.data);
					// 接口返回的当前页数据列表 (数组)
					let curPageData = res.data.data.records;
					let totalSize = res.data.data.total;

					//设置列表数据
					if (mescroll.num == 1) this.dataList = []; //如果是第一页需手动置空列表
					this.dataList = this.dataList.concat(curPageData); //追加新数据

					mescroll.endBySize(curPageData.length, totalSize);
				})
			},

			//进入买入股票
			buyIn(stockCode) {
				if (this.isRecharged != 'Y') {
						uni.showModal({
							title: "提示",
							showCancel: false,
							mask: true,
							content: '温馨提示：此操作为会员专属，请登陆APP！',
						})
						return;
					}
				uni.navigateTo({
					url: '/pages/main/transaction/buy/buy?type=zxgp&stockCode=' + stockCode
				})
			},
			//加入自选
			addMyStock(el) {
				http.get('stock/collection/add', {
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
			numFilter (value) {
			// 截取当前数据到小数点后两位
			let realVal = parseFloat(value).toFixed(2)
			return realVal
			},
			goBuy() {
				uni.navigateTo({
					url: '/pages/checkpoint/login/login'
				})
			},
			initData() {
				uni.showLoading({
					mask: true
				});
				http.get('website/app/getListTop').then((res) => {
					// console.log(res.data.data);
					this.$store.commit('mainPoolDataUpdate', res.data.data.records)
				})
			},
			goldStock() {
				uni.navigateTo({
					url: '/pages/main/stockPool/goldStock'
				})
			},
			
		},
		mounted() {
			this.initData();
			if (!this.$store.state.isShowAIDialog) {
				uni.showModal({
					title: "提示",
					showCancel: false,
					mask: true,
					content: '温馨提示：该股票池由AI智能自动选取展示，仅供欣赏不做任何投资推荐，所有交易风险自负，与本平台无关！',
				})
				this.$store.commit('isShowAIDialog', true);
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
		margin-top:-20rpx;
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
			border-bottom: 1upx solidrgba(223,223,223,.6);
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
				font-size: 24upx;
				color: #fff;

				background-color: #e64340;

				view {
					height: 80upx;
					
					text-align:center;
					
				}
			}
			
		.grpTabL {
			width: 100%;
			height: 100upx;
			// padding: 0 10upx;
			box-sizing: border-box;
			display: flex;
			// flex-wrap: wrap;
			justify-content:center;
			align-items: center;
			border-bottom: 1upx solid #f5f5f5;
			font-size: 24upx;
			
			view{
				// line-height: 100upx;
				/**border-right: 2upx solid #ccc;**/
				height: 88upx;
				line-height:88upx;
				display: flex;
				justify-content:center;
				align-items: center;
			}
			view.redColor{
				color:red;
			}
			view.greenColor{
				color:green;
			}
			view.blackColor{
				color:black;
			}
			view:nth-child(1){
				
				

			}
		}
			.grpTabL view:nth-child(1) view{
				/**border-left:2upx solid #ccc;**/
				margin-left:14upx;
			}
			.grpLi {
				width: 100%;
				height: 120upx;
				box-sizing: border-box;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				border-bottom: 1upx solid rgba(223,223,223,.6);
				font-size: 24upx;
				.cen{
				
					width: 350upx;
					/**border-left: 2upx solid #ccc;**/
					box-sizing: border-box;
					display: flex;
					justify-content:center;
					flex-wrap: wrap;
					align-items: center;
					
					text {
						display: block;
						display:flex;
						justify-content:flex-start;
						align-items:center;
						width: 100%;
						text-align: left;
						padding: 20upx 20upx 0 50upx;
						box-sizing: border-box;
					}
				
					text:nth-child(1) {
						font-size: 24upx;
						color: #262626;
					}
				
					text:nth-child(2) {
						font-size: 22upx;
						color: #565656;
					}
				}
				
				.middle{
					margin-left:-36upx;
					margin-right:30upx;
					width: 260upx;
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
						/**background-color: #f5f5f5;**/
						font-size: 26upx;
						/**color: #a5a5a5;**/
						line-height: 33px;
						margin-bottom:-12upx;
					}

					text:nth-child(2) {
						// font-size: 32upx;
						// font-weight: 600;
						// color: #404040;
						// line-height: 33px;
						font-size: 22upx;
						/* font-weight: 600; */
						
						line-height: 33px;
						margin-top:-12upx;
					}

					.red {
						color: #da2430 !important;
					}

					.green {
						color: #50a97c !important;
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
			text-align:center;
			position: absolute;
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
	.alertBack {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 10;
		background: rgba(0, 0, 0, 0.2);
		display: flex;
		justify-content: center;
		align-items: center;
	
		.alertContent {
			width: 680upx;
			height: 900upx;
			background: #fff;
			border-radius: 8upx;
			overflow: hidden;
	
			.top {
				height: 84upx;
				width: 100%;
				background: #e64340;
				padding-left: 40upx;
				box-sizing: border-box;
				border-bottom: 1upx solid #ebebeb;
	
				text {
					display: block;
					float: left;
					text-align: left;
					line-height: 84upx;
					color: #FFFFFF;
					font-size: 26upx;
				}
	
				.closeBtn {
					width: 105upx;
					height: 84upx;
					display: flex;
					justify-content: center;
					align-items: center;
					float: right;
	
					image {
						display: block;
						width: 25upx;
						height: 25upx;
					}
				}
			}
	
			.aDetails {
				width: 100%;
				height: calc(100% - 84upx - 84upx);
				padding-top: 20upx;
				box-sizing: border-box;
				overflow-y: scroll;
	
				.ft {
					color: #333333;
					text-align: center;
					line-height: 50upx;
					font-size: 28upx;
				}
	
				image {
					display: block;
					width: 410upx;
					height: 630upx;
					margin: 0 auto;
				}
			}
	
			.btm {
				width: 100%;
				background: #fff;
				height: 84upx;
				border-top: 1upx solid #ebebeb;
				box-sizing: border-box;
	
				.leftBtn {
					float: left;
					margin-left: 30upx;
					background: #51a6f6;
				}
	
				.rightBtn {
					float: right;
					background: #e64340;
				}
	
				.btBtn {
					height: 60upx;
					width: 230upx;
					text-align: center;
					color: #fff;
					line-height: 60upx;
					font-size: 26upx;
					border-radius: 5upx;
					margin-top: 12upx;
					margin-right: 30upx;
				}
			}
	
	
		}
	}
</style>
