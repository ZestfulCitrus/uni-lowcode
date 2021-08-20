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
        <view class="right">保存数据到缓存中</view>
      </view>
      <u-popup v-model="showCreatePage" mode="center" width="50%" height="80%">
        <view style="padding: 10px">
          <view style="display: flex; justify-content: center">
            <h1>新建页面</h1>
          </view>
          <view style="display: flex;margin-top:20px">
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
            <view style="flex: 1;margin-left:30px">
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
          <button @click="show = true">新建APP</button>
          <button
            v-for="(item, index) in apps"
            :key="index"
            @click="currentApp = index"
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
              {{ apps[currentApp] }}
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
                style="background-color:#fff"
                v-for="(item, index) in apps[currentApp].pages"
                :key="index"
              >
              <view style="display:flex;justify-content:center;height:100%">
                <view>
                <view> 页面名称：{{ item.name }} </view>
                <view> 页面路径：{{ item.path }} </view>
                <view> <button @click="toDesign(index)">编辑</button> </view>
                <view> <button>设置</button> </view>
                <view> <button>导出页面</button> </view>
                </view>
                <u-image :src="item.imagebase64" style="padding:3px;height:100%;width:50%" mode="aspectFit"></u-image>
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
export default {
  onLoad(){
    this.loadDefaultData()
  },
  mounted(){
    
  },
  methods: {
    loadDefaultData(){
      let obj = require('@/mock/default.json')
      this.apps[0].pages[0].imagebase64 = obj.BASE64
    },
    createNewPage(){
      this.apps[this.currentApp].pages.push({
        name: this.newPage.name,
        path: this.newPage.path,
        options: [],
      })
      this.showCreatePage = false
      this.$refs.uToast.show({
        title: "页面创建成功",
        type: "success",
        position: "top",
      });
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
            name: "测试页面",
            path: "111",
            options: [],
          },
        ],
      });
      this.showToast();
    },
    toDesign(index) {
      options = this.apps[this.currentApp].pages[index].options;
      uni.navigateTo({
        url: "/pages/index/design",
      });
    },
    sectionChange(i) {
      this.pageCurrent = i;
    },
  },
  data() {
    return {
      showCreatePage: false,
      show: true,
      pageCurrent: 0,
      currentApp: 0,
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
              options: [],
              imagebase64:''
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
  border: solid 1px #000;
  margin: 8px;
}
.layout2 {
  overflow: auto;
  flex: 10;
  overflow: auto;
  background-color: #f3f4f6;
}
</style>