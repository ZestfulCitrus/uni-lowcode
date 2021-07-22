<template>
<view class="l">
  <view class="l-main">
      <view class="l-menu " @click="changeMenu(index)" v-for="(item, index) in MenuList" :key="index" :class="{active:index==currentMenu}" >
        <image  :src="item.icon_url" class="l-menu-image">
        <text class="l-menu-text">{{ item.name }}</text>
      </view>
  </view>
  <view class="l-right">
    <view v-for="(items,index) in compTags" :key="index">
     <view v-if="currentMenu==index" >
      <view class="l-container" v-for="(item,index2) in items" :key="index2">
      <text>{{item.text}}</text>
      <view class="l-tags-container">
        <view
        v-for="(tag,index3) in item.tags" :key="index3"
          type="success"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag(tag.type)"
          v-on:dragend.native="dragend"
        >{{tag.text}}</view>
      </view>
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
      compTags: [
        [],
        [
          {
            text: "表单组件",
            tags: [
              { text: "普通输入框", type: "r-form-input" },
              { text: "时间输入框", type: "r-form-input-time" },
              { text: "评分输入框", type: "r-form-rate" },
              { text: "开关选择框", type: "r-form-switch" },
            ],
          },
          {
            text: "基本组件",
            tags: [
              { text: "轮播器", type: "r-swiper" },
              { text: "图片菜单", type: "r-menu" },
              { text: "图片", type: "r-image" },
              { text: "宫格按钮", type: "r-grid" },
            ],
          },
        ],
        {},
        {},
        {},
      ],
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
    dragend() {
      item = {};
    },
  },
};
</script>

<style lang="scss">
.l {
  .l-main {
    padding-top: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #000;
    width: 20%;
    height: 890px;
    float: left;
    .l-menu {
      height: 60px;
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .l-menu-image {
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
    }
    .active {
      background-color: blue;
    }
  }
  .l-right {
    width: 80%;
    .l-container {
      .l-tags-container {
        display: flex;
        flex-flow: wrap;
      }
      .l-tags {
        width: 120px;
        margin-top: 8px;
        margin-left: 5px;
        padding: 3px;
        border: 1px solid #c0c4cc; //#c0c4cc
        background-color: #f4f4f5;
        &:hover {
          width: 120px;
          border: 2px dotted;
          cursor: move;
          margin-top: 8px;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>