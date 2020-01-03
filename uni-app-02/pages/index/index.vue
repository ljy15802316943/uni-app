<template>
	<view class="app">
		<button size="mini" class="buttonStyle" type="primary" @click="handleBtn('about')">about...</button>
		<button size="mini" class="buttonStyle" type="primary" @click="handleBtn('swiper')">swiper...</button>
		<button size="mini" class="buttonStyle" type="primary" @click="handleBtn('movableArea')">movable-area...</button>
		<button size="mini" class="buttonStyle" type="primary" @click="handleBtn('test')">test...</button>
		<button size="mini" class="buttonStyle" type="primary" @click="handleBtn('form')">form...</button>
		<button size="mini" class="buttonStyle" type="primary" @click="handleBtn('input')">input...</button>
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
				} else if (e == 'test') {
					uni.navigateTo({ url: '../test/test'});
				} else if (e == 'form') {
					uni.navigateTo({ url: '../form/form'});
				} else if (e == 'input') {
					uni.navigateTo({ url: '../input/input'});
				}
			}
		}
	}
</script>
<style lang="less">
	.app {
		display: flex;
		flex-wrap: wrap;
		height: 1.875rem;
		padding: 0.62rem;
		text-align: center;
		button {
			width: auto;
			margin: 0.2rem;
		}
	}
</style>