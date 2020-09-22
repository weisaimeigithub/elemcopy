import Vue from 'vue'
import Router from 'vue-router'
import city from '@/page/city/city'
import home from '@/page/home/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path:'/city',
      name:'city',
      component:city
    }
  ]
})
