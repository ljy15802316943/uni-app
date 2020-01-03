<template>
	<view class="app">
		<view class="swiper-title">
			swiper
		</view>
		<view class="">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :circular="true" :interval="interval" :duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="swiper-list">
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">指示点</view>
				<switch :checked="indicatorDots" @change="changeIndicatorDots($event)" />
			</view>
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">自动播放</view>
				<switch :checked="autoplay" @change="changeAutoplay" />
			</view>
		</view>
		<view class="uni-padding-wrap">
			<view class="uni-common-mt">
				<text>幻灯片切换时长(ms)</text>
				<text class="info">{{duration}}</text>
			</view>
			<slider @change="durationChange" :value="duration" min="500" max="2000" />
			<view class="uni-common-mt">
				<text>自动播放间隔时长(ms)</text>
				<text class="info">{{interval}}</text>
			</view>
			<slider @change="intervalChange" :value="interval" min="2000" max="10000" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true, //指示点
				autoplay: true, //自动播放
				duration: 500, //幻灯片时长
				interval: 5000, //自动播放时长
			}
		},
		methods: {
			//指示点
			changeIndicatorDots (e) {
				this.indicatorDots = e.detail.value;
			},
			//自动播放
			changeAutoplay (e) {
				this.autoplay = e.detail.value;
			},
			//幻灯片时长
			durationChange (e) {
				this.duration = e.detail.value;
			},
			//自动播放时长
			intervalChange (e) {
				this.interval = e.detail.value;
			},
		}
	}
</script>

<style lang="less">
	.app {
		padding: 0 20rpx;
		.swiper-title {
			height: 3.75rem;
			width: 100%;
			display: flex;
			justify-content: center;
			align-content: center;
			color: #B2B2B2;
			font-size: 42rpx;
			&:before {
				content: '';
				position: absolute;
				left: 6.9rem;top: 2.5rem;right: 0;bottom: 0;
				width: 6.5rem;
				height: 1rpx;
				background: #B2B2B2;
			}
		}
	}
	.swiper {
		.swiper-item {
			height: 15rem;
			width: 100%;
			text-align: center;
			line-height: 8rem;
			font-size: 1rem;
			font-weight: 600;
		}
	}
</style>
