<template>
  <almost-lottery
    :ring-count="2"
    :duration="1"
    :prizeList="option.prizeList"
    :prizeIndex="prizeIndex"
    @reset-index="prizeIndex = -1"
    @draw-start="handleDrawStart"
    @draw-end="handleDrawEnd"
    @finish="handleDrawFinish"
    v-if="option.prizeList.length"
    :key="activate"
  />
</template>


<script>
import { rvuecomp } from "../mixins/r-vue-comp";
export default {
  name: "r-lottery",
  mixins: [rvuecomp],
  data() {
    return {
      activate: 1,
      prizeIndex:-1
    };
  },
  watch: {
    option: {
      handler(newName, oldName) {
        console.log("aa");
        this.activate++;
      },
      deep: true,
    },
  },
  methods: {
    // 本次抽奖开始
    handleDrawStart() {
      // 这里需要处理你的中奖逻辑，并得出 prizeIndex
      // 请查看示例项目中的代码
      console.log("开始啦");
      this.prizeIndex = 2;
    },
    // 本次抽奖结束
    handleDrawEnd() {
      // 完成抽奖后，这里处理你拿到结果后的逻辑
      // 请查看示例项目中的代码
      console.log("结束啦");
    },
    // 抽奖转盘绘制完成
    handleDrawFinish(res) {
      // 抽奖转盘准备就绪后，这里处理你的逻辑
      // 请查看示例项目中的代码
      // console.log('抽奖转盘绘制完成', res)
    },
  },
};
</script>
