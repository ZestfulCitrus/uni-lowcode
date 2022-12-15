<template>
  <view :style="compStyle">
      <view style="display:flex;align-items: center;">
      <text>{{option.label}}</text>
      <u-switch v-model="option.value" style="margin-left:auto"></u-switch>
      </view>
  </view>
</template>

<script>
import { rvuecomp } from "../mixins/r-vue-comp";
export default {
  name: "r-form-switch",
  mixins: [rvuecomp],
};
</script>

<style lang="scss">

</style>