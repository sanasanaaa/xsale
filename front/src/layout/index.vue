

<template>
  <div>
    <SHeader/>

  <router-view></router-view>
  <SFooter/>
  </div>
</template>

<script>
import SHeader from '../components/Header'
import SFooter from '../components/Footer'
import {routerView} from 'vue-router'
import WOW from "wow.js";
export default {
  name: 'LayoutView',
  components:{
    SHeader,
    SFooter,
    routerView
  },
  mounted() { 

    async function a(){ 
      let wow = new WOW({
    boxClass: 'wow',    //需要执行动画元素的Class
	// animateClass: 'animated',    //animation.css动画的Class
	offset: 0,    //距离可视区域多少开始执行动画
	mobile: true,    //是否在移动设备执行动画
	live: true    //异步加载的内容是否有效
  });

    wow.init();

    }
a()
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.item {
  width: 200px;
  height: 500px;
  background-color: rgb(228, 175, 175);
  margin: 200px;
}
</style>



