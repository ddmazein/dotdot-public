<template>
  <div :class="className" @click="$emit('click', $event)" v-html="iconSVG" />
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      required: false,
      default: () => "",
    },
    iconSVG: {
      type: String,
      required: true,
      default: () => "",
    },
  },
};
</script>
