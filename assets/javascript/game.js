
// This is the Hangman game. The goal of the player is to guess letters
// until you ether guess the hidden word or run out of guesses. The theme 
// will be mario bros.

// There would be a big header at the top,
	// "Mario Hangman"
 // Sub header
	// "press any key to get started",
// Different components of the game
	// Wins - the amount of times you guess the word correctly in time.
	// losses - the amount of times you run out of guesses.
	// guessesLeft - the number of guess you have until you lose.
	// guessesSoFar - guesses made so far starts as an empty array and where wrong guesses are pushed,
	// The Current Word - it would be just the "-------" indicating the hidden word.
		// New random word mario themed picked every game from a array.
		// Every time you get a correct guessed letter with a key up it replaces the 
		// appropriate dash spot on the screen. 
		// Once you guess all of them you win!
	// Letters already guessed - the letters you already choosen.
		// Display the list for user to see.
		// Can't repeatly hit the same letter.
		// Must be a lette.
	// Number of guesses remaining.
		// You start with 10 guesses, deincrement every incorrect letter.
		// Run out of guesses you lose, starts a new game, picks new word.
	// Sound or music - mario bros game sound effects for doing things,
		// a coin noise for each successful guess.
		// A super mario bros 1 board finish song with win,
			// potentialy fire works too.
		



// total wins
var wins = 0;
// total loses
var losses = 0;	
// guesses left
var guessesLeft = 10;
// guesses made so far starts as an empty array and where wrong guesses are pushed,
var guessesSoFar = [];
// the list of words that will be randomly picked to guess.
var wordList = ["Mario", "Luigi", "Peach", "Toad", "coin", "brick",];

document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guessesLeft").innerHTML = guesses;

var mysteryWord = wordList [Math.floor(Math.random()* wordList.length)];

var mysteryLetters = mysteryWord.split("");

document.getElementById("groceryList").innerHTML = mysteryLetters;