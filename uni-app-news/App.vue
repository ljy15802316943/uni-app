<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/uni.css';
	
	/* 顶部导航栏位置至顶部 */
	.uni-page-head {
		top: 0;
	}
	/* 删除按钮 */
	.uni-modal__hd {
	    padding: 0rem !important;
	    box-sizing: border-box;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    height: 3.5rem;
	    color: #999;
	} 
	.uni-modal__bd {
		display: none;
	}
</style>
