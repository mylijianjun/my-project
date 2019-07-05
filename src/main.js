// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'Element-ui'
import {Row,Col} from 'Element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
require('swiper/dist/css/swiper.css')
Vue.config.productionTip = false
Vue.use(Col)
Vue.use(Row)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios=Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
