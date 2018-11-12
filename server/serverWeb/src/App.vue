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
html,body{
    height: 100%;
}
*{
  margin: 0;
  padding: 0;
}
#app {
  font-size: 14px;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  color: #2c3e50;
}
.height100{
  height: 100%;
}
</style>
