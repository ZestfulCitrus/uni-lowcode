<template>
  <view class="r-slot-content" :style="compStyle">
    <u-dropdown v-if="option.type === 'common'" :ref="ref">
      <u-dropdown-item
        v-model="item.value"
        v-for="(item, index) in option.labels"
        :key="index"
        :title="item.title"
        :options="item.options"
      >
      
        <view
          class="slot-content"
          style="background-color: #ffffff"
          :style="{ height: item.height }"
          v-if="item.rvue"
        >
          <component
            v-for="(item2, index2) in item.rvue"
            :key="index2"
            :is="item2.type"
            :option="item2.option"
            :compStyle="item2.compStyle"
          ></component>
        </view>
      </u-dropdown-item>
    </u-dropdown>
  </view>
</template>

<script>
export default {
  name: "r-dropdown",
  data() {
    return {
      ref: "",
    };
  },
  beforeCreate() {
    this.ref = this.$u.guid();
  },
  props: {
    option: {
      type: Object,
      required: true,
    },
    compStyle: {
      type: Object,
      require: false,
    },
  },
  methods: {
    closeDropdown() {
      this.$refs[this.ref].close();
    },
  },
};
</script>

<style lang="scss">
.r-slot-content {
  height: calc(100% + 160);
}
</style>