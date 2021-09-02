<template>
  <div>
    <div class="top">
      <h1>数据可视化展示</h1>
      <span class="time">当前时间：{{date|formatDate(this)}}</span>
    </div>
    <div id="myChart" style="width:1920px; height: 400px;"></div>
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
  mounted(){
    this.createchart()
  },
  created() {
    
  },
  methods:{
    //格式话当前时间
    formatDate(date, vm) {  //当前时间格式化处理
	var str = "";
    var weekDay = [
    	"星期天",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
 	];
    str += vm.setZero(date.getFullYear()) + "年"; //获取年份
    str += vm.setZero(date.getMonth() + 1) + "月"; //获取月份
    str += vm.setZero(date.getDate()) + "日"; //获取日
    str += " " + weekDay[date.getDay()]; //获取星期
    str += " " + vm.setZero(date.getHours()) + ":"; //获取时
    str += " " + vm.setZero(date.getMinutes()) + ":"; //获取分
    str += vm.setZero(date.getSeconds()); //获取秒
    return str;
},
    createchart(){
      var myChart = echarts.init(document.getElementById('myChart'))
      console.log(myChart)
      var option = {
            title:{
                text:'ECharts 数据统计'
            },
            tooltip:{},
            legend:{
                data:['用户来源']
            },
            xAxis:{
                data:["Android","IOS","PC","Ohter"]
            },
            yAxis:{

            },
            series:[{
                name:'访问量',
                type:'line',
                data:[500,200,360,100]
            }]
        };

        //使用制定的配置项和数据显示图表
        myChart.setOption(option);
    },
  }
}
</script>

<style scoped>
@import '../css/bigScreen.css';
</style>
