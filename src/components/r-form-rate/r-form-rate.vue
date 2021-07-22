<template>
  <view :style="compStyle">
    <text>{{option.label}}</text>
    <u-rate style="margin-left:30rpx" :count="option.count" v-model="option.value"></u-rate>
  </view>
</template>

<script>
import { rvuecomp } from "../mixins/r-vue-comp";
export default {
  name: "r-form-rate",
  mixins: [rvuecomp],
};
</script>

<style lang="scss">
</style>