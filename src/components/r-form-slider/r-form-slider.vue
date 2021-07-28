<template>
  <view :style="compStyle">
    <text>{{option.label}}</text>
    <view style="margin-left:auto;width:300rpx">
		<u-slider v-model="option.value" style="width:100%;padding:20rpx"></u-slider>
	</view>
  </view>
</template>

<script>
import { rvuecomp } from "../mixins/r-vue-comp";
export default {
  name: "r-form-slider",
  mixins: [rvuecomp],
};
</script>

<style lang="scss">
</style>