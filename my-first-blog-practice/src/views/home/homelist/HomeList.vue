<template>
  <div class= "home-list">
    <list-item v-for= "(item,index) in box"
    :detail-data="item" :key= "item.listItem" 
    :index= "index">
      
    </list-item>
    
    
  </div>
 
</template>

<script>
import ListItem from "@/components/content/listitem/ListItem"
export default {
  name: 'homelist',
  components: {
    ListItem
  },
  data() {
    return {
      box: [
        {
          listItem: "最新-笔记",
          listItemTit: "Html笔记",
          imgSrc: require("@/assets/img/items/05.jpg"),
          iconNum: ["245","2020.01.29","06","05","03"],
          id: 30 ,
          text: `前段:与用户交流,提供页面特效,收集信息html与css:请求所使用的工具form表单后端(服务器):逻辑上的处理返回数据form(表单)工作原理:页面包含表单页面->输入数据后提交表单->浏览器把我们在表单输入的数据进行并且发送给服务器->接受数据,进行逻辑处理,返回数据form:双标签块级存储表单元素的一个区域属性action:="表单提交地址"---属性内部是一个链接method="提交方法"---两个(get默认值post传送)表单组件input---输入元素---行内label标签--通常与input标签搭配for=""--inputid名称inputtpye="输入信息内容"---*text(文本)password(密码输入框,隐藏)email*button*reset---重置按钮search--搜索radio单选按钮(如男或女)前提多个name值相同时checkBox多选按钮checked默认被选滑块<inputtype="CheckBox">滑块<inputtype="CheckBox">滑块<inputtype="checked">submit(提交)默认value="提交"numberstep(步长默认1)maxmin限制大小name="表单名字"---username(range滑块)time--时间点date--日期时间datetime(需手动输入)*datetime-local----精确到分monthweek--周colorvalue="表单中的内容"如,提交....file---选择文件->点击可传入文件multipleplacehold(占位符)="请输入用户名"即打字前出现.打字时消失select(下拉框)行内标签双标签name=""id=""option--双标签value如:<optionvalue="你好"selected>你好</option><optionvalue="你好">你好</option><optionvalue="你好">你好</option>fieldset:方便用于创建具有相同的小部件组的方式经常与legend(信息收集)一起用----会在相关表单周围绘制边框textarea用户文本框区域--双标签cols=“”---宽rows=“”--高提交方式:get:不安全---会在地址栏显示用户信息username=""&password=""会被显示出来post:相对安全些,但也能通过安全台查看,还需加密method="post"与表单常用的伪类:focus----点击获取焦点信息如input:focus{background-color:yellow;}`   
        },
        {
          listItem: "最新-随记",
          listItemTit: "日常随笔之违和的生活",
          imgSrc: require("@/assets/img/items/02.jpg"),
          iconNum: ["248","2020.01.29","06","05","03"],
          id: 50,
          text: `我活在世上，无非想要明白些道理，遇见些有趣的事。倘能如我愿，我的一生就算成功。
          当你非常难以做一件事的时候，先会接收它真如遇到一件做梦都想做的事却不敢做时，先第一步以最直接最简单的打招呼开始。以最严格的标准来要求自己，以承受高成本获低利润的代价，来获得自我的提升，只需个动力。
一切发生的事都当做是它们自己找上门的，我不过是被连累的。
`    
        },
        {
          listItem: "最新-项目",imgSrc: require("@/assets/img/items/03.jpg"),
          listItemTit: "项目标题",
          iconNum: ["233","2020.01.29","55","25","13"],
          id: 12,
          text: "文字内容几个月没有发过文章了，最近确实挺忙！！这几个月一直在搞公司的一个小程序项目，所以一直没抽出时间，后面我会把遇到的问题及踩到的坑也会提出来，今天咱们不说踩过的坑，说一个比较常见及常用的功能，就是内容的展开和收起。可能大家就开始想了，这么简单一功能还用看别人教吗？咱们先废话不多说，先来看看这个是怎样的一个功能～针对这个功能，产品的需求如下由于我们项目是教育类产品所以这里这个功能会用在发动态这里，就像微信朋友圈那样，我们叫班级圈。用户发班级圈时，可以发布文字内容、图片、视频，文字可以输入500个字。这样的话，如果列表一次展示全部文字，如果用户真有500个文字就基本一条动态占用了整屏高度，对于用户体验来说，用户一眼看到的东西太少了，所以产品就提出了需要折叠文字需求，并说明文字需要满6行的时候折叠，并显示全文按钮，当用户点击全文按钮时要展开所有内容，当点击收起按钮又变回折叠状态。说完需求，现在来说说问题首先，开发过小程序的朋友都知道，小程序内部是无法操作dom的，也就是说根本没有dom这个东西。"  
        },
        {
          listItem: "当前位置: 所遇问题",
          listItemTit: "问题之服务器域名解析后访问不了",
          imgSrc: require("@/assets/img/items/04.jpg"),
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
      ]
      
    }
  }
}
</script>

<style scoped>
  .home-list{
    
    width: 69vw;
    margin-top: 20px;
    height: 1300px;
    overflow: hidden;
  }
  
</style>