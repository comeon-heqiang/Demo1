import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index'
import Login from '@/pages/login'
import Register from '@/pages/register'
Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/login',
    name: "Login",
    component: Login
  }, {
    path: '/register',
    name: 'register',
    component: Register
  }]
})
