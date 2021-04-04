import { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
  path: '/dashboard',
  component: () => import(/* webpackChunkName: "dashboard" */ './DashboardView.vue')
}

export default route
