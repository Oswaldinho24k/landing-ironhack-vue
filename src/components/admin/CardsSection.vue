<template>
  <div>
    <h2>Cards </h2>
    <loader v-if="loader"></loader>
    <form action="" class="uk-form-horizontal uk-margin-medium" v-on:submit="saveData">

      <div class="uk-margin">
        <label for="button" class="uk-form-label">Activo</label>
        <div>
          <button
            id="button"
            v-on:click="handleComponent"
            v-model="cards.show"
            class="uk-button uk-button-default uk-form-width-large"
            type="button" >{{cards.show}}</button>
        </div>
      </div>
      <hr class="uk-divider-icon">

      <div class="uk-margin">
        <label class="uk-form-label" for="the-title">Title</label>
        <div class="">
          <input class="uk-input uk-form-width-large" id="the-title" type="text" placeholder="Some text..." v-model="newCard.title">
        </div>
      </div>

      <div class="uk-margin">
        <label class="uk-form-label" for="the-text">Text</label>
        <div class="">
          <textarea class="uk-textarea uk-form-width-large" id="the-text" type="text" placeholder="Some text..." v-model="newCard.text"></textarea>
        </div>
      </div>

      <div class="uk-margin" uk-margin>
        <label class="uk-form-label" for="image">Image</label>
        <div uk-form-custom="target: true" >
          <input type="file" id="image" @change="uploadImage($event)">
          <input class="uk-input uk-form-width-large" type="text" placeholder="Select file" disabled v-model="newCard.image">
        </div>
      </div>

      <div class="uk-margin">
        <vk-button htmlType="button" default class="uk-width-1-1" v-on:click="addCard" v-bind:disabled="handleButton">Add</vk-button>
      </div>

      <div class="uk-child-width-expand@s uk-text-center" uk-grid style="position: relative;">
        <div v-for="item in cards.list">
          <div class="uk-card uk-card-default uk-grid-margin myclass">
            <vk-icon-button  v-on:click="deleteCard(item.key)"
                             class="uk-margin-small-top uk-margin-small-right"
                             style="position: absolute;top:0; right:0" icon="trash"></vk-icon-button>
            <div class="uk-card-media-top">
              <img :src="item.image" alt="">
            </div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">{{item.title}}</h3>
              <p style="max-width: 100%">{{item.text}}</p>
            </div>
          </div>
        </div>
      </div>
      <hr class="uk-divider-icon">
      <div class="uk-margin">
        <vk-button  htmlType="submit" type="secondary" class="uk-width-1-1" >Save</vk-button>
      </div>
    </form>
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
  export default {
    name: 'CardsSection',
    components:{Loader},
    data () {
      return {
        messages:[],

        newCard:{
          image:'',
          text:'',
          title:''
        },
        loader:false,
        disable:true,
        cards:{
          list:[],
          show:true
        }
      }
    },
    computed:{
      handleButton: function() {
        this.newCard.image?this.disable=false:this.disable=true;
        return this.disable;
      }
    },
    beforeMount(){
      this.getData()
    },
    methods:{
      getData:function(){
        firebase.database().ref(`/pages/${this.$route.params.page}/cards`).on('value', (res)=>{
          this.cards = res.val();
          console.log(res.val())
        })
      },
      handleComponent:function(){
        this.cards.show = !this.cards.show
      },
      deleteCard:function(key){
        //this.$delete(this.cards.list, key);
        let updates = {}
        updates[`/pages/${this.$route.params.page}/cards/list/${key}`] = null;
        firebase.database().ref().update(updates)
          .then(r=>{
            firebase.storage().ref(`/pages/${this.$route.params.page}/cards/${key}`).delete()
              .then(r=>{
                this.messages.push({message:`Card Eliminada`, status:'success'})
              }).catch(e=>{
              this.messages.push({message:` ${e.message}`, status:'danger'})
            })
          }).catch(e=>{
          this.messages.push({message:` ${e.message}`, status:'danger'})
        })
      },
      addCard:function(){
        let updates = {}

        updates[`/pages/${this.$route.params.page}/cards/list/${this.newCard.key}`] = this.newCard;
        firebase.database().ref().update(updates)
          .then(r=>{
            this.newCard = {};
          }).catch(e=>{
          this.messages.push({message:` ${e.message}`, status:'danger'})
        })

      },
      saveData:function(e){
        e.preventDefault()
        firebase.database().ref(`/pages/${this.$route.params.page}/cards`).set(this.cards)
          .then(r=>{
            this.messages.push({message:`Cards Actualizados`, status:'success'})
          }).catch(e=>{
          this.messages.push({message:` ${e.message}`, status:'danger'})
        })
      },
      uploadImage:function(e){
        console.log(e.target.files[0])
        let key = firebase.database().ref().push().key
        this.newCard['key'] = key
        let uploadTask = firebase.storage().ref(`/pages/${this.$route.params.page}/cards/${key}`).put(e.target.files[0])

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
          this.newCard.image = uploadTask.snapshot.downloadURL;
          this.disable = false;
          this.loader=false;
        });
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .myclass{
    height: 500px;
    overflow-y: hidden;
  }

</style>
