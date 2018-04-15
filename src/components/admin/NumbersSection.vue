<template>
    <div>
      <h2>Stats </h2>
      <loader v-if="loader"></loader>
      <form action="" class="uk-form-horizontal uk-margin-medium" v-on:submit="saveData">

        <div class="uk-margin">
          <label for="button" class="uk-form-label">Activo</label>
          <div>
            <button
              id="button"
              v-on:click="handleComponent"
              v-model="numbers.show"
              class="uk-button uk-button-default uk-form-width-large"
              type="button" >{{numbers.show}}</button>
          </div>
        </div>
        <hr class="uk-divider-icon">

        <div class="uk-margin">
          <label class="uk-form-label" for="form-horizontal-text">Number</label>
          <div class="">
            <input class="uk-input uk-form-width-large" id="form-horizontal-text" type="number" placeholder="Some text..." v-model="newCard.number">
          </div>
        </div>
        <div class="uk-margin">
          <label class="uk-form-label" for="the-title">Title</label>
          <div class="">
            <input class="uk-input uk-form-width-large" id="the-title" type="text" placeholder="Some text..." v-model="newCard.title">
          </div>
        </div>

        <div class="uk-margin">
          <vk-button htmlType="button" default class="uk-width-1-1" v-on:click="addCard">Add</vk-button>
        </div>

        <div class="uk-child-width-expand@s uk-text-center" uk-grid >
          <div v-for="item in numbers.list">
            <div class="uk-card-default" style="padding: 2%; position:relative;">
              <vk-icon-button  v-on:click="deleteCard(item.key)"
                               class="uk-margin-small-top uk-margin-small-right"
                               style="position: absolute;top:0; right:0" icon="trash"></vk-icon-button>
              <h2>{{item.number}}</h2>
              <h4>{{item.title}}</h4>
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
  export default {
    name: 'NumbersSection',
    data () {
      return {
        messages:[],
        newCard:{
          number:0,
          title:''
        },
        loader:false,
        disable:true,
        numbers:{
          list:[],
          show:true
        }
      }
    },
    beforeMount(){
      this.getData()
    },
    methods:{
      getData:function(){
        firebase.database().ref('landing/numbers').on('value', (res)=>{
          this.numbers = res.val();
        })
      },
      handleComponent:function(){
        this.numbers.show = !this.numbers.show
      },
      deleteCard:function(key){
        //this.$delete(this.cards.list, key);
        let updates = {}
        updates[`landing/numbers/list/${key}`] = null;
        firebase.database().ref().update(updates)
          .then(r=>{

          }).catch(e=>{
          this.messages.push({message:` ${e.message}`, status:'danger'})
        })
      },
      addCard:function(){
        let updates = {}
        let key = firebase.database().ref().push().key
        this.newCard['key'] = key
        updates[`landing/numbers/list/${key}`] = this.newCard;
        firebase.database().ref().update(updates)
          .then(r=>{
            this.newCard = {};
          }).catch(e=>{
          this.messages.push({message:` ${e.message}`, status:'danger'})
        })

      },
      saveData:function(e){
        e.preventDefault()
        firebase.database().ref('/landing/numbers').set(this.numbers)
          .then(r=>{
            this.messages.push({message:`Stats Actualizados`, status:'success'})
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
