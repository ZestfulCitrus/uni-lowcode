<template>
  <view class="content">
    <u-toast ref="uToast" />
    <!--弹出层-->
    <!--事件编辑器-->
    <u-popup v-model="eventEdit" width="80%" mode="center" :closeable="true" :mask-close-able='false' >
      <view style="display: flex;padding-top:40px;">
        <view style="flex: 1"></view>
        <view style="flex: 1">
          <MonacoEditor
            height="800"
            language="javascript"
            :code="code"
            @mounted="onMounted"
            @codeChange="onCodeChange"
          >
          </MonacoEditor>
        </view>
      </view>
    </u-popup>
    <!--页面预览-->
    <u-popup v-model="preview" width="50%" mode="center">
      <view style="display: flex; margin: 10px">
        <u-field
          required
          v-model="pageName"
          :error-message="saveError"
          label="页面名称"
        ></u-field>
        <button @click="save()">新增</button>
      </view>
      <view
        style="display: flex; background-color: gray; justify-content: center"
      >
        <view class="phone">
          <r-vue-page :options="options"></r-vue-page>
        </view>
      </view>
    </u-popup>
    <!--页面导入-->
    <u-popup v-model="importRawPop" width="50%" mode="right">
      <view style="width: 40%; margin: 20px; border: 1px solid #000">
        <u-cell-group>
          <u-cell-item
            :title="item.formName"
            :arrow="false"
            v-for="(item, index) in existForm"
            :key="index"
            @click="changeOption(item)"
            >表单ID：{{ item.id }}</u-cell-item
          >
        </u-cell-group>
      </view>
    </u-popup>
    <!--页面json编辑-->
    <u-popup v-model="show" width="50%" mode="right">
      <view
        ><vue-json-editor
          style="margin-left: 5px; margin-right: 5px; height: 600px"
          v-model="options"
          mode="code"
          :show-btns="false"
          :expandedOnStart="true"
        ></vue-json-editor
      ></view>
    </u-popup>
    <!--导航栏-->
    <view class="rtnav">
      <view class="left">RT-VUE低代码开发平台</view>
      <view class="right" @click="show = true">JSON预览</view>
      <view
        class="right"
        @click="exportRaw(JSONfn.stringify(options), 'options.json')"
        >生成JSON
      </view>
      <view class="right" @click="preview = true">页面调试</view>
      <view class="right" @click="catchImage">页面导入</view>
    </view>
    <!--主页面-->
    <view class="main-contain">
      <!--拖动控件-->
      <view class="label">
        <Label></Label>
      </view>
      <!--页面布局-->

      <view class="layout">
        <view style="width: 100%">
          <view
            style="
              height: 40px;
              width: 100%;
              border-bottom: 1px solid #c0c4cc;
              padding: 5px;
            "
          >
            <u-button
              @click="savePageAndCatch"
              style="float: right"
              size="mini"
              type="primary"
              >保存页面</u-button
            >
          </view>
          <view style="display: flex; justify-content: center">
            <view class="phone" id="phone">
              <r-vue-edit
                :options="options"
                @focusleave="focusleave"
                :config="layoutconfig"
                ref="rvuez"
              ></r-vue-edit>
            </view>
          </view>
        </view>
      </view>
      <!--组件配置信息-->
      <view class="option">
        <view>
          <u-tabs
            :list="optionList"
            :is-scroll="false"
            :current="currentOption"
            @change="change"
          ></u-tabs>
          <!--组件属性-->
          <view
            style="height: 600px"
            v-if="
              currentOption == 0 && options[layoutconfig.current] != undefined
            "
          >
            <component
              @update:foo="openCodeEditor"
              :is="CompentToOptionMap[layoutconfig.type]"
              :option="options[layoutconfig.current]"
            ></component>
          </view>
          <vue-json-editor
            style="margin-left: 5px; margin-right: 5px; height: 200px"
            v-if="
              currentOption == 0 && options[layoutconfig.current] != undefined
            "
            v-model="options[layoutconfig.current].option"
            mode="code"
            :show-btns="false"
            :expandedOnStart="true"
            @json-change="onJsonChange"
          ></vue-json-editor>
          <!--基础属性-->
          <style-bar
            style="height: 600px"
            v-if="
              currentOption == 1 && options[layoutconfig.current] != undefined
            "
            :option="options[layoutconfig.current]"
          >
          </style-bar>
          <vue-json-editor
            style="margin-left: 5px; margin-right: 5px"
            v-if="
              currentOption == 1 && options[layoutconfig.current] != undefined
            "
            v-model="options[layoutconfig.current].compStyle"
            mode="code"
            :show-btns="false"
            :expandedOnStart="true"
            @json-change="onJsonChange"
          ></vue-json-editor>
          <!--数据绑定-->
          <view
            v-if="
              currentOption == 3 && options[layoutconfig.current] != undefined
            "
          >
            <data-bar></data-bar>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import JSONfn from "@/components/util/jsonfn.min.js";
