let player;

let started = false; // false since the game didnt start yet

function setup() {
  createCanvas(500, 500);
  player = new Character(225, 380, 50, 50);
}

function draw() {
  // rectangular shape button
  background(240);
  if (!started) {
    fill(255);
    stroke(0);
    strokeWeight(2);
    rect(190, 225, 120, 50, 6);

    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(18);
    text("Start", 250, 250);
    //text() draws visible label text on the canvas, whereas console.log() only prints to the developer console.
    return;
  }

  player.move();

  if (player.ypos + player.height >= height) {
    player.ypos = height - player.height;
    player.jump();
  }

  player.draw(); // end point
}

function mousePressed() {
  if (
    !started &&
    mouseX > 190 &&
    mouseX < 310 &&
    mouseY > 225 &&
    mouseY < 275
  ) {
    started = true;
  }
}
