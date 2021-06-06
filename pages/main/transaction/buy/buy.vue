<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar class="nav-bar" :fixed="false" back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="买入" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
		<view class="buyMsg">
			昨收<text>{{stockInfo.lastClosePrice == undefined ? '0.00' : stockInfo.lastClosePrice}}</text>
			今开<text>{{stockInfo.openPrice == undefined ? '0.00' : stockInfo.openPrice}}</text>
			最高<text>{{stockInfo.highest == undefined ? '0.00' : stockInfo.highest}}</text>
			最低<text>{{stockInfo.lowest == undefined ? '0.00' : stockInfo.lowest}}</text>
			涨停<text class="red">{{stockInfo.dailyLimit == undefined ? '0.00' : stockInfo.dailyLimit}}</text>
			跌停<text class="green">{{stockInfo.downLimit == undefined ? '0.00' : stockInfo.downLimit}}</text>
		</view>
		<view class="buyInfo">
			<view class="infoLeft">
				<input class="bit" type="number" v-model="missVal" maxlength="6" @input="bitListen" placeholder="股票代码"/>
				<view class="thinkBox">
					<view class="miss" v-for="(el,i) in stocksWant" :key="i" v-if="missShow" @click="selectThis(el.stockCode)">
						<text>{{el.stockCode}}</text><text>{{el.stockName}}</text>
					</view>
				</view>
				<view class="buyTerm">
					<view class="treLeft" @click="treChange">
						<radio-group @change="treChange">
							<label>
								<radio color="#FF6D28" value="1" />市价买入
							</label>
						</radio-group>
					</view>
					<view class="treRight" @click="refresh">
						<image src="../../../../static/icon/reload.png" mode=""></image>
						<text>刷新</text>
					</view>
				</view>
				<view class="bbg">
					<view class="backRed bbgcon" @click="priceDelAdd('del')">-</view>
					<input class="bbi" type="number" value="" v-model="buyPrice" @blur="priceCheck"/>
					<view class="backRed bbgcon" @click="priceDelAdd('add')">+</view>
				</view>
				<view class="buyxz">
					现价：<text class="rd">{{stockInfo.instantPrice == undefined ? '0.00' : stockInfo.instantPrice}}</text>
					最大可买：<text>{{parseInt((available * multiple / buyPrice ) - (available * multiple / buyPrice ) % 100 * 1) / 1}}</text> 
				</view>
				<view class="bbg">
					<view class="backRed bbgcon" @click="numDelAdd('del')">-</view>
					<input class="bbi" type="number" value="" v-model="buyNum" @blur="numCheck"/>
					<view class="backRed bbgcon" @click="numDelAdd('add')">+</view>
				</view>
				<view class="buyInPro">
					<radio-group @change="buyInChange" >
						<label>
							<view class="ct">
								<radio color="#FF6D28" value="1" />全部
							</view>
						</label>
						<label>
							<view class="ct">
								<radio color="#FF6D28" value="2" />1/2
							</view>
						</label>
						<label>
							<view class="ct">
								<radio color="#FF6D28" value="3" />1/3
							</view>
						</label>
						<label>
							<view class="ct">
								<radio color="#FF6D28" value="4" />1/4
							</view>
						</label>
					</radio-group>
				</view>
				<view class="buyInBtn backRed" @click="immediatelyBuy">
					立即买入
				</view>
			</view>
			<view class="infoRight">
				<view class="xux">
					<view class="infoName">{{stockInfo.stockName == undefined ? '--' : stockInfo.stockName}}</view>
					<view class="maill">
						<view class="m1">卖五</view>
						<view class="m2">{{stockInfo.sellPrices[4] == undefined ? '0.00' : stockInfo.sellPrices[4]}}</view>
						<view class="m3">{{stockInfo.sellAmounts[4] == undefined ? '0' : stockInfo.sellAmounts[4]}}</view>
					</view>
					<view class="maill">
						<view class="m1">卖四</view>
						<view class="m2">{{stockInfo.sellPrices[3] == undefined ? '0.00' : stockInfo.sellPrices[3]}}</view>
						<view class="m3">{{stockInfo.sellAmounts[3] == undefined ? '0' : stockInfo.sellAmounts[3]}}</view>
					</view>
					<view class="maill">
						<view class="m1">卖三</view>
						<view class="m2">{{stockInfo.sellPrices[2] == undefined ? '0.00' : stockInfo.sellPrices[2]}}</view>
						<view class="m3">{{stockInfo.sellAmounts[2] == undefined ? '0' : stockInfo.sellAmounts[2]}}</view>
					</view>
					<view class="maill">
						<view class="m1">卖二</view>
						<view class="m2">{{stockInfo.sellPrices[1] == undefined ? '0.00' : stockInfo.sellPrices[1]}}</view>
						<view class="m3">{{stockInfo.sellAmounts[1] == undefined ? '0' : stockInfo.sellAmounts[1]}}</view>
					</view>
					<view class="maill">
						<view class="m1">卖一</view>
						<view class="m2">{{stockInfo.sellPrices[0] == undefined ? '0.00' : stockInfo.sellPrices[0]}}</view>
						<view class="m3">{{stockInfo.sellAmounts[0] == undefined ? '0' : stockInfo.sellAmounts[0]}}</view>
					</view>
				</view>
				<view class="xux" style="margin-top: 16upx;">
					<view class="maill">
						<view class="m1">买一</view>
						<view class="m2">{{stockInfo.buyPrices[0] == undefined ? '0.00' : stockInfo.buyPrices[0]}}</view>
						<view class="m3">{{stockInfo.buyAmounts[0] == undefined ? '0' : stockInfo.buyAmounts[0]}}</view>
					</view>
					<view class="maill">
						<view class="m1">买二</view>
						<view class="m2">{{stockInfo.buyPrices[1] == undefined ? '0.00' : stockInfo.buyPrices[1]}}</view>
						<view class="m3">{{stockInfo.buyAmounts[1] == undefined ? '0' : stockInfo.buyAmounts[1]}}</view>
					</view>
					<view class="maill">
						<view class="m1">买三</view>
						<view class="m2">{{stockInfo.buyPrices[2] == undefined ? '0.00' : stockInfo.buyPrices[2]}}</view>
						<view class="m3">{{stockInfo.buyAmounts[2] == undefined ? '0' : stockInfo.buyAmounts[2]}}</view>
					</view>
					<view class="maill">
						<view class="m1">买四</view>
						<view class="m2">{{stockInfo.buyPrices[3] == undefined ? '0.00' : stockInfo.buyPrices[3]}}</view>
						<view class="m3">{{stockInfo.buyAmounts[3] == undefined ? '0' : stockInfo.buyAmounts[3]}}</view>
					</view>
					<view class="maill">
						<view class="m1">买五</view>
						<view class="m2">{{stockInfo.buyPrices[4] == undefined ? '0.00' : stockInfo.buyPrices[4]}}</view>
						<view class="m3">{{stockInfo.buyAmounts[4] == undefined ? '0' : stockInfo.buyAmounts[4]}}</view>
					</view>
				</view>
			</view>
			<text style="display: block;clear: both;height: 50upx;"></text>
		</view>
		<view class="jrwt">
				持股信息
			</view>
		<view class="tb">
			<view class="tbson thTop">
				<view style="width: 20%;">名称/代码</view>
				<view style="width: 20%;">盈亏/比例</view>
				<view style="width: 20%;">持仓/可用</view>
				<view style="width: 20%;">成本/现价</view>
				<view style="width: 20%;">市值/操作</view>
			</view>
			<view class="tbson td" v-for="(el,i) in buysData" :key="i">
				<view>
					<text>{{el.stockName}}\n</text> 
					<text>{{el.stockCode}}</text>
				</view>
				<view style="line-height: 44upx;">
					<text>{{el.profitAndLoss}}\n</text>
					<text>{{el.lossThan}}</text>
				</view>
				<view style="line-height: 44upx;">
					<text>{{el.freezeNumber+el.sharesNumber}}\n</text>
					<text>{{el.sharesNumber}}</text>
				</view>
				<view style="line-height: 44upx;">
					<text>{{el.costPrice}}\n</text>
					<text>{{el.currentPrice}}</text>
				</view>
				<view style="line-height: 44upx;">
					<text>{{el.marketValue}}\n</text>
					<text style="color: #0D8AE6;"  @click="cancellations(el,i)">买入</text>
				</view>
				<view style="width: 100%;height: 20upx;background: #a7a7a7;" > </view>
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
				missVal: '',
				missShow : false,
				//股票信息
				stockInfo : {
					buyPrices : [0,0,0,0,0],
					buyAmounts: [0,0,0,0,0],
					sellPrices : [0,0,0,0,0],
					sellAmounts : [0,0,0,0,0]
				},
				//用户总净资产，改成本金
				available : 0,
				//用户输入买入价格
				buyPrice : '',
				//用户输入买入个数
				buyNum : '',
				//用户收藏的股票数据
				stocks : [],
				//股票搜索框提示
				stocksWant : [],
				//今日委托数据
				buysData : [],
				//买入百分比
				buyInbfb : 1,
				multiple : 8,
				isRouterAlive: true,
			};
		},
		
		watch:{
			'buyPrice'(newval,oldval){
				this.buyNum = parseInt(Math.floor(this.available * this.multiple / this.buyPrice/this.buyInbfb / 100) * 100 * 1) / 1;
			}
		},
		methods: {
			treChange(evt){
				this.buyPrice = this.stockInfo.instantPrice;
			},
			buyInChange(evt){
				this.buyInbfb = evt.target.value;
				this.buyNum = parseInt(Math.floor(this.available * this.multiple / this.buyPrice/evt.target.value /100)*100 * 1) / 1;
			},
			//刷新
			refresh(){
				
				if(this.missVal.length == 6){
					this.queryStock(this.missVal)
				}
			},
			
			//删除或添加
			priceDelAdd(type){
				if(type == 'del'){
					this.buyPrice = (Number(this.buyPrice) - 0.01).toFixed(2);
				}else if(type == 'add'){
					this.buyPrice = (Number(this.buyPrice) + 0.01).toFixed(2);
				}
			},
			numDelAdd(type){
				if(type == 'del'){
					this.buyNum = (Number(this.buyNum) - 100);
				}else if(type == 'add'){
					this.buyNum = (Number(this.buyNum) + 100);
				}
			},
			//搜索键入监听
			bitListen(evt){
				let val = evt.target.value;
				let arr = [];
				this.stocks.forEach((el,index)=>{
					if(el.stockCode.indexOf(val) != -1){
						arr.push(el)
					}
				})
				arr = arr.slice(0,5);
				this.stocksWant = arr;
				if(this.stocksWant.length > 0){
					this.missShow = true;
				}else{
					this.missShow = false;
				}
				if(val.length == 6){
					this.queryStock(val)
				}
			},
			//价格 数量 脱焦监听
			priceCheck(evt){
				this.buyPrice = Number(this.buyPrice).toFixed(2);
				if(evt.target.value < 0){
					uni.showToast({
						position: 'bottom',
						title: '买入价格不能小于0',
						icon: 'none',
						duration: 2500
					});
					return
				}
			},
			numCheck(evt){
				// if(evt.target.value%100 != 0 || Number(evt.target.value) <= 0){
				// 	uni.showToast({
				// 		position: 'bottom',
				// 		title: '数量只能是100的倍数！',
				// 		icon: 'none',
				// 		duration: 2500
				// 	});
				// 	return
				// }
				// if(evt.target.value > parseInt((this.available * 6 * 0.7 / this.buyPrice) * 1) / 1){
				// 	uni.showToast({
				// 		position: 'bottom',
				// 		title: '不能超过最大可买数！',
				// 		icon: 'none',
				// 		duration: 2500
				// 	});
				// 	return
				// }
			},
			//提示框选中
			selectThis(stockCode){
				this.missShow = false;
				this.queryStock(stockCode);
			},
		
			//查询股票
			queryStock(stockCode){
				http.get('AppPortfolioPage/buy',{stockCode:stockCode}).then((res)=>{
					if(!res.data.success){
						uni.showToast({
							position: 'bottom',
							title: '没有查询到当前股票代码',
							icon: 'none',
							duration: 2500
						});
						return;
					}
					if(res.data.data.quote != undefined){
						this.stockInfo = res.data.data.quote;
						this.missVal = this.stockInfo.stockCode;
						this.buyPrice = this.stockInfo.instantPrice;	
						this.available = res.data.data.userAssetsVo.money;
						this.multiple = res.data.data.multiple;
					}
				if(res.data.data.stockHoldVoList != undefined){
					this.buysData = res.data.data.stockHoldVoList;
					this.stocks = res.data.data.stockHoldVoList;
				}
				});
			},
			//立即买入
			immediatelyBuy(){
				
				if(this.stockInfo.stockCode == undefined || this.stockInfo.stockCode == ''){
					uni.showModal({
						title : '提示',
						content : '请选择您要买入的股票',
						showCancel : false,
					})
					return;
				}
				if(Number(this.buyPrice) < 0 || Number(this.buyPrice) == NaN || this.buyPrice == ''){
					uni.showModal({
						title : '提示',
						content : '请输入正确的买入价',
						showCancel : false,
					})
					return;
				}
				if(this.buyNum%100 != 0 || Number(this.buyNum) <= 0 || this.buyNum == ''){
					uni.showModal({
						title : '提示',
						content : '买入数量只能是100的倍数！',
						showCancel : false,
					})
					return
				}
				if(Number(this.buyNum) > parseInt((this.available * this.multiple / this.buyPrice) * 1) / 1){
					uni.showModal({
						title : '提示',
						content : '不能超过最大可买数！',
						showCancel : false,
					})
					return
				}
				let _this = this;
				uni.showModal({
					title: '请确认',
					content: '是否买入【'+this.stockInfo.stockName+'】,代码【'+this.stockInfo.stockCode+'】,买入价【'+this.buyPrice+'】,买入数量【'+this.buyNum+'】',
					success: function (res) {
						if (res.confirm) {
							uni.showLoading({
								title: '提交中~'
							});
							http.get('stock/order/add',{
								stockCode : _this.stockInfo.stockCode,
								orderUnitPrice : _this.buyPrice,
								orderNumber : _this.buyNum,
								orderType : 'BUY'
							}).then((res)=>{
								if(res.data.success){
									
									uni.showModal({
										title : '提示',
										content : '购买成功',
										showCancel : false,
									})
									
								uni.redirectTo({url: '/pages/main/transaction/buy/buy'});
								}
							})
						} else if (res.cancel) {
							
						}
					}
				});
			},
			
			//选中
			cancellations(el, index) {
				this.queryStock(el.stockCode);
				this.maxSale = el.sharesNumber;
			},
			
			//获取持有股票
			getHasStock() {
				// this.queryStock('');
				http.get('stock/hold/getList', {'pageInfo.size':100,'pageInfo.num':1,'pageInfo.isReturnPage':false}).then((res) => {
					// console.log(res);
					// this.buysData = res.data.data.records;
					// this.stocks = res.data.data.records;
					this.buysData = res.data.data.records;
					this.stocks = res.data.data.records;
				})
			},
			//撤单
			cancellation(el,index){
				if(el.orderStatus.value != 0){
					return;
				}
				let _this = this;
				uni.showModal({
					title: '请确认',
					content: '是否撤单【'+el.stockName +'/' + el.stockCode +'】',
					success: function (res) {
						if (res.confirm) {
							http.get('stock/order/cancellations',{'id' : el.id + ""}).then((res)=>{
								if(res.data.success){
									uni.showModal({
										title : '提示',
										content : res.data.message,
										showCancel : false,
									})
									_this.queryStock('');
								}
							})
						}
					}
				});
			}
		},
		onLoad(options) {
	uni.showLoading({
		mask: true
	})
	if (options.type == 'zxgp') {
		this.queryStock(options.stockCode);
		this.maxSale = options.maxSale;
		http.get('AppPortfolioPage/sell', {
			stockCode: options.stockCode
		}).then((res) => {
			
			if (res.data.data.quote != undefined) {
				this.stockInfo = res.data.data.quote;
				this.missVal = this.stockInfo.stockCode;
				this.buyPrice = this.stockInfo.instantPrice;
				this.available = res.data.data.userAssetsVo.netAsset;
			}
			if(res.data.data.stockHoldVoList != undefined){
				this.buysData = res.data.data.stockHoldVoList;
				this.stocks = res.data.data.stockHoldVoList;
			}
			
			// this.stockOrder = []; 
			// if(res.data.data.stockOrderVoList != undefined){
			// 	this.stockOrder = res.data.data.stockOrderVoList;
			// 	this.quoteMap = res.data.data.quoteMap;
			// }
		})
	}
	// this.queryStock('');
	this.getHasStock();
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
		left: 0;
		z-index:20;
		width: 100%;
	}
	.content{
		/*距离顶部范围应该在88-95范围内*/
		/*  #ifdef  APP-PLUS  */
		// padding-top: 90upx;
		/*  #endif  */
		// top: var(--status-bar-height);
		// padding-bottom: 95upx;
		background: #fbfbfb;
		// height: 100%;
	}
	.buyMsg{
		width: 730upx;
		margin: 0 auto;
		color: #555;
		text-align: left;
		font-size: 26upx;
		padding-top: calc(var(--status-bar-height) + 90upx);
		padding-left: 10upx;
		padding-bottom: 10upx;
		padding-right: 10upx;
		box-sizing: border-box;
		text{
			margin-right: 8upx;
		}
		.red{
			color: #ff3e3e;
		}
		.green{
			color: #009944;
		}
	}
	.buyInfo{
		width: 730upx;
		height: auto;
		margin: 0 auto;
		.infoLeft{
			width: calc(50% - 7upx);
			float: left;
			position: relative;
			.bit{
				display: block;
				width: 100%;
				height: 60upx;
				box-sizing: border-box;
				border: 2upx solid #d5d5d5;
				border-radius: 5upx;
				font-size: 26upx;
				padding-left: 10upx;
				box-sizing: border-box;
			}
			.thinkBox{
				width: 100%;
				position: absolute;
				top: 60upx;
				left: 0upx;
				z-index: 10;
				background: #fff;
				border: 2upx solid #ddd;
				border-top: none;
				box-sizing: border-box;
				.miss{
					width: 100%;
					height: 60upx;
					line-height: 60upx;
					font-size: 24upx;
					color: #cc3d3b;
					padding-left: 8upx;
					box-sizing: border-box;
					text:nth-child(2){
						margin-left: 12upx;
					}
				}
			}
			.buyTerm{
				width: 100%;
				height: 70upx;
				line-height: 70upx;
				font-size: 28upx;
				.treLeft{
					float: left;
					color: #404040;
					
				}
				.treRight{
					height: 70upx;
					float: right;
					color: #000;
					image{
						width: 47upx;
						height: 47upx;
						vertical-align:middle;
					}
					text{
						margin-left: 8upx;
					}
				}
			}
			.bbg{
				height: 65upx;
				width: 100%;
				display: flex;
				justify-content: space-between;
				.bbgcon{
					width: 80upx;
					text-align: center;
					line-height: 65upx;
					font-size: 36upx;
					border-radius: 8upx;
					color: #fff;
					font-weight: 600;
				}
				.bbi{
					display: block;
					width: 180upx;
					height: 65upx;
					border-radius: 8upx;
					border: 1upx solid #d5d5d5;
					text-align: center;
					font-size: 26upx;
				}
			}
			.buyxz{
				width: 100%;
				height: 70upx;
				line-height: 70upx;
				font-size: 20upx;
				text-align: left;
				word-wrap:break-word;
				text{
					margin: 0 5upx;
				}
				.rd{
					color: #ff3e3e;
				}
			}
			.buyInPro{
				margin-top: 20upx;
				radio-group{
					width: 100%;
					display: flex;
					flex-wrap: wrap;
				}
				label{
					width: 50%;
				}
				.ct{
					width: 100%;
					height: 50upx;
					line-height: 50upx;
					text-align: left;
					margin-top: 5upx;
					font-size: 27upx;
					color: #404040;
				}
			}
			.buyInBtn{
				width: 100%;
				height: 80upx;
				line-height: 80upx;
				text-align: center;
				color: #fff;
				font-size: 30upx;
				border-radius: 8upx;
				margin-top: 64upx;
				background-color:#d34a43;
			}
		}
		.infoRight{
			width: calc(50% - 7upx);
			float: right;
			.xux{
				width: 100%;
				border: 4upx dashed #c4c4c4;
				box-sizing: border-box;
				border-radius: 8upx;
				.infoName{
					height: 65upx;
					border-bottom: 5upx solid #c4c4c4;
					text-indent: 8upx;
					line-height: 65upx;
					color: #3b3b3b;
					font-size: 32upx;
				}
				.maill{
					height: 50upx;
					width: 100%;
					padding: 0 20upx;
					box-sizing: border-box;
					line-height: 50upx;
					color: #3b3b3b;
					font-size: 28upx;
					.m1{
						width: 90upx;
						float: left;
					}
					.m2{
						float: left;
					}
					.m3{
						float: right;
					}
				}
			}
		}
	}
	// .jrwt{
	// 	width: 100%;
	// 	height: 88upx;
	// 	text-align: center;
	// 	line-height: 88upx;
	// 	color: #464646;
	// 	font-size: 28upx;
	// 	background: #eeeeee;
	// 	border-top: 2upx solid #d9d9d9;
	// 	border-bottom: 2upx solid #d9d9d9;
	// }
	// .tb{
	// 	width: 100%;
	// 	.tbson{
	// 		text-align: center;
	// 		line-height: 86upx;
	// 		height: 86upx;
	// 		color: #464646;
	// 		border-bottom: 1upx solid #d9d9d9;
	// 		font-size: 28upx;
	// 		background: #fff;
	// 		font-weight: 600;
	// 		view{
	// 			width: 25%;
	// 			float: left;
	// 			height: 86upx;
	// 		}
	// 	}
	// 	.td{
	// 		border: none;
	// 		background: #FBFBFB;
	// 		font-weight: 400;
	// 		font-size: 25upx;
	// 		view:nth-child(3){
	// 			padding: 0 25upx;
	// 			box-sizing: border-box;
	// 			text-align: center;
	// 			// text{
	// 			// 	width: 50%;
	// 			// 	height: 100%;
	// 			// 	float: left;
	// 			// 	text-align: center;
	// 			// }
	// 			// text:nth-child(1){
	// 			// 	color: #0D8AE6;
	// 			// }
	// 			// text:nth-child(2){
	// 			// 	color: red;
	// 			// }
	// 			text{
	// 				color: red
	// 			}
	// 		}
	// 	}
	// 	.td:nth-child(2n-1){
	// 		background: #fff;
	// 	}
	// }
	// .backRed{
	// 	background: #d7544b;
		
	// }
	
	.jrwt {
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
	
	.tb {
		width: 100%;
	
		.tbson {
			text-align: center;
			line-height: 86upx;
			height: 86upx;
			color: #464646;
			border-bottom: 1upx solid #d9d9d9;
			font-size: 26upx;
			background: #fff;
			font-weight: 600;
	
			view {
				width: 20%;
				float: left;
				height: 86upx;
			}
		}
	
	
		.td {
			border: none;
			background: #FBFBFB;
			font-weight: 400;
			font-size: 25upx;
			overflow: hidden;
	
	// 		view:last-child {
	// 			box-sizing: border-box;
	// 			text-align: center;
	
	// 			text {
	// 				width: 50%;
	// 				height: 100%;
	// 				// float: left;
	// 				padding: 5px;
	// 				text-align: center;
	// 			}
	
				.buy-or-can {
					float: none;
				}
	
				text:nth-child(1) {
					color: #0D8AE6;
				}
	
				text:nth-child(3) {
					color: red;
				}
			// }
		}
	
		.td:nth-child(2n-1) {
			background: #fff;
		}
	}
	
	.backRed {
		background: #FF6D28;
	}
</style>
