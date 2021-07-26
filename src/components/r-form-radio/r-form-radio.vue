<template>
  <view :style="compStyle">
    <text>{{option.label}}</text>
    <u-radio-group v-model="option.value" @change="option.radioGroupChange" style="margin-left:10px">
			<u-radio 
				@change="option.radioChange" 
				v-for="(item, index) in option.list" :key="index" 
				:name="item.name"
				:disabled="item.disabled"
			>
				{{item.name}}
			</u-radio>
		</u-radio-group>
  </view>
</template>

<script>
import { rvuecomp } from "../mixins/r-vue-comp";
export default {
  name: "r-form-radio",
  mixins: [rvuecomp],
};
</script>

<style lang="scss">
</style>