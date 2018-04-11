<template>
  <div v-bind:class="addPadding">
    <div style="display: flex; justify-content: flex-start">

      <vk-icon-button  @click="show = !show" v-bind:icon="changeIcon" class="uk-margin-small-top uk-margin-medium-left"></vk-icon-button>

      </vk-icon-button>
      <router-link to="/preview" >
          <vk-icon-button icon="laptop" class="uk-margin-small-top uk-margin-small-left"></vk-icon-button>
      </router-link>

    </div>

      <div>
        <h2>The Landing Admin</h2>
        <!--Secciones-->
        <router-view></router-view>
        <!--Menu-->
        <vk-offcanvas-content >
          <vk-offcanvas :show.sync="show" style="margin-top: 80px">
            <ul class="uk-nav-default uk-nav-parent-icon" uk-nav>
              <h2>Sections</h2>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header"><router-link to="/admin/navbar" >Navbar</router-link></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header"><router-link to="/admin/main" >Main</router-link></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header"><router-link to="/admin/numbers" >Numbers</router-link></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header"><router-link to="/admin/cards" >Cards</router-link></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header"><router-link to="/admin/message" >Message</router-link></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header"><router-link to="/admin/testimonials" >Testimonials</router-link></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header"><router-link to="/admin/footer" >Footer</router-link></li>
            </ul>
          </vk-offcanvas>
        </vk-offcanvas-content>

      </div>



  </div>

</template>

<script>
  import VkIconButton from 'vuikit/src/library/icon/components/icon-button'
  import LandingPage from '../landing/LandingPage.vue'

  export default {
    components: {
      LandingPage,
      VkIconButton},
    name: 'AdminPage',
    data () {
      return {
        show:false,
      }
    },
    computed: {
      addPadding: function() {
        return this.show ? 'with-padding' : 'no-padding';
      },
      changeIcon: function() {
        return this.show ? 'close' : 'menu'
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .with-padding{
    padding-left: 350px;
    transition: all .3s ease;
  }
  .no-padding{
    padding-left: 0px;
    transition: all .3s ease;
  }

</style>
