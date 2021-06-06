<!-- <template>
	<view class="conbox">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="提现" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
		<view class="container">
			<!-- 背景 -->
			<img src="../../../../static/img/bg.png" class="cont" mode=""></img>
			<img src="../../../../static/img/caidai.png" class="caidai" mode=""></img>
			<view class="header">
				<view class="header-title">
					<view class="left">
						次数： <text style="color: #E4431A;">{{chishu}}</text>
					</view>
					<view class="right" @click="getmyPrize">
						邀请好友
					</view>
				</view>
			</view>
			<view class="main">
				<view class="canvas-container">

					<view :animation="animationData" class="canvas-content" id="zhuanpano" style="">
					<!-- <view :animation="animationData" class="canvas-content" id="zhuanpano"  :style="[{transform:'rotate('+runDeg+')'}]"> -->
						<!-- <canvas class="canvas" canvas-id="canvas"></canvas> -->
						<view class="canvas-line">
							<view class="canvas-litem" v-for="(item,index1) in awardsList" :key="index1" :style="[{transform:'rotate('+item.lineTurn+')'}]"></view>
						</view>

						<view class="canvas-list">
							<view class="canvas-item" :style="[{zIndex:index2}]" v-for="(iteml,index2) in awardsList" :key="index2">
								<view class="canvas-item-text" :style="[{transform:'rotate('+iteml.turn+')'}]">
									<text>{{iteml.award}}</text>
									<img class="canvas-item-text-img" src="../../../../static/img/xiaolian.png" v-if="iteml.type == 3"></img>
									<img class="canvas-item-text-img" src="../../../../static/img/youhuiquan.png" v-if="iteml.type == 2"></img>
									<img class="canvas-item-text-img" src="../../../../static/img/jingyan.png" v-if="iteml.type == 1"></img>
									<img class="canvas-item-text-img" src="../../../../static/img/jifenimg.png" v-if="iteml.type == 0"></img>
								</view>
							</view>
						</view>
					</view>

					<view @tap="playReward" class="canvas-btn" v-bind:class="btnDisabled">抽奖 </view>
				</view>
			</view>
			<!-- 规则 -->
			<view class="guize">
				<view class="title">
					抽奖规则
				</view>
				<view class="g_item">
					1.个人或代理通过自己的邀请二维码让用户注册成为牛米网会员并入金达一千元以上即可获得一次免费抽1-30万的炒股金活动机会。
				</view>
				<view class="g_item">
					2.本活动不限次数，邀请的人数越多抽奖的次数就越多，送出的免费炒股金一万元起。
				</view>
				<view class="g_item">
					3.所抽中的奖项直接返到你绑定的牛米网的账号，所中奖金必须交纳奖金的10%保证金。
				</view>
				<view class="g_item">
					4.奖励合约免费操盘的日期为5个交易日，到期如没卖出自动平仓。用户交纳的保证金自动返回到其账户上，亏损的在保证金上扣除，盈利全归用户。
				</view>
				<view class="g_item">
					5.奖励合约交易时间按照从扣除保证金开始计算！
				</view>
				<view class="g_item">
					6.本活动最终解析权归牛米网。
				</view>
			</view>
			
			<!-- 奖励 -->
			<view class="luckyBox" v-if="lcyShow">
				<view class="luckyContent">
					<view class="tit">
						<text>恭喜获得1万元体验金</text>
						<view class="lClose" @click="lcyShow = false">X</view>
					</view>
					<view class="lDetails">
						<input type="number" value="" />
						<view class="ft" style="margin-top: 30upx;">*股票信息将以短信形式发给您</view>
						<view class="ft">*牛股将在下一个工作日17时之前到达</view>
						<view class="get" @click="lcyShow = false">立即领取</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	export default {
		components: {cmdNavBar},
		data() {
			return {
				awardsConfig: {
					chance: true, //是否有抽奖机会
					lists: [], //奖品列表 
				},
				awardsList: {},
				animationData: {},
				btnDisabled: '',
				thanksarr: [], //存储谢谢参与的索引
				chishu: 0,
				mold: 1,
				myPrizelist:[],
				
				lcyShow : false
			}
		},
		onLoad: function() {
			// 获取奖品列表
			this.initdata(this)
		},
		onReady: function(e) {

		},
		methods: {
			// 邀请好友
			getmyPrize(){
				
			},
			// 初始化抽奖数据
			initdata:function(that){
				//服务器数据
				let data = {
					"lists": [
						{
							"mold": 1,      //  1 积分转盘抽奖     2现金转盘抽奖
							"type": 1,       // 1积分  2经验   3现金
							"name": "1万",      //  名称
							"amount": "1.00",      //  数额
							"scale": "0.60",      //  中奖比例
							"createtime": 1553651469
						},
						{
							"name": "3万",
						},
						{
							"name": "5万",
						},
						{
							"name": "8万",
						},
						{
							"name": "15万",
						},
						{
							"name": "20万",
						},
						{
							"name": "30万",
						}
					],
					"luckdraw": 1  // 用户剩余抽奖次数
				}
				
				that.awardsConfig = data
				that.chishu = data.luckdraw;
				// 获取奖品的个数
				let awarrlength = that.awardsConfig.lists.length
				// push 谢谢参与奖项
				for (var i = 0; i <= 0; i++) {
					that.thanksarr.push(i)
					that.awardsConfig.lists.splice(i, 0, {
						name: '谢谢参与',
						type: 0
					});
				}
				// 为每一项追加index属性
				that.awardsConfig.lists.forEach(function(element, index) {
					element.index = index
				})
			
				// 画转盘
				that.drawAwardRoundel();
			},
			//画抽奖圆盘  
			drawAwardRoundel: function() {
				// 拿到奖品列表
				var awards = this.awardsConfig.lists;
				var awardsList = [];
				// 每份奖品所占角度
				var turnNum = 1 / awards.length * 360; // 文字旋转 turn 值  
				// 奖项列表  
				for (var i = 0; i < awards.length; i++) {
					awardsList.push({
						turn: i * turnNum + 'deg', //每个奖品块旋转的角度
						lineTurn: i * turnNum + turnNum / 2 + 'deg', //奖品分割线的旋转角度
						award: awards[i].name, //奖品的名字,
						type: awards[i].type,
						id:awards[i].type,
					});
				}
				this.btnDisabled = this.chishu ? '' : 'disabled';
				this.awardsList = awardsList;
			},
			//发起抽奖  
			playReward: function() {
				var that = this
				if (this.chishu == 0) {
					uni.showToast({
						title: '抽奖次数已经用完',
						icon: 'none'
					})
					return
				}
				this.chishu--;
				var awardIndex = 1
				//中奖index  
				var awardsNum = that.awardsConfig.lists;
				// var awardIndex = 1 || Math.round(Math.random() * (awardsNum.length - 1)); //随机数  
				var runNum = 4; //旋转8周  
				var duration = 4000; //时长  
				// 旋转角度  
				that.runDeg = that.runDeg || 0;
				let preDeg = that.runDeg
				that.runDeg = that.runDeg + (360 - that.runDeg % 360) + (360 * runNum - awardIndex * (360 / awardsNum.length)) +1
				//创建动画  
				var animationRun = uni.createAnimation({
					duration: duration,
					timingFunction: 'ease'
				})
				animationRun.rotate(that.runDeg).step();
				that.animationData = animationRun.export();
				setTimeout(function() {
					// uni.showModal({
					// 	title: '恭喜',
					// 	content: '获得' + (that.awardsConfig.lists[awardIndex].name),
					// 	showCancel: false,
					// 	success:function(){
					// 		// 置空style  否则动画不生效
					// 		setTimeout(function(){
					// 			document.getElementById('zhuanpano').style=''
					// 		},1000)
					// 	}
					// });
					that.lcyShow = true
					that.btnDisabled = '';
				}.bind(that), duration);
			},
		}

	}
