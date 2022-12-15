<template>
  <view :style="compStyle">
    <u-parse
      :html="option.content"
      :selectable="option.selectable"
      :tag-style="option.style"
      :lazy-load="option.lazyload" 
      :loading-img="option.loadingImg"
      :show-with-animation="option.showWithAnimation"
    ></u-parse>
  </view>
</template>

<script>
import { rvuecomp } from "../mixins/r-vue-comp";
export default {
  name: "r-parse",
  mixins: [rvuecomp],
};
</script>

<style lang="scss">
</style>
