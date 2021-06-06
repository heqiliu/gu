<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar back background-color="#d34a43" title="注册" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
		<image class="topBanner" :src="webPath + 'file/' + banner"  mode=""></image>
		<view class="inputList">
			<view class="inputLi">
				<view class="liContent">
					<view class="liImg">
						<image src="../../../static/icon/reg_user.png" style="width: 42upx;height: 46upx" mode=""></image>
					</view>
					<input type="text" value="" placeholder="请输入手机号码" v-model="userPhone"/>
				</view>
			</view>
			<view class="inputLi">
				<view class="liContent">
					<view class="liImg">
						<image src="../../../static/icon/reg_pass.png" style="width: 42upx;height: 46upx" mode=""></image>
					</view>
					<input type="text" password value="" placeholder="请输入8至24位密码" v-model="userPass1"/>
				</view>
			</view>
			<view class="inputLi">
				<view class="liContent">
					<view class="liImg">
						<image src="../../../static/icon/reg_pass.png" style="width: 42upx;height: 46upx" mode=""></image>
					</view>
					<input type="text" password value="" placeholder="请确认密码" v-model="userPass2"/>
				</view>
			</view>
			<view class="inputLi">
				<view class="liContent">
					<view class="liImg">
						<image src="../../../static/icon/reg_id.png" style="width: 42upx;height: 46upx" mode=""></image>
					</view>
					<input type="text"  value="" placeholder="请输入注册码:168" v-model="recCode"/>
				</view>
			</view>
			<view class="inputLi">
				<view class="liContent yzm">
					<view class="liImg">
						<image src="../../../static/icon/reg_yzm.png" style="width: 42upx;height: 46upx" mode=""></image>
					</view>
					<input type="text" value="" placeholder="请输入右图验证码" v-model="imgCode"/>
				</view>
				<view class="yzmBtn yzmImg" @click="getImgCode">
					<image :src="imgCodeSrc" mode=""></image>
				</view>
			</view>
			<view class="inputLi">
				<view class="liContent yzm">
					<view class="liImg">
						<image src="../../../static/icon/reg_yzm.png" style="width: 42upx;height: 46upx"  mode=""></image>
					</view>
					<input type="text" value="" placeholder="短信验证码" v-model="phoneCode"/>
				</view>
				<view class="yzmBtn getYzm" @click="getPhoneCode">
					{{codeTime}}
				</view>
			</view>
			<view class="agreement" @click="rememberPass = !rememberPass">
				<label>
					<checkbox height="16upx" width="16upx" value="cb" checked=""/>我同意财道策略
				</label>
				<text @click="queryAgree">《注册协议》 《交易服务协议》</text>
				
			</view>
			<view class="goRe" @click="goRegistered">
				立即注册
			</view>
			<navigator url="/pages/checkpoint/login/login" hover-class="navigator-hover">
				<view class="isHave">已有账号？立即登录</view>
			</navigator>
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
				rememberPass: true,
				userPhone: '',
				userPass1: '',
				userPass2: '',
				imgCode: '',
				ImgRandom: '',
				imgCodeSrc: '',
				phoneCode : '',
				recCode: '',
				codeTime: '获取',
				
				banner : '',
			};
		},
		// onShow: function() {
		// 	this.imageanimation();
		// },
		onLoad(){
			this.getImgCode();
			this.getBannerImg();
		},
		computed:{
			// listenMainIndexData(){
				// return this.$store.state.mainIndexData;
			// },
			webPath(){
				return this.$store.state.webPath;
			}
		},
		methods:{
			//获取上方的广告图片
			getBannerImg(){
				var _this = this;
				http.get('website/banner/getList',{type:'APP_REGISTER_TOP',status : true,'pageInfo.size':1,'pageInfo.isReturnPage':false}).then((res)=>{
					_this.banner = res.data.data.records[0].path;
				});
			},
			
			goRegistered(){
				var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
				if (!myreg.test(this.userPhone)) {
					uni.showToast({
						position: 'bottom',
						title: '手机格式不正确',
						icon: 'none',
						duration: 2500
					});
					return;
				}
				if (this.userPass1 == '' || this.userPass1 != this.userPass2 || this.userPass1.length < 8 || this.userPass1.length > 24) {
					uni.showToast({
						position: 'bottom',
						title: '密码格式不正确',
						icon: 'none',
						duration: 2500
					});
					return;
				}
				if(!this.rememberPass){
					uni.showToast({
						position: 'bottom',
						title: '请同意《注册协议》《交易服务协议》后再继续',
						icon: 'none',
						duration: 2500
					});
					return;
				}
				if(this.imgCode == ''){
					uni.showToast({
						position: 'bottom',
						title: '图片验证码不能为空',
						icon: 'none',
						duration: 2500
					});
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
				uni.showLoading({
					mask : true,
					title : '注册中~',
					
				})
				http.request({
					url:'register',
					method:'GET',
					data:{
						username:this.userPhone,
						password:this.userPass1,
						invitationCode:this.recCode,
						SmsCode:this.phoneCode,
						imageCode:this.imgCode
					},
					isRe : this.ImgRandom
				}).then((res)=>{
					if(res.data.success){
						uni.navigateTo({
							url : '/pages/checkpoint/login/login?msg=注册成功'
						})
					}
				})
			},
			//获取图片验证码
			getImgCode() {
				//手机唯一识别码
				this.ImgRandom = '';
				/* #ifdef APP-PLUS */
					let uuid = plus.device.uuid;  
					this.ImgRandom = uuid;
				/* #endif */
				this.imgCodeSrc = this.$store.state.webPath + 'getVerifyImage?identifier=' + this.ImgRandom + '&random=' + Math.random();
			},
			queryAgree(){
				uni.navigateTo({
					url: '/pages/main/publicView/news/news?title=注册协议&type=topBar&barType=1010'
				});
				
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
				http.get('getVerifySMS',{phone:this.userPhone}).then((res)=>{
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
			},
			
			
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
		height: 100%;
		background: #fefaeb;
	}
	.topBanner{
		display: block;
		width: 100%;
		height: 350upx;
	}
	.inputList{
		width: 600upx;
		margin: 0 auto;
		margin-top: 30upx;
		.inputLi{
			width: 100%;
			height: 90upx;
			.liContent{
				height: 90upx;
				width: 100%;
				border-bottom: 3upx solid #a8a8a8;
				box-sizing: border-box;
				float: left;
				.liImg{
					width: 80upx;
					height: 90upx;
					float: left;
					display: flex;
					justify-content: center;
					align-items: center;
					image{
						display: block;
					}
				}
				input{
					display: block;
					width: calc(100% - 80upx);
					height: 70upx;
					float: left;
					border: none;
					font-size: 28upx;
					margin-top: 15upx;
				}
			}
			.yzmBtn{
				width: 160upx;
				height: 70upx;
				float: right;
				margin-top: 20upx;
			}
			.yzmImg{
				image{
					display: block;
					width: 100%;
					height: 100%;
				}
			}
			.getYzm{
				background: #FF6D28;
				line-height: 70upx;
				text-align: center;
				color: #fff;
				font-size: 26upx;
				border-radius: 10upx;
			}
			.yzm{
				width: calc(100% - 240upx)
			}
		}
	}
	.agreement{
		width: 100%;
		text-align: left;
		color: #434345;
		font-size: 32upx;
		margin-top: 26upx;
		text{
			color: #d34a34;
		}
	}
	.goRe{
		width: 100%;
		height: 90upx;
		background: #d34a43;
		color: #fff;
		text-align: center;
		line-height: 90upx;
		font-size: 32upx;
		margin-top: 40upx;
		border-radius: 10upx;
	}
	.isHave{
		width: 100%;
		text-align: center;
		margin-top: 30upx;
		color: #5f5f61;
		font-size: 26upx;
	}
</style>
