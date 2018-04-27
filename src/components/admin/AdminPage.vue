<template>
  <div>
    <div v-bind:class="addPadding">

      <div style="display: flex; justify-content: flex-start; position:fixed">

        <vk-icon-button  @click="show = !show" v-bind:icon="changeIcon" class="uk-margin-large-top uk-margin-medium-left"></vk-icon-button>
        <router-link to="/preview" >
          <vk-icon-button icon="laptop" class="uk-margin-large-top uk-margin-small-left"></vk-icon-button>
        </router-link>

      </div>

      <div>
        <!--Secciones-->
        <div style="padding: 5% 15%">
          <router-view></router-view>
        </div>
        <!--Menu-->
        <vk-offcanvas-content >
          <vk-offcanvas :show.sync="show" stuck style="margin-top: 80px;">
            <ul class="uk-nav-default uk-nav-parent-icon" uk-nav>
              <h2>Sections</h2>
              <li class="uk-nav-divider"></li>
              <!--<li class="uk-nav-header"><router-link to="/admin/navbar" >Navbar</router-link></li>
              <li class="uk-nav-divider"></li>-->
              <li class="uk-nav-header"><router-link to="/admin/main" >Main</router-link></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header"><router-link to="/admin/numbers" >Stats</router-link></li>
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
  </div>

</template>

<script>
  import VkIconButton from 'vuikit/src/library/icon/components/icon-button'
  import LandingPage from '../landing/LandingPage.vue'
  import firebase from 'firebase'
  import Navbar from '../navbar/Navbar.vue'

  export default {
    components: {
      Navbar,
      LandingPage,
      VkIconButton},
    name: 'AdminPage',
    data () {
      return {
        landing:{},
        show:false,
      }
    },
    beforeMount(){
      this.checkIfUser()
    },

    computed: {
      addPadding: function() {
        return this.show ? 'with-padding' : 'no-padding';
      },
      changeIcon: function() {
        return this.show ? 'close' : 'menu'
      }
    },
    methods:{
      checkIfUser:function(){
        firebase.auth().onAuthStateChanged(user=>{
          if(user){
            console.log(user)
            this.user = user.email
            this.logged = true
          }else{
            console.log('nel')
            this.logged = false
            this.$router.push('/login')
          }
        })
      },

    }

  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .with-padding{

    transition: all .3s ease;
    padding: 2% 2% 1% 400px;
  }
  .no-padding{

    padding: 1% 2%;
    transition: all .3s ease;
  }

</style>
