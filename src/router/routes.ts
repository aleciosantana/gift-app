import { RouteRecordRaw } from 'vue-router'
import { routes as pages } from '@/views'

const root: RouteRecordRaw = {
  path: '/',
  redirect: '/home'
}

const routes: Array<RouteRecordRaw> = [root, ...pages]

export default routes
