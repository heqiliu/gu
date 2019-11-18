<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="找回密码" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
		<image class="nmLogo" src="../../../static/icon/logo_ico.png" mode=""></image>
		<view class="inputGroup" style="margin-top:54upx">
			<view class="groupName">
				手机号码
			</view>
			<input type="number" value="" placeholder="请输入注册时的手机号码" v-model="userPhone"/>
		</view>
		<!-- <view class="inputGroup" style="margin-top:28upx">
			<view class="groupName"></view>
			<view class="yzmBox">
				<view class="yzmImg">验证码图片</view>
				<view class="nextimg">换一张</view>
			</view>
		</view> -->
		<view class="inputGroup yzmGroup" style="margin-top:15upx">
			<view class="groupName">
				验证码
			</view>
			<input type="text" value="" placeholder="短信验证码" v-model="phoneCode"/>
			<view class="getPhoneCode" @click="getPhoneCode">{{codeTime}}</view>
		</view>
		<view class="inputGroup" style="margin-top:15upx">
			<view class="groupName">
				新密码
			</view>
			<input type="password" value="" placeholder="请输入新密码" v-model="newPass1"/>
		</view>
		<view class="inputGroup" style="margin-top:15upx">
			<view class="groupName">
				确认密码
			</view>
			<input type="password" value="" placeholder="请输入再次输入新密码" v-model="newPass2"/>
		</view>
		<view class="isTrue" @click="goBack">确认找回</view>
	</view>
</template>

<script>
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	import http from '@/http/interface.js'
	export default {
		components: {cmdNavBar},
		data() {
			return {
				userPhone : '',
				codeTime : '获取',
				newPass1 : '',
				newPass2 : '',
				phoneCode : ''
			};
		},
		methods:{
			goBack(){
				if(!(/^1[3456789]\d{9}$/.test(this.userPhone))){ 
					uni.showToast({
						title: '手机号码输入有误',
						icon: 'none',
						duration: 2500
					})
					return; 
				}
				if(this.phoneCode == ''){
					uni.showToast({
						title: '短信验证码不能为空',
						icon: 'none',
						duration: 2500
					})
					return;
				}
				if(this.newPass1 != this.newPass2 || this.newPass1 == ''){
					uni.showToast({
						title: '两次输入密码不一致',
						icon: 'none',
						duration: 2500
					})
					return;
				}
				http.get('member/forgetPwd',{phone:this.userPhone,newPwd:this.newPass1,phoneCode:this.phoneCode}).then((res)=>{
					uni.reLaunch({
						url : '/pages/checkpoint/login/login?msg=修改密码成功'
					})
				})
			},
			getPhoneCode(){
				if(!(/^1[3456789]\d{9}$/.test(this.userPhone))){ 
					uni.showToast({
						title: '手机号码输入有误',
						icon: 'none',
						duration: 2500
					})
					return; 
				}
				if(this.codeTime != '获取'){
					return;
				}
				uni.showLoading({
					title : '发送中',
					mask:true
				})
				http.get('member/getPhoneCode',{phone:this.userPhone}).then((res)=>{
					uni.showToast({
						title: '验证码发送成功',
						icon: 'none',
						duration: 2500
					})
					let _this = this;
					let t = 60;
					_this.codeTime = '60s';
					let codeSet = setInterval(()=>{
						t--;
						_this.codeTime = t + 's';
						if(t == 1){
							_this.codeTime = '获取';
							clearInterval(codeSet)
						}
					},1000)
					
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding-top: 90upx;
		top: var(--status-bar-height);
	}
	.nmLogo{
		display: block;
		width: 160upx;
		height: 160upx;
		margin: 0 auto;
		margin-top: 80upx;
	}
	.inputGroup{
		width: 620upx;
		height: 70upx;
		margin: 0 auto;
		.groupName{
			height: 70upx;
			width: 140upx;
			text-align: right;
			line-height: 70upx;
			color: #393939;
			padding-right: 16upx;
			box-sizing: border-box;
			font-size: 28upx;
			float: left;
			font-weight: 600;
		}
		input{
			float: left;
			height: 70upx;
			width: calc(100% - 140upx);
			border: 2upx solid #939393;
			box-sizing: border-box;
			border-radius: 8upx;
			font-size: 28upx;
			color: #333;
			padding-left: 15upx;
		}
		.yzmBox{
			float: left;
			height: 70upx;
			width: calc(100% - 140upx);
			.yzmImg{
				width: 300upx;
				height: 80upx;
				float: left;
				image{
					display: block;
					width: 300upx;
					height: 80upx;
				}
			}
			.nextimg{
				height: 80upx;
				float: left;
				color: #e94a43;
				line-height: 80upx;
				font-size: 28upx;
			}
		}
	}
	.yzmGroup{
		input{
			width: 365upx;
		}
		.getPhoneCode{
			width: 100upx;
			height: 70upx;
			background: #FF6D28;
			color: #fff;
			text-align: center;
			line-height: 70upx;
			float: right;
			font-size: 28upx;
			border-radius: 10upx;
		}
	}
	.isTrue{
		width: 670upx;
		height: 86upx;
		line-height: 86upx;
		text-align: center;
		color: #fff;
		border-radius: 10upx;
		background: #FF6D28;
		font-size: 32upx;
		margin: 0 auto;
		margin-top: 35upx;
	}
	
</style>
