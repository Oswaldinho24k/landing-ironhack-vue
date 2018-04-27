<template>
  <div id="app">
    <navbar></navbar>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>


  import firebase from 'firebase'
  import Navbar from './components/navbar/Navbar.vue'
export default {
  name: 'App',
  components:{Navbar},
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

  }
  .main{

  }
  .main .log-container{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 100px);
    margin-top: -100px;
    padding: 0 5%;
  }
  .main .log-container .uk-card-body{
    background-color: #f8f8f88;
  }
</style>
