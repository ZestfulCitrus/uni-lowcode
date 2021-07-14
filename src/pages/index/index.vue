<template>
  <view class="content">
    <view
      style="
        height: 60px;
        width: 100%;
        background-color: #fff;
        border-bottom: thick dotted #ff0000;
      "
    >
      <view
        style="float: left; margin-top: 15px; margin-left: 15px; color: #c0c4cc"
        >RT-VUE低代码开发平台</view
      >
      <view
        style="float: right; margin-top: 15px; margin-right: 15px"
        @click="exportRaw(JSON.stringify(options), '导出文件.json')"
        >生成JSON</view
      >
      <view style="float: right; margin-top: 15px; margin-right: 15px"
        >预览</view
      >
    </view>
    <view
      style="
        height: 1000px;
        width: 375px;
        float: left;
        background-color: #909399;
      "
    >
      <u-tag
        text="普通列表"
        type="success"
        draggable="true"
        v-on:dragstart.native="drag('r-cell', 'common_cell')"
      ></u-tag>
      <u-tag
        text="选择列表"
        type="success"
        draggable="true"
        v-on:dragstart.native="drag('r-cell', 'radio')"
      ></u-tag>
      <u-tag
        text="标签列表"
        type="success"
        draggable="true"
        v-on:dragstart.native="drag('r-cell', 'tags')"
      ></u-tag>
      <u-tag
        text="轮播容器"
        type="primary"
        draggable="true"
        v-on:dragstart.native="drag('r-swiper', '')"
      ></u-tag>
      <u-tag
        text="列表容器"
        type="primary"
        draggable="true"
        v-on:dragstart.native="drag('r-cell', '')"
      ></u-tag>
      <u-tag
        text="表单容器"
        type="primary"
        draggable="true"
        v-on:dragstart.native="drag('r-form', '')"
      ></u-tag>
      <u-tag
        text="表单位置"
        type="success"
        draggable="true"
        v-on:dragstart.native="drag('r-form', 'location')"
      ></u-tag>
      <u-tag
        text="表单步进器"
        type="success"
        draggable="true"
        v-on:dragstart.native="drag('r-form', 'number-box')"
      ></u-tag
      ><u-tag
        text="表单滑块"
        type="success"
        draggable="true"
        v-on:dragstart.native="drag('r-form', 'slider')"
      ></u-tag
      ><u-tag
        text="表单普通输入框"
        type="success"
        draggable="true"
        v-on:dragstart.native="drag('r-form', 'common_input')"
      ></u-tag
      ><u-tag
        text="时间选择器"
        type="success"
        draggable="true"
        v-on:dragstart.native="drag('r-form', 'time_picker')"
      ></u-tag
      ><u-tag
        text="单个选择框（母框）"
        type="success"
        draggable="true"
        v-on:dragstart.native="drag('r-form', 'single_select')"
      ></u-tag
      ><u-tag
        text="单个选择框（子框）"
        type="success"
        draggable="true"
        v-on:dragstart.native="drag('r-form', 'single_select_child')"
      ></u-tag
      ><u-tag
        text="密码"
        type="success"
        draggable="true"
        v-on:dragstart.native="drag('r-form', 'password_input')"
      ></u-tag
      ><u-tag
        text="范围性的日历"
        type="success"
        draggable="true"
        v-on:dragstart.native="drag('r-form', 'range_calendar')"
      ></u-tag
      ><u-tag
        text="单选日历"
        type="success"
        draggable="true"
        v-on:dragstart.native="drag('r-form', 'single_calendar')"
      ></u-tag
      ><u-tag
        text="评分"
        type="success"
        draggable="true"
        v-on:dragstart.native="drag('r-form', 'common_rate')"
      ></u-tag>
      <u-tag
        text="单选框"
        type="success"
        draggable="true"
        v-on:dragstart.native="drag('r-form', 'radio')"
      ></u-tag
      ><u-tag
        text="开关"
        type="success"
        draggable="true"
        v-on:dragstart.native="drag('r-form', 'switch')"
      ></u-tag>
      <u-tag
        text="宫格容器"
        type="primary"
        draggable="true"
        v-on:dragstart.native="drag('r-grid', '')"
      ></u-tag>
      <u-tag
        text="卡片容器"
        type="primary"
        draggable="true"
        v-on:dragstart.native="drag('r-card', '')"
      ></u-tag>
      <u-tag
        text="用户容器"
        type="warning"
        draggable="true"
        v-on:dragstart.native="drag('r-me', '')"
      ></u-tag>
      <u-tag
        text="图标菜单容器"
        type="primary"
        draggable="true"
        v-on:dragstart.native="drag('r-menu', '')"
      ></u-tag>
      <u-tag
        text="图片容器"
        type="primary"
        draggable="true"
        v-on:dragstart.native="drag('r-image', '')"
      ></u-tag>
      <u-tag
        text="栅格文字容器"
        type="primary"
        draggable="true"
        v-on:dragstart.native="drag('r-raster', '')"
      ></u-tag>
    </view>
    <view
      style="
        height: 1000px;
        width: 1000px;
        float: left;
        background-color: #f3f4f6;
      "
    >
      <view
        style="
          width: 375px;
          background-color: #f3f4f6;
          border-style: solid;
          float: left;
          margin-left: 100px;
        "
      >
        <r-vue :options="options" ref="rvuez"></r-vue>

        <view
          style="
            height: 100px;
            width: 370px;
            font-size: 30px;

            text-align: center;
          "
          v-on:drop.native="drop($event)"
          v-on:dragover.native="dropover($event)"
          v-on:dragleave.native="dragleave($event)"
          class="content-drag-leave"
        >
          请将容器组件拖入
        </view>
      </view>
      <!--容器列表-->
      <view
        style="
          width: 375px;
          float: left;
          margin-left: 100px;
          border-style: solid;
        "
        ref="containers"
      >
        <view
          v-for="(item, index) in options"
          :key="index"
          draggable="true"
          @dragstart="containerdrag(index)"
          @click="changeCurrentContainer(index)"
          @dragover.prevent
          @drop="swapCurrentContainer($event, index)"
        >
          <view v-if="index != currentContainer" class="containers">
            {{ item.type }}容器
          </view>
          <view v-if="index == currentContainer" class="selected_containers">
            {{ item.type }}容器
            <u-button
              style="float: right"
              size="mini"
              @click="deleteContainers(index)"
              >删除</u-button
            >
          </view>
        </view>
      </view>
    </view>

    <view
      style="
        height: 1000px;
        width: 375px;
        float: right;
        background-color: #f3f4f6;
      "
    >
      <view style="font-size: 30px">容器JSON</view>
      <view>{{ options[currentContainer] }}</view>
      <view>
        <cell-bar v-if="options[currentContainer].type == 'r-cell'"
          :option="options[currentContainer]"
          
         ></cell-bar>

      </view>
    </view>
    <view> </view>
  </view>
