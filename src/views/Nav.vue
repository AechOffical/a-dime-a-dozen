<template>

  <transition>
  <div class="about">
      <div class="nav">
        <a @click="$router.go(-1)">BACK</a>
      </div>
    <div class="logo"><Logo></Logo></div>
    <div class="background-bars"><animeted-color-bars-navigation-module></animeted-color-bars-navigation-module></div>


  </div>
  </transition>
</template>
<script>
import animatedColorBars from "@/components/animated-color-bars";
import AnimatedColorBars from "@/components/animated-color-bars";
import anime from "animejs/lib/anime.es.js";
import Logo from "@/components/Logo";
import AnimetedColorBarsNavigationModule from "@/components/animated-color-bars-navigation-module";
export default {
  components: {AnimetedColorBarsNavigationModule, Logo, AnimatedColorBars},

}


</script>
<style scoped lang="scss">
@import "../scss/variables";

.nav {
  position: fixed;
  top: 0;
  right: 1vw;
  z-index: 1;
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;
  color: $green;
  font-size: 5vh;
  cursor: pointer;
  animation-name: opacity-logo;

  animation-duration: 1.4s;

  a {
    text-decoration: none;
    color: $green;
  }}

.about {
  position: relative;
  height: 100vh;
  background-color: $background;
}
.logo{
  z-index: 3;
  position: absolute;
  bottom: 3.5vh;
  left: 40%;
  animation-name: opacity-logo;

  animation-duration: 1.1s;
  //transform: translateX(50%);
}
.background-bars{
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
}


@keyframes opacity-logo {
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0;
  }
  100%{
    opacity: 100%;
  }
}




</style>

