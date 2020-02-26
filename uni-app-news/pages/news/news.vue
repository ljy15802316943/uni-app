<template>
	<view class="news">
		<view class="tab">
			<scroll-view class="tab-scroll-view" :scroll-x="true">
				<view class="tab-item" :class="{'tab-item-activate': tabIndex == index}" v-for="(item, index) in tabList" :key="index" @click="tabItemClick(index,item.columnId)" >
					{{item.name}}
				</view>
			</scroll-view>
		</view>
		<!-- 新闻列表 -->
		<swiper style="height: 30rem;" :current="tabIndex" @change="currentChange">
			<swiper-item v-for="(page, index) in tabList" :key="index">
				<newsPage :columnId="page.columnId"></newsPage>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import newsPage from './news-page.vue';
	export default {
		components: {
			newsPage
		},
		data () {
			return {
				tabList: [{
					id: "tab01",
					name: '最新',
					columnId: 0
				}, {
					id: "tab02",
					name: '大公司',
					columnId: 23
				}, {
					id: "tab03",
					name: '内容',
					columnId: 223
				}, {
					id: "tab04",
					name: '消费',
					columnId: 221
				}, {
					id: "tab05",
					name: '娱乐',
					columnId: 225
				}, {
					id: "tab06",
					name: '区块链',
					columnId: 208
				}],
				tabIndex: 0,
			}
		},
		methods: {
			tabItemClick (index) {
				this.tabIndex = index;
			},
			currentChange (e) {
				this.tabIndex = e.detail.current;
			}
		},
		
	}
</script>

<style lang="less">
	.tab-scroll-view {
		width: 750rpx;
		height: auto;
		flex-direction: row;
		white-space: nowrap;
		background-color: #ffffff;
		.tab-item {
			display: inline-block;
			width: 150rpx;
			height: 84rpx;
			font-size: 14px;
			color: #555;
			text-align: center;
			line-height: 84rpx;
		}
		.tab-item-activate {
			border-bottom: 2px solid #007AFF;
		}
	}
</style>
