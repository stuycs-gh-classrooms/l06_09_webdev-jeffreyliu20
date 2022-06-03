var cx, cy, theta, circolor;
function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  background(255);
  cy = calcY(100, height/2, theta);
  cx = calcX(100, width/2, theta);
  if (theta % 60==0) {
    circolor+=10;
  }
  if (circolor>=255) {
    circolor=0;
  }
  fill (0, circolor, 0);
  circle(cx, cy, 50);
  line(width/2,height/2,cx,cy);
  theta++;
}

function calcY( amp, offset, t) {
  var y;
  y=sin(radians(t));
  y=amp*y+offset;
  return y;
}

function calcX(amp, offset, t) {
  var x;
  x=cos(radians(t));
  x=amp*x+offset;
  return x;
}
