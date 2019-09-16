// class
var Dog = require("./Dog.js");
// console.log(Dog);   // [Function: Dog]
var dog1 = new Dog("taidi ", 4);
var dog2 = new Dog("zangao ", 8);
function barkFun(){
    console.log(this.name + " barked!!!  " + this.energy);
}
dog1.on("bark", barkFun);
var intervalId = setInterval(function(){
    if(dog1.energy >= 0){
        dog1.emit("bark");
    }else{
        // clearTimeout(intervalId);
        intervalId.unref();
    }
    dog1.energy--;
}, 1000);
