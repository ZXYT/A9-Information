import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/map',
    name: 'Map',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "map" */ '@/views/Map.vue')
  },
  {
    path: '/car',
    name: 'Car',
    component: () => import('@/views/Car.vue')
  },
  {
    path: '/manage',
    name: 'Manage',
    redirect: '/manage/event',
    beforeEnter: async (to, from, next) => {
      await store.dispatch('loginUser/whoAmI')
      if (store.state.loginUser.data) {
        next()
      } else {
        alert('请先登录!')
        next('/login')
      }
    },
    component: () => import( /* webpackChunkName: "manage" */ '@/views/Manage.vue'),
    children: [{
        path: 'event',
        name: 'ManageEvent',
        component: () => import( /* webpackChunkName: "manage" */ '@/views/manage/Event'),
      }, {
        path: 'map',
        name: 'ManageMap',
        component: () => import('@/views/manage/Map'),
      },
      {
        path: 'car',
        name: 'ManageCar',
        component: () => import('@/views/manage/Car'),
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router