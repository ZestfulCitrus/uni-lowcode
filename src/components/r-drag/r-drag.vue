<template>
  <view
    class="r-drag"
    draggable="true"
    v-on:drop.native="drop($event)"
    v-on:dragover.native="dragover($event)"
    v-on:dragleave.native="dragleave($event)"
    v-on:dragover.native.prevent
    v-on:dragstart.native="drag($event)"
  >
    <view style="pointer-events: none">
      <slot></slot>
    </view>
  </view>
</template>

<script>
export default {
  name: "r-drag",
  props: {
    index: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    drag(ev){
        item={
            contain_index:this.index,
            type:"swap_contain",
        }
        
    },
    drop(ev){
        if(item.type=="swap_contain") this.$emit("swapComp",item.contain_index,this.index)
        ev.target.classList.remove("content-drap-over");
        item={}
    },
    dragover(ev) {
      ev.preventDefault();
      ev.target.classList.add("content-drap-over");
      //ev.target.classList.remove("content-drag-leave");
      //v-on:dragover.native.prevent
    },
    dragleave(ev) {
      ev.target.classList.remove("content-drap-over");
    },
  },
};
</script>

<style lang="scss">
.r-drag {
  &:hover {
    border: 3px dotted blue;
    cursor: move;
  }
  &:active {
    border: 3px dotted green;
    cursor: move;
  }
}
.content-drap-over {
  border: 3px dotted red;
}
</style>