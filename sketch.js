var garden,rabbit,carrot,orange;
var gardenImg,rabbitImg,carrotImg,orangeImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  carrotImg = loadImage("carrot.png");
  orangeImg = loadImage("orange.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


carrot = createSprite(180,100,30,30);
carrot.scale =0.1;
carrot.addImage(carrotImg);

orange = createSprite(250,50,30,30);
orange.scale =0.1;
orange.addImage(orangeImg);


}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}