<template>
    <div class="my-loader">
      <vk-spinner ratio="8" class="loader-obj"></vk-spinner>
    </div>
</template>

<script>
  export default {
    name: 'Loader',
    data () {
      return {}
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .my-loader{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position:fixed;
    top: 0;
    left: 0;
    background-color: rgba(255,255,255,.5);
    z-index: 100;
  }
  .loader-obj{



  }


</style>
