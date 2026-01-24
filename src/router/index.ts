import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductView from '../views/ProductView.vue'
import PoliciesView from '@/views/PoliciesView.vue'

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
      path: '/obchodne-podmienky',
      name: 'obchodne-podmienky',
      component: PoliciesView,
    },
    {
      path: '/produkty/:slug?',
      name: 'produkty',
      component: ProductsView,
      props: true,
    },
    {
      path: '/produkt/:id',
      name: 'produkt',
      component: ProductView,
      props: true,
    },
  ],
})

export default router
