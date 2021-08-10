<template>
  <view class="content">
    <view class="rtnav">
      <view class="left">RT-VUE低代码开发平台</view>
      <view class="right">JSON预览</view>
      <!--view
        class="right"
        @click="exportRaw(JSON.stringify(options), '导出文件.json')"
        >生成JSON</view
      -->
      <view class="right">页面调试</view>
      <view class="right">页面导入</view>
    </view>
    <u-popup v-model="show" mode="center" width="50%" height="80%">
      <view style="padding: 10px">
        <view>
          <view style="display: flex; justify-content: center">
            <h1>新建APP</h1>
          </view>
          <view style="display: flex; justify-content: center">
            <view style="width: 80%">
              <u-field
                v-model="newApp.name"
                style="margin-top: 10px"
                label="App名称："
                :placeholder="newApp.name"
                :border-top="true"
              ></u-field>
              <u-field
                v-model="newApp.description"
                type="textarea"
                style="margin-top: 10px"
                label="App描述："
                placeholder="请填写App的用途"
                :border-top="true"
              ></u-field>
              <u-field
                v-model="newApp.createName"
                style="margin-top: 10px"
                label="手机号"
                placeholder="作者名字"
                :border-top="true"
              ></u-field>
              <button >创建app</button>
            </view>
          </view>
        </view>
      </view>
    </u-popup>
    <view class="main-contain">
      <view class="label" style="text-align: center">
        <h1 style="margin: 10px; padding: 20px"> App列表 </h1>
        <button @click="show = true">新建APP</button>
        <button v-for="(item, index) in apps" :key="index">
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
              <view> <button>新建页面</button> </view>
            </view>
            <view
              class="card"
              v-for="(item, index) in apps[0].pages"
              :key="index"
            >
              <view> 页面名称：{{ item.name }} </view>
              <view> <button @click="toDesign">编辑</button> </view>
              <view> <button>设置</button> </view>
              <view> <button>导出页面</button> </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    toDesign() {
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
      show: true,
      pageCurrent: 0,
      newApp:{
        name:'这是一个全新的APP',
        description:'',
        createName:''
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
              name: "111",
              path: "111",
              options: [],
            },
            {
              name: "111",
              path: "111",
              options: [],
            },
            {
              name: "111",
              path: "111",
              options: [],
            },
            {
              name: "111",
              path: "111",
              options: [],
            },
            {
              name: "111",
              path: "111",
              options: [],
            },
            {
              name: "111",
              path: "111",
              options: [],
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