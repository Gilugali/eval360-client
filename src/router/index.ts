// import { useAuthStore } from '@/stores/auth'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// const authStore = useAuthStore()
const routes: RouteRecordRaw[] = [
  //public routes
  {
    path: '/dashboard',
    name: 'Home',
    component: () => import('@/views/Dashboard.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/Login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// router.beforeEach((to, from, next) => {
//   const user = authStore.user
//   const isAuthenticated = user !== null

//   if (to.meta.requiresAuth && !isAuthenticated) {
//     return next({ name: 'Login' })
//   }
//   next()
// })

export default router
