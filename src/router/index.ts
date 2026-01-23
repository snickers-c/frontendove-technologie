import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Contact from '../components/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    // {
    //   path: '/kontakt',
    //   name: 'kontakt',
    //   component: Home,
    // },
  ],
})

export default router
