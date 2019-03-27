import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/dashboard.vue'
import Projects from './views/products.vue'
import Team from './views/team.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/projects',
      name: 'projectts',
      component: Projects
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    }
  ]
})
