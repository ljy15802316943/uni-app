<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="less">
	/*每个页面公共css */
	@import './common/css/uni.css';
	.app-button {
		padding: 80rpx 50rpx;
		box-sizing: border-box;
		button.button {
			background-color: #0faeff;
		}
	}
	.button-login {
		button.button {
			background-color: #0faeff;
		}
	}
</style>
