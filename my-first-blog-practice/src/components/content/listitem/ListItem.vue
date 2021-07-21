<template>
  <div class= "list-item">
    <slot name= "line"><head-line><span>{{detailData.listItem}}</span></head-line></slot>
    <div class="box"  @mouseenter= "itemEnter(index)" @mouseleave= "itemLeave">
      <div class="img" @click= "titleClick">
        <img :src="detailData.imgSrc" alt="" 
        :class= "{enter: imgIndex === index}">
      </div>
      <div class="text">
        <div class="title" @mouseenter= "tilteHover(index)" 
        @mouseleave= "tilteLeave" @click= "titleClick"
        :class= "{active:currentIndex === index}">
          {{detailData.listItemTit}}
        </div>
        <div class="tet">{{ detailData.text }}</div>
        <icon :icon-num= "detailData.iconNum"><span class="watch" style= "font-size: 15px" @click= "titleClick">阅读全文>></span></icon>
      </div>
    </div>
  </div>

</template>

<script>
import HeadLine from "@/components/content/headline/HeadLine";
import Icon from "@/components/content/icon/Icon";
export default {
  name: 'homelistitem',
  components: {
    HeadLine,
    Icon
  },
  data() {
    return {
      currentIndex: "",
      imgIndex: ""
    }
  },
  props: {
    detailData: {
      type: Object,
      default() {
        return {}
      }
    },
    index: Number
  },
  methods: {
    titleClick() {
      //console.log(index);
      this.$router.push({path: '/detail/',query: 
      { 
        name: this.detailData.listItemTit,
        id: this.detailData.id,
        iconNum: this.detailData.iconNum,
        text: this.detailData.text
      }})
    },
    tilteHover(index) {
      this.currentIndex = index;
      //console.log(1)
    },
    tilteLeave() {
      this.currentIndex = ""
    },
    itemEnter(index) {
      this.imgIndex = index;
      //console.log(1);
    },
    itemLeave() {
      this.imgIndex = ""
    }
  },
  activated() {
    this.currentIndex = "";
  }
}
</script>

<style scoped>
  .active{
    color: blue;
  }
  .list-item{
    width: 100%;
    height: 310px;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 5px; 
    overflow: hidden;
  }
  .box{
    display: flex;
    margin: 15px;
    padding-bottom: 10px;
    justify-content: space-between;
    overflow: hidden;
  }
  .box img{
    display: inline-block;
    width: 230px;
    height: 200px;
    cursor: pointer;
    transition: 2s;
    max-width: 100%;
  }
  .box .img{
    width: 230px;
    overflow: hidden;
    
  }
  .enter{
    transform: scale(1.3);
    max-width: 100%;
  }
  .box .text{
    width: 600px;
    height: 200px;
  }
  .box .text .title{
    font-size: 18px;
    cursor: pointer;
  }
  .box .text .tet{
    height: 58px;
    margin: 50px 0;
    color: #aaa;
    font-size: 14px;
    line-height: 20px;
    text-align: center;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .box .text .icon{
    line-height: 20px;
    height: 20px;
    font-size: 12px;
  }
  .box .text .icon span{
    margin: 0 5px;
  }
  .box .text .icon .watch{
    fontsize: 35px;
    color: green;
    background-color: #eee;
    float: right;
    cursor: pointer;
  }
  .box .text .icon img{
    width: 20px;
    height: 20px;
    padding: 0 3px;
    vertical-align: middle;
  }
</style>