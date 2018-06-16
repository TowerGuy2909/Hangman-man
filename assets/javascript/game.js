
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
		// New random word mario themed picked every game from a array wordList.
		// takes the mysteryWord chosen and splits it in to an array of mysteryLetters.
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
// prints out total wins in index.html
document.getElementById("wins").innerHTML = wins;
// prints out total losses in index.html
document.getElementById("losses").innerHTML = losses;
// prints out guesses left in index.html
document.getElementById("guessesLeft").innerHTML = guessesLeft;
// random chosen word from the word list
var mysteryWord = wordList [Math.floor(Math.random()* wordList.length)];
// takes the mysteryWord chosen and splits it in to an array of mysteryLetters
var mysteryLetters = mysteryWord.split("");
// take every letter in the mysteryLetters array and replace them with dashes.
for (var i = 0; i < mysteryLetters.length; i++){
	var dashes = [];
	mysteryLetters[i] = "-";
	dashes.push(mysteryLetters);
	dashes = dashes.join("");

}
console.log(dashes)
document.getElementById("mysteryLetters").innerHTML = dashes;
// prints out to the index.html the mysteryLetters
// document.getElementById("mysteryLetters").innerHTML = mysteryLetters;
// type a letter for a guess,
function myKeyPress(e){
    var keynum;
    if(window.event) { // IE                    
      keynum = e.keyCode;
    } else if (e.which){ // Netscape/Firefox/Opera                   
      keynum = e.which;
    }
    // if its not in the array "Not a letter, guess again"
    if (letter.includes(String.fromCharCode(keynum)) === false){
        console.log("Not a letter, guess again");
        alert("Not a letter, guess again");
    // if you've already guessed the letter "already guessed, try again"   
    } else if (guessesSoFar.includes(String.fromCharCode(keynum)) === true) {    
        console.log("already guessed, try again")
        alert("already guessed, try again");
    // if its right,    
    } else if (randomLetter === String.fromCharCode(keynum)){
        // you win!
        alert("You Win!");
        console.log("You Win!")
        // increment wins,
        wins = wins + 1;
        console.log("Your wins: " + wins);
        // prints out win on index.html
        document.getElementById("wins").innerHTML = wins;
        // game restarts, picks new random letter,
        randomLetter = letter[Math.floor(Math.random()* letter.length)];
        console.log(randomLetter);
        // clears guesses made array,
        guessesSoFar = [];
        // changes guesses left to 10,
        guessesLeft = 10;
    } else {
        // if its wrong,
        alert("wrong letter");
        // deincrement the guesses left,
        guessesLeft = guessesLeft - 1;
        console.log("Your guesses left: " + guessesLeft);
        // prints out guessesLeft on index.html
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        // else if guess left equals 0,
        if (guessesLeft === 0){
            // you lose,
            loses = loses + 1;
            console.log("You've no guesses left. You lose");
            // prints out loses on index.html
            document.getElementById("loses").innerHTML = loses;
            // game restarts, picks new random letter,
            randomLetter = letter[Math.floor(Math.random()* letter.length)];
            console.log(randomLetter);
            // clears guesses made array,
            guessesSoFar = [];
            // changes guesses left to 10,
            guessesLeft = 10;
        } else {
            // push wrong letter to guesses made array,
            guessesSoFar.push(String.fromCharCode(keynum));
            console.log(guessesSoFar);
            // prints out guessesSoFar on index.html
            document.getElementById("guessesSoFar").innerHTML = guessesSoFar;
        }
    }
}