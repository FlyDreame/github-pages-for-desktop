import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'
import Init from '@/pages/init/Init'
import Home from '@/pages/home/Home'

import Article from '@/pages/home/article/Article.vue'
import Setting from '@/pages/home/setting/Setting.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/home',
      children: [
        {
          path: 'init',
          name: 'init',
          component: Init
        },
        {
          path: 'home',
          name: 'home',
          component: Home,
          children: [
            {
              path: '',
              name: 'Article',
              component: Article
            },
            {
              path: '',
              name: 'Setting',
              component: Setting
            }
          ]
        }
      ]
    }
  ]
})
