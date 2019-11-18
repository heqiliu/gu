<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<!-- <view class="status-bar"></view> -->
			<!-- <cmd-nav-bar background-color="#1480ED" title="个人中心" iconTwo="reload" font-color="#fff"></cmd-nav-bar> -->
		<!-- #endif -->
		<view class="userInfo">
			<image class="userBack" mode="aspectFill" :src="imgArray.userBack"></image>
			<view class="userContent">
				<image class="userHead" :src="imgArray.userHead" mode=""></image>
				<view class="userName">
					<image :src="imgArray.vip" mode=""></image>
					<text>{{userData.balance.holder || 'USER'}}</text>
				</view>
				<view class="num">{{
					(parseInt( userData.balance.quota * 100 ) / 100 ).toFixed(2)
					|| '0.00'
				}}</view>
				<view class="myMn">我的资产（元）</view>
				<view class="assetsOpe">
					<navigator url="/pages/main/myAccount/pay/pay">
						<view class="btn">
							<text>充值</text>
						</view>
					</navigator>
					<view class="btn" @click="goCash">
						<text>提现</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="funList">
			<view class="lis" @click="goBindCard">
				<view class="funIcon">
					<image style="width:40upx;height:32upx" :src="imgArray.funImg1" mode=""></image>
				</view>
				<view class="funName">
					实名认证
				</view>
				<view class="funRight">
					<image :src="imgArray.funRight" mode=""></image>
				</view>
				<view class="result">
					{{isBindIdCard == 2 || isBindIdCard == 0 ? '未认证' : '已认证'}}
				</view>
			</view>
			<view class="lis" @click="goBindBank">
				<view class="funIcon">
					<image :src="imgArray.funImg2" mode=""></image>
				</view>
				<view class="funName">
					绑定银行卡
				</view>
				<view class="funRight">
					<image :src="imgArray.funRight" mode=""></image>
				</view>
				<view class="result">
					<!-- 已绑定 -->
				</view>
			</view>
			<navigator url="/pages/main/myAccount/changePassword/changePassword">
				<view class="lis">
					<view class="funIcon">
						<image :src="imgArray.funImg3" mode=""></image>
					</view>
					<view class="funName">
						修改密码
					</view>
					<view class="funRight">
						<image :src="imgArray.funRight" mode=""></image>
					</view>
				</view>
			</navigator>
		</view>
		<view class="funList">
			<!-- <navigator url="/pages/main/myAccount/luckyDraw/luckyDraw">
				<view class="lis">
					<view class="funIcon">
						<image :src="imgArray.funImg4" mode=""></image>
					</view>
					<view class="funName">
						奖励合约
					</view>
					<view class="funRight">
						<image :src="imgArray.funRight" mode=""></image>
					</view>
				</view>
			</navigator> -->
			<navigator url="/pages/main/myAccount/myDownload/myDownload">
				<view class="lis">
					<view class="funIcon">
						<image :src="imgArray.funImg5" mode=""></image>
					</view>
					<view class="funName">
						扫码下载
					</view>
					<view class="funRight">
						<image :src="imgArray.funRight" mode=""></image>
					</view>
				</view>
			</navigator>
			<navigator url="/pages/main/myAccount/helpCenter/helpCenter">
				<view class="lis">
					<view class="funIcon">
						<image :src="imgArray.funImg6" mode=""></image>
					</view>
					<view class="funName">
						帮助中心
					</view>
					<view class="funRight">
						<image :src="imgArray.funRight" mode=""></image>
					</view>
				</view>
			</navigator>
		</view>
		<view class="funList">
			<navigator url="/pages/main/myAccount/myMessage/myMessage?title=信息">
				<view class="lis">
					<view class="funIcon">
						<image :src="imgArray.funImg7" mode=""></image>
					</view>
					<view class="funName">
						我的信息
					</view>
					<view class="funCount" v-if="msgCount > 0">
						{{msgCount}}
					</view>
					<view class="funRight">
						<image :src="imgArray.funRight" mode=""></image>
					</view>
				</view>
			</navigator>
			<navigator url="/pages/main/myAccount/cancellation/cancellation">
				<view class="lis">
					<view class="funIcon">
						<image :src="imgArray.funImg8" mode=""></image>
					</view>
					<view class="funName">
						注销账户
					</view>
					<view class="funRight">
						<image :src="imgArray.funRight" mode=""></image>
					</view>
				</view>
			</navigator>
		</view>
		<view class="logout" @click="logout()">
			退出登录
		</view>
		<view style="height:26upx"></view>
	</view>
</template>

