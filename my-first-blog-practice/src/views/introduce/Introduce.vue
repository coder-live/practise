<template>
  <div id= "introduce">
    <div class= "introduce-list">
      <list-item v-for= "(item,index) in introduceData" 
      :key= "item.title" :index= "index" 
      :detail-data="item" >
      </list-item>
    </div>
    <home-aside></home-aside>
    <home-footer></home-footer>
    <back-top v-show= "isShow" @click.native= "topClick"></back-top>
  </div>

</template>

<script>
import ListItem from "@/components/content/listitem/ListItem"
import HomeFooter from "@/views/home/homechildren/HomeFooter"
import HomeAside from "@/views/home/homeaside/HomeAside"

import {mixin} from "@/commonjs/Mixins.js"
export default {
  name: 'introduce',
  components: {
    HomeFooter,
    HomeAside,
    ListItem,
  },
  data() {
    return {
      introduceData: [
        {
          listItem: "当前位置: 博主简介(置顶)",
          listItemTit: "博主介绍",
          imgSrc: require("@/assets/img/items/05.jpg"),
          iconNum: ["244","2020.01.29","06","05","03"],
          id: 20,
          text: "我是一名新人,希望以自身所学,描绘出未来美好的蓝图!"     
        }  
      ],
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
  #introduce{
    position: relative;
    height: 1750px;
    margin-top: 59px;
    padding: 30px;
    background-color: #b3b3b3;
  }
  .introduce-list{
    width: 69vw;
    overflow: hidden;
  }
 
</style>