import { createRouter, createWebHistory } from 'vue-router'
import CatalogView from '../views/CatalogView/CatalogView.vue'

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: CatalogView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
