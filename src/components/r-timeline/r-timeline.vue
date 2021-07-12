<template>
  <u-time-line class="timeline-content">
    <u-time-line-item nodeTop="2" v-for="(item,index) in option.list" :key="index">
	
      <template  v-slot:node >
        <view v-if="index <= option.current && item.icon!=undefined" class="u-node" :style="option.active_node_style">
          <u-icon :name="item.icon" color="#fff" :size="24"></u-icon>
        </view>
        <view v-if="index <= option.current && item.icon===undefined" class="u-node-1" :style="option.active_node_style"></view>
        <view v-if="index > option.current && item.icon!=undefined" class="u-node">
          <u-icon :name="item.icon" color="#fff" :size="24"></u-icon>
        </view>
      </template>
	 
      <template v-slot:content>
        <view>
          <view class="u-order-title" v-if="item.title">{{item.title}}</view>
          <view class="u-order-desc"
            >{{item.body}}</view
          >
          <view class="u-order-time">{{item.time}}</view>
        </view>
      </template>
    </u-time-line-item>
  </u-time-line>
</template>

<script>
export default {
  name:'r-timeline',
  props: {
    option: {
      type: Object,
      require: true,
    },
  },
  methods:{
	  isdot(a,b,c,d){
		  return a!=undefined || b!=undefined || c <=d
	  }
	  //v-if="item.title || item.icon || index <= option.current"
  }
};
</script>

<style lang="scss" scoped>
.timeline-content{
    margin: 5%;
}
.u-node {
  width: 44rpx;
  height: 44rpx;
  border-radius: 100rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d0d0d0;
}
.u-node-1{
  width: 30rpx;
  height: 30rpx;
  border-radius: 100rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d0d0d0;
}
.u-order-title {
  color: #333333;
  font-weight: bold;
  font-size: 32rpx;
}

.u-order-desc {
  color: rgb(150, 150, 150);
  font-size: 28rpx;
  margin-bottom: 6rpx;
}

.u-order-time {
  color: rgb(200, 200, 200);
  font-size: 26rpx;
}
</style>