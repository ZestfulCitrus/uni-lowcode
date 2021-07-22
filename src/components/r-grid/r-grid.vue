<template>
  <u-grid :col="option.col" :style="compStyle">
    <u-grid-item v-for="(item, index) in option.list" :key="index" @click="item.click">
      <u-badge v-if="item.badge.visual" :count="item.badge.count" :offset="[20, 20]"></u-badge>
      <u-icon :name="item.name" :size="item.size"></u-icon>
      <view class="grid-text">{{ item.label }}</view>
    </u-grid-item>
  </u-grid>
</template>
<script>
import {rvuecomp} from '../mixins/r-vue-comp'
export default {
  name:'r-grid',
  mixins:[rvuecomp],
  data() {
    return {
      
    }
  },
};
</script>
<style scoped lang="scss">
.grid-text {
  font-size: 28rpx;
  margin-top: 4rpx;
  color: $u-type-info;
}
</style>