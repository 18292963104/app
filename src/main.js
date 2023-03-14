import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from '../src/components/TypeNav'
import store from '../src/store'
import './mock/mockServe'
import 'swiper/css/swiper.css'
import Careousel from '../src/components/Carousel'
import * as API from '@/api'

Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)
Vue.component(Careousel.name, Careousel)

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router,
  store
}).$mount('#app')
