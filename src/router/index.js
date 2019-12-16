import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/frames/FrameBasic.vue'),
    children: [
      {
        path: '',
        name: '總覽',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'practice',
        name: '練習',
        component: () => import('@/views/Practice.vue'),
      },
      {
        path: 'vuex',
        name: 'Vuex',
        component: () => import('@/views/Vuex.vue')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
