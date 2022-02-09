let detailY;
let detailX;
function setup() {
  let canvas = createCanvas(1377, 850, WEBGL);
  canvas.parent("sketch01");
  detailY = createSlider(3, 6, 3);
  detailY.position(86, 105);
  detailY.style('width', '80px');
  
  detailX = createSlider(3, 6, 3);
  detailX.position(86, 910);
  detailX.style('width', '80px');
}

function draw() {
  
  if (mouseY < 500) {
      background(0, 125, 225, 102);
      noFill()
      stroke(250)
      rotateY(millis() / 1000);
      torus(80, 45, 16, detailY.value());
  }
  
  else {
      background(0, 255, 126, 100);
      stroke(250)
      fill(0, 125, 250, 102)
      rotateY(millis() / 1000);
      torus(100, 50, detailX.value(), 12);
  }
  
}