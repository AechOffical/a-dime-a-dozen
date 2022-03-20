<template>
  <div class="home">
    <div class="left"><animated-color-bars ></animated-color-bars>
    </div>
    <div class="right-animation"><animated-color-bars ></animated-color-bars>
    </div>
    <div class="right-text">

      <div id="studio-desc">
      <span class="purple-color underline">
        A Dime <br>
      a dozen<br>
      </span>

      is<br>
      a One-person<br>
      webdesign <span class="underline"> studio </span><br>
      made with <br>
      thought<br>
      of being a <span class="underline"> studio </span>  <br>
      with a<br>
      deep-meaning<br>
      description</div></div>


  </div>
</template>
<script>
import AnimatedColorBars from "@/components/animated-color-bars";
import anime from "animejs/lib/anime.es.js";
export default {
  components: {AnimatedColorBars},
  mounted: function () {
    anime({
      targets: '.right-animation',
      easing: 'easeInBack',
      translateY: -window.innerHeight,
      delay: 1200,
      duration: 400
    })
    anime({
      target: '.right-text',
      opacity: [0, 100],
      duration: 1000
    })
  }
}


</script>



<style scoped lang="scss">

@font-face {
  font-family: 'Yuji Syuku';
  src: url('../fonts/YujiSyuku-Regular.woff2') format('woff2'),
  url('../fonts/YujiSyuku-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@import "../scss/variables";


.home {
  height: 100vh;
}

.left {
  float: left;
}
.right-animation {
  float: right;
  position: fixed;
  right: 0;
  z-index: 1;
}
.right-text {
  text-align: left;
  z-index: 0;
  height: 100vh;
  width: 50vw;
  position: absolute;
  right: 0;
  font-family: "Yuji Syuku",serif;
  font-size: 6vh;
  text-transform: uppercase;
  animation-name: opacity-text;
  animation-duration: 1s;
}
#studio-desc {
  margin-left: 2vw;
}

.purple-color {
  color: $logo-purple;
}

@keyframes opacity-text {
  0%{
    opacity: 0;
  }
  99%{
    opacity: 0;
  }
100%{
  opacity: 100%;
}}

.underline {
  text-decoration: underline;
}
</style>

