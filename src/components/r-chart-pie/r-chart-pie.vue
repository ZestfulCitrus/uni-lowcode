<template>
  <view >
    <qiun-data-charts
        type="pie"
        :chartData="localdata"
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
      localdata: {
        categories:[],
        series:[{
          "name": "一班",
          "data": 50
        }, {
          "name": "二班",
          "data": 30
        }, {
          "name": "三班",
          "data": 20
        }, {
          "name": "四班",
          "data": 18
        }, {
          "name": "五班",
          "data": 8
        }],
      }
    }
  },
}
</script>

<style scoped>

</style>