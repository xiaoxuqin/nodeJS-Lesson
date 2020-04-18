
var timer1, timer2, count = 1;

console.log('start timer1...');

timer1 = setInterval(loop1, 500);

setTimeout(() => {
    console.log('Game over');
    clearInterval(timer1);
    console.log('start timer2...');
    timer2 = setInterval(loop2, 500);
}, 5000);

function loop1() {  
    console.log("i'll loop forever");
}

function loop2() {  
    console.log("i'll loop forever");
    if(++count > 5){
        count = 0;
        console.log('Game over');
        global.clearInterval(timer2);
        // clearInterval(timer2);
    }
}

