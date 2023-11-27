let serial;
let portName = "/dev/tty.usbmodem11301";

// my p5 sketch variables
let x, y;
let bgColor = 0;
let ellipseColor = 0;
let buttonIsPressed = false;
let ellipses = [];

// function from previous class for p5.serialcontrol
function setup() {
  createCanvas(500, 500);
  serial = new p5.SerialPort();
  serial.onList(gotList);
  serial.list();
  serial.onOpen(gotOpen);
  serial.openPort(portName);
  serial.onData(gotData);
}

function draw() {
  background(249, 184, 49);

  ellipse(60, 450, 120, 120);
  ellipse(200, 350, 200, 200);
  ellipse(400, 500, 250, 250);
  ellipse(90, 100, 300, 300);
  ellipse(450, 150, 400, 400);

  let colorX = map(x, 0, width, 0, 255);
  let colorY = map(y, 0, height, 0, 255);
  noStroke();
  fill(ellipseColor);
  ellipse(x, y, 60, 60);

  // button pressed
  if (buttonIsPressed) {
    addButtonCircle();
    buttonIsPressed = false;
  }

  // For the mini circles
  for (let i = 0; i < ellipses.length; i++) {
    ellipses[i].display();
  }
}

function gotList(ports) {
  for (let i = 0; i < ports.length; i++) {
    console.log(ports[i]);
  }
}

function gotOpen() {
  console.log("Port open!");
}

function gotData() {
  let newData = serial.readStringUntil("\n");
  if (newData === null) return;

  newData = newData.trim();

  console.log(newData);

  if (newData === "1") {
    buttonIsPressed = true;
  }
}

function addButtonCircle() {
  let newEllipse = new Ellipse(random(width), random(height));
  ellipses.push(newEllipse);
}

// Ellipse class
class Ellipse {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = color(random(255), random(255), random(255));
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, 17, 17);
  }
}
