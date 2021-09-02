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
  background-image: url('assets/bg.jpg') ;
  background-Repeat : 'no-repeat';
  background-Size : '100% 100%';
  background-position: center;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body {
  width: 100%;
  height: 100%;
}

</style>
