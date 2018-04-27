<template>

      <vk-navbar style=" z-index: 980; width: 100%">

        <vk-navbar-nav>
          <li class="uk-parent uk-active uk-logo"><router-link to="/" >
            <img class="nav-logo"
                 src="https://static1.squarespace.com/static/56e2e0c520c6472a2586add2/t/594d23b7e6f2e1d4a11b69a3/1498231447084/?format=500w" alt="">
          </router-link></li>
        </vk-navbar-nav>

        <vk-navbar-nav slot="center">
          <li class="uk-parent uk-active uk-logo"><router-link to="/" >Iron Hack Rules</router-link></li>
        </vk-navbar-nav>


        <vk-navbar-nav slot="right">
          <li class="uk-parent uk-active"><a href="https://www.ironhack.com/en/courses/web-development-bootcamp/apply" target="_blank">Aplica</a></li>
          <!--<li v-show="!logged" class="uk-parent"><router-link to="/login" >Log In</router-link></li>-->

        </vk-navbar-nav>

      </vk-navbar>

</template>

<script>
  export default {
    name: 'NavComponent',
    data () {
      return {}
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-logo{
    width: 50px;
  }

</style>
