Node中http模块详解
=
Node中的Http
-
Node中提供了http模块，其中封装了高效的http服务器和http客户端  
http.server是一个基于事件的HTTP服务器  
http.request是一个HTTP客户端工具，用户向服务器发送数据
### 一、HTTP服务器
#### 1.http.server事件

http.server是一个基于事件的HTTP服务器，所有的请求都被封装到独立的事件当中，我们只需要对它的事件编写相应的行数就可以实现HTTP服务器的所有功能  
1. request：当客户端请求到来的时候，该事件被触发，提供两个参数request和response，分别是http.ServerRequest和http.ServerResponse表示请求和响应的信息。  
http给request事件提供了一个捷径`http.createServer([requestListener])`
2. http.ServerRequset请求信息
3. 获取GET请求内容
4. 获得POST请求内容
5. http.ServerResponse返回客户端信息
