// 实验三 程序⑤
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