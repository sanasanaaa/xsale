<template>
  <RouterCard title="Goods List"/>
    <div class='main_goods_area p_100'>
      <div class="container">
        <el-row gutter="30">
          <el-col xs="24" :sm="24" :md="6" :lg="6" :xl="6">
            <div class="left_side">
              <div class="left_side_title">
                <input type="text" placeholder="Find Your Car">
              </div>
              <div>
                <el-collapse v-model="activeName" accordion>
                  <el-collapse-item title="Seach By Brand" name="1" >
                    <template #title >
                      <div class="collapse_Bt">
                        Seach By Brand
                      </div>
                    
                    </template>
                    <div>
                      Consistent with real life: in line with the process and logic of real
                      life, and comply with languages and habits that the users are used to;
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="Filter Price" name="2">
                    <template #title >
                      <div class="collapse_Bt">
                        Filter Price
                      </div>
                    </template>
                    <div>
                      Operation feedback: enable the users to clearly perceive their
                      operations by style updates and interactive effects;
                    </div>
                    
                  </el-collapse-item>
                  <el-collapse-item title="Build Year" name="3">
                    <template #title >
                      <div class="collapse_Bt">
                        Build Year
                      </div>
                    </template>
                    <div>
                      Simplify the process: keep operating process simple and intuitive;
                    </div>
                    <div>
                      Definite and clear: enunciate your intentions clearly so that the
                      users can quickly understand and make decisions;
                    </div>
                    <div>
                      Easy to identify: the interface should be straightforward, which helps
                      the users to identify and frees them from memorizing and recalling.
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="Body Type" name="4">
                    <template #title >
                      <div class="collapse_Bt">
                        Body Type
                      </div>
                    </template>
                    <div>
                      Controlled consequences: users should be granted the freedom to
                      operate, including canceling, aborting or terminating current
                      operation.
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>

            </div>
          </el-col>
          <el-col xs="24" :sm="24" :md="18" :lg="18" :xl="18">
            <div class="right_side">
              <el-row gutter="30">
                <el-col v-for="i in 6" :key="i" xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                  <SimpleCard></SimpleCard>
                </el-col>

              </el-row>
              <div class="pagination">
                <el-pagination background layout="prev, pager, next, jumper" :total="1000" />
              </div>
             
            </div>
          </el-col>
        </el-row>
      </div>

    </div>
  </template>
  
  <script>

  import SimpleCard from '@/components/SimpleCard'
  import RouterCard from '@/components/RouterCard'
  
  export default {
      name: 'about',
      components: {
        SimpleCard,
        RouterCard
      }
  }
  </script>

  <style lang="scss" >

:root{
  --el-pagination-hover-color:#8EC21E;
}
  .el-collapse-item__header {
    height: 78px; /* 设置标题高度为50px，根据需要调整 */
    line-height: 78px; /* 设置标题行高，保持垂直居中 */
    padding-left: 15px;
    padding-right: 15px;
  }


  .el-pagination.is-background .btn-next.is-active, .el-pagination.is-background .btn-prev.is-active, .el-pagination.is-background .el-pager li.is-active {
    background-color:  #8EC21E;
    color: #fff;
     
  }
  .el-pager li:hover {
    color: #8EC21E;
  }

  .el-input__wrapper:hover {
    box-shadow: 0 0 0 1px #8EC21E inset;
  }
  .el-input__wrapper:focus-visible {
    outline:  #8EC21E auto 1px;
  }


.el-pager{
   button{
    :hover{
      color:  #8EC21E;
    }
   }
}
  .main_goods_area {

    .left_side{
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.08);

      .left_side_title{
        input{
          width: 100%;
          background: #252525;
          border: none;
          box-shadow: none;
          outline: none;
          height: 60px;
          padding: 0px 20px;
          font: bold 20px/60px "Barlow", sans-serif;
          color: #fff;

          ::placeholder{
            color: #fff;
          }
        }
      }

      .collapse_Bt{
        text-decoration: none;
        font: bold 20px "Barlow", sans-serif;
        background: transparent;
        display: block;
        padding: 26px 0px;
        position: relative;
        display: block;
        width: 100%;
        text-align: left;
      }
      
    }

    .right_side{

      .pagination{
        display: flex;
        justify-content: center;
        margin-top: 50px;
      }
    }

  }

  </style>
  
  