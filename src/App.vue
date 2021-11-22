<template>
  <div id="app">
    <TODO />
  </div>
</template>

<script>
import TODO from "./components/TODO.vue";

export default {
  name: "App",
  components: {
    TODO,
  },
};
</script>

<style>
@import "~currenda-generic-vue/nak.css";

@font-face {
  font-family: "cdsicon";
  src:
      url("~@/assets/fonts/cdsicon.woff") format("woff"),
      url("~@/assets/fonts/cdsicon.woff2") format("woff2");
  font-style: normal;
  font-weight: 400;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
