if(process.argv.length !== 3){
    console.error('命令行格式： base64_string');
    process.exit(1);
}
//56emOjEyMw==
const buf = new Buffer(process.argv[2], 'base64');
const info = buf.toString('utf8').split(':');

if(info.length !== 2){
    console.error('信息有误');
    process.exit(2);
}
console.log('username:' + info[0] + '   password:' + info[1]);