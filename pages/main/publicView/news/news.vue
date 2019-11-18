<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar back="true" background-color="linear-gradient(to right, #EF9435, #E95E28)" :title="barTitle" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
		<view class="newsBox">
			<view class="newsHead">
				<text>{{navTitle}}</text>
			</view>
			<view class="fwb">
				<rich-text :nodes="RichContent"></rich-text>
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
				barTitle : '新闻资讯',
				navTitle : '新闻资讯',
				viewType : '',
				RichContent : ''
			};
		},
		onLoad(options) {
			uni.showLoading({
				mask:true
			})
			this.navTitle = options.title
			this.barTitle = options.title;
			if(options.type == 'topBar'){
				http.get('home/item',{type:options.barType}).then((res)=>{
					this.RichContent = res.data.data.content;
				})
			}else if(options.type == 'help'){
				http.get('helpCenter/findHelpConterById',{id:options.id}).then((res)=>{
					this.RichContent = res.data.data.content;
				})
			}else if(options.type == 'DPXT'){
				http.get('home/news',{id:options.id}).then((res)=>{
					this.RichContent = res.data.data.content;
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.content{
		/*距离顶部范围应该在88-95范围内*/
		/*  #ifdef  APP-PLUS  */
		padding-top: 90upx;
		/*  #endif  */
		top: var(--status-bar-height);
	}
	.newsBox{
		width: 710upx;
		margin: 0 auto; 
		margin-top: 20upx;
		// border: 2upx solid #d8d8d8;
	}
	.newsHead{
		width: 100%;
		height: auto;
		line-height: 50upx;
		font-size: 40upx;
		color: #333;
		text-align: left;
		font-weight: 600;
	}
	.fwb{
		margin-top: 20upx;
	}
</style>
