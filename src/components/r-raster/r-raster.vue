<template>
  <view class="wrap">
    <u-row gutter="16" justify="space-between">
      <u-col :span="item.span" :style="item.style" v-for="(item,index) in option" :key="index" @click="item.click">{{item.text}}</u-col>
    </u-row>
  </view>
</template>

<script>
export default {
    name:'r-raster',
    props:{
        option:{
            type:Array,
            require:true
        }
    },
};
</script>

<style>
</style>