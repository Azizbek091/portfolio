import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'homepage', component: HomePage },
    { path: '/descriptions', name: 'mainpage', component: () => import('@/views/AboutPage.vue') },
    { path: '/myworks', name: 'workpage', component: () => import('@/views/WorkPage.vue') },
    { path: '/contacts', name: 'contactpage', component: () => import('@/views/ContactPage.vue') },
  ]
})

export default router