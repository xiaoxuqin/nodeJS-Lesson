# 流  
流是一种数据的传输方式，可以将数据从一个地方传输到另一个地方  
* 可读流  
1. `var streamReader = fs.createReadStream(filePath);` streamReader是一个可读流对象，（数据来源）
2.  引入stream模块
  ```js
  const stream = require("stream"); 
  var reader = new stream.Readable();
  reader.push("hello ");
  reader.push("world");
  reader.push(null);
  reader.pipe(process.stdout); // process.stdout 是一个指向标准输出流的可写的流
  ```
* 可写流
1. pipe()
  ```js
  var readStream = fs.createReadStream(filePath);
  var writeStream = fs.createWriteStream(writePath);
  readStream.pipe(writeStream);
  ```
2. write()
  ```js
  var writeStream = fs.createWriteStream(filePath);
  writeStream.write("hello world!!!");
  writeStream.end();
  ```
* 管道流：可读流读出的数据需要放到可写流中去写到文件里面  
  pipe方法返回了一个可写流对象，`readerStream.pipe(writeStream)`
