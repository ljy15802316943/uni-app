<template>
	<view>
		<view class="app-button">
			<button type="primary" class="button" @tap="handleLogin">µÇÂ¼</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			handleLogin () {
				uni.navigateTo({
					url: '../login/login'
				})
			}
		}
	}
</script>

<style lang="less">
	page {
		background-color: #efeff4;
	}
</style>
