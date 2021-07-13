<template>
  <view>
    <view class="wrap equip_card">
      <view v-for="(item, index) in option.card_list" :key="index">
        <u-row gutter="16" justify="space-between">
          <u-col
            span="3"
            v-for="(img_card, img_index) in item"
            :key="img_index"
            @click="img_card.press"
          >
            <u-image
              class="card"
              :src="img_card.img_url"
              mode="widthFix"
            ></u-image>
            <p class="equip_card_font_size">{{ img_card.task_info }}</p>
            <view class="br" v-if="index != option.card_list.length - 1"></view>
          </u-col>
        </u-row>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name:'r-menu',
  props: {
    option: {
      type: Object,
      require: true,
    },
  },
};
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
  .br{
      height: 10px;
  }
}
</style>