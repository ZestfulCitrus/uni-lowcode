<template>
  <view style="margin-top: 12px; margin-left: 6px; border: 1px dotted #000">
    <view class="comInfo">
      <text class="comptype">组件类型：普通输入框</text>
    </view>
    <view class="comInfo">
      <text class="comptype">组件id：{{ option.id }}</text>
    </view>
    <view class="comInfo">
      <u-field v-model="option.option.label" label="左侧标题"></u-field>
    </view>
    <view class="comInfo">
      <u-field v-model="option.option.value" label="默认数值"></u-field>
    </view>
    <view class="comInfo">
      <text class="comptype">是否有按钮</text
      ><u-switch v-model="btnChecked"></u-switch>
    </view>
    <view v-if="btnChecked">
      <view class="comInfo">
        <u-field
          v-model="option.option.btn.codeText"
          label="按钮文字"
        ></u-field>
      </view>
      <view class="comInfo">
        <text class="comptype">编辑按钮单击事件</text>
        <u-button size="mini" @click="changeBtnCodeFunc">编辑 </u-button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "option-r-form-input-bar",
  props: {
    option: {
      type: Object,
      require: true,
    },
  },
  beforeMount() {
    if (this.option.option.btn != undefined) this.btnChecked = true;
  },
  computed: {
    code() {
      return JSON.stringify(this.option);
    },
  },
  data() {
    return {
      btnChecked: false,
      options: {
        selectOnLineNumbers: false,
        foldingStrategy: "indentation", // 代码可分小段折叠
        automaticLayout: true, // 自适应布局
        overviewRulerBorder: false, // 不要滚动条的边框
        autoClosingBrackets: true,
        tabSize: 2, // tab 缩进长度
        minimap: {
          enabled: false, // 不要小地图
        },
      },
    };
  },
  watch: {
    "option.id"(a, b) {
      this.btnChecked = this.option.option.btn != undefined;
    },
    btnChecked(a, b) {
      if (this.btnChecked)
        this.$set(this.option.option, "btn", {
          getCode: () => {
            uni.request({
              url: "https://www.example.com/request", //仅为示例，并非真实接口地址。
              data: {
                text: "uni.request",
              },
              header: {
                "custom-header": "hello", //自定义请求头信息
              },
              success: (res) => {
                console.log(res.data);
                this.text = "request success";
              },
            });
          },
          codeText: "单击",
        });
      else this.$delete(this.option.option, "btn");
    },
  },
  methods: {
    onMounted(editor) {
      this.editor = editor;
    },
    onJsonChange(value) {
      console.log("value:", value);
    },
    onCodeChange(editor) {
      console.log(editor.getValue());
    },
    changeBtnCodeFunc() {
      let code = this.option.option.btn.getCode.toString();
      var body = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));
      this.$emit("update:foo", body,this.option.option.btn.getCode);
    },
    saveFunc(code){
      try{
        this.option.option.btn.getCode = new Function(code)
        
      }catch(e){
        return false
      }
      return true
    }
  },
};
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