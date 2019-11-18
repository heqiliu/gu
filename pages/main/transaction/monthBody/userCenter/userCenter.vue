<template>
	<view class="contents">
		<view class="userbody">
			<view class="infoBox">
				<view class="imgBox">
					<image :src="imgArray.img1" mode=""></image>
				</view>
				<text class="userPhone">
					132****2654
				</text>
			</view>
			<view class="userAssets">
				<view class="left">
					<text>总资产</text>
					<text>0.00</text>
				</view>
				<view class="right">
					<view class="rbtn" @click="rollOut" style="background: #5fa2e2;">资金转出</view>
					<view class="rbtn" @click="moneyInto" style="background: #f5bd41;margin-right: 18upx;">资金转入</view>
				</view>
			</view>
			<view class="userm">
				<view class="bro">
					<text>证券净值</text>
					<text>0.00</text>
				</view>
				<view class="bro">
					<text>现金资产</text>
					<text>0.00</text>
				</view>
			</view>
		</view>
		<view class="funList">
			<navigator url="/pages/main/transaction/monthBody/userCenter/capitalSubsidiary/capitalSubsidiary">
				<view class="lis">
					<view class="imgbox">
						<image :src="imgArray.img2" mode=""></image>
					</view>
					<view class="funName">资金明细</view>
					<view class="zhidao">
						<image :src="imgArray.img3" mode=""></image>
					</view>
				</view>
			</navigator>
			<navigator url="/pages/main/transaction/monthBody/userCenter/customizeStock/customizeStock">
				<view class="lis">
					<view class="imgbox">
						<image :src="imgArray.img4" mode=""></image>
					</view>
					<view class="funName">自选股票</view>
					<view class="zhidao">
						<image :src="imgArray.img3" mode=""></image>
					</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgArray : {
					img1: require('../../../../../static/icon/userHead.png'),
					img2: require('../../../../../static/icon/zjmx.png'),
					img3: require('../../../../../static/icon/bar_right.png'),
					img4: require('../../../../../static/icon/zxgp.png'),
				}
			};
		},
		methods:{
			rollOut(){
				
			},
			moneyInto(){
				uni.navigateTo({
					url : '/pages/main/transaction/monthBody/userCenter/moneyInto/moneyInto'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.userbody{
		width: 100%;
		padding: 0 30upx;
		box-sizing: border-box;
		margin: 0 auto;
		background: #fcfcfc;
		.infoBox{
			width: 100%;
			height: 146upx;
			border-bottom: 2upx solid #ececec;
			line-height: 146upx;
			color: #1b1b1b;
			.imgBox{
				width: 110upx;
				height: 146upx;
				line-height: 146upx;
				display: flex;
				align-items: center;
				float: left;
				image{
					display: block;
					width: 80upx;
					height: 80upx;
				}
			}
			.userPhone{
				float: left;
				font-size: 30upx;
			}
		}
		.userAssets{
			width: 100%;
			height: 140upx;
			border-bottom: 2upx solid #ececec;
			.left{
				float: left;
				color: #1b1b1b;
				height: 140upx;
				text{
					display: block;
					height: 50%;
				}
				text:nth-child(1){
					font-size: 24upx;
					line-height: 100upx;
				}
				text:nth-child(2){
					font-size: 36upx;
					font-weight: 600;
				}
			}
			.right{
				float: right;
				height: 100%;
				padding-top: 40upx;
				box-sizing: border-box;
				.rbtn{
					width: 130upx;
					height: 56upx;
					text-align: center;
					line-height: 56upx;
					color: #fff;
					font-size: 28upx;
					float: right;
				}
			}
		}
		.userm{
			width: 100%;
			height: 140upx;
			padding-top: 40upx;
			box-sizing: border-box;
			.bro{
				float: left;
				width: 50%;
				height: 100%;
				padding-left: 34upx;
				box-sizing: border-box;
				position: relative;
				text{
					display: block;
					font-size: 24upx;
					color: #1b1b1b;
				}
				text:nth-child(1){
					line-height: 20upx;
				}
				text:nth-child(2){
					line-height: 60upx;
					font-weight: 600;
				}
			}
			.bro:after{
				content: '';
				position: absolute;
				width: 20upx;
				height: 20upx;
				background: #f5bd41;
				left: 0;
				top: 0;
			}
			.bro:nth-child(2):after{
				content: '';
				background: #5fa2e2;
			}
		}
	}
	.funList{
		width: 100%;
		.lis{
			width: 100%;
			height: 100upx;
			border-top: 2upx solid #e1e1e1;
			border-bottom: 2upx solid #e1e1e1;
			line-height: 100upx;
			margin-top: 20upx;
			padding-left: 10upx;
			box-sizing: border-box;
			background: #fff;
			.imgbox{
				width: 70upx;
				height: 100upx;
				display: flex;
				justify-content: center;
				align-items: center;
				float: left;
				image{
					display: block;
					width: 48upx;
					height: 48upx;
				}
			}
			.funName{
				height: 100%;
				float: left;
				font-size: 28upx;
				color: #1c1c1c;
				padding-left: 10upx;
			}
			.zhidao{
				float: right;
				width: 100upx;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					display: block;
					width: 14upx;
					height: 24upx;
				}
			}
		}
	}
</style>
