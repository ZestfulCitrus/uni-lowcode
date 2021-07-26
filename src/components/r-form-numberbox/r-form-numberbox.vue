<template>
  <view :style="compStyle">
    <text>{{option.label}}</text>
    <u-number-box v-model="option.value" style="margin-left:auto;"></u-number-box>
  </view>
</template>

<script>
import { rvuecomp } from "../mixins/r-vue-comp";
export default {
  name: "r-form-numberbox",
  mixins: [rvuecomp],
};
</script>

<style lang="scss">
</style>