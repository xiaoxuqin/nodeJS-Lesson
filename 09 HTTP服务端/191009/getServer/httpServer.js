const http = require('http');

/**
 * 1. http.createServer()
 */

const server = new http.Server();
server.listen(8081);
server.on('request', function(req, res){
    res.end('hello node');
})