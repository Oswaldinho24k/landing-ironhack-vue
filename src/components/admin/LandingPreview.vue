<template>
    <div>
      <vk-sticky bottom="#offset">
        <vk-card>
          <vk-button v-on:click="goBack"><vk-icon icon="file-edit"></vk-icon> Editar</vk-button>
          <router-link to="/" ><vk-button><vk-icon icon="home"></vk-icon> Home</vk-button></router-link>


        </vk-card>

      </vk-sticky>
      <landing-page></landing-page>
    </div>
</template>

<script>
  import LandingPage from '../landing/LandingPage.vue'
  import VkButtonLink from 'vuikit/src/library/button/components/button-link'
  import VkIcon from 'vuikit/src/library/icon/components/icon'

  export default {
    components: {
      VkIcon,
      VkButtonLink,
      LandingPage},
    name: 'LandingPreview',
    data () {
      return {}
    },
    methods:{
      goBack:function(){
        this.$router.back()
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
