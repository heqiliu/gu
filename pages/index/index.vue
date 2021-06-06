
<template>
	<view class="contentMain">
		<scroll-view class="container" scroll-y scroll-top="1">
			<home v-if="pageNum == 1"></home>
			<!-- <optionalStock v-if="pageNum == 2"></optionalStock>
			<stockPool v-if="pageNum == 3"></stockPool>
			<transaction v-if="pageNum == 4"></transaction>
			<myAccount v-if="pageNum == 5"></myAccount> -->
		</scroll-view>
		<view class="bottomNav">
			
		</view>
		<view class="bottomTu">
			
		</view>
	</view>
</template>

<script>
	import home from '../main/home/home'
	// import myAccount from '../main/myAccount/myAccount'
	// import optionalStock from '../main/optionalStock/optionalStock'
	// import transaction from '../main/transaction/transaction'
	// import stockPool from '../main/stockPool/stockPool'
	import http from '@/http/interface.js'
	
	export default {
		// components: { home , myAccount , optionalStock , transaction , stockPool},
		components: { home },
		data() {
			return {
				pageNum : 4,
				transDataSet : "",
				showBanalTip :0,
			
			}
		},
		computed: {
		    mainPageNum () {
				return this.$store.state.mainPageNum;
		    }
		},
		onLoad() {
		this.pageNum = this.$store.state.mainPageNum;
		let _this = this;
		},
		
		created(){
			  // 从本地缓存中同步获取指定 key 对应的内容，用于判断是否是第一次打开应用
			  if (this.$store.state.userInfo.token != '') {
				
					  uni.reLaunch({
						url: '/pages/main/main',
						  
			  })
			  console.log("判断是否已经登陆过的用户")
				return;
			  }else{
				   console.log("判断是否未登陆过的用户")
			  }
			    
			 
			
			
		},
		
	}
</script>

<style lang="scss">
	.contentMain{
		height: 100%;
		background: #fbfbfb;
	}
	.container{
		height: calc(100% - 100upx);
		// overflow-y: scroll;
		// -webkit-overflow-scrolling: touch;
		width: 100%;
		text-align: center;
		// background: #333333
	}
	.bottomNav{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 99upx;
		background: #ffffff;
		border-top: 1upx solid #ffffff;
		box-shadow: 0upx 0upx 7upx #C3C3C3;
		z-index: 999;
		ul{
			margin: 0;
			padding: 0;
			width: 100%;
			height: 100%;
			li{
				float: left;
				list-style: none;
				width: 20%;
				height: 100%;
				position: relative;
				
				image{
					width: 48upx;
					height: 48upx;
					display: block;
					margin: 0 auto;
					margin-top: 10upx;
				}
				.tu{
					width: 90upx;
					height: 90upx;
					background: #fff;
					position: absolute;
					left: 0;
					right: 0;
					top: -26upx;
					margin: 0 auto;
					border-radius: 50%;
					image{
						width: 80upx;
						height: 80upx;
						display: block;
						margin-top: 5rpx;
					}
				}
				.is{
					display: none;
				}
				.nois{
					display: block;
				}
				span{
					display: block;
					width: 100%;
					text-align: center;
					font-size: 24upx;
					color: #b9b9b9;
					margin-top: 5upx;
				}
			}
			.isTask{
				.is{
					display: block;
				}
				.nois{
					display: none;
				}
				span{
					color: #FF6D28;
				}
			}
		}
	}
	.bottomTu{
		position: fixed;
		width: 90upx;
		height: 90upx;
		background: #fff;
		left: 0;
		right: 0;
		margin: 0 auto;
		bottom: 40upx;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0upx 0upx 7upx #A0A0A0;
		// border:1upx solid #FF6D28;
	}
	
</style>
