<template>
  <div id= "projects">
    <div class= "project-list">
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
import ListItem from "@/components/content/listitem/ListItem"
import HomeFooter from "@/views/home/homechildren/HomeFooter"
import HomeAside from "@/views/home/homeaside/HomeAside"

import {mixin} from "@/commonjs/Mixins.js"
export default {
  name: 'projects',
  components: {
    HomeFooter,
    HomeAside,
    ListItem,
  },
  data() {
    return {
      randNoteData: [
        {
          listItem: "当前位置: 所遇问题",
          listItemTit: "问题之服务器域名解析后访问不了",
          imgSrc: require("@/assets/img/items/06.jpg"),
          iconNum: ["246","2020.01.29","06","05","03"],
          id: 40,
          text: `ubuntu下nginx的配置文件所在目录：
            /etc/nginx
            我们对nginx的配置主要写在nginx.conf文件里，这个目录下还有conf.d和sites-enabled两个文件夹，里面为默认的配置文件。 
            相应的，在配置nginx，编辑nginx.conf文件时，需要把这两行注释掉，否则nginx.conf不会生效。 
            配置完毕后，检查配置文件是否正确：

            nginx -t 
            重启nginx使配置生效:

            nginx -s reload
            若出现以下错误：

            nginx:[error] open() "/run/nginx.pid" failed (2: No such file or directory)
            使用以下命令即可解决：

            nginx -c /etc/nginx/nginx.conf
            nginx -s reload
            其他命令： 
            停止nginx服务：nginx -s stop
            
            或者是浏览器缓存的问题
`     
        },
        {
          listItem: "当前位置: 项目",
          listItemTit: "",
          imgSrc: require("@/assets/img/items/03.jpg"),
          iconNum: ["246","2020.01.29","06","05","03"],
          id: 40,
          text: "暂时没有数据哦!"     
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
  #projects{
    position: relative;
    height: 1750px;
    margin-top: 59px;
    padding: 30px;
    background-color: #b3b3b3;
  }
  .project-list{
    width: 69vw;
    overflow: hidden;
  }
</style>