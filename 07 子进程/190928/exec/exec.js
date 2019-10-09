const cp = require("child_process");

const p = cp.exec('node child.js ab', {}, function(err, stdout, stderr){
    if(err){
        // err.code   是进程退出时的 exit code， 非0都被认为错误
        // err.signal 是结束进程时发送给它的信号值
        console.log('err:', err, err.code, err.signal);
    }
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
})
console.log('child pid:', p.pid);