// 实验2 程序③
function Bomb(){
    this.explode = function(){
    },
    this.message = "bomb!!!"
}
var Bomb1 = new Bomb;
Bomb1.explode = function(){
    var that = this;
    setTimeout(function(){
        console.log(that.message);
    }, 2000)
}
Bomb1.explode();