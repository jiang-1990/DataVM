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
  }
}
</script>

<style scoped>

</style>
