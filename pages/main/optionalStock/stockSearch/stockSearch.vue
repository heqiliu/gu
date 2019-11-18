<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<!-- <cmd-nav-bar background-color="linear-gradient(to right, #EF9435, #E95E28)" title="搜索" iconTwo="reload" font-color="#fff"></cmd-nav-bar> -->
		<!-- #endif -->
		<view class="searchBox">
			<input type="text" value="" maxlength="6" placeholder="证券名称 / 代码 / 简称" focus="true" @input="listenVal"/>
			<view class="cancelBtn" @click="goBack()">取消</view>
		</view>
		<view class="searchTitle">
			{{showMsg}}
		</view>
		<view class="resultList">
			<!-- <view class="lis" v-for="i in 5" :key="i">
				<view>603126</view>
				<view>种菜节能</view>
				<view>已加入自选股</view>
			</view> -->
			<view class="lis" v-for="(el,i) in stockArr" :key="i">
				<view>{{el.stockCode}}</view>
				<view>{{el.stockName}}</view>
				<view @click="addStock(el)">
					<image src="../../../../static/icon/addThis.png" mode=""></image>
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
			return {
				showMsg : '最近搜索',
				stockArr : []
			};
		},
		methods:{
			goBack(){
				uni.navigateBack({})
			},
			listenVal(event){
				event.target.value.length > 0 ? this.showMsg = '搜索结果' : this.showMsg = '最近搜索';
				if(event.target.value.length == 6){
					uni.showLoading({
						title: ''
					});
					http.get('stock/getStockInfo',{stockCode:event.target.value}).then((res)=>{
						this.stockArr.push(res.data.data);
						this.stockArr.length = 1;
					})
				}else{
					this.stockArr = []
				}
			},
			addStock(el){
				http.get('stock/addStock',{stockCode:el.stockCode,stockName:el.stockName,holder:this.$store.state.userInfo.phone}).then((res)=>{
					uni.showModal({
						title : '提示',
						content : '已关注',
						showCancel : false,
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		/*距离顶部范围应该在88-95范围内*/
		/*  #ifdef  APP-PLUS  */
		// padding-top: 90upx;
		/*  #endif  */
		top: var(--status-bar-height);
		background: #f2f2f2;
		height: 100%;
	}
	.searchBox{
		width: 100%;
		height: 70upx;
		padding: 0 20upx;
		box-sizing: border-box;
		padding-top: 20upx;
		input{
			width: calc(100% - 70upx);
			height: 70upx;
			background: #fff;
			float: left;
			border-radius: 100upx;
			color: #222120;
			padding-left: 20upx;
			box-sizing: border-box;
			font-size: 28upx;
		}
		.cancelBtn{
			width: 70upx;
			float: right;
			text-align: right;
			height: 70upx;
			color: #292d2d;
			font-size: 28upx;
			font-weight: 500;
			line-height: 70upx;
		}
	}
	.searchTitle{
		width: 100%;
		padding: 0 20upx;
		box-sizing: border-box;
		height: 80upx;
		line-height: 80upx;
		color: #2b2b2b;
		font-size: 26upx;
		text-align: left;
		font-weight: 600;
	}
	.resultList{
		background: #fff;
		padding-left: 20upx;
		box-sizing: border-box;
		.lis{
			height: 90upx;
			width: 100%;
			border-bottom: 2upx solid #e9e9e9;
			line-height: 90upx;
			padding-right: 20upx;
			box-sizing: border-box;
			view{
				float: left;
				height: 90upx;
				font-size: 28upx;
				color: #555;
			}
			view:nth-child(1){
				width: 30%;
				text-align: left;
			}
			view:nth-child(2){
				width: 30%;
				text-align: center;
			}
			view:nth-child(3){
				width: 40%;
				color: #989898;
				text-align: right;
				font-size: 24upx;
				image{
					display: block;
					width: 44upx;
					height: 44upx;
					float: right;
					margin-top: 23upx;
				}
			}
		}
		.lis:last-child{
			border: none;
		}
	}
	
</style>
