import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from '../views/AboutView.vue'
import KencurView from '../views/Kencur.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      //component: HomeView
      redirect: "/anggota"
    },
    {
      path: '/anggota',
      name: 'anggota',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/kencur/:page',
      name: 'tentang_kencur',
      component: KencurView
    },
    { 
      path: '/:pathMatch(.*)', 
      name: 'not-found', 
      //component: NotFound,
      redirect: '/'
    },
  ]
})

export default router
