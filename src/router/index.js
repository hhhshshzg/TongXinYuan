import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '首页',
      component: HomeView
    },
    {
      path: '/hot',
      name: '热门',
      // route level code-splitting
      // this generates a separate chunk (hot.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/hotView.vue')
    },
    {
      path: '/PersonalHomepage',
      name: '个人主页',
      component: () => import('../views/PersonalHomepage/PersonalHomepage.vue'),
      children: [
        {
          // 设置为空，表示默认显示该页面
          path: '',
          name: '我的主页',
          component: () => import('../views/PersonalHomepage/views/myAbout.vue')
        },
        {
          path: 'myFocus',
          name: '我的关注',
          component: () => import('../views/PersonalHomepage/views/myFocus.vue')
        },
        {
          path: 'myFans',
          name: '我的粉丝',
          component: () => import('../views/PersonalHomepage/views/myFans.vue')
        },
        {
          path: 'myCollection',
          name: '我的收藏',
          component: () => import('../views/PersonalHomepage/views/myCollection.vue')
        },
        {
          path: 'myLike',
          name: '我的赞',
          component: () => import('../views/PersonalHomepage/views/myLike.vue')
        },
        {
          path: 'myMessage',
          name: '我的消息',
          component: () => import('../views/PersonalHomepage/views/myMessage.vue')
        },
        {
          path: 'mySetting',
          name: '我的设置',
          component: () => import('../views/PersonalHomepage/views/mySetting.vue')
        },
        {
          path: 'myPost',
          name: '发帖',
          component: () => import('../views/PersonalHomepage/views/myPost.vue')
        },
        {
          path: 'aboutMe',
          name: '关于我们',
          component: () => import('../views/PersonalHomepage/views/aboutMe.vue')
        },
        {
          path: 'myFeedback',
          name: '意见反馈',
          component: () => import('../views/PersonalHomepage/views/myFeedback.vue')
        }
      ]
    },
    {
      path: '/login',
      name: '登录页面',
      component: () => import('../views/Login & Register/Login.vue')
    }
  ]
})

export default router
