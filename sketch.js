let backgroundImage
let database
let form, player, game
let playerCount, gameState

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight)

  database = firebase.database()

  game = new Game()
  game.start()
}

function draw() {
  background(backgroundImage)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}