<template>
  <view>
    <view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30">
      <view class="u-m-r-10">
        <u-avatar :src="option.pic" size="140"></u-avatar>
      </view>
      <view class="u-flex-1">
        <view class="u-font-18 u-p-b-20">{{option.username}}</view>
        <view class="u-font-14 u-tips-color">user_id = {{option.user_id}}</view>
      </view>
      <view class="u-m-l-10 u-p-10">
        <u-icon name="scan" color="#969799" size="28"></u-icon>
      </view>
      <view class="u-m-l-10 u-p-10">
        <u-icon name="arrow-right" color="#969799" size="28"></u-icon>
      </view>
    </view>

    <view class="u-m-t-20" v-for="(opt,index) in option.options" :key="index">
      <r-cell :list="opt"></r-cell>
    </view>
  </view>
</template>

<script>

export default {
  name:'r-me',
  props: {
    option: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      
    };
  },
};
</script>

<style lang="scss">
.camera {
  width: 54px;
  height: 44px;

  &:active {
    background-color: #ededed;
  }
}
.user-box {
  background-color: #fff;
}
</style>