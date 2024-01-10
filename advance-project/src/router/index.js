import { createRouter, createWebHistory } from 'vue-router'

import user from '@/views/users/index.vue'
import index from '@/views/index.vue'
import login from '@/views/login.vue'
import register from '@/views/register.vue'
import article from '@/views/articles/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: login },
    { path: '/user', component: user },
    { path: '/index', component: index },
    { path: '/register', component: register },
    { path: `/article/:id`, component: article }
  ]
})

export default router
