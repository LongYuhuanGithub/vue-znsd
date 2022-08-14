import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IndexView from '../views/IndexView.vue'
import AboutView from '../views/AboutView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/', redirect: '/home'
  },
  {
    path: '/home',
    component: HomeView,
    children: [
      {
        path: '',
        component: IndexView
      },
      {
        path: 'about',
        component: AboutView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
