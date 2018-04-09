<template>
  <div class="hello">

    <div class="uk-height-large uk-background-cover uk-light uk-flex" uk-parallax="bgy: -250"
         style="height:80vh; background-image: url('https://scontent.fmex9-1.fna.fbcdn.net/v/t31.0-8/26910863_2117437818485111_1123558402019818654_o.jpg?_nc_cat=0&_nc_eui2=v1%3AAeGZesvyLOpObUZLjl9n5cVMa7JiQzuFgV6W_yi2IeW8OrNHRohvpBS0SL_rO-0N3HqcX1L674NSHbcqCOulZaQhxtg8erpA04ROIJZEU04dlQ&oh=bb52e7d4691500edd5abb7e85a4e9b5e&oe=5B63DF2D');"
         >

      <h1 class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">Be an Ironhacker</h1>
    </div>

    <div class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top"
         style="color:black;height:80vh;">
      <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        <h1 uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: 2,1,1; viewport: 0.5;" style="color:black">Ironhack is ...</h1>
        <p uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; viewport: 0.5;">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, enim eum exercitationem laboriosam libero natus soluta. At aut autem beatae, deserunt dicta dignissimos distinctio eaque itaque iure maiores nostrum reiciendis.
        </p>
      </div>
    </div>
    <div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid>

      <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
          <img src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
          <div class="uk-position-center">
            <div class="uk-transition-slide-top-small"><h4 class="uk-margin-remove">Headline</h4></div>
            <div class="uk-transition-slide-bottom-small"><h4 class="uk-margin-remove">Subheadline</h4></div>
          </div>
        </div>
      </div>
      <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
          <img src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
          <img class="uk-transition-scale-up uk-position-cover" src="https://images.pexels.com/photos/214221/pexels-photo-214221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
        </div>
      </div>
      <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
          <img class="uk-transition-scale-up uk-transition-opaque" src="https://images.pexels.com/photos/214221/pexels-photo-214221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
          <div class="uk-position-center">
            <span class="uk-transition-fade" uk-icon="icon: plus; ratio: 2"></span>
          </div>
        </div>

      </div>
    </div>

    <div class="uk-child-width-expand@s uk-text-center" uk-grid-parallax style="padding: 2% 5%;">
      <div>
        <div class="uk-card uk-card-default uk-card-body uk-grid-margin">
          <h2>Ironhack...</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque consectetur deleniti dicta dignissimos dolore,</p>
          <h2>Ironhack...</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque consectetur deleniti dicta dignissimos dolore,</p>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-primary uk-card-body uk-grid-margin">
          <h2>Ironhack...</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque consectetur deleniti dicta dignissimos dolore,</p>
          <h2>Ironhack...</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque consectetur deleniti dicta dignissimos dolore,</p>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-secondary uk-card-body uk-grid-margin">
          <h2>Ironhack...</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque consectetur deleniti dicta dignissimos dolore,</p>
          <h2>Ironhack...</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque consectetur deleniti dicta dignissimos dolore,</p>
        </div>
      </div>
    </div>

    <div class="uk-card-secondary uk-card-body">
      <div class="uk-child-width-expand@s uk-text-center" uk-grid>
        <h4>
          Empresa
        </h4>
        <h4>
          + Info
        </h4>
        <h4>
          Síguenos
        </h4>
        <h4>
          Campus
        </h4>
      </div>
    </div>




  </div>
</template>

<script>

  export default {
    name: 'HelloWorld',
    data () {
      return {
        //msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {

    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .hello{
    min-height: 150vh;
  }

</style>
