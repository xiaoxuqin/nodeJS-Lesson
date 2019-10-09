// 有问题
const cp = require('child_process');

var childProcess = cp.spawn('node', [' childProcess1']);
var result = '';
// childProcess.stdout.on('data', function(chunk){
//     console.log(chunk);
//     result += chunk;
// })

childProcess.stdout.on('data', function(){
    console.log(result);
})