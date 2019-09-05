/**
 * nodeServer.js
 */

const http  =require("http"); //引入http的模块
/** 实例化server */
var server = new http.Server(); //可以把http看做一个对象
/** sever监听客户端的请求 */
server.on("request", function(req, res) {
    res.end("hello server"); 
})
/** server监听端口 */
server.listen(8082);
console.log("server is listening 8082");
