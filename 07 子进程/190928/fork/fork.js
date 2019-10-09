const cp = require('child_process');

const p = cp.fork('child.js', ['ab'], {});
console.log('child pid:', p.pid);
p.on('exit', function(code){
    console.log('exit:', code);
});