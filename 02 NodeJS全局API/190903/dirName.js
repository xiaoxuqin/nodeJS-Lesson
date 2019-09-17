/**
 * 全局API，直接调用即可
 */
console.log("__dirname      " + __dirname);
console.log("__filename     " + __filename);
/**
 * __dirname变量：获取当前文件所在目录的完整目录名      表示当前执行脚本所在的目录
 * __filename变量：获取当前模块文件的带有完整绝对路径的文件名
 */
/**
 * 特殊情况：在 require() 中使用 ./ 时，
 * 这时的路径就会是含有require()的脚本文件的相对路径
 */
