<template>
  <u-steps
    :list="option.list"
    :current="option.current"
    :direction="option.direction"
    :mode="option.mode"
    :active-color="option.activeColor"
    :un-active-color="option.unActiveColor"
    :icon="option.icon"
  >
  </u-steps>
</template>

<script>
export default {
  name:'RSteps',
  props: {
    option: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style lang="scss">
</style>