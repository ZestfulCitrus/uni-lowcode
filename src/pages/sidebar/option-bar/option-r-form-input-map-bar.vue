<!--
 * @Author: your name
 * @Date: 2021-07-27 11:45:48
 * @LastEditTime: 2021-07-27 14:43:08
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \rtvue-form\src\pages\sidebar\option-bar\option-r-form-input-map-bar.vue
-->
<template>
  <view style="margin-top: 12px; margin-left: 6px; border: 1px dotted #000">
    <view class="comInfo">
      <text class="comptype">组件类型：位置选择器</text>
    </view>
    <view class="comInfo">
      <text class="comptype">组件id：{{ option.id }}</text>
    </view>
    <view class="comInfo">
      <u-field v-model="option.option.label" label="左侧标题"></u-field>
    </view>
  </view>
</template>

<script>
export default {
  name: 'option-r-form-input-map-bar',
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
}
</style>
