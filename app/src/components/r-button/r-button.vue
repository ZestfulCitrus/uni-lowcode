<template >
  <u-button
  :style="compStyle"
    :type="option.type"
    :shape="option.shape"
    :size="option.size"
    @click="option.click"
    :plain="option.plain"
    :ripple="option.ripple"
    :ripple-bg-color="option.rbc"
    >{{ option.label }}</u-button
  >
</template>

<script>
export default {
  name: "r-button",
  props: {
    option: {
      type: Object,
      require: true,
    },
    compStyle: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style lang="scss">
</style>