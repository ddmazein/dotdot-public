<template>
  <div
    :class="className"
    @click="$emit('click', $event)"
    v-html="current_icon"
  />
</template>

<script>
import icons from "./setIcons.js";

export default {
  props: {
    symbol: {
      type: String,
      required: true,
      default: () => "",
    },
    className: {
      type: String,
      required: false,
      default: () => "",
    },
  },
  computed: {
    current_icon() {
      return icons[this.symbol];
    },
  },
};
</script>
