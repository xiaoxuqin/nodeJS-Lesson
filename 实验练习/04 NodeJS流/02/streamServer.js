const http = require("http");
const fs = require("fs");
const path = require("path");

var server = http.createServer(function(req, res){
    var readPath = path.join(__dirname, "/data.txt");
    var readStream = fs.createReadStream(readPath);
    readStream.pipe(res);
}).listen(8081);
console.log("server is listening 8081");