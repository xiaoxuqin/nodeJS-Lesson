const cp = require("child_process");

const p = cp.spawn('node', ['child.js', 'ab'], {});
console.log('child pid:', p.pid);
p.on('exit', function (code){
    console.log('exit:', code);
});

// 父进程的输入直接pipe给子进程（紫禁城可以通过process.stdin拿到）
process.stdin.pipe(p.stdin);

// 子进程的输出pipe给父进程的输出
p.stdout.pipe(process.stdout);

// 通过监听data事件来获取结果
