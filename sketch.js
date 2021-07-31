var garden,gardenImg;
var rabbit,rabbitImg;
var apples, applesImg
var leafs, leafsImg
var select_sprites = Math.round(Random(1,2));

if(frameCount % 80 == 0){
  if(select_sprites == 1){
    createApples();
  }
  else {
    createLeaf();
  }
}


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png")
  leafsImg = loadImage("leaf.png")
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
 }


 
function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX 

 

  drawSprites();
}

 
function createApples(){
 apple = crateSprite(random(50,350),40,10,10);
 apple.addImage(appleImg);
 apple.scale = 1; 
 apple.velocityY = 3;
}


function createLeaf(){
leaf = createSprite(random(50,350),40,10,10);
leaf.addImage(leafImg);
leaf.scale = 1;
apple.velocityY = 3;
}

