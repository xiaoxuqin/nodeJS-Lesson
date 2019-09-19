const fs = require("fs");
const path = require("path");

console.log("请输入要创建的文件夹：");
process.stdin.on("data", function(data){
    var cmd = data.toString();
    var cmdArr = cmd.split(" ");
    fs.mkdirSync(cmdArr[1].slice(0, -2));
    console.log("文件目录创建成功！");
})

console.log("请输入要创建的文件：");
process.stdin.on("data", function(data){
    var cmd = data.toString();
    var cmdArr = cmd.split(" ");
    fs.writFileSync(cmdArr[1].slice(0, -2), "hello node!");
    console.log("文件创建成功！");
})

console.log("请输入要删除的文件：");
process.stdin.on("data", function(data){
    var cmd = data.toString();
    var cmdArr = cmd.split(" ");
    fs.unlinkSync(cmdArr[1].slice(0, -2));
    console.log("文件删除成功！");
})