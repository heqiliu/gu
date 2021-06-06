
<template>
	<view class="pull-up" @tap="pullup">
		<view class="rect-text" v-if="state === 0">{{stateText0}}</view>
		<view class="rect-text" v-if="state === 1">{{stateText1}}</view>
		<view class="rect-text" v-if="state === 2">{{stateText2}}</view>
		<view class="rect-text" v-if="state === 3">
			<view class="rect-wrap">
				<view class="rect rect1"></view>
				<view class="rect rect2"></view>
				<view class="rect rect3"></view>
				<view class="rect rect4"></view>
				<view class="rect rect5"></view>
			</view>	
		</view>
		<view class="pu-state-4">
			<view class="rect-text" v-if="state===4">没有新数据了</view> 
		</view>
	</view>
</template>
 
<script>
	export default {
		props: {
			state: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				stateText0: '点击或上拉加载更多...',
				stateText1: '↑上拉加载',
				stateText2: '↓释放加载',
				stateText4: '没有新数据了!'
			}
		},
		methods: {
			pullup () {
				this.$emit('pull-up')
			}
		}
	}
</script>
 
<style>
	.pull-up {
		width: 100%;
		margin-bottom: 20upx;
		text-align: center;
		height: 80upx;
		color: #c1c1c1;
	}
	.rect-text {
		height: 100%;
		line-height: 80upx;
	}
	.rect-wrap {
		margin: 0 auto;
		width: 100upx;
		height: 60upx;
		text-align: center;
		font-size: 8upx;
		margin-top: 8upx;
	}
	.rect-wrap .rect {
		background-color: #7ad237;
    height: 100%;
    width: 6upx;
    display: inline-block;
    -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
    animation: stretchdelay 1.2s infinite ease-in-out;
	}
	.rect-wrap .rect {
		margin: 4upx;
	}
	.rect-wrap .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }
  .rect-wrap .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }
  .rect-wrap .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
  .rect-wrap .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
	@keyframes stretchdelay {
		0%, 40%, 100% {
			transform: scaleY(0.4);
			-webkit-transform: scaleY(0.4);
		}
		20% {
			transform: scaleY(1.0);
			-webkit-transform: scaleY(1.0);
		}
	}
	@-webkit-keyframes stretchdelay {
		0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
		20% { -webkit-transform: scaleY(1.0) }
	}

