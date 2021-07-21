<template>
  <div class= "home-footer">
    <div class="foot-one">友情链接:
      <a href="https://www.wujiabk.com">吴佳博客</a>
    </div>
    <div class="foot-two">2020 littleThinker Blog. 浙ICP备20002521号-1. by 萧逸</div>
  </div>

</template>

<script>
export default {
  name: 'homefooter'
}
</script>

<style scoped>
  .home-footer{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 140px;
    
    background-color: #222;
    color: #fff;
  }
  .home-footer .foot-one{
    border-bottom: 1px solid #444;
    padding-top: 30px;
    height: 30%;
    margin: 0 150px;
    vertical-align: middle;
    color: #666;
  }
  .home-footer .foot-one a{
    text-decoration: none;
    color: #666;
    margin: 0 5px;
  }
  .home-footer .foot-one a:hover{
    color: skyblue;
  }
  .home-footer .foot-two{
    width: 600px;
    margin: 20px auto;
    text-align: center;
    color: #666;
  }
</style>