<template>
  <div id="colorBars">
    <div id="light-beige" class="rect"></div>
    <div id="beige" class="rect"></div>
    <div id="red" class="rect"></div>
    <div id="green" class="rect"></div>
  </div>

</template>

<script>

import anime from "animejs/lib/anime.es.js";



export default {
  name: "animated-color-bars",
  data: function () {
    return{
      boxHeight: 0.25 * window.innerHeight + 'px'
    }
  },
  mounted: function () {
    anime({
      targets: '#light-beige',
      translateY: 0.25 * window.innerHeight,
      easing: 'easeOutQuad',
      duration: 250
    })
    anime({
      targets: '#beige',
      translateY: 0.5 * window.innerHeight,
      easing: 'easeOutQuad',
      duration: 500
    })
    anime({
      targets: '#red',
      translateY: 0.75 * window.innerHeight,
      easing: 'easeOutQuad',
      duration: 750
    })
    anime({
      targets: '#green',
      translateY: window.innerHeight,
      easing: 'easeOutQuad',
      duration: 1000
    })
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler() {
      this.boxHeight = window.innerHeight * 0.25 + 'px';
      anime({
        targets: '#light-beige',
        translateY: 0.25 * window.innerHeight,
        easing: 'linear',
        duration: 1
      })
      anime({
        targets: '#beige',
        translateY: 0.5 * window.innerHeight,
        easing: 'linear',
        duration: 1

      })
      anime({
        targets: '#red',
        translateY: 0.75 * window.innerHeight,
        easing: 'linear',
        duration: 1

      })
      anime({
        targets: '#green',
        translateY: window.innerHeight,
        easing: 'linear',
        duration: 1

      })
      return this.boxHeight;
    }
    }


  }
</script>

<style scoped lang="scss">

@import "../scss/variables";

//$height: 25vh;
$width: 50vw;
@media screen and (max-width: 63em) {
  #colorBars {
    margin-top: -25vh;
    display: flex;
    flex-direction: column;}
  .left {
    display: none;
  }
  #green {
    margin-top: -25vh;
    z-index: -3;
    background-color: $green;
    width: 100vw;
    //height: $height;
    height: v-bind(boxHeight);
  }
  #red{
    margin-top: -25vh;
    z-index: -2;
    background-color: $red;
    width: 100vw;
    //height: $height;
    height: v-bind(boxHeight);

  }
  #beige {
    margin-top: -25vh;
    z-index: -1;
    background-color: $beige;
    width: 100vw;
    //height: $height;
    height: v-bind(boxHeight);

  }
  #light-beige {
    background-color: $light_beige;
    width: 100vw;
    //height: $height;
    height: v-bind(boxHeight);
  }
}
@media screen and (min-width: 63.5em) {
  #colorBars {
    margin-top: -25vh;
    display: flex;
    flex-direction: column;


    #green {
      margin-top: -25vh;
      z-index: -3;
      background-color: $green;
      width: $width;
      //height: $height;
      height: v-bind(boxHeight);
    }
    #red{
      margin-top: -25vh;
      z-index: -2;
      background-color: $red;
      width: $width;
      //height: $height;
      height: v-bind(boxHeight);

    }
    #beige {
      margin-top: -25vh;
      z-index: -1;
      background-color: $beige;
      width: $width;
      //height: $height;
      height: v-bind(boxHeight);

    }
    #light-beige {
      background-color: $light_beige;
      width: $width;
      //height: $height;
      height: v-bind(boxHeight);
    }

}





}


</style>
