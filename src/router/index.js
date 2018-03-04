import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import notFound from '@/components/notFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/skin',
  routes: [
    {
      path: '*',
      component: notFound
    },
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
