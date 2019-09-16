const http = require("http");
/**
 * 使用require指令来载入http模块，并将其实例化赋值给变量http
 */
var server = http.createServer(function(req, res) /*请求，响应*/ {   
//回调函数
/**
 * 使用http.createServer()方法创建服务器，并绑定服务监听端口，
 * 函数中可以使用request/response参数来接受和响应数据
 * res：向请求的客户端发送响应内容，response.end()前，response.write()可以被执行多次
 */
    // res.write("hello world");
    res.writeHead(200,{"Content-Type":"text/plain"});//该格式不可以识别HTML结构
    res.writeHead(200,{"Content-Type":"text/html"});//该格式可以识别HTML结构
    res.write("<h1>helloWorld -- H1</h1>");
    res.end(); // 响应结束
});
server.listen(8088);
console.log("server is listening 8088");


// 打开方式
/**
1. shift + 鼠标右键 点击，打开power shell窗口
    编译node.js文件 node + 文件名    => node helloWorld.js
    修改后重新执行 ctrl + C 
    浏览器 http://localhost:8088 (刷新才可以，必须编译才能执行)
    WebStorm
 */
/**
 * 2. ctrl + ~ 终端  ==>  ctrl + shift + / 切换当前目录  
 * ==> node server.js
*/
// 注：两个终端不可以同时进行
