const stream = require("stream");

var MyReaderable = new stream.Readable();
MyReaderable.push("abcdefghjklmnopqrstuvwxyz");
MyReaderable.push(null);
MyReaderable.pipe(process.stdout);