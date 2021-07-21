<template>
  <view>
    <u-field
      v-model="option.value"
      :label="option.label"
      :placeholder="option.placeholder"
      @click="picker_click"
      :style="compStyle"
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
import {rvuecomp} from '../mixins/r-vue-comp'
export default {
  name: "r-form-input-time",
  mixins:[rvuecomp],
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