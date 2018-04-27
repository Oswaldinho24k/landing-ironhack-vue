<template>
  <div>
  <vk-card type="secondary">
    <vk-card-title>Find anything about Ironhack and our community</vk-card-title>
  </vk-card>
    <div class="page-list">

      <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center" uk-grid-parallax="translate:200">
        <div div v-for="p in pages">

           <card-page :p="p" :logged="logged"></card-page>

        </div>
      </div>
      <vk-button @click="show = true" size="large" type="secondary" class="page-list-button" v-show="logged">
        <vk-icon icon="plus"></vk-icon>
      </vk-button>

      <vk-modal :show.sync="show" center>
        <vk-modal-close @click="show = false"></vk-modal-close>
        <vk-modal-title slot="header">Modal Title</vk-modal-title>

        <form action="." @submit="savePage"  class="uk-form-horizontal" id="new-page-form">
          <div class="uk-margin">
            <label class="uk-form-label" for="form-horizontal">Name</label>
            <div class="">
              <input class="uk-input uk-form-width-large" id="form-horizontal" type="text" placeholder="Some text..." v-model="newPage.name">
            </div>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="form-horizontal-text">Summary</label>
            <div class="">
              <textarea class="uk-textarea uk-form-width-large" id="form-horizontal-text" type="text" placeholder="Some text..." v-model="newPage.summary"></textarea>
            </div>
          </div>
        </form>

        <div slot="footer" class="uk-text-right">
          <vk-button class="uk-margin-small-right" @click="show = false">Cancel</vk-button>
          <vk-button type="secondary" typeof="submit" @click="savePage">Save</vk-button>
        </div>
      </vk-modal>

      <vk-notification :messages.sync="messages">
        <div slot-scope="{ message }">
          {{ message }}
        </div>
      </vk-notification>

    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import CardPage from './CardPage.vue'
  export default {
    components: {CardPage},
    name: 'PagesList',
    data () {
      return {
        messages:[],
        logged:false,
        user:{},
        pages:[],
        show:false,
        newPage:{
          "cards":
            { "list":
              { 0:
                { "image": "https://firebasestorage.googleapis.com/v0/b/ironhack-admin.appspot.com/o/cards%2F-LA9jfneX0BiEWnr64yN?alt=media&token=4fd40527-0dd9-45d9-8323-e545d37eebee",
                  "key": 0,
                  "text": "I'd like to eat some pizzaz ", "title": "LooooooL" },
                1:
                  { "image": "https://firebasestorage.googleapis.com/v0/b/ironhack-admin.appspot.com/o/cards%2F-LA9kJ_ckelXCIQlFHHw?alt=media&token=3f04608f-9422-4466-ae35-8767241b1198",
                    "key": 1,
                    "text": "asdfazxcvx xbcv xvbcx xbvc xbcv xcvb xcvb xbcv xbcv xcvb bxcv x x cvx vcb xcvb xcv bxvc bxcv bxcb",
                    "title": "yo yo yo " },
                2:
                  { "image": "https://firebasestorage.googleapis.com/v0/b/ironhack-admin.appspot.com/o/cards%2F-LAAhglYU4pGwxnlVUh2?alt=media&token=eeef243c-58ea-47e4-a584-909d6cf24593",
                    "key": 2,
                    "text": "=P",
                    "title": "Juli" }
              },
              "show": true },
          "footer": { "show": true },
          "main": {
            "image": "https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/26910863_2117437818485111_1123558402019818654_o.jpg?_nc_cat=0&oh=af50b4fa9a56d299dfdd6a42dbcb62f9&oe=5B63DF2D",
            "message": "Vamos a loool",
            "show": true },
          "message": {
            "show": true,
            "text": "lalalalalalala bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla v bla blav bla bla bla bla bla bla bla bla bla bla v bla bla bla bla bla bla bla bla bla bla v v bla bla v bla bla v v bla bla v",
            "title": "The Story" },
          "numbers": {
            "list": {
              0:
              { "key": 0,
                "number": "400",
                "title": "wings" },
              1: {
                "key": 1,
                "number": "100",
                "title": "burguers" },
              2: {
                "key": 2,
                "number": "100",
                "title": "promo 100" },
              3: {
                "key": 3,
                "number": "1000",
                "title": "Alumnos" } },
            "show": false },
          "testimonials":
            { "list":
              { 0:
                { "image": "https://firebasestorage.googleapis.com/v0/b/ironhack-admin.appspot.com/o/testimonials%2F-LAA2l1woVg-dlrudyy5?alt=media&token=78dce4f8-5af8-4494-9bf1-cde991b75931",
                  "key": 0,
                  "text": "Fixter helped me a lot and now Im a fullstack web developer and bl blajascjas a fa da sf s f sdfv sdf g sdf g sdf",
                  "title": "Oswaldinho" },
                "-LAA3DnxebQRwTlsieyh": {
                "image": "https://firebasestorage.googleapis.com/v0/b/ironhack-admin.appspot.com/o/testimonials%2F-LAA3DnxebQRwTlsieyh?alt=media&token=c4235854-ea98-419b-825c-2380a4db9d53",
                  "key": "-LAA3DnxebQRwTlsieyh", "text": "cwfwef wf ef wer fw rfwerfwe frwe rgrwetgwegw gwergwergwgr",
                  "title": "qwerqewr" },
                "-LAABffqZCtEXea9jGg-": {
                "image": "https://firebasestorage.googleapis.com/v0/b/ironhack-admin.appspot.com/o/testimonials%2F-LAABffqZCtEXea9jGg-?alt=media&token=fe56dffb-9e7f-4989-b948-c2c67aad6b1b",
                  "key": "-LAABffqZCtEXea9jGg-", "text": "asdfasf adsfasdf bla bla bla bla bla bla bla bla bla bla ...bla bla bla bla bla bla ...bla bla bla bla bla bla ",
                  "title": "S" },
                "-LAAMY5VDwHjb4k_c724": {
                "image": "https://firebasestorage.googleapis.com/v0/b/ironhack-admin.appspot.com/o/testimonials%2F-LAAMY5VDwHjb4k_c724?alt=media&token=985ac53d-488e-40ce-93b3-818a7373743b",
                  "key": "-LAAMY5VDwHjb4k_c724",
                  "text": "lool",
                  "title": "qwerqwer" } },
              "show": true } }
      }
    },
    beforeMount(){
      this.checkIfUser()
      firebase.database().ref('pages').on('value', res=>{
        console.log(res.val())
        this.pages = res.val()
      })
    },
    methods:{
      slugify(text){
        return text.toString().toLowerCase()
          .replace(/\s+/g, '-')           // Replace spaces with -
          .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
          .replace(/\-\-+/g, '-')         // Replace multiple - with single -
          .replace(/^-+/, '')             // Trim - from start of text
          .replace(/-+$/, '');            // Trim - from end of text
      },
      savePage(e){
        e.preventDefault()
        this.newPage.name = this.slugify(this.newPage.name);
        firebase.database().ref(`/pages/${this.newPage.name}`).set(this.newPage)
          .then(r=>{
            this.messages.push({message:` The page ${this.newPage.name} was created successfully`, status:'success'})
          }).catch(e=>{
          this.messages.push({message:` ${e.message} ;)`, status:'error'})
        })
      },
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

    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page-list{
    position: relative;
    padding: 2% 5%;
  }
  .page-list-button{
    position: fixed;
    bottom: 50px;
    right:50px;
  }


</style>
