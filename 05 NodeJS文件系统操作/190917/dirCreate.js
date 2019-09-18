const fs = require("fs");
const path = require("path");

fs.mkdirSync("hello"); // 新建目录
var list = fs.readdirSync(__dirname); // 读取当前目录下的所有文件
console.log(list);

// fs.rmdirSync(path.join(__dirname, 'hello'));  
// 删除hello目录
// fs.rmdirSync(path.join(__dirname, '/node'));  
//非空！！！ directory not empty

var files = fs.readdirSync(path.join(__dirname, '/node'));
// console.log(files);   [ 'node.txt' ]

fs.unlinkSync(path.join(__dirname, '/node/' + files[0])); // 删除文件
fs.rmdirSync(path.join(__dirname, '/node'));    // 删除目录