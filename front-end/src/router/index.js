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
        },
        {
          path: '/about-us',
          name: 'about-us',
          component: () => import('@/views/AboutUsView.vue')
        },
        {
          path: '/reservation',
          name: 'reservation',
          component: () => import('@/views/ReservationView.vue')
        }
      ]
    }
  ]
})

export default router
