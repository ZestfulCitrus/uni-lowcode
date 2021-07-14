<template>
  <view>
    <view class="l-container">
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
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    drag(ctype, type) {
      item = {
        operation: "add",
        contain: ctype,
        type: type,
      };
    },
  },
};
</script>

<style lang="scss">
.l-container {
  margin-top: 8px;
  .l-tags {
    width: 120px;
    margin-top: 8px;
    margin-left: 5px;
  }
  .l-tags:hover{
    width: 120px;
    border: 2px dotted;
    cursor:move;
    margin-top: 8px;
    margin-left: 5px;
  }
}
</style>