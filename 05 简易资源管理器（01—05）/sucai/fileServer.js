const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

var server = http.createServer(function(req, res){

    var urlObj = url.parse(req.url);
    var urlPathName = urlObj.pathname;
    console.log("urlPathName:  " + urlPathName);

    if(urlPathName == "/1.png"){
        fs.readFile("./1.png", function(err, data){
            console.log(data);
            if(err){
                console.log(err);
            }
            else{
                res.writeHead(200,{"Content-Type":"image/png"});
                res.write(data);
                res.end();
            }
            
        }) 
    }

    var htmlPath = path.join(__dirname, "./index.html");
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent = htmlContent.toString("utf8");

    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end(); 



}).listen(8081);
console.log("server is listening 8081");