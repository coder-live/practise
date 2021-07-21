//定义 初始变量 arr,num1,num2,sym
function compute(arr) {
  //计算顺序 根据符号
  let first = arr.filter( (item) => item === "*" || item === "/" );
  let second = arr.filter( (item) => item === "+" || item === "-" );
  while(arr.length != 1) {
    //console.log(first);
    //先提出 符号,再根据符号在数组序号,确认符号前后的num
    let sym = first.shift() || second.shift();
    //console.log(sym)
    let index = arr.indexOf(sym);
    let first_num = String(arr[index-1]);
    let second_num = String(arr[index+1]);

    let base = getBase(first_num,second_num);
    let res = precision(first_num*1,second_num*1,sym,base);
    //console.log(res.toFixed(2))
    arr.splice(index-1,3,res);
    console.log(arr)
  };
  return arr.join();
};//获取精度b
function getBase(a,b) {
  //判断是否整数
  let aIsint= Number.isInteger(a*1);
  let bIsint= Number.isInteger(b*1);

  let aLength= a.length - 1;
  let bLength= b.length - 1;
  let apoiIndex= a.indexOf(".");
  let bpoiIndex= b.indexOf(".");
  //console.log(aLength-apoiIndex);
  //小数点后的位数
  let aLen= aLength - apoiIndex;
  //let aLen= aLength - (aIsint ? aLength : apoiIndex);
  let bLen= bLength - (bIsint ? bLength : bpoiIndex);
  console.log(10**aLen,aLen,bLen);
  return (aLen > bLen) ? 10**aLen : 10**bLen;
};
//定义计算函数,处理精度  需要参数: x y s b  两个数 x,y,符号s,精度b
function precision(x,y,s,b) {
  switch (s) {
    case "*":
      return ( (x*b).toFixed(0) * (y*b).toFixed(0) )/ b**2;
    break;
    case "/":
      return (x*b).toFixed(0) / (y*b).toFixed(0);
    break;
    case "+":
      // console.log(typeof((x*b).toFixed(0)),typeof(x));
      // console.log((x*b).toFixed(0),(y*b).toFixed(0));
      return ( (x*b).toFixed(0)*1 + (y*b).toFixed(0)*1 )/ b;
    break;
    case "-":
      return ( (x*b).toFixed(0) - (y*b).toFixed(0) )/ b;
    break;
  };
};

