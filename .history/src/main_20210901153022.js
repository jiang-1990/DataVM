// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
//声明字体
import './font/font.css'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
//import 'echarts/map/js/china' // 引入中国地图

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
