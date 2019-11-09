var express = require('express');
var router = express.Router();

var data = require('../public/javascripts/data.json');
var username = data.users[0].username;
var password = data.users[0].password;
var chapterList = data.chapterList;

/* GET home page. */
router.get('/', function(req, res, next) {
    // console.log(chapterList.length);
    res.render('login');
});

router.post('/list', function(req, res, next) {
    var user = req.body.username; 
    var pwd = req.body.password;
    if(username === user && password === pwd){
        res.render('list',{ chapterList:chapterList });
    }
    else{
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        res.write('用户名密码错误!');
    }
    res.end(); 
})

module.exports = router;