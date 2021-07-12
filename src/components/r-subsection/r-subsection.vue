<template>
  <u-subsection
    :list="option.list"
    :current="option.current"
    @change="change"
    :active-color="option.activeColor"
    :inactive-color="option.inactiveColor"
    :mode="option.mode"
    :font-size="option.fontSize"
    :height="option.height"
    :animation="option.animation"
    :bold="option.bold"
    :bg-color="option.bgColor"
    :button-color="option.buttonColor"
  ></u-subsection>
</template>

<script>
export default {
  name:'RSubsection',
  methods: {
    change(index) {
      this.option.current = index;
      this.option.current_value = this.option.list[index].name;
    },
  },
  props: {
    option: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>