let gameReady = false;
let random_phrase;

function displayGame(){
  hideElements()
  if(isHost == true){
    createGame();
  }else{
    joinGame();
  }
}

function startMultiplayerGame(){
  if(gameReady != true){
    if(isHost == true){
      localPlayer.turn = true;
      oppPlayer.turn = false;
      random_phrase = getPhrase();
      shared_game_data.player1.phrase = random_phrase;
      shared_game_data.player1.subject = 'Computer Science';
    }else{
      localPlayer.turn = false;
      oppPlayer.turn = true;
      random_phrase = getPhrase();
      shared_game_data.player2.phrase = random_phrase;
      shared_game_data.player2.subject = 'Computer Science';

    }
    gameReady = true
  }
 
  drawGame();
}

function drawGame(){
  if(isHost){
    if(localPlayer.turn == true){
      clear()
      push()
      background(220)
      textSize(30)
      text(`Please Write A Definition For ${random_phrase}`,width/2,height/4)
      //current defintion
      let def = getWriting(local_definition)
      textWrap(WORD)
      text(def,width*0.1,height/2,width*0.8)
      pop();
    }else{
      //guessing draw
    }
    
  }else{
    if(localPlayer.turn == true){
      clear()
      push()
      background(220)
      textSize(30)
      text(`Please Write A Definition For ${random_phrase}`,width/2,height/4)
      pop()
    }else{
      //guesing draw
      //draw definition
      let shared_defintion = shared_game_data.player1.definition;
      let shared_subject = shared_game_data.player1.subject;
      console.log(shared_defintion);
      clear()
      push()
      background(220)
      textSize(30)
      text(`Time to Guess`,width/4,height/4)
      text(`Subject ${shared_subject}`,width/1.5,height/4)
      let def = getWriting(shared_defintion)
      textWrap(WORD)
      text(def,width*0.1,height/2,width*0.8)
      pop()
      
    }
  }
}

function getWriting(arr){
  if(arr != undefined && arr.length > 0){
    let text = '';
    arr.forEach(element => {
      text += element
    });
    return text
  }else{
    return ''
  }
}