import { createRouter, createWebHistory } from 'vue-router'
import UniversityPage from '../components/uni'
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/university/:id',
      name: 'university',
      component: UniversityPage
    }
  ]
})

export default router
