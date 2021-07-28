<!--
 * @Author: your name
 * @Date: 2021-07-27 11:45:14
 * @LastEditTime: 2021-07-28 16:34:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rtvue-form\src\pages\sidebar\option-bar\option-r-grid-bar.vue
-->
<template>
  <view
    style="margin-top: 12px; margin-left: 6px; border: 1px dotted #000;max-height:580px;overflow:scroll;"
  >
    <view class="comInfo">
      <text class="comptype">组件类型：宫格按钮</text>
    </view>
    <view class="comInfo">
      <text class="comptype">组件id：{{ option.id }}</text>
    </view>
    <view class="comInfo">
      <u-field v-model="option.option.col" label="一行个数"></u-field>
    </view>
    <view class="comInfo">
      <view class="uni-list">
        <view
          class="comInfo"
          hover-class="uni-list-cell-hover"
          v-for="(item, index) in option.option.list"
          :key="index"
        >
          <p>图标{{ index + 1 }}：</p>
          <u-field v-model="item.label" label="文字"></u-field>
          <u-field v-model="item.size" label="大小"></u-field>
          <u-field v-model="item.name" label="图片"></u-field>
          <u-button type="primary" size="medium" @click="openFile"
            >点我查看图片对应的名称</u-button
          >
          <u-button type="warning" size="mini" @click="remove(index, item)"
            >删除</u-button
          >
        </view>
        <u-button type="success" @click="add">新增</u-button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'option-r-grid-bar',
  props: {
    option: {
      type: Object,
      require: true,
    },
  },
  beforeMount() {
    if (this.option.option.btn != undefined) this.btnChecked = true
  },
  computed: {
    code() {
      return JSON.stringify(this.option)
    },
  },
  data() {
    return {
      src: require('@/static/equip/icon.png'),
      btnChecked: false,
      options: {
        selectOnLineNumbers: false,
        foldingStrategy: 'indentation', // 代码可分小段折叠
        automaticLayout: true, // 自适应布局
        overviewRulerBorder: false, // 不要滚动条的边框
        autoClosingBrackets: true,
        tabSize: 2, // tab 缩进长度
        minimap: {
          enabled: false, // 不要小地图
        },
      },
    }
  },
  watch: {
    'option.id'(a, b) {
      this.btnChecked = this.option.option.btn != undefined
    },
    btnChecked(a, b) {
      if (this.btnChecked)
        this.$set(this.option.option, 'btn', { codeText: '单击' })
      else this.$delete(this.option.option, 'btn')
    },
  },
  methods: {
    onMounted(editor) {
      this.editor = editor
    },
    onJsonChange(value) {
      console.log('value:', value)
    },
    onCodeChange(editor) {
      console.log(editor.getValue())
    },
    openFile() {
      let url = location.href.split('#')[0] + 'static/img/icon.3d8b6875.png'
      window.open(url)
    },
    add() {
      this.option.option.list.push({
        name: 'photo',
        size: 46,
        label: 'name',
        badge: {
          visual: true,
          count: 1,
        },
      })
    },
    remove(index, item) {
      this.option.option.list.splice(index, 1)
    },
  },
}
</script>

<style lang="scss">
.comInfo {
  border: 1px dashed #606266;
  font-size: 14px;
  padding-bottom: 6px;
  padding-top: 8px;
  margin: 6px;
  .comptype {
    color: #606266;
    padding: 6%;

    &:hover {
      color: green;
    }
  }
  &:hover {
    border: 2px dotted blue;
  }
  .pic {
    height: 4000px;
  }
}
</style>
