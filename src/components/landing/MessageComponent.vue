<template>
  <div class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top uk-card-secondary"
       style="height:50vh;"
  v-show="show">
    <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
      <h1 uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: 2,1,1; viewport: 0.5;" >{{title}}</h1>
      <p uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; viewport: 0.5;">{{text}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MessageComponent',
    props:['title', 'text', 'show'],
    data () {
      return {}
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
