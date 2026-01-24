import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ProductsView from '../views/ProductsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'domov',
      component: HomeView,
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: ContactView,
    },
    {
      path: '/produkty/:slug?',
      name: 'produkty',
      component: ProductsView,
    },
  ],
})

export default router
