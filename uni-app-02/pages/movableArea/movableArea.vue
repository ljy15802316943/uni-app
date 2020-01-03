<template>
    <view class="page-body">
        <view class="uni-padding-wrap uni-common-mt">
            <view class="uni-title uni-common-mt">
                示例 1
                <text>\nmovable-view 区域小于 movable-area</text>
            </view>
            <movable-area class="movable-area">
                <movable-view class="movable-view" :x="x" :y="y" direction="all" @change="onChange">text</movable-view>
            </movable-area>
            <view @tap="tap" class="uni-link uni-center uni-common-mt">
                点击这里移动至 (30px, 30px)
            </view>
            <view class="uni-title uni-common-mt">
                示例 2
                <text>\nmovable-view区域大于movable-area</text>
            </view>
            <movable-area class="movable-area-two">
                <movable-view class="max movable-view-two" direction="all">text</movable-view>
            </movable-area>
        </view>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				x: 0,
				y: 0,
				old: {
					x: 0,
					y: 0
				}
			}
		},
		methods: {
			tap: function(e) {
				this.x = this.old.x
				this.y = this.old.y
				this.$nextTick(function() {
					this.x = 30
					this.y = 30
				})
			},
			onChange: function(e) {
				console.log(e)
				this.old.x = e.detail.x
				this.old.y = e.detail.y
			}
		}
	}
</script>

<style lang="less">
	.movable-area {
		width: 100%;
		height: 8rem;
		background: #BBBBBB;
		.movable-view {
			width: 3.125rem;
			height: 3.125rem;
			background: #007AFF;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #FFFFFF;
		}
	}
	.movable-area-two {
		width: 100%;
		height: 8rem;
		background: #BBBBBB;
		.movable-view-two {
			width: 8rem;
			height: 100%;
			background: #007AFF;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #FFFFFF;
		}
	}
</style>
