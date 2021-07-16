<template>
  <!--每个均增加ref-->
  <view>
    <view v-for="(item, index) in options" :key="index" @click="focus(index,item.type)">
      <r-drag :index="index" @swapComp="swapComp" >
        <component
          :is="item.type"
          :option="item.option"
          :compStyle="item.compStyle"
        ></component>
        <!--修改属性-->
        <r-cell
          v-if="item.type == 'r-cell'"
          :list="item.option"
          :title="item.title"
        ></r-cell>
        <!--修改属性-->
        <r-dropdown
          v-if="item.type == 'r-dropdown'"
          :option="item.option"
          :dd_ref="$u.guid()"
        ></r-dropdown>
        <r-fingerprint
          :option="item.option"
          v-if="item.type == 'r-fingerprint'"
        ></r-fingerprint>
        <!--修改属性-->
        <r-form
          v-if="item.type == 'r-form'"
          :list="item.option"
          @get_form_data="item.get_form_data"
          :form_ref="$u.guid()"
          :form.sync="item.form"
        ></r-form>

        <r-grid v-if="item.type == 'r-grid'" :option="item.option"></r-grid>
        <!--修改-->
        <r-map v-if="item.type == 'r-map'"></r-map>
        <r-me :option="item.option" v-if="item.type == 'r-me'"></r-me>
        <!--修改-->
        <r-qrcode v-if="item.type == 'r-qrcode'"></r-qrcode>
        <!--修改-->
        <r-readmore
          v-if="item.type == 'r-readmore'"
          :option="item.option"
          :readmore_ref="$u.guid()"
        ></r-readmore>
      </r-drag>
    </view>
  </view>
</template>

<script>
export default {
  name: "r-vue",
  props: {
    options: {
      type: Array,
      require: true,
    },
    config:{
      type:Object,
      require:true
    }
  },
  methods:{
    swapComp(first,second){
      let obj = this.options[first];
      this.options[first] = this.options[second];
      this.options[second] = obj;
      this.options.push();
    },
    focus(index,type){
      this.config.current=index;
      this.config.type=type;
    }
  }
};
</script>

<style>
</style>