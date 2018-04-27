<template>
  <div id="app">
    <vk-icon-button @click="show = true" class="meu-boton" icon="menu" v-show="logged">

    </vk-icon-button>
    <vk-offcanvas-content>


      <vk-offcanvas flipped  :show.sync="show" class="mi-canvas">
        <vk-offcanvas-close @click="show = false"></vk-offcanvas-close>
        <navbar></navbar>
      </vk-offcanvas>
    </vk-offcanvas-content>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>


  import firebase from 'firebase'
  import Navbar from './components/navbar/Navbar.vue'
  import VkIcon from 'vuikit/src/library/icon/components/icon'
export default {
  name: 'App',
  components:{
    VkIcon,
    Navbar},
  data(){
    return{
      logged:false,
      show:false

    }
  },
  beforeMount(){
    this.checkIfUser()
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
          this.show=false

        }
      })
    },
  },
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;

  }
  .meu-boton{
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 1000;
  }

  .main .log-container{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 100px);
    margin-top: -100px;
    padding: 0 5%;
  }
  .main .log-container .uk-card-body{
    background-color: #f8f8f88;
  }
  .mi-canvas{

  }
</style>
