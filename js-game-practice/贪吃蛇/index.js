const sw = 30,
      sh = 30,
      tr = 20,//行数
      td = 15;
let snake,food,game;
//方块对象 用于创在蛇,以及食物
function Square(x,y,classNa) {
  //定义属性 x,y定位值,class为相对名称用于elecontent
  this.x= x*sw;
  this.y= y*sh;
  this.class= classNa;
  this.content= document.createElement('div');
  this.content.className= this.class;
  this.parent= document.getElementById('wrap');
};
Square.prototype.creat= function () {
  //console.log(this.content,this.x,this.y);
  // this.content.style.left= this.x + "px";
  // this.content.style.top= this.y + "px";
  this.content.style.cssText= `left: ${this.x}px;top: ${this.y}px`;
  this.parent.appendChild(this.content);
};
Square.prototype.remove= function () {
  this.parent.removeChild(this.content);
};
//蛇对象
function Snake() {
  this.head= null;
  this.body= null;
  this.tail= null;
  this.pos= [];
  this.directionNum= {
    left: {x: -1,y: 0,rotate: 180,dir: "left"},
    top: {x: 0,y: -1,rotate: -90,dir: "top"},
    right: {x: 1,y: 0,rotate: 0,dir: "right"},
    bottom: {x: 0,y: 1,rotate: 90,dir: "bottom"},
  }
};
Snake.prototype.init= function() {
  let snakeHead= new Square(2,0,"head");
  this.head= snakeHead
  snakeHead.creat();
  this.pos.push([2,0]);

  let snakeBody= new Square(1,0,"body");
  this.body= snakeBody
  snakeBody.creat();
  this.pos.push([1,0]);

  let snakeTail= new Square(0,0,"tail");
  this.tail= snakeTail
  snakeTail.creat();
  this.pos.push([0,0]);

  //将蛇化为整体
  snakeHead.front= null;
  snakeHead.next= snakeBody;
  snakeBody.front= snakeHead;
  snakeBody.next= snakeTail;
  snakeTail.front= snakeBody;
  snakeTail.next= null;

  this.direction= this.directionNum.right;
};
//蛇的下一步
Snake.prototype.PutNextPos= function() {
  //蛇头下一位置
  this.nextPos= [
    this.head.x/sw + this.direction.x,
    this.head.y/sh + this.direction.y
  ];
  //设置变量 是否撞到自身 
  let isSelf = false;
  this.pos.forEach((value)=>{
    if (value[0]===this.nextPos[0] && value[1]===this.nextPos[1]) {
      isSelf = true;
    };
  });
  //撞到自身
  if (isSelf) {
    this.action.die.call(this);
    return;
  }
  //撞到墙
  if (this.nextPos[0]<0 || this.nextPos[0]>tr-1 
  || this.nextPos[1]<0 || this.nextPos[1]>td-1) {
    this.action.die.call(this);
    return;
  }
  //console.log(food);
  //吃
  this.action.eat.call(this);
  //move
  this.action.move.call(this);
  
};
Snake.prototype.action= {
  move(isEat) {
    //console.log(this.head.x/sw,this.head.y/sh)
    let newBody = new Square(this.head.x/sw,this.head.y/sh,"body");
    //更新蛇组件关系
    newBody.front= null;
    newBody.next= this.head.next;
    this.head.next.front= newBody;
    newBody.creat();
    
    this.head.remove();

    let newArr= [this.head.x/sw + this.direction.x,
      this.head.y/sh + this.direction.y]
    let newHead= new Square(this.head.x/sw + this.direction.x,
      this.head.y/sh + this.direction.y,"head");
      
      newHead.front= null;
      newHead.next= newBody;
      newBody.front= newHead;

      newHead.content.style.cssText= `transform: rotate(${this.direction.rotate}deg) 
      translatey(${sw}px);
      transform-origin: ${this.direction.dir};`
      
      console.log(newHead.content.style)
      newHead.creat();
    //记录新的头
    this.pos.unshift(newArr);
    this.head= newHead;
    if (!isEat) {
      console.log(1)
      this.tail.remove();
      this.tail= this.tail.front;
      //console.log(this.tail)
      this.pos.pop();
    }
  },
  eat() {
    //console.log(this.nextPos,food);
    if (this.nextPos[0]===food.x/sw && this.nextPos[1]===food.y/sh) {
      creatFood();
      game.score +=50;
      this.action.move.call(this,true);
      return;
    };
  },
  die() {
    game.over();
  }
};
//new 蛇实例
snake = new Snake();
function creatFood(){
  let x,y;
  let isSelf= true; 
  while (isSelf) {
    x= Math.floor(Math.random()*tr);
    y= Math.floor(Math.random()*td);
    snake.pos.forEach((value)=>{
      if (x!=value[0] && y!=value[1]) {
        isSelf= false;
      }
    });
  };
  //console.log(snake.pos)
  //console.log(x,y);
  food = new Square(x,y,"food");
  let foodEle = document.getElementsByClassName("food")[0];
  if(foodEle) {
    foodEle.style.cssText= `left: ${x*sw}px;top: ${y*sh}px`;
  }else{
    food.creat();
  }
};
//game 对象
function Game() {
  this.time= null;
  this.score= 0;
};
Game.prototype.init= function() {
  snake.init();
  creatFood();
  document.onkeydown= function(ev) {
    switch (ev.keyCode) {
      case 37:
        (snake.direction!=snake.directionNum.right) && (snake.direction = snake.directionNum.left);
        break;
      case 38:
        (snake.direction!=snake.directionNum.bottom) && (snake.direction = snake.directionNum.top);
        break;
      case 39:
        (snake.direction!=snake.directionNum.left) && (snake.direction = snake.directionNum.right);
        break;
      case 40:
        (snake.direction!=snake.directionNum.top) && (snake.direction = snake.directionNum.bottom);
        break;
    };
  };
  this.start();
  // snake.PutNextPos();
  // snake.PutNextPos();
  // snake.PutNextPos();
};
Game.prototype.start= function() {
  this.time= setInterval(()=>{
    snake.PutNextPos();
  },200);
};
Game.prototype.over= function() {
  clearInterval(this.time);
  alert("你的得分是: "+this.score);

  wrap.innerHTML= "";
  snake= new Snake;
  game= new Game;
  let startBtn= document.getElementsByClassName("startBtn")[0];
  startBtn.style.display= "block";
}
game= new Game();
let startBtn= document.getElementsByClassName("startBtn")[0];
let pauseBtn= document.getElementsByClassName("pauseBtn")[0];
startBtn.onclick=function() {
  game.init();
  startBtn.style.display= "none";

};
wrap.onclick=function() {
  if(startBtn.style.display==="none") {
    pauseBtn.style.display= "block";
    clearInterval(game.time); 
  };
};
pauseBtn.onclick=function() {
  game.start();
  pauseBtn.style.display= "none";
};
