<template>
  <div id="colorBars">
    <div id="green" class="rect"></div>
    <div id="red" class="rect"></div>
    <div id="beige" class="rect"></div>
    <div id="light-beige" class="rect"></div>


  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "animated-color-bars-navigation-module",
  mounted: function () {
    anime({
      targets: '#green',
      translateX: 0.55 * window.innerWidth,
      easing: 'easeOutQuad',
      duration: 800
    })
    anime({
      targets: '#red',
      translateX: 0.76 * window.innerWidth,
      easing: 'easeOutQuad',
      duration: 900
    })
    anime({
      targets: '#beige',
      translateX: 0.90 * window.innerWidth,
      easing: 'easeOutQuad',
      duration: 1000
    })
    anime({
      targets: '#light-beige',
      translateX:window.innerWidth,
      easing: 'easeOutQuad',
      duration: 1100
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
      anime({
        targets: '#green',
        translateX: 0.55 * window.innerWidth,
        easing: 'linear',
        duration: 1
      })
      anime({
        targets: '#red',
        translateX: 0.76 * window.innerWidth,
        easing: 'linear',
        duration: 1
      })
      anime({
        targets: '#beige',
        translateX: 0.90 * window.innerWidth,
        easing: 'linear',
        duration: 1
      })
      anime({
        targets: '#light-beige',
        translateX:window.innerWidth,
        easing: 'linear',
        duration: 1
      })

    }
    }
}
</script>

<style scoped lang="scss">

@import "../scss/variables";


#colorBars{
  width: 100vw;
  display: flex;



}
@media screen and (min-width: 64em) {
  #green{
    z-index: 1;
    margin-left: -55vw;
    height: 100vh;
    width: 55vw;
    background-color: $green;
  }
  #red{
    z-index: -0;
    margin-left: -21vw;
    height: 100vh;
    width: 21vw;
    background-color: $red;
  }
  #beige{
    z-index: -1;

    margin-left: -14vw;
    height: 100vh;
    width: 14vw;
    background-color: $beige;
  }
  #light-beige{
    margin-left: -10vw;
    z-index: -2;
    height: 100vh;
    width: 10vw;
    background-color: $light_beige;
  }




}


</style>
