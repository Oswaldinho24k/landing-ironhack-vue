<template>
  <router-link :to="{name:'pages', params:{page:p.name}}">
    <vk-card>
      <div slot="media-top">
        <img :src="p.main.image" alt="">
      </div>
      <div>
        <vk-card-title>{{p.name}}</vk-card-title>
        <p>{{p.summary}}</p>
      </div>
    </vk-card>
  </router-link>
</template>

<script>
  export default {
    name: 'CardPage',
    data () {
      return {}
    },
    props:['p']
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
    text-decoration: none;
    color: black;
  }
  a:hover{
    text-decoration: none;
  }

</style>
