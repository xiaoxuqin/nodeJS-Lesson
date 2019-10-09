const http = require('http');
const querystring = require('querystring');

var infor = {
    'username':process.argv[2],
    'password':process.argv[3]
} 
var str = querystring.stringify(infor);
var options = {
    host:'localhost',
    port:8081,
    // path:'/',
    method:'post'
}
var req = http.request(options, function(res) {

});

req.write(str); 
req.end();