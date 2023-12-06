<template>
    <div id = "homePageServiceCard">
        <el-row :gutter="20">

            <el-col v-for="(item,index) in cardData " :span="6" :key="index">
                <ServiceCardItem :itemData="item" />
            </el-col>
            <el-col :span="6"></el-col>
            <el-col :span="6"></el-col>
            <el-col :span="6"></el-col>
            </el-row>
        
    </div > 
</template>

<script>

import ServiceCardItem  from './item.vue'
export default {
    name: 'MainMenu',
    components:{
        ServiceCardItem
    },
    data() { 
        return {
            fixed: true,
            path: '/home',
            cardData: [
            {
                icon: '图标',
                title: '标题',
                description: '描述'
            },{
                icon: '图标',
                title: '标题',
                description: '描述'
            },{
                icon: '图标',
                title: '标题',
                description: '描述'
            },{
                icon: '图标',
                title: '标题',
                description: '描述'
            }
            ]
            
        }
    },
  mounted() {
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
      }
  },
  methods: {

    handleCommand(e) {
      this.$i18n.locale = e
    }
  }
}
</script>


<style lang="scss">
    #homePageServiceCard{
        background-size: cover;
        padding: 74.5px 0px;
        background-color: #000;
    }
</style>