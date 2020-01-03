<template>  
    <view class="content">  
        <switch :checked="isChecked" @change="switchchange"></switch>  
    </view>  
</template>
<script>  
    export default {  
        data() {  
            return {  
                isChecked: false  
            }  
        },  
        onLoad() {},  
        methods: {  
            switchchange(e) {  
                // TODO H5端内置组件实现的有问题，使用v-model无效，先这样解决  
                this.isChecked = !this.isChecked;  
				this.$nextTick(()=>{  
					this.isChecked = !this.isChecked;
				})  
                // var self = this;  
                // setTimeout(function() {  
                //     self.isChecked = !self.isChecked;  
                // }, 0.01);
            }  
        }  
    }  
</script>

<style lang="less">
	page {
		background: #f8f8f8;
	}
</style>