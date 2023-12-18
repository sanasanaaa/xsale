<template>
    <div class="goods_detail_overview">
        <h4>Overview</h4>
        <p>{{des}}</p>
        <div class="overview_characteristic">
            <el-row>
                <el-col v-for="(item,index) in overviewlist"  :key="index" :xs="24" :sm="12" :md="12" :lg="12" :xl="12" >
                    
                    <div class="characteristic_item">
                        {{item}}
                    </div>
                   
                </el-col>
            </el-row>

        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            des:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do them and eiusmod tempor incididunt labore dolorie magna aliqua. Ut enim adoren minim venim quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat',
            overviewlist: [
                '特点1',
                '特点2',
                '特点3',
                '特点4',
                '特点5',
            ]
        }
    },
}
</script>


<style lang="scss">


.goods_detail_overview{
    h4 {
        color: #34373b;
        font: bold 36px "Barlow", sans-serif;
        margin-bottom: 16px;
    }

    .characteristic_item{
        margin-bottom: 10px;
        position: relative;
        // padding-left: 25px;
        color: #777777;
        display: block;
        cursor: auto;
    }
} 
</style>