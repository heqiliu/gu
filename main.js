import Vue from 'vue'
import App from './App'
import http from './http/interface.js'
import store from './store.js'
import md5 from 'js-md5'
import formatTime from './http/filters.js'
Vue.prototype.formatTime=formatTime
Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.prototype.$store = store
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
