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
        ><u-icon :name="tag.icon" style="margin-right:2px"></u-icon>{{tag.text}}</view>
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
              {icon:"list", text: "普通输入框", type: "r-form-input" },
              {icon:"list-dot", text: "多行输入框", type: "r-form-textarea-input" },
              {icon:"lock", text: "密码输入框", type: "r-form-input-password" },
              {icon:"clock", text: "时间输入框", type: "r-form-input-time" },
              {icon:"star", text: "评分输入框", type: "r-form-rate" },
              {icon:"checkmark", text: "开关选择框", type: "r-form-switch" },
              {icon:"info", text: "计数器", type: "r-form-numberbox" },
              {icon:"map",text:"位置选择器",type:"r-form-input-map"},
              {icon:"checkmark", text: "单选框", type: "r-form-radio" },
              {icon:"checkmark",text:"多选框",type:"r-form-checkboxes"},
              {icon:"plus", text: "滑动输入框", type: "r-form-slider" },
            ],
          },
          {
            text: "基本组件",
            tags: [
              {icon:"photo-fill", text: "轮播器", type: "r-swiper" },
              {icon:"order", text: "图片菜单", type: "r-menu" },
              {icon:"photo", text: "图片", type: "r-image" },
              {icon:"grid-fill",text: "宫格按钮", type: "r-grid" },
              {icon:"plus", text: "按钮", type: "r-button" },
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
    height: 100vh;
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
      color: blue;
    }
  }
  .l-right {
    width: 80%;
    .l-container {
      color: gray;
      margin-bottom: 15px;
      .l-tags-container {
        display: flex;
        flex-flow: wrap;
      }
      .l-tags {
        color: black;
        width: 120px;
        margin-top: 8px;
        margin-left: 5px;
        padding: 3px;
        //border: 1px solid #c0c4cc; //#c0c4cc
        background-color: #f4f4f5;
        &:hover {
          width: 120px;
          border: 1px dotted;
          cursor: move;
          margin-top: 8px;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>