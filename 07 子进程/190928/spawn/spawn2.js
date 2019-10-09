const cp = require('child_process');

const p = cp.spawn('node', ['child.js', 'ab'], {});
var str = '';
p.stdout.on('data', function(data){
    str += data;
});
p.stdout.on('close', function(code){
    console.log('close:', code);
    console.log('data:', str);
});

// 子进程的错误输出pipe给父进程的错误输出
p.stderr.pipe(process.stderr);