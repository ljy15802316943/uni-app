<template>
	<view class="app">
		<view class="content">
			<text class="text1">您好 游客。</text>
		</view>
		<view class="content">
			<text class="text2">这是 uni-app 带登录模板的示例App首页。在 “我的” 中点击 “登录” 可以 “登录您的账户”</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			
		},
		methods: {

		}
	}
</script>

<style lang="less">
	.app {
		padding: 0 35rpx;
		box-sizing: border-box;
		.content {
			margin-top: 50rpx;
			.text1 {
				color: #8f8f94;
				margin-top: 50rpx;
				font-size: 40rpx;
			}
			.text2 {
				font-size: 34rpx;
				color: #8f8f94;
			}
		}
	}
</style>
