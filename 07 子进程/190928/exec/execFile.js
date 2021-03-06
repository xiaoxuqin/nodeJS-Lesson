const cp = require("child_process");

const p = cp.execFile(
    'node', // 可执行文件
    ['child.js', 'ab'], // 传递给命令的参数
    {},
    function(err, stdout, stderr) {
      if (err) {
        // err.code 是进程退出时的 exit code，非 0 都被认为错误
        // err.signal 是结束进程时发送给它的信号值
        console.log('err:', err, err.code, err.signal);
      }
      console.log('stdout:', stdout);
      console.log('stderr:', stderr);
    }
  );
  console.log('child pid:', p.pid);