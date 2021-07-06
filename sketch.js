var fixedMouse,mAni;
var movingCat,cAni;

function preload() {
   // load the images here
   // mAni = loadImage("mouse2.png");
   // cAni = loadImage("cat1.png");

}

function setup(){
    createCanvas(800,600);
   // create tom and jerry sprites here
    fixedMouse = createSprite(200,200,50,50);
    fixedMouse.shapeColor = "red";
  //  fixedMouse.addImaage(mAni);

    movingCat = createSprite(100,100,50,50);
    movingCat.shapeColor = "red";
   // movingCat.addImage(cAni);

}

function draw() {

    background("white");
    //Write condition here to evalute if tom and jerry collide
    movingCat.x = World.mouseX;
    movingCat.x = World.mouseY;
    if(isTouching(movingCat,fixedMouse)){
      fixedMouse.shapeColor = "green";
      movingCat.shapeColor = "green";
    }
    else{
      fixedmose.shapeColor = "red";
      movingCat.shapeColor = "red";
    }
    

    drawSprites();
    

}


function isTouching(object1,object2){
  if(obect1.x - object2.x < object1.width/2 + object2.width/2 &&
     object2.x - object2.x < object1.width/2 + object2.width/2 &&
     object1.y - object2.y < object1.height/2 + object2.height/2 &&
     object2.y - object1.y < object1.height/2 + object2.height/2){
       return true;}
       else{
       return false;}
     }

  //For moving and changing animation write code here



