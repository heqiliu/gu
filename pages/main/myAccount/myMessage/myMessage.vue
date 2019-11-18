<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="我的信息" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
		<view class="helpList">
			<view class="helpLi" v-for="(el,i) in helpList" :key="i" @click="goRuleQuery(el,i)">
				<view class="con">{{el.message}}</view>
				<view class="time">{{el.creadeTime | timeZhuan}}</view>
				<text class="liIcon" v-if="el.isRead == 'N'"></text>
			</view>
		</view>
	</view>
</template>

<script>
	import http from '@/http/interface.js'
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	export default {
		components: {cmdNavBar},
		data() {
			return {
				helpList : []
			};
		},
		onLoad() {
			this.initData();
		},
		methods:{
			goRuleQuery(el,i){
				if(el.isRead == 'Y'){
					return;
				}
				http.get('home/updateMessage',{phone:this.$store.state.userInfo.phone,id:el.id}).then((res)=>{
					uni.showToast({
						title: '已读',
						icon : 'none',
						duration: 2000
					});
					this.helpList[i].isRead = 'Y'
				})
			},
			initData(){
				uni.showLoading({
					title : ''
				})
				//获取用户消息
				http.get('home/getMessage',{phone:this.$store.state.userInfo.phone}).then((res)=>{
					this.helpList = res.data.data
				})
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
		padding-top: 90upx;
		top: var(--status-bar-height);
	}
	.helpList{
		width: 100%;
		.helpLi{
			width: 720upx;
			font-size: 28upx;
			margin: 0 auto;
			border-bottom: 2upx solid #dedede;
			color: #555;
			position: relative;
			background: #f3f3f3;
			padding: 20upx;
			padding-right: 50upx;
			box-sizing: border-box;
			margin-top: 30upx;
			border-radius: 15upx;
		}
		.con{
		}
		.time{
			text-align: right;
			color: #999;
			font-size: 24upx;
			text-align: right;
		}
		.liIcon{
			display: block;
			width: 20upx;
			height: 20upx;
			position: relative;
			background: red;
			border-radius: 50%;
			position: absolute;
			top: 50%;
			bottom: 50%;
			margin: auto 0;
			right: 20upx;
		}
	}
</style>
