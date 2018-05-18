<template>
  <div class="log-container">
    <vk-card padding="large">
      <h3>SIGN UP</h3>
      <form v-on:submit="signUp">

        <vk-notification :messages.sync="messages">
          <div slot-scope="{ message }">
            {{ message }}
          </div>
        </vk-notification>

        <div class="uk-margin">
          <div class="uk-inline">
            <span class="uk-form-icon" ><vk-icon icon="world"></vk-icon></span>
            <input class="uk-input" type="email" v-model="newUser.email">
          </div>
        </div>

        <div class="uk-margin">
          <div class="uk-inline">
            <span class="uk-form-icon" ><vk-icon icon="lock"></vk-icon></span>
            <input class="uk-input" type="password" v-model="newUser.password">
          </div>
        </div>
        <div class="uk-margin">
          <div class="uk-inline">
            <span class="uk-form-icon"><vk-icon icon="lock"></vk-icon></span>
            <input class="uk-input" type="password" v-model="newUser.password2">
          </div>
        </div>
        <div class="uk-margin">
          <div class="uk-inline">
            <vk-button  htmlType="submit" type="secondary">Sign Up</vk-button>
          </div>
        </div>
      </form>
    </vk-card>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import {secondaryApp} from '../../main'
  export default {
    name: 'Signup',
    data () {
      return {
        errors:[],
        messages:[],
        user:{},
        newUser:{
          email:'',
          password:'',
          password2:''
        },
      }
    },
    beforeMount(){
      //this.checkIfUser()
    },
    methods: {
      checkIfUser:function(){
        firebase.auth().onAuthStateChanged(user=>{
          if(user){
            console.log(user)
            this.user = user.email
            this.logged = true
          }else{
            console.log('nel')
            this.logged = false
            this.$router.push('/')
          }
        })
      },
      saveUser:function(user){
        firebase.database().ref(`/users/${user.uid}`).set(user)
          .then(r=>{console.log(r)})
          .catch(e=>{console.log(e)})
      },

      signUp: function(e){
        this.errors = []
        e.preventDefault()
        if(this.user.password2!==this.user.password){
          this.errors.push('Las contraseñas no coinciden')
        }else{
          secondaryApp.auth().createUserWithEmailAndPassword(this.newUser.email, this.newUser.password2)
            .then(r=>{
              this.newUser={}
              let user = {
                uid:r.uid,
                email:r.email
              }
              this.saveUser(user)
              this.messages.push({message:`Se ha registrado a  ${r.email} con éxito`, status:'success'})
            })
            .catch((error)=> {
              this.messages.push({message:` ${error.message}`, status:'danger'})
            });
        }

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
