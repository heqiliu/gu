<template>
	<view class="content">
		
		<!-- #ifdef APP-PLUS -->
		<view class="status-bar"></view>
		<!-- #endif -->
		<cmd-nav-bar back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="实名认证" font-color="#fff"></cmd-nav-bar>
		<view class="inputGroup" style="margin-top:54upx">
			<view class="groupName">
				真实姓名
			</view>
			<input type="text" value="" placeholder="请输入真实姓名" :disabled="isVer" v-model="userName"/>
		</view>
		<view class="inputGroup" style="margin-top:30upx">
			<view class="groupName">
				身份证
			</view>
			<input type="idcard" value="" placeholder="请输入身份证号码" :disabled="isVer" v-model="userCard"/>
		</view>
		<view class="inputGroup" style="margin-top:30upx" v-if="!isVer">
			<view class="groupName">
				确认身份证
			</view>
			<input type="idcard" value="" placeholder="请确认身份证号" v-model="userCard2"/>
		</view>
		<view class="inputGroup" style="margin-top:30upx" v-if="!isVer">
			<view class="groupName">
				身份证照片
			</view>
			<view class="uploadImg" @click="uploadCardImg">{{isCardUpload == '' ? '未上传' : '已上传'}}</view>
		</view>
		<view class="isTrue" v-if="!isVer" @click="goverified">提交实名</view>
	</view>
</template>

<script>
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	import http from '@/http/interface.js'
	export default {
		components: {cmdNavBar},
		data() {
			return {
				isVer : true,
				userName : '',
				userCard : '',
				userCard2 : '',
				isCardUpload : ''
			};
		},
		onLoad() {
			uni.showLoading({
				mask:true
			})
			this.initData();
		},
		methods:{
			initData(){
				let _this = this;
				http.get('bindBankCard/tobind',{phone:this.$store.state.userInfo.phone}).then((res)=>{
					if(res.data.data == undefined){
						_this.isVer = false
					}else{
						_this.isVer = true
						_this.userName = res.data.data.realName;
						_this.userCard = res.data.data.idCard;
					}
				})
			},
			uploadCardImg(){
				let _this = this;
				   uni.chooseImage({
					count: 1,
					sizeType: ['original'], //可以指定是原图还是压缩图，默认二者都有
					success: function (res) {
						uni.showLoading({
							mask:true
						});
						const tempFilePaths = res.tempFilePaths;
						const uploadTask = uni.uploadFile({
							url : _this.$store.state.webPath + 'file/upload',
							filePath: tempFilePaths[0],
							name: 'file',
							formData: {},
							success: function (uploadFileRes) {
								uni.hideLoading()
								_this.isCardUpload = JSON.parse(uploadFileRes.data).data;
							},
							error(){
								uni.hideLoading()
							}
						});
					},
					error : function(e){
						console.log(e);
					}
				});
			},
			goverified(){
				if(this.userName == '' || this.userCard == '' || this.userCard2 == ''){
					uni.showModal({
						title : '提示',
						content : '输入信息不能为空',
						showCancel : false,
					})
					return;
				}
				if(this.userCard != this.userCard2){
					uni.showModal({
						title : '提示',
						content : '两次输入身份证信息不一致',
						showCancel : false,
					})
					return
				}
				if(this.isCardUpload == ''){
					uni.showModal({
						title : '提示',
						content : '请先上传身份证照片',
						showCancel : false,
					})
					return
				}
				uni.showLoading({
					mask:true
				})
				http.get('member/realName',{
					realName:this.userName,
					idCard:this.userCard,
					phone:this.$store.state.userInfo.phone,
					idCardImg:this.isCardUpload,
				}).then((res)=>{
					uni.showModal({
						title : '提示',
						content : '实名认证已提交',
						showCancel : false,
					})
					this.initData();
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		/*距离顶部范围应该在88-95范围内*/
		padding-top: 90upx;
		top: var(--status-bar-height);
	}
	
	.inputGroup{
		width: 640upx;
		height: 70upx;
		margin: 0 auto;
		.groupName{
			height: 70upx;
			width: 160upx;
			text-align: right;
			line-height: 70upx;
			color: #393939;
			padding-right: 16upx;
			box-sizing: border-box;
			font-size: 28upx;
			float: left;
			font-weight: 600;
		}
		input,.uploadImg{
			float: left;
			height: 70upx;
			width: calc(100% - 160upx);
			border: 2upx solid #939393;
			box-sizing: border-box;
			border-radius: 8upx;
			font-size: 28upx;
			color: #333;
			padding-left: 15upx;
		}
		.uploadImg{
			text-align: center;
			line-height: 70upx;
			background: #FFFAE8;
			padding: 0;
			color: #555;
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
