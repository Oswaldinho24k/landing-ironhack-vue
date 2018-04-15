<template>

  <div v-show="show">
    <h2 class="uk-margin-small-top">Testimonials</h2>
    <div class="uk-child-width-expand@s" uk-grid uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 500; repeat: true">
      <div v-for="item in list">

        <div class="uk-card uk-card-body" >
          <img
            :src="item.image"
            alt="" class="test-img">
          <h3 class="uk-card-title">{{item.title}}</h3>
          <p>{{item.text}}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TestimonialsComponent',
    props:['list', 'show'],
    data () {
      return {}
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .test-img{
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }

</style>
