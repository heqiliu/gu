<script>
	
	import http from '@/http/interface.js'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			//检查app版本
			
			//校验登录状态.
			let _this = this;
			uni.getStorage({
				key : "userLoginInfo",
				success: function (res) {
					_this.$store.commit('userIsLogin',res.data);
					uni.redirectTo({
						url : '/pages/main/main',
					})
				},
				fail: function(){
					console.error('登录失效');
					uni.reLaunch({
						// url: '/pages/main/home/home'
						url: ''
					});
				}
			});
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide')
		},
		mounted() {
			
		}
	}
</script>

<style>
	/*每个页面公共css */
	page{
		height: 100%;
	}
	/*沉浸状态栏变化*/
	.status-bar {
	  box-sizing: border-box;
	  display: block;
	  width: 100%;
	  margin-bottom: -3upx;
	  height: var(--status-bar-height);
	  line-height: var(--status-bar-height);
	  /* background: transparent; */
	  /* background: #333; */
	}
</style>
