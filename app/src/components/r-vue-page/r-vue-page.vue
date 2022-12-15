<template>
  <view>
    <component
      v-for="(item, index) in options"
      :key="index"
      :is="item.type"
      :option="item.option"
      :compStyle="item.compStyle"
    ></component>
    
  </view>
</template>

<script>
import rFormInput from '../r-form-input/r-form-input.vue';
import rButton from '../r-button/r-button.vue'
import rCard from '../r-card/r-card.vue'
import rCell from '../r-cell/r-cell.vue'
import rChartLine from '../r-chart-line/r-chart-line.vue'
import rChartPie from '../r-chart-pie/r-chart-pie.vue'
import rChartRadar from '../r-chart-radar/r-chart-radar.vue'
import rDataList from '../r-data-list/r-data-list.vue'
import RFormInputMap from '../r-form-input-map/r-form-input-map.vue';
import RForm from '../r-form/r-form.vue';
import RFormCheckboxes from '../r-form-checkboxes/r-form-checkboxes.vue';
import RFormInputTime from '../r-form-input-time/r-form-input-time.vue';
import RFormRadio from '../r-form-radio/r-form-radio.vue';
import RFormRate from '../r-form-rate/r-form-rate.vue';
import RFormSlider from '../r-form-slider/r-form-slider.vue';
import RFormSwitch from '../r-form-switch/r-form-switch.vue';
import RFormNumberbox from '../r-form-numberbox/r-form-numberbox.vue';
import RGrid from '../r-grid/r-grid.vue';
import RImage from '../r-image/r-image.vue';
import RLogin from '../r-login/r-login.vue';
import RLottery from '../r-lottery/r-lottery.vue';
import RMe from '../r-me/r-me.vue';
import RMenu from '../r-menu/r-menu.vue';
import RSwiper from '../r-swiper/r-swiper.vue';
import RTabs from '../r-tabs/r-tabs.vue';
import RSubsection from '../r-subsection/r-subsection.vue';
import RParse from '../r-parse/r-parse.vue'
export default {
    components: {
      RParse,
      rCard,
      rCell,
      rChartLine,
      rChartPie, 
      rFormInput,
      rButton, 
      RFormInputMap, 
      RForm ,
      rDataList,
      rChartRadar, 
      RFormCheckboxes, 
      RFormInputTime, 
      RFormRadio, 
      RFormRate, 
      RFormSlider, 
      RFormSwitch, 
      RFormNumberbox, 
      RGrid, 
      RImage, 
      RLogin, 
      RLottery, 
      RMe,
       RMenu, RSwiper, RTabs, RSubsection},
    name:'r-vue-page',
    props:{
        options:{
            type:Array,
            require:true
        }
    },
    data(){
        return{
            
        }
    }
};
</script>

<style lang="scss">
</style>