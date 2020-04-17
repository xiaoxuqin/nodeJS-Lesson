const log = console.log;

log('architeture:', process.arch);          //CPU 架构信息
log('platform:%s\n', process.platform);     //操作系统版本信息

log('process id:', process.pid);            //进程 id 信息
log('exePath:%s\n', process.execPath);      //Node.js 可执行文件的绝对路径信息

log('node version:', process.version);      //Node.js 版本信息
log('cwd:%s\n', process.cwd);               //

log('rss:', process.memoryUsage().rss);                 //内存使用情况
log('heapTotal:', process.memoryUsage().heapTotal);     
log('heapUsed:', process.memoryUsage().heapUsed);
log('external:%s\n', process.memoryUsage().external);

log('env:', process.env);
log('host name:', process.env.HOSTNAME);