function addWins(){



    var wintotal =  document.getElementById("wins");

   
    wintotal.innerText = parseInt(wintotal.innerText,10) + 1

    




}

function addLosses(){

    
    var losstotal =  document.getElementById("losses");

   
    losstotal.innerText = parseInt(losstotal.innerText,10) + 1


}


function loseGuess(){

    var total =  document.getElementById("guesses");

   
    total.innerText = parseInt(total.innerText,10) - 1

}


function resetGame(){

    var letter =  Math.floor(Math.random() * 26);

    randomLetter = letters[letter]
    
    var guesses =  document.getElementById("guesses");
    
    guesses.innerText = 9;

    var soFarText = document.getElementById("soFar");

    soFarText.innerText = ''

}


$(document).bind('keyup',function(evt){
   var letterguessed = String.fromCharCode(evt.keyCode);

   var soFarText = document.getElementById("soFar");


   if(randomLetter.toUpperCase() === letterguessed){
       addWins();
       resetGame();
   }else{
   loseGuess();

   soFarText.append(letterguessed + ",")

   var total =  document.getElementById("guesses");
    if(total.innerText === "0"){
        addLosses();
        resetGame();

    }
   
   }    

   console.log(randomLetter.toUpperCase() + "," + letterguessed)

  


});





var totalGuessLeft = "9";
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var letter = 0
var randomLetter = ''



var losses = 0
var wins = 0

$(document).ready(function(){

var letter =  Math.floor(Math.random() * 26);

randomLetter = letters[letter]

var guesses =  document.getElementById("guesses");

guesses.innerText = totalGuessLeft;


var losstotal =  document.getElementById("losses");

losstotal.innerText = losses;


var wintotal =  document.getElementById("wins");

wintotal.innerText = wins;

});