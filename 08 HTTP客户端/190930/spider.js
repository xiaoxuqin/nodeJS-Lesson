// 使用cheerio解析html
/**
 * cheerio是jquery核心功能的一个快速灵活而又简洁的实现，
 * 主要是为了用在服务器端需要对DOM进行操作的地方
 * 解析HTML  （load）
 * https://www.jianshu.com/p/629a81b4e013
 */
const cheerio = require('cheerio');

// const $ = cheerio.load("<h1>hello spider</h1>");
// console.log($('h1').html());    // hello spider
// $('h1').text('hello node');
// console.log($('h1').html());    // hello node
// console.log($('h1'));
// console.log($.html());   
    // <html><head></head><body><h1>hello node</h1></body></html>

const $ = cheerio.load("<ul><li>li node</li></ul>");

$('ul').append('<li>li node 2</li>');
// console.log($.html());  
// <html><head></head><body><ul><li>li node</li><li>li node 2</li></ul></body></html>

$('li').each(function(index, el){
    console.log($(this).text());
})
// li node
// li node 2