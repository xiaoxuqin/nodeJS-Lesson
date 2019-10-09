const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer(function(req, res) {
    var fileContent = JSON.parse(fs.readFileSync('./data.json'));
    var result = '';
    req.on('data', function(chunk) {
        result += chunk; 
    })
    req.on('end', function() {
    /*    var i;
        for(i=0; i < fileContent.length; i++){
            var rightStr = 'username' + '=' + fileContent[i].username + '&' + 'password' + '=' + fileContent[i].password;
            if(result === rightStr){
                console.log('登录成功！');
                break;
            }
        }
        if(i == 3){
            console.log('用户名、密码不正确！');
        }
    */
        var resultObj = querystring.parse(result);
        var i;
        for(i=0; i < fileContent.length; i++){   
            if(resultObj.username == fileContent[i].username 
                && resultObj.password == fileContent[i].password){
                console.log('登录成功！');
                break;
            }
        }
        if(i == 3){
            console.log('用户名、密码不正确！');
        }
    })
}).listen(8081);
console.log('server is listening 8081');
