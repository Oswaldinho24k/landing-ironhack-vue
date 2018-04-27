<template>
  <vk-navbar style=" z-index: 980; width: 100%">

    <vk-navbar-nav>
      <li class="uk-parent uk-active uk-logo"><router-link to="/" >
        <img class="nav-logo"
             src="https://static1.squarespace.com/static/56e2e0c520c6472a2586add2/t/594d23b7e6f2e1d4a11b69a3/1498231447084/?format=500w" alt="">
      </router-link></li>
    </vk-navbar-nav>

    <vk-navbar-nav slot="center">
      <li class="uk-parent uk-active uk-logo"><router-link to="/" >Admin</router-link></li>
    </vk-navbar-nav>


    <vk-navbar-nav slot="right">

      <!--<li v-show="!logged" class="uk-parent"><router-link to="/login" >Log In</router-link></li>-->

      <vk-navbar-nav-dropdown title="Admin" v-show="logged">
        <vk-navbar-nav-dropdown-nav>
          <li class="uk-parent uk-active">{{user}}</li>

          <li class="uk-parent uk-active"><router-link to="/admin/" >Admin</router-link></li>
          <li class="uk-parent uk-active"><router-link to="/signup" >Register</router-link></li>
          <vk-nav-item-divider></vk-nav-item-divider>

          <vk-nav-item title="Log Out" active v-on:click="logOut"></vk-nav-item>
        </vk-navbar-nav-dropdown-nav>
      </vk-navbar-nav-dropdown>


    </vk-navbar-nav>

  </vk-navbar>
</template>

<script>
  import firebase from 'firebase'
  export default {
    name: 'Navbar',
    data () {
      return {
        logged:false,
        user:''
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

          }
        })
      },
      logOut:function(){
        firebase.auth().signOut()
          .then(()=>{
          console.log('byebye')
            this.$router.push('/')
          })
      },

    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-logo{
    width: 30px;
  }

</style>
