<template>
	<view class="my">
		<view class="top-title" :hover-class="topTitleState ? 'top-title-opacity' : ''" @click="handleTopTitle">
			<view class="photo">
				<image src="../../../static/image/image1.jpg" mode=""></image>
			</view>
			<view class="login-information">
				<text>{{loginText}}</text>
				<text class="go-login navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		
		<view class="function-list" v-for="(item, index) in dataList" :key="index">
			<view class="item-1" v-for="(value, index) in item.list" :key="index" @click="handleBtnList(value.text, index)">
				<view class="item-list-1">
					<text class="list-icon">{{value.icon}}</text>
					<text>{{value.text}}</text>
				</view>
				<view class="item-list-2">
					<text class="go-login navigat-arrow-list">{{value.textIcon}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loginText: 'Hi, 您未登录',
				topTitleState: false,
				dataList: [{
					list: [{
						icon: '',
						text: '收藏图片',
						textIcon: '',
						id: 1
					},{
						icon: '',
						text: '收藏图集',
						textIcon: '',
						id: 2
					}]
					
				},{
					list: [{
						icon: '',
						text: '管理图片',
						textIcon: '',
						id: 3
					},{
						icon: '',
						text: '上传图片',
						textIcon: '',
						id: 4
					}]
				},{
					list: [{
						icon: '',
						text: '关于',
						textIcon: '',
						id: 5
					},{
						icon: '',
						text: '账号管理',
						textIcon: '',
						id: 6
					}]
				},]
			}
		},
		onLoad() {
			this.handleLogin();
		},
		methods: {
			handleBtnList (val, index) {
				uni.showModal({
					icon: 'none',
					showCancel: false,
					title: '您点击的是' + val
				});
			},
			handleTopTitle () {
				this.topTitleState = true;
				uni.getStorageSync('user') ? uni.setStorageSync('login', true): uni.setStorageSync('login', false); //判断用户是否登录
				uni.navigateTo({
					url: '../../login/login'
				});
			},
			handleLogin () {
				if (uni.getStorageSync('user')) {
					this.loginText = '您好, ' + uni.getStorageSync('user')
				} else {
					this.loginText = 'Hi, 您未登录'
				}
			}
		}
	}
</script>

<style lang="less">
	page {
		background-color: #EFEFEF;
	}
	.top-title {
		width: 750rpx;
		height: 240rpx;
		padding: 20rpx;
		box-sizing: border-box;
		background-color: #FF80AB;
		display: flex;
		flex-direction: row;
		align-items: center;
		.photo {
			width: 150rpx;
			height: 150rpx;
			border-radius: 150rpx;
			image {
				max-width: 100%;
				max-height: 100%;
				border-radius: 50%;
			}
		}
		.login-information {
			height: 150upx;
			margin-left: 20upx;
			display: flex;
			align-items: center;
			flex: 1;
			justify-content: space-between;
			text {
				color: #FFFFFF;
			}
			.go-login.navigat-arrow {
				font-size: 38rpx;
				color: #FFFFFF;
			}
		}
	}
	.top-title-opacity {
		opacity: 0.8;
	}
	
	.function-list {
		height: 150rpx;
		margin-top: 20rpx;
		background-color: #FFFFFF;
		position: relative;
		display: flex;
		flex-direction: column;
		&::before {
			content: '';
			position: absolute;
			left: 0;
			top: 76rpx;
			width: 100%;
			height: 1rpx;
			background-color: #C0C0C0;
		}
		.item-1 {
			height: 75rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: 20rpx;
			box-sizing: border-box;
			.item-list-1 {
				text {
					font-size: 14px;
				}
			}
			.item-list-2 {
				flex: 1;
				text-align: right;
			}
		}
		.go-login.navigat-arrow-list {
			height: 90upx;
			width: 40upx;
			line-height: 90upx;
			font-size: 34upx;
			color: #555;
			text-align: right;
			font-family: texticons;
		}
	}
</style>
