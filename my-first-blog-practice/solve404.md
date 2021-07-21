****************************
server {
        listen       8888;#默认端口是80，如果端口没被占用可以不用修改
        server_name  localhost;
        root        E:/vue/my_project/dist;#vue项目的打包后的dist
        location / {
            try_files $uri $uri/ @router;#需要指向下面的@router否则会出现vue的路由在nginx中刷新出现404
            index  index.html index.htm;
        }
        #对应上面的@router，主要原因是路由的路径资源并不是一个真实的路径，所以无法找到具体的文件
        #因此需要rewrite到index.html中，然后交给路由在处理请求资源
        location @router {
            rewrite ^.*$ /index.html last;
        }
        #.......其他部分省略
  }
版权声明：本文为CSDN博主「tony_xf」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/u011025083/article/details/80352301
————————————————

*****************************

方案三

也是调整nginx配置文件，红色字体为添加的内容，即可实现刷新页面。

        location / {
            root   D:\发布网站\project;
            #需要指向下面的@router否则会出现vue的路由在nginx中刷新出现404
            try_files $uri $uri/ @router;
            index  index.html index.htm;
        }
        #对应上面的@router，主要原因是路由的路径资源并不是一个真实的路径，所以无法找到具体的文件
        #因此需要rewrite到index.html中，然后交给路由在处理请求资源
        location @router {
            rewrite ^.*$ /index.html last;
        }

参考链接：https://segmentfault.com/a/1190000016653688

转载于:https://my.oschina.net/uwith/blog/3054629

****************************************
let router = new VueRouter({
    routes:[
       {path:'/',redirect:{name:"index"}},  // 重定向到主页
       {name:'index',path:'/index',component:Index},
       {path:'/login',component:Login},
       {path:'/register',component:Register},
       {path:'*',component:Index},//全不匹配的情况下，返回到主页，路由按顺序从上到下，依次匹配。最后一个*能匹配全部，
       
    ]
});
转载于:https://www.cnblogs.com/z-y-zone/p/9531514.html


