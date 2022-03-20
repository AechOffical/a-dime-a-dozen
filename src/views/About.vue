<template>
  <div class="about">
  hello hello


  </div>
</template>
<script>
import animatedColorBars from "@/components/animated-color-bars";
import AnimatedColorBars from "@/components/animated-color-bars";
import anime from "animejs/lib/anime.es.js";
export default {
  components: {AnimatedColorBars},

}


</script>
<style scoped lang="scss">
@import "../scss/variables";


.about {
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
  z-index: 0;
  height: 100vh;
  width: 50vh;
  position: absolute;
  right: 0;
  font-family: Adoha,serif;
}



</style>

