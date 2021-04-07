import { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
  path: '/dashboard',
  component: () => import(/* webpackChunkName: "dashboard" */ './DashboardView.vue'),
  children: [
    {
      path: 'create',
      component: () => import(/* webpackChunkName: "product-modal" */ './view/ProductModal.vue')
    }
  ]
}

export default route
