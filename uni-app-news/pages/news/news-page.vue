<template>
	<view>
		<scroll-view style="height: 30rem;" :scroll-y="true" @scrolltolower="handleChufa">
			<view class="news-list" v-for="(item, index) in newsList" :key="index" @click="itemClick(item.post_id)">
				<view class="news-box">
					<image :src="item.cover"></image>
					<text>{{item.title}}</text>
				</view>
				<view class="mews-bottom">
					<view class="mews-bottom-content">
						<text class="title">{{item.author_name}}</text>
						<text style="margin: 0 10rpx;" class="comments">{{item.comments_count}}评论数</text>
						<text class="time">{{item.published_at}}</text>
					</view>
					<view class="news-delete" @click.stop="handleDelete(item.post_id)">x</view>
				</view>
				<view class="mews-bottom-line"></view>
			</view>
			<view class="" style="text-align: center;">
				<text style="font-size: 12px; color: #999999;">{{getContent.text}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import util from '../../common/util.js';
	export default {
		props: {
			news: {
				type: [Array]
			},
			columnId: {
				type: [Number, String]
			}
		},
		components: {
		},
		data() {
			return {
				newsList: [],
				requestParams: {
					columnId: 0,
					minId: 0,
					pageSize: 10,
					column: 'id,post_id,title,author_name,cover,published_at,comments_count'
				},
				getContent: {
					text: '加载中...',
					state: false
				},
				detailState: false
			}
		},
		created () {
			this.requestParams.columnId = this.columnId;
			this.getNews();
		},
		methods: {
			getNews () {
				let _this = this;
				uni.request({
					// url: this.$host + 'api/news',
					url: 'https://unidemo.dcloud.net.cn/api/news',
					data: _this.requestParams,
					success (res) {
						if (res.statusCode == 200) {
							let list = res.data; 
							list.map( (item) => {
								item.published_at = util.friendlyDate(new Date(item.published_at.replace(/\-/g, '/')).getTime());
								return _this.newsList.push(item);
							});
							_this.getContent.state = true;
						} else {
							_this.getContent.state = false;
						}
					}
				})
			},
			handleChufa (e) {
				this.getNews();
				console.log(e, '触发');
			},
			itemClick (val) {
				this.detailState = true;
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/api/news' + '/36kr/' + val,
					success(res) {
						var obj = res;
						uni.navigateTo({
						    url: '/pages/detail/detail?obj=' + encodeURIComponent(JSON.stringify(obj))
						});
					}
				})
			},
			handleDelete (id) {
				console.log(1);
				let _this = this;
				uni.showModal({
				    title: '不感兴趣?',
					content: ' ',
				    success: function (res) {
				        if (res.confirm) {
							_this.newsList = _this.newsList.filter( (item) => {return item.post_id != id});
				            console.log('用户点击确定');
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			}
		}
	}
</script>

<style lang="less">
	uni-modal .uni-modal__hd {
	    padding: 0em 0em 0em;
	    box-sizing: border-box;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    height: 3.5rem;
	    color: #999;
	}
	
	// 新闻列表
	.news-list {
		width: 750rpx;
		padding: 0.8rem;
		box-sizing: border-box;
		.news-box {
			display: flex;
			flex-direction: row;
			image {
				width: 240rpx;
				height: 160rpx;
			}
			text {
				margin-left: 0.5rem;
				width: 500rpx;
				height: 2.2rem;
				color: #555555;
				font-size: 14px;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}
		.mews-bottom {
			margin-top: 0.5rem;
			position: relative;
			display: flex;
			justify-content: space-between;
			.mews-bottom-content {
				display: flex;
				flex-direction: row;
				text {
					color: #999999;
					font-size: 12px;
				}
			}
			.news-delete {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 20px;
				height: 14px;
				border-radius: 4px;
				font-size: 12px;
				color: #aaaaaa;
				border: 0.5px solid #aaaaaa;
			}
		}
		.mews-bottom-line {
			width: 100%;
			height: 1px;
			margin-top: 0.5rem;
			background-color: #ededed;
		}
	}
</style>
