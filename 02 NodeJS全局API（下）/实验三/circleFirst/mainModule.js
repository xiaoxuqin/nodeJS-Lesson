// 实验三 程序⑤
/*
const circleModule = require("./circleModule.js");
console.log(circleModule.circleFun(1));  
*/

// class
var circleModule = require("./circleModule.js");
var r = process.argv[2];
var circleObj = circleModule.circleFun(r);
console.log("圆的半径：" + r);
console.log("圆的周长：" + circleObj.circumference());
console.log("圆的面积：" + circleObj.area());