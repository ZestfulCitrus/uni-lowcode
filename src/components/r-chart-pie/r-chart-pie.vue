<template>
  <view >
    <qiun-data-charts
        type="pie"
        :chartData="option.localdata"
        :style="compStyle"
    />
  </view>
</template>

<script>
import { rvuecomp } from "../mixins/r-vue-comp";
export default {
  name: "r-chart-pie",
  mixins: [rvuecomp],
  data() {
    return {
      
    }
  },
}
</script>

<style scoped>

</style>