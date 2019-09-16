var circle = {
    circumference:function a(r) {
        return 2*Math.PI*r;
    },
    area:function b(r) {
        return Math.PI*r*r;
    }
};

module.exports = {
    circle:circle,
    circumference:circle.circumference,
    area:circle.area
}