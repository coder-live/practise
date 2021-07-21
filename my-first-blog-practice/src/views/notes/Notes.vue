<template>
  <div id= "notes">
    <div class= "notes-list">
      <list-item v-for= "(item,index) in noteData" 
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
  name: 'notes',
  components: {
    HomeFooter,
    HomeAside,
    ListItem,
  },
  data() {
    return {
      noteData: [
        {
          listItem: "当前位置: 笔记",
          listItemTit: "Html笔记",
          imgSrc: require("@/assets/img/items/04.jpg"),
          iconNum: ["245","2020.01.29","06","05","03"],
          id: 30 ,
          text: `前段:与用户交流,提供页面特效,收集信息html与css:请求所使用的工具form表单后端(服务器):逻辑上的处理返回数据form(表单)工作原理:页面包含表单页面->输入数据后提交表单->浏览器把我们在表单输入的数据进行并且发送给服务器->接受数据,进行逻辑处理,返回数据form:双标签块级存储表单元素的一个区域属性action:="表单提交地址"---属性内部是一个链接method="提交方法"---两个(get默认值post传送)表单组件input---输入元素---行内label标签--通常与input标签搭配for=""--inputid名称inputtpye="输入信息内容"---*text(文本)password(密码输入框,隐藏)email*button*reset---重置按钮search--搜索radio单选按钮(如男或女)前提多个name值相同时checkBox多选按钮checked默认被选滑块<inputtype="CheckBox">滑块<inputtype="CheckBox">滑块<inputtype="checked">submit(提交)默认value="提交"numberstep(步长默认1)maxmin限制大小name="表单名字"---username(range滑块)time--时间点date--日期时间datetime(需手动输入)*datetime-local----精确到分monthweek--周colorvalue="表单中的内容"如,提交....file---选择文件->点击可传入文件multipleplacehold(占位符)="请输入用户名"即打字前出现.打字时消失select(下拉框)行内标签双标签name=""id=""option--双标签value如:<optionvalue="你好"selected>你好</option><optionvalue="你好">你好</option><optionvalue="你好">你好</option>fieldset:方便用于创建具有相同的小部件组的方式经常与legend(信息收集)一起用----会在相关表单周围绘制边框textarea用户文本框区域--双标签cols=“”---宽rows=“”--高提交方式:get:不安全---会在地址栏显示用户信息username=""&password=""会被显示出来post:相对安全些,但也能通过安全台查看,还需加密method="post"与表单常用的伪类:focus----点击获取焦点信息如input:focus{background-color:yellow;}`   
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
  #notes{
    position: relative;
    height: 1750px;
    margin-top: 59px;
    padding: 30px;
    background-color: #b3b3b3;
  }
  .notes-list{
    width: 69vw;
    overflow: hidden;
  }

  
</style>