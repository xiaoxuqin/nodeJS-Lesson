const sig = process.argv[2],
      pid = process.argv[3],
      err = console.error;

if(process.argv.length < 4){
    err('命令行参数少于2！');
    process.exit(1);
}

if(process.argv.length > 4){
    err('命令行参数多于2！');
    process.exit(2);
}

if(isNaN(Number(pid))){
    err('pid must be number！');
    process.exit(3);
}

process.kill(pid, sig);
