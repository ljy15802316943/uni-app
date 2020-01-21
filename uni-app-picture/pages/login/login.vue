<template>
	<view class="login">
		<view class="input-box" v-if="!login">
			<view class="list">
				<text>账号</text>
				<input type="text" @input="inputChange($event, '账号')" placeholder="请输入用户名" :value="userText" />
			</view>
			<view class="list">
				<text>密码</text>
				<input type="text" @input="inputChange($event, '密码')" placeholder="请输入密码" :value="pswdText" />
			</view>
		</view>
		<view class="button-box">
			<button type="primary" class="button-login" @click="handleTo">{{login ? '注销登录' : '登录'}}</button>
			<button type="primary" v-if="!login" class="button-registered" @click="handleRegistered">免费注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				login: true,
				userText: '',
				pswdText: ''
			}
		},
		onLoad () {
			this.login = uni.getStorageSync('login');
		},
		methods: {
			handleRegistered () {
				uni.navigateTo({
					url: '../registered/registered'
				})
			},
			inputChange (e, val) {
				if (val == '账号') {
					this.userText = e.detail.value;
				} else if (val == '密码') {
					this.pswdText = e.detail.value;
				}
			},
			handleTo () {
				if (!this.login) {
					if (!this.userText || !this.pswdText) {
						uni.showToast({
							icon: 'none',
							title: '请填写账号或密码'
						});
						return false;
					} else if (this.userText != uni.getStorageSync('user')) {
						uni.showToast({
							icon: 'none',
							title: '账号错误'
						});
						return false;
					} else if (this.pswdText != uni.getStorageSync('pswd')) {
						uni.showToast({
							icon: 'none',
							title: '密码错误'
						});
						return false;
					} else {
						uni.showToast({
							icon: 'none',
							title: '登录成功'
						});
						setTimeout( () => {
							uni.switchTab({
								url: '../tabar/latest/latest'
							})
						}, 200)
					}
				} else {
					uni.setStorageSync('user', '');
					uni.setStorageSync('pswd', '');
					uni.showToast({
						icon: 'none',
						title: '注销成功'
					});
					this.login = false;
				}
			}
		}
	}
</script>

<style lang="less">
	page {
		background-color: #EFEFEF;
	}
	.input-box {
		margin-top: 20rpx;
		height: 164rpx;
		background-color: #FFFFFF;
		position: relative;
		display: flex;
		flex-direction: column;
		&::before {
			content: '';
			position: absolute;
			top: 82rpx;
			width: 100%;
			height: 1rpx;
			background-color: #C0C0C0;
		}
		.list {
			width: 100%;
			height: 82rpx;
			padding: 0 20rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			input {
				margin-left: 50rpx;
				width: 75%;
			}
		}
	}
	
	.button-box {
		margin: 0 auto;
		margin-top: 50rpx;
		width: 90%;
		height: 100rpx;
		.button-login {
			width: 100%;
			background-color: #FF80AB;
		}
		.button-registered {
			width: 100%;
			margin-top: 20rpx;
			background-color: #FFFFFF;
			color: #FF80AB;
		}
	}
</style>
