import { createRouter, createWebHistory } from 'vue-router'
import CatalogView from '../views/CatalogView/CatalogView.vue'
import MainView from '../views/MainView/MainView.vue'
// impoer BasketView
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
  //   path:'/basket',
  //   name:'basketView',
  //   component:BasketView;
  // }
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
