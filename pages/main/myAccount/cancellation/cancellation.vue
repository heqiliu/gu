<template>
	<view class="content">
		<view class="status-bar"></view>
		<cmd-nav-bar back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="注销账户" font-color="#fff"></cmd-nav-bar>
		<image class="nmLogo" src="../../../../static/icon/logo_ico.png" mode=""></image>
		<view class="inputGroup" style="margin-top:54upx">
			<view class="groupName">
				密码
			</view>
			<input type="password" value="" placeholder="请输入密码" v-model="userPass"/>
		</view>
		<view class="isTrue" @click="goChange">注销账户</view>
	</view>
</template>

<script>
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	import http from '@/http/interface.js'
	export default {
		components: {cmdNavBar},
		data() {
			return {
				userPass : ''
			};
		},
		methods : {
			goChange(){
				if(this.userPass == ''){
					uni.showModal({
						title:'提示',
						content:'请输入密码',
						showCancel:false
					})
					return;
				}
				uni.showModal({
					title: '警告',
					content: '是否确认注销账户',
					success: function (res) {
						if (res.confirm) {
							uni.showLoading({
								title : '正在注销'
							})
							http.get('member/destroyMember',{phone:this.$store.state.userInfo.phone}).then((res)=>{
								_this.$store.commit('mainPageNumUpdate',1);
								_this.$store.commit('userGoOut',{});
								uni.reLaunch({
									url: '/pages/checkpoint/login/login?msg=已注销'
								});
							})
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
		top: var(--status-bar-height);
		padding-bottom: 95upx;
	}
	.nmLogo{
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
