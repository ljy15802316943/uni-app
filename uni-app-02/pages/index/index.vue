<template>
	<view class="app">
		<button size="mini" class="buttonStyle" type="primary" @click="handleBtn('about')">点击跳转至about...</button>
		<button size="mini" class="buttonStyle" type="primary" @click="handleBtn('swiper')">点击跳转至swiper...</button>
		<button size="mini" class="buttonStyle" type="primary" @click="handleBtn('movableArea')">点击跳转至movable-area...</button>
		<button size="mini" class="buttonStyle" type="primary" @click="handleBtn('test')">test...</button>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			handleBtn (e) {
				if (e == 'about') {
					uni.navigateTo({ url: '../about/about'});
				} else if (e == 'swiper') {
					uni.navigateTo({ url: '../swiper/swiper'});
				} else if (e == 'movableArea') {
					uni.navigateTo({ url: '../movableArea/movableArea'});
				}else if (e == 'test') {
					uni.navigateTo({ url: '../test/test'});
				}
			}
		}
	}
</script>
<style>
	.app {
		display: flex;
		width: 100%;
		height: 1.875rem;
		padding: 0.62rem;
		text-align: center;
		white-space: inherit;
	}
	.buttonStyle {
	}
</style>