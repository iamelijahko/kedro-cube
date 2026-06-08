// Kedro 1.0 message graphic design

let myFont;

function preload() {
  myFont = loadFont("IBMPlexMono-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(myFont);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);

  // Draw 3D cube grid
  push();
  rotateX(PI / 6 + frameCount * 0.01);
  rotateY(PI / 4 + frameCount * 0.01);
  drawCubeGrid();
  pop();

  // Draw 2D overlay text
  draw2DTextBelowCube();
}

function drawCubeGrid() {
  fill(255, 201, 0);
  stroke(5);
  strokeWeight(10);

  let gridSize = 5;
  let spacing = 60;

  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      for (let z = 0; z < gridSize; z++) {
        push();
        translate((x - 2) * spacing, (y - 2) * spacing, (z - 2) * spacing);
        box(50);
        pop();
      }
    }
  }
}

function draw2DTextBelowCube() {
  // Reset 3D camera to draw in 2D
  resetMatrix();
  camera();
  ortho();
  translate(-width / 2, -height / 2); // Top-left origin

  // Dynamic font size based on screen height
  let baseFontSize = height * 0.03; // 3% of screen height
  textSize(baseFontSize);

  // Position text at a proportionally offset position from cube center
  let cubeBottomY = height / 2 + height * 0.15; // ~15% below vertical center
  fill(255);
  noStroke();

  text("Kedro 1.0", width / 2, cubeBottomY + 150);
  text("Stable at the core. Ready for more!", width / 2, cubeBottomY + baseFontSize + 160);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
