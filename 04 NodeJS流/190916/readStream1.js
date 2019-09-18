const stream = require("stream");
var reader = new stream.Readable();
reader.push("hello ");
reader.push("world");
reader.push(null);
reader.pipe(process.stdout);  // 一个指向标准输出流的可写的流
