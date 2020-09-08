import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'Home',
    component: Home
  },
  {
    path: '/map',
    name: 'Map',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Map.vue')
  },
  {
    path: '/car',
    name: 'Car',
    component: () => import('../views/Car.vue')
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
    component: () => import('../views/Manage.vue'),
    children: [{
      path: '/manage/event',
      name: 'manageEvent',
      component: () => import('../components/manage/event'),
    }, {
      path: '/manage/map',
      name: 'manageMap',
      component: () => import('../components/manage/map'),
    },
    {
      path: '/manage/car',
      name: 'manageCar',
      component: () => import('../components/manage/car'),
    },]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
