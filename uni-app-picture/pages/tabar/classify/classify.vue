<template>
	<view class="classify">
		<view class="card">
			<view class="card-list">
				<view class="card-box" v-for="(item, index) in image" :key="index" @click="handleImage(item.text)">
					<view class="content">
						<image :src="item.src" mode=""></image>
					</view>
					<text>{{item.text}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				image: [{
					src: '../../../static/image/app-icon.png',
					text: '动物'
				},{
					src: '../../../static/image/app-icon.png',
					text: '人物'
				},{
					src: '../../../static/image/app-icon.png',
					text: '美女'
				},{
					src: '../../../static/image/app-icon.png',
					text: '汽车'
				},{
					src: '../../../static/image/app-icon.png',
					text: '旅游'
				}]
			}
		},
		methods: {
			handleImage (val) {
				uni.showModal({
					icon: 'none',
					title: '你点击了' + val,
					showCancel: false,
				})
			}
		}
	}
</script>

<style lang="less">
	page {
		background-color: #EFEFEF;
	}
	.card {
		margin: 0;
		padding: 30rpx;
		box-sizing: border-box;
		background-color: #EFEFEF;
		width: 100%;
		min-height: 90%;
		.card-list {
			display: flex;
			flex-wrap: wrap;
			background-color: #FFFFFF;
			width: 100%;
			min-height: 90%;
			flex-direction: row;
			justify-content: flex-start;
			align-content: flex-start;
			.card-box {
				display: flex;
				flex-direction: column;
				text-align: center;
				height: 5.4rem;
				width: 3.5rem;
				margin: 20rpx;
				.content {
					width: 3.75rem;
					height: 3.75rem;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
					image {
						max-width: 100%;
						max-height: 100%;
						border-radius: 50%;
					}
				}
			}
		}
	}
</style>
