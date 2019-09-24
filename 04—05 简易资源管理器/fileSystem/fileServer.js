const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    var pathName = urlObj.pathname;  // 资源路径 
    switch (pathName) {
        case "/":
            // http://localhost:8081/  
            showIndex(res);
            break;
        case '/1.png':
            // http://localhost:8081/1.png
            showImage(res);
            break;
        /**
         * 网页文件在浏览器解析的过程中，如果需要一些资源，
         * 会再次的向服务器端发起请求。图片、音频、视频、
         * js脚本、css文件
         */
        case '/getfilelist':
            showList(res);
            break;
        case '/delfile':
            delFile(urlObj, res);
            break;
        case '/getfile':
            getFile(urlObj, res);
            break;
        case '/getfile':
            getFile(urlObj, res);
            break;
        case '/getchildfile':
            getChildFile(urlObj, res);
            break;
    }
}).listen(8081);
console.log("server is listening 8081");

function showIndex(res) {
    var indexPath = path.join(__dirname, 'index.html');
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(fileContent);
    res.end();
}
function showImage(res) {
    var imgPath = path.join(__dirname, '1.png');
    var imgContent = fs.readFileSync(imgPath);
    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.write(imgContent);
    res.end();
}

var list = [];
function showList(res) {
    list = [];
    var filePath = path.join(__dirname, 'fileDir');
    var files = fs.readdirSync(filePath);
    // console.log(files);  // [ 'file1.txt', 'file2.txt', '书籍', '电影' ]
    for (var i = 0; i < files.length; i++) {
        var fileObj = {};
        var childPath = path.join(filePath, files[i]);
        var statObj = fs.statSync(childPath);
        // console.log(statObj);
        if (statObj.isFile()) {
            fileObj.fileType = 'file';
        }
        else if (statObj.isDirectory()) {
            fileObj.fileType = 'folder';
        }
        fileObj.fileName = files[i];
        fileObj.fileSize = statObj.size;
        var birthTimer = new Date(statObj.birthtime);
        fileObj.createTime = birthTimer.getFullYear() + '-'
            + (birthTimer.getMonth() + 1) + '-' + birthTimer.getDate() + '  '
            + birthTimer.getHours() + ':' + birthTimer.getMinutes() + ':' + birthTimer.getSeconds();
        list.push(fileObj);
    }
    var listStr = JSON.stringify(list);
    /**
     * console.log(typeof(list));      object
     * console.log(typeof(listStr));   string
     */
    res.writeHead(200, { "Content-Type": 'text/plain' });
    res.write(listStr);
    res.end();
}

function delFile(urlObj, res) {
    // console.log(urlObj);
    var timer = urlObj.query.createtime;
    // console.log(timer);
    for (var i = 0; i < list.length; i++) {
        if (list[i].createTime == timer) {
            deleteRealFile(list[i].fileName);
            /**
             * res.writeHead(200, { "Content-Type": 'text/plain' });
             * res.write(list[i].createTime);
             * res.end();
             */
            res.end("success");
        }
    }
}
function deleteRealFile(filename) {
    var fileName = path.join(__dirname, '/fileDir', filename);
    // console.log(fileName);
    var statObj = fs.statSync(fileName);
    if (statObj.isFile()) {
        fs.unlinkSync(fileName);
    }
    else if (statObj.isDirectory()) {
        delDir(fileName);
    }
}
function delDir(pathName) {
    var files = fs.readdirSync(pathName);
    for (var i = 0; i < files.length; i++) {
        var pathName1 = path.join(pathName, files[i]);
        var statObj = fs.statSync(pathName1);
        if (statObj.isFile()) {
            fs.unlinkSync(pathName1);
        }
        else if (statObj.isDirectory()) {
            delDir(pathName1);
        }
    }
    fs.rmdirSync(pathName);
}

function getFile(urlObj, res) {
    // console.log(urlObj);
    var createTime = urlObj.query.createtime;
    for (var i = 0; i < list.length; i++) {
        if (list[i].createTime == createTime) {
            showContent(list[i].fileName, res);
        }
    }
}
function showContent(fileName, res) {
    // console.log(fileName);
    var filePath = path.join(__dirname, 'fileDir', fileName);
    fs.readFile(filePath, function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.end(data);
        }
    })
}

function getChildFile(urlObj, res) {
    var createTime = urlObj.query.createtime;
    for (var i = 0; i < list.length; i++) {
        if (list[i].createTime == createTime) {
            showChildList(list[i].fileName, res);
        }
    }
}
function showChildList(fileName, res) {
    var filePath = path.join(__dirname, 'fileDir', fileName);
    var files = fs.readdirSync(filePath);
    var childList = [];
    for (var i = 0; i < files.length; i++) {
        var fileObj = {};
        var statObj = fs.statSync(path.join(filePath, files[i]));
        if (statObj.isFile()) {
            fileObj.fileType = 'file';
        }
        else if (statObj.isDirectory()) {
            fileObj.fileType = 'folder';
        }
        fileObj.fileName = files[i];
        fileObj.fileSize = statObj.size;
        var birthTimer = new Date(statObj.birthtime);
        fileObj.createTime = birthTimer.getFullYear() + '-'
            + (birthTimer.getMonth() + 1) + '-' + birthTimer.getDate() + '  '
            + birthTimer.getHours() + ':' + birthTimer.getMinutes() + ':' + birthTimer.getSeconds();
        childList.push(fileObj);
    }
    var childStr = JSON.stringify(childList);
    res.end(childStr);
}