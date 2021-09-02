<template>
  <div>
    <div class="top">
      <h1>数据可视化展示</h1>
      <span class="time">当前时间：{{ date | dateFormat }}</span>
    </div>
    <div class="mainBox">
      <div class="culonm">
        <div class="panl bar">
          <h2>就业行业</h2>
          <div class="chart" id="bar_l"></div>
          <div class="zhuanjiao"></div>
        </div>

        <div class="panl line">
          <h2>人员变化</h2>
          <div class="chart" id="line_l"></div>
          <div class="zhuanjiao"></div>
        </div>

        <div class="panl pie">
          <h2>年龄分析</h2>
          <div class="chart" id="pie_l"></div>
          <div class="zhuanjiao"></div>
        </div>
      </div>
      <div class="culonm">
        <div class="num">
          <div class="num-hd">
            <ul>
              <li>712424</li>
              <li>323129</li>
            </ul>
          </div>
          <div class="num-bd">
            <ul>
              <li>市场需求</li>
              <li>市场供应</li>
            </ul>
          </div>
        </div>
        <div class="map">
          <div class="map1"></div>
          <div class="map2"></div>
          <div class="map3"></div>
          <div class="chart">
            <Map ref="showMap"></Map>
          </div>
        </div>
      </div>
      <div class="culonm">
        <div class="panl bar">
          <h2>技能掌握</h2>
          <div class="chart" id="bar_r"></div>
          <div class="zhuanjiao"></div>
        </div>

        <div class="panl line">
          <h2>播放量</h2>
          <div class="chart" id="line_r"></div>
          <div class="zhuanjiao"></div>
        </div>

        <div class="panl pie">
          <h2>地区分布</h2>
          <div class="chart" id="pie_r"></div>
          <div class="zhuanjiao"></div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
