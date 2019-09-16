// 实验三 程序②
var base64Str = "emhhbmdzYW46MTIzNDU2";
var buf1 = Buffer.from(base64Str, "base64");
var utfStr = buf1.toString("utf-8");
console.log(utfStr);
