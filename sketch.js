const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var plinkos = [];
var particles = [];
var divisions = [];

var dH = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j,375));
  }

  for (var k = 0; k<= width; k = k + 80){
    divisions.push(new Division(k,height - dH/2, 10, dH))
  }

  ground = new Ground(240,800,500,40);
}

function draw() {
  background("black");

  Engine.update(engine);

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10))
  }

  for(var j = 0; j < plinkos.length; j++){

    plinkos[j].display();

  }
  for(var p = 0; p < particles.length; p++){

    particles[p].display();

  }

  for(var k = 0; k < divisions.length; k++){

    divisions[k].display();
    
  }

  ground.display();

  drawSprites();
}