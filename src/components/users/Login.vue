<template>

  <div class="log-container">
    <vk-card padding="large">
      <h3>LOG IN</h3>
      <form v-on:submit="login">
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
            <vk-button  htmlType="submit" type="secondary">Log In</vk-button>
          </div>
        </div>
      </form>
    </vk-card>

    <vk-notification :messages.sync="messages">
      <div slot-scope="{ message }">
        {{ message }}
      </div>
    </vk-notification>

  </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    name: 'Login',
    data () {
      return {
        messages:[],
        user:{
          email:'',
          password:''
        }
      }
    },
    methods: {
      login: function(e){
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
          .then(r=>{
            console.log(r)
            let displayText =''
            r.displayName?displayText=r.displayName:displayText=r.email;
            this.messages.push({message:`Bienvenido ${displayText}`, status:'success'})
            this.$router.push('/admin/')
          })
          .catch((error)=> {
            this.messages.push({message:` ${error.message}`, status:'danger'})
        });
      },

    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
