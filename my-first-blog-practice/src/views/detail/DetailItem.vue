<template>
  <div class= "detail-item">
    <div class="head">
      <div class="title">{{title}}</div>
      <icon :icon-num= "iconNum"><span slot= "left">
        <img src="~assets/img/icon/text/author.svg" alt=""> 萧逸
      </span></icon>
    </div>
    <div class="content">{{text}}</div>
    <div class="share">
      <div class="click" :class= "{isAgr: isAgr}" @click= "agrClick">赞 {{clickNum}}</div>
      <icon :is-click= "true" :is-huge= "true" :choose-icon= "'share'">
        <span slot= "left" class= "share-to">分享到 :</span>
      </icon>
    </div>
    <div class="send">
      <div>发表评论(共{{commentNum}}条评论)</div>
      <div class="text" contenteditable= "true" 
      @focus= "textClick" @input= "edit" @blur= "onblur">请输入评论内容</div>
      <icon :is-click= "true" :choose-icon= "'sendText'">
        <span class= "issue">发布</span>
      </icon>
      <div class="comments">id:{{id}}我是评论</div>
    </div>
  </div>

</template>

<script>
//通过id 发送网络请求 单个item的内容
import Icon from "@/components/content/icon/Icon";
export default {
  name: 'detailItem',
  components: {
    Icon
  },
  data() {
    return {
      id: "",
      isAgr: false,
      //clickNum 暂时没定义
      clickNum: "0",
      commentNum: "0"
    }
  },
  methods: {
    //文本点击
    textClick()  {
      let text = document.getElementsByClassName("text")[0];
      //console.log(text.innerText);
      text.innerText = "";
    },
    agrClick() {
      if(this.isAgr) {
        alert("亲,你已经点过赞了,不能重复点哦!")
      }else{
        this.clickNum ++;
        this.isAgr = true;
      }

    },
    edit() {
      let text = document.getElementsByClassName("text")[0];
      text.style.color = "#222";

    },
    onblur() {
      let text = document.getElementsByClassName("text")[0];
      if( !text.innerText ) {
        text.innerText = "请输入评论内容";
        text.style.color = "#eee";
      }
    }
  },
  computed: {
    title() {
      return this.$route.query.name;
    },
    iconNum() {
      //console.log(this.$route.query)
      return this.$route.query.iconNum
    },
  },
  created() {
    this.text = this.$route.query.text
  }
}

</script>

<style scoped>
  .detail-item{
    width: 69vw;
    text-align: center;
    
  }
  .detail-item .head{
    background: #fff;
    padding: 20px;
  }
  .detail-item .head .title{
    font-size: 20px;
    margin-bottom: 15px;
  }
  .detail-item .content{
    margin-top: 1px;
    padding: 20px;
    background: #fff;
    line-height: 22px;
  }
  .detail-item .share{
    margin-top: 2px;
    padding: 20px;
    background: #fff;
    font-size: 18px;
  }
  .detail-item .share .click{
    width: 80px;
    border: 1px solid #777;
    padding: 8px;
    margin: 20px auto;
    border-radius: 110px;
    color: #777;
    cursor: pointer;
  }
  .detail-item .share .share-to{
    font-size: 16px;
    vertical-align: middle;
  }
  .detail-item .share .isAgr{
    border: 1px solid skyblue;
    color: skyblue;
  }
  .detail-item .send{
    margin-top: 2px;
    padding: 20px;
    background: #fff;
    text-align: left;
  }
  .detail-item .send .text{
    width: 98%;
    height: 200px;
    margin: 20px 0;
    padding: 5px;
    color: #eee;
    border: 1px solid #eee;
    
  }
  .detail-item .send .issue{
    float: right;
    padding: 5px 30px;
    border: 1px solid #777;
    background-color: #eee;
    font-size: 18px;
    color: #555;
    cursor: pointer;
  }
  .detail-item .send .issue:hover{
    background-color: skyblue;
    color: #fff;
  }
  .detail-item .send .comments{
    margin-top: 40px;
    border-top: 1px solid #eee;
    padding: 20px;
    background: #fff;
  }
</style>