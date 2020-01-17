<template>
    <view>
        <view class="page-body">
            <view class="btn-area">
                <navigator url="/pages/navigate/navigate?title=navigate" hover-class="navigator-hover">
                    <button type="default">跳转到新页面</button>
                </navigator>
                <navigator url="/pages/redirect/redirect?title=redirect" open-type="redirect" hover-class="other-navigator-hover">
                    <button type="default">在当前页打开</button>
                </navigator>
                <navigator url="/pages/tabBar/tabBar" open-type="switchTab" hover-class="other-navigator-hover">
                    <button type="default">跳转tab页面</button>
                </navigator>
            </view>
			<view class="">
				<button type="primary" @click="setText">text_1...</button>
				<button type="primary" @click="getText">text_0...</button>
				<button type="primary" @click="removeText">清除红点</button>
				<button type="primary" @click="openMask">打开蒙版</button>
			</view>
        </view>
    </view>
</template>
<script>
	export default {
		data () {
			return {
				text: 0,
				text2: '...',
				state: false,
				state2: false
			}
		},
	    onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
	        console.log(option.id); //打印出上个页面传递的参数。
	        console.log(option.name); //打印出上个页面传递的参数。
			uni.$emit('update',{msg:'页面更新'})
	    },
		methods: {
			setText () {
				var _this = this
				_this.text = _this.text + 1;
				if (_this.text >= 9) {
					_this.state = true;
				} 
				console.log(_this.state, '_this.state')
				uni.setTabBarBadge({
				  index: 0,
				  text: _this.state ? _this.text2 : JSON.stringify(_this.text)
				})
			},
			getText () {
				var _this = this
				_this.text = JSON.parse(_this.text - 1);
				if (_this.text <= '9') {
					_this.state = false
				} 
				uni.setTabBarBadge({
				  index: 0,
				  text: _this.state ? _this.text2 : JSON.stringify(_this.text),
				  success(res) {
					if (_this.text <= '0') {
						_this.text = 0;
					  uni.removeTabBarBadge({
						index: 0
					  })
					 }
				  	console.log(res, 'res');
				  }
				})
			},
			openMask () {
				this.state2 = true;
			},
			removeText () {
				uni.removeTabBarBadge({
					index: 0
				});
			}
		}
	}
</script>

<style lang="less">
	page {
		background: #f8f8f8;
	}
</style>