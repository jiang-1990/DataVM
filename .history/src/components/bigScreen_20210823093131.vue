<template>
  <div id="chartmain" style="width:600px; height: 400px;"></div>
</template>

<script>
export default {
  
  name: 'bigScreen',
  data () {
    return {
      orgOptions: {},
    }
  },
  computed() {
    this.createchart()
  },
  created() {
    //this.createchart()
  },
  methods:{
    createchart(){
      var myChart = echarts.init(document.getElementById('chartmain'));
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

</style>
