<template>
  <view style="margin-top: 12px; margin-left: 6px; border: 1px dotted #000">
    <view class="comInfo">
      <text class="comptype">组件类型：开关选择框</text>
    </view>
    <view class="comInfo">
      <text class="comptype">组件id：{{ option.id }}</text>
    </view>
    <view class="comInfo">
      <u-field v-model="option.option.label" label="左侧标题"></u-field>
    </view>
    <view class="comInfo">
      <u-field v-model="option.option.value" label="默认数值" :disabled="true">
        <u-button
          slot="right"
          size="mini"
          @click="option.option.value = !option.option.value"
          >开/关</u-button
        >
      </u-field>
    </view>
  </view>
</template>

<script>
export default {
  name: 'option-r-form-switch-bar',
  props: {
    option: {
      type: Object,
      require: true,
    },
  },
}
</script>

<style lang="scss">
.comInfo {
  border: 1px dashed #606266;
  font-size: 12px;
  padding-bottom: 6px;
  padding-top: 8px;
  margin: 6px;
  .comptype {
    color: #606266;
    padding: 6%;

    &:hover {
      color: green;
    }
  }
  &:hover {
    border: 2px dotted blue;
  }
}
</style>
