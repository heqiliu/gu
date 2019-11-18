<template>
	<view class="content">
		<image class="loginBg" src="../../../static/img/login_bg.png" mode=""></image>
		<view class="loginBox">
			<image class="niumiIcon" src="../../../static/icon/logo_ico.png" mode=""></image>
			<view class="inputs">
				<view class="groupLi">
					<view class="liImg">
						<image style="width: 42upx;height: 42upx;" src="../../../static/icon/m_user.png" mode=""></image>
					</view>
					<view class="liPut">
						<input type="text" value="" placeholder="用户名" placeholder-style="color:#fff" v-model="userPhone" />
						<!-- <i class="uni-btn-icon" style="color: rgb(255, 255, 255);font-size: 27px;" @click="isShowHis=!isShowHis"></i> -->

						<view class="liImg" @click="isShowHis=!isShowHis">
							<image style="width: 8px; height: 16px; transform: rotate(90deg);" src="../../../static/icon/bar_right.png"></image>
						</view>
					</view>
				</view>
				<view class="history" v-show="isShowHis">
					<p v-for="(item,i) in userPhoneNum" :key="i" @click="showHis(item)">{{item}}</p>
				</view>

				<view class="groupLi" style="margin-top: 24upx;">
					<view class="liImg">
						<image style="width: 42upx;height: 42upx;" src="../../../static/icon/m_pass.png" mode=""></image>
					</view>
					<view class="liPut">
						<input password=true value="" placeholder="密码" placeholder-style="color:#fff" v-model="userPwd" />
					</view>
				</view>
			</view>
			<view class="funBox">
				<!-- <view class="left">
					<label>
						<checkbox height="16upx" width="16upx" value="cb" :checked="rememberPass" />记住密码
					</label>
				</view> -->
				<navigator url="/pages/checkpoint/forgotPassword/forgotPassword" hover-class="navigator-hover">
					<view class="right">
						忘记密码？
					</view>
				</navigator>
			</view>
			<view class="loginBtn" @click="goLogin">
				登录
			</view>
			<navigator url="/pages/checkpoint/register/register">
				<view class="newUser">
					新用户注册
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	import http from '@/http/interface.js'
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	export default {
		components: {
			uniIcon
		},
		data() {
			return {
				isShowHis: false,
				rememberPass: true,
				userPhone: '',
				userPwd: '',
				userPhoneNum: []
				// JSON.parse(localStorage.getItem('userPhoneNum')) ? JSON.parse(localStorage.getItem('userPhoneNum')) :
				// 	[]
			};
		},
		onLoad(options) {
			if (options.msg != undefined) {
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: options.msg
				})
			}
			var _self = this;
			uni.getStorage({
				key: "userPhoneNum",
				success(e) {
					_self.userPhoneNum = JSON.parse(e.data) ? JSON.parse(e.data) : [] //这就是你想要取的token
				}
			})

		},
		methods: {
			goLogin() {
				if (this.userPhone == '' || this.userPwd == '') {
					uni.showToast({
						title: '用户名或密码不能为空！',
						position: 'bottom',
						icon: 'none'
					})
					return;
				}
				uni.showLoading({
					title: '正在登录~',
					mask: true
				});
				http.get('member/login', {
					phone: this.userPhone,
					loginPwd: this.userPwd
				}).then((res) => {
					if (res.data.success) {
						let obj = res.data.data;
						if (res.data.data.capitalType == undefined) {
							obj.capitalType = '';
						}
						obj.phone = this.userPhone;
						this.$store.commit('userIsLogin', obj);

						//增加历史账号记录shenfei 2019/11/17
						if (this.userPhoneNum.length == 0) {
							this.userPhoneNum.unshift(this.userPhone);
							// localStorage.setItem('userPhoneNum', JSON.stringify(this.userPhoneNum));
							try {
								uni.setStorage({
									key: "userPhoneNum",
									data: JSON.stringify(this.userPhoneNum)
								})
							} catch (e) {
								//TODO handle the exception
							}

						}
						for (var i = 0; i < this.userPhoneNum.length; i++) {
							if (this.userPhoneNum.indexOf(this.userPhone) == -1) {
								this.userPhoneNum.unshift(this.userPhone);
								if (this.userPhoneNum.length > 5) {
									this.userPhoneNum.pop();
								}
								// localStorage.setItem('userPhoneNum', JSON.stringify(this.userPhoneNum));
								try {
									uni.setStorage({
										key: "userPhoneNum",
										data: JSON.stringify(this.userPhoneNum)
									})
								} catch (e) {
									//TODO handle the exception
								}


							}
						}


						uni.redirectTo({
							url: '/pages/main/main'
						})
					}
				})
			},

			//显示历史账号
			showHis(item) {
				this.userPhone = item;
				this.isShowHis = false;
			}

		},
		mounted() {


		}
	}
</script>

<style lang="scss" scoped>
	.uni-btn-icon {
		-webkit-transform: rotate(-90deg);
	}

	.history {
		background-color: #FFF;
		position: absolute;
		width: 369px;
		color: #333;
		z-index: 100;

		p {
			padding: 5px;
			font-size: 15px;
		}
	}

	.content {
		width: 100%;
		height: 100%;
	}

	.loginBg {
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 5;
		filter: blur(0upx);
	}

	.loginBox {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		padding-top: 110upx;
		box-sizing: border-box;

		.niumiIcon {
			display: block;
			width: 240upx;
			height: 240upx;
			margin: 0 auto;
			border-radius: 50%;
			border: 10upx solid #fff;
			box-sizing: border-box;
			padding: 20upx;
			opacity: 0;
		}
	}

	.inputs {
		width: 670upx;
		margin: 0 auto;
		margin-top: 110upx;

		.groupLi {
			width: 100%;
			height: 75upx;
			background: rgba(0, 0, 0, 0.2);
			border-radius: 8upx;
			overflow: hidden;

			.liImg {
				width: 80upx;
				height: 75upx;
				float: left;
				display: flex;
				justify-content: center;
				align-items: center;

				image {
					display: block;
				}
			}

			.liPut {
				float: left;
				height: 75upx;
				width: calc(100% - 80upx);
				display: flex;
				justify-content: center;
				align-items: center;

				input {
					display: block;
					width: 100%;
					color: #fff;
					font-size: 28upx;
				}
			}
		}
	}

	.funBox {
		width: 620upx;
		height: 30upx;
		margin: 0 auto;
		margin-top: 26upx;
		font-size: 24upx;
		color: #fff;

		.left {
			float: left;
			color: #fff;
			height: 30upx;
		}

		.right {
			float: right;
		}
	}

	.loginBtn {
		width: 675upx;
		height: 80upx;
		// border: 2upx solid #EF9435;
		border-radius: 10upx;
		margin: 0 auto;
		margin-top: 66upx;
		text-align: center;
		color: #fff;
		line-height: 80upx;
		font-size: 30upx;
		background: #FF9226;
	}

	.newUser {
		color: #fff;
		font-size: 28upx;
		text-align: center;
		width: fit-content;
		margin: 0 auto;
		margin-top: 62upx;
	}
</style>
