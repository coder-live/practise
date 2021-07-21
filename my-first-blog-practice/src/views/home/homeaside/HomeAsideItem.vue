<template>
  <div class= "aside-item">
    <head-line><span>{{asideItem.title}}</span></head-line>
    <div class="main" v-if= "isMain">
      <div class="content">
        <div class="aside-title" :class= "{active: currentIndex === index}" 
        @mouseenter= "tilteHover(index)" 
        @mouseleave= "tilteLeave">
          {{asideItem.textTit}}
        </div>
        <div class="aside-text">
          {{asideItem.text}}
        </div>
        <icon :icon-num= "asideItem.num" :choose-icon= "'aside'"></icon>
      </div>
    </div>

    <div class="comment" v-else>
      <div class="content">
        <img src="~assets/img/items/04.jpg" alt="">
        <span class= "name">我是谁</span>
        <span class= "time">{{asideItem.time}}</span>
        <div class= "text">{{asideItem.comment}}</div>
        <div class="origin">来源于xx文章</div>
      </div>
    </div>
    
  </div>

</template>

<script>
import HeadLine from "@/components/content/headline/HeadLine";
import Icon from "@/components/content/icon/Icon";

export default {
  name: 'homeasideitem',
  components: {
    HeadLine,
    Icon
  },
  data() {
    return {
      currentIndex: ""
    }
  },
  props: {
    asideItem: {
      type: null,
      default() {
        return "我是导航线"
      }
    },
    isMain: {
      type: null,
      default() {
        return false
      }
    },
    index: Number
  },
  created() {

  },
  methods: {
    tilteHover(index) {
      this.currentIndex = index;
      //console.log(1)
    },
    tilteLeave() {
      this.currentIndex = ""
    }
  }
}
</script>

<style scoped>
  .active{
    color: skyblue;
  }
  .aside-item{
    width: 100%;
    height: 200px;
    background-color: #fff;
    margin-bottom:20px;
    border-radius: 5px;
  }
  .main,.comment{
    padding: 0 15px;
    overflow: hidden;
  }
  .main .aside-title{
    text-align: center;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .main .aside-text{
    margin-bottom: 10px;
    font-size: 13px;
    height: 60px;
    line-height: 20px;
    letter-spacing: 1px;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .comment .content{
    padding: 15px 0;
    overflow: hidden;
  }
  .comment .content img{
    width: 50px;
    height: 50px;
    vertical-align: top;
  }
  .comment .content .name{
    display: inline-block;
    width: 80px;
    height: 20px;
    margin-left: 15px;
    overflow: hidden;
    color: skyblue;
    cursor: pointer;
  }
  .comment .content .time{
    float: right;
    font-size: 12px;
  }
  .comment .content .text{
    position: relative;
    top: -15px;
    margin-left: 65px;
    font-size: 12px;
  }
  .comment .content .origin{
    margin: 10px 5px;
    color: skyblue;
    cursor: pointer;
  }
</style>