
function start(){
var wins = 0;
var losses = 0;	
var guesses = 10;
var wordList = ["crackers", "beans", "groundbeef", "rice", "coffee", "soda",];

	document.getElementById("winScore").innerHTML = wins;
	document.getElementById("lossScore").innerHTML = losses;
	document.getElementById("guessesLeft").innerHTML = guesses;

var mysteryWord = wordList [Math.floor(Math.random()* wordList.length)];

var mysteryLetters = mysteryWord.split("");

document.getElementById("groceryList").innerHTML = mysteryLetters;



}

