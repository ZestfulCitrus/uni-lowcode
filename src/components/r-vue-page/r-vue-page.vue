<template>
  <view>
    <component
      v-for="(item, index) in options"
      :key="index"
      :is="item.type"
      :option="item.option"
      :compStyle="item.compStyle"
    ></component>
  </view>
</template>

<script>
export default {
    name:'r-vue-page',
    props:{
        options:{
            type:Array,
            require:true
        }
    },
    data(){
        return{
            
        }
    }
};
</script>

<style lang="scss">
</style>