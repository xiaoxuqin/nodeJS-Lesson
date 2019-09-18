const fs = require("fs");
const path = require("path");
var filePath = path.join(__dirname, "/file.txt");
var filePath1 = path.join(__dirname, "/fileCopy.txt");
var fileContent = fs.readFileSync(filePath);
var statObj = fs.statSync(filePath);
// fs.statSync(path)  返回一个数组对象

// 写入文件内容
fs.writeFileSync(filePath1, fileContent.toString());
// 写入文件权限， 改写文件的读写权限  fs.chmodSync(path, mode)
fs.chmodSync(filePath1, statObj.mode);