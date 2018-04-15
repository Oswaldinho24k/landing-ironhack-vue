<template>
  <div class="hello">
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
    <message-component></message-component>
    <!--Image Background-->
    <!--<div class="uk-background-fixed uk-background-center-center uk-height-medium uk-width-large"
          style="width: 100%"
         :style="{ 'background-image': 'url(' + landing.main.image + ')' }">-->
    <div class="uk-background-fixed uk-background-center-center uk-height-medium uk-width-large"
         style="width: 100%; background-image: url('https://scontent.fmex9-1.fna.fbcdn.net/v/t31.0-8/26910863_2117437818485111_1123558402019818654_o.jpg?_nc_cat=0&_nc_eui2=v1%3AAeGZesvyLOpObUZLjl9n5cVMa7JiQzuFgV6W_yi2IeW8OrNHRohvpBS0SL_rO-0N3HqcX1L674NSHbcqCOulZaQhxtg8erpA04ROIJZEU04dlQ&oh=bb52e7d4691500edd5abb7e85a4e9b5e&oe=5B63DF2D')">
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

  export default {
    name: 'LandingPage',
    components:{
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
    },
    data () {
      return {
        landing:{
          main:{},
          numbers:{},

        },
        lol:'perro'
      }
    },
    methods: {
      getData:function(){
        firebase.database().ref('landing').on('value', (res)=>{
          console.log(res.val())
          this.landing = res.val()
        })
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >


</style>
