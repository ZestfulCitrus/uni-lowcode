<template>
  <view>
    <u-field
      v-model="option.value"
      :label="option.label"
      :placeholder="option.placeholder"
      @click="picker_click"
      :style="{
        width: compStyle.width,
        height: compStyle.height,
        'font-size': compStyle['font-size'],
        'background-color': compStyle['background-color'],
        'margin-top': compStyle['margin-top'],
        'margin-right': compStyle['margin-right'],
        'margin-down': compStyle['margin-down'],
        'margin-left': compStyle['margin-left'],
      }"
    >
    </u-field>
    <view class="position-sticky fixed-bottom ">
    <u-picker
     
      mode="time"
      v-model="option.show"
      :params="option.params"
      @confirm="confirm"
    ></u-picker>
    </view>
  </view>
</template>

<script>
export default {
  name: "r-form-input-time",
  props: {
    option: {
      type: Object,
      require: true,
    },
    compStyle: {
      type: Object,
      require: true,
    },
  },
  methods: {
    picker_click() {
      this.option.show = true;
    },
    confirm(e) {
      this.option.value =
        e.year +
        "-" +
        e.month +
        "-" +
        e.day +
        " " +
        e.hour +
        ":" +
        e.minute +
        ":" +
        e.second;
    },
  },
};
</script>

<style lang="scss">

</style>