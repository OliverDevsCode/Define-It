//shared data;
let isHost = false;
let shared_game_data;

function joinGame(){
   // Connect using the provided partyCode.
   partyConnect("wss://demoserver.p5party.org", `define-it${partyCode}`,'main', () => {
    console.log("Connected as client");
    
    // Load the shared object without providing defaults so we don't overwrite player1.
    shared_game_data = partyLoadShared('main',"shared_game_data",(shared) => {
      console.log("Shared data is now ready!", shared);
      shared_game_data = shared;

      // Watch for changes
      
      shared_game_data.player2 = { 
        phrase: null,
        topic: null,
        definition: [],
        score: null,
        streak: null 
        }
     
   });

    setTimeout(() => {
      partyWatchShared(shared_game_data, startMultiplayerGame, true);
    }, 2000);

  });

}

function createGame(){
  // partyCode = Math.round((Math.random()*1000)) //uncomment in final
  partyConnect("wss://demoserver.p5party.org", `define-it${partyCode}`,'main', () => {
  console.log("Connected as host");
  console.log("Code",partyCode);

  // Load shared object with default values.
  shared_game_data = partyLoadShared('main',"shared_game_data",(shared) => {
    console.log("Shared data is now ready!", shared);
    shared_game_data = shared;
    // Start watching the shared object for changes.
    partySetShared( shared, { 
      player1: { 
        phrase: null,
        topic: null,
        definition: [],
        score: null,
        streak: null
      },
      player2: { 
        phrase: null,
        topic: null,
        definition: [],
        score: null,
        streak: null 
        }
      });    
    });
  });
  setTimeout(() => {
    partyWatchShared(shared_game_data, startMultiplayerGame, true);
  }, 1000);
}

function getPhrase(){
  let len = database.terms.length;
  let index = Math.round(Math.random()*len)
  return database.terms[index]
}