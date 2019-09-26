const http = require("http");
const fs = require("fs");
const url = require("url");

/*
http.createServer(function(req, res){

    var urlObj = url.parse(req.url);
    var urlPathName = urlObj.pathname;
    console.log("urlPathName:  " + urlPathName);

    fs.readFile("./1.png", function(err, data){
        // console.log(data);
        res.writeHead(200,{"Content-Type":"image/png"});
        res.write(data);
        res.end();
    })  
}).listen(8081);
console.log("server is listening 8081");
*/

http.createServer(function(req, res){
    
    var urlObj = url.parse(req.url);
    var urlPathName = urlObj.pathname;
    if(urlPathName == "/"){
        var fileContent = fs.readFileSync("indexa.html");
        res.writeHead(200,{"Content-Type":"test/html"});
        res.write(fileContent);
        res.end();
    }
    else if(urlPathName == "/getdata"){
        var list = [{"username":"zhangsan", "age": 20}];
        var str = JSON.stringify(list);
        res.end(str);
    }


    
}).listen(8081);
console.log("server is listening 8081");