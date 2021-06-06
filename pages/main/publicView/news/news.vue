<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar class="nav-bar" :fixed="false" back="true" background-color="linear-gradient(to right, #EF9435, #E95E28)" :title="barTitle" font-color="#fff"></cmd-nav-bar>
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
				RichContent : '',
				typeNum : 1009,
				type : '',
			};
		},
		computed:{
			webPath(){
				return this.$store.state.webPath;
			}
		},
		onLoad(options) {
			uni.showLoading({
				mask:true
			})
			this.navTitle = options.title
			this.barTitle = options.title;
			this.typeNum = options.barType;
			
			if(options.barType == 1009){
				//在线客服
				this.type = 'CUSTOMER_SERVICE';
			}else if(options.barType == 1003){
				//新手指引
				this.type = 'NEW_GUIDELINES';
			}else if(options.barType == 1004){
				//规则介绍
				this.type = 'RULE';
			}else if(options.barType == 1005){
				//公司简介
				this.type = 'COMPANY_INTRODUCTION';
			}else if(options.barType == 1007){
				//股市点评
				
			}else if(options.barType == 1008){
				//股市学堂
				this.type = 'STOCK_MARKET_SCHOOL';
			}
			if(this.type != ''){
				var _this = this;
				http.get('website/help/getList',{type:this.type,status : true,'pageInfo.size':1,'pageInfo.isReturnPage':false}).then((res)=>{
					_this.RichContent = res.data.data.records[0].content;
				})
			}
			
			
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
		/*  #ifdef  APP-PLUS  */
		// padding-top: 90upx;
		/*  #endif  */
		// top: var(--status-bar-height);
	}
	.newsBox{
		width: 710upx;
		margin: 0 auto; 
		margin-top: calc(var(--status-bar-height) + 90upx);
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
		font-size: 28upx;
	}
</style>
