<!--
 * @Author: your name
 * @Date: 2021-07-27 13:37:34
 * @LastEditTime: 2021-07-28 13:20:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rtvue-form\src\pages\sidebar\option-bar\option-r-swiper-bar.vue
-->
<template>
  <view style="margin-top: 12px; margin-left: 6px; border: 1px dotted #000;max-height:580px;overflow:scroll;">
    <view class="comInfo">
      <text class="comptype">组件类型：轮播器</text>
    </view>
    <view class="comInfo">
      <text class="comptype">组件id：{{ option.id }}</text>
    </view>
    <view class="comInfo">
      <view class="uni-list">
        <view
          class="uni-list-cell"
          hover-class="uni-list-cell-hover"
          v-for="(item, index) in option.option.list"
          :key="index"
        >
          <u-field v-model="item.title" :label="`文字${index + 1}`"></u-field>
          <u-image width="100%" height="300rpx" :src="item.image"></u-image>
          <u-upload ref="upload" :before-upload="beforeUpload" max-count="1"></u-upload>
          <u-button type="warning" size="mini" @click="remove(index,item)"
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
  name: 'option-r-swiper-bar',
  props: {
    option: {
      type: Object,
      require: true,
    },
  },
  beforeMount() {
    if (this.option.option.btn != undefined) this.btnChecked = true
  },
  mounted() {
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
    remove(index,item) {
      this.option.option.list.splice(index, 1)
      this.$refs.upload[index].clear()
    },
    add() {
      this.option.option.list.push({
        image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
        title: "name"
      })
    },
    beforeUpload (index,list) {
      this.$refs.upload.forEach((item, key)=>{
        if(item.lists.length > 0 && item.lists[0].url === list[0].url) {
          this.option.option.list[key].image = list[0].url
        }
      })
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
<style lang="scss" scoped>
.uni-list-cell {
  position: relative;
}
.u-field {
  padding: 10px 50px 10px 14px;
}
.u-size-mini {
  position: absolute;
  top: 10px;
  right: 0;
}
