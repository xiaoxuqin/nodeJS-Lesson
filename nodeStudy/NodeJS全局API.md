NodeJS全局API
=
#### 1. __dirname和__filename
__dirname变量：获取当前文件所在目录的完整目录名，表示的是当前执行脚本所在的目录  
__filename变量：获取当前模块文件的带有完整绝对路径的文件名  
#### 2. fs模块、path模块、url模块  
fs模块：用于对系统文件及目录进行读写操作  
path模块：提供处理文件路径的小工具，`path.join()`用于连接、拼接路径，不同系统的路径分割符有所差别，Unix系统是"/"，Windows系统是"\\"  
url模块：用于解析和处理URL字符串  
