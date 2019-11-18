<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="资金流水" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
		<view class="timeSelectBox">
			<view class="tsbCont">
				<view class="timeStart">
					<picker mode="date" :value="date1" :start="startDate" :end="endDate" @change="bindDateChange1">
						<view class="uni-input">{{date1}}</view>
					</picker>
					<div class="kailong"></div>
				</view>
				<view class="trans">到</view>
				<view class="endStart">
					<picker mode="date" :value="date2" :start="startDate" :end="endDate" @change="bindDateChange2">
						<view class="uni-input">{{date2}}</view>
					</picker>
					<div class="kailong"></div>
				</view>
				<view class="querys" @click="queryHistory">
					<image src="../../../../static/icon/queryfdj.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="tb">
			<view class="tbson thTop">
				<view>时间</view>
				<view>类型</view>
				<view>金额</view>
				<view>状态</view>
			</view>
			<view class="tbson td" v-for="(el,i) in listData" :key="i">
				<view>
					{{
						el.listType == 'activityRecharge' ? el.addTime
						: el.listType == 'buys' ? el.buyDate
						: el.listType == 'rechargeRecord' ? el.createTime
						: el.listType == 'sells' ? el.sellDate
						: el.listType == 'interestFee' ? el.addTime
						: el.listType == 'withRecord' ? el.updateTime : ''
						| timeZhuan
					}}
				</view>
				<view>
					{{
						el.listType == 'activityRecharge' ? '活动充值'
						: el.listType == 'buys' ? '买入'
						: el.listType == 'rechargeRecord' ? '普通充值'
						: el.listType == 'sells' ? '卖出'
						: el.listType == 'interestFee' ? '息费'
						: el.listType == 'withRecord' ? '提现' : ''
					}}
				</view>
				<view>
					{{
						el.listType == 'activityRecharge' ? el.amount + '元'
						: el.listType == 'buys' ? el.amount + '元'
						: el.listType == 'rechargeRecord' ? el.amount + '元'
						: el.listType == 'sells' ? el.amount + '元'
						: el.listType == 'interestFee' ? el.amount + '元'
						: el.listType == 'withRecord' ? el.amount + '元' : ''
					}}
				</view>
				<view>
					{{
						el.listType == 'activityRecharge' ? '充值成功'
						: el.listType == 'buys' ? '交易完成'
						: el.listType == 'rechargeRecord' ? '充值成功'
						: el.listType == 'sells' ? '交易完成'
						: el.listType == 'interestFee' ? '交易完成'
						: el.listType == 'withRecord' ? '提现成功' : ''
					}}
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
			const currentDate = this.getDate({
				format: true
			})
			return {
				date1: '',
				date2: currentDate,
				buysData : [],
				sellData : [],
				listData : []
			};
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		created() {
			this.queryHistory();
		},
		filters: {
	　　　　 timeZhuan(value) {
				return value.substring(0,10);
	　　　　 }
	　　},
		methods: {
			bindDateChange1: function(e) {
				this.date1 = e.target.value
			},
			bindDateChange2: function(e) {
				this.date2 = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			queryHistory(){
				var oDate1 = new Date(this.date1);
				var oDate2 = new Date(this.date2);
				if(oDate1.getTime() > oDate2.getTime()){
					uni.showModal({
						title : '提示',
						content : '查询日期顺序有误',
						showCancel : false,
					})
					return
				}
				uni.showLoading({
					mask:true
				})
				let _this = this;
				http.get('transaction/capital',{phone:this.$store.state.userInfo.phone,starTime:this.date1,endTime:this.date2}).then((res)=>{
					let withRecord = res.data.data.withRecord;
					let interestFee = res.data.data.interestFee;
					let sells = res.data.data.sells;
					let rechargeRecord = res.data.data.rechargeRecord;
					let buys = res.data.data.buys;
					let activityRecharge = res.data.data.activityRecharge;
					
					for(var i = 0; i < withRecord.length ; i++){
						withRecord[i].stamp = new Date(withRecord[i].updateTime).getTime();
						withRecord[i].listType = "withRecord"
					}
					for(var i = 0; i < interestFee.length ; i++){
						interestFee[i].stamp = new Date(interestFee[i].addTime).getTime();
						interestFee[i].listType = "interestFee"
					}
					for(var i = 0; i < sells.length ; i++){
						sells[i].stamp = new Date(sells[i].sellDate).getTime();
						sells[i].listType = "sells"
					}
					for(var i = 0; i < rechargeRecord.length ; i++){
						rechargeRecord[i].stamp = new Date(rechargeRecord[i].createTime).getTime();
						rechargeRecord[i].listType = "rechargeRecord"
					}
					for(var i = 0; i < buys.length ; i++){
						buys[i].stamp = new Date(buys[i].buyDate).getTime();
						buys[i].listType = "buys"
					}
					for(var i = 0; i < activityRecharge.length ; i++){
						activityRecharge[i].stamp = new Date(activityRecharge[i].addTime).getTime();
						activityRecharge[i].listType = "activityRecharge"
					}
					
					let listData = [];
					listData.push(...withRecord,...interestFee,...sells,...rechargeRecord,...buys,...activityRecharge);
					listData = listData.sort((a,b)=>{
						return b.stamp - a.stamp;
					})
					_this.listData = listData;
				})
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
		background: #fbfbfb;
		height: 100%;
	}
	.timeSelectBox{
		width: 100%;
		height: 100upx;
		background: #f5f5f5;
		padding-top: 25upx;
		box-sizing: border-box;
		position: fixed;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		top: calc(var(--status-bar-height) + 90upx);
		/*  #endif  */
		left: 0;
		z-index: 2;
		.tsbCont{
			width: calc(100% - 70upx);
			margin: 0 auto;
			.timeStart,.endStart{
				width: 270upx;
				height: 50upx;
				line-height: 50upx;
				border-radius: 10upx;
				border: 3upx solid #dadada;
				box-sizing: border-box;
				text-indent: 18upx;
				color: #000;
				font-size: 26upx;
				position: relative;
				float: left;
				.kailong{
					width:0;
					height:0;
					border-right:16upx solid transparent;
					border-left:16upx solid transparent;
					border-bottom:16upx solid #dadada;
					position: absolute;
					right: -10upx;
					bottom: -2upx;
					transform: rotate(135deg);
				}
			}
			.trans{
				width: 60upx;
				height: 50upx;
				line-height: 50upx;
				float: left;
				text-align: center;
				color: #424242;
				font-size: 30upx;
			}
			.querys{
				display: flex;
				justify-content: center;
				align-items: center;
				float: right;
				width: 58upx;
				height: 50upx;
				image{
					display: block;
					height: 42upx;
					width: 42upx;
				}
			}
		}
	}
	.tb{
		width: 100%;
		position: relative;
		padding-top: 186upx;
		.tbson{
			width: 100%;
			text-align: center;
			line-height: 86upx;
			height: 86upx;
			color: #464646;
			border-top: 1upx solid #d9d9d9;
			border-bottom: 1upx solid #d9d9d9;
			font-size: 25upx;
			background: #fff;
			font-weight: 600;
			view{
				width: 25%;
				float: left;
				height: 86upx;
			}
		}
		.thTop{
			width: 100%;
			height: 86upx;
			position: fixed;
			top: 100upx;
			/*  #ifdef  APP-PLUS  */
			top: calc(var(--status-bar-height) + 190upx);
			/*  #endif  */
			left: 0;
			background: #fbfbfb;
			z-index:2;
		}
		.td{
			border: none;
			background: #FBFBFB;
			font-weight: 400;
			view:nth-child(4){
				color:#00B26A;
			}
			view:last-child{
				box-sizing: border-box;
				text{
					width: 50%;
					height: 100%;
					float: left;
					text-align: center;
				}
				text:nth-child(1){
					color: #0D8AE6;
				}
				text:nth-child(2){
					color: red;
				}
			}
		}
		.td:nth-child(2n-1){
			background: #fff;
		}
	}
</style>
