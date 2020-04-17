const log = console.log,
      stdin = process.stdin,
      stdout = process.stdout,
      msg = ['Name', 'Email', 'QQ', 'Mobile'];
var me = {}, i = 1;

stdout.write(msg[0] + ':');

stdin.on('data', (data)=>{
    //data流出来的是buffer数据，要转为字符串才能正常显示
    // me[msg[i-1]] = data.toString();
    // me[msg[i-1]] = data.toString('utf8');
    me[msg[i-1]] = data.slice(0, -2).toString('utf8');//没有\n\r了就
    if(i === 4){
        log('i===4');
        log(me);
        process.exit();
    }
    stdout.write(msg[i++] + ':');
});

stdin.on('end', ()=>{
    log('eenndd');
    log(me);
});


// process.stdin.setEncoding('utf8');

// process.stdin.on('readable', () => {
//   var chunk = process.stdin.read();
//   if(typeof chunk === 'string'){
//     chunk = chunk.slice(0,-2);
//     process.stdout.write(`stringLength:${chunk.length}\n`);
//   }
//   if(chunk === ''){
//     console.log('over')
//     process.stdin.emit('over end');
//   }
//   if (chunk !== null) {
//     process.stdout.write(`data: ${chunk}\n`);
//   }
// });

// process.stdin.on('end', () => {
//   process.stdout.write('end');
// });