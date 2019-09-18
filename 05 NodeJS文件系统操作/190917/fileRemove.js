const fs = require("fs");
const path = require("path");

var filePath = path.join(__dirname, "/fileRemove.txt");
// 删除文件 unlinkSync(文件路径)
fs.unlinkSync(filePath);