<template>
  <tab-bar id = "tab-bar">
      <tab-bar-item path= "/home" activeColor="blue">
        <img slot ="item-img" src="~assets/img/tabbar/shouye.svg" alt=""/>
        <img slot ="item-img-act" src="~assets/img/tabbar/shouye_act.svg"/>
        <div slot ="item-txt">首页</div>
      </tab-bar-item>
      <tab-bar-item path= "/category">
        <img slot ="item-img" src="~assets/img/tabbar/fenlei.svg" alt=""/>
        <img slot ="item-img-act" src="~assets/img/tabbar/fenlei_act.svg"/>
        <div slot ="item-txt">分类</div>
      </tab-bar-item>
      <tab-bar-item path= "/buycar">
        <img slot ="item-img" src="~assets/img/tabbar/gouwuche.svg" alt=""/>
        <img slot ="item-img-act" src="~assets/img/tabbar/gouwuche_act.svg"/>
        <div slot ="item-txt">购物车</div>
      </tab-bar-item>
      <tab-bar-item path= "/profile">
        <img slot ="item-img" src="~assets/img/tabbar/wode.svg" alt=""/>
        <img slot ="item-img-act" src="~assets/img/tabbar/wode_act.svg"/>
        <div slot ="item-txt">我的</div>
      </tab-bar-item>
    </tab-bar>

</template>

<script>
  //console.log(TabBar)
  import TabBar from "components/common/tabbar/TabBar.vue"
  import TabBarItem from "components/common/tabbar/TabBarItem.vue"
  export default {
    name: 'MainTab',
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  
</style>