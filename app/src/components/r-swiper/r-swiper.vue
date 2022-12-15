<template>
  <u-swiper
    :style="compStyle"
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
import { rvuecomp } from "../mixins/r-vue-comp";
export default {
  name: "r-swiper",
  mixins: [rvuecomp],
};
</script>

<style lang="scss">
</style>