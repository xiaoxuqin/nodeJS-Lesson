const log = console.log;
const arg = process.argv[2];

if( (!arg) || arg === '--help' || arg === '-h'){
    log('请输入一个数学表达式！');
}else{
    calc();
}

function calc() {  
    try {
        log(arg + '=%s', eval(arg));
    }catch(e){
        console.error('%s 不是合法的数学表达式!', arg);
    }
}
