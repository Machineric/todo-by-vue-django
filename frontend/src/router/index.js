import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'LandingPageView',
    component: () => import('../views/todos/TodosOfTodayView.vue')
  },
  {
    path: '/today',
    name: 'TodosOfTodayView',
    component: () => import('../views/todos/TodosOfTodayView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
