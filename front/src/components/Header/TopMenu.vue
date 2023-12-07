<template>
  <div class="top_menu">
    <div class="container" >
      <div class="left">
        <span class="email">
            <!-- Email: theodore0lester@gmail.com -->
        </span>
      </div>
      <div class="right">
        <span class="whatsapp">
          whatsapp: +8617380581224
        </span>
      </div>
   
    
  </div>
  </div>
</template>

<script>
export default {
  name: 'TopMenu',
  props: {
    msg: String
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.top_menu{
  background: #8EC21E !important;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .container{
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    max-width: 1140px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      padding-left: 265px;
    }

    .right{
      text-align: right;
      background-color: #fff;
      padding-left: 20px;
      padding-right: 20px;
    }

    span{
      display:inline-block;
      height:50px;
      word-wrap: normal;
      white-space: nowrap;
      line-height: 50px;
      font-family: 'Barlow',sans-serif;
      font-weight: bold;
      font-size: 16px;
    }
  }

  

}
</style>
