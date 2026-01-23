import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: Contact,
    },
    {
      path: '/frontendove-technologie',
      component: HomeView,
    }
  ],
})

export default router
