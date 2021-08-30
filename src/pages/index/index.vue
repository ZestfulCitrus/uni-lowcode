<template>
  <view>
    <view class="nopc">😎请使用PC端加载应用获得更好的体验哦！</view>
    <view class="content">
      <u-toast ref="uToast" />
      <view class="rtnav">
        <view class="left">RT-VUE低代码开发平台</view>
        <!--view
        class="right"
        @click="exportRaw(JSON.stringify(options), '导出文件.json')"
        >生成JSON</view
      -->
        <view class="right">登录</view>
        <view class="right" @click="saveApps">保存数据到缓存中</view>
      </view>
      <u-popup v-model="exportPage" mode="center" width="70%" height="80%">
        <view style="display: flex; height: 100%">
          <view style="width: 50%">
            <vue-json-editor
              style="margin-left: 5px; margin-right: 5px"
              v-model="apps[currentApp].pages[currentPage].options"
              mode="code"
              :show-btns="false"
              :expandedOnStart="true"
              @json-change="onJsonChange"
            ></vue-json-editor>
          </view>
          <view style="padding: 10px">
            <view
              style="
                margin-left: auto;
                width: 375px;
                background-color: #f3f4f6;
                border: 1px solid #c0c4cc;
                overflow: auto;
                height: 812px;
              "
            >
              <r-vue-page
                :options="apps[currentApp].pages[currentPage].options"
              ></r-vue-page>
            </view>
          </view>
        </view>
      </u-popup>
      <u-popup v-model="showCreatePage" mode="center" width="50%" height="80%">
        <view style="padding: 10px">
          <view style="display: flex; justify-content: center">
            <h1>新建页面</h1>
          </view>
          <view style="display: flex; margin-top: 20px">
            <view style="flex: 1">
              <view>
                <u-field
                  label-width="240"
                  v-model="newPage.name"
                  style="margin-top: 10px"
                  label="页面名称："
                  placeholder="输入页面名称"
                  :border-top="true"
                ></u-field>
                <u-field
                  label-width="240"
                  v-model="newPage.path"
                  style="margin-top: 10px"
                  label="页面路径："
                  placeholder="输入页面路径"
                  :border-top="true"
                ></u-field>
                <u-button @click="createNewPage">创建页面</u-button>
              </view>
            </view>
            <view style="flex: 1; margin-left: 30px">
              <view style="">当前APP:{{ apps[currentApp].name }}</view>
            </view>
          </view>
        </view>
      </u-popup>
      <u-popup v-model="show" mode="center" width="50%" height="80%">
        <view style="padding: 10px">
          <view>
            <view style="display: flex; justify-content: center">
              <h1>新建APP</h1>
            </view>
            <view style="display: flex; justify-content: center">
              <view style="width: 80%">
                <u-field
                  label-width="240"
                  v-model="newApp.name"
                  style="margin-top: 10px"
                  label="App名称："
                  :placeholder="newApp.name"
                  :border-top="true"
                ></u-field>
                <u-field
                  label-width="240"
                  v-model="newApp.description"
                  type="textarea"
                  style="margin-top: 10px"
                  label="App描述："
                  placeholder="请填写App的用途"
                  :border-top="true"
                ></u-field>
                <u-field
                  label-width="240"
                  v-model="newApp.createName"
                  style="margin-top: 10px"
                  label="作者名称"
                  placeholder="作者名字"
                  :border-top="true"
                ></u-field>
                <u-button @click="createNewApp()">创建app</u-button>
              </view>
            </view>
          </view>
        </view>
      </u-popup>
      <view class="main-contain">
        <view class="label" style="text-align: center">
          <h1 style="margin: 10px; padding: 20px">App列表</h1>
          <button @click="show = true" style="background-color: grey">
            新建APP
          </button>
          <button
            v-for="(item, index) in apps"
            :key="index"
            @click="currentApp = index"
            :class="{ appActive: index === currentApp }"
          >
            {{ item.name }}
          </button>
        </view>
        <view class="layout2">
          <view style="width: 100%; display: flex; margin: 10px">
            <u-subsection
              :list="indexlist"
              :current="pageCurrent"
              style="width: 40%"
              @change="sectionChange"
            ></u-subsection>
          </view>
          <view>
            <view v-if="pageCurrent === 0">
              <view> 应用名称：{{ apps[currentApp].name }} </view>
              <view style="display:flex">
                <view v-for="(item,index) in apps[currentApp].pages" :key="index">
                  <view class="phone">
                <r-vue-page
                  :options="apps[currentApp].pages[index].options"
                ></r-vue-page>
                  </view>
                </view>
              </view>
            </view>
            <view
              v-if="pageCurrent === 1"
              style="
                display: flex;
                display: -webkit-flex;
                flex-wrap: wrap;
                align-content: flex-start;
                margin-top: 20px;
              "
            >
              <view class="card">
                <view>
                  <u-button @click="addNewPage()">新建页面</u-button>
                </view>
              </view>
              <view
                class="card"
                style="background-color: #fff"
                v-for="(item, index) in apps[currentApp].pages"
                :key="index"
              >
                <view
                  style="display: flex; justify-content: center; height: 100%"
                >
                  <view>
                    <view> 页面名称：{{ item.name }} </view>
                    <view> 页面路径：{{ item.path }} </view>
                    <view>
                      <button @click="toDesign(index)">编辑</button>
                    </view>
                    <view> <button>设置</button> </view>
                    <view>
                      <button @click="exportPage = true;currentPage=index">导出页面</button>
                    </view>
                  </view>
                  <u-image
                    :src="item.imagebase64"
                    style="padding: 3px; height: 100%; width: 50%"
                    mode="aspectFit"
                  ></u-image>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import vueJsonEditor from "../sidebar/jsoneditor/vue-json-editor.vue";
