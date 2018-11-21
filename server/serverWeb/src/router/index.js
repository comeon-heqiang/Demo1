import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/pages/index'
import Login from '@/pages/login'
import Register from '@/pages/register'
import adminList from '@/pages/admin'
import Events from '@/pages/events'
import Leader from "@/pages/Leader"
import editLeader from '@/pages/editLeader'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      redirect:"/main"
    },
    {    
      path: '/main',
      name: 'Main',
      component: Main,
      iconCls: 'el-icon-message',
      children: [{
          path: '/main/admin',
          name: 'admin',
          navName: '管理员列表',
          iconCls: 'icon-geren',
          component: adminList
        },
        {
          path: '/main/events',
          name: 'events',
          navName: '活动列表',
          iconCls: 'icon-geren',
          component: Events
        }, {
          path: "/main/leader",
          navName: "领队列表",
          name: "Leader",
          component: Leader,
          // children: [{
          //   path: '/main/leader/edit/:id',
          //   name: "editLeader",
          //   component: editLeader
          // }]
        }, 
        {
          path: '/main/leader/edit/:id',
          name: "editLeader",
          component: editLeader,
          hidden: true
        },{
          path:'/main/leader/createLeader',
          name:"createLeader",
          component:editLeader
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
    }

  ]
})
