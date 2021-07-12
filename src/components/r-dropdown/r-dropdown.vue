<template>
  <view class="">
    <u-dropdown :ref="dd_ref"  v-if="option.type==='div'">
      <u-dropdown-item :title="item.title"  v-for="(item,index) in option.labels" :key="index">
        <view class="slot-content" style="background-color: #ffffff">
          <scroll-view scroll-y="true" :style="option.scrollStyle">
            <view class="u-text-center u-content-color u-m-t-20 u-m-b-20" v-for="(i,index2) in item.options" :key="index2" @click="i.press">{{i.text}}</view>
          </scroll-view>
          <u-button type="primary" @click="closeDropdown" plain>确定</u-button>
        </view>
      </u-dropdown-item>
    </u-dropdown>
    <u-dropdown v-if="option.type==='common'">
			<u-dropdown-item v-model="item.value" v-for="(item,index) in option.labels" :key="index" :title="item.title" :options="item.options"></u-dropdown-item>
	</u-dropdown>
  </view>
</template>

<script>
export default {
  name:'r-dropdown',
  props: {
    option: {
      type: Object,
      required: true,
    },
    dd_ref:{
        type:String,
        required: true
    }
  },
  methods: {
    closeDropdown() {
      this.$refs[this.dd_ref].close();
    },
  },
};
</script>

<style lang="scss">
</style>