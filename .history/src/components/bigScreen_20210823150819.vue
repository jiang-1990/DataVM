<template>
  <div>
    <div class="top">
      <h1>数据可视化展示</h1>
      <span class="time">当前时间：{{date | dateFormat}}</span>
    </div>
    <div class="mainBox">
      <div class="culonm">
        <div class="panl bar">
          <h2>就业行业</h2>
          <div class="chart"></div>
          <div class="zhuanjiao"></div>
        </div>

        <div class="panl line">
          <h2>就业行业</h2>
          <div class="chart"></div>
          <div class="zhuanjiao"></div>
        </div>

        <div class="panl par">
          <h2>就业行业</h2>
          <div class="chart"></div>
          <div class="zhuanjiao"></div>
        </div>
      </div>
      <div class="culonm">2</div>
      <div class="culonm">
        <div class="panl bar">
          <h2>就业行业</h2>
          <div class="chart"></div>
          <div class="zhuanjiao"></div>
        </div>

        <div class="panl line">
          <h2>就业行业</h2>
          <div class="chart"></div>
          <div class="zhuanjiao"></div>
        </div>
        
        <div class="panl par">
          <h2>就业行业</h2>
          <div class="chart"></div>
          <div class="zhuanjiao"></div>
        </div>
      </div>
    </div>
    <!-- <div id="myChart" style="width:1920px; height: 400px;"></div> -->
  </div>
</template>

<script>
// 引入echarts
var echarts = require('echarts')
export default {
  data () {
    return {
      date: new Date(),//当前日期
    }
  },
  // 定义一个局部的过滤器，格式化当前时间
  filters: {
    dateFormat: (dateTime) => {
      var now = new Date(dateTime)
      var y = now.getFullYear()
      var m = (now.getMonth() + 1).toString().padStart(2, '0')
      var d = now.getDate().toString().padStart(2, '0')
      var hh = now.getHours().toString().padStart(2, '0')
      var mm = now.getMinutes().toString().padStart(2, '0')
      var ss = now.getSeconds().toString().padStart(2, '0')
      // 过滤器中要有返回值
      return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
    }
  },
  mounted(){
    this.createchart()
    var _this = this;
    this.timer = setInterval(() => {
	    _this.date = new Date(); // 修改日期数据
    }, 1000);
    
  },
  created() {
    
  },
  methods:{
    // createchart(){
    //   var myChart = echarts.init(document.getElementById('myChart'))
    //   console.log(myChart)
    //   var option = {
    //         title:{
    //             text:'ECharts 数据统计'
    //         },
    //         tooltip:{},
    //         legend:{
    //             data:['用户来源']
    //         },
    //         xAxis:{
    //             data:["Android","IOS","PC","Ohter"]
    //         },
    //         yAxis:{

    //         },
    //         series:[{
    //             name:'访问量',
    //             type:'line',
    //             data:[500,200,360,100]
    //         }]
    //     };

    //     //使用制定的配置项和数据显示图表
    //     myChart.setOption(option);
    // },
  }
}
</script>

<style scoped>
@import '../css/bigScreen.css';
</style>
