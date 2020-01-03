<template>
    <view class="app">
		<view class="form-box">
			<form @submit="submit" @reset="reset" class="form">
				
				<view class="form-view">
					<view class="title">switch</view>
					<view class="">
						<switch name="switch" />
					</view>
				</view>
				
				<view class="form-view">
					<view class="title">radio</view>
					<view class="radio">
						<label class="">
							<radio value="" /><text>选项一</text>
						</label>
						<label class="">
							<radio value="" /><text>选项二</text>
						</label>
					</view>
				</view>
				
				<view class="form-view">
					<view class="title">checkbox</view>
					<checkbox-group name="checkbox" class="checkbox">
						<label>
							<checkbox value="checkbox1" /><text>选项一</text>
						</label>
						<label>
							<checkbox value="checkbox2" /><text>选项二</text>
						</label>
					</checkbox-group>
				</view>
				
				<view class="form-view">
					<view class="title">slider</view>
					<view class="progress">
						<slider value="50" name="slider" show-value activeColor="#007AFF"></slider>
					</view>
				</view>
				
				<view class="form-view">
					<view class="title">input</view>
					<view class="progress">
						<input class="uni-input" focus placeholder="自动获得焦点" />
					</view>
				</view>
				
				<button form-type="submit">Submit</button>
				<button form-type="reset">Reset</button>
			</form>
		</view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                name: '爱企业'
            }
        },
        methods: {
            submit () {
				console.log('提交');
			},
			reset () {
				console.log('撤销');
			}
        }
    }
</script>

<style lang="less">
	page {
		background: #f8f8f8;
	}
	.form-box {
		padding: 2.6rem 1rem;
		box-sizing: border-box;
		.form {
			.form-view {
				margin: 1rem 0;
				.title {
					margin: 0.5rem 0;
					color: black;
					font-size: 20px;
				}
				.radio {
					width: 9rem;
					display: flex;
					justify-content: space-between;
				}
				.checkbox {
					width: 9rem;
					display: flex;
					justify-content: space-between;
				}
				.uni-input {
					height: 2.2rem;
				}
			}
			
		}
	}
</style>