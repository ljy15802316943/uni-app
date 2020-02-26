<template>
	<view class="news-detail">
		<view class="img-text">
			<image style="width: 100%; height: 10rem;" :src="date.cover" mode=""></image>
			<text>{{date.title}}</text>
		</view>
		<view class="content">
			<view class="content-item">
				<text>{{date.author_name}}</text>
				<text class="content-time">发表于 {{date.published_at}}</text>
			</view>
			<view class="" style="margin-bottom: 10px;" v-html="date.content"></view>
		</view>
	</view>
</template>

<script>
	import util from '../../common/util.js';
	export default {
		data() {
			return {
				date: {},
				content: {
					name: '财报看公司',
					time: '发表于 12 分钟前'
				}
			}
		},
		onLoad(e) {
			console.log(1);
			console.log(e, 'e');
			if (!e) {
				uni.navigateBack({
				    delta: 2
				});
				return false;
			}
			let data = JSON.parse(decodeURIComponent(e.obj));
			this.date = data.data;
			console.log(this.date, '123');
			this.date.published_at = util.friendlyDate(new Date(this.date.published_at.replace(/\-/g, '/')).getTime());
			uni.setNavigationBarTitle({
			    title: this.date.title
			});
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	.news-detail {
		.img-text {
			width: 100%;
			height: 10rem;
			position: relative;
			text {
				position: absolute;
				top: 6rem;
				bottom: 0;
				left: 0;
				right: 0;
				margin: auto;
				word-wrap: break-word;
				width: 650rpx;
				height: 2.2rem;
				font-size: 16px;
				font-weight: 400;
				line-height: 21px;
				lines: 2;
				color: #ffffff;
				overflow: hidden;
			}
		}
		.content {
			padding: 0 0.6rem;
			box-sizing: border-box;
			font-size: 14px;
			.content-item {
				margin: 0.5rem 0;
				.content-time {
					margin: 0 10px;
				}
				text {
					color: gray;
					font-size: 15px;
				}
				
			}
		}
	}
</style>
