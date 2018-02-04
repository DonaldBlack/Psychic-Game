

guessLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Randomize function. Browser will pick a random letter.

function randomizeLetters () {

//Create a random number from the letters array
	// generate a random number from the array.
	number = Math.floor((Math.random() * guessLetters.length));
	console.log(guessLetters[number]);
	console.log(number);
	//for guessing function
	letter=guessLetters[number];
	
	console.log(letter);

};


// This array stores the letters the user guessed from the pushed keys.
lettersGuessedArray = [];
//This event determines if the correct letter is guessed and renders a winning situation.
addEventListener("keypress", function guessFunction(event) {
	guessesLeft = document.getElementById("guesses_remaining").innerHTML;
	number = parseInt(guessesLeft);
	wins = document.getElementById("wins").innerHTML;
	score = parseInt(wins);
	losses = document.getElementById("losses").innerHTML;
	losing = parseInt(losses);
    key = String.fromCharCode(event.keyCode).toLowerCase();
    
	if (key == letter) {
		document.getElementById("wins").innerHTML = score++;
		alert("How did you do that! You might be psychic!");
		number = 10;
        randomizeLetters ();
        
	//If there are guesses left, the guesses left will count down, when the user guesses incorrectly.	
	} else if (number > 0) {
		lettersGuessedArray.push(key);
		document.getElementById("guesses_remaining").innerHTMl = number --;
		document.getElementById("guessed_letters").innerHTMl = lettersGuessedArray;
		alert("Wrong, WRONG, wrong, WRONG");
	} else {
		document.getElementById("losses").innerHTML = losing ++;
		alert("You lost. Play again, if you wish. Here's a new letter!");
		randomizeLetters();
		number = 10;
			for (i = 0; i < lettersGuessedArray.length; i++) {
			lettersGuessedArray.splice(i);
			}
    }
    
	document.getElementById("guesses_remaining").innerHTML = number;
	document.getElementById("guessed_letters").innerHTML = lettersGuessedArray;
	document.getElementById("wins").innerHTML = score++;
	document.getElementById("losses").innerHTML = losing++;
	console.log(key);
	console.log(lettersGuessedArray);
	console.log(letter);

	
}); 