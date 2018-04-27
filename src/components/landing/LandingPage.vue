<template>
  <div class="hello">
    <nav-component></nav-component>
    <!--Main-->
    <main-component
      :show=landing.main.show
      :image=landing.main.image
      :message=landing.main.message></main-component>
    <!--Numbers-->
    <numbers-component
      :show="landing.numbers.show"
      :list="landing.numbers.list"></numbers-component>
    <!--Cards-->
    <cards-component
    :show="landing.cards.show"
    :list="landing.cards.list"></cards-component>
    <!--Message-->
    <message-component
    :text="landing.message.text"
    :title="landing.message.title"
    :show="landing.message.show"></message-component>
    <!--Image Background-->
    <!--<div class="uk-background-fixed uk-background-center-center uk-height-medium uk-width-large"
          style="width: 100%"
         :style="{ 'background-image': 'url(' + landing.main.image + ')' }">-->
    <div class="uk-background-fixed uk-background-center-center uk-height-medium uk-width-large"
         style="width: 100%;"
          :style="{ 'background-image': 'url(' + landing.main.image + ')' }">

    </div>
    <!--Testimonials-->
    <testimonials-component
      :show="landing.testimonials.show"
      :list="landing.testimonials.list"></testimonials-component>
    <!--Footer-->
    <footer-component></footer-component>

  </div>
</template>

<script>

  //import {db} from '../../firebase'
  import firebase from 'firebase'
  import MainComponent from './MainComponent.vue'
  import NumbersComponent from './NumbersComponent.vue'
  import CardsComponent from './CardsComponent.vue'
  import MessageComponent from './MessageComponent.vue'
  import TestimonialsComponent from './TestimonialsComponent.vue'
  import FooterComponent from './FooterComponent.vue'
  import Navbar from '../navbar/Navbar.vue'
  import NavComponent from './NavComponent.vue'

  export default {
    name: 'LandingPage',
    components:{
      NavComponent,
      Navbar,
      MainComponent,
      NumbersComponent,
      CardsComponent,
      MessageComponent,
      TestimonialsComponent,
      FooterComponent,
    },
    /*firebase:{
      landing:db.ref('landing')
    },*/
    beforeMount(){
      this.getData()
      console.log(this.$route)
    },
    data () {
      return {
        landing:{
          main:{
            show:true,
            list:[],
            message:'',
            img:''
          },
          numbers:{
            show:true,
            list:[],
            message:'',
            img:''
          },
          cards:{
            show:true,
            list:[],
            message:'',
            img:''
          },
          message:{
            show:true,
            list:[],
            message:'',
            img:''
          },
          testimonials:{
            show:true,
            list:[],
            message:'',
            img:''
          }


        },
      }
    },
    methods: {
      getData:function(){
        firebase.database().ref(`/pages/${this.$route.params.page}`).on('value', (res)=>{
          console.log(res.val())
          if(res.val()===null){
            this.$router.push('/not-found')
          }else{
            this.landing = res.val()
          }
        })
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >


</style>
