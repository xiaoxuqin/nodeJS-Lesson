const cp = require('child_process');
/**
 * err 启动子进程过程异常得到的错误对象
 * stout 子进程的输出 (输出buffer数据)
 * stderr 子进程执行过程的错误对象
 */
cp.exec('node childProcess.js' + ' javascript', function (err, stdout, stderr) {
    console.log(typeof stdout);   // string
    console.log(typeof stderr);   // string
    console.log(stdout);  // hello world javascript
    console.log(stderr);  // 
    if (err) {
        console.log(err);
    }
    else {
        console.log('stdout:' + stdout);
        console.log('stderr' + stderr);
    }
})