<template>
	<view class="registered">
		<view class="input-box">
			<view class="email">
				<text class="email-insert-line insert-line">邮箱</text>
				<input type="text" @input="inputChnage($event, '邮箱')" placeholder="请输入邮箱" :value="emailText" />
			</view>
			<view class="email">
				<text class="user-insert-line insert-line">账号</text>
				<input type="text" @input="inputChnage($event, '账号')" placeholder="请输入账号" :value="userText" />
			</view>
			<view class="email">
				<text class="insert-line">密码</text>
				<input type="text" @input="inputChnage($event, '密码')" placeholder="请输入密码" :value="pswdText" />
			</view>
		</view>
		
		<view class="submit">
			<button type="primary" class="button" @click="submit">提交</button>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				emailText: '',
				userText: '',
				pswdText: ''
			}
		},
		methods: {
			inputChnage (e, val) {
				if (val == '邮箱') {
					this.emailText = e.detail.value;
				} else if (val == '账号') {
					this.userText = e.detail.value;
				} else if (val == '密码') {
					this.pswdText = e.detail.value;
				}
			},
			submit () {
				if (!this.emailText || !this.userText || !this.pswdText) {
					uni.showToast({
						icon: 'none',
						title: '请填写完整信息'
					});
					return false;
				} else {
					uni.setStorageSync('email', this.emailText); //保存邮箱 
					uni.setStorageSync('user', this.userText); //保存用户名 
					uni.setStorageSync('pswd', this.pswdText); //保存用户密码 
					uni.showToast({
						icon: 'none',
						title: '注册成功'
					});
					setTimeout( () => {
						uni.navigateTo({
							url: '../login/login'
						})
					}, 200)
					
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
		display: flex;
		flex-direction: column;
		padding: 50rpx;
		box-sizing: border-box;
		.email {
			height: 82rpx;
			background-color: #FFFFFF;
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: 0 20rpx;
			box-sizing: border-box;
			.insert-line {
				width: 88rpx;
			}
			.email-insert-line::before {
				position: absolute;
				right: 50rpx;
				bottom: 0;
				top: 136rpx;
				left: 64rpx;
				height: 1px;
				content: '';
				-webkit-transform: scaleY(.5);
				transform: scaleY(.5);
				background-color: #c8c7cc;
			}
			.user-insert-line::before {
				position: absolute;
				right: 50rpx;
				bottom: 0;
				top: 218rpx;
				left: 64rpx;
				height: 1px;
				content: '';
				-webkit-transform: scaleY(.5);
				transform: scaleY(.5);
				background-color: #c8c7cc;
			}
			input {
				margin-left: 20rpx;
				width: 85%;
			}
		}
	}
	
	.submit .button {
		width: 75%;
		background-color: #FF80AB;
	}
</style>
