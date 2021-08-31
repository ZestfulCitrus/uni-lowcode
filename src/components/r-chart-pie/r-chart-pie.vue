<template>
  <view :style="compStyle">
    <qiun-data-charts
        type="pie"
        :chartData="option.localdata"
        
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