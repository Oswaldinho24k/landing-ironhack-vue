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
            v-model="main.show"
            class="uk-button uk-button-default uk-form-width-large"
            style="max-width: 100%"
            type="button" >{{main.show}}</button>
        </div>
      </div>


      <div class="uk-margin">
        <label class="uk-form-label" for="form-horizontal-text">Texto</label>
        <div class="">
          <input class="uk-input uk-form-width-large" id="form-horizontal-text" type="text" placeholder="Some text..." v-model="main.message">
        </div>
      </div>

      <div class="uk-margin" uk-margin>
        <label class="uk-form-label" for="image">Imágen</label>
        <div uk-form-custom="target: true" >
          <input type="file" id="image" @change="uploadImage($event)">
          <input class="uk-input uk-form-width-large" type="text" placeholder="Select file" disabled v-model="main.image">
        </div>
      </div>
      <div class="uk-margin">
        <vk-button  htmlType="submit" type="secondary" class="uk-width-1-1" v-bind:disabled="handleButton">Save</vk-button>
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
    name: 'MainSection',
    data () {
      return {
        messages:[],
        loader:false,
        disable:true,
        main:{
          message:'',
          image:'',
          show:true
        }
      }
    },
    computed:{
      handleButton: function() {
        this.main.image?this.disable=false:this.disable=true;
        return this.disable;
      }
    },
    beforeMount(){
      console.log(this.$route)
      this.getData()
    },
    methods:{
      getData:function(){
        firebase.database().ref(`/pages/${this.$route.params.page}/main`).on('value', (res)=>{
          console.log(res.val())
          this.main = res.val()
        })
      },
      handleComponent:function(){
        this.main.show = !this.main.show
      },
      saveData:function(e){
        e.preventDefault()
        firebase.database().ref(`/pages/${this.$route.params.page}/main`).set(this.main)
          .then(r=>{
            this.messages.push({message:` Info de esta sección actualizada ;)`, status:'success'})
          }).catch(e=>{
          this.messages.push({message:` ${e.message}`, status:'danger'})
        })
      },
      uploadImage:function(e){
        console.log(e.target.files[0])
        let uploadTask = firebase.storage().ref(`/pages/${this.$route.params.page}/main`).put(e.target.files[0])

        uploadTask.on('state_changed', (snapshot)=>{
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          this.loader=true;
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
        }, (error)=> {
          // Handle unsuccessful uploads
        }, ()=> {
          //let downloadURL = uploadTask.snapshot.downloadURL;
          this.main.image = uploadTask.snapshot.downloadURL;
          this.disable = false;
          this.loader=false;
        });
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
