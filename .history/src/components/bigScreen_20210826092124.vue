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
          <div class="chart" id="bar_l"></div>
          <div class="zhuanjiao"></div>
        </div>

        <div class="panl line">
          <h2>就业行业</h2>
          <div class="chart"></div>
          <div class="zhuanjiao"></div>
        </div>

        <div class="panl pie">
          <h2>就业行业</h2>
          <div class="chart"></div>
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
          <div class="chart"></div>
        </div>
      </div>
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
        
        <div class="panl pie">
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
      let week = now.getDay(); // 星期
      let weekArr = [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ];
      // 过滤器中要有返回值
      return `${y}-${m}-${d} ${hh}:${mm}:${ss} ${weekArr[week]}`
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
    createchart(){
      var myChart = echarts.init(document.getElementById('bar_l'))
       var option;

var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
var yMax = 500;
var dataShadow = [];

for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}

option = {
    title: {
        text: '特性示例：渐变色 阴影 点击缩放',
        subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
    },
    xAxis: {
        data: dataAxis,
        axisLabel: {
            inside: true,
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        z: 10
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
        {
            type: 'bar',
            showBackground: true,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#83bff6'},
                        {offset: 0.5, color: '#188df0'},
                        {offset: 1, color: '#188df0'}
                    ]
                )
            },
            emphasis: {
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2378f7'},
                            {offset: 0.7, color: '#2378f7'},
                            {offset: 1, color: '#83bff6'}
                        ]
                    )
                }
            },
            data: data
        }
    ]
};

// Enable data zoom when user click bar.
var zoomSize = 6;
myChart.on('click', function (params) {
    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
    myChart.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
    });
});

option && myChart.setOption(option);
    },
  }
}
</script>

<style scoped>
@import '../css/bigScreen.css';
</style>
