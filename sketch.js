// setup() is called once at page-load

let draw_seed = 0;
let cur_minute = 0;
function setup() {
    //createCanvas(800,600); // make an HTML canvas element width x height pixels
    draw_seed = random(100);
    var canvas = createCanvas(displayWidth, displayHeight); // make an HTML canvas element width x height pixels
    canvas.style('display', 'block');

    cur_minute = minute();
    console.log(cur_minute);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    if (min != cur_minute) {
        console.log(min);
        cur_minute = min;
    }

    //background(225);
    background(255);
    textSize(32);

    const size = 300;
    randomSeed(draw_seed);

    // hours
    translate(windowWidth / 2, windowHeight / 2);
    rotate(PI);
    for(let i = 0; i < hr; i++) {
        rotate((2 * PI) / hr);
        circle(0, size + 15, 30);
    }
    push();


    // minutes
    for(let i = 0; i < min; i++) {
        // randomize length, randomize color, randomize length
        const arc_start = random(2 * PI)
        const arc_length = random(1.5, 2) * size;
        fill(0, 255, 0, 100);
        arc(0, 0, arc_length, arc_length, arc_start, arc_start + (PI / 8));
    }

    // Seconds
    fill('red');
    rect(-size/2, -size/2, size, size);
    fill('white');
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