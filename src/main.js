// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-material/dist/vue-material.css'
import VueMaterial from 'vue-material'
import axios from 'axios'
import vueAxios from 'vue-axios'

Vue.use(VueMaterial)
Vue.use(vueAxios, axios)

Vue.config.productionTip = false

let config = null
if (process.env === 'development') {
  config = require('../config/dev.env')
} else if (process.env === 'master') {
  config = require('../config/master.env')
} else {
  config = require('../config/prod.env')
}

let crossbarServer = config.crossbarServer.replace(/"/g, '')
Vue.prototype.keys = { crossbarServer: crossbarServer }
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
