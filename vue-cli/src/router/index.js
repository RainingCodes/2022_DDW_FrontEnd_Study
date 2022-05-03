import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataRendering from '../views/DataRendering.vue'
import ComponentEvent from '../views/ComponentEvent.vue'
import ComputedAndWatch from '../views/ComputedAndWatch.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/dataBinding',
    name:'DataBinding',
    component:DataBinding
  },
  {
    path:'/dataRendering',
    name:'DataRendering',
    component:DataRendering
  },
  {
    path:'/componentEvent',
    name:'ComponentEvent',
    component:ComponentEvent
  },
  {
    path:'/computedAndWatch',
    name:'ComputedAndWatch',
    component:ComputedAndWatch
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
