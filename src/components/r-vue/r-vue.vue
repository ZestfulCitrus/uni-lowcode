<template>
  <!--每个均增加ref-->
  <view>
    <view
      v-for="(item, index) in options"
      :key="index"
      @click="focus(index, item.type)"
      :class="{ active: config.current === index }"
    >
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
    };
  },
  beforeMount(){
    this.options.push(this.getData(this.rFormInput,this))
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
    addComp(type,index) {
      switch (type) {
        case "r-form-input":
          this.options.splice(index,0,this.getData(this.rFormInput,this))
          break;
      }
    },
  },
};
</script>

<style>
.active {
  border: 3px dotted green;
  cursor: move;
}
</style>