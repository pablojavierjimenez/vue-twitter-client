import Vue from 'vue'
import Router from 'vue-router'
import TimeLine from './views/TimeLine.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: TimeLine
    },
    {
      path: '/friends',
      name: 'friends',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Friends.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '/favorites',
      name: 'favorites',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/Favorites.vue')
    },
    {
      path: '/trends',
      name: 'trends',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/Trends.vue')
    }
  ]
})
