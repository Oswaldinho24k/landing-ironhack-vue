import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LandingPage from '@/components/landing/LandingPage'
import Signup from '@/components/users/Signup'
import Login from '@/components/users/Login'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      props:true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      props:true
    }
  ]
})
