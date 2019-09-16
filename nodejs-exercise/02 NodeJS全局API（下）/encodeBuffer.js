// 实验三 程序①
var username = process.argv[2];
var password = process.argv[3];
if(username != undefined && password != undefined){
    console.log("用户名：" + username + " " + "密码：" + password);
    var loginStr = username + ":" + password;
    var buf1 = Buffer.from(loginStr, "utf-8");
    var base64Str = buf1.toString("base64");
    console.log(base64Str);
}else{
    console.log("用户名、密码不能为空");
}