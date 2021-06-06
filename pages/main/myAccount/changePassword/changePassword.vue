<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
		<!-- #endif -->
		<cmd-nav-bar class="nav-bar" :fixed="false" back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="修改密码" font-color="#fff"></cmd-nav-bar>
		<img class="nmLogo" src="../../../../static/icon/logo_ico.png" mode=""></img>
		<view class="inputGroup" style="margin-top:54upx">
			<view class="groupName">
				旧密码
			</view>
			<input type="password" value="" placeholder="请输入旧密码" v-model="oldPass"/>
		</view>
		<view class="inputGroup" style="margin-top:30upx">
			<view class="groupName">
				新密码
			</view>
			<input type="password" value="" placeholder="请输入8至24位字母与数字组合" v-model="newPass1"/>
		</view>
		<view class="inputGroup" style="margin-top:30upx">
			<view class="groupName">
				确认密码
			</view>
			<input type="password" value="" placeholder="请确认密码" v-model="newPass2"/>
		</view>
		
		<view class="isTrue" @click="goChange">保存修改</view>
	</view>
</template>

<script>
	import http from '@/http/interface.js'
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	export default {
		components: {cmdNavBar},
		data() {
			return {
				oldPass : '',
				newPass1 : '',
				newPass2 : ''
			};
		},
		onLoad() {
			
		},
		methods:{
			goChange(){
				if(this.oldPass == '' || this.newPass1 == '' || this.newPass2 == ''){
					uni.showToast({
						title: '不能输入空值',
						position: 'bottom',
						icon: 'none',
						duration: 2500
					})
					return;
				}
				if(this.newPass1 != this.newPass2){
					uni.showToast({
						title: '两次输入密码不一致',
						position: 'bottom',
						icon: 'none',
						duration: 2500
					})
					return;
				}
				
				http.get('user/account/updatePassword',{password:this.oldPass,newPassword:this.newPass1}).then((res)=>{
					this.$store.commit('mainPageNumUpdate',1);
					this.$store.commit('userGoOut',{});
					uni.reLaunch({
						url : '/pages/checkpoint/login/login?msg=修改密码成功，请您重新登录'
					})
				})
				
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
		top: 0;
		left: 0;
		z-index:20;
		width: 100%;
	}
	.content{
		// padding-top: 90upx;
		// top: var(--status-bar-height);
	}
	.nmLogo{
		padding-top: calc(var(--status-bar-height) + 90upx);
		display: block;
		width: 130upx;
		height: 130upx;
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
