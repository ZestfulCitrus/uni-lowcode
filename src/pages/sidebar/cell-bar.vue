<template>
  <view>
      <span>列表标题</span>
      <u-input v-model="option.title" type="text" :border="true"/>
      <!--view >
           <u-input v-model="value" :type="text" :border="true" />
      </view-->
      

  </view>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      required: true,
    }
  },
};
</script>

<style lang="scss">
</style>