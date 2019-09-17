/*
const events = require("events");
const EventEmitter = events.EventEmitter;

function Dog(name, energy){
    EventEmitter.call(this);
    this.name = name;
    this.energy = energy;
    var that = this;
    setInterval(function(){ 
        that.emit("bark");
        energy--; 
    }, 1000);
}
Dog.prototype.__proto__ = EventEmitter.prototype;

var dog1 = new Dog("taidi ", 4);
var dog2 = new Dog("zangao ", 8);
dog1.on("bark", function(){
    console.log(this.name + " barked! " + "energy " + this.energy);
    this.energy--;
    if(this.energy == -1){
        this.removeAllListeners("bark");
    }
}) 
dog2.on("bark", function(){
    console.log(this.name + " barked! " + "energy " + this.energy);
    this.energy--;
    if(this.energy == -1){
        this.removeAllListeners("bark");
    }
})
*/

// class
// 原生模块、核心模块
const events = require("events");
var EventEmitter = events.EventEmitter;
function Dog(name, energy){
    EventEmitter.call(this);//this指向变成给定的Dog实例化的this
    this.name = name;
    this.energy = energy;
}
Dog.prototype.__proto__ = EventEmitter.prototype;
module.exports = Dog;