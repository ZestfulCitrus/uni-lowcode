<template>
  <view>
    <qiun-data-charts type="line" :localdata="localdata" :style="compStyle"/>
  </view>
</template>

<script>
import { rvuecomp } from "../mixins/r-vue-comp";
export default {
  name: "r-chart-line",
  mixins: [rvuecomp],
  data() {
    return {
      localdata: [
        { value: 35, text: "2016", group: "目标值" },
        { value: 18, text: "2016", group: "完成量" },
        { value: 36, text: "2017", group: "目标值" },
        { value: 27, text: "2017", group: "完成量" },
        { value: 31, text: "2018", group: "目标值" },
        { value: 21, text: "2018", group: "完成量" },
        { value: 33, text: "2019", group: "目标值" },
        { value: 24, text: "2019", group: "完成量" },
        { value: 13, text: "2020", group: "目标值" },
        { value: 6, text: "2020", group: "完成量" },
        { value: 34, text: "2021", group: "目标值" },
        { value: 28, text: "2021", group: "完成量" },
      ],
    };
  },
};
</script>

<style lang="scss">
</style>