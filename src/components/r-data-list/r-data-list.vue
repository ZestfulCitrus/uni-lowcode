<template>
  <view
    :style="compStyle"
  >
    <view @click="item.click" class="wrap" :style="option.dataStyle" v-for="(item, index) in option.list" :key="index">
      <u-row gutter="16" justify="space-between">
        <u-col span="2">
          <u-image :src="item.image_url" mode="widthFix"></u-image>
        </u-col>
        <u-col span="5" v-for="(item2,index2) in item.texts" :key="index2">
          <view v-for="(item3,index3) in item2" :key="index3" :style="item3.style"><text >{{item3.value}}</text></view>
        </u-col>
      </u-row>
    </view>
  </view>
</template>

<script>
export default {
  name: "r-data-list",
  props: {
    option: {
      type: Object,
      required: true,
    },
    compStyle: {
      type: Object,
      require: false,
    },
  },
};
</script>

<style lang="scss">
</style>