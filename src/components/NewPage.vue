<template>
    <div>{{path}}</div>
</template>

<script>
  export default {
    name: 'NewPage',
    data () {
      return {
        path:''
      }
    },
    beforeMount(){
      this.path = this.$route.path
      console.log(this.$route)
      console.log('perro')
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
