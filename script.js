let balls = [];

function setup() {
  createCanvas(windowWidth * .75, windowHeight * .75);
  colorMode(RGB, 255);

    //initially fill array with 5 balls
  for (let i = 0; i < 5; i++) {
    balls.push(createBall(random(width), random(height)));
  }
}

function draw() {
  background(0, 10); //reset screen each refresh, some oppacity gives tails

  // Update and draw each ball
  for (let ball of balls) {
    updateBall(ball);
    drawBall(ball);
  }
}

function createBall(x, y) {
  // ball object
  return {
    x: x,
    y: y,
    size: random(20, 50),
    color: color(random(255), random(255), random(255)),
    speedX: random(-5, 5),
    speedY: random(-5, 5),
  };
}

function updateBall(ball) {
  // update the balls position with speed
  ball.x += ball.speedX;
  ball.y += ball.speedY;

  // Bounce off the edges (check boundaries and reverse speed)
  if (ball.x > width - ball.size / 2 || ball.x < ball.size / 2) {
    ball.speedX *= -1;
  }
  if (ball.y > height - ball.size / 2 || ball.y < ball.size / 2) {
    ball.speedY *= -1;
  }
}

//draw ball on canvas
function drawBall(ball) {
  fill(ball.color);
  ellipse(ball.x, ball.y, ball.size, ball.size);
}

//resize canvas with window
function windowResized() {
  resizeCanvas(windowWidth*.75, windowHeight*.75);
}

//create new ball on click
function mousePressed() {
    balls.push(createBall(mouseX, mouseY));
  }