// 引入echarts
var echarts = require("echarts");
import Map from 'map.vue'
export default {
  comments:{
    Map
  },
  data() {
    return {
      date: new Date(), //当前日期
    };
  },
  // 定义一个局部的过滤器，格式化当前时间
  filters: {
    dateFormat: (dateTime) => {
      var now = new Date(dateTime);
      var y = now.getFullYear();
      var m = (now.getMonth() + 1).toString().padStart(2, "0");
      var d = now.getDate().toString().padStart(2, "0");
      var hh = now.getHours().toString().padStart(2, "0");
      var mm = now.getMinutes().toString().padStart(2, "0");
      var ss = now.getSeconds().toString().padStart(2, "0");
      let week = now.getDay(); // 星期
      let weekArr = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      // 过滤器中要有返回值
      return `${y}-${m}-${d} ${hh}:${mm}:${ss} ${weekArr[week]}`;
    },
  },
  mounted() {
    this.showMap();
    this.createchartPie_r();
    this.createchartLine_r();
    this.createchartBar_r();
    this.createchartPie_l();
    this.createchartLine_l();
    this.createchartBar_l();
    var _this = this;
    this.timer = setInterval(() => {
      _this.date = new Date(); // 修改日期数据
    }, 1000);
  },
  created() {},
  methods: {
    showMap() {
      console.log(this.$refs.showMap)
      // this.$refs.showMap.creatmapechart({
      //   visible: true,
        
      // });
    },
    createchartPie_r() {
      const myChart = echarts.init(document.getElementById("pie_r"));
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
    createchartBar_r() {
      var myChart = echarts.init(document.getElementById("bar_r"));
      var option;
      var myColor=["#0073ff","#00ff48","#ff9000","#ff0000","#00f0ff"];
      option = {
        grid: {
          left: "0%",
          right: "0%",
          bottom: "0%",
          top: "4%",
          containLabel: true,
        },

        yAxis: [
          {
            type: "category",
            inverse: true,
            data: ["html", "java", "vue", "css", "less"],
            axisTick: {
              show:false,
            },
            axisLine:{
              show:false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              color: "rgba(255,255,255, 0.7)",
            },
          },
          {
            type: "category",
            data: [234, 154, 345, 243, 157],
            inverse: true,
            axisTick: {
              show:false,
            },
            axisLine:{
              show:false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              color: "rgba(255,255,255, 0.7)",
            },
          },
        ],
        xAxis: [
          {
            type: "value",
            splitLine: {
              show: false,
            },
            axisLine: {
              show:false,
            },
            axisLabel: {
              show:false,
            },
          },
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "10",
            barCategoryGap :'50',
            data: [18, 34, 56, 48, 87],
            yAxisIndex:'0',
            label: {
                show: true,
                position:'inside',
                formatter:'{c}%'
            },
            itemStyle: {
              borderRadius: 30,
              color:function(params){
                //console.log(params)
                return myColor[params.dataIndex]
                //return myColor[0]
              },
            },
            
          },
          {
            name: "直接访问",
            type: "bar",
            barWidth: "12",
            data: [100, 100, 100, 100, 100],
            yAxisIndex:'1',
            label: {
                show: false
            },
            itemStyle: {
              borderRadius: 30,
              color: "rgba(137, 69, 69, 0)",
              borderColor: "rgba(165, 246, 255, 1)",
              borderWidth: 1,
            },
            
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener('resize',function(){
        myChart.resize();
      })
    },
    createchartLine_r() {
      var myChart = echarts.init(document.getElementById("line_r"));
      console.log(myChart);
      var option = {
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(0,21,49, 0.7)", //通过设置rgba调节背景颜色与透明度
          borderWidth: 0,
          textStyle: {
            color: "#fff",
          },
        },
        legend: {
          data: ["播放量", "转发量"],
          right: 0,
          itemStyle: {
            borderWidth: 0,
          },
          itemWidth: 30,
          itemHeight: 10,
          lineStyle: {
            cap: "round",
          },

          textStyle: {
            color: "rgba(255,255,255, 0.7)",
            fontSize: "12",
          },
        },
        grid: {
          left: "0%",
          right: "0%",
          bottom: "0%",
          top: "12%",
          containLabel: true,
        },

        xAxis: [
          {
            type: "category",
            data: ["01", "02", "03", "04", "05", "06", "07", "08", "09"],
            boundaryGap: false,
            axisTick: {
              alignWithLabel: true,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              color: "rgba(255,255,255, 0.7)",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false,
            },
            axisLabel: {
              color: "rgba(255,255,255, 0.7)",
            },
          },
        ],
        series: [
          {
            name: "播放量",
            type: "line",
            smooth: true,
            data: [60, 70, 90, 200, 100, 110, 60,180,40],
            itemStyle: {
              normal: {
                color: "#ffea48", //折线点的颜色
                lineStyle: {
                  color: "#ffea48", //折线的颜色
                },
              },
            },
            areaStyle: {
              opacity: 0.2
            },
          },
          {
            name: "转发量",
            type: "line",
            smooth: true,
            data: [120, 40, 230, 90, 180, 70,200,30,90],
            itemStyle: {
              normal: {
                color: "#318eff", //折线点的颜色
                lineStyle: {
                  color: "#318eff", //折线的颜色
                },
              },
            },
            areaStyle: {
              opacity: 0.2
            },
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener('resize',function(){
        myChart.resize();
      })
    },
    createchartPie_l() {
      const myChart = echarts.init(document.getElementById("pie_l"));
      const option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "0%",
          left: "right",
          itemWidth: 12,
          itemHeight: 6,
          itemStyle:{
            borderWidth:"0"
          },
          textStyle:{
            color: "rgba(255,255,255, 0.7)",
            fontSize: "12",
          },
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            top: "10%",
            radius: ["34%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 4,
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
              { value: 735, name: "10~20" },
              { value: 580, name: "20~30" },
              { value: 484, name: "30~40" },
              { value: 300, name: "40~" },
            ],
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener('resize',function(){
        myChart.resize();
      })
    },
    createchartBar_l() {
      var myChart = echarts.init(document.getElementById("bar_l"));
      var option;
      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
          backgroundColor: "rgba(0,21,49, 0.7)", //通过设置rgba调节背景颜色与透明度
          borderWidth: 0,
          textStyle: {
            color: "#fff",
          },
        },
        grid: {
          left: "0%",
          right: "0%",
          bottom: "0%",
          top: "12%",
          containLabel: true,
        },

        xAxis: [
          {
            type: "category",
            data: ["旅游", "计算机", "互联网", "电商", "外贸"],
            axisTick: {
              alignWithLabel: true,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              color: "rgba(255,255,255, 0.7)",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false,
            },
            axisLabel: {
              color: "rgba(255,255,255, 0.7)",
            },
          },
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "40%",
            data: [10, 52, 200, 334, 390],
            itemStyle: {
              borderRadius: [3, 3, 0, 0],
            },
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener('resize',function(){
        myChart.resize();
      })
    },
    createchartLine_l() {
      var myChart = echarts.init(document.getElementById("line_l"));
      console.log(myChart);
      var option = {
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(0,21,49, 0.7)", //通过设置rgba调节背景颜色与透明度
          borderWidth: 0,
          textStyle: {
            color: "#fff",
          },
        },
        legend: {
          data: ["新增粉丝", "新增游客"],
          right: 0,
          itemStyle: {
            borderWidth: 0,
          },
          itemWidth: 30,
          itemHeight: 10,
          lineStyle: {
            cap: "round",
          },

          textStyle: {
            color: "rgba(255,255,255, 0.7)",
            fontSize: "12",
          },
        },
        grid: {
          left: "0%",
          right: "0%",
          bottom: "0%",
          top: "12%",
          containLabel: true,
        },

        xAxis: [
          {
            type: "category",
            data: ["1月", "3月", "5月", "7月", "9月", "11月"],
            axisTick: {
              alignWithLabel: true,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              color: "rgba(255,255,255, 0.7)",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false,
            },
            axisLabel: {
              color: "rgba(255,255,255, 0.7)",
            },
          },
        ],
        series: [
          {
            name: "新增粉丝",
            type: "line",
            smooth: true,
            data: [60, 70, 90, 200, 100, 110, 60],
            itemStyle: {
              normal: {
                color: "#ffea48", //折线点的颜色
                lineStyle: {
                  color: "#ffea48", //折线的颜色
                },
              },
            },
          },
          {
            name: "新增游客",
            type: "line",
            smooth: true,
            data: [120, 40, 230, 90, 180, 150, 180],
            itemStyle: {
              normal: {
                color: "#318eff", //折线点的颜色
                lineStyle: {
                  color: "#318eff", //折线的颜色
                },
              },
            },
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
@import "../css/bigScreen.css";
</style>
