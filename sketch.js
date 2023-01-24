// setup() is called once at page-load

let draw_seed = 0;
let cur_minute = 0;
function setup() {
    draw_seed = random(100);
    var canvas = createCanvas(displayWidth, displayHeight); // make an HTML canvas element width x height pixels
    canvas.style('display', 'block');

    console.log("The rotating squares in the middle represent seconds");
    console.log("The randomized transparent sectors represent minutes");
    console.log("The surrounding circles represent hours");

    cur_minute = minute();
    console.log(cur_minute);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let cur_min = minute();
    let sec = second();

    if (cur_min != cur_minute) {
        console.log(cur_min);
        cur_minute = cur_min;
    }

    // Set background to clear the canvas
    background(255);

    // minsize 100, maxsize 300
    const size = max(100, min(300, windowWidth * 0.45));
    randomSeed(draw_seed);

    // hours
    const hour_size = size/10;
    fill(19, 41, 61);
    translate(windowWidth / 2, windowHeight / 2);
    rotate(PI);
    for(let i = 0; i < hr; i++) {
        rotate((2 * PI) / hr);
        circle(0, size + (hour_size/2), hour_size);
    }
    push();

    // minutes
    for(let i = 0; i < cur_min; i++) {
        // randomize length, randomize color, randomize length
        const arc_start = random(2 * PI)
        const arc_length = random(1.5, 2) * size;
        fill(36, 123, 160, 100);
        arc(0, 0, arc_length, arc_length, arc_start, arc_start + (PI / 8));
    }

    // Seconds
    fill(27, 152, 224);
    rect(-size/2, -size/2, size, size);
    fill(232, 241, 242, 100);
    for(let i = 0; i < sec; i++) {
        rotate(2 * PI / 60);
        scale(0.95);
        rect(-size/2, -size/2, size, size);
    }
    pop();
}