import Label from "../labels/label.vue";
import cellBar from "../sidebar/cell-bar.vue";
import utilFunc from "@/utils/exportFunc.js";
import StyleBar from "../sidebar/style-bar/style-bar.vue";
import vueJsonEditor from "../sidebar/jsoneditor/vue-json-editor.vue";
import DataBar from "../sidebar/data-bar/data-bar.vue";
import html2canvas from "html2canvas";
import MonacoEditor from "vue-monaco-editor";
export default {
  components: {
    cellBar,
    Label,
    StyleBar,
    vueJsonEditor,
    DataBar,
    MonacoEditor,
  },
  watch: {
    layoutconfig: {
      handler: function () {
        console.log(this.layoutconfig.current);
      },
      deep: true,
    },
  },

  data() {
    return {
      JSONfn: {},
      show: false,
      code: "()=>{}",
      eventEdit: false,
      preview: false,
      pageName: "",
      saveError: "",
      //中间布局数据
      layoutconfig: {
        current: 0,
        type: "r-form-input",
      },
      //页面json
      options: [],
      importRawPop: false,
      //
      optionList: [
        {
          name: "组件属性",
        },
        {
          name: "样式属性",
        },
        {
          name: "动画效果",
        },
        {
          name: "字段关联",
        },
      ],
      currentOption: 0,
      //mapping compnent to option
      CompentToOptionMap: {},
      existForm: [],
    };
  },
  onLoad() {
    this.JSONfn = JSONfn;
    this.CompentToOptionMap = this.GetMapFromCompToOption();
    this.options = this.$store.state.page.options;
  },
  methods: {
    ...utilFunc,
    savePageAndCatch() {
      let that = this;
      html2canvas(document.getElementById("phone")).then(function (canvas) {
        let base64url = canvas.toDataURL("image/jpeg", 1.0);
        that.$store.commit("saveImage", base64url);
        that.$refs.uToast.show({
          title: "保存成功",
          type: "success",
          position: "top",
          url: "/pages/index/index",
        });
      });
    },
    catchImage() {
      html2canvas(document.getElementById("phone")).then(function (canvas) {
        let base64url = canvas.toDataURL("image/jpeg", 1.0);
        console.log(base64url);
      });
    },
    change(index) {
      this.currentOption = index;
    },
    focusleave() {
      this.layoutconfig.current = -1;
    },
    onJsonChange() {},
    importRaw() {
      this.importRawV1(this);
      this.importRawPop = true;
    },
    changeOption(item) {
      this.changeOptionV1(this, item);
    },
    save() {
      if (this.pageName === "") {
        this.saveError = "必须填写页面名字";
      } else this.savePage(this.pageName, this.options, this);
    },
    onMounted(editor) {
      this.editor = editor;
      editor.trigger("editor", "editor.action.formatDocument");
    },
    onCodeChange(editor) {
      editor.trigger('anything','editor.action.formatDocument');
      //console.log(editor.getValue());
    },
    openCodeEditor(code) {
      this.code = code
      this.eventEdit = true;
    },
  },
};
</script>

<style lang="scss">
@import "../scss/indexStyle.scss";
</style>
