<template>
  <div id= "rand-notes">
    <div class= "rand-notes-list">
      <list-item v-for= "(item,index) in randNoteData" 
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
import ListItem from "@/components/content/listitem/ListItem";
import HomeFooter from "@/views/home/homechildren/HomeFooter";
import HomeAside from "@/views/home/homeaside/HomeAside";

import {mixin} from "@/commonjs/Mixins.js"
export default {
  name: 'randomnotes',
  components: {
    HomeFooter,
    HomeAside,
    ListItem,
  },
  data() {
    return {
      randNoteData: [
        {
          listItem: "当前位置: 随记",
          listItemTit: "日常随笔之违和的生活",
          imgSrc: require("@/assets/img/items/02.jpg"),
          iconNum: ["248","2020.01.29","06","05","03"],
          id: 50,
          text: `我活在世上，无非想要明白些道理，遇见些有趣的事。倘能如我愿，我的一生就算成功。
          当你非常难以做一件事的时候，先会接收它真如遇到一件做梦都想做的事却不敢做时，先第一步以最直接最简单的打招呼开始。以最严格的标准来要求自己，以承受高成本获低利润的代价，来获得自我的提升，只需个动力。
一切发生的事都当做是它们自己找上门的，我不过是被连累的。
`    
        },
       
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
  #rand-notes{
    position: relative;
    height: 1750px;
    margin-top: 59px;
    padding: 30px;
    background-color: #b3b3b3;
  }
  .rand-notes-list{
    width: 69vw;
    overflow: hidden;
  }

</style>