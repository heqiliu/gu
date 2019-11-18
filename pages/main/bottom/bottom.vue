<template>
	<view>
		<view class="bottomNav">
			<ul>
				<li @click="jump('/pages/main/home/home',1)" :class="pageNum == 1 ? 'isTask' : ''">
					<image v-if="pageNum != 1" :src="imgArray.img1" mode=""></image>
					<image v-if="pageNum == 1" :src="imgArray.img2" mode=""></image>
					<span>首页</span>
				</li>
				<li @click="jump('/pages/main/optionalStock/optionalStock',2)" :class="pageNum == 2 ? 'isTask' : ''">
					<image v-if="pageNum != 2" :src="imgArray.img3" mode=""></image>
					<image v-if="pageNum == 2" :src="imgArray.img4" mode=""></image>
					<span>自选股票</span>
				</li>
				<li @click="jump('/pages/main/transaction/transaction',3)" :class="pageNum == 3 ? 'isTask' : ''">
					<image v-if="pageNum != 3" :src="imgArray.img5" mode=""></image>
					<image v-if="pageNum == 3" :src="imgArray.img6" mode=""></image>
					<span>交易</span>
				</li>
				<li @click="jump('/pages/main/myAccount/myAccount',4)" :class="pageNum == 4 ? 'isTask' : ''">
					<image v-if="pageNum != 4" :src="imgArray.img7" mode=""></image>
					<image v-if="pageNum == 4" :src="imgArray.img8" mode=""></image>
					<span>我的账户</span>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		props:['pageNum'],
		data() {
			return {
				imgArray : {
					img1 : require('../../../static/icon/m_home.png'),
					img2 : require('../../../static/icon/m_home_h.png'),
					img3 : require('../../../static/icon/m-zx.png'),
					img4 : require('../../../static/icon/m-zx-h.png'),
					img5 : require('../../../static/icon/m_stock.png'),
					img6 : require('../../../static/icon/m_stock_h.png'),
					img7 : require('../../../static/icon/m_account.png'),
					img8 : require('../../../static/icon/m_account_h.png'),
				}
			}
		},
		computed: {
		
		},
		onLoad() {
		},
		methods: {
			jump(url,take){
				if(this.pageNum == take){
					return;
				}
				uni.navigateTo({
					url : url,
					animationType : 'none'
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.bottomNav{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 99upx;
		background: #262626;
		border-top: 1upx solid #0a0a0a;
		ul{
			margin: 0;
			padding: 0;
			width: 100%;
			height: 100%;
			li{
				float: left;
				list-style: none;
				width: 25%;
				height: 100%;
				image{
					width: 48upx;
					height: 48upx;
					display: block;
					margin: 0 auto;
					margin-top: 10upx;
				}
				.is{
					display: none;
				}
				.nois{
					display: block;
				}
				span{
					display: block;
					width: 100%;
					text-align: center;
					font-size: 24upx;
					color: #8f8f8f;
					margin-top: 5upx;
				}
			}
			.isTask{
				.is{
					display: block;
				}
				.nois{
					display: none;
				}
				span{
					color: #ff7b2e;
				}
			}
		}
	}
</style>
