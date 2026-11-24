let player;
function setup() {
  createCanvas(500, 500);
  player = new Character(225, 380, 50, 50);
}

function draw() {
  background(240);
  player.draw();
}
