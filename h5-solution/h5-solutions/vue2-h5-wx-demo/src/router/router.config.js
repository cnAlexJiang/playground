/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/test',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/test',
        name: 'test',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/home/about'),
        meta: { title: '关于我', keepAlive: false }
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/home'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/use/:id',
        name: 'use',
        component: () => import('@/views/home/use'),
        meta: { title: '使用指南', keepAlive: false }
      },
      {
        path: '/list/:id',
        name: 'list',
        component: () => import('@/views/home/list'),
        meta: { title: '列表页', keepAlive: false }
      },
      {
        path: '/audio/:id',
        name: 'audio',
        component: () => import('@/views/home/audio'),
        meta: { title: '图音频', keepAlive: false }
      },
      // {
      //   path: '/iframe/:id',
      //   name: 'iframe',
      //   component: () => import('@/views/home/iframe'),
      //   meta: { title: 'ppt', keepAlive: false }
      // },
      {
        path: '/act/:act_id',
        name: 'act',
        component: () => import('@/views/home/activity'),
        meta: { title: '活动页', keepAlive: false }
      },
      {
        path: '/search/:title',
        name: 'search',
        component: () => import('@/views/home/search-list'),
        meta: { title: '搜索页', keepAlive: false }
      },
    ]
  }
]
