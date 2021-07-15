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
          <r-vue :options="options" ref="rvuez"></r-vue>
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
          <cell-bar
            v-if="options[currentContainer].type == 'r-cell' && currentOption==0"
            :option="options[currentContainer]"
          ></cell-bar>
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
export default {
  components: { cellBar, Label },
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
      currentContainer: 0,
      options: [],
      ...defaultData,
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
    this.options.push(this.rCellDef);
  },
  methods: {
    ...utilFunc,
    change(index) {
      this.currentOption = index;
    },
    drag(ctype, type) {
      item = {
        operation: "add",
        contain: ctype,
        type: type,
      };
    },
    dropover(ev) {
      ev.preventDefault();
      ev.target.classList.add("content-drap-over");
      ev.target.classList.remove("content-drag-leave");
      //v-on:dragover.native.prevent
    },
    drop(ev) {
      ev.target.classList.remove("content-drap-over");
      ev.target.classList.add("content-drag-leave");
      if (item.contain == "r-swiper" && item.operation == "add") {
        this.options.push(this.rSwiperDef);
      } else if (
        item.contain == "r-cell" &&
        item.type == "" &&
        item.operation == "add"
      ) {
        this.options.push(this.rCellDef);
      } else if (
        item.contain == "r-form" &&
        item.type == "" &&
        item.operation == "add"
      ) {
        this.options.push(this.rFormDef);
      } else if (
        item.contain == "r-grid" &&
        item.type == "" &&
        item.operation == "add"
      ) {
        this.options.push(this.rGridDef);
      } else if (
        item.contain == "r-me" &&
        item.type == "" &&
        item.operation == "add"
      ) {
        this.options.push(this.rMe);
      } else if (
        item.contain == "r-menu" &&
        item.type == "" &&
        item.operation == "add"
      ) {
        this.options.push(this.rMenu);
      } else if (
        item.contain == "r-image" &&
        item.type == "" &&
        item.operation == "add"
      ) {
        this.options.push(this.rImage);
      } else if (
        item.contain == "r-raster" &&
        item.type == "" &&
        item.operation == "add"
      ) {
        this.options.push(this.rRatser);
      } else if (
        item.contain == "r-card" &&
        item.type == "" &&
        item.operation == "add"
      ) {
        this.options.push(this.rCard);
      }
      item = {};
    },
    dragleave(ev) {
      ev.target.classList.remove("content-drap-over");
      ev.target.classList.add("content-drag-leave");
      ev.stopPropagation();
    },
    changeCurrentContainer(index) {
      this.currentContainer = index;
    },
    containerdrag(index) {
      item = {
        operation: "swapcontainer",
        index: index,
      };
    },
    swapCurrentContainer(ev, index) {
      if (item.operation == "swapcontainer") {
        let obj = this.options[item.index];
        this.options[item.index] = this.options[index];
        this.options[index] = obj;
        this.options.push();
      }
    },
    deleteContainers(index) {
      this.options.splice(index, 1);
    },
  },
};
</script>

<style lang="scss">
@import "../scss/indexStyle.scss";
</style>
