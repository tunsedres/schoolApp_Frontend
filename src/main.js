import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import plugins from './plugins'
import VueBus from 'vue-bus'

axios.defaults.baseURL = 'http://school.local/'
window.axios = axios

const accessToken = localStorage.getItem('token')
if (accessToken) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
  store.dispatch('checkUser')
}

Vue.use(VueBus)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  plugins,
  render: h => h(App)
}).$mount('#app')
