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

  if (guessCount >= MAX_GUESSES) {
    document.getElementById("message").innerHTML= "Sorry, you ran out of guesses.  The number was " + randomNumber;
    document.getElementById("game").style.visibility="hidden";
  }

  // Lend a hand by clearing out their last guess
  document.getElementById("guess").value = "";
}
