<template>
	<view class="home">
		<scroll-view style="display: inline; height: 33rem" :scroll-y="true">
			<view class="home-top">
				<swiper class="swiper" :circular="true" @change="currentChange">
					<swiper-item style="border-radius: 12rpx;" v-for="(item, index) in imageSrc" :key="index"  @click="currentClick(index)">
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
		
			<!-- 限时秒杀 -->
			<view class="Time-limit">
				<view class="Time-limit-top">
					<image style="width: 140rpx; height: 30rpx;" src="/static/temp/secskill-img.jpg" mode=""></image>
					<text style="font-size: 28rpx; color: #909399; margin: -4rpx 20rpx;">8点场</text>
					<text class="number-text">07</text>
					<text class="number-text">13</text>
					<text class="number-text">55</text>
					<text class="yticon icon-you yticon-content"></text>
				</view>
				<view class="Time-limit-bottom">
					<scroll-view class="scroll-view_H" :scroll-x="true">
						<view class="Time-limit-item" v-for="(item, index) in limitList" :key="index" @click="TimeLimitClick(item.content)">
							<image :src="item.img" mode=""></image>
							<view class="content">
								<text>{{item.content}}</text>
							</view>
							<view class="money">
								<text>{{item.money}}</text>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		
			<!-- 精品团购 -->
			<view class="deals">
				<view class="deals-top">
					<image style="width: 80rpx; height: 80rpx; margin-right: 20rpx;" src="/static/temp/h1.png" mode=""></image>
					<view class="deals-top-content">
						<text style="font-size: 34rpx;">精品团购</text>
						<text style="font-size: 24rpx; color: #909399;">Guess You Like It</text>
					</view>
					<view class="yticon icon-you deals-top-yticon">
					</view>
				</view>
				<view class="deals-swiper">
					<swiper style="width: 100%; height: 15rem;">
						<swiper-item class="swiper-item" v-for="(item, index) in dealsList" :key="index">
							<view class="swiper-item-left">
								<image style="width: 100%; height: 460rpx;" :src="item.img" mode=""></image>
							</view>
							<view class="swiper-item-right">
								<text style="font-size: 30rpx; color: #303133;">{{item.title2}}</text>
							</view>
						</swiper-item>
					</swiper>
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
				],
				// 限时秒杀。
				limitList: [
					{
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg', 
						content: '古黛妃 短袖t恤女夏装2019新款韩版宽松', 
						money: '￥179'
					},{
						img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg', 
						content: '潘歌针织连衣裙', 
						money: '￥78'
					},{
						img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg', 
						content: '巧谷2019春夏季新品新款女装', 
						money: '￥108.8'
					},{
						img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=756705744,3505936868&fm=11&gp=0.jpg', 
						content: '私萱连衣裙', 
						money: '￥265'
					},{
						img: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg', 
						content: '娇诗茹 ulzzang原宿风学生潮韩版春夏短', 
						money: '￥422'
					},{
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg', 
						content: '古黛妃 短袖t恤女夏装2019新款韩版宽松', 
						money: '￥179'
					}
				],
				// 精品团购
				dealsList: [
					{
						title: '古黛妃 短袖t恤女夏装2019新款韩版宽松',
						title2: '古黛妃 短袖t恤女夏装2019新款韩版宽松',
						moneyLeft1: '￥179',
						moneyLeft2: '￥188',
						moneyRight1: '￥179',
						moneyRight2: '￥188',
						group: '6人成团',
						group2: '10人成团',
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg',
						img2: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg'
					},{
						title: '巧谷2019春夏季新品新款女装',
						title2: '私萱连衣裙',
						moneyLeft1: '￥108.8',
						moneyLeft2: '￥188',
						moneyRight1: '￥256',
						moneyRight2: '￥188',
						group: '6人成团',
						group2: '10人成团',
						img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg',
						img2: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=756705744,3505936868&fm=11&gp=0.jpg'
					},{
						title: '娇诗茹 ulzzang原宿风学生潮韩版春夏短',
						title2: '古黛妃 短袖t恤女夏装2019新款韩版宽松',
						moneyLeft1: '￥422',
						moneyLeft2: '￥188',
						moneyRight1: '￥179',
						moneyRight2: '￥188',
						group: '6人成团',
						group2: '10人成团',
						img: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
						img2: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg'
					}
				]
			}
		},
		created() {
			this.prompt.number = this.imageSrc.length;
		},
		methods: {
			// swiper提示数字
			currentChange (e) {
				this.prompt.index = e.detail.current + 1;
			},
			// 点击swiper
			currentClick (index) {
				uni.navigateTo({
					url: '/pages/home/advertising/advertising?index=' + encodeURIComponent(JSON.stringify(index))
				});
			},
			// 点击了限时秒杀。 
			TimeLimitClick (content) {
				uni.navigateTo({
					url: 'TimeLimit/TimeLimit?content=' + encodeURIComponent(JSON.stringify(content))
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
		
		// 限时秒杀
		.Time-limit {
			padding: 1rem;
			box-sizing: border-box;
			width: 750rpx;
			height: 10rem;
			background-color: #FFFFFF;
			margin-top: 0.5rem;
			.Time-limit-top {
				position: relative;
				width: 100%;
				height: 1.2rem;
				display: flex;
				flex-direction: row;
				.number-text {
					width: 40rpx;
					height: 36rpx;
					margin: 0 4rpx;
					font-size: 26rpx;
					border-radius: 4rpx;
					color: #fff;
					background-color: #000000;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.yticon-content {
					position: absolute;
					right: 0;
					top: 0rpx;
				}
			}
			.Time-limit-bottom {
				display: flex;
				flex-direction: row;
				margin-top: 0.5rem;
				.scroll-view_H {
					width: 100%;
					height: 100%;
					max-height: inherit;
					white-space: nowrap;
					.Time-limit-item {
						display: inline-block;
						flex-direction: column;
						width:150rpx;
						height: 150rpx;
						margin: 0 10rpx;
						image {
							width: 100%;
							height: 150rpx;
						}
						.content {
							overflow: hidden;
							text-overflow:ellipsis;    
							white-space: nowrap;
							text {
								width: 150rpx;
								margin-right: 10px;
								font-size: 26rpx;
								color: #303133;
							}
						}
						.money {
							overflow: hidden;
							text-overflow:ellipsis;    
							white-space: nowrap;
							text {
								color: #fa436a;
								font-size: 26rpx;
							}
						}
					}
				}
			}
		}
	
		// 精品团购
		.deals {
			width: 750rpx;
			height: auto;
			background-color: #FFFFFF;
			margin-top: 0.5rem;
			padding: 1rem;
			box-sizing: border-box;
			.deals-top {
				display: flex;
				flex-direction: row;
				width: 100%;
				height: 2rem;
				position: relative;
				.deals-top-content {
					display: flex;
					flex-direction: column;
				}
				.deals-top-yticon {
					position: absolute;
					right: 0;
					line-height: 2rem;
				}
			}
			.deals-swiper {
				width: 100%;
				height: 100%;
				margin-top: 1rem;
				.swiper-item {
					display:  flex;
					width: 100%;
					height: 10rem;
					.swiper-item-left {
						flex: 1.2;
						margin-right: 24rpx;
					}
					.swiper-item-right {
						flex: 0.8;
						overflow: hidden;    
						text-overflow:ellipsis;    
						white-space: nowrap;
					}
				}
			}
		}
	}
</style>
