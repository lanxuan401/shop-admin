import AppLayout from '@/layout/AppLayout.vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import productRoutes from './modules/product'
import orderRoutes from './modules/order'
import permissionRoutes from './modules/permission'
import mediaRoutes from './modules/media'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('../views/home/index.vue'),
        meta: {
          title: '首页'
        }
      },
      productRoutes,
      orderRoutes,
      permissionRoutes,
      mediaRoutes
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }
] // 路由规则
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(() => {
  nprogress.start() // 开始加载进度条
})

router.afterEach(() => {
  nprogress.done()
})

export default router
