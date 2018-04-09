<template>
  <div class="log-container">
    <vk-card padding="large">
      <h3>SIGN UP</h3>
      <form v-on:submit="signUp">

        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
        </p>
        <vk-notification :messages.sync="messages">
          <div slot-scope="{ message }">
            {{ message }}
          </div>
        </vk-notification>

        <div class="uk-margin">
          <div class="uk-inline">
            <span class="uk-form-icon" ><vk-icon icon="world"></vk-icon></span>
            <input class="uk-input" type="email" v-model="user.email">
          </div>
        </div>

        <div class="uk-margin">
          <div class="uk-inline">
            <span class="uk-form-icon" ><vk-icon icon="lock"></vk-icon></span>
            <input class="uk-input" type="password" v-model="user.password">
          </div>
        </div>
        <div class="uk-margin">
          <div class="uk-inline">
            <span class="uk-form-icon"><vk-icon icon="lock"></vk-icon></span>
            <input class="uk-input" type="password" v-model="user.password2">
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
  export default {
    name: 'Signup',
    data () {
      return {
        errors:[],
        messages:[],
        user:{
          email:'',
          password:''
        }
      }
    },

    methods: {
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
          firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
            .then(r=>{
              let user = {
                uid:r.uid,
                email:r.email
              }
              this.saveUser(user)
              this.messages.push({message:`Bienvenido ${r.email}`, status:'success'})
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
