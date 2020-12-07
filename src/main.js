import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import service from '@/utils/request.js'
import '@/mockDatas/mock.js'
import '@/assets/normalize.css'
import '@/core/use'
Vue.config.productionTip = false
Vue.prototype.$xttp = service
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
