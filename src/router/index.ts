import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import BlogView from '@/views/menu/BlogView.vue'
import MainView from '@/views/menu/MainView.vue'
import ResiView from '@/views/menu/ResiView.vue'
import SquareView from '@/views/menu/SquareView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: 'main',
    component: HomeView,
    children: [
      {
        path: '/main',
        name: 'main',
        meta: {
          title: '首页'
        },
        component: MainView
      },
      {
        path: '/blog',
        name: 'blog',
        meta: {
          title: '博客'
        },
        component: BlogView
      },
      {
        path: '/square',
        name: 'square',
        meta: {
          title: '广场'
        },
        component: SquareView
      },
      {
        path: '/resi',
        name: 'resi',
        meta: {
          title: '居所'
        },
        component: ResiView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
