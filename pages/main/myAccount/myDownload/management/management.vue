<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar class="nav-bar" :fixed="false" back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="我的库房" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
	<!-- 	<view class="infoLists">
			<view class="son">
				<text>{{toproxyData.todayAmount | TF2}}</text>
				<text>今日返佣</text>
			</view>
			<view class="son">
				<text>{{toproxyData.totalNetAsset | TF2}}</text>
				<text>团队总净资产</text>
			</view>
			<view class="son">
				<text>{{toproxyData.todayInviteNumber}}</text>
				<text>今日新增人数</text>
			</view>
		</view> -->
		<view class="infoLists">
		<!-- 	<view class="son">
				<text>{{toproxyData.brokerageAmount | TF2}}</text>
				<text>累计返佣</text>
			</view> -->
			<view class="son">
				<text>{{toproxyData.todayInviteNumber}}</text>
				<text>今日新增人数</text>
			</view>
			<view class="son" @click="showLower">
				<text></text>
				<text>我的分享</text>
			</view>
			<view class="son">
				<text>{{toproxyData.groupSize}}</text>
				<text>团队总人数</text>
			</view>
		</view>
<!-- 		<view class="recordBox">
			<view class="he">
				<text>用户</text>
				<text>交易金额</text>
				<text>日期</text>
				<text>收益</text>
			</view>
			<view class="reList">
				<view class="reli" v-for="(el,i) in brokerageRecordList" :key="i">
					<text>{{el.contributorPhone}}</text>
					<text>{{el.transactionAmount}}元</text>
					<text>{{el.createTime}}</text>
					<text>{{el.price}}元</text>
				</view>
			</view>
		</view> -->
		<view class="lback" v-if="showView">
			<view class="lcont">
				<view class="lGroup">
					<text class="nams">代理用户 : </text>
					<view class="uni-list-cell-db pickers">
						<picker @change="bindPickerChange" :value="index" :range-key="'phone'" :range="lowerList">
							<view class="uni-input">{{lowerList[index].phone + ' ' + lowerList[index].name}}</view>
						</picker>
					</view>
					<text class="bfb"></text>
				</view>
				<view class="lGroup">
					<text class="nams">代理抽成 : </text> <input type="number" value="" v-model="lowerList[index].deferredCommission"/>
					<text class="bfb">%</text>
				</view>
				<!-- <view class="lGroup">
					<text class="nams">月配抽成 : </text> <input type="number" value="" v-model="userMonthCut"/>
					<text class="bfb">%</text>
				</view> -->
			<!-- 	<view class="lGroup">
					<text class="nams">交易通道费 : </text> <input type="number" value="" v-model="lowerList[index].transactionCommission"/>
					<text class="bfb">%</text>
				</view> -->
				<view class="isBtn" @click="destroyMember">
					确认分配
				</view>
				<view class="closeview" @click="showView = false">
					X
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
				//是否显示授权窗口
				showView : false,
				//代理数据
				toproxyData : {},
				//抽成
				userDayCut : "",
				// userMonthCut : "",
				userBuySellCut : "",
				//下级列表
				lowerList : [],
				index: 0,
				brokerageRecordList : []
			};
		},
		created() {
			this.queryToproxy();
			// this.memberToSetAgent();
		},
		computed:{
			
		},
		filters:{
			TF2(val){
				return (parseInt( val * 100 ) / 100 ).toFixed(2);
			}
		},
		mounted() {
		},
		methods:{
			showLower(){
				this.showView = true;
			},
			queryToproxy(){
				uni.showLoading({
					mask:true
				})
				let _this = this;
				http.get('AppPortfolioPage/agency',{}).then((res)=>{
					_this.toproxyData = res.data.data.userBrokerageVo;
					_this.brokerageRecordList = res.data.data.brokerageRecordVoList;
					for(var i = 0 ; i < res.data.data.userBrokerageVoList.length ; i++){
						_this.lowerList.push(res.data.data.userBrokerageVoList[i]);
					}
					if(_this.lowerList.length == 0){
						_this.lowerList.push('无用户')
					}
				})
			},
			bindPickerChange(el){
				this.index = el.detail.value
			},
			//获得下级
			memberToSetAgent(){
				let _this = this;
				console.log(_this.toproxyData.invitationCode);
				http.get('user/brokerage/getSubordinateList',{invitationCode :_this.toproxyData.invitationCode }).then((res)=>{
					_this.lowerList = [];
					
					for(var i = 0 ; i < res.data.data.length ; i++){
						_this.lowerList.push(res.data.data[i].uid);
					}
					if(_this.lowerList.length == 0){
						_this.lowerList.push('无用户')
					}
				})
			},
			//代理授权
			destroyMember(){
				if(this.lowerList[0] == '无用户'){
					return;
				}
				this.userDayCut = this.lowerList[this.index].deferredCommission;
				this.userBuySellCut = this.lowerList[this.index].transactionCommission;
				if(this.userDayCut == "" || this.userBuySellCut == ""){
					uni.showToast({
						title: '请输入完整的信息',
						duration: 2000,
						icon:'none'
					});
					return;
				}
				uni.showLoading({
					mask:true
				})
				let _this = this;
				http.get('user/brokerage/update',{
					uid: this.lowerList[this.index].uid,
					deferredCommission:this.userDayCut /100,
					transactionCommission:this.userBuySellCut/100
				}).then((res)=>{
					_this.showView = false;
					uni.showToast({
						title: '分配成功',
						duration: 2000,
						icon:'success'
					});
					this.userDayCut = "";
					this.userBuySellCut = "";
					this.index = 0
				})
			}
		}
	}
