import { createRouter, createWebHistory } from 'vue-router'
import indexWrap from '@/components/indexWrap'

const routes = [
  {
    path: '/',
    name: 'indexWrap',
    component: indexWrap
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
