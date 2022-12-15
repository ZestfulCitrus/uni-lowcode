<template>
  <view :style="compStyle">
    <u-field
      v-model="option.value"
      :label="option.label"
      :placeholder="option.placeholder"
      
      :type="option.type"
      :password="option.password"
    >
    <u-button v-if="option.btn" size="mini" slot="right" type="success" @click="option.btn.getCode()">{{option.btn.codeText}}</u-button>
    </u-field>
  </view>
</template>

<script>
import {rvuecomp} from '../mixins/r-vue-comp'
export default {
  name: "r-form-input",
  mixins:[rvuecomp],
};
</script>

<style lang="scss">
</style>