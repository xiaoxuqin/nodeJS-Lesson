# node文件系统操作  
#### 1. 创建目录  
```js
// 新建一个名为hello的目录
const fs = require('fs');
fs.mkdirSync('hello');  
fs.readdirSync(__dirname);  // 读取当前目录的下一级的目录和文件
```

#### 2. 删除目录 
```js
// 删除当前目录下一个名为hello的目录
const fs = require('fs');
const path = require('path');
fs.rmdirSync(path.join(__dirname, 'hello'));
/**
 * 只可以删除空目录，删除非空目录会报错：directory not empty
 */
```

#### 3. 新建文件， 文件写入 
```js
// 将filePath下的内容写入到filePath1下面
const fs = require('fs');
var fileContent = fs.readFileSync(filePath);
var statObj = fs.statSync(filePath);
fs.writeFileSync(filePath1, fileContent.toString());  // 写入文件内容
fs.chmodSync(filePath1, statObj.mode);  // 写入文件权限
```

#### 4. 删除文件  
```js
// 删除一个名为node.txt的文件
const fs = require('fs');
const path = require('path');
fs.unlinkSync(path.join(__dirname, '/node/node.txt'));
```

#### 5. 判断文件/目录是否存在
```js
fs.existsSync(filePath)
```

#### 6. 读取文件
###### （1）同步
```js
fs.readFileSync(filePath)
```
###### （2）异步
```js
fs.readFile(filePath, function(err, data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
})
```
代码执行到异步函数，注册一个事件，将具体操作交给操作系统内核完成，  
不影响后续应用程序的执行，具体操作完成后，触发事件，执行回调函数  
###### （3）open,read,close,buffer
```js
var fid = fs.openSync(filePath, "r+");
var buf = Buffer.alloc(30);   // 实例化了一个buf  30字节
var len = fs.statSync(filePath).size;
fs.readSync(fid, buf, 0, len, 0);
console.log(buf.toString());
fs.closeSync(fid);
```

#### 8. fs.statSync()
```js
var statObj = fs.statSync(filePath);
console.log(statObj.isFile());  // 判断当前路径是否为文件
console.log(statObj.isDirectory()); // 判断当前路径是否为文件夹
console.log(statObj); // 返回文件的所有信息
/**
Stats {
  dev: 1258480753,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 281474976747857,
  size: 18,
  blocks: 0,
  atimeMs: 1568812227869.8728,
  mtimeMs: 1568681247398.2366,
  ctimeMs: 1568681247398.2366,
  birthtimeMs: 1568678973875.0625,
  atime: 2019-09-18T13:10:27.870Z,
  mtime: 2019-09-17T00:47:27.398Z,
  ctime: 2019-09-17T00:47:27.398Z,
  birthtime: 2019-09-17T00:09:33.875Z
}
*/
```
