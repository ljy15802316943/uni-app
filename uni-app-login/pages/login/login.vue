<template>
	<view class="app">
		<view class="input-box">
			<view class="user">
				<text>账号：</text>
				<input type="text" @input="inputChange($event, 'user')" class="input" placeholder="请输入账号" :value="userText" />
				<view class="item" v-if="user" @tap="clearUser">
				    <icon type="clear" size="26"/>
				</view>
			</view>
			<view class="pswd">
				<text>密码：</text>
				<input type="text" @input="inputChange($event, 'pswd')" class="input" :password="pswdType" placeholder="请输入密码" :value="pswdText" />
				<view class="item" v-if="pswd" @click="toViewPswd">
					<icon type="waiting" size="26"/>
				</view>
			</view>
		</view>
		<view class="button-login">
			<button type="primary" class="button" @tap="handleLogin">登录</button>
		</view>
		<view class="action-row">
			<text class="row-text" @tap="handleLoginBtn('注册账号')">注册账号</text>
			<text>|</text>
			<text class="row-text" @tap="handleLoginBtn('忘记密码')">忘记密码</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconType: ['clear'],
				user: false,//账号图标显示
				pswd: false,//密码图标显示
				userText: '',
				pswdText: '',
				pswdType: true
			}
		},
		onLoad() {
			
		},
		methods: {
			inputChange (e, val) {
				if (val == 'user') {
					e.detail.value ? this.user = true : this.user = false;
					this.userText = e.detail.value;
				} else if (val == 'pswd') {
					if (e.detail.value) {
						this.pswd= true;
					} else {
						this.pswd = false;
					}
					this.pswdText = e.detail.value;
				}
			},
			clearUser () {
				if (this.user) {
					this.userText = '';
					this.user = false;
				} else {
					this.user = true;
				}
			},
			toViewPswd () {
				this.pswdType = !this.pswdType;
			},
			handleLoginBtn (val) {
				if (val == '注册账号') {
					uni.navigateTo({
						url: '../registered/registered'
					})
				} else if (val == '忘记密码') {
					uni.navigateTo({
						url: '../uploadPswd/uploadPswd'
					})
				}
			},
			handleLogin () {
				if (!this.userText) {
					uni.showToast({
						icon: 'none',
						title: '请输入账号'
					});
					return false;
				} else if (!this.pswdText) {
					uni.showToast({
						icon: 'none',
						title: '请输入密码'
					});
					return false;
				} else {
					if (this.userText != uni.getStorageSync('user')) {
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
						uni.switchTab({
							url: '../home/home'
						})
					}
				}
			}
		}
	}
</script>

<style lang="less">
	page {
		background-color: #efeff4;
	}
	.app {
		padding: 0 0.6rem;
		box-sizing: border-box;
		position: relative;
		width: 100%;
		.input-box {
			margin-top: 2rem;
			background-color: #ffffff;
			&::before {
				position: absolute;
				right: 10px;
				bottom: 0;
				top: 2.5rem;
				left: 20px;
				height: 1px;
				content: '';
				-webkit-transform: scaleY(.5);
				transform: scaleY(.5);
				background-color: #c8c7cc;
			}
			.user {
				display: flex;
				align-items: center;
				font-size: 18px;
				width: 100%;
				height: 2.375rem;
				padding: 0 0.875rem;
				box-sizing: border-box;
				text {
					width: 112rpx;
				}
				.input {
					width: 16rem;
				}
				.item {
					position: absolute;
					right: 1rem;
					top: 0.3rem;
				}
			}
			.pswd {
				display: flex;
				align-items: center;
				font-size: 18px;
				width: 100%;
				height: 2.375rem;
				padding: 0 0.875rem;
				box-sizing: border-box;
				text {
					width: 112rpx;
				}
				.input {
					width: 16rem;
				}
				.item {
					position: absolute;
					right: 1rem;
					top: 2.75rem;
				}
			}
		}
		
		.button-login {
			width: 90%;
			margin: 0 auto;
			margin-top: 2.375rem;
		}
		
		.action-row {
			margin-top: 0.6rem;
			text-align: center;
			width: 100%;
 			.row-text {
				color: #007AFF;
				width: 2.5rem;
				margin: 0 0.5rem;
			}
		}
	}
</style>
