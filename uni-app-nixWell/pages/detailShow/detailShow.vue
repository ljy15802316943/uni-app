<template>
	<view class="detail-show">
		<scroll-view :scroll-x="true">	
			<swiper class="swiper-box" :indicator-dots="true">
				<swiper-item class="swiper-item" v-for="(item, index) in swiperList" :key="index">
					<image :src="item.image" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
			
			<view class="content-box1">
				<view class="title">
					<text>恒源祥2019春季长袖白色t恤 新款春装</text>
				</view>
				<view class="money">
					<text class="text1">￥341.6</text>
					<text class="text2">¥488</text>
					<text class="text3">7折</text>
				</view>
				<view class="content">
					<text class="text3">销量: 108</text>
					<text class="text3">库存: 4690</text>
					<text class="text3">浏览量: 768</text>
				</view>
			</view>
			<view class="share-immediately" @click="handleShare">
				<view class="text-icon">
					<text style="font-size: 28rpx;color: #FFFFFF;" class="yticon icon-xingxing text-icon1"></text>
					<text style="font-size: 24rpx;color: red;">返</text>
				</view>
				<text style="font-size: 28rpx; color: #606266;margin: 0 10rpx;">该商品分享可领49减10红包</text>
				<text class="yticon icon-bangzhu1"></text>
				<text style="font-size: 28rpx; color: #fa436a; position: absolute; right: 1.8rem;">立即分享</text>
				<text style="font-size: 28rpx;color: #fa436a; position: absolute; right: 1rem; line-height: 2rem;" class="yticon icon-you"></text>
			</view>
		</scroll-view>
		<Share ref="refShare"></Share>
	</view>
</template>

<script>
	import Share from '../../components/share.vue'; //分享
	export default {
		components: {
			Share
		},
		data() {
			return {
				swiperList: [
					{image: 'https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg'},
					{image: 'https://gd3.alicdn.com/imgextra/i3/TB1RPFPPFXXXXcNXpXXXXXXXXXX_!!0-item_pic.jpg_400x400.jpg'},
					{image: 'https://gd2.alicdn.com/imgextra/i2/38832490/O1CN01IYq7gu1UGShvbEFnd_!!38832490.jpg_400x400.jpg'}
				],
			}
		},
		methods: {
			// 点击显示分享
			handleShare () {
				this.$refs.refShare.handleShowShare(); 
			},
		}
	}
</script>

<style lang="less">
	page {
		width: 750rpx;
		height: 100%;
		background-color: #f8f8f8;
	}
	.detail-show {
		.swiper-box {
			width: 100%;
			height: 722rpx;;
			.swiper-item {
				width: 100%;
				height: 100%;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	
		.content-box1 {
			width: 100%;
			height: auto;
			padding: 1rem;
			box-sizing: border-box;
			background-color: #FFFFFF;
			.title {
				font-size: 32rpx;
				color: #303133;
				height: 50rpx;
				line-height: 50rpx;
				display: block;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.money {
				display: flex;
				flex-direction: row;
				align-items: center;
				margin: 10rpx 0rpx;
				.text2 {
					margin: 0 10rpx;
				}
				.text3 {
					align-items: center;
					padding: 2px 5px;
					background: #fa436a;
					font-size: 12px;
					color: #fff;
					border-radius: 3px;
					box-sizing: border-box;
				}
			}
			.content {
				width: 90%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				height: 1rem;
				align-items: flex-end;
			}
		}
		.share-immediately {
			display: flex;
			flex-direction: row;
			align-items: center;
			height: 2rem;
			width: 750rpx;
			padding: 0 1rem;
			box-sizing: border-box;
			background-color: #fbebf6;
			position: relative;
			.text-icon {
				width: 2rem;
				height: auto;
				border: 1px solid #fa436a;
				border-radius: 5rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
				overflow: hidden;
				z-index: 100;
				&::before {
					position: absolute;
					left: 0.9rem;
					z-index: 88;
					content: '';
					width: 1rem;
					height: 1rem;
					background-color: #fa436a;
					border-radius: 50%;
				}
				.text-icon1 {
					z-index: 99;
					margin-left: -0.2rem;
				}
			}
		}
	}
</style>
