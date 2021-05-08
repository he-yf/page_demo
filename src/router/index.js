import Vue from 'vue'
import Router from 'vue-router'
import mainWeb from '@/components/views/mainWeb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainWeb',
      component: mainWeb
    }
  ]
})
