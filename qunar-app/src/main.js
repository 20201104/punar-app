import Vue from 'vue'
import App from './App.vue'
import router from './router'
//js
import FastClick from "fastclick"
FastClick.attach(document.body)
//css重置样式
import "./assets/css/reset.css"
//icon图标
import "./assets/css/iconfont.css"
//swiper组件

import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
