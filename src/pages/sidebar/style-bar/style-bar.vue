<template>
  <view>
    <u-field
      class="change"
      label="控件高度"
      v-model="option.compStyle['height']"
    ></u-field>
    <u-field
      class="change"
      label="控件宽度"
      v-model="option.compStyle['width']"
    ></u-field>

    <view class="center">
      <view>
        <u-field
          border="true"
          class="change"
          label="控件上边距"
          v-model="option.compStyle['margin-top']"
        ></u-field>
        <u-field
          class="change"
          label="控件右边距"
          v-model="option.compStyle['margin-right']"
        ></u-field>
        <u-field
          class="change"
          label="控件下边距"
          v-model="option.compStyle['margin-bottom']"
        ></u-field>
        <u-field
          class="change"
          label="控件左边距"
          v-model="option.compStyle['margin-left']"
        ></u-field>
      </view>
      <view class="compStyle-box">
        <view class="compStyle-up"><u-icon name="arrow-up"></u-icon></view>
        <view class="compStyle-center">
          <view class="compStyle-left">
            <u-icon name="arrow-left"></u-icon>
          </view>
          <view class="compStyle-center-box"></view>
          <view class="compStyle-right">
            <u-icon name="arrow-right"></u-icon
          ></view>
        </view>
        <view class="compStyle-down"><u-icon name="arrow-down"></u-icon></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.center {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.change {
  font-size: 8px;
  border:1px dotted #000;
  margin-top: 10px;
  margin-left: 6px;
  margin-right: 6px;
}
.compStyle-box {
  background-color: #c0c4cc;
  border-radius: 1px;
  height: 100px;
  width: 100px;
  .compStyle-up {
    &:hover {
      background-color: aqua;
    }
    display: flex;
    justify-content: center;
    height: 25px;
  }
  .compStyle-center {
    &:hover {
      background-color: aqua;
    }
    .compStyle-left {
      height: 100%;
      &:hover {
        background-color: aqua;
      }
    }
    .compStyle-right {
      &:hover {
        background-color: aqua;
      }
    }
    display: flex;
    align-items: center;
    justify-content: space-around;
    .compStyle-center-box {
      background-color: #fff;
      height: 50px;
      width: 50px;
    }
  }
  .compStyle-down {
    &:hover {
      background-color: aqua;
    }
    display: flex;
    justify-content: center;
    height: 25px;
  }
}
</style>