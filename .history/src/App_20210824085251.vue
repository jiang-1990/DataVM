<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app ,body{
  height: 100%;
  background-image: url('assets/bg.jpg') ;
  background-Repeat : 'no-repeat';
  background-Size : '100% 100%';
}
</style>
