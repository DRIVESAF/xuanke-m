import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/')
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('@/views/article/')
  },
  {
    path: '/',
    component: () => import('@/views/layout/'),
    children: [
      {
        // 默认子路由
        path: '/',
        name: '',
        component: () => import('@/views/course/')
      },
      {
        // 默认子路由
        path: '/course',
        name: 'course',
        component: () => import('@/views/course/')
      },
      {
        path: '/notice',
        name: 'notice',
        component: () => import('@/views/notice/')
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/mine/')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