</script>

<style lang="scss">
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
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
		left: 0;
		z-index:2;
		width: 100%;
	}
	.content{
		/*距离顶部范围应该在88-95范围内*/
		/*  #ifdef  APP-PLUS  */
		// padding-top: 90upx;
		/*  #endif  */
		// top: var(--status-bar-height);
		// padding-bottom: 50upx;
	}
	.infoLists{
		display: flex;
		justify-content: space-between;
		padding-top: calc(var(--status-bar-height)*2 + 90upx);
		padding-left: 10upx;
		padding-right: 10upx;
		padding-bottom: 10upx;
		box-sizing: border-box;
		.son{
			width: 33.3%;
			height: 160upx;
			margin-right: 10upx;
			border-radius: 12upx;
			text{
				display: block;
				text-align: center;
				color: #fff;
			}
			text:nth-child(1){
				font-size: 26upx;
				height: 35upx;
				margin-top: 28upx;
			}
			text:nth-child(2){
				font-size: 30upx;
				font-weight: 600;
				margin-top: 20upx;
			}
		}
		.son:nth-child(1){
			background: #F94D4D;
		}
		.son:nth-child(2){
			background: #B66B18;
		}
		.son:nth-child(3){
			background: #17A6E0;
			margin: 0;
		}
	}
	.infoLists2{
		padding-top: 0upx;
		.son:nth-child(1){
			background: #DE478E;
		}
		.son:nth-child(2){
			background: #EF885B;
		}
		.son:nth-child(3){
			background: #3C592D;
		}
	}
	.recordBox{
		width: 100%;
		padding: 50upx 30upx;
		box-sizing: border-box;
		.he{
			width: 100%;
			height: 70upx;
			line-height: 70upx;
			color: #333;
			font-size: 28upx;
			text{
				display: block;
				width: 25%;
				float: left;
				text-align: center;
				font-weight: 600;
			}
		}
		.reList{
			width: 100%;
			.reli{
				height: 60upx;
				width: 100%;
				margin-top: 20upx;
				border-radius: 12upx;
				background: #fbfbfb;
				font-size: 22upx;
				color: #999;
				line-height: 60upx;
				text{
					display: block;
					width: 25%;
					float: left;
					text-align: center;
				}
				text:nth-child(3){
					line-height: 30upx;
				}
			}
			.reli:first-child{
				margin-top:0upx;
			}
		}
	}
	
	.lback{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		.lcont{
			width: 680upx;
			background: #fff;
			padding: 10upx;
			padding-top: 30upx;
			box-sizing: border-box;
			border-radius: 8upx;
			box-shadow: 5upx 5upx 15upx rgba(0,0,0,0.5);
			position: relative;
			.lGroup{
				display: flex;
				margin-top: 20upx;
				.nams,.bfb{
					display: block;
					width: 150px;
					text-align: right;
					height: 80upx;
					font-size: 26upx;
					line-height: 80upx;
					color: #999;
				}
				.bfb{
					width: 20upx;
					display: block;
					font-size: 28upx;
					color: #333;
					padding: 10upx;
				}
				input,.pickers{
					display: block;
					height: 80upx;
					width: 430upx;
					padding-left: 10upx;
					margin-left: 10upx;
					box-sizing: border-box;
					border:2upx solid #17A6E0;
					border-radius: 8upx;
					font-size: 26upx;
				}
				.pickers{
					.uni-input{
						height: 100%;
						width: 100%;
						line-height: 80upx;
					}
				}
			}
			.isBtn{
				margin-top: 30upx;
				width: 100%;
				height: 80upx;
				color: #fff;
				font-size: 34upx;
				text-align: center;
				border-radius: 8upx;
				background: #17A6E0;
				line-height: 80upx;
			}
			.closeview{
				width: 60upx;
				height: 60upx;
				border-radius: 50%;
				border: 4upx solid #fff;
				position: absolute;
				color: #fff;
				right: 0;
				top: -100upx;
				text-align: center;
				line-height: 60upx;
			}
		}
	}
</style>
