import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const msg = (title, icon="none", duration=1500) => {
	if (!title) {
		return false;
	};
	uni.showToast({
		title: title,
		icon: icon,
		duration: duration
	});
}

Vue.prototype.$api = {msg};

const app = new Vue({
    ...App
})
app.$mount()
