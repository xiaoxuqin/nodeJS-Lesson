const user = {
    name: 'Tom',
    age: 41,
    qq: '1234567890'
};
const log = console.log;

// 三种占位符
log('name: %s', user.name);
log('age: %d', user.age);
log('JSON: %j', user);

log('qq: %s', user.qq); //占位符输出
log('qq:', user.qq);   //逗号间隔，多变量输出
log('qq: ' + user.qq);  //拼接字符串输出
log(`qq: ${user.qq}`);  //模板字符串输出

console.error('something wrong!');