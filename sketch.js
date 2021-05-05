//creating canvas and gives background images
var canvas, backgroundImage;
// declaring game state=0
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
//creating var for form,player and game
var form, player, game;
// creating var car
var cars, car1, car2, car3, car4;
//adding images
var track, car1_img, car2_img, car3_img, car4_img;
//loading images
function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
}
//creating canvas and linking te database
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  //when player count becomes 4
  if(playerCount === 4){
    game.update(1);
  }
  //when game stae is 1
  if(gameState === 1){
    clear();
    game.play();
  }
  // when game state is 2
  if(gameState === 2){
    game.end();
  }
}
