<template>
  <div>
    <Layout />
  </div>
</template>

<script>
import Layout from './layout'
export default {
  name: 'App',
  components:{
    Layout,
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
}

*, ::after, ::before {
    box-sizing: border-box;
}

html,body{
  height: 100vh;
  width: 100vw;
}

body{
  line-height: 28px;
  font-size: 16px;
  font-family: "Barlow", sans-serif;
  font-weight: normal;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}
</style>
