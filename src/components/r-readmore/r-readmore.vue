<template>
  <u-read-more
    :ref="readmore_ref"
    :show-height="option.showHeight"
    :toggle="option.toggle"
    :close-text="option.closeText"
    :font-size="option.fontSize"
    :open-text="option.openText"
    :color="option.color"
    :text-indent="option.textIndent"
  >
    <u-parse :html="option.content" @load="parseLoaded"></u-parse>
  </u-read-more>
</template>

<script>
export default {
  name:'RReadmore',
  props: {
    option: {
      type: Object,
      require: true,
    },
    readmore_ref: {
      type: String,
      require: true,
    },
  },
  watch: {
    "option.content"(v, o) {
      this.$refs[this.readmore_ref].init();
    },
  },
  methods: {
    parseLoaded() {
      this.$refs[this.readmore_ref].init();
    },
  },
};
</script>

<style lang="scss">
</style>