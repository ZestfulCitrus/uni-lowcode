<template>
  <view :style="compStyle">
    <view class="wrap equip_card">
      <u-row gutter="16">
        <u-col span="3" v-for="(item, index) in option.card_list" :key="index">
          <view>
            <u-image class="card" :src="item.img_url" mode="widthFix"></u-image>
            <p class="equip_card_font_size">{{ item.task_info }}</p>
          </view>
        </u-col>
      </u-row>
    </view>
  </view>
</template>

<script>
import { rvuecomp } from '../mixins/r-vue-comp'
export default {
  name: 'r-menu',
  mixins: [rvuecomp],
}
</script>

<style lang="scss">
.equip_card {
  border: 1px;
  padding: 24rpx;
  background-color: #fff;
  //border-style: dashed;
  margin-right: 3%;
  margin-left: 3%;
  .equip_card_font_size {
    text-align: center;
    font-size: 15rpx;
  }
  .br {
    height: 10px;
  }
}
</style>
