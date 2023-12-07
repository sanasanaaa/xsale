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
  overflow-y: auto;
  overflow-x: hidden;
}

body{
  line-height: 28px;
  font-size: 16px;
  font-family: "Barlow", sans-serif;
  font-weight: normal;
}

a {
    text-decoration: none;
    transition: all 0.3s linear;
    background-color: transparent;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

img {
    vertical-align: middle;
    border-style: none;
    overflow-clip-margin: content-box;
    overflow: clip;
}
::-webkit-scrollbar {
  width: 0px; /* 设置滚动条的宽度 */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-right: calc(100% - 100vw);
  text-align: center;
  color: #2c3e50;
  /* height: 100vh; */
  /* width: 100vw; */
  overflow-x: hidden;
}

.container{
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        max-width: 1140px;
  }
</style>
