<template>
  <chart ref="chart1" :options="orgOptions" :auto-resize="true"></chart>
</template>

<script>
export default {
  name: 'bigScreen',
  data () {
    return {
      orgOptions: {},
    }
  },
  mounted() {
    this.orgOptions = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
        }]
    }
  }
}
</script>

<style scoped>

</style>
