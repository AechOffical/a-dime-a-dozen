<template>
  <div class="home">
    <div class="nav">
      <router-link to="/nav">MENU</router-link><br>
    </div>
    <div class="logo"><Logo></Logo></div>
    <div class="left"> <animated-color-bars ></animated-color-bars>
    </div>
    <div class="right-animation"><animated-color-bars ></animated-color-bars>
    </div>
    <div class="right-text">

      <div id="studio-desc">

        a one-person<br/>
        creative web-design<br/>
        <span class="glegooFontSpan">
        the studio
        </span>
      </div></div>


  </div>
  <div class="filler"></div>
</template>
<script>
import AnimatedColorBars from "@/components/animated-color-bars";
import anime from "animejs/lib/anime.es.js";
import Logo from "@/components/Logo";
import router from "@/router";
export default {
  components: {Logo, AnimatedColorBars},
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

  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
    window.addEventListener("scroll", this.handleScroll);

  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    myEventHandler() {
      console.log("happening v2")
      anime({
        targets: '.right-animation',
        easing: 'easeInBack',
        translateY: -window.innerHeight,
        duration: 1
      })
    }
  },
  handleScroll() {
    console.log("happening");
    router.push('/nav')
  }
}


</script>



<style scoped lang="scss">

@import "../scss/fonts";
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
  animation-name: opacity-text;
  animation-duration: 1s;


  a {
    text-decoration: none;
    color: $green;
  }

}

.home {
  height: 100vh;
  background-color: $background;
}


.glegooFontSpan {
  font-family: 'Glegoo', serif;
}
.logo {
  animation-name: opacity-logo;

  animation-duration: 1.1s;
}

@media screen and (max-width: 63em) {
  .home {
    position: relative;
  }
  #studio-desc {
    z-index: -2;
    position: absolute;
    bottom: 2vh;
    width: 90vw;
  }

  .left {
    display: none;
  }
  .right-animation{
    float: right;
    position: fixed;
    left: 0;
    z-index: 1;
  }
  .right-text {
    text-align: left;
    z-index: 0;
    height: 100vh;
    width: 50vw;
    position: absolute;
    left: 0;
    font-family: "Yrsa",serif;
    font-size: 2rem;
    text-transform: lowercase;
    animation-name: opacity-text;
    animation-duration: 1s;

  }
  .logo{
    z-index: 3;
    //display: none;
    position: absolute;
    top: 45%;
    left: 50%;

    transform: translate(-50%, -50%);
  }

}
@media screen and (min-width: 64em) {
  .right-animation {
    float: right;
    position: fixed;
    right: 0;
    z-index: 1;
  }

  .right-text {
    display: flex;
    line-height: 100%;
    text-align: left;
    z-index: 0;
    height: 100vh;
    width: 50vw;
    position: absolute;
    right: 0;
    font-family: "Yrsa",serif;
    font-size: 6vh;
    text-transform: lowercase;
    animation-name: opacity-text;
    animation-duration: 1s;
    align-items: flex-end;

  }
  .left {
    float: left;
    position: fixed;
    left: 0;


  }


  .logo{
    z-index: 3;
    position: absolute;
    bottom: 3.5vh;
    left: 15vw;
  }
}


#studio-desc {
  margin-left: 2vw;
  margin-bottom: 4vh;

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

.filler {
  height: 101vh;
  width: 1vw;
}

.underline {
  text-decoration: underline;
}
</style>

