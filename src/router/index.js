const { createWebHistory, createRouter } = require('vue-router')

const history = createWebHistory()

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: {
        path: process.env.NODE_ENV === 'production' ? '/vue3-template/' : '/'
      }
    }
  ]
})

export default router