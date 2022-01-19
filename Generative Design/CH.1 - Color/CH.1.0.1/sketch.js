function setup() {
    createCanvas(720,720);
    noCursor();

    colorMode(HSB, 360, 100, 100);
    rectMode(CENTER);
    noStroke();
  }
  
  function draw() {
    var newColor1 = map(mouseY,0, height, 0, 360);
    var newColor2 = map(mouseY,0, height, 360,0);
    background(newColor1, 100, 100);
    fill(newColor2 , 100, 100);
    rect(360, 360, mouseX + 1, mouseX + 1);
  }