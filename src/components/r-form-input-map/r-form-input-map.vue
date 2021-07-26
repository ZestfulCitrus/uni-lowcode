<template>
  <view>
    <u-field
      v-model="option.value"
      :label="option.label"
      :placeholder="option.placeholder"
      @click="picker_click"
      :style="compStyle"
      :disabled="true"
    >
    </u-field>
  </view>
</template>

<script>
import {rvuecomp} from '../mixins/r-vue-comp'
export default {
  name: "r-form-input-map",
  mixins:[rvuecomp],
  methods: {
    picker_click() {
      uni.chooseLocation({
        success:(res)=> {
         this.option.value=res.name + res.address;
        },
      });
    },
  },
};
</script>

<style lang="scss">

</style>