var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage, obstacle1Image, obstacle2Image; 
var blastImage;                   //C42// SA
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles; 
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/sky.png");
  car1_img = loadImage("./assets/rocket2.png");
  car2_img = loadImage("./assets/rocket.png");
  track = loadImage("./assets/sk.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/geme3.png");
  lifeImage = loadImage("./assets/life.png");
  obstacle1Image = loadImage("./assets/asteroid1.png"); 
  obstacle2Image = loadImage("./assets/asteroid.png"); 
  blastImage = loadImage("./assets/blast.png"); //C42 //SA
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
