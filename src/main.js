import Vue from 'vue'
import App from './App'
import Config from './config/config'
Vue.prototype.$serverPath = Config.serverPath
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
