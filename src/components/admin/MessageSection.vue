<template>
  <div>
    <h2>Main Section</h2>
    <loader v-if="loader"></loader>


    <form action="" class="uk-form-horizontal uk-margin-medium" v-on:submit="saveData">

      <div class="uk-margin">
        <label for="button" class="uk-form-label">Activo</label>
        <div>
          <button
            id="button"
            v-on:click="handleComponent"
            v-model="message.show"
            class="uk-button uk-button-default uk-form-width-large"
            style="max-width: 100%"
            type="button" >{{message.show}}</button>
        </div>
      </div>


      <div class="uk-margin">
        <label class="uk-form-label" for="form-horizontal">Title</label>
        <div class="">
          <input class="uk-input uk-form-width-large" id="form-horizontal" type="text" placeholder="Some text..." v-model="message.title">
        </div>
      </div>

      <div class="uk-margin">
        <label class="uk-form-label" for="form-horizontal-text">Texto</label>
        <div class="">
          <textarea class="uk-textarea uk-form-width-large" id="form-horizontal-text" type="text" placeholder="Some text..." v-model="message.text"></textarea>
        </div>
      </div>

      <div class="uk-margin">
        <vk-button  htmlType="submit" type="secondary" class="uk-width-1-1">Save</vk-button>
      </div>
    </form>


    <!--<main-component-->
    <!--:show=main.show-->
    <!--:image=main.image-->
    <!--:message=main.message></main-component>-->



    <vk-notification :messages.sync="messages">
      <div slot-scope="{ message }">
        {{ message }}
      </div>
    </vk-notification>

  </div>
</template>

<script>
  import firebase from 'firebase'
  import Loader from '../common/Loader.vue'
  import MainComponent from '../landing/MainComponent.vue'
  export default {

    components: {
      MainComponent,
      Loader},
    name: 'MessageSection',
    data () {
      return {
        messages:[],
        loader:false,
        disable:true,
        message:{
          text:'',
          title:'',
          show:true
        }
      }
    },

    beforeMount(){
      this.getData()
    },
    methods:{
      getData:function(){
        firebase.database().ref(`/pages/${this.$route.params.page}/message`).on('value', (res)=>{
          console.log(res.val())
          this.message = res.val()
        })
      },
      handleComponent:function(){
        this.main.show = !this.main.show
      },
      saveData:function(e){
        e.preventDefault()
        firebase.database().ref(`/pages/${this.$route.params.page}/message`).set(this.message)
          .then(r=>{
            this.messages.push({message:` Info de esta sección actualizada ;)`, status:'success'})
          }).catch(e=>{
          this.messages.push({message:` ${e.message}`, status:'danger'})
        })
      },

    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
