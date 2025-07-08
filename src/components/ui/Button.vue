<template>
  <button :type="type" :class="['btn', `btn-${variant}`]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "primary",
    },
    type: {
      type: String,
      default: "button",
    },
  },
};
</script>
