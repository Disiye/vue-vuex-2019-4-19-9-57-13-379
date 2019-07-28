
import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import axios from 'axios'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.prototype.$axios = axios
Vue.use(Antd)


import('./assets/base.css')
import('./assets/index.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store
})
