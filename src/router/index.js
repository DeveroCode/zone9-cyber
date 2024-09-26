import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/IndexView.vue')
        },
        {
          path: '/services',
          name: 'services',
          component: () => import('@/views/ServicesView.vue')
        }
      ]
    }
  ]
})

export default router
