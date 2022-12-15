<template>
  <view :style="compStyle">
    <text>{{option.label}}</text>
    <u-checkbox-group @change="option.checkboxGroupChange" style="margin-left:10px">
			<u-checkbox 
				@change="option.checkboxChange" 
				v-model="item.checked" 
				v-for="(item, index) in option.list" :key="index" 
				:name="item.name"
			>{{item.name}}</u-checkbox>
		</u-checkbox-group>
  </view>
</template>

<script>
import { rvuecomp } from "../mixins/r-vue-comp";
export default {
  name: "r-form-checkboxes",
  mixins: [rvuecomp],
};
</script>

<style lang="scss">
</style>