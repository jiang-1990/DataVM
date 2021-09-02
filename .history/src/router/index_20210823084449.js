import Vue from 'vue'
import Router from 'vue-router'
import bigScreen from '@/components/bigScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bigScreen',
      component: bigScreen
    }
  ]
})
