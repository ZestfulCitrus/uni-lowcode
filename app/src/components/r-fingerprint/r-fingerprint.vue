<template>
  <view>
    <u-popup v-model="show" mode="bottom" height="450">
      <view class="slot-content">
          <br />
        <view class="r-img-content">
          <u-image height="150" width="150" :src="img_url" />
        </view>
        <br />
        <text class="r-content">{{ content }}</text>
      </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  name: "r-fingerprint",
  props: {
    option: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      img_url: "",
      show: false,
      content: "",
    };
  },
  methods: {
    showModal() {
      this.content = this.option.content;
      this.img_url = this.option.un_select_img;
      this.show = true;
      this.startSoterAuthenticationFingerPrint(this);
    },
    startSoterAuthenticationFingerPrint(context) {
      uni.startSoterAuthentication({
        requestAuthModes: ["fingerPrint"],
        challenge: this.option.challenge,
        authContent: "请输入指纹",
        success(res) {
          context.content = context.option.success_content;
          context.img_url = context.option.select_img;
          setTimeout(() => {
            context.show = false;
          }, 500);
          context.$emit("update:resultJson",res);
        },
        fail(err) {
          context.content = context.option.error_content;
          context.img_url = context.option.faild_img;
          setTimeout(() => {
            context.show = false;
          }, 500);
          context.$emit("update:resultJson",err);
        },
        complete(res) {
          context.$emit("update:resultJson",res);
        },
      });
    },
  },
};
</script>

<style lang="scss">
.r-img-content {
    margin-top: 180;
  display: flex;
  justify-content: center;
  align-items: center;
}
.r-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>