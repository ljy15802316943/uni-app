<template>
	<view class="goodsList">
		<view class="navigation">
			<view class="title" v-for="(item, index) in titleList" :key="index">
				<view class="title-box" :class="{'title-box-activate': titleBoxIndex == index}" @click.stop="titleBoxClick(index)">
					<text>{{item.content}}</text>
					<view v-if="item.content == '价格'" class="price">
						<view class="yticon icon-shang active" :class="{'yticonIconShangActive': (yticonIconShangIndex === 1 && index === 2)}" @click.stop="yticonIconShang(1)"></view>
						<view style="transform: scaleY(-1);" class="yticon icon-shang xia" :class="{'yticonIconShangActive': (yticonIconShangIndex === 2 && index === 2)}" @click.stop="yticonIconShang(2)"></view>
					</view>
				</view>
			</view>
			<view class="title-icon yticon icon-fenlei1">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titleList: [
					{content: '综合排序'},
					{content: '销量优先'},
					{content: '价格'},
				],
				titleBoxIndex: 0,
				yticonIconShangIndex: 0
			}
		},
		methods: {
			titleBoxClick (index) {
				this.titleBoxIndex = index;
				if (this.titleBoxIndex == 2) {
					this.yticonIconShangIndex = 1;
				} else {
					this.yticonIconShangIndex = 0;
				}
			},
			yticonIconShang(val) {
				if (this.titleBoxIndex == 2) {
					this.yticonIconShangIndex = val;
				}
			}
		}
	}
</script>

<style lang="less">
	page {
		background-color: #f8f8f8;
	}
	.goodsList {
		width: 750rpx;
		height: 100%;
		position:  relative;
		.navigation {
			width: 750rpx;
			height: 88rpx;
			background-color: #FFFFFF;
			display: flex;
			position: fixed;
			top: calc(100% - 88rpx - constant(safe-area-inset-top));
			left: 0;
			z-index: 99;
			.title {
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 32rpx;
				color: #303133;
				.title-box {
					height: 100%;
					width: 4rem;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: row;
					border-bottom: 1px solid #FFFFFF;
					.yticon {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 32rpx;
						height: 14rpx;
						margin-left: 4rpx;
						font-size: 28rpx;
						color: #888;
					}
					.yticonIconShangActive {
						color: #fa436a;
					}
				}
				.title-box-activate {
					border-bottom: 1px solid #fa436a;
					color: #fa436a;
				}
				
			}
			.title-icon {
				width: 80rpx;
				height: 100%;
				font-size: 48rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				&::after {
					content: '';
					position: absolute;
					top: 0.66rem;
					background-color: #ededed;
					width: 1rpx;
					height: 38rpx;
					right: 80rpx;
				}
			}
		}
	}
</style>
