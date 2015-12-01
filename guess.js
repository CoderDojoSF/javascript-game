var MAX_GUESSES=6;
var randomNumber = Math.floor((Math.random() * 100) + 1); //picks a random number between 1 and 100

function guessOne(){
  // Get a guess from the player
  var guess = document.getElementById("guess").value;

  // Section 1: winning condition
  // If the user correctly guesses the number we're looking for, we need to show them a text telling them they won.
  // Also, show the user how many guesses it took them to guess the correct number.

  // Section 2: losing condition
  // If the user doesn't guess the correct number, we need to tell them this in a message.
  // Also, show them a text stating that their guess was either higher or lower than the number we're looking for.

  // Section 3: Game ending
  // The game ends when the player has reached the maximum number of guesses without guessing the number we're looking for.
  // Define the end of the game. Show a message to the user that they ran out of guesses and tell them what the number was.
  // Hide the input field and guess button so they can't take another guess.

  // Lend a hand by clearing out their last guess
  document.getElementById("guess").value = "";
}
