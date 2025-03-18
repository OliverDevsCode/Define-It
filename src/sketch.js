let partyCode = 14;
let gameMode = 1;
let canvas;
let p5_elements = [];
let database;
let localPlayer;
let oppPlayer;

function preload(){
  database = loadJSON('src/database/data.json')

}

function setup() {
  canvas = createCanvas(1000, 1000);
  centreCanvas()
  textFont('Consolas')
  textAlign(CENTER)
  localPlayer = new Player('Local');
  oppPlayer = new Player('P5 Player')
  
}

function draw() {
  if(gameMode ==1){
    background(220);
    HomeScreen();
    startButton.mousePressed(()=>{
      changeMode(2);
      isHost = true;
    })
    joinButton.mousePressed(()=>{
      changeMode(2);
      isHost = false;
    })
    gameMode = -1
  }
  if(gameMode == 2){
    background(220);
    displayGame();
    gameMode = -2
  }
}

function centreCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  canvas.position(x, y);
}
