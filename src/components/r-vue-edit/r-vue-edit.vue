<template>
  <!--每个均增加ref-->
  <view
    style="height: 812px"
    v-on:drop.native="drop($event)"
    v-on:dragover.native="dragover($event)"
    v-on:dragleave.native="dragleave($event)"
    v-on:dragover.native.prevent
    :class="{ contShow: contShow }"
  >
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

<style>
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
  margin-bottom: -10px;
  margin-top: -10px;
  height: 28px;
  z-index: 100;
  background-color: red;
  float: right;
  margin-right: 10px;
}
</style>