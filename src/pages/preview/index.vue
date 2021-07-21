<template>
  <r-vue-page :options="options"></r-vue-page>
</template>

<script>
export default {
  data() {
    return {
      options: []
    };
  },
  onLoad(){
      this.options = uni.getStorageSync('options')
  }
};
</script>

<style>
</style>