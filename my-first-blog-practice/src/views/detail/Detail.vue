<template>
  <div class= "detail">
    <detail-item></detail-item>
    <home-aside></home-aside>
    <home-footer></home-footer>
    <back-top v-show= "isShow" @click.native= "topClick"></back-top>
  </div>
</template>

<script>
import DetailItem from "./DetailItem"
import HomeFooter from "@/views/home/homechildren/HomeFooter";
import HomeAside from "@/views/home/homeaside/HomeAside";

import {mixin} from "@/commonjs/Mixins.js";
export default {
  name: 'detail',
  components: {
    HomeFooter,
    HomeAside,
    DetailItem
  },
  data() {
    return {
      
    }
  },
  mixins: [mixin],
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
  .detail{
    position: relative;
    height: 1750px;
    margin-top: 59px;
    padding: 30px;
    background-color: #b3b3b3;
  }
</style>