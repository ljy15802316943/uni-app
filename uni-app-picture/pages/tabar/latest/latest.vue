<template>
	<view class="latest">
		<view>
			<view class="card" @click="previewImage">
				<image src="../../../static/image/图片1.jpg" mode="aspectFill"></image>
				<text class="image-p">{{3}}P</text>
				<view class="image-botton-content">
					<text>建筑</text>
					<view @click.stop="share" class="card-share-view"></view>
				</view>
			</view>
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
			previewImage () {
				uni.previewImage({
					urls: [
						"http://localhost:8081/static/image/app-icon.png",
						"http://localhost:8081/static/image/image2.jpg",
						"http://localhost:8081/static/image/image3.jpg"
					],
					indicator: 'default',
					loop: true,
					success(res) {
						console.log(res, 'text');
					}
				})
			},
			share () {
				uni.showModal({
					icon: 'none',
					showCancel: false,
					title: '当前环境无分享渠道！'
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
		position: relative;
		width: 710rpx;
		margin: 20rpx 20rpx 20rpx 20rpx;
		border-radius: 10rpx;
		overflow: hidden;
		flex-direction: column;
		background-color: #FFFFFF;
		image {
			width: 710rpx;
			height: 1065rpx;
		}
		.image-p {
			position: absolute;
			top: 10px;
			right: 10px;
			background-color: #FF80AB;
			display: inline-block;
			padding: 3px 6px;
			color: #FFFFFF;
			font-size: 12px;
			border-radius: 15px;
		}
		.image-botton-content {
			width: 710rpx;
			height: 3.25rem;
			background-color: #FFFFFF;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 30rpx;
			box-sizing: border-box;
		}
	}
	
</style>
