var bgimg, bg;
var planeimg, plane
var birdimg, bird;
var cloudimg, cloud;
var kiteimg, kite;
var gameoverimg, restartimg;
var obs;
var PLAY = 1;
var END = 0;
var score = 0;
var topGround, bottomGround;


function preload()
{
 bgimg = loadImage("assets/background.jpg");
 planeimg = loadImage("assets/aeroplane.png");
 birdimg = loadImage("assets/bird.png");
 cloudimg = loadImage("assets/cloud.png");
 kiteimg = loadImage("assets/kite.png");
}


function setup()
{
 createCanvas(700,600);
 bg = createSprite(300,320,6,6);
 bg.addImage(bgimg);
 bg.scale = 2.4;

 bottomGround = createSprite(200,390,800,20);
 bottomGround.visible = false;

 topGround = createSprite(200,10,800,20);
 topGround.visible = false;

 plane = createSprite(100,200,20,50);
 plane.addImage(planeimg);
 plane.scale = 0.2;
 plane.debug = true;

}



function draw()
{
background('black');
drawSprites();
}