export default {
  components: { vueJsonEditor },
  onLoad() {
    this.loadDefaultData();
  },
  mounted() {},
  methods: {
    saveApps() {
      uni.setStorage({
        key: "apps",
        data: this.apps,
        success: () => {
          this.$refs.uToast.show({
            title: "数据保存成功",
            type: "success",
            position: "top",
          });
        },
        fail: () => {
          this.$refs.uToast.show({
            title: "数据保存失败，数据量过大，请连接服务器保存！",
            type: "error",
            position: "top",
          });
        },
      });
    },
    loadDefaultData() {
      uni.getStorage({
        key: "apps",
        success: (res) => {
          this.apps = res.data;
        },
        fail: () => {
          let obj = require("@/mock/default.json");
          this.apps[0].pages[0].imagebase64 = obj.BASE64;
          this.$refs.uToast.show({
            title: "检测到无数据缓存！已为您加载默认数据！",
            type: "success",
            position: "top",
          });
        },
      });
    },
    createNewPage() {
      let flag = 0;
      this.apps[this.currentApp].pages.some((e) => {
        if (e.path === this.newPage.path) {
          flag = 1;
          return true;
        }
      });
      if (flag == 0) {
        this.apps[this.currentApp].pages.push({
          name: this.newPage.name,
          path: this.newPage.path,
          imagebase64: "",
          options: [],
        });
        this.showCreatePage = false;
        this.$refs.uToast.show({
          title: "页面创建成功",
          type: "success",
          position: "top",
        });
      } else {
        this.$refs.uToast.show({
          title: "页面路径不能重复",
          type: "error",
          position: "top",
        });
      }
    },
    addNewPage() {
      this.showCreatePage = true;
    },
    save() {},
    showToast() {
      this.$refs.uToast.show({
        title: "创建成功",
        type: "success",
        position: "top",
      });
    },
    createNewApp() {
      this.show = false;
      var time = new Date().toLocaleString();
      this.apps.push({
        name: this.newApp.name,
        description: this.newApp.description,
        createName: this.newApp.createName,
        createTime: time,
        pages: [
          {
            name: "测试首页面",
            path: "/pages/index/index",
            options: [],
            imagebase64: "",
          },
        ],
      });
      this.showToast();
    },
    toDesign(index) {
      this.$store.commit("changePage", this.apps[this.currentApp].pages[index]);
      uni.navigateTo({
        url: "/pages/index/design",
      });
    },
    sectionChange(i) {
      this.pageCurrent = i;
    },
    changeApp() {
      this.vueTemplate = ``;
    },
  },
  data() {
    return {
      exportPage: false,
      vueTemplate: ``,
      showCreatePage: false,
      show: true,
      pageCurrent: 1,
      currentApp: 0,
      currentPage: 0,
      newPage: {
        name: "新建页面",
        path: "/path/index/1",
        options: [],
      },
      newApp: {
        name: "这是一个全新的APP",
        description: "",
        createName: "",
      },
      indexlist: [
        {
          name: "应用预览",
        },
        {
          name: "页面管理",
        },
        {
          name: "应用管理",
        },
        {
          name: "应用设置",
        },
      ],
      apps: [
        {
          name: "测试APP",
          pages: [
            {
              name: "测试页面",
              path: "/path/index",
              options: [
                {
                  type: "r-form-input",
                  option: {
                    value: "",
                    label: "普通输入框",
                    placeholder: "请输入内容",
                    btn: {
                      codeText: "单击",
                    },
                    password: false,
                  },
                  compStyle: {
                    height: "auto",
                    width: "100%",
                    "font-size": "24rpx",
                    "background-color": "#fff",
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-down": "0",
                    "margin-left": "0",
                  },
                  id: "uP5zVC7CCW45WAe0a2lXTs9Wlx3DObhX",
                },
              ],
              imagebase64: "",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/indexStyle.scss";
.nopc {
  display: none;
}
@media screen and (max-width: 812px) {
  .content {
    display: none;
  }
  .nopc {
    display: block;
    text-align: center;
    margin-top: 30%;
  }
}

.label {
  background-color: #fff;
  flex: 2;
}
.card {
  height: 200px;
  width: 300px;
  border: solid 1px #c0c4cc;
  margin: 8px;
}
.layout2 {
  overflow: auto;
  flex: 10;
  overflow: auto;
  background-color: #f3f4f6;
}
.appActive {
  background-color: aqua;
}
</style>