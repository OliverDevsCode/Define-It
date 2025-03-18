let startButton;
let joinButton;
function HomeScreen(){
  hideElements()
  if(startButton == null && joinButton == undefined){
    startButton = createCustomButton("Start Game",(width/4)-width/10,height/2,'#2e63bd');
    joinButton = createCustomButton("Join Game",width-width/3,height/2,'#2ebd7d');
    p5_elements.push(startButton,joinButton);
  }else{
    startButton.show();
    joinButton.show();
  }
  push()
  textStyle(BOLD)
  textSize(30)
  text("Define-it!",width/2,height/5)
  pop()
}

function changeMode(mode){
  gameMode = mode
}
