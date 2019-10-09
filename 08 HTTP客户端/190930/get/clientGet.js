const https = require('https');
/**
 * https是在http基础上进行了SSL加密
 * 让数据不再明文传输
 */
https.get('https://www.baidu.com/', function(res) {  // res是一个流对象
    var result = '';
    res.on('data', function(chunk) {
        // console.log(chunk);
        // chunk得到的是buffer数据
        result += chunk;
    })
    res.on('end', function() {
        console.log(result);
        // 得到整个HTML页面
    })  
})