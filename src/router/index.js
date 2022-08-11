import Vue from 'vue'
import VueRouter from 'vue-router'

import RecipePage from '@/components/RecipePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/recipe/:slug',
    name: 'recipe-page',
    component: RecipePage,
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