</template>

<script>
import cellBar from '../sidebar/cell-bar.vue';
export default {
  components: { cellBar },
  watch: {
    // obj: function () {
    //   console.log('obj改变了');
    // },
    // 单独监听obj中的name属性，只要其修改watch就会触发
    options: {
      handler: function () {
        console.log("obj改变了");
      },
      deep: true,
    },
  },
  data() {
    return {
      currentContainer: 0,
      options: [
        {
          type: "r-cell",
          option: [
            {
              type: "common_cell",
              title: "名称",
              value: "数值",
              arrow: true,
              arrow_direction: "down",
              press: () => {},
            },
            {
              type: "tags",
              title: "标签",
              list: [
                {
                  text: "plain",
                  mode: "plain",
                },
                {
                  text: "dark",
                  mode: "dark",
                },
                {
                  text: "light",
                  mode: "light",
                },
              ],
              press: () => {},
            },
            {
              type: "radio",
              title: "单选（是，否）",
              value: "是",
              arrow: false,
              arrow_direction: "up",
              conf: [
                {
                  name: "是",
                  disabled: false,
                },
                {
                  name: "否",
                  disabled: true,
                },
                {
                  name: "不是",
                  disabled: true,
                },
                {
                  name: "第4个",
                  disabled: true,
                },
              ],
              press: () => {},
            },
          ],
        },
      ],
    };
  },
  onLoad() {},
  methods: {
    drag(ctype, type) {
      item = {
        operation: "add",
        contain: ctype,
        type: type,
      };
    },
    dropover(ev) {
      ev.preventDefault();
      ev.target.classList.add("content-drap-over");
      ev.target.classList.remove("content-drag-leave");
      //v-on:dragover.native.prevent
    },
    drop(ev) {
      ev.target.classList.remove("content-drap-over");
      ev.target.classList.add("content-drag-leave");
      if (item.contain == "r-swiper" && item.operation == "add") {
        this.options.push({
          type: "r-swiper",
          option: {
            title: true, //	是否显示标题文字，需要配合list参数，见上方说明	Boolean	false	true
            mode: "round", ////	指示器模式，见上方说明	String	round	rect / dot / number / none
            height: 250, ////	轮播图组件高度，单位rpx	String | Number	250	-
            indicatorPos: "bottomCenter", ////	指示器的位置	String	bottomCenter	topLeft / topCenter / topRight / bottomLeft / bottomRight
            effect3d: true, //是否开启3D效果	Boolean	false	true
            autoplay: true, //是否自动播放	Boolean	true	false
            interval: "1000", //自动轮播时间间隔，单位ms	String | Number	2500	-
            circular: true, ////是否衔接播放，见上方说明	Boolean	true	false
            duration: 500, //切换一张轮播图所需的时间，单位ms	String | Number	500	-
            borderRadius: 8, //轮播图圆角值，单位rpx	String | Number	8	-//	自定义标题样式	Object	-	-
            effect3dPreviousMargin: 50, //	effect3d = true模式的情况下，激活项与前后项之间的距离，单位rpx	String | Number	50	-
            imgMode: "aspectFill", //	图片的裁剪模式，详见image组件裁剪模式	String	aspectFill	-
            name: "image", //	组件内部读取的list参数中的属性名，见上方说明	string	name	-
            bgColor: "#f3f4f6", //背景颜色	string	#f3f4f6	-
            current: 0, //1.6.2	//初始化时，默认显示第几项	String | Number	0	-,
            list: [
              {
                image: "https://cdn.uviewui.com/uview/swiper/1.jpg",
                title: "昨夜星辰昨夜风，画楼西畔桂堂东",
              },
              {
                image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
                title: "身无彩凤双飞翼，心有灵犀一点通",
              },
              {
                image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
                title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳",
              },
            ],
          },
        });
      } else if (
        item.contain == "r-cell" &&
        item.type == "" &&
        item.operation == "add"
      ) {
        this.options.push({
          type: "r-cell",
          option: [
            {
              type: "common_cell",
              title: "名称",
              value: "数值",
              arrow: true,
              arrow_direction: "down",
              press: () => {},
            },
            {
              type: "tags",
              title: "标签",
              list: [
                {
                  text: "plain",
                  mode: "plain",
                },
                {
                  text: "dark",
                  mode: "dark",
                },
                {
                  text: "light",
                  mode: "light",
                },
              ],
              press: () => {},
            },
            {
              type: "radio",
              title: "单选（是，否）",
              value: "是",
              arrow: false,
              arrow_direction: "up",
              conf: [
                {
                  name: "是",
                  disabled: false,
                },
                {
                  name: "否",
                  disabled: true,
                },
                {
                  name: "不是",
                  disabled: true,
                },
                {
                  name: "第4个",
                  disabled: true,
                },
              ],
              press: () => {},
            },
          ],
        });
      } else if (
        item.contain == "r-form" &&
        item.type == "" &&
        item.operation == "add"
      ) {
        this.options.push({
          type: "r-form",
          form: {},
          get_form_data: () => {},
          option: [
            {
              type: "common_input",
              label: "姓名",
              name: "login_name",
              value: "",
              placeholder: "请输入姓名",
              rules: [
                {
                  required: true,
                  message: "请输入姓名",
                  // 可以单个或者同时写两个触发验证方式
                  trigger: "blur,change",
                },
                {
                  min: 2,
                  message: "姓名不能少于2个字",
                  trigger: "change,blur",
                },
              ],
            },
          ],
        });
      } else if (
        item.contain == "r-grid" &&
        item.type == "" &&
        item.operation == "add"
      ) {
        this.options.push({
          type: "r-grid",
          option: {
            col: 4,
            list: [
              {
                name: "photo",
                size: 46,
                label: "图片",
                badge: {
                  visual: true,
                  count: 22,
                },
                click: () => {},
              },
              {
                name: "level",
                size: 46,
                label: "等级",
                badge: {
                  visual: false,
                  count: 22,
                },
                click: () => {},
              },
              {
                name: "woman",
                size: 46,
                label: "女人",
                badge: {
                  visual: false,
                  count: 22,
                },
                click: () => {},
              },
              {
                name: "man",
                size: 46,
                label: "男人",
                badge: {
                  visual: false,
                  count: 22,
                },
                click: () => {},
              },
              {
                name: "photo",
                size: 46,
                label: "图片",
                badge: {
                  visual: true,
                  count: 21,
                },
                click: () => {},
              },
            ],
          },
        });
      } else if (
        item.contain == "r-me" &&
        item.type == "" &&
        item.operation == "add"
      ) {
        this.options.push({
          type: "r-me",
          option: {
            pic: require("@/static/icons/12.png"),
            username: "r-me",
            user_id: "123456789",
            show: true,
            options: [
              [
                {
                  icon: "rmb-circle",
                  type: "common_cell",
                  title: "支付",
                  value: "",
                  arrow: true,
                  arrow_direction: "down",
                  press: () => {},
                },
              ],
              [
                {
                  icon: "star",
                  type: "common_cell",
                  title: "收藏",
                  value: "",
                  arrow: true,
                  arrow_direction: "down",
                  press: () => {},
                },
                {
                  icon: "photo",
                  type: "common_cell",
                  title: "相册",
                  value: "",
                  arrow: true,
                  arrow_direction: "down",
                  press: () => {},
                },
                {
                  icon: "coupon",
                  type: "common_cell",
                  title: "卡券",
                  value: "",
                  arrow: true,
                  arrow_direction: "down",
                  press: () => {},
                },
                {
                  icon: "heart",
                  type: "common_cell",
                  title: "关注",
                  value: "",
                  arrow: true,
                  arrow_direction: "down",
                  press: () => {},
                },
              ],
              [
                {
                  icon: "setting",
                  type: "common_cell",
                  title: "设置",
                  value: "",
                  arrow: true,
                  arrow_direction: "down",
                  press: () => {},
                },
              ],
            ],
          },
        });
      } else if (
        item.contain == "r-menu" &&
        item.type == "" &&
        item.operation == "add"
      ) {
        this.options.push({
          type: "r-menu",
          option: {
            card_list: [
              [
                {
                  img_url: require("@/static/equip/gdfq@3x.png"),
                  task_info: "工单发起",
                  press: () => {},
                },
                {
                  img_url: require("@/static/equip/gdfq@3x.png"),
                  task_info: "工单发起",
                  press: () => {},
                },
                {
                  img_url: require("@/static/equip/dbgd@3x.png"),
                  task_info: "待办工单",
                  press: () => {},
                },
                {
                  img_url: require("@/static/equip/ybgd@3x.png"),
                  task_info: "已办工单",
                  press: () => {},
                },
              ],
              [
                {
                  img_url: require("@/static/equip/fqjc@3x.png"),
                  task_info: "发起检查",
                  press: () => {},
                },
                {
                  img_url: require("@/static/equip/dbjh@3x.png"),
                  task_info: "待办计划",
                  press: () => {},
                },
                {
                  img_url: require("@/static/equip/jcls@3x.png"),
                  task_info: "检查历史",
                  press: () => {},
                },
                {
                  img_url: require("@/static/equip/dbjh@3x.png"),
                  task_info: "待办计划",
                  press: () => {},
                },
              ],
            ],
          },
        });
      } else if (
        item.contain == "r-image" &&
        item.type == "" &&
        item.operation == "add"
      ) {
        this.options.push({
          type: "r-image",
          option: {
            src: require("@/static/icons/4.jpg"),
            width: "100%",
            height: "200px",
            shape: "square",
            borderRadius: 0,
            lazyLoad: true,
            loadingIcon: "photo",
            errorIcon: "error-circle",
            showLoading: true,
            showError: true,
            fade: true,
            webp: false,
            duration: "500ms",
            bgColor: "#f3f4f6",
          },
        });
      } else if (
        item.contain == "r-raster" &&
        item.type == "" &&
        item.operation == "add"
      ) {
        this.options.push({
          type: "r-raster",
          option: [
            {
              span: "6",
              style: "font-size:15rpx;text-align:center;margin-top:30px",
              text: "忘记密码?",
              click: () => {},
            },
            {
              span: "6",
              style: "font-size:15rpx;color:blue;text-align:center;margin-top:30px",
              text: "注册",
              click: () => {},
            },
          ],
        });
      } else if (
        item.contain == "r-card" &&
        item.type == "" &&
        item.operation == "add"
      ) {
        this.options.push({
          type: "r-card",
          option: [
            {
              full: true,
              title: "今日新闻",
              titleColor: "",
              titleSize: 30,
              subTitle: "2021-07-06",
              subTitleColor: "",
              subTitleSize: 26,
              border: true,
              margin: "30rpx",
              borderRadius: "16",
              headBorderBottom: true,
              footBorderTop: true,
              thumb: require("@/static/icons/11.png"),
              thumbWidth: "",
              thumbCircle: true,
              padding: "",
              show_head: true,
              show_foot: true,
              box_shadow: "",
              press: () => {},
              body: [
                {
                  text: "APK被终结，谷歌推出AAB格式，开发者、鸿蒙、和Windows11是否影响大",
                  imgUrl:
                    "https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg",
                  press: () => {
                    console.log({
                      title: this.option[0].body[0].text + "被单击",
                    });
                  },
                },
                {
                  text: "中国工程院院士钟南山在沪参加上海科技大学2021届毕业典礼时表示，疫苗到第三期做不下去了，原因是没病人了。这被网友称为最骄傲的凡尔赛发言",
                  imgUrl: require("@/static/icons/1.jpg"),
                  press: () => {
                    console.log({
                      title: this.option[0].body[1].text + "被单击",
                    });
                  },
                },
              ],
              foot: {
                label: "5评论",
                press: () => {
                  console.log({ title: "评论框被单击" });
                },
              },
            },
            {
              full: true,
              title: "今日看点",
              titleColor: "",
              titleSize: 30,
              subTitle: "2021-07-06",
              subTitleColor: "",
              subTitleSize: 26,
              border: true,
              margin: "30rpx",
              borderRadius: "16",
              headBorderBottom: true,
              footBorderTop: true,
              thumb: require("@/static/icons/12.png"),
              thumbWidth: "",
              thumbCircle: true,
              padding: "",
              show_head: true,
              show_foot: true,
              box_shadow: "",
              press: () => {},
              body: [
                {
                  text: "中国日报北京7月6日电（记者 张陨璧）有知情人士日前接受《中国日报》独家采访时透露，近日有500多名中国理工科研究生申请赴美签证时被美方拒签，拜登政府一方面试图顺应美高校要求大量吸收中国留学生、保证学费收入的呼声，另一方面说一套做一套，仍旧延续打压理工科中国研究生和学者的错误政策，严重损害中国留学人员合法权益。",
                  imgUrl: require("@/static/icons/2.jpg"),
                  press: () => {
                    console.log({
                      title: this.option[1].body[0].text + "被单击",
                    });
                  },
                },
                {
                  text: "英国政府5日公布英格兰地区最后阶段“解封”计划详情，包括一旦实施“解封”，将取消在商店、地铁等公共场所须戴口",
                  imgUrl: require("@/static/icons/3.jpg"),
                  press: () => {
                    console.log({
                      title: this.option[1].body[1].text + "被单击",
                    });
                  },
                },
                {
                  text: "7月5日下午，中国排协网站公布中国女排东京奥运12人参赛名单。朱婷担任球队队长，张常宁、李盈莹和刘晓彤为球队主攻",
                  imgUrl: require("@/static/icons/4.jpg"),
                  press: () => {
                    console.log({
                      title: this.option[1].body[2].text + "被单击",
                    });
                  },
                },
              ],
              foot: {
                label: "13评论",
                press: () => {
                  console.log({ title: "评论框被单击" });
                },
              },
            },
          ],
        });
      }
      item = {};
    },
    dragleave(ev) {
      ev.target.classList.remove("content-drap-over");
      ev.target.classList.add("content-drag-leave");
      ev.stopPropagation();
    },
    changeCurrentContainer(index) {
      this.currentContainer = index;
    },
    containerdrag(index) {
      item = {
        operation: "swapcontainer",
        index: index,
      };
    },
    swapCurrentContainer(ev, index) {
      if (item.operation == "swapcontainer") {
        let obj = this.options[item.index];
        this.options[item.index] = this.options[index];
        this.options[index] = obj;
        this.options.push();
      }
    },
    deleteContainers(index) {
      this.options.splice(index, 1);
    },
    exportRaw(data, name) {
      let urlObject = window.URL || window.webkitURL || window;
      let export_blob = new Blob([data]);
      let save_link = document.createElementNS(
        "http://www.w3.org/1999/xhtml",
        "a"
      );
      save_link.href = urlObject.createObjectURL(export_blob);
      save_link.download = name;
      save_link.click();
    },
  },
};
/*.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}-*/
</script>

<style>
.content {
  background-color: azure;
}
.content-drag-leave {
  border-style: solid;
}
.content-drap-over {
  border-style: dotted;
}
.containers {
  height: 100px;
  width: 370px;
  border-style: solid;
  text-align: center;
  font-size: 30px;
}
.selected_containers {
  height: 100px;
  width: 370px;
  border-style: solid;
  text-align: center;
  font-size: 30px;
  background: blue;
}
</style>
