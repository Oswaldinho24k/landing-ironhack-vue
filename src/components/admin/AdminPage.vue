<template>
  <div>
    <div v-bind:class="addPadding">

      <div style="display: flex; justify-content: flex-start; position:fixed">
        <vk-icon-button  @click="show = !show" v-bind:icon="changeIcon" class="uk-margin-large-top uk-margin-medium-left"></vk-icon-button>
        <router-link :to="{name:'pages',  params:{page:pagina}}" >
          <vk-icon-button icon="laptop" class="uk-margin-large-top uk-margin-small-left"></vk-icon-button>
        </router-link>



      </div>
      <div class="contenido">
        <h1>Editando la página {{pagina}}</h1>
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
              <li class="uk-nav-header"><router-link :to="{name:'admin-nav',  params:{page:pagina}}" >Navbar</router-link></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header"><router-link :to="{name:'admin-main',  params:{page:pagina}}" >Main</router-link></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header"><router-link :to="{name:'admin-numb',  params:{page:pagina}}" >Stats</router-link></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header"><router-link :to="{name:'admin-cards',  params:{page:pagina}}" >Cards</router-link></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header"><router-link :to="{name:'admin-mess',  params:{page:pagina}}" >Message</router-link></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header"><router-link :to="{name:'admin-test',  params:{page:pagina}}" >Testimonials</router-link></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header"><router-link :to="{name:'admin-footer',  params:{page:pagina}}" >Footer</router-link></li>
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
        pagina:''
      }
    },
    beforeMount(){
      this.checkIfUser()
      console.log(this.$route)
      this.pagina=this.$route.params.page;
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

  .contenido{
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
