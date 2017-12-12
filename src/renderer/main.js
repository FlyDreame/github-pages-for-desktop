import Vue from 'vue'
import axios from 'axios'
import Element from 'element-ui'

import App from './App'
import router from './router'
import store from './store'

import './style/element-variables.scss'
import './style/index.scss'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(Element)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
