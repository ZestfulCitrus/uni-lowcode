<template>
  <view>
    <qiun-data-charts type="line" :localdata="option.localdata" :style="compStyle"/>
  </view>
</template>

<script>
import { rvuecomp } from "../mixins/r-vue-comp";
export default {
  name: "r-chart-line",
  mixins: [rvuecomp],
  data() {
    return {
      
    };
  },
};
</script>

<style lang="scss">
</style>