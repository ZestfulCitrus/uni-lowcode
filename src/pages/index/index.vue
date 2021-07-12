<template>
  <view class="content">
    <view
      style="height: 1000px; width: 375px; float: left; background-color: #909399"
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
    </view>
    <view
      style="height: 1000px; width: 600px; float: left; background-color: #f3f4f6"
    >
      <!--容器列表-->
      <view style="width: 100px; float: left; margin-left: 100px">
        <view
          v-for="(item, index) in options"
          :key="index"
          style="
            width: 100px;
            border-top: solid;
            border-bottom: solid;
          "
        >
        <u-button @click="changeCurrentContainer(index)">容器{{index}}</u-button>
        </view>
      </view>
      <view
        style="
          width: 375px;
          background-color: #f3f4f6;
          border-style: solid;
          float: left;
        "
      >
        <r-vue :options="options" ref="rvuez"></r-vue>

        <view
          style="
            height: 200px;
            width: 375px;
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
    </view>

    <view
      style="height: 1000px; width: 375px; float: right; background-color: #f3f4f6"
    >
    <view style="font-size:30px">容器JSON</view>
      <view>{{ options[currentContainer] }}</view>
    </view>
    <view> </view>
  </view>
</template>

<script>
export default {
  watch: {
    // obj: function () {
    //   console.log('obj改变了');
    // },
    // 单独监听obj中的name属性，只要其修改watch就会触发
    options: {
      handler: function(){
        console.log("obj改变了");
        
      },
      deep: true,
    },
  },
  data() {
    return {
      currentContainer:0,
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
      }
    },
    dragleave(ev) {
      ev.target.classList.remove("content-drap-over");
      ev.target.classList.add("content-drag-leave");
      ev.stopPropagation();
    },
    changeCurrentContainer(index){
      this.currentContainer = index
    }
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
</style>
