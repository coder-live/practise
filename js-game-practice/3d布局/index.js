//alert(1);
(function () {
  let length= 5*5*5;
  let trZ= -2100;

  let aul= document.getElementById("list");
  let ali= aul.children;
  //console.log(aul);
  for (let i = 0; i < length; i++) {
    let oli= document.createElement("li");
    oli.x= i%5;
    oli.y= parseInt(i%25/5);
    oli.z= parseInt(i/25);
    aul.appendChild(oli);
    oli.innerHTML= i;
  };
  //变换图形函数
  (function() {
    
    //定义初始旋转角度值
    let rotX= 0;
    let rotY= 0;
    //拖拽
    document.ondrag= function() {
      return false;
    };
    //选中
    document.onselectstart= function() {
      return false;
    };
    //拖拽事件
    //鼠标按下
    document.onmousedown= function( ev ) {
      // console.log("1");
      let x= ev.clientX;
      let y= ev.clientY;
      //此值定义 用于记录变量的存放,如果不设置存放.会导致下次点击时位置 初始化
      let rx= rotX;
      let ry= rotY;
      document.onmousemove= function( ev ) {
        let x_= ev.clientX- x;
        let y_= ev.clientY- y;
        rx = rotX + x_*0.2;
        ry = rotY - y_*0.2;
        //console.log(x_,y_);
        aul.style.transform= `translateZ(${trZ}px) rotateX(${ry}deg) 
        rotateY(${rx}deg)`
      };
      document.onmouseup= function() {
        document.onmousemove= null;
        //console.log("抬起");
        rotX= rx;
        rotY= ry;
    
      };
    };
    //鼠标滚轮事件()
    (function( callback ) {
      document.onmousewheel= function( ev ) {
        let delta= ev.wheelDelta/180;
        // console.log(delta);
        callback.call( this,delta,ev )
      }
    })( function (d) {
      trZ += 200*d;
      aul.style.transform= `translateZ(${trZ}px) rotateX(${rotY}deg) 
      rotateY(${rotX}deg)`;
    } );
  })();
  
  //方形布局
  Grid();
  function Grid() {
    let disX= 300;
    let disY= 200;
    let disZ= 600;
    for (let i = 0; i < length; i++) {
      oli= ali[i];
      let x= disX*(oli.x-2);
      let y= disY*(oli.y-2);
      let z= disZ*(oli.z-2);
      //console.log(oli);
      oli.style.transform= `translate3D(${x}px,${y}px,${z}px)`;
      
    }
  };
  //螺旋状
  //Helix();
  function Helix() {
    let h= 4;
    let w= length / h;
    let deg= 360 / w;
    let mid= (length - 1) / 2;
    for (let i = 0; i < length; i++) {
      ali[i].style.transform= `rotateY(${deg*i}deg) translateZ(900px) 
      translateY(${(i-mid)*7}px)`;
    };
  };

  //元素周期表状
  //Table();
  function Table() {
    let disX= 180,disY= 200,midX= (18-1)/2,midY= parseInt(length/18) / 2+1;
    let x,y;
    let arr= [
      {x:0,y:0},
      {x:17,y:0},
      {x:0,y:1},
      {x:1,y:1},
      {x:12,y:1},
      {x:13,y:1},
      {x:14,y:1},
      {x:15,y:1},
      {x:16,y:1},
      {x:17,y:1},
      {x:0,y:2},
      {x:1,y:2},
      {x:12,y:2},
      {x:13,y:2},
      {x:14,y:2},
      {x:15,y:2},
      {x:16,y:2},
      {x:17,y:2}
    ];
    for (let i = 0; i < length; i++) {
      if( i < 18 ) {
        x= arr[i].x;
        y= arr[i].y;
      }else{
        x= i % 18;
        y= parseInt(i/18) + 2;
      }
      //console.log(x,y)
      ali[i].style.transform= `translate3D( ${(x-midX)*disX}px,
      ${(y-midY)*disY}px,0px )`;
    }
  };
  //球状

  //计算累计值 125
  // console.log(arr.reduce((pre,n)=>{
  //   //console.log(pre);
  //   return (n+pre);
  // }));
  //console.log(arr);
  //Ball();
  function Ball() {
    //每一横截面上的个数
    let arr= [1,3,7,9,12,15,17,16,13,11,9,7,4,1];
    let len= arr.length;
    for (let i = 0; i < length; i++) {
      let sum= 0,rotX,rotY;
      for (let j = 0; j < len; j++) {
        sum += arr[j];
        //console.log(i,sum)
        if ( i<sum ) {
          rotX= j;
          rotY= arr[j] - sum + i;
          break;
        };
      };
      let degX= 180/(len);
      let degY= 360/arr[rotX];
      ali[i].style.transform= `rotateX( ${-rotX*degX+90}deg ) 
      rotateY( ${(rotY)*degY}deg ) translateZ( 500px )`;
    }
  };

  //点击事件
  let btnLi= document.querySelectorAll("ul.btn li");
  let funArr= [Grid,Helix,Table,Ball];
  // console.log(btnLi);
  for (let i = 0; i < funArr.length; i++) {
    btnLi[i].onclick= function() {
      funArr[i]();
    };
  };
})();