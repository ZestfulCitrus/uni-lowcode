<template>
  <view>
    <vue-json-editor
    style="margin-top:20px"
            v-model="docs['definitions']"
            mode="code"
            :show-btns="false"
            :expandedOnStart="true"
    ></vue-json-editor>
  </view>
</template>

<script>
import vueJsonEditor from '@/pages/sidebar/jsoneditor/vue-json-editor'
export default {
  name: "data-bar",
  components:{vueJsonEditor},
  data() {
    return {
      docs: {},
    };
  },
  mounted() {
    /*
    uni.request({
      url: "http://localhost:8080/api/v2/api-docs", //仅为示例，并非真实接口地址。
      data: {},
      header: {},
      success: (res) => {
        this.docs = res.data;
      },
    });*/
  },
};
</script>

<style lang="scss">
</style>