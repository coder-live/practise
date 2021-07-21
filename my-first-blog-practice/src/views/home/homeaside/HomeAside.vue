<template>
  <div class= "home-aside">
    <home-aside-item v-for= "(item,index) in asideItem" :aside-item="item" isMain= "true" 
    :key= "item.title" :index= "index"></home-aside-item>
    <!--asideTitle 中的内容也需要扩大化,进入for循环item,传给子组件.同listItem-->
    <home-aside-item v-for= "(item,index) in asideComment" :aside-item= "item" 
    :key= "item.title" :index= "index"></home-aside-item>
    
  </div>

</template>

<script>
import HomeAsideItem from "./HomeAsideItem";
export default {
  name: 'homeaside',
  components: {
    HomeAsideItem
  },
  data() {
    return {
      asideItem: [
        {
          title: "热门",num: ["322","25","22","17"],
          text: "有个东西四个字,有时候三个字,但是从来没有五个字",
          textTit: "无聊"
        },
        {
          title: "最新-更新",num: ["322","11","9","6"],
          text: "我是内容",
          textTit: "我是标题"
        },
        {
          title: "最新-想法",num: ["322","33","25","19"],
          text: "堵车。和以后的堵车就不同了，在乎你与谁一起堵的车，等车到了目的地后做什么事，又货现在主要做什么事的状态，都不一样了。",
          textTit: "毕业啦!"
        }
      ],
      asideComment: [
        {
          title: "最新评论",time: "一天前",
          comment: "我是评论1"
        },
        {
          title: "最近评论",time: "一周前",
          comment: "我是评论2"
        },
        {
          title: "旧评论",time: "一个月前",
          comment: "我是评论3"
        }
      ]
    }
  }
}
</script>

<style scoped>
  .home-aside{
    position: absolute;
    right: 0;
    top: 0;
    width: 23vw;
    height: 1620px;
    overflow: hidden;
    margin: 30px;
    
  }
</style>