const log = console.log;

log('PID:', process.pid);

process.stdin.resume();

process.on('SIGINT',()=>{
    log('you have pressed Ctrl+C. Good bye!');
    process.exit();
});

process.on('SIGTSTP',()=>{
    log('you have pressed Ctrl+Z.');
});