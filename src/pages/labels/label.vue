<template>
<view style="display:flex">
  <view class="l-main">
      <view @click="changeMenu(index)" v-for="(item, index) in MenuList" :key="index" style="height: 90px;display:flex;flex-direction: column;align-items: center; " >
        <image :src="item.icon_url" class="l-menu">
        <text class="l-menu-text">{{ item.name }}</text>
      </view>
  </view>
  <view>
    <view v-if="currentMenu==2">
      <view class="l-container">
      <text>列表组件</text>
      <view>
        <u-tag
          text="普通列表"
          type="success"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-cell', 'common_cell')"
        ></u-tag>
        <u-tag
          text="选择列表"
          type="success"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-cell', 'radio')"
        ></u-tag>
        <u-tag
          text="标签列表"
          type="success"
          class="l-tags"
          draggable="true"
          v-on:dragstart.native="drag('r-cell', 'tags')"
        ></u-tag>
      </view>
    </view>
    </view>
  </view>
</view>
  <!--view class="l-container">
      <text>模板容器</text>
      <view class="lcontainer">
        <u-tag
          text="用户容器"
          type="warning"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-me', '')"
        ></u-tag>
      </view>
    </view>
    <view class="l-container">
      <text>常规容器</text>
      <view>
        <u-tag
          text="列表容器"
          type="primary"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-cell', '')"
        ></u-tag>
        <u-tag
          text="轮播容器"
          type="primary"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-swiper', '')"
        ></u-tag>
        <u-tag
          text="表单容器"
          type="primary"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-form', '')"
        ></u-tag>
        <u-tag
          text="宫格容器"
          type="primary"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-grid', '')"
        ></u-tag>
        <u-tag
          text="卡片容器"
          type="primary"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-card', '')"
        ></u-tag>

        <u-tag
          text="图标菜单容器"
          type="primary"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-menu', '')"
        ></u-tag>
        <u-tag
          text="图片容器"
          type="primary"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-image', '')"
        ></u-tag>
        <u-tag
          text="栅格文字容器"
          type="primary"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-raster', '')"
        ></u-tag>
      </view>
    </view>
    <view class="l-container">
      <text>列表组件</text>
      <view>
        <u-tag
          text="普通列表"
          type="success"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-cell', 'common_cell')"
        ></u-tag>
        <u-tag
          text="选择列表"
          type="success"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-cell', 'radio')"
        ></u-tag>
        <u-tag
          text="标签列表"
          type="success"
          class="l-tags"
          draggable="true"
          v-on:dragstart.native="drag('r-cell', 'tags')"
        ></u-tag>
      </view>
    </view>
    <view class="l-container">
      <text>表单组件</text>
      <view>
        <u-tag
          text="表单位置"
          type="success"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-form', 'location')"
        ></u-tag>
        <u-tag
          text="表单步进器"
          type="success"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-form', 'number-box')"
        ></u-tag
        ><u-tag
          text="表单滑块"
          type="success"
          class="l-tags"
          draggable="true"
          v-on:dragstart.native="drag('r-form', 'slider')"
        ></u-tag
        ><u-tag
          text="表单普通输入框"
          type="success"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-form', 'common_input')"
        ></u-tag
        ><u-tag
          text="时间选择器"
          type="success"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-form', 'time_picker')"
        ></u-tag
        ><u-tag
          text="选择框（母框）"
          type="success"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-form', 'single_select')"
        ></u-tag
        ><u-tag
          text="选择框（子框）"
          type="success"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-form', 'single_select_child')"
        ></u-tag
        ><u-tag
          text="密码"
          type="success"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-form', 'password_input')"
        ></u-tag
        ><u-tag
          text="范围性的日历"
          type="success"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-form', 'range_calendar')"
        ></u-tag
        ><u-tag
          text="单选日历"
          type="success"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-form', 'single_calendar')"
        ></u-tag
        ><u-tag
          text="评分"
          type="success"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-form', 'common_rate')"
        ></u-tag>
        <u-tag
          text="单选框"
          type="success"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-form', 'radio')"
        ></u-tag
        ><u-tag
          text="开关"
          type="success"
          draggable="true"
          class="l-tags"
          v-on:dragstart.native="drag('r-form', 'switch')"
        ></u-tag>
      </view>
    </view-->
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
      currentMenu:0
    };
  },
  methods: {
    drag(ctype, type) {
      item = {
        operation: "add",
        contain: ctype,
        type: type,
      };
    },
    changeMenu(index){
      this.currentMenu=index;
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
    transition:  height 400ms;
    &:hover{
      height:40px;
      width: 40px;
    }
  }
  .l-menu-text{
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
  
}
</style>