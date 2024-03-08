import { createRouter, createWebHistory } from 'vue-router'
import UniversityPage from '../views/UniversityPage.vue'
import Home from '../views/Home.vue'
import Universities from '../views/Universities.vue'
import AllUniversities from '../views/AllUniversities.vue'
import AboutUs from '../views/AboutUs.vue'
import TowerArticle from '../views/TowerArticle.vue'
import OurServices from '../views/OurServices.vue'
import ContactUs from '../views/ContactUs.vue'

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
      path: '/universities/results',
      name: 'universitiesResults',
      component: Universities
    },
    {
      path: '/universities/',
      name: 'universities',
      component: AllUniversities
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs
    },
    {
      path: '/how-to',
      name: 'how-to',
      component: TowerArticle
    },
    {
      path: '/services',
      name: 'services',
      component: OurServices
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUs
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      console.log('moving to top of the page')
      window.scrollTo(0, 0)
    }
  }
})

export default router
