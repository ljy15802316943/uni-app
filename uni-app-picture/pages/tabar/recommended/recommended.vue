<template>
	<view class="recommended">
		<view class="card" @click="toPreviewImage">
			<view class="card-item" v-for="(item, index) in image" :key="index">
				<image :src="item.src" mode="scaleToFill"></image>
				<text class="image-p">{{item.num}}</text>
				<view class="card-bottm">
					<text class="text">{{item.text}}</text>
					<view class="card-share-view" @click.stop="share"></view>
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
					src: '../../../static/image/image1.jpg',
					num: '3P',
					text: '运动'
				},{
					src: '../../../static/image/image2.jpg',
					num: '3P',
					text: '美女'
				},{
					src: '../../../static/image/image3.jpg',
					num: '3P',
					text: '汽车'
				},{
					src: '../../../static/image/image3.jpg',
					num: '3P',
					text: '汽车'
				},]
			}
		},
		methods: {
			toPreviewImage () {
				uni.previewImage({
					urls: [
						"http://localhost:8081/static/image/image1.jpg",
						"http://localhost:8081/static/image/image2.jpg",
						"http://localhost:8081/static/image/image3.jpg"
					],
					indicator: 'default',
					loop: true
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

<style lang="less" scoped>
	page {
		background-color:  #EFEFEF;
	}
	.recommended {
		.card {
			background-color:  #EFEFEF;
			width: 100%;
			height: auto;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			margin: 0;
			padding: 0 20rpx;
			box-sizing: border-box;
			margin-bottom: 20rpx;
			.card-item {
				width: 48%;
				height: 700rpx;
				margin-top: 20rpx;
				border-radius: 15rpx;
				position: relative;
				display: flex;
				flex-direction: column;
				image {
					width: 100%;
					height: 610rpx;
					border-top-left-radius:15rpx;
					border-top-right-radius:15rpx;
				}
				.image-p {
					position: absolute;
					    top: 5px;
					    right: 5px;
					    color: #FFFFFF;
					    background-color: #FF80AB;
					    padding: 2px 6px;
					    font-size: 8px;
					    box-sizing: border-box;
					    border-radius: 8px;
				}
				.card-bottm {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 15rpx;
					box-sizing: border-box;
					background-color: #FFFFFF;
					border-bottom-left-radius:15rpx;
					border-bottom-right-radius:15rpx;
					.text {
						font-size: 14rpx;
					}
					.card-share-view {
						justify-content: center;
						align-items: center;
						padding: 14upx 0;
						color: #FF80AB;
						margin: 20upx 20upx 20upx;
						font-size: 14upx;
						font-family: texticons;
					}
					.card-share-view:before {
						content: '\e62d';
					}
				}
			}
		}
	}
</style>
