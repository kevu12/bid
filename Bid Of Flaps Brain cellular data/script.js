var PLAY = 1;
var END = 0;
var gameState = PLAY;

var flappybird, pillar, back, backgroundImg, birdImg, pillarImg

function preload(){
    var backgroundImg= loadImage("img/back.png")
    var pillarImg= loadImage("img/pillar.png")
    var birdImg= loadImage("img/baird.png")
}

function setup(){
    createCanvas(400, 400)
    var bird=createSprite(50,50,10,20)

  bird.addImage("bird", birdImg);
}

function draw(){
    drawSprites()
}