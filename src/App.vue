<template>
  <div id="app">
    <IconSpan symbol="napravlenie_icon_3" />
    <Icon symbol="napravlenie_icon_3" />
  </div>
</template>

<script>
import Icon from "./components/icons/Icon.vue";
import IconSpan from "./components/icons/IconSpan.vue";

export default {
  name: "App",
  components: {
    IconSpan,
    Icon,
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
  background-color: #2c3e50;
}
</style>
