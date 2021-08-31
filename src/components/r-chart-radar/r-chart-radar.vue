<template>
  <view :class="compStyle">
    <qiun-data-charts type="radar" :chartData="option.chartData" :background="option.background" />
  </view>
</template>
<script>
import { rvuecomp } from "../mixins/r-vue-comp";
export default {
    name:'r-chart-radar',
    mixins: [rvuecomp],
}
</script>
<style lang="scss">

</style>