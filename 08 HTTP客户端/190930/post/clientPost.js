// postServer.js
const http = require('http');
const querystring = require('querystring');
// 把对象转化成服务端可以接收的字符串

var infor = {'user': 'zhangsan'};
var str = querystring.stringify(infor);
var options = { 
    host:'localhost',
    port:8081,
    path:'/',
    method:'post'
}
var req = http.request(options, function(res) {

});

req.write(str);
req.end();