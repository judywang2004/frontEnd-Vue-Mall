import { createRouter, createWebHistory } from 'vue-router'
import indexWrap from '@/components/indexWrap'
import category from '@/components/category'
import goodsDetail from '@/components/goodsDetail'

const routes = [
  {
    path: '/',
    name: 'indexWrap',
    component: indexWrap
  },{
    path: '/category',
    name: 'category',
    component: category
  },{
    path: '/goodsDetail',
    name: 'goodsDetail',
    component: goodsDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
