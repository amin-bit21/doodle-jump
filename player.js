class Character {
  constructor(x, y, width, hieght) {
    this.xpos = x;
    this.ypos = y;
    this.width = width;
    this.height = hieght;
  }
  draw() {
    // Yellow/green squared body with bright color
    fill(255, 200, 66);
    stroke(0);
    strokeWeight(3);
    rect(this.xpos, this.ypos, this.width, this.height, 8);
    // 8 is the corner radius to make it bit rounded

    // black rounded eyes
    fill("black");

    noStroke();

    circle(
      this.xpos + this.width * 0.32,
      this.ypos + this.height * 0.42,
      this.width * 0.14,
    ); //left eye
    circle(
      this.xpos + this.width * 0.68,
      this.ypos + this.height * 0.42,
      this.width * 0.14,
    ); // right eye

    // smily mouth
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(
      this.xpos + this.width * 0.5,
      this.ypos + this.height * 0.58,
      this.width * 0.24,
      this.height * 0.18,
      0.15 * PI,
      0.85 * PI,
      // comma used to separate arguments
    );
  }
}
