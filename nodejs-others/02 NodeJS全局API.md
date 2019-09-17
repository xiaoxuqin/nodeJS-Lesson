NodeJS全局API
=
#### 1. __dirname和__filename
__dirname变量：获取当前文件所在目录的完整目录名，表示的是当前执行脚本所在的目录  
__filename变量：获取当前模块文件的带有完整绝对路径的文件名  
#### 2. fs模块、path模块、url模块  
fs模块：用于对系统文件及目录进行读写操作  
path模块：提供处理文件路径的小工具，`path.join()`用于连接、拼接路径，不同系统的路径分割符有所差别，Unix系统是"/"，Windows系统是"\\"  
url模块：用于解析和处理URL字符串  
#### 3. 练习No.1  ： 访问8080端口，显示.html和.js文件效果  
- 引入http原生模块 `require()`  
  - http模块  
  - fs模块  
  - url模块  
  - path模块  
    - path.join()用法：用于路径拼接文件路径，可以传入多个参数   从倒数第一个以'/'开头的参数开始拼接，之前的参数全部丢弃；以'/'结尾的，以及参数中间有'/'的，斜杠仅作为参数的一部分
- 创建一个服务器，只要有http请求，访问端口，就会执行回调函数里面的内容  
  - 人为发起请求：8080;
  - 执行回调函数，req内有属性req.url（类似于：/s?id=123456...）,req.url是url地址当中，端口以后的所有内容，（需要的是资源路径）;
  - 使用 `url.parse(req.url)` 将req.url转化成了对象;
  - 从对象中提取 `.pathname` 是资源路径， 根据资源路径，可以决定执行那一段代码
- 服务监听一个窗口
- 当客户端的http请求发起时，才会执行回调函数里面的内容

```js
    var urlObj = url.parse(req.url);
    var urlPathName = urlObj.pathname;
    if(urlPathName == "/favicon.ico"){
        res.end();
    }
    else if(urlPathName == "/"){
        var htmlPath = __dirname + "\\view\\index.html";
        var htmlContent = fs.readFileSync(htmlPath);
        htmlContent = htmlContent.toString("utf8");
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write(htmlContent);
        res.end();
    }else if(urlPathName == "/js/index.js"){
        var jsPath = path.join(__dirname, "/js/index.js");
        var jsContent = fs.readFileSync(jsPath);
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write(jsContent);
        res.end();
    }
```

#### 4. 练习NO.2 ： 针对于不同的系统目录拼接的问题  
var sys = process.platform;   当前运行平台

```javascript
  const http = require("http");
  const fs = require("fs");
  var server = http.createServer(function(req, res){
      var sys = process.platform;
      var htmlPath = "";
      switch(sys){
          case "linux":
              htmlPath = __dirname + "/view/index.html";
              break;
          case "win32":
              htmlPath = __dirname + "\\view\\index.html";
              break;
          default:
              console.log("konwn system");
              break;
      }
      var htmlContent = fs.readFileSync(htmlPath);
      htmlContent = htmlContent.toString("utf8");
      console.log(req.url);
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(htmlContent);
      res.end();
  });
  server.listen(8080);
  console.log("server is listening 8080");
```  

#### 5. console  
- console.log()
  - 调试：  
①、检测代码是否执行到console.log的位置，  
②、可以输出一些变量的值，判断程序的执行状态。  
  - 占位符  
    - %d  表示数字  
    - %s  表示字符串
    - %j  表示json数组  
- console.time()   console.timeEnd()  `//test: 4.994ms`
放在代码起始和结束以外，检测代码的执行效率  

#### 6. process  
- `process.argv[]` 表示命令行输入参数的数组，默认有2个数组元素
  - `process.argv[0]`  表示node的可执行文件所在路径
  - `process.argv[1]`  表示当前执行脚本文件所在路径
  - `process.argv[2]`  2以后的表示的是传入的命令行参数
- `process.exit()`  表示当前进程退出
- `process.kill()`  表示杀死当前进程
- `rocess.pid`  表示进程的id值，是进程的唯一标识  
- `process.platform`  返回程序运行的操作系统平台
- `process.cwd()`  当前脚本执行所在的路径（目录）  
- `process.stdin.on(){}`

```js
process.stdin.on("data", function(data){
    console.log(data);
})
```

- ```timerId.unref();   timerId.ref() ``` 阻止（恢复）延时执行或定时执行，回调函数的执行  

#### 7. buffer  
 * fs.readFileSync() 读取文件内容， 得到的是buffer数据
 * http请求和响应过程的数据传输
 * process.stdin 输入流接收的数据，得到的东西是需要toString("utf8")  
 * `Buffer.from();` 得到buffer数据，做操作的时候以字符，也就是两个十六进制位为单位进行的 
 
 ```js
    var imgPath = path.join(__dirname, "/1.png");
    var imgBuffer = fs.readFileSync(imgPath);    // readFileSync结果就是十六进制码
    console.log("imgBuffer  " + imgBuffer);
    var base64Data = imgBuffer.toString("base64");
    var imgSrc = "data:image/png; base64," + base64Data;    
    var htmlStr = "<!DOCTYPE html><head></head>" + 
                        "<body><img src = '" + imgSrc + "'/></body>" + 
                        "</html>";
    res.writeHead(200, {"Content-Type":"text/html"});// 200 : 状态码（前面处理正常）
    res.write(htmlStr);
    res.end();
 ```  
 
 * 初始化一个Buffer使用 `Buffer.alloc(10)    // <Buffer 00 00 00 00 00 00 00 00 00 00>`  
 由此得到： utf-8 ==> buffer ==> base64  
           utf-8 <== buffer <== base64  
 
 #### 8. 模块  
 
* 原生模块：跟随node环境安装就存在的模块，`require()`关键字引入， 得到的是一个结构复杂的对象，可以通过该对象调用响应的方法辅助完成编程  
* 自定义模块：自定义的js文件，通过require来引入，`require(相对路径)`，被引入模块通过`module.exports={}`来对外公布自己的一些方法或属性，主模块可以访问被引用，例如公布的方法和属性  
* 第三方模块：npm(node package manager)包管理器，远端的模块的服务器，有大量第三方上传的模块，  
  下载：`npm install 模块名称`  
#### 9. npm补充

```js
/*
1. 初始化指令 npm init
2. 按提示输入，敲回车
3. 初始化完成之后会有一个 package.json 文件， 是当前项目的一个配置信息
4. 使用 npm install date-now --save-dev 指令
    npm install 模块名 --save-dev
    就可以将按装模块的信息存入到package.json文件中
5. 跳回上一级： cd ../
6. 命令行工具：
    nrm : npm install nrm -g 全局安装
    nrm + 回车 ：输出帮助提示信息
    nrm ls : 列出服务器地址，npm可以从哪个服务器进行下载，带*是选中状态
    nrm use + 镜像名字 : 进行切换下载第三方模块的镜像名字，nrm use taobao
nrm用来管理第三方模块的下载镜像，（用来切换第三方模块下载的服务器的）
当原来服务器不存在某个模块，或者下载速度很慢的时候，可以尝试切换下载服务器
7.
install date-now 在当前目录安装
install date-now -g 全局安装
8. nvmw 安装特定版本的node ，  是进行node版本管理的工具
npm install nvmw -g
nvmw -help          帮助
nvmw install node版本号         下载
nvmw uninstall node版本号       卸载
nvmw use node版本号             切换，使用特定版本
nvmw ls                         查看已有版本，显示所有安装的node版本
*/
```
  
  
