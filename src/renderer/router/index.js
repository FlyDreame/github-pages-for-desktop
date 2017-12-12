import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'
import Init from '@/pages/init/Init'
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'init',
          name: 'init',
          component: Init
        },
        {
          path: 'home',
          name: 'home',
          component: Home
        }
      ]
    }
  ]
})
