const http = require('http');
const url  =require('url');

http.createServer(function(req, res){
    /**
     * 哪些操作发起的是GET请求
     * 1. 点击超链接、
     * 2. 地址栏通过网址请求、
     * 3. ajax发起GET请求
     * 接收get请求的参数：
     * req.url(http.IncomingMessage.url)
     * 提取url上的有效数据，例如资源路径、参数
     * 可以借助于url模块（原生模块），url.parse(req.url, true);
     */
    // req.url  端口以后的内容 http://localhost:8081    /list?number=2
    // console.log(req.url);

    var urlObj = url.parse(req.url,true);  // 变成一个对象
    console.log(urlObj);

}).listen(8081);