/**
 * 190928自行查阅补充：
 * /
/**
 * nodejs子进程的创建方式
 * exex/execFile
 * spawn
 * fork
 */

/**
 * exex/execFile
 * exec(command, options, callback) 和 execFile(file, args, options, callback)比较类似，
 * 会使用一个Buffer来存储进程执行后的标准输出结果，可以一次性在callback里面获取到，
 * 不太适合数量大的场景。
 * exec会首先创建一个新的shell进程出来，然后执行command；
 * execFile则是直接将可执行的file创建为新进程执行；
 * 所以execFile会比exec高效一些。
 * exec比较适合来执行shell命令，然后获取输出
 */

 /**
  * sapwn
  * spawn(command, args, options)适合用在进程的输入、输出数据量比较大的情况
  * （因为它支持stream的方式），exec/execFile都是Buffer，而不支持stream的方式
  * 可以用于任何命令
  */

/**
 * fork
 * fork(modulePath, args, options)实际上是spawn的一个特例，会创建一个新的V8实例，
 * 新创建的脚本只能用来运行node脚本，不能运行其他指令
 */
