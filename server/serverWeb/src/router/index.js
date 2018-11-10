import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index'
import Login from '@/pages/login'
import Register from '@/pages/register'
import adminList from '@/pages/admin'
Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index,
    iconCls: 'el-icon-message',
    children: [{
        path: '/admin',
        name: 'admin',
        navName: '管理员列表',
        iconCls: 'icon-geren',
        component: adminList
      },
      {
        path: '/admin2',
        name: 'admin',
        navName: '管理员列表2',
        iconCls: 'icon-geren',
        component: adminList
      }
    ]
  }, {
    path: '/login',
    name: "Login",
    component: Login,
    hidden: true
  }, {
    path: '/register',
    name: 'register',
    component: Register,
    hidden: true
  }]
})
