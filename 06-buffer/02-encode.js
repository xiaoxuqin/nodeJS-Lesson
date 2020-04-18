const usr = process.argv[2],
      pwd = process.argv[3];
console.log(process.argv)
if(process.argv.length !== 4){
    console.error('命令行格式： username password');
    process.exit(1);
}
console.log('username:' + usr + '         password' + pwd);
const buf = new Buffer(usr + ':' + pwd);
console.log('Base64:', buf.toString('Base64'));
