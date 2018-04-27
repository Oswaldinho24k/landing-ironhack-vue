<template>
  <ul class="uk-nav-default uk-nav-parent-icon" uk-nav>
    <li class=" uk-active uk-logo">
      <router-link to="/" >
      <img class="nav-logo"
           src="https://static1.squarespace.com/static/56e2e0c520c6472a2586add2/t/594d23b7e6f2e1d4a11b69a3/1498231447084/?format=500w" alt="">
      </router-link>
    </li>
    <li class=" uk-active uk-logo"><router-link to="/" >Admin</router-link></li>
    <li class="uk-nav-divider"></li>
    <li class=" uk-active">{{user}}</li>
    <li class="uk-nav-divider"></li>
    <li class=" uk-active"><router-link to="/signup" >Register</router-link></li>
    <li class="uk-nav-divider"></li>
    <li class="uk-nav-header" v-on:click="logOut">LogOut</li>
  </ul>

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
