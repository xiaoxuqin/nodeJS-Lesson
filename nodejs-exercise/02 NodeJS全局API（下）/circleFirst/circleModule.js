// 实验三 程序⑤
/*
function circleFun(r){
    var circle = {};
    circle.circumference = (2*Math.PI*r);
    circle.area =  (Math.PI*r*r);
    return circle;
};
circleFun(1);
module.exports = {
    circleFun:circleFun  
}
*/

// class
function circleFun(r){
    function circumference(){
        return 2*Math.PI*r;
    }
    function area(){
        return Math.PI*r*r;
    }
    return {circumference:circumference, area:area};
}
module.exports = {
    circleFun:circleFun
}