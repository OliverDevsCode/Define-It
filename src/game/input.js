let local_definition = [];

function keyPressed() {
  if (gameMode === -2) {
    if (keyCode === BACKSPACE) {
      local_definition.pop(); // Correctly removes the last item
      console.log(JSON.stringify(local_definition));
      if (isHost && localPlayer.turn) {
        shared_game_data.player1.definition = [...local_definition]; // Avoid reference issues
      }
      if (!isHost && localPlayer.turn) {
        shared_game_data.player2.definition = [...local_definition]; // Avoid reference issues
      }
      
    } else if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || keyCode == 32) {
      local_definition.push(key.toLowerCase()); // Ensures correct letter case
      console.log(JSON.stringify(local_definition));

      if (isHost && localPlayer.turn) {
        shared_game_data.player1.definition = [...local_definition]; // Avoid reference issues
      }
      if (!isHost && localPlayer.turn) {
        shared_game_data.player2.definition = [...local_definition]; // Avoid reference issues
      }

      drawGame();
    }
  }
}
