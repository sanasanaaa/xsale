<template>
  <div class="top_menu">
    <div class="container" >
    <span class="email">
    Email: theodore0lester@gmail.com
    </span>
    <span class="whatsapp">
      whatsapp: +8617380581224
    </span>
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
    height:50px;
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span{
      display:inline-block;
      height:50px;
      line-height: 50px;
      width:50%;
      font-family: 'Barlow',sans-serif;
      font-weight: bold;
      font-size: 16px;
      text-align: left;
    }
  }

  

}
</style>
