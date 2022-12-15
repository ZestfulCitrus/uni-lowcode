<template>
  <u-image
    :style="compStyle"
    :width="option.width"
     mode="scaleToFill"
    :height="option.height"
    :src="option.src"
    :shape="option.shape"
    :border-radius="option.borderRadius"
    :lazy-load="option.lazyLoad"
    :loading-icon="option.loadingIcon"
    :error-icon="option.errorIcon"
    :show-loading="option.showLoading"
    :show-error="option.showLoading"
    :fade="option.fade"
    :webp="option.webp"
    :duration="option.duration"
    :bg-color="option.bgColor"
  ></u-image>
</template>

<script>
import { rvuecomp } from "../mixins/r-vue-comp";
export default {
  name: "r-image",
  mixins: [rvuecomp],
};
</script>

<style lang="scss">
</style>