<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar background-color="linear-gradient(to right, #EF9435, #E95E28)" title="自选股池" iconTwo="reload" font-color="#fff" @iconTwo="initData()"></cmd-nav-bar>
		<!-- #endif -->
		<view class="seek">
			<!-- <view class="seekFont">
				编辑
			</view> -->
			<navigator url="/pages/main/optionalStock/stockSearch/stockSearch" animation-type="slide-in-bottom">
				<view class="startBox">
					<image :src="imgArray.img2" mode=""></image>
					<text style="padding-left:20upx">搜寻证券名称/代码/简称</text>
				</view>
			</navigator>
			<view class="seekRefresh">
				<!-- <image :src="imgArray.img1" mode=""></image> -->
			</view>
		</view>
		<view class="exponent">
			<view :class="Number(stockMarketInfo.shmap.rise) > 0 ? 'thrr' : 'thrr fail'">
				<view>{{stockMarketInfo.shmap.marketName | isundefined}}</view>
				<view>{{Number(stockMarketInfo.shmap.rise) > 0 ? '↑' : '↓'}} {{stockMarketInfo.shmap.marketPrice | isundefined}}</view>
				<view>
					<text>{{stockMarketInfo.shmap.rise | isundefined}}</text>
					<text>{{Number(stockMarketInfo.shmap.rise) > 0 ? '' : ''}}{{stockMarketInfo.shmap.risePercent | isundefined}}%</text>
				</view>
			</view>
			<view :class="Number(stockMarketInfo.szmap.rise) > 0 ? 'thrr' : 'thrr fail'">
				<view>{{stockMarketInfo.szmap.marketName | isundefined}}</view>
				<view>{{Number(stockMarketInfo.szmap.rise) > 0 ? '↑' : '↓'}} {{stockMarketInfo.szmap.marketPrice | isundefined}}</view>
				<view>
					<text>{{stockMarketInfo.szmap.rise | isundefined}}</text>
					<text>{{Number(stockMarketInfo.szmap.rise) > 0 ? '' : ''}}{{stockMarketInfo.szmap.risePercent | isundefined}}%</text>
				</view>
			</view>
			<view :class="Number(stockMarketInfo.gemmap.rise) > 0 ? 'thrr' : 'thrr fail'">
				<view>{{stockMarketInfo.gemmap.marketName | isundefined}}</view>
				<view>{{Number(stockMarketInfo.gemmap.rise) > 0 ? '↑' : '↓'}} {{stockMarketInfo.gemmap.marketPrice | isundefined}}</view>
				<view>
					<text>{{stockMarketInfo.gemmap.rise | isundefined}}</text>
					<text>{{Number(stockMarketInfo.gemmap.rise) > 0 ? '' : ''}}{{stockMarketInfo.gemmap.risePercent | isundefined}}%</text>
				</view>
			</view>
		</view>
		<view class="listName">
			<view>股票名称</view>
			<view>股票代码</view>
			<view>当前价格</view>
			<view>操作</view>
		</view>
		<view class="lisBox">
			<view class="lis" v-for="(el,i) in stocks" :key="i" >
				<view>{{el.stockName}}</view>
				<view>{{el.stockCode}}</view>
				<view>{{el.curPrice}}</view>
				<view>
					<text @click="jumpBuy(el.stockCode)">买入</text>
					<text @click="delStock(el)">删除</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import http from '@/http/interface.js'
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	export default {
		components: {cmdNavBar},
		data() {
			return {
				imgArray : {
					img1 : require('../../../static/icon/refresh.jpg'),
					img2 : require('../../../static/icon/m_search.png'),
				},
				//各项指数
				stockMarketInfo : {
					shmap : {
						size : 0
					},
					szmap : {
						size : 0
					},
					gemmap : {
						size : 0
					}
				},
				//选入股票列表
				stocks : []
			};
		},
		filters:{
			isundefined(val){
				return val == undefined ? '' : val
			}
		},
		computed:{
			listenMainStockData(){
				return this.$store.state.mainStockData;
			}
		},
		mounted() {
			this.initData();
			if(this.$store.state.mainStockData.stockMarketInfo != undefined){
				this.stockMarketInfo = this.$store.state.mainStockData.stockMarketInfo;
				this.stocks = this.$store.state.mainStockData.stocks;
			}
		},
		watch:{
			listenMainStockData(newval,oldval){
				this.stockMarketInfo = newval.stockMarketInfo;
				this.stocks = newval.stocks;
			}
		},
		methods:{
			jumpBuy(stockCode){
				uni.navigateTo({
					url : '/pages/main/transaction/buy/buy?type=zxgp&stockCode='+stockCode
				})
			},
			initData(){
				uni.showLoading({
					mask:true
				})
				http.get('stock/findStocks',{phone:this.$store.state.userInfo.phone}).then((res)=>{
					this.$store.commit('mainStockDataUpdate',res.data.data)
				})
			},
			delStock(el){
				let _this = this;
				uni.showModal({
					title: '请确认',
					content: '是否删除【'+el.stockName+'/'+el.stockCode+'】',
					success: function (res) {
						if (res.confirm) {
							uni.showLoading({
								mask:true
							});
							http.get('stock/delStock',{holder:_this.$store.state.userInfo.phone,stockCode:el.stockCode}).then((res)=>{
								uni.showModal({
									title : '提示',
									content : '操作成功',
									showCancel : false,
								})
								http.get('stock/findStocks',{phone:_this.$store.state.userInfo.phone}).then((res)=>{
									_this.$store.commit('mainStockDataUpdate',res.data.data);
									_this.stockMarketInfo = _this.$store.state.mainStockData.stockMarketInfo;
									_this.stocks = _this.$store.state.mainStockData.stocks;
								})
							})
						} else if (res.cancel) {
							
						}
					}
				});
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
		// top: var(--status-bar-height);
	}
	.seek{
		height: 88upx;
		background: #fff;
		position: relative;
		.seekFont{
			width: 100upx;
			height: 88upx;
			text-align: center;
			line-height: 88upx;
			float: left;
			font-size: 26upx;
			color: #FF6D28;
			font-weight: 600;
		}
		.seekRefresh{
			width: 110upx;
			height: 88upx;
			float: right;
			display: flex;
			justify-content: center;
			align-items: center;
			image{
				display: block;
				width: 40upx;
				height: 40upx;
			}
		}
		.startBox{
			width: 690upx;
			height: 60upx;
			border: 1upx solid #b9b9b9; 
			position: absolute;
			left: 0;
			right: 0;
			margin: 0 auto;
			margin-top: 18upx;
			background: #e1e1e1;
			border-radius: 10upx;
			font-size: 28upx;
			color: #ffffff;
			line-height: 60upx;
			text-align: left;
			image{
				width: 34upx;
				height: 34upx;
				vertical-align:middle;
				margin-left: 10upx;
			}
		}
	}
	.exponent{
		width: 100%;
		height: 170upx;
		background: #fff;
		padding-top: 18upx;
		box-sizing: border-box;
		.thrr{
			width: 33.3%;
			height: 130upx;
			float: left;
			border-left: 2upx solid #8DD8FF;
			box-sizing: border-box;
			view:nth-child(1){
				color: #aaaaaa;
				text-align: center;
				font-size: 26upx;
			}
			view:nth-child(2){
				margin-top: 8upx;
				color: #eb4f47;
				text-align: center;
				font-size: 32upx;
				font-weight: 600;
			}
			view:nth-child(3){
				margin-top: 8upx;
				color: #eb4f47;
				text-align: center;
				font-size: 24upx;
				font-weight: 600;
				text{
					display: block;
					width: 50%;
					float: left;
				}
			}
		}
		.thrr:nth-child(1){
			border: none;
		}
		.fail{
			view:nth-child(2){
				color: #1E8449;
			}
			view:nth-child(3){
				color: #1E8449;
			}
		}
	}
	.listName{
		height: 92upx;
		width: 100%;
		text-align: center;
		color: #3d3d3d;
		font-size: 25upx;
		line-height: 92upx;
		border-bottom: 1upx solid #dadada;
		border-top: 1upx solid #dadada;
		// background: #FFFFCC;
		background: #fff;
		view{
			width: 25%;
			float: left;
			height: 92upx;
		}
	}
	.lisBox{
		.lis{
			width: 100%;
			height: 68upx;
			line-height: 68upx;
			text-align: center;
			color: #3d3d3d;
			font-size: 25upx;
			view{
				width: 25%;
				height: 68upx;
				float: left;
				text{
					width: 50%;
					float: left;
					height: 100%;
					box-sizing: border-box;
				}
				text:nth-child(1){
					color: #e8382f;
					text-align: right;
					padding-right: 10upx;
				}
				text:nth-child(2){
					text-align: left;
					padding-left: 10upx;
				}
			}
		}
		.lis:nth-child(2n){
			background: #fff;
		}
	}
	
</style>
