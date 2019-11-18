<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="充值" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
		<!-- <view class="current">
			<view>当前余额</view>
			<view><text>0.00</text> 元</view>
		</view> -->
		<view class="payType">
			选择支付方式
		</view>
		<view class="payTypeList">
			<view class="tpLi" @click="payType = 1">
				<view class="liImg">
					<image style="width:66upx;height: 50upx;" src="../../../../static/icon/payzfb.png" mode=""></image>
				</view>
				<view class="liDe">
					支付宝转账
				</view>
				<view class="sele" @click="payType = 1">
					<view :class="payType == 1 ? 'isTask' : ''"></view>
				</view>
			</view>
			
			<view class="tpLi" @click="payType = 2">
				<view class="liImg">
					<image style="width:66upx;height: 50upx;" src="../../../../static/icon/payyl.png" mode=""></image>
				</view>
				<view class="liDe">
					线下银行转账（审核到账）
				</view>
				<view class="sele">
					<view :class="payType == 2 ? 'isTask' : ''"></view>
				</view>
			</view>
		</view>
		<view v-if="payType == 1">
			<view class="inputList">
				<view class="inputGroup1" style="margin-top:30upx">
					<view class="groupName">
						支付宝账号
					</view>
					<input type="text" value="" placeholder="您转账的支付宝账号,以便平台核实" v-model="userZfb"/>
				</view>
				<view class="inputGroup1" style="margin-top:30upx">
					<view class="groupName">
						转账金额
					</view>
					<input type="number" value="" v-model="zfbPayMoney"/>
					<view class="yuan">元</view>
				</view>
				<view class="inputGroup1" style="margin-top:30upx">
					<view class="groupName">
						活动充值
					</view>
					<view class="ghd">
						<text @click="changePayNum(1,10000)">一万返14400</text>
						<text @click="changePayNum(1,20000)">二万返28800</text>
						<text @click="changePayNum(1,30000)">三万返43200</text>
					</view>
				</view>
				<view class="inputGroup1" style="margin-top:30upx">
					<view class="groupName">
						充值协议
					</view>
					<view class="ghd payAgreement">
						<checkbox-group>
							<label>
								<checkbox value="cb" checked="true" />我同意《财米策略充值协议》
							</label>
						</checkbox-group>
					</view>
				</view>
				<view class="inputGroup1" style="margin-top:30upx">
					<view class="groupName">
						
					</view>
					<view class="ghd">
						<view class="subApply" @click="subApply(1001)">提交充值申请</view>
					</view>
				</view>
			</view>
		</view>
		<view v-if="payType == 2">
			
			<view class="inputGroup" style="margin-top:30upx">
				<view class="groupName">
					转账卡号：
				</view>
				<input type="number" value="" placeholder="请输入银行转账卡号" v-model="bankCard"/>
			</view>
			<view class="inputGroup" style="margin-top:30upx">
				<view class="groupName">
					转账金额：
				</view>
				<input type="number" value="" v-model="bankMoney"/>
			</view>
			<view class="inputGroup1 inputGroup" style="margin-top:30upx">
				<view class="groupName">
					活动充值：
				</view>
				<view class="ghd">
					<text @click="changePayNum(2,10000)">一万返14400</text>
					<text @click="changePayNum(2,20000)">二万返28800</text>
					<text @click="changePayNum(2,30000)">三万返43200</text>
				</view>
			</view>
			<view class="inputGroup1 inputGroup" style="margin-top:30upx">
				<view class="groupName">
					
				</view>
				<view class="ghd" style="width:calc(100% - 230rpx)">
					<view class="subApply" @click="subApply(1001)">提交充值申请</view>
				</view>
			</view>
		</view>
		<view class="details">
			<view class="strong">到账时间：</view>
			<view>08:30 - 17:30 （30分钟内到账）</view>
			<view>17:30 以后 （次日09:00前到账）</view>
			<view class="red">如长时间未到账，可拨打客服电话</view>
		</view>
		<!-- <view class="subTransfer" @click="hasPay">
			提交转账回执单
		</view> -->
		
		<!-- 充值信息弹窗 -->
		<view class="alertBack" v-if="alertIsShow">
			<view class="alertContent" v-if="payType == 1">
				<view class="top">
					<text>
						温馨提示：
					</text>
					<text style="font-weight: 600;">
						转账备注码为
					</text>
					<text style="font-weight: 600;color:red;padding-left: 5upx;">
						{{zfbRemark.remarkCode}}
					</text>
					<view class="closeBtn" @click="userTransfer(false)">
						<image src="../../../../static/icon/close.png" mode=""></image>
					</view>
				</view>
				<view class="aDetails">
					<view class="ft">收款人支付宝账户：{{zfbReceiptInfo.account}}</view>
					<view class="ft">账户名称：{{zfbReceiptInfo.accountName}}</view>
					<view class="ft">转账金额：{{zfbPayMoney}} 元</view>
					<image :src="qr" mode=""></image>
				</view>
				<view class="btm">
					<view class="btBtn leftBtn" @click="uploadImg">保存二维码</view>
					<view class="btBtn rightBtn" @click="userTransfer">我已扫码转账</view>
				</view>
			</view>
			
			<view class="alertContent" v-if="payType == 2">
				<view class="top">
					<text>
						温馨提示：
					</text>
					<text style="font-weight: 600;">
						转账备注码为
					</text>
					<text style="font-weight: 600;color:red;padding-left: 5upx;">
						{{yhkRemark.remarkCode}}
					</text>
					<view class="closeBtn" @click="userTransfer(false)">
						<image src="../../../../static/icon/close.png" mode=""></image>
					</view>
				</view>
				<view class="aDetails">
					<view class="pt1">您可以通过网上银行、银行柜台、ATM等方式向财米策略转账
						<text>（提示：转账时注意填写转账备注码）</text>
					</view>
					<view class="List1">
						<view class="lis">
							收款账户：<text>{{yhkReceiptInfo.account}}</text>
						</view>
						<view class="lis">
							收款账户名称：<text>{{yhkReceiptInfo.accountName}}</text>
						</view>
						<view class="lis">
							开户银行：<text>{{yhkReceiptInfo.openBank}}</text>
						</view>
						<view class="lis">
							开户支行：<text>{{yhkReceiptInfo.openBranchBank}}</text>
						</view>
					</view>
				</view>
				<view class="btm">
					<view class="btBtn rightBtn" @click="userTransfer">我已转账</view>
				</view>
			</view>
		</view>
		
		<!-- 活动充值信息弹窗 -->
		<view class="alertBack" v-if="alertActivityShow == 1">
			<view class="alertContent" style="height:500upx">
				<view class="top">
					<text>
						温馨提示：
					</text>
					<text style="font-weight: 600;">
					</text>
					<text style="font-weight: 600;color:red;padding-left: 5upx;">
					</text>
					<view class="closeBtn" @click="alertActivityShow = 2">
						<image src="../../../../static/icon/close.png" mode=""></image>
					</view>
				</view>
				<view class="aDetails">
					<view class="pt1">
						<p style="font-weight: 600;">牛市只会延期，不会缺席，资本盛宴，无借力不狂欢！</p>
						<p>为了感谢股民朋友的支持，特别推出充值<text>1万返1万4千4</text>的活动，回馈新老股友，具体活动规则如下：</p>
						<p>一，每个实名帐号仅限参加一次，三个套餐选其一！</p>
						<p>二，三个套餐分别为充<text>10000返14400，充20000返28800，充30000返43200。</text></p>
						<p>三，如何返还？一年分期十二个月平均返还。比如，<text>充值10000，即每月1200，共12个月！（1200x12=14400）</text>三个套餐返还公式，以此类推！</p>
						<p>四，所有返还金额当可用本金使用，用于购买股票，待卖出后可直接提现（若无交易将无法直接提现）</p>
						<p>五，返还流程，第一个月当天充值即时返还，第二个月须满30天返还，以此类推，直到满十二个月全部还完即止！</p>
					</view>
				</view>
				<view class="btm">
					<view class="btBtn rightBtn" @click="alertActivityShow = 2">我知道了</view>
				</view>
			</view>
		</view>
		
		<view class="jrwt">
			充值记录
		</view>
		<view class="tb">
			<view class="tbson">
				<view class="width20">充值时间</view>
				<view class="width20">充值方式</view>
				<view class="width20">充值金额</view>
				<view class="width40">充值状态</view>
			</view>
			
			<view class="tbson td" v-for="(el,i) in payActHistory" :key="i">
				<view>{{el.addTime}}</view>
				<view>{{el.type == '1001' ? '支付宝' : '银行卡'}}</view>
				<view>{{el.amount}} 元</view>
				<view :class="el.state == 1001 ? 'isWei' : ''" @click="continuePay('1',el)">
				{{el.state == 1001 ? '未确认充值':''}}
				{{el.state == 1002 ? '待平台确认':''}}
				{{el.state == 1003 ? '充值完成':''}}
				{{el.state == 1004 ? '取消':''}}
				{{el.state == 1005 ? '异常':''}}
				{{el.state == 1006 ? '待到账':''}}
				</view>
			</view>
			<view class="tbson td" v-for="(el,i) in payHistory" :key="i">
				<view class="width20">{{el.createTime}}</view>
				<view class="width20">{{el.type == '1001' ? '支付宝' : '银行卡'}}</view>
				<view class="width20">{{el.amount}} 元</view>
				<view class="width40 opt" v-if="el.status == 1001">
					<view class="isWei" @click="continuePay('2',el)" >未确认充值</view>
					<view class="isWei" @click="canclePay(el)" v-if="el.status == 1001">取消</view>
				</view>
				<view class="width40 opt" v-if="el.status == 1002">
					待平台确认
					<view class="isWei" @click="canclePay(el)" v-if="el.status == 1001">取消</view>
				</view>
				<view class="width40 opt" v-if="el.status == 1003">
					充值完成
				</view>
				<view class="width40 opt" v-if="el.status == 1004">
					已取消
				</view>
				<view class="width40 opt" v-if="el.status == 1005">
					异常
				</view>
				<view class="width40 opt" v-if="el.status == 1006">
					待到账
					<view class="isWei" @click="canclePay(el)" v-if="el.status == 1001">取消</view>
				</view>
				</view>
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
				//支付方式  1支付宝  2银行卡
				payType : 0,
				//充值弹窗是否显示
				alertIsShow : false,
				//活动充值弹窗是否显示
				alertActivityShow : 0,
				bankArray: [],
				bankIndex: 0,
				//初始化数据
				payHistory : [],
				payActHistory : [],
				//商家收款信息
				zfbReceiptInfo : {},
				yhkReceiptInfo : {},
				//支付宝充值数据
				userZfb : '',
				zfbPayMoney : '',
				//银行卡充值数据
				bankCard : '',
				bankMoney : '',
				//支付宝。银行卡转账信息
				zfbRemark : '',
				yhkRemark : '',
				//是否是继续充值
				isGoOnpay : false,
				//继续充值状态 0 普通充值  1 2 3
				isGoOnpayType : "",
				qr:""
			};
		},
		onLoad() {
			this.initData();
		},
		mounted() {
			http.get('transaction/torecharge',{phone:this.$store.state.userInfo.phone}).then((res)=>{
				let _this = this;
				res.data.data.receiptAccount.forEach((el)=>{
						_this.zfbReceiptInfo = el
						this.qr =this.$store.state.adminPath + 'file/'+ el.path;
				})
			})
		},
		computed:{
			webPath(){
				return this.$store.state.webPath;
			},
			adminPath(){
				return this.$store.state.adminPath;
			}	
		},
		methods: {
			initData(){
				this.isGoOnpayType = "";
				this.isGoOnpay = false;
				uni.showLoading({
					title : '',
					mask:true
				})
				http.get('transaction/torecharge',{phone:this.$store.state.userInfo.phone}).then((res)=>{
					this.payHistory = res.data.data.rechargeRecord;
					this.payActHistory = res.data.data.activityRecharge;
					let _this = this;
					res.data.data.receiptAccount.forEach((el)=>{
						if(el.type == 1002){
							_this.zfbReceiptInfo = el
						}else if(el.type == 1001){
							_this.yhkReceiptInfo = el
						}
					})
				})
			},
			getQr(){
				let tempStr=this.$store.state.adminPath+"/file/";
				http.get('transaction/torecharge',{phone:this.$store.state.userInfo.phone}).then((res)=>{
				this.payHistory = res.data.data.rechargeRecord;
				this.payActHistory = res.data.data.activityRecharge;
				let _this = this;
				res.data.data.receiptAccount.forEach((el)=>{
					if(el.type == 1002){
						_this.zfbReceiptInfo = el
						this.qr =tempStr+ el.path;
					}else if(el.type == 1001){
						_this.yhkReceiptInfo = el
					}
				})
				
				})		
			},
			bankPickerChange: function(e) {
				console.log('bankPickerChange发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			changePayNum(type,num){
				this.alertActivityShow = 1;
				if(type == '1'){
					this.zfbPayMoney = num;
				}else{
					this.bankMoney = num;
				}
				
			},
			//提交转账申请
			subApply(){
				if(this.payType == 1){
					if(!this.zfbReceiptInfo.account){
						uni.showModal({
							title : '提示',
							content : '暂不支持支付宝充值',
							showCancel : false,
						})
						return;
					}
					if(this.userZfb == ''){
						uni.showModal({
							title : '提示',
							content : '支付宝账号不能为空',
							showCancel : false,
						})
						return;
					}
					if(this.zfbPayMoney == ''){
						uni.showModal({
							title : '提示',
							content : '转账金额不能为空',
							showCancel : false,
						})
						return;
					}
					uni.showLoading({
						title : '提交中~'
					})
					
					let actType = '';
					actType = this.zfbPayMoney == '10000' ? 1 : this.zfbPayMoney == '20000' ? 2 : this.zfbPayMoney == '30000' ? 3 : '';
					//活动
					if(actType != '' && this.alertActivityShow != 0){
						// 活动充值
						http.get('transaction/activityRecharge',{
							holder:this.$store.state.userInfo.phone,
							type:'1001',
							cardNo:this.userZfb,
							amount:this.zfbPayMoney,
							activity:actType,
							recepitCardNo:this.zfbReceiptInfo.account
						}).then((res)=>{
							this.zfbRemark = res.data.data;
							this.alertIsShow = true;
							this.initData();
						})
					}else{
						// 普通充值
						http.get('transaction/rechargeOne',{
							holder:this.$store.state.userInfo.phone,
							type:'1001',
							cardNo:this.userZfb,
							amount:this.zfbPayMoney,
							recepitCardNo:this.zfbReceiptInfo.account
						}).then((res)=>{
							this.zfbRemark = res.data.data;
							this.alertIsShow = true;
							this.initData();
						})
					}
					
					
				}else if(this.payType == 2){
					if(!this.yhkReceiptInfo.account){
						uni.showModal({
							title : '提示',
							content : '暂不支持银行卡充值',
							showCancel : false,
						})
						return;
					}
					if(this.bankCard == ''){
						uni.showModal({
							title : '提示',
							content : '银行卡号不能为空',
							showCancel : false,
						})
						return;
					}
					if(this.bankMoney == ''){
						uni.showModal({
							title : '提示',
							content : '转账金额不能为空',
							showCancel : false,
						})
						return;
					}
					uni.showLoading({
						title : '提交中~'
					})
					let actType = '';
					actType = this.bankMoney == '10000' ? 1 : this.bankMoney == '20000' ? 2 : this.bankMoney == '30000' ? 3 : '';
					
					if(actType != '' && this.alertActivityShow != 0){
						
						http.get('transaction/activityRecharge',{
							holder:this.$store.state.userInfo.phone,
							type:'1002',
							cardNo:this.bankCard,
							amount:this.bankMoney,
							activity:actType,
							recepitCardNo:this.yhkReceiptInfo.account
						}).then((res)=>{
							this.yhkRemark = res.data.data;
							this.alertIsShow = true;
							this.initData();
						})
					}else{
						http.get('transaction/rechargeOne',{
							holder:this.$store.state.userInfo.phone,
							type:'1002',
							cardNo:this.bankCard,
							amount:this.bankMoney,
							recepitCardNo:this.yhkReceiptInfo.account
						}).then((res)=>{
							this.yhkRemark = res.data.data;
							this.alertIsShow = true;
							this.initData();
						})
					}
					
					
				}
			},
			//继续充值
			continuePay(type,el){
				// let eType = '';
				// if(type == '1'){
				// 	eType = el.state;
				// }else{
				// 	eType = el.type;
				// }
				if(el.type == 1001){
					this.payType = 1;
					this.zfbPayMoney = el.amount;
					this.zfbRemark = {
						'remarkCode' : el.remarkCode,
						'id' : el.id
					}
				}else if(el.type == 1002){
					this.payType = 2;
					this.bankMoney = el.amount;
					this.yhkRemark = {
						'remarkCode' : el.remarkCode,
						'id' : el.id
					}
				}
				this.isGoOnpayType = el.activity;
				this.isGoOnpay = true;
				this.alertIsShow = true;
			},
			
			
			canclePay(el){
					let _this = this;
				uni.showModal({
					title : '提示',
					content : '请确认是否需要取消充值',
					success(res) {
						if(res.confirm){
							uni.showLoading({
								title : '提交中~'
							})
							let datas = {};
							datas.id = el.id;
							datas.activity = el.activity == 0 ?'':0;
							http.get('transaction/cancelRecharge',datas).then((res)=>{
								uni.showModal({
									title : '提示',
									content : '取消充值申请成功',
									showCancel : false,
								})
								_this.initData();
							})
						}
					}
				})
			},
			//用户已转账  或者取消
			userTransfer(isFalse){
				if(!isFalse){
					this.alertIsShow = false;
					// this.resetPayInfo();
					return;
				}
				
				let _this = this;
				uni.showModal({
					title : '提示',
					content : '请确认是否已经转账',
					success(res) {
						if(res.confirm){
							uni.showLoading({
								title : '提交中~'
							})
							let actType = '';
							if(_this.payType == 1){
								actType = _this.zfbPayMoney == '10000' ? 1 : _this.zfbPayMoney == '20000' ? 2 : _this.zfbPayMoney == '30000' ? 3 : '';
								if(_this.isGoOnpay){
									actType = _this.isGoOnpayType;
								}
								let datas = {};
								datas.id = _this.zfbRemark.id;
								if(actType != '0'){
									datas.activity = actType
								}
								http.get('transaction/rechargeTwo',datas).then((res)=>{
									uni.showModal({
										title : '提示',
										content : '支付宝确认充值申请成功',
										showCancel : false,
									})
									_this.alertIsShow = false;
									_this.initData();
									_this.resetPayInfo();
								})
							}else if(_this.payType == 2){
								actType = _this.bankMoney == '10000' ? 1 : _this.bankMoney == '20000' ? 2 : _this.bankMoney == '30000' ? 3 : '';
								if(_this.isGoOnpay){
									actType = _this.isGoOnpayType;
								}
								let datas = {};
								datas.id = _this.yhkRemark.id;
								if(actType != '0'){
									datas.activity = actType
								}
								http.get('transaction/rechargeTwo',datas).then((res)=>{
									uni.showModal({
										title : '提示',
										content : '银行卡确认充值申请成功',
										showCancel : false,
									})
									_this.alertIsShow = false;
									_this.initData();
									_this.resetPayInfo();
								})
							}
						}
					}
				})
			},
			//保存收款二维码
			uploadImg(){
				let _this = this;
				let tempStr=_this.adminPath + 'file/' + _this.zfbReceiptInfo.path;
				console.log(tempStr);
				uni.downloadFile({
				    url: tempStr, //仅为示例，并非真实的资源
				    success: (res) => {
				        if (res.statusCode === 200) {
				            uni.showToast({
				            	title: '已保存',
				            	position: 'bottom',
				            	icon: 'none',
				            	duration: 2500
				            })
				        }
				    }
				});
			},
			//重置信息
			resetPayInfo(){
				this.payType = 0;
				this.userZfb = '';
				this.zfbPayMoney = '';
				this.zfbRemark = '';
				this.yhkRemark = '';
				this.bankCard = '';
				this.bankMoney = '';
				this.alertActivityShow = 0;
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

<style lang="scss" scoped>
	.content{
		/*距离顶部范围应该在88-95范围内*/
		/*  #ifdef  APP-PLUS  */
		padding-top: 90upx;
		/*  #endif  */
		top: var(--status-bar-height);
		padding-bottom: 95upx;
	}
	.current{
		width: 100%;
		height: 84upx;
		line-height: 84upx;
		padding: 0 30upx;
		background: #fcf5db;
		color: #454545;
		font-size: 30upx;
		text-align: left;
		box-sizing: border-box;
		view:nth-child(1){
			float: left;
		}
		view:nth-child(2){
			float: right;
			text{
				color: #ce5b51;
			}
		}
	}
	.payType{
		width: 100%;
		height: 74upx;
		background: #f2f2f2;
		text-align: left;
		font-size: 26upx;
		color: #454545;
		font-weight: 600;
		padding: 0 30upx;
		line-height: 74upx;
		border-top: 1upx solid #e2e2e2;
		box-sizing: border-box;
	}
	.payTypeList{
		width: 100%;
		background: #fff;
		border-bottom: 5upx solid #e5e5e5;
		.tpLi{
			height: 88upx;
			border-bottom: 1upx solid #e5e5e5;
			margin-left: 30upx;
			width: calc(100% - 30upx);
			line-height: 88upx;
			.liImg{
				width: 100upx;
				height: 88upx;
				float: left;
				display: flex;
				align-items: center;
				image{
					display: block;
				}
			}
			.liDe{
				float: left;
				font-size: 28upx;
				color: #454545;
			}
			.sele{
				width: 88upx;
				height: 88upx;
				float: right;
				display: flex;
				justify-content: center;
				align-items: center;
				view{
					width: 26upx;
					height: 26upx;
					border: 3upx solid #ef9146;
					border-radius: 50%;
					position: relative;
				}
				view:after{
					content: '';
					width: 8upx;
					height: 2upx;
					position: absolute;
					left: 5upx;
					top: 16upx;
					background: #fff;
					transform: rotate(30deg);
				}
				view:before{
					content: '';
					width: 14upx;
					height: 2upx;
					position: absolute;
					left: 9upx;
					top: 12upx;
					background: #fff;
					transform: rotate(-50deg);
				}
				.isTask{
					background: #ef9146;
				}
			}
		}
	}
	.inputList{
		width: 640upx;
		margin: 0 auto;
		
		padding-bottom: 40upx;
	}
	.inputGroup1{
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
		}
		.ghd{
			float: left;
			height: 70upx;
			width: calc(100% - 160upx);
			box-sizing: border-box;
			font-size: 28upx;
			color: #333;
			display: flex;
			align-items: center;
			text{
				display: block;
				width: 170upx;
				height: 60upx;
				background: #E95E28;
				color: #fff;
				text-align: center;
				font-size: 22upx;
				border-radius: 12upx;
				line-height: 60upx;
				margin-left: 5upx;
			}
			
			text:first-child{
				margin-left: 0;
			}
			.subApply{
				height: 60upx;
				padding: 0 20upx;
				background: #5A9EF7;
				border-radius: 10upx;
				text-align: center;
				line-height: 60upx;
				width: 100%;
				color: #fff;
			}
		}
		.payAgreement{
			color: red;
			text-decoration: underline;
		}
		input{
			float: left;
			height: 70upx;
			width: calc(100% - 200upx);
			border: 2upx solid #d8d8d8;
			box-sizing: border-box;
			font-size: 28upx;
			color: #333;
			padding-left: 15upx;
		}
		.yuan{
			width: 40upx;
			height: 70upx;
			line-height: 70upx;
			float: right;
			text-align: center;
			color: #393939;
			font-size: 28upx;
		}
	}
	.details{
		width: calc(100% - 60upx);
		margin: 0 auto;
		padding-top: 10upx;
		text-align: left;
		line-height: 36upx;
		color: #454545;
		font-size: 26upx;
		border-top: 2upx solid #f1f1f1;
		margin-top: 20upx;
		.strong{
			font-weight: 600;
		}
		.red{
			color: red;
		}
	}
	.subTransfer{
		width: 100%;
		height: 95upx;
		background: #eb615c;
		color: #fff;
		line-height: 95upx;
		font-size: 30upx;
		text-align: center;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 5;
	}
	.alertBack{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 10;
		background: rgba(0,0,0,0.2);
		display: flex;
		justify-content: center;
		align-items: center;
		.alertContent{
			width: 680upx;
			height: 900upx;
			background: #fff;
			border-radius: 8upx;
			overflow: hidden;
			.top{
				height: 84upx;
				width: 100%;
				background: #f8f8f8;
				padding-left: 40upx;
				box-sizing: border-box;
				border-bottom: 1upx solid #ebebeb;
				text{
					display: block;
					float: left;
					text-align: left;
					line-height: 84upx;
					color: #242424;
					font-size: 26upx;
				}
				.closeBtn{
					width: 105upx;
					height: 84upx;
					display: flex;
					justify-content: center;
					align-items: center;
					float: right;
					image{
						display: block;
						width: 25upx;
						height: 25upx;
					}
				}
			}
			.aDetails{
				width: 100%;
				height: calc(100% - 84upx - 84upx);
				padding-top: 20upx;
				box-sizing: border-box;
				overflow-y: scroll;
				.ft{
					color: #333333;
					text-align: center;
					line-height: 50upx;
					font-size: 28upx;
				}
				image{
					display: block;
					width: 410upx;
					height: 630upx;
					margin: 0 auto;
				}
			}
			.btm{
				width: 100%;
				background: #fff;
				height: 84upx;
				border-top: 1upx solid #ebebeb;
				box-sizing: border-box;
				.leftBtn{
					float: left;
					margin-left: 30upx;
					background: #51a6f6;
				}
				.rightBtn{
					float: right;
					background: #5183f6;
				}
				.btBtn{
					height: 60upx;
					width: 230upx;
					text-align: center;
					color: #fff;
					line-height: 60upx;
					font-size: 26upx;
					border-radius: 5upx;
					margin-top: 12upx;
					margin-right: 30upx;
				}
			}
			
			
		}
	}
	.pt1{
		padding: 30upx;
		box-sizing: border-box;
		line-height: 40upx;
		color: #525252;
		font-size: 28upx;
		text{
			color: #db6669;
		}
	}
	.List1{
		padding-left: 30upx;
		box-sizing: border-box;
		.lis{
			width: 100%;
			height: 65upx;
			line-height: 65upx;
			border-bottom: 1upx solid #efefef;
			text-align: left;
			color: #525252;
			font-size: 26upx;
			text{
				font-weight: 600;
			}
		}
	}
	.pt2{
		color: #db6669;
		font-size: 28upx;
		text-align: left;
		height: 80upx;
		line-height: 80upx;
		padding-left: 30upx;
		box-sizing: border-box;
	}
	.inputGroup{
		width: 100%;
		height: 70upx;
		margin: 0 auto;
		padding-left: 30upx;
		box-sizing: border-box;
		.groupName{
			height: 70upx;
			text-align: left;
			line-height: 70upx;
			color: #393939;
			padding-right: 16upx;
			box-sizing: border-box;
			font-size: 28upx;
			float: left;
		}
		input{
			float: left;
			height: 70upx;
			width: calc(100% - 230upx);
			border: 2upx solid #939393;
			box-sizing: border-box;
			border-radius: 8upx;
			font-size: 28upx;
			color: #333;
			padding-left: 15upx;
		}
		.selectBox{
			float: left;
			height: 70upx;
			width: calc(100% - 230upx);
			border: 2upx solid #939393;
			box-sizing: border-box;
			border-radius: 8upx;
			padding-left: 15upx;
			overflow: hidden;
			view{
				width: 100%;
				height: 100%;
				font-size: 26upx;
				line-height: 70upx;
			}
		}
	}
	
	.jrwt{
		width: 100%;
		height: 88upx;
		text-align: center;
		line-height: 88upx;
		color: #464646;
		font-size: 28upx;
		background: #eeeeee;
		border-top: 2upx solid #d9d9d9;
		border-bottom: 2upx solid #d9d9d9;
	}
	.tb{
		width: 100%;
		.tbson{
			text-align: center;
			line-height: 86upx;
			height: 86upx;
			color: #464646;
			border-bottom: 1upx solid #d9d9d9;
			font-size: 28upx;
			background: #fff;
			font-weight: 600;
			view{
				float: left;
				height: 86upx;
			}
			
		}
		
		.td{
			border: none;
			background: #FBFBFB;
			font-weight: 400;
			font-size: 25upx;
			view:nth-child(1){
				line-height: 40upx;
			}
			view:nth-child(3){
				padding: 0 25upx;
				box-sizing: border-box;
				text-align: center;
				text{
					color: red
				}
			}
			.opt{
				view{
					line-height: 86upx;
					margin-right: 20upx;
				}
				view:nth-child(1){
					margin-left: 20%;
				}
			}
		}
		.td:nth-child(2n-1){
			background: #fff;
		}
	}
	.isWei{
		text-decoration: underline;
		color: red;
	}
	
	.width40{
		width: 40%;
	}
	.width35{
		width: 35%;
	}
	.width30{
		width: 30%;
	}
	.width25{
		width: 25%;
	}
	.width20{
		width: 20%;
	}
	.width15{
		width: 15%;
	}
	.width10{
		width: 10%;
	}
</style>
