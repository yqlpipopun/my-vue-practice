import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/frames/FrameBasic.vue'),
    redirect: { name: "vue總覽" },
    children: [
      {
        path: 'vue',
        component: () => import('@/views/Home.vue'),
        children: [
          {
            path: 'overview',
            name: 'vue總覽',
            component: () => import('@/lessons/Overview.vue')
          },
          {
            path: 'practice',
            name: '練習',
            component: () => import('@/lessons/Practice.vue'),
          },
          {
            path: 'api',
            name: 'API',
            component: () => import('@/lessons/API.vue')
          },
          {
            path: 'v-model',
            name: 'v-model',
            component: () => import('@/lessons/Vmodel.vue')
          },
        ]
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
