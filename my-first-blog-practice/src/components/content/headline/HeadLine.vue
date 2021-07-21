<template>
  <div class= "head-line">
    <h4 class="head-title"><slot>我是导航线</slot></h4>
  </div>

</template>

<script>
export default {
  name: 'headline',
  
}
</script>

<style scoped>
  .head-line{
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .head-title{
    
    padding: 0;
    margin: 15px;
    border-bottom: 1px solid #eee;
  }
  .head-title:hover::after{
    width: 100%;
  }
  .head-title::after{
    display: block;
    content: "";
    position: relative;
    width: 15%;
    margin-top:10px;
    border: 1px solid red;
    transition: 2s;
  }
</style>