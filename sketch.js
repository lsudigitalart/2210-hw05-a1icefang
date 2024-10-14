function setup() {
    createCanvas(400, 400)
    noLoop();
}

function draw() {
    background(255);

        drawStar(100, 100, 30, 70, 5, color(0))
        drawStar(300, 100, 30, 70, 6, color (255, 255, 0))
        drawStar(100, 300, 30, 70, 7, color(255, 0, 0))
        drawStar(300, 300, 30, 70, 8, color(0, 0, 255))
}

function drawStar(x, y, radius1, radius2, npoints, col) {
    push();
    translate(x, y)
    fill(col)
    beginShape()

    for (let i = 0; i < TWO_PI; i += TWO_PI / npoints) {
        let angle = i + HALF_PI
        let sx = cos(angle) * radius2
        let sy = sin(angle) * radius2
        vertex(sx, sy)

        angle += TWO_PI / npoints / 2
        sx = cos(angle) * radius1
        sy = sin(angle) * radius1
        vertex(sx, sy)
    }

    endShape(CLOSE)
    pop()
}
