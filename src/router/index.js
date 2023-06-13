import { createRouter, createWebHistory } from 'vue-router'
import Todos from '../views/TodosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Todos
    },
    {
      path: '/todosDone',
      name: 'todosDone',
      // route level code-splitting
      // this generates a separate chunk (TodosDone.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TodosDoneView.vue')
    }
  ]
})

export default router
