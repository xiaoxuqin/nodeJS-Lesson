// 实验2 程序①
const http = require("http");
const path = require("path");   // 通用的写法
const fs = require("fs");   // 文件系统，读文件内容

http.createServer(function(req, res) {
    var htmlPath = path.join(__dirname, "/view/view.html");
    console.log(htmlPath);
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent = htmlContent.toString("utf8"); //转化成字符串

    // 向客户端响应
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
}).listen(8080);
// http.createServer 返回的是对象
console.log("server is listening 8080");
