import Vue from 'vue'
import Router from 'vue-router'

import movie from '../pages/movie';
import book from '../pages/book';
import boardcast from '../pages/boardcast';
import group from '../pages/group';
import index from '../pages/index';
import register from '../pages/register';
import login from '../pages/login'
Vue.use(Router)

export default new Router({
  routes: [
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
    }
  ]
})
