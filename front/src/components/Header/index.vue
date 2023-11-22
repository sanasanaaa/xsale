<template>
  <header class="" id="header">
    <div class="top_menu_container">
      <top-menu></top-menu>
    </div>
    
    <div class="main_menu_container">
      <main-menu></main-menu>
    </div>
   
  </header>
</template>

<script>
import TopMenu from './TopMenu.vue'
import MainMenu from './MainMenu.vue'

export default {
  name: 'OHeader',
  components:{
    TopMenu,
    MainMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#header{
  height: 130px;
  width: 100%;
}
</style>
