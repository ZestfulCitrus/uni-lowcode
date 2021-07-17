<template>
<view style="display:flex">
  <view class="l-main">
      <view @click="changeMenu(index)" v-for="(item, index) in MenuList" :key="index" :class="{active:index==currentMenu}" style="height: 60px;margin-bottom:30px;display:flex;flex-direction: column;align-items: center; " >
        <image  :src="item.icon_url" class="l-menu">
        <text class="l-menu-text">{{ item.name }}</text>
      </view>
  </view>
  <view>
     <view v-if="currentMenu==1">
      <view class="l-container">
      <text>表单组件</text>
      <view>
        <u-tag
          text="普通输入框"
          type="success"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-form-input')"
          v-on:dragend.native="dragend"
        ></u-tag>
      </view>
    </view>
    </view>
    
  </view>
</view>
</template>

<script>
export default {
  data() {
    return {
      MenuList: [
        { icon_url: require("@/static/icons/container.png"), name: "布局容器" },
        { icon_url: require("@/static/icons/component.png"), name: "基础组件" },
        { icon_url: require("@/static/icons/work.png"), name: "业务组件" },
        { icon_url: require("@/static/icons/chart.png"), name: "图表组件" },
        { icon_url: require("@/static/icons/db.png"), name: "数据交互" },
      ],
      currentMenu: 1,
    };
  },
  methods: {
    drag(type) {
      item = {
        operation: "addComp",
        type: type,
      };
    },
    changeMenu(index) {
      this.currentMenu = index;
    },
    dragend(){
      item={}
    }
  },
};
</script>

<style lang="scss">
.l-main {
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #000;
  width: 20%;
  height: 890px;
  .l-menu {
    height: 30px;
    width: 30px;
    transition: width 400ms;
    transition: height 400ms;
    &:hover {
      height: 40px;
      width: 40px;
    }
  }
  .l-menu-text {
    font-weight: bolder;
    &:hover {
      color: blue;
    }
  }
  .l-container {
    margin-top: 8px;
    .l-tags {
      width: 120px;
      margin-top: 8px;
      margin-left: 5px;
    }
    .l-tags:hover {
      width: 120px;
      border: 2px dotted;
      cursor: move;
      margin-top: 8px;
      margin-left: 5px;
    }
  }
  .active {
    background-color: blue;
  }
}
</style>