<template>
	<view class="content">
			<view class="status-bar"></view>
			<cmd-nav-bar class="nav-bar" :fixed="false" back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="我的下载" :right-text="isAgency == false ? '' : '#' " @rightText="jumpMan" font-color="#fff"></cmd-nav-bar>
		<view class="cont">
			<img class="logo" src="../../../../static/icon/logo_ico2.png" mode=""></img>
			<text class="userPhone"></text>
			<view class="bea">
				<view class="d"></view>
			</view>
			<view class="fid">{{myTjrId}}</view>
			<view class="myid">
				注册码
			</view>
			<view class="copyBtn" @click="copyCode">
				复制
			</view>
			<view class="ewmBox">
				<!-- <image src="../../../../static/img/testewm.png" mode=""></image> -->
				<img :src="qr" mode=""></img>
			</view>
			<view class="myid">
				扫码二维码即可下载APP
			</view>
		</view>
		
	</view>
</template>

<script>
	import tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue"
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	import http from '@/http/interface.js'
	import Qr from '@/units/core/wxqrcode.js'
	export default {
		components: {cmdNavBar,tkiQrcode},
		data() {
			return {
				userPhone : this.$store.state.userInfo.phone,
				myTjrId : '',
				qr : '',
				isMan : '',
				isAgency: false
			};
		},
		computed:{
			// agent(){
			// 	return this.$store.state.userInfo.agent;
			// }
		},
		mounted() {
			uni.showLoading({})
			http.get('user/brokerage/get',{}).then((res)=>{
				this.myTjrId = res.data.data.uid;
				this.isAgency = res.data.data.isAgency;
				this.getQr(this.$store.state.webPath + 'static/register.html?upCode=' + this.myTjrId);
			})
		},
		methods:{
			copyCode(){
				let _this = this
				uni.setClipboardData({
				    data: _this.myTjrId,
					success: function () {
						
					}
				})
			},
			getQr(text){
				this.qr = Qr.createQrCodeImg(text)
				console.log("aaa"+this.qr);
			},
			jumpMan(){
				if(this.isAgency == false){
					return;
				}
				uni.navigateTo({
					url:"/pages/main/myAccount/myDownload/management/management"
				})
			}
		},
		filters: {
	　　　　 timeZhuan(value) {
				 var date = new Date(value);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
				   var Y = date.getFullYear() + '-';
				   var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
				   var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
				   var h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
				   var m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + ':';
				   var s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
				   return Y+M+D;
	　　　　 }
	　　}
	}
</script>

<style lang="scss">
	.cmd-nav-bar-right-text{
		padding: 0 20upx;
		font-size: 32upx;
	}
</style>

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
		top: 0;
		left: 0;
		z-index:2;
		width: 100%;
	}
	.content{
		/*距离顶部范围应该在88-95范围内*/
		/*  #ifdef  APP-PLUS  */
		// padding-top: 90upx;
		/*  #endif  */
		// top: var(--status-bar-height);
		// padding-bottom: 50upx;
	}
	.cont{
		width: 100%;
		padding-top: calc(var(--status-bar-height) + 110upx);
		.logo{
			display: block;
			width: 170upx;
			height: 170upx;
			margin: 0 auto;
			// border:2upx solid #FF6D28;
			border-radius: 12upx;
			padding: 15upx;
			box-sizing: border-box;
		}
		.userPhone{
			display: block;
			color: #FF6D28;
			text-align: center;
			font-size: 26upx;
			margin-top: 15upx;
			font-weight: 600;
			
		}
		.bea{
			width: 400upx;
			height: 88upx;
			position: relative;
			margin: 0 auto;
			.d{
				position: absolute;
				left: 0;
				right: 0;
				margin: 0 auto;
				top: 41upx;
				width: 5upx;
				height: 5upx;
				background: #FF6D28;
			}
		}
		.bea:after{
			content: '';
			position: absolute;
			left: 0;
			top: 42upx;
			width: 170upx;
			height: 2upx;
			background: #FF6D28;
		}
		.bea:before{
			content: '';
			position: absolute;
			right: 0;
			top: 42upx;
			width: 170upx;
			height: 2upx;
			background: #FF6D28;
		}
		.fid{
			text-align: center;
			font-size: 46upx;
			color: #FF9226;
			font-weight: 600;
		}
		.myid{
			font-size: 28upx;
			color: #999;
			text-align: center;
			line-height: 50upx;
		}
		.copyBtn{
			width: 136upx;
			height: 44upx;
			line-height: 44upx;
			text-align: center;
			font-size: 28upx;
			color: #FF6D28;
			border: 2upx solid #FF6D28;
			border-radius: 12upx;
			margin: 0 auto;
			margin-top: 15upx;
		}
		.ewmBox{
			width: 300upx;
			height: 300upx;
			margin: 0 auto;
			padding: 24upx;
			box-sizing: border-box;
			border: 2upx solid #FF9226;
			margin-top: 30upx;
			img{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
	}
	
	
</style>
