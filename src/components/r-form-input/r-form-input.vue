<template>
  <view>
    <u-field
      v-model="option.value"
      :label="option.label"
      :placeholder="option.placeholder"
      :style="compStyle"
    >
    </u-field>
  </view>
</template>

<script>
import {rvuecomp} from '../mixins/r-vue-comp'
export default {
  name: "r-form-input",
  mixins:[rvuecomp]
};
</script>

<style lang="scss">
</style>