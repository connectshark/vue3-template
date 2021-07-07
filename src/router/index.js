const { createRouter, createWebHashHistory } = require('vue-router')

const history = createWebHashHistory()

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    }
  ]
})

export default router