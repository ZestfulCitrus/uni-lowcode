<template>
  <view class="content">
    <!--导航栏-->
    <view class="rtnav">
      <view class="left">RT-VUE低代码开发平台</view>
      <view
        class="right"
        @click="exportRaw(JSON.stringify(options), '导出文件.json')"
        >生成JSON</view
      >
      <view class="right" @click="preview">预览</view>
    </view>
    <!--主页面-->
    <view class="main-contain">
      <!--拖动控件-->
      <view class="label">
        <Label></Label>
      </view>
      <!--页面布局-->
      <view class="layout">
        <view class="phone">
          <r-vue-edit
            :options="options"
            @focusleave="focusleave"
            :config="layoutconfig"
            ref="rvuez"
          ></r-vue-edit>
        </view>
      </view>
      <!--组件配置信息-->
      <view class="option">
        <view>
          <u-tabs
            :list="optionList"
            :is-scroll="false"
            :current="currentOption"
            @change="change"
          ></u-tabs>
          <!--组件属性-->
          <component
            :is="CompentToOptionMap[layoutconfig.type]"
            v-if="
              currentOption == 0 && options[layoutconfig.current] != undefined
            "
            :option="options[layoutconfig.current]"
          ></component>
          <!--基础属性-->
          <style-bar
            v-if="
              currentOption == 1 && options[layoutconfig.current] != undefined
            "
            :option="options[layoutconfig.current]"
          >
          </style-bar>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Label from "../labels/label.vue";
import cellBar from "../sidebar/cell-bar.vue";
import utilFunc from "@/utils/exportFunc.js";
import StyleBar from "../sidebar/style-bar/style-bar.vue";
export default {
  components: { cellBar, Label, StyleBar },
  watch: {
    layoutconfig: {
      handler: function () {
        console.log(this.layoutconfig.current);
      },
      deep: true,
    },
  },
  data() {
    return {
      //中间布局数据
      layoutconfig: {
        current: 0,
        type: "r-form-input",
      },
      //页面json
      options: [],
      //
      optionList: [
        {
          name: "组件属性",
        },
        {
          name: "基础属性",
        },
        {
          name: "动画效果",
        },
        {
          name: "数据绑定",
        },
      ],
      currentOption: 0,
      //mapping compnent to option
      CompentToOptionMap: {},
    };
  },
  onLoad() {
    this.CompentToOptionMap = this.GetMapFromCompToOption();
  },
  methods: {
    ...utilFunc,
    change(index) {
      this.currentOption = index;
    },
    focusleave() {
      this.layoutconfig.current = -1;
    },
    preview() {
      uni.setStorageSync("options", this.options);
      this.$u.route({
        url: "pages/preview/index",
      });
    },
  },
};
</script>

<style lang="scss">
@import "../scss/indexStyle.scss";
</style>
