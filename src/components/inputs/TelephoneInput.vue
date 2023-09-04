<template>
  <div class="telephone-input">
    <div>telephone input</div>
    <input v-model="value" />
  </div>
</template>

<script>
export default {
  name: "TelephoneInput",

  data() {
    return {
      value: "",
    };
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/telephone-input.scss";
</style>
