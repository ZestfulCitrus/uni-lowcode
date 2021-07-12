<template>
  <u-swiper
    :list="option.list"
    :title="option.title"
    :mode="option.mode"
    :height="option.height"
    :indicator-pos="option.indicatorPos"
    :effect3d="option.effect3d"
    :autoplay="option.autoplay"
    :interval="option.interval"
    :circular="option.circular"
    :duration="option.duration"
    :border-radius="option.borderRadius"
    :effect3d-previous-margin="option.effect3dPreviousMargin"
    :img-mode="option.imgMode"
    :name="option.name"
    :bg-color="option.bgColor"
    :current="option.current"
  ></u-swiper>
</template>

<script>
export default {
  name:'r-swiper',
  props: {
    option: Object,
    require: true,
  },
};
</script>

<style lang="scss">
</style>