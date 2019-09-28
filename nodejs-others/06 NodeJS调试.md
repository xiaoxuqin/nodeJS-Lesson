# NodeJS调试  
在程序中，错误的类型主要包括三种：语法错误、逻辑错误、运行时错误  

### 错误
#### SyntaxError 语法错误  
`va a = 1;`
#### ReferencrError 引用错误 （在某个位置使用未定义的变量） 
`console.log(a);`  
又例如：  
`http.createServer(function(req, res){}).listen(8081);`  
#### TypeError 类型错误  特定方法的参数必须是特定类型的变量  
```js
// 1
  const http = require('http');
  http.createServer(function(req, res){
      req.write('hello');     // res.write();
  }).listen(8081);

// 2
  var username = 'zhangsan';
  username();
 
// 3
  const fs = require('fs');
  fs.readFileSync(true);
```
### 调试  
#### Node自带调试  
在代码中添加  `debugger;`  标识， 代码执行到该位置时停止  
node inspect fileServer.js（文件名） 运行启动  
c 继续执行  s、o  
watch('变量名')  
watchers 查看监听的变量  
unwatch('变量名') 移除监听  
restart 重启脚本  
#### Chrome 调试  
`npm install node-inspect –g`  全局安装该模块
`node --inspect fileServer.js`  启动程序  
chrome://inspect  
#### 借助vscode调试  

#### 通过uncaughtException事件  
try catch 只能捕获同步代码中的异常。  
给process上的uncaughtException事件注册了回调，服务器就不会异常退出  
uncaughtException，是NodeJS进程中的一个事件，如果进程中发生了一个异常，且异常没有被任何try...catch进行捕获，就会发生这个事件。  
```js
  process.on('uncaughtException', function(err){
      if(err){
          console.log(err);
      }
  })
```
