import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainPage from '../components/base/MainPage'
import LoginPage from '../components/base/LoginPage'
import ContentPage from '../components/content/ContentPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/login-page',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/main-page',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: '/content-page',
          name: 'ContentPage',
          component: ContentPage
        },
      ],
    },
  ]
})
