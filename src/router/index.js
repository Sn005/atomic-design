import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import NotificationListPage from '@/components/pages/NotificationListPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NotificationListPage',
      component: NotificationListPage
    }
  ]
})
