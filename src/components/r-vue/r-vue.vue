<template>
  <view>
    <view v-for="(item, index) in options" :key="index" :ref="'rvuez' + index">
      <r-card v-if="item.type == 'r-card'" :option="item.option"></r-card>
      <r-cell
        v-if="item.type == 'r-cell'"
        :list="item.option"
        :title="item.title"
        drop
      ></r-cell>
      <r-dropdown
        v-if="item.type == 'r-dropdown'"
        :option="item.option"
        :dd_ref="$u.guid()"
      ></r-dropdown>
      <r-fingerprint
        :option="item.option"
        v-if="item.type == 'r-fingerprint'"
      ></r-fingerprint>
      <r-form
        v-if="item.type == 'r-form'"
        :list="item.option"
        @get_form_data="item.get_form_data"
        :form_ref="$u.guid()"
        :form.sync="item.form"
      ></r-form>
      <r-grid v-if="item.type == 'r-grid'" :option="item.option"></r-grid>
      <r-map v-if="item.type == 'r-map'"></r-map>
      <r-me :option="item.option" v-if="item.type == 'r-me'"></r-me>
      <r-qrcode v-if="item.type == 'r-qrcode'"></r-qrcode>
      <r-readmore
        v-if="item.type == 'r-readmore'"
        :option="item.option"
        :readmore_ref="$u.guid()"
      ></r-readmore>
      <r-steps v-if="item.type == 'r-steps'" :option="item.option"></r-steps>
      <r-subsection
        v-if="item.type == 'r-subsection'"
        :option="item.option"
      ></r-subsection>
      <r-swiper v-if="item.type == 'r-swiper'" :option="item.option"></r-swiper>
      <r-tabs v-if="item.type == 'r-tabs'" :option="item.option"></r-tabs>
      <r-timeline
        v-if="item.type == 'r-timeline'"
        :option="item.option"
      ></r-timeline>
      <r-menu v-if="item.type == 'r-menu'" :option="item.option"></r-menu>
    </view>
  </view>
</template>

<script>
export default {
  name: "r-vue",
  data() {
    return {};
  },
  props: {
    options: {
      type: Array,
      require: true,
    },
  },
  methods: {},
  mounted() {
    
  },
};
</script>

<style>
</style>