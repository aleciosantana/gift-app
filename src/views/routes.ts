import { RouteRecordRaw } from 'vue-router'
import { routes as home } from './home-view'
import { routes as dashboard } from './dashboard-view'

const routes: Array<RouteRecordRaw> = [home, dashboard]

export default routes
