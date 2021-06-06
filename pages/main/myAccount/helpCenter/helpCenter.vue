<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar class="nav-bar" :fixed="false" back background-color="linear-gradient(to right, #EF9435, #E95E28)" title="帮助中心" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
		<view class="helpList">
			<view class="helpLi" v-for="(el,i) in helpList" :key="i" @click="goRuleQuery(el)">
				{{el.title}}
				<text class="liIcon"></text>
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
			goRuleQuery(el){
				uni.navigateTo({
					url : "/pages/main/publicView/news/news?type=help&id="+el.id+"&title="+el.title,
				})
			},
			initData(){
				uni.showLoading({
					title : ''
				})
				http.get('helpCenter/findTitles').then((res)=>{
					this.helpList = res.data.data
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
		// padding-top: 90upx;
		// top: var(--status-bar-height);
	}
	.helpList{
		padding-top: calc(var(--status-bar-height) + 90upx);
		width: 100%;
		.helpLi{
			width: calc(100% - 20upx);
			height: 85upx;
			line-height: 85upx;
			font-size: 28upx;
			margin-left: 20upx;
			border-bottom: 2upx solid #dedede;
			color: #555;
		}
		.liIcon{
			display: block;
			float: right;
			width: 85upx;
			height: 85upx;
			position: relative;
		}
		.liIcon:after{
			content: '';
			width: 15upx;
			height: 1upx;
			background: #555;
			position: absolute;
			left: 30upx;
			top: 40upx;
			transform: rotate(45deg);
		}
		.liIcon:before{
			content: '';
			width: 15upx;
			height: 1upx;
			background: #555;
			position: absolute;
			right: 30upx;
			top: 40upx;
			transform: rotate(-45deg);
		}
	}
</style>
