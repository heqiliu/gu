<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar class="nav-bar" :fixed="false" back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="活动返佣" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
		<view class="tb">
			<view class="tbson thTop">
				<view class="tbs">时间/期数</view>
				<view class="tbs">会员</view>
				<view class="tbs">金额</view>
				<view class="tbs">状态</view>
			</view>
			<view class="tbson td" v-for="(el,i) in schedule" :key="i">
				<view class="tbs">{{el.reDate | timeZhuan}} <view>{{el.perNum}}</view></view>
				<view class="tbs">{{el.holder}}</view>
				<view class="tbs">{{el.amount}}元</view>
				<view class="tbs">
					{{el.isReturn == 'Y' ? '已返佣' : '进行中'}}
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
			return{
				schedule : []
			}
		},
		computed: {
			
		},
		onLoad(){
			this.querySchedule();
		},
		filters: {
	　　　　 timeZhuan(value) {
				return value.substring(0,10);
	　　　　 }
	　　},
		methods: {
			querySchedule(){
				uni.showLoading({
					mask:true
				})
				http.get('transaction/schedule',{holder:this.$store.state.userInfo.phone}).then((res)=>{
					this.schedule = res.data.data;
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
		left: 0;
		z-index:2;
		width: 100%;
	}
	.content{
		/*距离顶部范围应该在88-95范围内*/
		/*  #ifdef  APP-PLUS  */
		// padding-top: 90upx;
		/*  #endif  */
		top: var(--status-bar-height);
		// padding-bottom: 95upx;
		background: #fbfbfb;
		// height: 100%;
	}
	
	.tb{
		/*  #ifdef  APP-PLUS  */
		top: calc(var(--status-bar-height) + 90upx);
		/*  #endif  */
		width: 100%;
		position: relative;
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
			.tbs{
				width: 25%;
				float: left;
				height: 86upx;
			}
		}
		.thTop{
			width: 100%;
			height: 86upx;
			position: fixed;
			top: 0;
			/*  #ifdef  APP-PLUS  */
			top: calc(var(--status-bar-height) + 90upx);
			/*  #endif  */
			left: 0;
			background: #fbfbfb;
			z-index:2;
			
			
		}
		.td{
			border: none;
			background: #FBFBFB;
			font-weight: 400;
			view:nth-child(1){
				line-height: 43upx;
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
