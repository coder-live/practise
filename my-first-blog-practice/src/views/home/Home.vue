<template>
  <div id= "home">
    <home-swiper></home-swiper>
    <home-list></home-list>
    <home-aside></home-aside>
    <home-footer></home-footer>
    <back-top v-show= "isShow" @click.native= "topClick"></back-top>
  </div>
  
</template>

<script>
import HomeSwiper from "./homechildren/HomeSwiper"
import HomeList from "./homelist/HomeList"
import HomeAside from "./homeaside/HomeAside"
import HomeFooter from "./homechildren/HomeFooter"

import {mixin} from "@/commonjs/Mixins.js"

export default {
  name: 'home',
  components: {
    HomeSwiper,
    HomeFooter,
    HomeAside,
    HomeList,

  },
  mixins: [mixin],
  data() {
    return {
      
    }
  },
  
  methods: {
    scroll( e ) {
      // let Delta;
      // let lessMaxHeight = (document.documentElement.scrollTop + document.documentElement.clientHeight)
      // <  document.documentElement.scrollHeight;
      // e = e || window.event;
      // Delta = e.wheelDelta ? e.wheelDelta/180 : -e.detail/3
      // if(lessMaxHeight) {
      //   if(Delta >0 ) {
      //     this.dIndex === 0 ? 0 : this.dIndex--
      //   }else{
      //     this.dIndex ++
      //   }
      // }
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      //console.log(scrollTop)
      this.isShow = scrollTop > 600? true : false;
    },
    topClick() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      this.isShow = false
    }
  },
  
}
</script>

<style scoped>
  #home{
    position: relative;
    height: 1750px;
    margin-top: 59px;
    padding: 30px;
    background-color: #b3b3b3;
  }
</style>