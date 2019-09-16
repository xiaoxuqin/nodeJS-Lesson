// 实验2 程序③
/*
function Bomb(){
    this.explode = function(){
    },
    this.message = "bomb!!!"
}
var Bomb1 = new Bomb();
Bomb1.explode = function(){
    var that = this;
    setTimeout(function(){
        console.log(that.message);
    }, 2000)
}
Bomb1.explode();
*/

// 更正：构造函数的方法要定义在prototype上
function Bomb(){
    this.message = "bomb!!!";
}
Bomb.prototype.explode = function(){
    console.log(this.message);
}
var bomb = new Bomb();
setTimeout(bomb.explode.bind(bomb), 2000);
