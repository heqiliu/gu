<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar back background-color="#d34a43" title="千股千评" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
	
	<web-view class="webview" :src="imp"></web-view>
			
	</view>
</template>

<script>
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
	import http from '@/http/interface.js'
	
	
	export default {
		data() {
			return {
				imp:'/static/stock_adiss.html'
			}
		},
		methods: {
			
		},
		onReady() {
        // #ifdef APP-PLUS
			var currentWebview = this.$scope.$getAppWebview() //此对象相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效，非v3编译模式使用this.$mp.page.$getAppWebview()
			setTimeout(function() {
				wv = currentWebview.children()[0]
				wv.setStyle({top:150,height:300})
			}, 1000); //如果是页面初始化调用时，需要延时一下
		// #endif
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
		height: 100%;
		background: #fefaeb;
	}
</style>
