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
      <view class="right">预览</view>
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
          <r-vue :options="options" :config="layoutconfig" ref="rvuez"></r-vue>
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
          <form-input-bar v-if="layoutconfig.type == 'r-form-input'&&currentOption == 0" :option="options[layoutconfig.current]"></form-input-bar>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Label from "../labels/label.vue";
import cellBar from "../sidebar/cell-bar.vue";
import defaultData from "@/static/jsons/default_data.js"; //导入默认数据
import utilFunc from "@/utils/exportFunc.js";
import FormInputBar from '../sidebar/form-input-bar.vue';
export default {
  components: { cellBar, Label, FormInputBar },
  watch: {
    options: {
      handler: function () {
        console.log("obj改变了");
      },
      deep: true,
    },
  },
  data() {
    return {
      //中间布局数据
      layoutconfig:{
        current:0,
        type:''
      },
      //页面json
      options: [],
      //默认数据
      ...defaultData,
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
    };
  },
  onLoad() {
    this.options.push(this.rFormInput);
    this.options.push(this.rFormInput2);
  },
  methods: {
    ...utilFunc,
    change(index) {
      this.currentOption = index;
    },
  },
};
</script>

<style lang="scss">
@import "../scss/indexStyle.scss";
</style>
