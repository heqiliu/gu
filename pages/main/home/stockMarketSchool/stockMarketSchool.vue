<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
			<view class="status-bar"></view>
			<cmd-nav-bar back background-color="linear-gradient(to right, #EF9435, #E95E28)" :title="navTitle" font-color="#fff"></cmd-nav-bar>
		<!-- #endif -->
		<view class="newlist">
			<view class="lis" v-for="el in dataList" @click="queryDetails(el)">
				<view class="lisName">
					{{el.title}}
				</view>
				<view class="lisDetails">{{el.updateTime}}</view>
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
				navTitle : '',
				dataList : []
			};
		},
		onLoad(options) {
			uni.showLoading({
				mask:true
			})
			this.navTitle = options.title == '1007' ? '股市点评' : '股市学堂';
			let _this = this;
			http.get('home/stockSchool',{type:options.title}).then((res)=>{
				_this.dataList = res.data.data;
			})
		},
		methods:{
			queryDetails(el){
				uni.navigateTo({
					url : '/pages/main/publicView/news/news?title=' + el.title + '&type=DPXT&id=' + el.id
				})
			}
		}
	}
</script>
zz
<style lang="scss" scoped>
	.content{
		/*距离顶部范围应该在88-95范围内*/
		/*  #ifdef  APP-PLUS  */
		padding-top: 90upx;
		/*  #endif  */
		top: var(--status-bar-height);
		padding-bottom: 95upx;
	}
	.newlist{
		width: 100%;
		.lis{
			width: 100%;
			padding: 20upx 40upx;
			box-sizing: border-box;
			background: #fff;
			border-top: 2upx solid #f1f1f1;
			border-bottom: 2upx solid #f1f1f1;
			.lisName{
				font-size: 28upx;
				font-weight: 600;
				color: #242424;
			}
			.lisDetails{
				margin-top: 10upx;
				font-size: 22upx;
				color: #ababab;
			}
		}
	}
</style>
