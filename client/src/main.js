import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
store.dispatch('loginUser/whoAmI')

import "@/assets/css/reset.css"
import "@/assets/css/font.css";
import "@/assets/css/base.scss";


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
