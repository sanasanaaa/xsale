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

html,body{
  height: 100vh;
  width: 100vw;
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
