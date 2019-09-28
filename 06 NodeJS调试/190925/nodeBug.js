/**
 * 1. SyntaxError 语法错误
 */
// va a = 1; // 语法错误
// k264  k574
/**
 * 2. ReferenceError 引用错误
 * 在某一个位置使用未定义的变量
 */
// console.log(a);

// http.createServer(function(req, res){
// }).listen(8081);

/**
 * 3. TypeError 类型错误
 * 特定方法的参数必须是特定类型的变量
 */
// const http = require('http');
// http.createServer(function(req, res){
//     req.write('hello');
// }).listen(8081);

// var username = 'zhangsan';
// username();

// const fs = require('fs');
// fs.readFileSync(true);

/**
 * debugger;关键字, 设置断点
 * node inspect fileServer.js（文件名） 运行启动
 * c 继续执行  s、o
 * watch('变量名')
 * watchers 查看监听的变量
 * unwatch('变量名') 移除监听
 * restart 重启脚本
 */

 /**
  * 
  * node --inspect fileServer.js  启动程序
  * chrome://inspect
  */
