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
  background-position: center;/* 背景图随屏幕尺寸变化 背景图两边隐藏 图片不压缩 */
}
html,body {
  width: 100%;
  height: 100%;
}

</style>
