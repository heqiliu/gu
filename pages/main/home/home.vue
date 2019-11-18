<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
		<!-- #endif -->
		<view class="topBanner">
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500" :circular="true">
							<swiper-item v-for="(el,i) in bannerList" :key="i">
								<image :src="webPath + 'file/' + el.path" mode=""></image>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
		</view>
		<view class="funBox">
			<ul>
				<li @click="goJoin">
					<image :src="imgArray.funImg1" mode=""></image>
					<text>招商加盟</text>
				</li>
				<navigator url="/pages/main/publicView/news/news?title=新手指引&type=topBar&barType=1003" hover-class="navigator-hover">
					<li>
						<image :src="imgArray.funImg2" mode=""></image>
						<text>新手指引</text>
					</li>
				</navigator>
				<navigator url="/pages/main/publicView/news/news?title=规则介绍&type=topBar&barType=1004" hover-class="navigator-hover">
					<li>
						<image :src="imgArray.funImg3" mode=""></image>
						<text>规则介绍</text>
					</li>
				</navigator>
				<navigator url="/pages/main/publicView/news/news?title=公司简介&type=topBar&barType=1005" hover-class="navigator-hover">
					<li>
						<image :src="imgArray.funImg4" mode=""></image>
						<text>公司简介</text>
					</li>
				</navigator>
			</ul>
		</view>
		<uni-notice-bar 
			v-if="topAnnouncement[0] != undefined || topAnnouncement[0].title != ''"
			show-icon="true" 
			scrollable="true" single="true" 
			:text="topAnnouncementStr">
		</uni-notice-bar>
		<view class="customers">
			<!-- <view class="son">
				<view class="cusHead">
					<image :src="imgArray.head1" mode=""></image>
				</view>
				<view class="cusDetails">
					<text>资讯</text>
					<text>18038624374</text>
					<text>微信同号</text>
				</view>
			</view>
			<view class="son">
				<view class="cusHead">
					<image :src="imgArray.head2" mode=""></image>
				</view>
				<view class="cusDetails">
					<text>学堂</text>
					<text>18100269948</text>
					<text>微信同号</text>
				</view>
			</view> -->
			<view class="left">
				<navigator url="/pages/main/home/stockMarketSchool/stockMarketSchool?title=1007">
					<image :src="imgArray.hdp" mode=""></image>
					<text>股市点评</text>
				</navigator>
			</view>
			<view class="cen">
				<navigator url="/pages/main/publicView/news/news?title=在线客服&type=topBar&barType=1009">
					<image :src="imgArray.head1" mode=""></image>
					<text>在线客服</text>
				</navigator>
			</view>
			<view class="rit">
				<navigator url="/pages/main/home/stockMarketSchool/stockMarketSchool?title=1008">
					<image :src="imgArray.hxt" mode=""></image>
					<text>股市学堂</text>
				</navigator>
			</view>
		</view>
		<view class="withInfo">
			<view class="contents">
				<view class="pzThree">
					<text @click="useTypeChange(1)" :class="userType == 1 ? 'isTask' : ''">按天使用</text>
					<text @click="useTypeChange(2)" :class="userType == 2 ? 'isTask' : ''">融券沽空</text>
					<text @click="useTypeChange(3)" :class="userType == 3 ? 'isTask' : ''" style="font-weight: 600;font-size: 26upx;">场内期权</text>
				</view>
				<view v-if="userType == 1">
					<view class="pz91">
						<text class="pzRed">1：6倍 按天计算，用多少，算多少，节假日持仓不收费</text>
					</view>
				</view>
				<view v-if="userType == 2">
					<view class="pz91">
						<text class="pzRed">1：6倍  例如保证金1万，6万可供使用  息费按月计算</text>
					</view>
				</view>
				<view v-if="userType == 3">
					<view class="pz91">
						<text class="pzRed">
							做多做空都能盈利，策略运用对冲风险
						</text>
					</view>
					<view class="pz91" style="margin-top:20upx;background: #DD0E0E;">
						<text class="pzRed" @click="goBuy()" style="color: #fff;">
							充值1万当<text style="font-weight: 600;">1.44万元</text>使用
							<text style="text-decoration: underline;padding-left: 8upx;font-size: 32upx;" >立即充值</text>
						</text>
					</view>
				</view>
				<view class="immediately" @click="comeBuy">
					{{userType == 1 || userType == 2 ? '立即使用' : '马上参与'}}
				</view>
			</view>
		</view>
		<view class="newInfo">
			<view class="tit">
				数字资产
			</view>
			<view class="coinlist" @click="coinQuery">
				<view class="coli">
					<image :src="imgArray.coin1" mode=""></image>
					<text>BTC</text>
				</view>
				<view class="coli">
					<image :src="imgArray.coin2" mode=""></image>
					<text>ETH</text>
				</view>
				<view class="coli">
					<image :src="imgArray.coin3" mode=""></image>
					<text>USDT</text>
				</view>
				<view class="coli">
					<image :src="imgArray.coin4" mode=""></image>
					<text>LTC</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import http from '@/http/interface.js'
	import uniNoticeBar from "@/components/uni-notice-bar/uni-notice-bar.vue"
	export default {
		components: {uniNoticeBar},
		data() {
			return {
				//子组件中必须reuqire 否则不显示
				imgArray : {
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
				},
				bannerList : [],
				userType : 3,
				topAnnouncement : [],
				topAnnouncementStr : ''
			};
		},
		computed:{
			// listenMainIndexData(){
				// return this.$store.state.mainIndexData;
			// },
			webPath(){
				return this.$store.state.webPath;
			}
		},
		mounted(){
			http.get('banner/findBanners').then((res)=>{
				this.bannerList = res.data.data;
			})
			
			http.get('home/item',{type:'1006'}).then((res)=>{
				this.topAnnouncement = res.data.data;
				let _this = this;
				this.topAnnouncement.forEach((el,i)=>{
					if(i != _this.topAnnouncement.length){
						_this.topAnnouncementStr+=el.title +' ';
					}
				})
				
			})
		},
		methods : {
			useTypeChange(type) {
				this.userType = type
			},
			comeBuy(){
				//校验是否已选择配资方式
				if(this.$store.state.userInfo.capitalType != "" && this.userType != 3){
					let pz = this.$store.state.userInfo.capitalType == '1001' ? '按天' : '按月';
					uni.showModal({
						title : '提示',
						content: '您当前已选择使用方式为' + pz + '使用，无法再次选择！',
						showCancel : false,
					})
					return;
				}
				if(this.userType == 1){
					http.get('home/setCapitalType',{phone:this.$store.state.userInfo.phone,type:1001}).then((res)=>{
						uni.showModal({
							title : '提示',
							content: '成功选择为按天使用',
							showCancel : false,
						})
					})
				}else if(this.userType == 2){
					http.get('home/setCapitalType',{phone:this.$store.state.userInfo.phone,type:1002}).then((res)=>{
						uni.showModal({
							title : '提示',
							content: '成功选择为按月使用',
							showCancel : false,
						})
					})
				}else if(this.userType == 3){
					uni.navigateTo({
						url : '/pages/main/transaction/buy/buy'
					})
					
					
				}
			},
			goBuy(){
				uni.navigateTo({
					url : '/pages/main/myAccount/pay/pay'
				})
			},
			goJoin(){
				this.$store.commit('mainPageNumUpdate',4);
			},
			coinQuery(){
				uni.showModal({
					title : '提示',
					content : '敬请期待',
					showCancel : false
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		/*  #ifdef  APP-PLUS  */
			padding-top: var(--status-bar-height);
		/*  #endif  */
		
	}
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
	.topBanner{
		width: 100%;
		height: 300upx;
		.uni-padding-wrap{
			height: 100%;
			.page-section{
				height: 100%;
				.page-section-spacing{
					height: 100%;
					.swiper{
						height: 100%;
					}
				}
			}
		}
		image{
			width: 100%;
			height: 100%;
		}
	}
	.funBox{
		width: 100%;
		height: 200upx;
		background: #ffffff;
		ul{
			margin: 0;
			padding: 0;
			width: 100%;
			height: 100%;
			li{
				list-style: none;
				width: 25%;
				height: 200upx;
				float: left;
				image{
					display: block;
					width: 84upx;
					height: 84upx;
					margin: 0 auto;
					margin-top: 42upx;
					border-radius: 50%;
				}
				text{
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
	.customers{
		width: 710upx;
		height: 204upx;
		margin: 0 auto;
		margin-top: 20upx;
		box-shadow: 0upx 0upx 20upx #FF6D28;
		color: #555;
		.left,.rit{
			width: 40%;
			float: left;
			height: 200upx;
			padding-top: 15upx;
			box-sizing: border-box;
			image{
				display: block;
				width: 120upx;
				height: 120upx;
				margin: 0 auto;
				box-sizing: border-box;
			}
			text{
				display: block;
				margin-top: 15upx;
				font-size: 26upx;
				font-weight: 600;
			}
		}
		.left{
			image{
				padding: 22upx;
			}
		}
		.rit{
			float: right;
			image{
				padding: 0upx;
			}
		}
		.cen{
			width: 20%;
			float: left;
			height: 200upx;
			padding-top: 50upx;
			image{
				display: block;
				width: 60upx;
				height: 60upx;
				margin: 0 auto;
				border-radius: 50%;
				border:1upx solid #D6E8F2;
			}
			text{
				display: block;
				margin-top: 15upx;
				font-size: 22upx;
				color: #8d8d8d;
			}
		}
		
		.son{
			width: 50%;
			height: 100%;
			float: left;
			.cusHead{
				height: 100%;
				width: 140upx;
				float: left;
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					display: block;
					width: 88upx;
					height: 88upx;
					border-radius: 50%;
					border:1upx solid #D6E8F2;
				}
			}
			.cusDetails{
				width: calc(100% - 140upx);
				height: 100%;
				float: left;
				text{
					display: block;
					width: 100%;
					text-align: left;
				}
				text:nth-child(1){
					color: #8d8d8d;
					font-size: 26upx;
					font-weight: 600;
					margin-top: 45upx;
				}
				text:nth-child(2){
					color: #FF6D28;
					font-size: 30upx;
					font-weight: 600;
					margin-top: 10upx;
				}
				text:nth-child(3){
					color: #484848;
					font-size: 22upx;
					margin-top: 12upx;
				}
			}
		}
	}
	.withInfo{
		width: 100%;
		height: 500upx;
		margin-top: 20upx;
		padding-top: 90upx;
		background: #fff;
		.contents{
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
			.pzThree{
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
				text{
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
				text:nth-child(1){
					border: none;
				}
				text:nth-child(3){
					float: left;
					
				}
				.isTask{
					background: #FF6D28;
					color: #fff;
					border-right: 2upx solid #FF6D28;
				}
			}
			.pz91{
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
				.pzRed{
					color: #FF6D28;
				}
			}
			.pzInfo{
				view{
					color: #000;
					font-size: 28upx;
					height: 70upx;
					line-height: 70upx;
					text-align: center;
					.pzInfoRed{
						font-weight: 600;
						color: #FF6600;
					}
					color: #000;
				}
			}
			.immediately{
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
				background: linear-gradient(to bottom right, #FFAA25 , #FF6D28);
				color: #fff;
			}
			
		}
	}
	.newInfo{
		width: 100%;
		margin-top: 20upx;
		background: #fff;
		padding-bottom: 50upx;
		.tit{
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
		.infoList{
			width: 100%;
			.lis{
				width: 100%;
				height: 60upx;
				line-height: 68upx;
				float: left;
				padding-left: 16upx;
				box-sizing: border-box;
				background: #fff;
				.lisImg{
					float: left;
					width: 50upx;
					height: 60upx;
					display: flex;
					justify-content: center;
					align-items: center;
					image{
						display: block;
						width: 11upx;
						height: 18upx;
					}
					
				}
				text{
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
		.coinlist{
			width: 100%;
			display: flex;
			flex-wrap: nowrap;
			.coli{
				width: 25%;
				image{
					display: block;
					width: 60upx;
					height: 60upx;
					margin: 0 auto;
				}
				text{
					display: block;
					margin-top: 10upx;
					font-size: 24upx;
					color: #555;
				}
			}
		}
	}
	
	
	
	
</style>
