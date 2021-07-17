<template>
  <!--每个均增加ref-->
  <view
    style="height: 812px"
    v-on:drop.native="drop($event)"
    v-on:dragover.native="dragover($event)"
    v-on:dragleave.native="dragleave($event)"
    v-on:dragover.native.prevent
    :class="{contShow:contShow}"
  >
    <view
      v-for="(item, index) in options"
      :key="index"
      @click="focus(index, item.type)"
      :class="{ active: config.current === index }"
    >
      <button
        @click="remove(index)"
        v-if="config.current === index"
        class="delete"
      >
        D
      </button>
      <r-drag :index="index" @swapComp="swapComp" @addComp="addComp">
        <component
          :is="item.type"
          :option="item.option"
          :compStyle="item.compStyle"
        ></component>
      </r-drag>
    </view>
  </view>
</template>

<script>
import defaultData from "@/static/jsons/default_data.js"; //导入默认数据
export default {
  name: "r-vue",
  props: {
    options: {
      type: Array,
      require: true,
    },
    config: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      ...defaultData,
      contShow: false,
    };
  },
  beforeMount() {
    this.options.push(this.getData(this.rFormInput, this));
  },
  methods: {
    swapComp(first, second) {
      let obj = this.options[first];
      this.options[first] = this.options[second];
      this.options[second] = obj;
      this.options.push();
    },
    focus(index, type) {
      this.config.current = index;
      this.config.type = type;
    },
    addComp(type, index) {
      switch (type) {
        case "r-form-input":
          this.options.splice(index, 0, this.getData(this.rFormInput, this));
          break;
      }
    },
    remove(index) {
      this.options.splice(index, 1);
    },
    drop(ev) {
      if (item.operation == "addComp") {
        this.addComp(item.type, this.options.length);
      }
      this.contShow = false;
      item = {};
    },
    dragover(ev) {
      this.contShow = true;
    },
    dragleave(ev) {
      this.contShow = false;
    },
  },
};
</script>

<style>
.active {
  border: 3px dotted green;
  cursor: move;
}
.contShow {
  border: 2px dotted red;
  cursor: move;
}
.delete {
  font-weight: bold;
  width: 10%;
  font-size: 2px;
  margin-bottom: -10px;
  margin-top: -10px;
  height: 28px;
  z-index: 100;
  background-color: red;
  float: right;
  margin-right: 10px;
}
</style>