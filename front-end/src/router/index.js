import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/layouts/MainLayout.vue'
import Dashboard from '@/layouts/DashboardLayout.vue'
import { isAdminMiddleware, middlware } from '@/middleware';

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
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/views/Dashboard/IndexView.vue')
        },
        {
          path: 'reservations',
          name: 'reservations',
          component: () => import('@/views/Dashboard/RentsView.vue')
        },
        {
          path: 'earnings',
          name: 'earnings',
          component: () => import('@/views/Dashboard/EarningsView.vue')
        },
        {
          path: 'expenses',
          name: 'expenses',
          component: () => import('@/views/Dashboard/ExpensesView.vue')
        },
        {
          path: 'users',
          name: 'users',
          component: () => import('@/views/Dashboard/UsersView.vue'),
          meta: { requiresAdmin: true }
        }
      ]
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(url => url.meta.requiresAuth);
  const requiresAdmin = to.matched.some(url => url.meta.requiresAdmin);

  if (requiresAdmin) {
    try {
      await isAdminMiddleware(to, from, next);
    } catch (error) {
      next({ name: 'dashboard' });
    }
  } else if (requiresAuth) {
    try {
      await middlware(to, from, next);
    } catch (error) {
      next({ name: 'login' });
    }
  }
  else {
    next();
  }
});

export default router
