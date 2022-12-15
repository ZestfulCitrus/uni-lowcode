<template>
<view :style="compStyle">
  <u-cell-group :title="option.title">
    <view v-for="(item, index) in option.list" :key="index">
      <u-cell-item
        :icon="item.icon"
        :title="item.title"
        :value="item.value"
        :arrow="item.arrow"
        @click="item.press"
        v-if="item.type === 'common_cell'"
      >
      </u-cell-item>
      <u-cell-item
      :icon="item.icon"
        :title="item.title"
        :arrow="item.arrow"
        v-if="item.type === 'radio'"
        @click="item.press"
      >
        <u-radio-group v-model="item.value">
          <u-radio
            v-for="(u_item, index2) in item.conf"
            :key="index2"
            :name="u_item.name"
            :disabled="u_item.disabled"
          >
            {{ u_item.name }}
          </u-radio>
        </u-radio-group>
      </u-cell-item>
      <u-cell-item
      :icon="item.icon"
      :title="item.title"
      :arrow="item.arrow"
      @click="item.press"
      v-if="item.type === 'tags'">
        <u-tag v-for="(i,index3) in item.list"
        :key="index3" 
        :text="i.text" 
        :mode="i.mode" />
      </u-cell-item>
    </view>
  </u-cell-group>
</view>
</template>

<script>
import {rvuecomp} from '../mixins/r-vue-comp'
export default {
  name:'r-cell',
  mixins:[rvuecomp],
};
</script>

<style lang="scss">
</style>