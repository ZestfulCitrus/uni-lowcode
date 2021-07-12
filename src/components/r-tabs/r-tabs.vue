<template>
  <u-tabs
    name="cate_name"
    count="cate_count"
    :list="option.list"
    :is-scroll="option.isScroll"
    :current="option.current"
    @change="change"
    :height="option.height"
    :font-size="option.fontSize"
    :duration="option.duration"
    :active-color="option.activeColor"
    :inactive-color="option.inactiveColor"
    :bar-width="option.barWidth"
    :bar-height="option.barHeight"
    :gutter="option.gutter"
    :bg-color="option.bgColor"
    :bold="option.bold"
    :show-bar="option.showBar"
    :item-width="option.itemWidth"
    :offset="option.offset"
  ></u-tabs>
</template>

<script>
export default {
  name:'RTabs',
  props: {
    option: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    change(index) {
      this.option.current = index;
    },
  },
};
</script>

<style lang="scss">
</style>