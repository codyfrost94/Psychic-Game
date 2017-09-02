var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = computerChoices[[Math.floor(Math.random() * computerChoices.length)]];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var playerGuesses =[]


document.onkeyup = function(event){

	var playerGuess = event.key;
	console.log(playerGuess)
	console.log(computerGuess)

	if (playerGuess === computerGuess) {
			wins++;
			document.getElementById("winCounter").innerHTML = wins;
			guessesLeft = 10;
			document.getElementById("guessCounter").innerHTML = guessesLeft
			computerGuess = computerChoices[[Math.floor(Math.random() * computerChoices.length)]]
			playerGuesses.length=0
			document.getElementById("guessList").innerHTML = playerGuesses

		}
	
	else if (guessesLeft === 1){
		losses++;
		document.getElementById("lossCounter").innerHTML = losses;
		guessesLeft = 10;
		document.getElementById("guessCounter").innerHTML = guessesLeft;
		computerGuess = computerChoices[[Math.floor(Math.random() * computerChoices.length)]];
		playerGuesses.length=0;
		document.getElementById("guessList").innerHTML = playerGuesses



	}
	
	else {
		guessesLeft--;
		document.getElementById("guessCounter").innerHTML = guessesLeft
		playerGuesses.push(playerGuess)
		document.getElementById("guessList").innerHTML = playerGuesses


		
	}
	console.log(guessesLeft);
	console.log(playerGuesses);

}