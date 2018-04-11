<template>
  <vk-navbar>

    <vk-navbar-nav>
      <li class="uk-parent uk-active"><router-link to="/" >IronHack</router-link></li>
    </vk-navbar-nav>

    <vk-navbar-nav slot="right">
      <li class="uk-parent"><router-link to="/login" >Log In</router-link></li>
      <vk-navbar-nav-item title="|"></vk-navbar-nav-item>
      <li class="uk-parent"><router-link to="/signup" >Sign Up</router-link></li>
      <vk-navbar-nav-dropdown title="User">
        <vk-navbar-nav-dropdown-nav>
          <vk-nav-item title="Active" active></vk-nav-item>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item-header title="Header"></vk-nav-item-header>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item title="Item"></vk-nav-item>
          <vk-nav-item-divider></vk-nav-item-divider>
          <vk-nav-item title="Log Out"></vk-nav-item>
        </vk-navbar-nav-dropdown-nav>
      </vk-navbar-nav-dropdown>
      <vk-navbar-nav-item title="|"></vk-navbar-nav-item>
      <li class="uk-parent"><router-link to="/admin" >Admin</router-link></li>
    </vk-navbar-nav>

  </vk-navbar>
</template>

<script>

  export default {
    name: 'Navbar',
    data () {
      return {

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
