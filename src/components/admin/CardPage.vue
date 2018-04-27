<template>
  <div style="position: relative" >
    <router-link :to="{name:'adminpage', params:{page:p.name}}">
      <vk-icon-button
        v-show="logged"
        class="uk-margin-small-top uk-margin-small-right"
        style="position: absolute;top:0; right:0; z-index: 2"
        icon="pencil"></vk-icon-button>
    </router-link>
    <router-link :to="{name:'pages', params:{page:p.name}}">
      <vk-card>
        <div slot="media-top" class="myclass">

          <img :src="p.main.image" alt="" >
        </div>
        <div class="myclass2">
          <vk-card-title>{{p.name}}</vk-card-title>
          <p>{{p.summary}}</p >
        </div>
      </vk-card>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'CardPage',
    data () {
      return {}
    },
    props:['p', 'logged']
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

  .myclass{
    width: 100%;
    height: 260px;
    overflow: hidden;
  }
  .myclass2{
    width: 100%;
    height: 140px;
    overflow: hidden;
  }

</style>
