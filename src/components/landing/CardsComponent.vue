<template>
 <div v-show="show">
   <div class="uk-child-width-expand@s uk-text-center" uk-grid style="padding: 2% 5%; margin-bottom: 30px;" >
     <div v-for="item in list">
       <div class="uk-card uk-card-default uk-grid-margin myclass" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
         <div class="uk-card-media-top">
           <img :src="item.image" alt="">
         </div>
         <div class="uk-card-body">
           <h3 class="uk-card-title">{{item.title}}</h3>
           <p>{{item.text}}</p>
         </div>
       </div>
     </div>

   </div>
 </div>
</template>

<script>
  export default {
    name: 'CardsComponent',
    props:['show', 'list'],
    data () {
      return {}
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .myclass{
    height: 500px;
    overflow-y: hidden;
  }


</style>
