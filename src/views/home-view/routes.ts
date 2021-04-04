import { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
  path: '/home',
  component: () => import(/* webpackChunkName: "home" */ './HomeView.vue')
}

export default route
