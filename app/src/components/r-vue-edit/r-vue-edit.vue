<template>
  <!--每个均增加ref-->
  <view
    style="height: 652px"
    v-on:drop.native="drop($event)"
    v-on:dragover.native="dragover($event)"
    v-on:dragleave.native="dragleave($event)"
    v-on:dragover.native.prevent
    :class="{ contShow: contShow }"
  >
    <r-navbar
      :is-fixed="false"
      style="pointer-events: none"
      :immersive="true"
      back-text="返回"
      title="首页"
    ></r-navbar>
    <view style="height: 652px;overflow: auto;">
      <view
        v-for="(item, index) in options"
        :key="index"
        @click="focus(index, item.type)"
        :class="{ active: config.current === index }"
      >
        <button
          
          @click.stop="remove(index)"
          v-if="config.current === index"
          class="delete"
        >X</button>
        <r-drag :index="index" @swapComp="swapComp" @addComp="addComp">
          <component
            :is="item.type"
            :option="item.option"
            :compStyle="item.compStyle"
          ></component>
        </r-drag>
      </view>
    </view>
    <r-tabbar v-model="current" :list="list" :mid-button="true"></r-tabbar>
  </view>
</template>

<script>
import { redit } from "../mixins/r-vue-edit.js";
export default {
  name: "r-vue-edit",
  mixins: [redit],
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
    remove(index) {
      this.options.splice(index, 1);
      this.$emit("focusleave", null);
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

<style lang="scss">
.active {
  border: 2px dotted green;
  cursor: move;
}
.contShow {
  border: 1px dotted red;
  cursor: move;
}

.delete {
  font-weight: bold;
  width: 10%;
  font-size: 2px;
  margin-bottom: -14px;
  margin-top: -14px;
  height: 28px;
  z-index: 1000000;
  background-color: red;
  float: right;
  margin-right: 10px;
}
</style>