<template>

    <div v-show="show" class="uk-height-large uk-background-cover uk-light uk-flex" uk-parallax="bgy: -150"
         style="height:100vh;"
         :style="{ 'background-image': 'url(' + image + ')' }">
    >
      <div class="uk-overlay-default uk-position-cover" style="background-color: rgba(255,255,255,0.5)">
        <div class="uk-position-center">
          <h1 class=" uk-text-center uk-margin-auto uk-margin-auto-vertical" style="color: black">{{message}}</h1>
        </div>

      </div>

    </div>

</template>

<script>
  export default {
    name: 'MainComponent',
    data () {
      return {}
    },
    props:['message', 'image', 'show']
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
