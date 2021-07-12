<template>
  <view class="right" id="rightphone">
    <view class="main">
      <view class="phone" @drop="drop($event)" @dragover.prevent>
      </view>
    </view>
    
    <view class="option">
      <h1 style="font-size: 60rpx">asdf</h1>
    </view>
  </view>
</template>

<script>
export default {
  methods:{
    drop(ev){
      let obj = {
        type: item.type,
        title: "名称",
        value: "数值",
        arrow: true,
        arrow_direction:"down"
      }
      this.option.push(obj)
    }
  },
  data() {
    return {
      
    };
  },
};
</script>

<style lang="scss">
.right {
  display: flex;
  width: 400px;
  .option {
    width: 400px;
    height: 1080px;
    background-color: blue;
  }
}
</style>