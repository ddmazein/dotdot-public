<template>
  <div id="app">
    <TelephoneInput />
  </div>
</template>

<script>
import TelephoneInput from "./components/inputs/TelephoneInput.vue";

export default {
  name: "App",
  components: {
    TelephoneInput,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
