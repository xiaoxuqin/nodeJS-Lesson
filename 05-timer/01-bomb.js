function Bomb(id) {
    var timeID;

    this.start = ()=>{
        console.log(id + " i'll bomb after 3s");
        timeID = setTimeout(()=>{
            console.log(id + " bomb");
        }, 3000);
    }

    this.clear = ()=>{
        clearTimeout(timeID);
    }
}

var b1 = new Bomb(1);
b1.start();

var b2 = new Bomb(2);
b2.start();
setTimeout(b2.clear, 1000);
