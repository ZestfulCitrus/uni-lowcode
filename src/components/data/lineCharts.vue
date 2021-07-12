<template>
  <view :id="id" :style="{width:width,height:height}"></view>
</template>

<script>
export default {
  name:'lineCharts',
  components: {},
  data() {
    return {};
  },
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    },
    id:{
      type: String,
      default: 'id'
    },
    title:{
      type:String,
      default:'水-总能耗'
    },
    xAxisData:{
      type:Array,
      default:["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    seriesData:{},
    splitLineX:{
      type:Boolean,
      default: false
    },
    splitLineY:{
      type:Boolean,
      default: false
    },
    unit:{
      type:String,
      default:''
    },
    gridLeft:{
      type:String,
      default:'15%'
    }
  },
  methods: {},
  mounted() {
    let myChart = this.$echarts.init(document.getElementById(this.id));
    myChart.setOption({
      title: {
        subtext: this.title,
        left: 'left',
        subtextStyle: {
          fontSize: 18
        }
      },
      color:["#349AFD"],
      grid:{
        left:this.gridLeft
      },
      tooltip: {
        trigger: "item",
        formatter: "{b} : {c}"+this.unit ,
      },
      legend: {
        // y: '90%',
        itemGap: 30,
      },
      xAxis: {
        type: "category",
        data: this.xAxisData,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine:{
          show:this.splitLineX
        }
      },
      yAxis: {
        type: "value",
        minInterval: 1,
        axisLine: {
          show: false,
        },
        splitLine:{
          show:this.splitLineY
        }
      },
      series: [
        {
          data: this.seriesData,
          type: "line",
          smooth: true,
        },
      ],
    });
  },
};
</script>

<style lang='less'>
</style>