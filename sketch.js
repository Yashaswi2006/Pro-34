const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas
var pendulum ,pendulum1,pendulum2,pendulum3,pendulum4;
var line,line1,line2,line3,line4;


function setup() {
  canvas = createCanvas(windowWidth / 2 , windowHeight / 1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  pendulum = new pendulum(200,200,20,20);
}

function draw() {
    background(0,0,0); 
    pendulum.display();
    drawSprites();
}
function mouseDragged() {
   Matter.body.setPosition(pendulum.body, { x: mouseX, y: mouseY});  
}

