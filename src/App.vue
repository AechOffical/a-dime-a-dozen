<template>
  <div class="nav">
  <router-link to="/about">MENU</router-link><br>
  </div>
  <router-view/>

</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Oleo+Script&display=swap');

@import "/scss/variables";

body {
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.nav {
  position: fixed;
  top: 0;
  right: 1vw;
  z-index: 1;
  font-family: 'Oleo Script', cursive;
  text-decoration: none;
  color: $green;
  font-size: 5vh;

  a {
    text-decoration: none;
    color: $green;
  }

}



router-view {
  height: 100vh;
  z-index: -1;
}

</style>
