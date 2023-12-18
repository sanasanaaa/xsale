<template>
  <div :class="{main_menu:true}" id="main_menu">
    <div class="container">
      <el-row :gutter="20">
        <el-col :span="16">
          <ul>
            <li v-for="menuNode in mainMenu"
            class="menu_item"
            @click = '()=>go(menuNode.path)'
            :key="menuNode"  style="font-family: 'Barlow',sans-serif;font-weight: bold;font-size: 16px;font-weight" >
            <el-button :class="['menu_item_text',path==menuNode.path?'active_mainmenu_bt':'']" link >{{menuNode.title}}</el-button>
            </li>
          </ul>



          
        </el-col>
       
      </el-row>
    <div>
      </div>
    </div>
  </div>
</template>

<script>

import { mainMenuNode } from '../../config'
export default {
  name: 'MainMenu',
  data() { 
    return {
      fixed: true,
      mainMenuNode,
      path:'/home'
    }
  },
  mounted() {
    console.log(this.$router.currentRoute.path)
    document.getElementById('app').addEventListener('scroll', () => { 
      document.getElementById('app').scrollTop;
      let height = document.getElementById('header').getBoundingClientRect().height;
      if (height < document.getElementById('app').scrollTop) {
        this.fixed = true
        document.getElementById('main_menu').style.marginTop='500'
      } else { 
        this.fixed = false
      }
     

     
    })
  },
  computed: {
    mainMenu() {
      let data = [];
      for (let i = 0; i < this.mainMenuNode.length; i++) { 
        let item = this.mainMenuNode[i];
        data.push({title: this.$t(''+item.title),path:item.path})
      }
      return data
    },


  },

  watch: {
    $route: {
      handler: function(val, ){
        if (val.path) { 
          console.log(val.path)
          this.path = val.path
        }
    },
    // 深度观察监听
    deep: true
    },
   
  },

  methods: {

    handleCommand(e) {
      this.$i18n.locale = e
    },

    go(path) { 
        this.path = path
        this.$router.push(path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


.main_menu{
  margin-top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  

  ul{
    height: 100%;
    width: 100%;
    line-height: 100%;
    display: flex;

    justify-content: space-between;

    li{
      height: 100%;
      line-height: 100%;
      display: flex;
      align-items: center;
      list-style:none;
    }
    .menu_item{
      font-family: 'Barlow',sans-serif;
      font-weight: bold;
      font-size: 16px;

      .menu_item_text{
        line-height: 70px;
        font-size: 16px;
        color: #34373b;
        font-family: "Barlow", sans-serif;
        font-weight: 500;
        transition: all 300ms ease;
        position: relative;
        display: block;
        text-transform: uppercase;
      }

      .active_mainmenu_bt{
        color:#8EC21E;
      }
    }
  }

  .main_menu_setting{
    :hover{
      border: 0px !important;
    }
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main_menu_settingIcon{
    font-size: 20px;

  }
}
.main_menu_box{

  display: flex;
  justify-content: space-around;
  width: 100%;
}
.main_menu_content{
  width: 1200px;
  /* display: flex; */
}
.main_menu_languageset{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>
