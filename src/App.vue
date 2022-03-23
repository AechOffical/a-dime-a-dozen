<template>
<!--  <div class="nav">-->
<!--  <router-link to="/nav">MENU</router-link><br>-->
<!--  </div>-->
  <router-view />
<!--    <transition name="fade" mode="in-out">-->
<!--&lt;!&ndash;      <component :is="Component"/>&ndash;&gt;-->
<!--&lt;!&ndash;    </transition>&ndash;&gt;-->
<!--  </router-view>-->

</template>

<style lang="scss">
@import "/scss/fonts";
@import "/scss/variables";

div {
  //height: 101vh;
  //position: fixed;
  //z-index: 10;

}
body {
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: $background;
}
.nav {
  position: fixed;
  top: 0;
  right: 1vw;
  z-index: 1;
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;
  color: $green;
  font-size: 5vh;

  a {
    text-decoration: none;
    color: $green;
  }

}
/* we will explain what these classes do next! */
//.v-enter-active,
//.fade-leave-active {
//  transition: opacity 1s ease;
//}
//
//.v-enter-from,
//.fade-leave-to {
//  opacity: 0;
//}


router-view {
  height: 100vh;
  z-index: -1;
}

</style>
