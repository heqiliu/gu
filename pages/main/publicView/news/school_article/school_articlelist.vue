	<template>
	<mescroll-uni :down="downOption" @down="downCallback" @up="upCallback">
		<view class="content">
			<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar class="nav-bar" :fixed="false" background-color="linear-gradient(to right, #EF9435, #E95E28)"
				title="股市课堂" font-color="#fff" iconTwo="reload" @iconTwo="initData()"></cmd-nav-bar>

			<!-- #endif -->
			<view class="uni-padding-wrap uni-common-mt">
				<!--<view ></view>-->
			
					<view class="" >
						<swiper >
							<swiper-item current="0" circular v-for="(el,i) in srcList" circular  :key="i" >
								<video id="myVideo" controls show-center-play-btn enable-progress-gesture :src="webPath + 'file/' + srcList[0].videoUrl"
									@error="videoErrorCallback" @play="toNext()" @controlstoggle="showControls($event)" objdect-fit="cover" enable-danmu danmu-btn>
								</video>
							</swiper-item>
							
						</swiper>
						
					</view>
				
			</view>

			<view class="grp">
				<view class="grpTit">股市精选</view>
				<!-- isShow -->
				<view class="grpCon ">
					<view class="grpLi" v-for="(el,i) in dataList" :key="i">
						<view class="left">
							<text>文章发布时间</text>
							<text>{{el.createTime}}</text>
						</view>
						<view class="cen">
							<text @click="buyIn(el.id)">{{el.titleBar}}</text>

						</view>


					</view>
					<view class="pagination">
						<view @click="goldStock">查看更多</view>
					</view>
				</view>

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
				// src: '',
				imgArray: {
					add: require('../../../../../static/icon/m-zx-h.png')
				},
				isRecharged: 'Y',
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
				dataList: [],
				srcList: []

			};
		},
		onLoad: function() {
			console.log('this is aaaaaaa',this.srcList);

			this.getUrl();
			//console.log('地址是这里啊',this.srcList[0].videoUrl);
			let video = document.getElementById('myVideo');
			
			

		},
		//页面初次渲染完成
		onReady(){
			this.videoContext = uni.createVideoContext('myVideo');
		},
		//跳转隐藏时暂停播放
		onHide(){
			this.videoContext.pause();
		},
		onShow: function() {
			console.log('开始显示');
			//页面再次显示时，播放
			if(this.videoContext){
				this.videoContext.play();
			}
			
			//this.videoContext.requestFullScreen();

		},
		
		computed: {

			webPath() {
				return this.$store.state.webPath;
			}
		},
		methods: {
			toNext(){
					let video = document.getElementById('myVideo');
					video.src = "this.srcList.videoUrl";
					video.autoplay = true;
			},
			showControls(e){
				e.detail = {show}
			},
			getUrl() {
				let _this = this;
				let requestUrl = 'schoolArticleVideo/getList/';
				http.get(requestUrl).then((res) => {
					//console.log('地址是------', this.$store.state.webPath + 'file/' + requestUrl + res.data.data
						//.records[0].videoUrl);
					// this.srcList =  res.data.data.records.videoUrl;
					this.srcList = this.srcList.concat(res.data.data.records);
					// _this.src = 'http://szcaimi.com:8015/file/' + res.data.data.records[1].videoUrl;
					console.log('aaaaaaaaaaaa', this.srcList);
				})

			},

			_pullup() {}, //78205642271308
			//时间转换
			getMyDate(times) {
				var now = new Date(times),
					y = now.getFullYear(),
					m = now.getMonth() + 1,
					d = now.getDate();
				return y + "/" + (m < 10 ? "0" + m : m) + "/" + (d < 10 ? "0" + d : d) + " " + "\n" + now.toTimeString()
					.substr(0, 8);
			},
			sendDanmu: function() {
				this.videoContext.sendDanmu({
					text: this.danmuValue,
					color: this.getRandomColor()
				});
				this.danmuValue = '';
			},
			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
			getRandomColor: function() {
				const rgb = []
				for (let i = 0; i < 3; ++i) {
					let color = Math.floor(Math.random() * 256).toString(16)
					color = color.length == 1 ? '0' + color : color
					rgb.push(color)
				}
				return '#' + rgb.join('')
			},

			//下拉刷新
			downCallback(mescroll) {},
			/*上拉加载的回调*/
			upCallback(mescroll) {
				let pageNum = mescroll.num; // 页码, 默认从1开始
				let pageSize = 10; // 页长, 默认每页10条

				http.get('schoolArticle/getList?pageNum=' + pageNum + '&pageSize=' + pageSize).then((res) => {
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
			clickTitle() {

			},
			//进入详情页
			buyIn(id) {
				uni.navigateTo({
					// url: '/pages/main/transaction/buy/buy?type=zxgp&stockCode=' + stockCode,
					url: '/pages/main/publicView/news/school_article/school_article?id=' + id,
				})
			},


		},

	}
</script>

<style lang="scss" scoped>
	.status-bar {
		box-sizing: border-box;
		display: block;
		width: 100%;
		margin-bottom: -3upx;
		height: 90upx;
		line-height: var(--status-bar);
		position: fixed;
		top: 0;
		left: 0;
		background: linear-gradient(to right, #EF9435, #E95E28);
		z-index: 99;
	}

	.nav-bar {
		position: fixed;
		top: var(--status-bar-height);
		left: 0;
		z-index: 2;
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
		padding-top: 90upx;
		/*  #endif  */
		// top: var(--status-bar-height);
		// padding-bottom: 50upx;
	}

	#myVideo {
		width: 100%;
		height:100%;
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
			border-bottom: 1upx solid #f5f5f5;
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
				border-bottom: 1upx solid #f5f5f5;
				font-size: 26upx;
				color: #fff;

				background-color: #e64340;

				view {
					height: 80upx;
					border-right: 1upx solid #f5f5f5;
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
				border-bottom: 1upx solid #f5f5f5;
				font-size: 26upx;

				view {
					// line-height: 100upx;
					border-right: 1upx solid #f5f5f5;
					height: 88upx;
				}
			}

			.grpLi {
				width: 100%;
				height: 120upx;
				box-sizing: border-box;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				border-bottom: 1upx solid #f5f5f5;
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
					flex-direction: column;
					justify-content: space-around;

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
						line-height: 30upx;
						margin-bottom: -14upx;
					}

					text:nth-child(2) {
						// font-size: 32upx;
						// font-weight: 600;
						// color: #404040;
						// line-height: 33px;
						font-size: 22upx;
						/* font-weight: 600; */
						color: #e64340;
						line-height: 30upx;
						margin-top: -14upx;
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
					/**border-left: 2upx solid #ccc;**/
					box-sizing: border-box;
					display: flex;
					flex-wrap: wrap;
					align-items: center;

					text {
						display: block;
						width: 100%;
						text-align: left;
						padding: 0 60upx;
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
