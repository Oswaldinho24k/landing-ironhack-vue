<template>
  <div class="hello">
    <!--Main-->
    <main-component></main-component>
    <!--Numbers-->
    <numbers-component></numbers-component>
    <!--Cards-->
    <cards-component></cards-component>
    <!--Message-->
    <message-component></message-component>
    <!--Image Background-->
    <div class="uk-background-fixed uk-background-center-center uk-height-medium uk-width-large"
          style="width: 100%"
         :style="{ 'background-image': 'url(' + landing.main.image + ')' }">
    </div>
    <!--Testimonials-->
    <testimonials-component></testimonials-component>
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
    created(){
      this.getData()
    },
    data () {
      return {
        landing:{},
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
  .hello{
    min-height: 150vh;
    max-width: 100%;
  }
  .test-img{
    width:150px;
    height: 150px;
    border-radius: 50%;
  }

</style>
