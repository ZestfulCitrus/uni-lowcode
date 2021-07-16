<template>
  <view>
    <u-field
      v-model="option.value"
      :label="option.label"
      :placeholder="option.placeholder"
      :style="{
        width: compStyle.width,
        height: compStyle.height,
        'font-size': compStyle['font-size'],
        'background-color': compStyle['background-color'],
        'margin-top':compStyle['margin-top'],
        'margin-right':compStyle['margin-right'],
        'margin-down':compStyle['margin-down'],
        'margin-left':compStyle['margin-left'],
      }"
    >
    </u-field>
  </view>
</template>

<script>
export default {
  name: "r-form-input",
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