<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
		<view class="status-bar"></view>
		<!-- #endif -->
		<cmd-nav-bar back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="绑定银行卡" font-color="#fff"></cmd-nav-bar>
		<view class="inputGroup" style="margin-top:54upx">
			<view class="groupName">
				温馨提示
			</view>
			<view class="mark">
				财米策略平台充值支持部分银行，充值请绑定平台支持的银行，谢谢！
			</view>
		</view>
		<!-- <view class="inputGroup" style="margin-top:30upx">
			<view class="groupName">
				开户银行
			</view>
			<view class="selectBox">
				<picker @change="bankPickerChange" :value="bankIndex" :range="bankArray">
					<view class="uni-input">{{bankArray[bankIndex]}}</view>
				</picker>
			</view>
		</view> -->
		<view class="inputGroup" style="margin-top:30upx">
			<view class="groupName">
				身份证号
			</view>
			<input type="text" value="" placeholder="请输入身份证号" v-model="userCardId" disabled/>
		</view>
		<view class="inputGroup" style="margin-top:30upx">
			<view class="groupName">
				真实姓名
			</view>
			<input type="text" value="" placeholder="请输入真实姓名" v-model="userName" disabled/>
		</view>
		<view class="inputGroup" style="margin-top:30upx">
			<view class="groupName">
				电话号码
			</view>
			<input type="text" value="" placeholder="请输入电话号码" v-model="userPhone" disabled/>
		</view>
		<view class="inputGroup" style="margin-top:30upx">
			<view class="groupName">
				开户银行
			</view>
			<input type="text" value="" placeholder="请输入开户银行" v-model="bankCardName"/>
		</view>
		<view class="inputGroup" style="margin-top:30upx">
			<view class="groupName">
				开户支行
			</view>
			<input type="text" value="" placeholder="请输入开户支行" v-model="bankZH"/>
		</view>
		<view class="inputGroup" style="margin-top:30upx">
			<view class="groupName">
				银行卡号
			</view>
			<input type="number" value="" placeholder="请输入银行卡号" v-model="bankCardId1"/>
		</view>
		<view class="inputGroup" style="margin-top:30upx">
			<view class="groupName">
				确认卡号
			</view>
			<input type="number" value="" placeholder="请再次确认银行卡号" v-model="bankCardId2"/>
		</view>
		
		<view class="isTrue" @click="goBinding">保存</view>
	</view>
</template>

<script>
	import http from '@/http/interface.js'
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	export default {
		components: {cmdNavBar},
		data() {
			return {
				bankCardName : '',
				bankZH : '',
				bankCardId1 : '',
				bankCardId2 : '',
				userCardId : '',
				userName : '',
				userPhone : ''
			};
		},
		onLoad(options) {
			this.userCardId = options.userIdCard;
			this.userName = options.userName;
			this.userPhone = this.$store.state.userInfo.phone;
		},
		computed: {
			
		},
		methods: {
			goBinding(){
				if(this.bankCardName == '' || this.bankZH == '' || this.bankCardId1 == '' || this.bankCardId2 == '' || this.userCardId == '' || this.userName == '' || this.userPhone == ''){
					uni.showModal({
						showCancel:false,
						title:'提示',
						content:'输入绑定银行卡的相关信息不能为空'
					})
					return;
				}
				if(this.bankCardId1 != this.bankCardId2){
					uni.showModal({
						showCancel:false,
						title:'提示',
						content:'两次输入银行卡号不一致'
					})
					return;
				}
				
				//绑定银行卡
				http.get('bindBankCard/bind',{
					cardNo:this.bankCardId1,
					openBank:this.bankCardName,
					openBranhBank:this.bankZH,
					owner:this.$store.state.userInfo.phone,
					idCard:this.userCardId,
					realName:this.userName
				}).then((res)=>{
					uni.showModal({
						showCancel:false,
						title:'提示',
						content:'绑定银行卡成功'
					})
					uni.navigateBack({})
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
		padding-bottom: 30upx;
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
		input{
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
		.inputYzm{
			width: 260upx;
		}
		.yzmImg{
			width: 200upx;
			height: 70upx;
			float: right;
			background: #dcdcdc;
			image{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
		.inputGetYzm{
			width: 300upx;
		}
		.getYzmBtn{
			width: 150upx;
			height: 70upx;
			float: right;
			text-align: center;
			line-height: 70upx;
			background: #FF6D28;
			color: #fff;
			font-size: 26upx;
		}
		.mark{
			color: red;
			float: left;
			height: 70upx;
			width: calc(100% - 160upx);
			font-size: 28upx;
		}
		.selectBox{
			float: left;
			height: 70upx;
			width: calc(100% - 160upx);
			border: 2upx solid #939393;
			box-sizing: border-box;
			border-radius: 8upx;
			padding-left: 15upx;
			view{
				width: 100%;
				height: 100%;
				font-size: 26upx;
				line-height: 70upx;
			}
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
