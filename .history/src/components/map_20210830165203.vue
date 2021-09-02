<template>
  <div>  
    <div id="mapChart" style="width:1920px; height: 400px;"></div>
  </div>
</template>

<script>
// 引入echarts
var echarts = require("echarts");
export default {
  comments:{
    Map
  },
  data() {
    return {
      date: new Date(), //当前日期
    };
  },
  mounted() {
    this.createchartPie_r();
  },
  created() {},
  methods: {
    createchartPie_r() {
      const myChart = echarts.init(document.getElementById("mapChart"));
      const option = {
        tooltip: {
          trigger: "item",
          backgroundColor: "rgba(0,21,49, 0.7)", //通过设置rgba调节背景颜色与透明度
          borderWidth: 0,
          textStyle: {
            color: "#fff",
          },
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            roseType: "area",
            top: "10%",
            radius: ["10%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              //borderRadius: 4,
            },
            label: {
              fontSize: "12",
              color: "rgba(255,255,255, 0.7)",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "12",
              },
            },
            labelLine: {
              show: true,
            },
            data: [
              { value: 640, name: "北京" },
              { value: 540, name: "广东" },
              { value: 484, name: "上海" },
              { value: 300, name: "深圳" },
              { value: 289, name: "成都" },
            ],
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener('resize',function(){
        myChart.resize();
      })
    },
    
  },
};
</script>

<style scoped>
.chart{
    height: 10.125rem;
}
</style>
