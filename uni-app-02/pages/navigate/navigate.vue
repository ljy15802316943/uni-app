<template>
    <view class="app">
    	<view class="upload-box">
    		<view class="details-content">
    			<input type="text" placeholder-style="font-size: 35rpx" placeholder="请输入详细内容" value="" />
    		</view>
			<view class="uni-uploader__input-box" @tap="chooseVideoImage">
				<view class="uni-uploader__input"></view>
				<image style="width: 200px; height: 200px; background-color: #eeeeee;" :src="src"/>
			</view>
			<view class="input-content">
				<text style="font-size: 35rpx; font-weight: 800;">姓名</text>
				<input type="text" placeholder-style="font-size: 35rpx" placeholder="请输入姓名" value="" />
			</view>
			<view class="input-content">
				<text style="font-size: 35rpx; font-weight: 800;">电话</text>
				<input type="text" placeholder-style="font-size: 35rpx" placeholder="请输入电话号码" value="" />
			</view>
    	</view>
    </view>
</template>
<script>
    export default {
    data() {
        return {
            scr: ''
        }
    },
    methods: {
        chooseVideoImage () {
			var _this = this;
			uni.chooseImage({
				count: 1,
				success(res) {
					_this.src = res.tempFilePaths[0];
					console.log(_this.src, 'res');
				}
			})
		}
    }
}
</script>
 
<style lang="less">
    page {
		background: #f8f8f8;
    }
　　.upload-box {
		padding: 50rpx;
		box-sizing: border-box;
		.details-content {
			margin-bottom: 150rpx;
		}
		.input-content {
			display: flex;
			padding: 0 30rpx;
			box-sizing: border-box;
			text {
				position: relative;
				top: -2rpx;
				right: 30rpx;
			}
		}
	}
</style>