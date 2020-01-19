<template>
	<view class="app">
		<view class="input-box">
			<view class="user input">
				<text class="text">账号：</text>
				<input type="text" @input="inputChange($event, '账号')" placeholder="请输入账号" :value="user" />
			</view>
			<view class="pswd input">
				<text class="text">密码：</text>
				<input type="text" @input="inputChange($event, '密码')" placeholder="请输入密码" :value="pswd" />
			</view>
			<view class="email input">
				<text class="text">邮箱：</text>
				<input type="text" @input="inputChange($event, '邮箱')" placeholder="请输入邮箱" :value="email" />
			</view>
		</view>
		<view class="button-box">
			<button type="primary" class="button" @tap="handleSubmit">注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: '',
				pswd: '',
				email: ''
			}
		},
		methods: {
			inputChange (e, val) {
				let _this = this;
				if (val == '账号') {
					_this.user = e.detail.value;
					if (!this.user) {
						uni.showToast({
							icon: 'none',
							title: '账号不能为空'
						});
						return false;
					}
				} else if (val == '密码') {
					_this.pswd = e.detail.value;
					if (!this.pswd) {
						uni.showToast({
							icon: 'none',
							title: '密码不能为空'
						});
						return false;
					} 
				} else if (val == '邮箱') {
					_this.email = e.detail.value;
					if (!this.email) {
						uni.showToast({
							icon: 'none',
							title: '邮箱不能为空'
						});
						return false;
					} 
				}
			},
			handleSubmit () {
				if (!!this.user && !!this.pswd && !!this.email) {
					uni.setStorageSync('user', this.user);
					uni.setStorageSync('pswd', this.pswd);
					uni.setStorageSync('email', this.email);
					uni.showToast({
						icon: 'none',
						title: '注册成功'
					});
					uni.navigateTo({
						url: '../login/login'
					})
				} else {
					uni.showToast({
						icon: 'none',
						title: '请输入信息'
					});
					return false;
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
		.input-box {
			margin-top: 2.125rem;
			background-color: #FFFFFF;
			display: flex;
			flex-direction: column;
			.input {
				display: flex;
				align-items: center;
				font-size: 18px;
				width: 100%;
				height: 2.375rem;
				padding: 0 0.875rem;
				box-sizing: border-box;
			}
			.text {
				width: 4rem;
			}
			.user::before {
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
			.pswd::before {
				position: absolute;
				right: 10px;
				bottom: 0;
				top: 4.8rem;
				left: 20px;
				height: 1px;
				content: '';
				-webkit-transform: scaleY(.5);
				transform: scaleY(.5);
				background-color: #c8c7cc;
			}
		}
		
		.button-box {
			margin: 0 auto;
			margin-top: 2.26rem;
			width: 90%;
			text-align: center;
			button.button {
				background-color: #0faeff;
			}
		}
	}
</style>
