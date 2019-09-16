// 实验2 程序⑤
console.log(process.platform);
console.log(process.pid);
console.log(process.argv[0]);
console.log(process.cwd());
console.log(process.memoryUsage().external);
/**
 * heapTotal 和 heapUsed 代表V8的内存使用情况。 
 * external代表V8管理的，绑定到Javascript的C++对象的内存使用情况。 
 * rss, 驻留集大小, 是给这个进程分配了多少物理内存(占总分配内存的一部分) 这些物理内存中包含堆，栈，和代码段。
 */