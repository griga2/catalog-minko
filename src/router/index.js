import { createRouter, createWebHistory } from 'vue-router'
import CatalogView from '../views/CatalogView/CatalogView.vue'
import MainView from '../views/MainView/MainView.vue'
const routes = [
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogView
  },{
    path:'/',
    name:'startpage',
    component:MainView
  },
  // {
  //   paht:'/person',
  //   name:'person',
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
