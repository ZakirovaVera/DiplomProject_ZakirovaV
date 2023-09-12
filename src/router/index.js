import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AboutMePage from '@/pages/AboutMePage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import NotFountPage from '@/pages/NotFountPage.vue'
import CakeProductPage from '@/pages/CakeProductPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutMePage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  },
  {
    path: '/catalog/:pageNumber?',
    name: 'Cake',
    component: CakeProductPage
  },
  {
    path: '/:CatchAll(.*)',
    name: '404',
    component: NotFountPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
