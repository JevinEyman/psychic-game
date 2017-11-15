

//Arrays and Variables 
//==============================================================
var computerChoices = ["a", "b", "c", "d", "e","f","g","h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Creating variables to hold the number of wins and losses. They start at 0. 
    var wins = 0;
    var losses = 0;
    var guesses = 5;
    var soFar = document.getElementById("guessSoFar");
    var lossCount = document.getElementById("lossCounter");
    var winCount = document.getElementById("winCounter");
    var guessCount = document.getElementById("guessLeft");
    var guessSoFar = [];
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];


    function game1(){
	computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
     };

     document.onkeyup = function(event) {

    var userGuess = event.key;
    guessSoFar.push(userGuess);
	

//console.log(guessSoFar);

console.log(computerGuess);
 console.log(userGuess);

if (computerGuess == userGuess){
	wins++;
} else {
	losses++;
	 
	guesses--;
	
}
if (guesses == -1)
{
	alert("You Lost!");
	game1();
	guesses = 5;
	guessSoFar = [];

};
// console.log(wins);
// console.log(losses);
lossCount.innerHTML = losses
winCount.innerHTML = wins
guessCount.innerHTML = guesses
soFar.innerHTML = guessSoFar


};


//Functions
//===============================================================





//Main Process
//===============================================================




      