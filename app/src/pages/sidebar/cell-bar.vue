<template>
  <view>
    <view class="cell-contain">
      <text>列表名称</text>
      <u-input
        class="cell-input"
        v-model="option.title"
        type="text"
        :border="true"
      />
    </view>
    <view
      class="cell-contain"
      v-for="(item, index) in option.option"
      :key="index"
    >
      <text>左侧标题</text>
      <u-input
        class="cell-input"
        v-model="item.title"
        type="text"
        :border="true"
      />
      <text style="margin-left:6px">箭头显示</text>
      <u-switch v-model="item.arrow"></u-switch>
      <view class="cell-component" v-if="item.type == 'common_cell'">
        <text>右侧数值</text>
        <u-input
          class="cell-input"
          v-model="item.value"
          type="text"
          :border="true"
        />
      </view>
      <view class="cell-component-tags" v-if="item.type == 'tags'">
        <text>标签集合</text>
        <view class="cell-input  cell-tags-header">
          <text style="margin-left:3%">值</text>
          <text style="margin-left:40%">模式</text>
          <text style="margin-left:35%">操作</text>
        </view>
        <view
          v-for="(item2, index2) in item.list"
          class="cell-input cell-input-contain"
          :key="index2"
        >
          <u-input style="margin-left:6px" v-model="item2.text" type="text" :border="true" />
          <u-input style="margin-left:6px" v-model="item2.mode" type="text" :border="true" />
          <u-button style="margin-left:6px" size="mini" type="error" @click="changeTags(index,index2)">删除</u-button>
        </view>
         <u-button @click="addtags(index)" class="cell-input cell-input-h">+</u-button>
      </view>
      <view class="cell-component" v-if="item.type == 'radio'">
        <text>右侧数值</text>
        <u-input
          class="cell-input"
          v-model="item.value"
          type="text"
          :border="true"
        />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  /*
{
  "type": "r-cell",
  "option": [
    {
      "type": "common_cell",
      "title": "名称",
      "value": "数值",
      "arrow": true,
      "arrow_direction": "down"
    },
    {
      "type": "tags",
      "title": "标签",
      "list": [
        {
          "text": "plain",
          "mode": "plain"
        },
        {
          "text": "dark",
          "mode": "dark"
        },
        {
          "text": "light",
          "mode": "light"
        }
      ]
    },
    {
      "type": "radio",
      "title": "单选（是，否）",
      "value": "是",
      "arrow": false,
      "arrow_direction": "up",
      "conf": [
        {
          "name": "是",
          "disabled": false
        },
        {
          "name": "否",
          "disabled": true
        },
        {
          "name": "不是",
          "disabled": true
        },
        {
          "name": "第4个",
          "disabled": true
        }
      ]
    }
  ]
}



  */
  props: {
    option: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      width: "100px",
    };
  },
  methods:{
    addtags(index){
      this.option.option[index].list.push({
          "text": "light",
          "mode": "light"
        })
    },
    changeTags(index,index2){
      this.option.option[index].list.splice(index2,1);
    }
  }
};
</script>

<style lang="scss">
.cell-contain {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px;
  border: 1px dotted;
  flex-wrap: wrap;
  width: 100%;
  padding: 6px 12px 12px 6px;
  .cell-input {
    margin-left: 10px;
    width: 100%;
  }
  .cell-component {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 6px;
  }
  .cell-component-tags {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 6px;
    flex-wrap: wrap;
    .cell-input {
      margin-top: 6px;
      margin-left: 10px;
      align-items: center;
      width: 100%;
    }
    .cell-input-h{
      &:hover{
        border: 4px dotted #66ccff;
      }
    }
    .cell-tags-header{
      margin-left:10px;
      display: flex;
    }
  }
  .cell-input-contain{
    display: flex;
  }
  &:hover {
    border: 2px dotted #66ccff;
  }
}
</style>