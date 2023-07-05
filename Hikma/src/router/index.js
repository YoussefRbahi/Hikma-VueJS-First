import { createRouter, createWebHistory } from 'vue-router'
import UniversityPage from '../components/UniversityPage.vue'
import Home from '../components/Home.vue'
import Universities from '../components/Universities.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/universities/:id',
      name: 'university',
      component: UniversityPage
    },
    {
      path: '/universities/',
      name: 'universities',
      component: Universities
    }
  ]
})

export default router
