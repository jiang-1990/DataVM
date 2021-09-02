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
/* body{
  margin: 0;
  padding: 0;
  background-image: url('assets/bg.jpg') ;
  background-Repeat : 'no-repeat';
  background-Size : '100% 100%';
} */

* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
html,body {
  width: 100%;
  height: 100%;
}
#app {
  display: block;

  background-image: url('assets/bg.jpg') ;
  background-Repeat : 'no-repeat';
  background-Size : '100% 100%';
  background-position: center; /* 背景图随屏幕尺寸变化 背景图两边隐藏 图片不压缩 */
}
</style>
