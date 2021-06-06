<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar class="nav-bar" :fixed="false" back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="提现" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
		<view class="listBox">
			<view class="lis">
				<view class="left">提现到</view>
				<view class="right cashType">
					<picker @change="cashPickerChange" :value="cashIndex" :range="cashArray">
						<view class="uni-input" v-model="cashIndex">{{cashArray[cashIndex]}}</view>
					</picker>
				</view>
			</view>
			<!-- <view class="lis">
				<view class="left">可用资金</view>
				<view class="right cashMax">
					<text>0.00</text> 元
				</view>
			</view> -->
			<view class="lis">
				<lable>
					<view class="left">提款金额</view>
					<view class="right cashMoney">
						<input type="number" value="" v-model="cashNum"/>
					</view>
				</lable>
			</view>
		</view>
		<view class="cashTixin">
			每日累计提款额度超出10万元，T + 1到账
		</view>
		<view class="cashTrue" @click="goCash">
			提现
		</view>
		<view class="wenxin">
			温馨提示
		</view>
		<view class="waringBox">
			<!-- <text>1、请确保您输入的提现金额，以及银行帐号信息准确无误。</text>
			<text>2、提现时间：每个交易日9:00-17:00提款,当日到帐,17:00以后提款下个交易日到帐,具体到帐时间以银行为准(当日累计超10万元的T+1到帐)</text>
			<text>3、提款手续费每笔3元。</text>
			<text>4、平台禁止洗钱、虚假交易等行为，一经发现并确认，将终止该账户的使用。</text>
			<text>5、领取注册红包的用户需股票交易一次方可提现。</text>
			<text>6、需满100元方可提现。</text> -->
			<rich-text :nodes="RichContent"></rich-text>
		</view>
		<view class="cashtxjl">
			提现记录
		</view>
		<view class="recordLists">
			<view class="lis" v-for="(el,i) in withdrawalData" :key="i">
				<view>
				<text>
				{{el.status.name}}
				</text>
				<text v-if="el.status.value == 0" @click="cancelCash(el)">取消提现</text>
				</view>
				<view>
					<text>提现时间：{{el.createTime | timeZhuan}}</text>
					<text>￥{{el.moneyAmount}}</text>
				</view>
				<view>卡号:{{el.transitionAccount}}</view>
			</view>
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
				cashArray: [],
				cashIndex: 0,
				//记录
				withdrawalData : [],
				//绑定的银行卡s
				isBindBankList : [],
				//提款金额
				cashNum : '',
				//提现最低限额
				min_num : 10,
				RichContent : '',
				alipay:'',
				
			};
		},
		onLoad() {
			this.initData();
			this.queryBank();
			this.withdrawMinLimit();
			this.getHelp();
		},
		filters: {
		　　 timeZhuan(value) {
				return value.substring(0,10);
	　　　　 }
	　　},
		methods: {
			cashPickerChange(e) {
				console.log('cashPickerChange发送选择改变，携带值为', e.target.value)
				this.cashIndex = e.target.value
			},
			initData(){
				http.get('principalOrder/getList',{orderType:'WITHDRAW'}).then((res)=>{
					this.withdrawalData = res.data.data.records
				})
			},
			queryBank(){
				//查询所有绑定的银行卡号
				http.get('user/wallet/getList',{accountType:'BANK'}).then((res)=>{
					this.isBindBankList = res.data.data.records;
					let _this = this;
					this.isBindBankList.forEach((el)=>{
						_this.cashArray.push(el.bankName + ' ' + el.account);
						if(el.alipay!= null && el.alipay !=''){
							_this.cashArray.push('支付宝'+ ' ' + el.alipay);
						}
					})
				})
			},cancelCash(el){
				//取消提现
				let _this = this;
				uni.showModal({
					title : '提示',
					content : '请确认是否需要取消提现',
					success(res) {
						if(res.confirm){
							uni.showLoading({
								title : '提交中~'
							})
							let datas = {};
							datas.id = el.id;
							http.get('principalOrder/cancel',{id : el.id}).then((res)=>{
								uni.showModal({
									title : '提示',
									content : '取消提现成功',
									showCancel : false,
									success() {
										_this.initData();
									}
								})
								
							})
						}
					}
				})
			},
			withdrawMinLimit(){
				let _this = this;
				http.get('principalOrder/withdrawMinLimit',{}).then((res)=>{
					_this.min_num = Number(res.data.data);
				})
			},
			//获取提现提醒
			getHelp() {
				let _this = this;
				// this.queryStock('');
				http.get('website/help/getList', {type:'I_WITHDRAWAL',status : true,'pageInfo.size':1,'pageInfo.isReturnPage':false}).then((res) => {
					_this.RichContent = res.data.data.records[0].content;
				})
			},
			goCash(){
				if(this.cashNum == ''){
					uni.showModal({
						title : '提示',
						content : '提款金额不能为空',
						showCancel : false,
					})
					return;
				}
				let _this = this;
				var typs='';
				if(_this.cashIndex==0){
					typs='BANK'
				}else{
					typs='ALI_PAY'
				}
				
				http.get('principalOrder/add',{
					moneyAmount:this.cashNum,
					orderType: 'WITHDRAW',
					accountType:typs
					}).then((res)=>{
						if(!res.data.data){
						
							uni.showModal({
								title : '温馨提示',
								content : res.data.message,
								showCancel : false,
							});
						}else{
							uni.showModal({
								title : '提示',
								content : '提交成功',
								showCancel : false,
							})
						}
						this.initData();
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
		z-index:2;
		width: 100%;
	}
	.content{
		/*距离顶部范围应该在88-95范围内*/
		// height: 100%;
		background: #fbfbfb;
		/*  #ifdef  APP-PLUS  */
		// padding-top: 90upx;
		/*  #endif  */
		// top: var(--status-bar-height);
		// padding-bottom: 15upx;
	}
	.listBox{
		padding-top: calc(var(--status-bar-height) + 90upx);
		background: #fff;
		.lis{
			width: 100%;
			height: 90upx;
			line-height: 90upx;
			border-bottom: 2upx solid #d7d7d7;
			.left{
				width: 250upx;
				height: 100%;
				float: left;
				padding-left: 30upx;
				box-sizing: border-box;
				color: #c5c5c5;
				font-size: 30upx;
			}
			.right{
				width: calc(100% - 250upx);
				height: 90upx;
				float: left;
				
			}
			.cashType{
				font-size: 24upx;
				color: #202020;
			}
			.cashMax{
				color: #525252;
				font-size: 26upx;
				text{
					color: #c43345;
					font-size: 30upx;
					padding-right: 10upx;
				}
			}
			.cashMoney{
				display: flex;
				align-items: center;
				input{
					display: block;
					width: 100%;
					height: 50upx;
					font-size: 26upx;
				}
			}
		}
	}
	.cashTixin{
		width: 100%;
		padding: 30upx;
		box-sizing: border-box;
		height: 130upx;
		color: red;
		font-size: 30upx;
	}
	.cashTrue{
		height: 60upx;
		width: 690upx;
		margin: 0 auto;
		text-align: center;
		color: #fff;
		line-height: 60upx;
		background: #db3652;
		border-radius: 8upx;
		font-size: 26upx;
	}
	.wenxin{
		width: 690upx;
		height: 120upx;
		margin: 0 auto;
		color: #c5c5c5;
		font-size: 28upx;
		padding-top: 20upx;
		box-sizing: border-box;
	}
	.waringBox{
		width: 690upx;
		margin: 0 auto;
		color: #525252;
		font-size: 27upx;
		padding-bottom: 30upx;
		text{
			display: block;
		}
	}
	.cashtxjl{
		height: 100upx;
		line-height: 100upx;
		background: #fff;
		text-align: center;
		color: #c43345;
		border-top: 2upx solid #cfcfcf;
		border-bottom: 2upx solid #cfcfcf;
		font-size: 32upx;
		font-weight: 600;
	}
	.recordLists{
			width: 100%;
			background: #fff;
			border-bottom: 2upx solid #cfcfcf;
			padding: 0 30upx;
			box-sizing: border-box;
			.lis{
			width: 100%;
			background: #fff;
			border-bottom: 2upx solid #cfcfcf;
			padding: 0 30upx;
			box-sizing: border-box;
			view{
				display: block;
				width: 100%;
			}
			view:nth-child(1){
				font-size: 32upx;
				margin-top: 12upx;
				text{
					height: 30upx;
					margin-bottom: 12upx;
				}
				text:nth-child(1){
					color: #3e3e3e;	
				}
				text:nth-child(2){
					float: right;
					color: red;
				}
				
			}
			view:nth-child(2){
				clear: both;
				// height: 35upx;
				color: #7c7c7c;
				font-size: 26upx;
				text{
					height: 30upx;
					display: block;
				}
				text:nth-child(1){
					float: left;
				}
				text:nth-child(2){
					float: right;
					color: red;
				}
			}
			view:nth-child(3){
				clear: both;
				color: #7c7c7c;
				font-size: 26upx;
			}
		}
			
		}

</style>
