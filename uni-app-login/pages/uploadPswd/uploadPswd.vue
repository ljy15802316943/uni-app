<template>
	<view class="app">
		<view class="email">
			<text>原密码：</text>
			<input type="text" @input="inputChange($event, 'pswd')" :password="pswdType" placeholder="请输入原密码" :value="pswdText" />
			<view class="item" v-if="pswd" @tap="clearPswd">
				<icon type="clear" size="22"></icon>
			</view>
		</view>
		<view class="submit">
			<button type="primary" class="button" @tap="handleSubmit">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pswdText: '',
				pswd: false
			}
		},
		methods: {
			inputChange (e, val) {
				if (val == 'pswd') {
					this.pswdText = e.detail.value;
					if (e.detail.value) {
						this.pswd = true;
					} else {
						this.pswd = false;
					}
				}
			},
			clearPswd () {
				this.pswdText = '';
				this.pswd = false;
			},
			handleSubmit () {
				if (!this.pswdText) {
					uni.showToast({
						icon: 'none',
						title: '密码不能为空',
					});
					return false;
				} else {
					uni.setStorageSync('pswd', this.pswdText);
					uni.showToast({
						icon: 'none',
						title: '修改成功'
					});
					setTimeout( () => {
						uni.navigateTo({
							url:'../login/login'
						})
					}, 500)
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
		padding: 0 1rem;
		box-sizing: border-box;
		.email {
			margin-top: 2rem;
			height: 2.5rem;
			background-color: #FFFFFF;
			display: flex;
			align-items: center;
			font-size: 18px;
			text {
				margin: 0 1rem;
			}
			.item {
				position: relative;
				left: 0.5rem;
				top: 0.25rem;
			}
		}
		
		.submit {
			width: 90%;
			margin: 0 auto;
			margin-top: 2.24rem;
			button.button {
				background-color: #0faeff;
			}
		}
	}
</style>
