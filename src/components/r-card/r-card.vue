<template>
  <view>
    <u-card
      v-for="(item, index) in option"
      :key="index"
      :sub-title="item.subTitle"
      :title="item.title"
      :thumb="item.thumb"
      :title-color="item.titleColor"
      :title-size="item.titleSize"
      :sub-title-size="item.subTitleSize"
      :border="item.border"
      :margin="item.margin"
      :border-radius="item.borderRadius"
      :head-border-bottom="item.headBorderBottom"
      :foot-border-top="item.footBorderTop"
      :thumb-circle="item.thumbCircle"
      :show-head="item.show_head"
      :show-foot="item.show_foot"
      :box-shadow="item.box_shadow"
      @click="item.press"
    >
      <view class="" slot="body">
        <view
          class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0"
          v-for="(i, index2) in item.body"
          :key="index2"
          @click="i.press"
        >
          <view class="u-body-item-title u-line-3">{{ i.text }}</view>
          <image :src="i.imgUrl" mode="aspectFill"></image>
        </view>
      </view>
      <view class="u-foot" slot="foot"
      @click="item.foot.press"
        ><u-icon
          name="chat-fill"
          size="34"
          color=""
          :label="item.foot.label"
        ></u-icon
      ></view>
    </u-card>
  </view>
</template>

<script>
export default {
  name:'r-card',
  props: {
    option: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.u-card-wrap {
  background-color: $u-bg-color;
  padding: 1px;
}

.u-body-item {
  font-size: 32rpx;
  color: #333;
  padding: 20rpx 10rpx;
}

.u-body-item image {
  width: 120rpx;
  flex: 0 0 120rpx;
  height: 120rpx;
  border-radius: 8rpx;
  margin-left: 12rpx;
}
.u-foot {
  float: right;
  margin-bottom: 30rpx;
}
</style>