</script>
<style lang="scss" scoped>
	.conbox {
		width: 750upx;
		height: 100vh;
		overflow-x: hidden;
		overflow-y: scroll;
		/*  #ifdef  APP-PLUS  */
		padding-top: 90upx;
		/*  #endif  */
		top: var(--status-bar-height);
	}

	.container,
	img.cont {
		width: 750upx;
		min-height: 100vh;
		height: auto;
		position: relative;
	}

	img.cont {
		height: 100%;
		position: absolute;
		z-index: 0;
	}

	img.caidai {
		position: absolute;
		top: 0;
		left: 0;
		width: 750upx;
		height: 1024upx;
	}

	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* height: 246upx; */
		padding-top: 48upx;
		padding-bottom: 40upx;
		box-sizing: border-box;
		position: relative;
		z-index: 3;
	}

	.header-title {
		width: 100%;
		height: 60upx;
		display: flex;
		align-items: center;
		padding: 0 48upx;
		box-sizing: border-box;
		justify-content: space-between;
	}

	.header-title>view {
		padding: 8upx 16upx;
		border: 1px solid #d89720;
		color: #d89720;
		font-size: 28upx;
		border-radius: 26upx;
	}

	/* 转盘 */
	.canvas-container {
		margin: 0 auto;
		position: relative;
		width: 600upx;
		height: 600upx;
		background: url(../../../../static/img/circle.png) no-repeat;
		background-size: cover;
		border-radius: 50%;
	}

	.canvas {
		width: 100%;
		height: 100%;
		display: block !important;
		border-radius: 50%;
	}

	.canvas-content {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
		display: block;
		width: 600upx;
		height: 600upx;
		border-radius: inherit;
		/* background-clip: padding-box; */
		/* background-color: #ffcb3f; */
	}

	.canvas-element {
		position: relative;
		z-index: 1;
		width: inherit;
		height: inherit;
		border-radius: 50%;
	}

	.canvas-list {
		position: absolute;
		left: 0;
		top: 0;
		width: inherit;
		height: inherit;
		z-index: 9999;
	}

	.canvas-item {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		color: #e4370e;
		/* text-shadow: 0 1upx 1upx rgba(255, 255, 255, 0.6); */
	}

	.canvas-item-text {
		position: relative;
		display: block;
		padding-top: 46upx;
		margin: 0 auto;
		text-align: center;
		-webkit-transform-origin: 50% 300upx;
		transform-origin: 50% 300upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #FB778B;
	}

	.canvas-item-text text {
		font-size: 30upx;
	}

	.canvas-item-text-img {
		width: 50upx;
		height: 50upx;
		padding-top: 30upx;
	}

	/* 分隔线 */
	.canvas-line {
		position: absolute;
		left: 0;
		top: 0;
		width: inherit;
		height: inherit;
		z-index: 99;
	}

	.canvas-litem {
		position: absolute;
		left: 300upx;
		top: 0;
		width: 3upx;
		height: 300upx;
		background-color: rgba(228, 55, 14, 0.4);
		overflow: hidden;
		-webkit-transform-origin: 50% 300upx;
		transform-origin: 50% 300upx;
	}

	/**  
* 抽奖按钮  
*/
	.canvas-btn {
		position: absolute;
		left: 260upx;
		top: 260upx;
		z-index: 400;
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
		color: #f4e9cc;
		background-color: #e44025;
		line-height: 80upx;
		text-align: center;
		font-size: 26upx;
		text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.6);
		box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6);
		text-decoration: none;
	}

	.canvas-btn::after {
		position: absolute;
		display: block;
		content: ' ';
		left: 12upx;
		top: -44upx;
		width: 0;
		height: 0;
		overflow: hidden;
		border-width: 30upx;
		border-style: solid;
		border-color: transparent;
		border-bottom-color: #e44025;
	}

	.canvas-btn.disabled {
		pointer-events: none;
		background: #b07a7b;
		color: #ccc;
	}

	.canvas-btn.disabled::after {
		border-bottom-color: #b07a7b;
	}

	.canvas-btn-table {
		color: #A83FDB;
		width: 120upx;
		text-align: center;
		position: absolute;
		left: 240upx;
		top: 360upx;
		font-size: 26upx;
		background-color: #FFFFFF;
		opacity: 0.9;
	}

	.guize {
		width: 502upx;
		min-height: 300upx;
		display: flex;
		flex-direction: column;
		position: relative;
		z-index: 3;
		background-image: linear-gradient(-180deg, #F48549 0%, #F2642E 100%);
		border: 18upx solid #E4431A;
		border-radius: 16px;
		margin: 0 auto;
		margin-top: 20upx;
		padding: 48upx;
		/* box-sizing: border-box; */
		color: #fff;
	}

	.guize .title {
		text-align: center;
		margin-bottom: 28upx;
	}

	.guize .g_item {
		font-family: PingFang-SC-Medium;
		font-size: 24upx;
		color: #FFFFFF;
		letter-spacing: 0.5px;
		text-align: justify;
		line-height: 20px;
	}
	
	.luckyBox{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
		z-index: 999;
		display: flex;
		justify-content: center;
		align-items: center;
		.luckyContent{
			background: #fff;
			width: 600upx;
			.tit{
				width: 100%;
				height: 80upx;
				line-height: 80upx;
				text-align: center;
				color: #fff;
				font-size: 30upx;
				background: #d64e47;
				position: relative;
				.lClose{
					position: absolute;
					top: 0;
					right: 0;
					width: 80upx;
					height: 80upx;
				}
			}
			.lDetails{
				padding: 30upx;
				box-sizing: border-box;
				input{
					display: block;
					width: 100%;
					height: 60upx;
					border:2upx solid #FF6D28;
					box-sizing: border-box;
					text-align: center;
				}
				.ft{
					width: 100%;
					color: #d14037;
					font-size: 28upx;
					line-height: 40upx;
					text-align: center;
				}
				.get{
					width: 370upx;
					height: 56upx;
					line-height: 56upx;
					background: #d64e47;
					border-radius: 8upx;
					margin: 0 auto;
					margin-top: 20upx;
					color: #fff;
					text-align: center;
					font-size: 26upx;
				}
			}
			
		}
	}
</style>
 -->