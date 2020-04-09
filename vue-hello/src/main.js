import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import base from './base'
// import http from '@/api/http.js'
import http from '@/api/http'

Vue.prototype.$base = base // 全局注册base
Vue.prototype.$http = http // 全局注册axios
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
