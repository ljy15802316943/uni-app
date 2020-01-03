<template>
    <view class="app">
		<view class="form-box">
			<form @submit="submit" @reset="reset" class="form">
				
				<view class="form-view">
					<view class="title">switch</view>
					<view class="">
						<switch name="switch" @change="handleSwitch" />
					</view>
				</view>
				
				<view class="form-view">
					<view class="title">radio</view>
					<view class="radio">
						<radio-group name="" @change="handleRadio">
							<label class="">
								<radio value="r1" /><text>选项一</text>
							</label>
							<label class="">
								<radio value="r2" /><text>选项二</text>
							</label>
						</radio-group>
					</view>
				</view>
				
				<view class="form-view">
					<view class="title">checkbox</view>
					<checkbox-group name="checkbox" class="checkbox" @change="handleCheckbox">
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
						<slider value="50" name="slider" @change="handleSlider" show-value activeColor="#007AFF"></slider>
					</view>
				</view>

				<view class="form-view">
					<view class="title">input</view>
					<view class="progress">
						<input class="uni-input" @change="handleInput" focus placeholder="自动获得焦点" />
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
                name: '爱企业',
				obj: {}
            }
        },
        methods: {
            submit () {
				console.log(this.obj);
			},
			reset () {
				Object.keys(this.obj).forEach( (key) => {
				   delete(this.obj[key]) // 删除对象的key。
				})
				console.log(this.obj);
			},
			handleSwitch (e) {
				this.obj.switch = e.detail.value;
			},
			handleRadio (e) {
				this.obj.radio = e.detail.value;
			},
			handleCheckbox (e) {
				this.obj.checkbox = e.detail.value;
			},
			handleSlider (e) {
				this.obj.slider = e.detail.value;
			},
			handleInput (e) {
				this.obj.input = e.detail.value;
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