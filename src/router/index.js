import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainPage from '../components/base/MainPage'
import LoginPage from '../components/base/LoginPage'
import ContentPage from '../components/content/ContentPage'
import ContentDetailPage from '../components/content/ContentDetailPage'
import ContentPublishPage from '../components/content/ContentPublishPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: '/content-page',
          name: 'ContentPage',
          component: ContentPage
        },
        {
          path: '/content-detail-page',
          name: 'ContentDetailPage',
          component: ContentDetailPage
        },
        {
          path: '/content-publish-page',
          name: 'ContentPublishPage',
          component: ContentPublishPage
        },
      ],
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
        {
          path: '/content-detail-page',
          name: 'ContentDetailPage',
          component: ContentDetailPage
        },
        {
          path: '/content-publish-page',
          name: 'ContentPublishPage',
          component: ContentPublishPage
        },
      ],
    },
  ]
})
