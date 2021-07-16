<template>
  <view>
      {{option}}
  </view>
</template>

<script>
export default {
 name:'form-input-bar',
 props:{
     option:{
         type:Object,
         require:true
     }
 }
}
</script>

<style lang="scss">

</style>