import Vue from 'vue'
import App from './App.vue'
import router from './router' // 引进路由
import store from './store' // 引进vuex
import Vant from 'vant';
import 'vant/lib/index.css';
import base from './base'
// import http from '@/api/http.js'
import http from '@/api/http'

Vue.prototype.$base = base // 全局注册base
Vue.prototype.$http = http // 全局注册axios
// Vue.prototype.$routers = router // 全局注册route
console.log('111',Vue.prototype.$routers)
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,   // 全局注册路由
  store,  // 全局注册vuex
  render: h => h(App)
}).$mount('#app')
