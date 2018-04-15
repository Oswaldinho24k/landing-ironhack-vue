import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/landing/LandingPage'
import Signup from '@/components/users/Signup'
import Login from '@/components/users/Login'
import AdminPage from '@/components/admin/AdminPage'
import MainSection from '@/components/admin/MainSection'
import NumbersSection from '@/components/admin/NumbersSection'
import CardsSection from '@/components/admin/CardsSection'
import LandingPreview from '@/components/admin/LandingPreview'
import TestimonialsSection  from '@/components/admin/TestimonialsSection'



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
    },
    { path: '/preview',
      component: LandingPreview
    },
    {
      path:'/admin',
      name: 'AdminPage',
      component: AdminPage,
      children: [

        { path: 'navbar', component: MainSection },
        { path: 'main', component: MainSection },
        { path: 'numbers', component: NumbersSection },
        { path: 'cards', component: CardsSection },
        { path: 'message', component: MainSection },
        { path: 'testimonials', component: TestimonialsSection },
        { path: 'footer', component: MainSection },
      ]
    }
]
})
