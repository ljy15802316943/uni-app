<template>
	<view class="home">
		<scroll-view style="height: 35rem;" :scroll-y="true">
			<view class="home-top">
				<swiper class="swiper" :circular="true" @change="currentChange">
					<swiper-item v-for="(item, index) in imageSrc" :key="index"  @click="currentClick(index)">
						<image :src="item" mode=""></image>
					</swiper-item>
				</swiper>
				<view class="prompt">
					<text>{{prompt.index}}</text>
					<text style="margin: 0 0.15rem;">/</text>
					<text>{{prompt.number}}</text>
				</view>
			</view>
			
			<!-- 分类栏 -->
			<view class="classified-section">
				<view class="classified-list">
					<view class="classified-item" v-for="(item, index) in classifiedList" :key="index">
						<image :src="item.img" mode=""></image>
						<text style="margin-top: 0.5rem; font-size: 26rpx;">{{item.content}}</text>
					</view>
				</view>
				<view class="classified-img">
					<image src="/static/temp/ad1.jpg" mode=""></image>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 顶部滑块
				imageSrc: [
					"/static/temp/banner3.jpg",
					"/static/temp/banner2.jpg",
					"/static/temp/banner1.jpg"
				],
				// 滑块的提示数字
				prompt: {
					index: 1,
					number: 0
				},
				// 货物分类
				classifiedList: [
					{img: '/static/temp/c3.png', content: '环球美食'},
					{img: '/static/temp/c5.png', content: '个护美妆'},
					{img: '/static/temp/c6.png', content: '营养保健'},
					{img: '/static/temp/c7.png', content: '家居厨卫'},
					{img: '/static/temp/c8.png', content: '速食生鲜'}
				]
			}
		},
		created() {
			this.prompt.number = this.imageSrc.length;
		},
		methods: {
			currentChange (e) {
				this.prompt.index = e.detail.current + 1;
			},
			currentClick (index) {
				uni.navigateTo({
					url: '/pages/home/advertising/advertising?index=' + encodeURIComponent(JSON.stringify(index))
				});
			}
 		},
		// 监听点击导航栏按钮
		onNavigationBarButtonTap (e) {
			if (e.index == 0) {
				this.$api.msg('点击了扫描');
			} else if (e.index == 1) {
				this.$api.msg('点击了消息');
				uni.navigateTo({
					url: '/pages/home/messages/messages'
				});
			}
		},
		// 监听点击导航栏搜索框
		onNavigationBarSearchInputClicked () {
			this.$api.msg('点击了搜索框');
		}
	}
</script>

<style lang="less">
	page {
		background-color: #ededed;
	}
	.home {
		width: 100%;
		height: 100%;
		.home-top {
			background-color: rgb(203, 87, 60);
			height: 9.5rem;
			width: 750rpx;
			margin-bottom: 1rem;
			position: relative;
			.swiper {
				position: absolute;
				// top: 0;
				left: 0;
				right: 0;
				bottom: -1rem;
				margin: 0 auto;
				width: 18.5rem;
				height: 8rem;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.prompt {
				display: flex;
				position: absolute;
				left: 60upx;
				bottom: -26upx;
				width: 66upx;
				height: 28upx;
				background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);
				background-size: 100% 100%;
				flex-direction: row;
				justify-content: center;
				text {
					color: #fff;
					font-size: 18upx;
				}
			}
		}
		
		// 分类栏
		.classified-section {
			padding: 1rem;
			box-sizing: border-box;
			background-color: #FFFFFF;
			height: 10rem;
			width: 750rpx;
			display: flex;
			flex-direction: column;
			.classified-list {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				.classified-item {
					width: 3rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					text-align: center;
					image {
						width: 2.2rem;
						height: 2.2rem;
						margin: auto;
						border-radius: 50%;
					}
				}
			}
			.classified-img {
				width: 100%;
				height: 170rpx;
				image {
					width: 100%;
					height: 170rpx;
					margin-top: 0.6rem;
				}
			}
		}
	}
</style>
