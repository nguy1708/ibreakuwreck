var entity;
var pipes = [];

function setup() {
    createCanvas(640, 480);
    entity = new Entity();
    pipes.push(new Pipe());
}

function draw() {
    background(100,150,255);

    for (var i = pipes.length-1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hits(entity)) {
            console.log("HIT");
        }

        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }
    }

    entity.update();
    entity.show();

    if (frameCount % 75 == 0) {
        pipes.push(new Pipe());
    }
}

function keyPressed() {
    if (key == ' ') {
        entity.up();
        //console.log("SPACE");
    }
}
