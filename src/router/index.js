import Vue from 'vue'
import Router from 'vue-router'

import movie from '../pages/movie';
import book from '../pages/book';
import boardcast from '../pages/boardcast';
import group from '../pages/group';
import index from '../pages/index';
import register from '../pages/register';
import login from '../pages/login';
import change from '../pages/change';
import detail from '../pages/detail';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
    {
      path: '/boardcast',
      name: 'boardcast',
      component: boardcast
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/change',
      name: 'change',
      component: change
    }    
  ]
})
