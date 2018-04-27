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
import MessageSection  from '@/components/admin/MessageSection'
import PagesList from '@/components/admin/PagesList'
import NotFound from '@/components/NotFound'


Vue.use(Router)
//console.log(this.a.history.current.params)



 const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'PagesList',
      component: PagesList,
    },
    {
      path:'/pages/:page',
      name:'pages',
      component:LandingPage,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,

    },
    { path: '/preview',
      component: LandingPreview
    },

   {
      path:'/admin/:page/',
      name: 'AdminPage',
      component: AdminPage,
      children: [

        { path: 'navbar', component: MainSection },
        { path: 'main', component: MainSection },
        { path: 'numbers', component: NumbersSection },
        { path: 'cards', component: CardsSection },
        { path: 'message', component: MessageSection },
        { path: 'testimonials', component: TestimonialsSection },
        { path: 'footer', component: MainSection },
      ]
    },
    {
      path:'*',
      component:NotFound
    }

]
})

export default router
