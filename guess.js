var guessCount = 0;
var MAX_GUESSES=6;
var randomNumber = Math.floor((Math.random() * 100) + 1); //picks a random number between 1 and 100

function guessOne(){
  // Get a guess from the player
  var guess = document.getElementById("guess").value;

  if (guess == randomNumber){
    document.getElementById("message").innerHTML= "It took you " +guessCount+ " guesses";
    return;  // prevents saying 'ran out' if guessed in last round
  } else if (guess < randomNumber){
    document.getElementById("message").innerHTML= "Guess again. The number is higher than "+guess;
  } else {
    document.getElementById("message").innerHTML= "Guess again. The number is lower than "+guess;
  }
  guessCount += 1;

  // Section 3: Game ending
  // The game ends when the player has reached the maximum number of guesses without guessing the number we're looking for.
  // Define the end of the game. Show a message to the user that they ran out of guesses and tell them what the number was.
  // Hide the input field and guess button so they can't take another guess.

  // Lend a hand by clearing out their last guess
  document.getElementById("guess").value = "";
}
