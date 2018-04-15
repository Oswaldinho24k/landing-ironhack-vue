<template>
  <div class="uk-child-width-expand@s uk-text-center uk-card-secondary" uk-grid style="padding: 3% 5%;">
    <div v-for="item in list">
      <div class="uk-card" uk-scrollspy="cls: uk-animation-slide-top; repeat: true">
        <h2>{{item.number}}</h2>
        <h4>{{item.title}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NumbersComponent',
    props:['list', 'show'],
    data () {
      return {}
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
