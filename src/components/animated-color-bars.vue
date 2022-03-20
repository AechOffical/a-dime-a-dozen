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

}
</script>

<style scoped lang="scss">

@import "../scss/variables";

$height: 25vh;
$width: 50vw;

#colorBars {
  margin-top: -25vh;
  display: flex;
  flex-direction: column;


  #green {
    margin-top: -25vh;
    z-index: -3;
    background-color: $green;
    width: $width;
    height: $height;

  }
  #red{
    margin-top: -25vh;
    z-index: -2;
    background-color: $red;
    width: $width;
    height: $height;


  }
  #beige {
    margin-top: -25vh;
    z-index: -1;
    background-color: $beige;
    width: $width;
    height: $height;


  }
  #light-beige {
    background-color: $light_beige;
    width: $width;
    height: $height;

  }


}


</style>
