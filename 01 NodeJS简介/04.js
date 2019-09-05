/**
 * 异步操作，不会阻塞程序的执行
 */
/**
 * 1. 营业厅排队办理业务，应用程序执行的阻塞
 * 2. 取号办理业务，应用程序执行
 */
setTimeout(function() {
    console.log("异步执行");
}, 3000);
console.log("main program");
//先输出main program，三秒之后再输出“异步执行”
