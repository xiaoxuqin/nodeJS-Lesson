# EventEmitter类
events模块只提供了一个对象， events.EventEmitter， EventEmitter的核心是事件触发与事件监听器功能的封装  
```js
//event.js 文件
const events = require("events");   
var eventEmitter1 = new events.EventEmitter();
eventEmitter1.on('some_event', function() { 
    console.log('some_event 事件触发'); 
}); 
setTimeout(function() { 
    eventEmitter1.emit('some_event'); 
}, 1000); 
```
执行结果：1秒后控制台输出 'some_event 事件触发'。  
原理：eventEmitter1 对象注册了事件 some_event 的一个监听器，通过setTimeout在1秒以后向eventEmitter1 对象发送事件some_event，此时会调用some_event 的监听器。  
on 函数用于绑定事件函数，emit 属性用于触发一个事件。  


