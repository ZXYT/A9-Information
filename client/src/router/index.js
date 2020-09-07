import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('../views/Map.vue')
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
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
