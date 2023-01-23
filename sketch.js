// setup() is called once at page-load
function setup() {
    //createCanvas(800,600); // make an HTML canvas element width x height pixels
    var canvas = createCanvas(displayWidth, displayHeight); // make an HTML canvas element width x height pixels
    canvas.style('display', 'block');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    background(225);
    textSize(32);

    // Seconds
    const size = 300;
    translate(300, 300);
    for(let i = 0; i < sec; i++) {
        rotate(2 * PI / 60);
        scale(0.95);
        rect(-size/2, -size/2, size, size);
    }
    // draw the last second

    //fill(180);
    //text(hr, 10, 30);
    //fill(100);
    //text(min, 10, 60);
    //fill(0);
    //text(sec, 10, 90);
}