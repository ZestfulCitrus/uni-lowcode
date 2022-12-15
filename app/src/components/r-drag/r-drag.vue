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
        if(item.type=="swap_contain"){
          this.$emit("swapComp",item.contain_index,this.index)
        }else if(item.operation == 'addComp'){
          this.$emit("addComp",item.type,this.index)
        }
        ev.target.classList.remove("content-drap-over");
        ev.stopPropagation()
        item={}
    },
    dragover(ev) {
      ev.preventDefault();
      ev.target.classList.add("content-drap-over");
      //ev.target.classList.remove("content-drag-leave");
      //v-on:dragover.native.prevent
      ev.stopPropagation()
    },
    dragleave(ev) {
      ev.target.classList.remove("content-drap-over");
      ev.stopPropagation()
    },
  },
};
</script>

<style lang="scss">
.r-drag {
  &:hover {
    border: 2px dotted blue;
    cursor: move;
  }
}

.content-drap-over {
  border: 2px dotted red;
}
</style>