<script>
	import http from '@/http/interface.js'
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	export default {
		components: {cmdNavBar},
		data() {
			return {
				imgArray : {
					userBack : require('../../../static/img/account_bg.jpg'),
					userHead : require('../../../static/icon/default.jpg'),
					vip : require('../../../static/icon/ico_vip.png'),
					funImg1 : require('../../../static/icon/m_ntrue.png'),
					funImg2 : require('../../../static/icon/m_bank.png'),
					funImg3 : require('../../../static/icon/m_mpass.png'),
					funImg4 : require('../../../static/icon/m_free.png'),
					funImg5 : require('../../../static/icon/m_share.png'),
					funImg6 : require('../../../static/icon/m_help.png'),
					funImg7 : require('../../../static/icon/m_free2.png'),
					funImg8 : require('../../../static/icon/cancellation.png'),
					funRight : require('../../../static/icon/bar_right.png')
				},
				//是否绑定了身份证  0未校验  1已绑定  2未绑定
				isBindIdCard : 0,
				//消息
				msgCount : 0,
				//是否绑定银行卡
				isBank : false,
				//银行身份证银行卡信息等等
				userCardIdInfo : ''
			};
		},
		computed:{
			userData(){
				return this.$store.state.mainTransData;
			}
		},
		mounted() {
			//获取用户个人信息
			http.get('transaction/totransaction',{phone:this.$store.state.userInfo.phone}).then((res)=>{
				this.$store.commit('mainTransDataUpdate',res.data.data)
			})
			
			//是否实名认证 银行卡
			http.get('bindBankCard/tobind',{phone:this.$store.state.userInfo.phone}).then((res)=>{
				this.userCardIdInfo = res.data.data;
				if(res.data.data.idCard != '' || res.data.data.idCard != undefined){
					this.isBindIdCard = 1;
				}else{
					this.isBindIdCard = 2;
				}
				if(res.data.data.bankCardList.length > 0){
					this.isBank = true;
				}
			})
			
			//获取用户消息
			http.get('home/getMessage',{phone:this.$store.state.userInfo.phone,flag:'N'}).then((res)=>{
				this.msgCount = res.data.data.length;
			})
			
			
		},
		methods : {
			//跳转到绑定身份证界面
			goBindCard(){
				if(this.isBindIdCard == 1){
					uni.showModal({
						showCancel:false,
						title:'提示',
						content:'已认证'
					})
					return;
				}
				uni.navigateTo({
					url : '/pages/main/myAccount/verified/verified'
				})
			},
			//去提现
			goCash(){
				if(!this.isBank){
					uni.showModal({
						showCancel:false,
						content:'请先绑定银行卡'
					})
					return;
				}
				uni.navigateTo({
					url : '/pages/main/myAccount/cash/cash'
				})
			},
			//跳转到银行卡界面
			goBindBank(){
				if(this.isBindIdCard == 0 || this.isBindIdCard == 2){
					uni.showModal({
						showCancel:false,
						title:'提示',
						content:'请先进行实名认证'
					})
					return;
				}
				uni.navigateTo({
					url : '/pages/main/myAccount/bankCard/bankCard?userName=' + this.userCardIdInfo.realName + '&userIdCard=' + this.userCardIdInfo.idCard
				})
			},
			logout(){
				uni.showLoading({
					title : '退出登录中 ~'
				})
				http.get('member/logout').then((res)=>{
					this.$store.commit('mainPageNumUpdate',1);
					this.$store.commit('userGoOut',{});
					uni.reLaunch({
						url: '/pages/checkpoint/login/login'
					});
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		/*距离顶部范围应该在88-95范围内*/
		/*  #ifdef  APP-PLUS  */
		// padding-top: 90upx;
		/*  #endif  */
		// top: var(--status-bar-height);
		// background: #e9e9e9;
		height: 100%;
		padding-bottom: 40upx;
	}
	.userInfo{
		width: 100%;
		height: 650upx;
		position: relative;
		.userBack{
			display: block;
			width: 100%;
			height: 650upx;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 2;
		}
		.userContent{
			display: block;
			width: 100%;
			height: 650upx;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 4;
			padding-top: 120upx;
			box-sizing: border-box;
			text-align: center;
			color: #fff;
			.userHead{
				display: block;
				width: 170upx;
				height: 170upx;
				margin: 0 auto;
				border-radius: 50%;
				border: 6upx solid #f2f2f4;
			}
			.userName{
				display: block;
				width: 100%;
				text-align: center;
				color: #fff;
				font-size: 34upx;
				margin-top: 40upx;
				image{
					vertical-align:middle;
					width: 60upx;
					height: 50upx;
				}
				text{
					padding-left: 20upx;
				}
			}
			.num{
				font-size: 42upx;
			}
			.myMn{
				font-size: 28upx;
			}
		}
	}
	.assetsOpe{
		width: 100%;
		height: 100upx;
		margin-top: 30upx;
		.btn{
			width: 50%;
			height: 100upx;
			float: left;
			box-sizing: border-box;
			display: flex;
			justify-content: center;
			align-items: center;
			text{
				display: block;
				width: 186upx;
				height: 60upx;
				border: 2upx solid #fff;
				border-radius: 10upx;
				text-align: center;
				line-height: 60upx;
				font-size: 32upx;
				color: #fff;
				box-sizing: border-box;
			}
		}
	}
	.funList{
		width: 100%;
		background: #fff;
		margin-top: 20upx;
		.lis{
			width: 100%;
			height: 88upx;
			background: #fff;
			border-bottom: 2upx solid #e6e6e6;
			line-height: 88upx;
			.funIcon{
				width: 90upx;
				height: 88upx;
				display: flex;
				justify-content: center;
				align-items: center;
				float: left;
				image{
					display: block;
					width: 54upx;
					height: 54upx;
				}
			}
			.funName{
				height: 88upx;
				color: #3f3f3f;
				text-align: left;
				float: left;
				font-size: 28upx;
			}
			.funCount{
				float: left;
				width: 30upx;
				height: 30upx;
				background: #d34a34;
				color: #fff;
				text-align: center;
				line-height: 30upx;
				font-size: 18upx;
				border-radius: 50%;
				margin-top: 27upx;
				margin-left: 15upx;
			}
			.funRight{
				width: 50upx;
				height: 88upx;
				display: flex;
				justify-content: center;
				align-items: center;
				float: right;
				image{
					display: block;
					width: 18upx;
					height: 28upx;
				}
			}
			.result{
				color: #8f8f8f;
				font-size: 26upx;
				height: 88upx;
				float: right;
			}
		}
	}
	.logout{
		width: 678upx;
		height: 84upx;
		background: #d34a34;
		border-radius: 10upx;
		color: #fff;
		text-align: center;
		line-height: 84upx;
		margin: 0 auto;
		margin-top: 26upx;
		font-size: 30upx;
	}
</style>
