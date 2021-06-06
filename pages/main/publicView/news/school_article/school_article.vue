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
			
			<scroll-view class="fwb">
				<rich-text :nodes="RichContent"></rich-text>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
	import http from '@/http/interface.js'
	export default {
	components: {cmdNavBar},
	
	 onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
	        console.log(option.id); //打印出上个页面传递的参数。
			http.get('schoolArticle/getById?id=' + option.id ).then((res) => {
				// console.log(res.data);
				// 接口返回的当前页数据列表 (数组)
				this.RichContent = res.data.data.content;
				this.navTitle = res.data.data.titleBar
			})
			
			
	    },
	
		data() {
		return {
			barTitle : '股市学堂',
			navTitle : '股市学堂',
			viewType : '',
			RichContent : '',
			typeNum : 1009,
			type : '',
		};
	},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.status-bar{
		margin-top:-36upx;
	}
	.newsBox{
		padding:10upx 4%;
		.newsHead{
			font-weight: 600;
			text-align:center;
			font-size: 32upx;
			color: #262626;
		}
		.fwb{
			margin-top:10upx;
		}
	}
	

</style>
